import { test } from 'node:test';
import assert from 'node:assert/strict';
import { DatabaseSync } from 'node:sqlite';
import { readFileSync } from 'node:fs';
import { randomUUID } from 'node:crypto';
import { ASSESSMENTS, SCALES, validateRatings, buildAssessmentReport, normalizePlacement, describePlacement } from '../public/calificador/preschool-assessment.js';
import { registerAdmission } from '../lib/preschool-registry.ts';
function database(){
 const sqlite=new DatabaseSync(':memory:');sqlite.exec(readFileSync('drizzle/0000_previous_wasp.sql','utf8'));sqlite.exec(readFileSync('drizzle/0001_typical_tarot.sql','utf8'));sqlite.exec(readFileSync('drizzle/0002_tense_gamma_corps.sql','utf8'));sqlite.exec(readFileSync('drizzle/0003_serious_stark_industries.sql','utf8'));
 return {sqlite,prepare(sql){return {bind(...values){return {async run(){return sqlite.prepare(sql).run(...values)},async first(){return sqlite.prepare(sql).get(...values)}}}}}};
}
test('all three results persist for each preschool level with an automatic date',async()=>{
 const db=database();
 for(const level of ['prekinder','kinder','transicion'])for(const decision of ['aprobado','compromiso','negado']){
  const input={student:'  Estudiante   de Prueba  ',level,decision,requestId:randomUUID()};
  const r=await registerAdmission(db,input,'teacher-1');assert.equal(r.status,200);assert.equal(r.body.record.student,'Estudiante de Prueba');assert.equal(r.body.record.level,level);assert.equal(r.body.record.decision,decision);assert.ok(Date.parse(r.body.record.created_at));assert.ok(!('created_by' in r.body.record));
 }
 assert.equal(db.sqlite.prepare('SELECT COUNT(*) AS n FROM preschool_admissions').get().n,9);
});
test('retries receive the same number without duplicate rows and cannot change an existing decision',async()=>{
 const db=database(),input={student:'Ana',level:'kinder',decision:'aprobado',requestId:randomUUID()};
 const [first,second]=await Promise.all([registerAdmission(db,input,'teacher'),registerAdmission(db,input,'teacher')]);
 assert.equal(first.body.record.id,second.body.record.id);assert.equal(db.sqlite.prepare('SELECT COUNT(*) AS n FROM preschool_admissions').get().n,1);
 assert.equal((await registerAdmission(db,{...input,decision:'negado'},'teacher')).status,409);
 assert.equal((await registerAdmission(db,input,'different-teacher')).status,409);
 assert.equal(db.sqlite.prepare('SELECT decision FROM preschool_admissions').get().decision,'aprobado');
});
test('invalid and empty entries are rejected without writing any data',async()=>{
 const db=database(),input={student:'Ana',level:'kinder',decision:'aprobado',requestId:randomUUID()};
 for(const patch of [{student:''},{student:'   '},{student:'A'.repeat(151)},{level:'12'},{decision:'anything'},{requestId:'bad'}])assert.equal((await registerAdmission(db,{...input,...patch},'teacher')).status,400);
 assert.equal((await registerAdmission(db,null,'teacher')).status,400);
 assert.equal(db.sqlite.prepare('SELECT COUNT(*) AS n FROM preschool_admissions').get().n,0);
});
test('names with quotes are stored as data, while the table is preserved',async()=>{
 const db=database(),student="O'Connor <script>alert(1)</script>";
 const r=await registerAdmission(db,{student,level:'transicion',decision:'compromiso',requestId:randomUUID()},'teacher');assert.equal(r.body.record.student,student);assert.equal(db.sqlite.prepare('SELECT COUNT(*) AS n FROM preschool_admissions').get().n,1);
});

