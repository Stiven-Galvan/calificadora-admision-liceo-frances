import { ASSESSMENTS, validateRatings, buildAssessmentReport, normalizePlacement } from '../public/calificador/preschool-assessment.js';
export const LEVELS = ['prekinder','kinder','transicion'];
export const DECISIONS = ['aprobado','compromiso','negado'];
const observationKeys=['language','math','strengthening','recommendations','concept'];
export async function registerAdmission(db: any, input: any, userId: string) {
 const student = typeof input?.student === 'string' ? input.student.trim().replace(/\s+/g,' ') : '';
 const level = input?.level;
 const decision = input?.decision;
 const requestId = input?.requestId;
 if (!student || student.length > 150 || /[\u0000-\u001f\u007f]/.test(student) || !LEVELS.includes(level) || !DECISIONS.includes(decision) || typeof requestId !== 'string' || !/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(requestId)) {
  return {status:400,body:{error:'Escribe el nombre completo y selecciona un nivel y un resultado válidos.'}};
 }
 const teacher=input.teacher??'',period=input.period??'';
 if(typeof teacher!=='string'||teacher.length>150||typeof period!=='string'||period.length>30||/[\u0000-\u001f\u007f]/.test(teacher+period))return {status:400,body:{error:'Revisa el nombre del docente y el periodo académico.'}};
 const source=input.observations??{};
 if(typeof source!=='object'||Array.isArray(source)||source===null)return {status:400,body:{error:'Revisa las observaciones pedagógicas.'}};
 const observations:Record<string,string>={};
 for(const key of observationKeys){const text=source[key]??'';if(typeof text!=='string'||text.length>6000||/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/.test(text))return {status:400,body:{error:'Cada observación admite hasta 6000 caracteres de texto.'}};observations[key]=text.trim();}
 if(source.general!==undefined){const text=source.general;if(typeof text!=='string'||text.length>6000||/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/.test(text))return {status:400,body:{error:'Las observaciones generales admiten hasta 6000 caracteres.'}};observations.general=text.trim();}
 let assessment='{}';
 if(input.assessment!==undefined){
  if(input.assessment?.version!==1||!validateRatings(level,input.assessment?.ratings))return {status:400,body:{error:'Completa una opción por habilidad del grado seleccionado. Usa No observado cuando corresponda.'}};
  const ratings=Object.fromEntries(ASSESSMENTS[level as keyof typeof ASSESSMENTS].map((item:{id:string})=>[item.id,input.assessment.ratings[item.id]]));
  assessment=JSON.stringify({version:1,ratings});
 }
 let placement='{}';
 if(input.placement!==undefined){try{const value=normalizePlacement(level,input.placement);if(!value)throw new Error('Selecciona una recomendación de grado válida.');placement=JSON.stringify(value);}catch(error){return {status:400,body:{error:error instanceof Error?error.message:'Revisa la recomendación del grado de ingreso.'}};}}
 const encoded=JSON.stringify(observations);
 const now = new Date().toISOString();
 await db.prepare('INSERT INTO preschool_admissions (request_id,student,level,decision,created_at,created_by,teacher,period,observations,assessment,placement) VALUES (?,?,?,?,?,?,?,?,?,?,?) ON CONFLICT(request_id) DO NOTHING').bind(requestId,student,level,decision,now,userId,teacher.trim(),period.trim(),encoded,assessment,placement).run();
 const row = await db.prepare('SELECT id,student,level,decision,created_at,created_by,teacher,period,observations,assessment,placement FROM preschool_admissions WHERE request_id = ?').bind(requestId).first();
 if (!row) throw new Error('Registration not confirmed');
 if (row.student!==student || row.level!==level || row.decision!==decision || row.created_by!==userId || row.teacher!==teacher.trim() || row.period!==period.trim() || row.observations!==encoded || row.assessment!==assessment || row.placement!==placement) return {status:409,body:{error:'La solicitud ya corresponde a otro resultado. Cierra el formulario y vuelve a abrirlo.'}};
 const {created_by: _author,...record}=row;
 return {status:200,body:{record,analysis:assessment==='{}'?null:buildAssessmentReport(level,JSON.parse(assessment).ratings,observations.general||'',decision)}};
}