test('pedagogical observations persist exactly with teacher and period, including retries',async()=>{
 const db=database(),input={student:'María José',level:'kinder',decision:'compromiso',requestId:randomUUID(),teacher:'Docente de prueba',period:'2027',observations:{language:'Reconoce vocales.\nEscribe su nombre con apoyo.',math:'Cuenta hasta diez.',strengthening:'Escritura autónoma.',recommendations:'Lectura compartida.',concept:'Acompañamiento familiar.'}};
 const r=await registerAdmission(db,input,'teacher');assert.equal(r.status,200);assert.deepEqual(JSON.parse(r.body.record.observations),input.observations);assert.equal(r.body.record.teacher,input.teacher);assert.equal(r.body.record.period,'2027');
 assert.equal((await registerAdmission(db,input,'teacher')).body.record.id,r.body.record.id);
 assert.equal((await registerAdmission(db,{...input,observations:{...input.observations,math:'Otro texto'}},'teacher')).status,409);
 assert.equal((await registerAdmission(db,{...input,requestId:randomUUID(),observations:{language:'A'.repeat(6001)}},'teacher')).status,400);
});

const ratingsFor=(level,status)=>Object.fromEntries(ASSESSMENTS[level].map(item=>[item.id,status]));
test('guided ratings and general notes persist and generate a matching report for each grade',async()=>{
 const db=database();
 for(const level of ['prekinder','kinder','transicion']){
  const ratings=Object.fromEntries(ASSESSMENTS[level].map((item,i)=>[item.id,Object.keys(SCALES)[i%4]]));
  const input={student:'Estudiante de prueba',level,decision:'compromiso',requestId:randomUUID(),observations:{general:'Participa con interés.\nSe ofreció una pista verbal.'},assessment:{version:1,ratings}};
  const r=await registerAdmission(db,input,'teacher');assert.equal(r.status,200);assert.deepEqual(JSON.parse(r.body.record.assessment),input.assessment);assert.equal(r.body.analysis.generalNotes,input.observations.general);assert.equal(r.body.analysis.decision,'Aceptado con compromiso');
  assert.equal(r.body.analysis.rows.length,ASSESSMENTS[level].length);assert.equal(r.body.analysis.needs.length,ASSESSMENTS[level].filter(item=>['proceso','apoyo'].includes(ratings[item.id])).length);
  assert.equal((await registerAdmission(db,input,'teacher')).body.record.id,r.body.record.id);
  const changed={...ratings,[ASSESSMENTS[level][0].id]:'proceso'};
  assert.equal((await registerAdmission(db,{...input,assessment:{version:1,ratings:changed}},'teacher')).status,409);
 }
});
test('no observed skills do not generate deficits, strengths, refuerzo activities or automatic admission decisions',()=>{
 for(const level of ['prekinder','kinder','transicion']){
  const r=buildAssessmentReport(level,ratingsFor(level,'no_observado'),'','negado');assert.equal(r.observed,0);assert.equal(r.strengths.length,0);assert.equal(r.needs.length,0);assert.equal(r.pending.length,ASSESSMENTS[level].length);assert.equal(r.decision,'No aceptado');assert.match(r.conclusion,/no permite formular conclusiones/);
 }
});
test('fully autonomous records only show strengths, and preserve a human-selected result',()=>{
 for(const decision of ['aprobado','compromiso','negado']){
  const r=buildAssessmentReport('transicion',ratingsFor('transicion','autonomo'),'',decision);assert.equal(r.needs.length,0);assert.equal(r.pending.length,0);assert.equal(r.counts.autonomo,ASSESSMENTS.transicion.length);assert.ok(r.strengths.length>0);
  assert.equal(r.decision,{aprobado:'Aceptado',compromiso:'Aceptado con compromiso',negado:'No aceptado'}[decision]);
 }
});
test('recommendations target only the rated skill and support level',()=>{
 const ratings=ratingsFor('transicion','autonomo');ratings['t-restas']='proceso';ratings['t-lectura']='apoyo';ratings['t-sumas']='no_observado';
 const r=buildAssessmentReport('transicion',ratings);assert.deepEqual(r.needs.map(item=>item.id),['t-restas','t-lectura']);assert.match(r.needs[0].practice,/retiren la cantidad/);assert.equal(r.pending[0].id,'t-sumas');assert.ok(!r.needs.some(item=>item.id==='t-sumas'));
});
test('incomplete, wrong-grade and unrecognized ratings cannot be registered',async()=>{
 const db=database(),input={student:'Ana',level:'kinder',decision:'aprobado',requestId:randomUUID()};
 for(const ratings of [{},ratingsFor('prekinder','autonomo'),{...ratingsFor('kinder','autonomo'),'unexpected':'autonomo'},{...ratingsFor('kinder','autonomo'),'k-colores':['autonomo']},{...ratingsFor('kinder','autonomo'),'k-colores':'inventado'}]){
  assert.equal(validateRatings('kinder',ratings),false);assert.equal((await registerAdmission(db,{...input,assessment:{version:1,ratings}},'teacher')).status,400);
 }
 assert.equal(validateRatings('toString',{}),false);assert.equal(db.sqlite.prepare('SELECT COUNT(*) AS n FROM preschool_admissions').get().n,0);
});

test('grade recommendations persist, retry without duplicates and remain separate from admission',async()=>{
 const db=database();
 for(const placement of [{kind:'aspira',target:'',reason:'Continuar el proceso en el grado solicitado.'},{kind:'inferior',target:'Prekinder',reason:'Recomendación para el ingreso.\nAcompañar la adaptación.'},{kind:'superior',target:'Transicion',reason:'Valorar el ingreso al grado superior.'},{kind:'pendiente',target:'',reason:'Completar la observación.'}]){
  const input={student:'Estudiante de prueba',level:'kinder',decision:'compromiso',requestId:randomUUID(),assessment:{version:1,ratings:ratingsFor('kinder','autonomo')},placement};
  const result=await registerAdmission(db,input,'teacher');assert.equal(result.status,200);const saved=JSON.parse(result.body.record.placement);assert.deepEqual(saved,normalizePlacement('kinder',placement));assert.equal(result.body.record.decision,'compromiso');assert.equal(result.body.analysis.decision,'Aceptado con compromiso');assert.equal((await registerAdmission(db,input,'teacher')).body.record.id,result.body.record.id);
  assert.equal((await registerAdmission(db,{...input,placement:{...placement,reason:'Un cambio de justificación.'}},'teacher')).status,409);
 }
});
test('grade recommendation text uses the selected direction and exact target',()=>{
 assert.match(describePlacement('kinder',{kind:'aspira'}).text,/grado Kínder, al que aspira/);
 assert.match(describePlacement('kinder',{kind:'inferior',target:'prekinder'}).text,/grado Prekínder, inferior al grado Kínder/);
 assert.match(describePlacement('transicion',{kind:'superior',target:'1°'}).text,/grado Primero, superior al grado Transición/);
 assert.equal(normalizePlacement('prekinder',{kind:'inferior',target:'Párvulos',reason:'Indicación institucional.'}).target,'Párvulos');
 assert.match(describePlacement('kinder',{kind:'pendiente'}).text,/pendiente de definir/);
 assert.equal(describePlacement('kinder',{}),null);
});
test('invalid recommendation directions, missing targets and excessive notes are rejected',async()=>{
 const db=database(),input={student:'Ana',level:'kinder',decision:'aprobado',requestId:randomUUID()};
 for(const placement of [null,{}, {kind:['aspira']},{kind:'inferior',target:'Transición'},{kind:'superior',target:'Prekínder'},{kind:'superior',target:'Kínder'},{kind:'inferior',target:''},{kind:'superior',target:'A'.repeat(81)},{kind:'aspira',reason:'A'.repeat(3001)}])assert.equal((await registerAdmission(db,{...input,placement},'teacher')).status,400);
 assert.equal(db.sqlite.prepare('SELECT COUNT(*) AS n FROM preschool_admissions').get().n,0);
});
