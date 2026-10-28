import { buildAssessmentReport, describePlacement } from '../public/calificador/preschool-assessment.js';
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
export type PreschoolRecord = {id:number;student:string;level:string;decision:string;created_at:string;teacher?:string;period?:string;observations?:string;assessment?:string;placement?:string};
const levels:Record<string,string>={prekinder:'Prekínder',kinder:'Kínder',transicion:'Transición'};
const decisions:Record<string,string>={aprobado:'Aceptado',compromiso:'Aceptado con compromiso',negado:'No aceptado'};
export function preschoolReference(record:PreschoolRecord){
 const year=new Intl.DateTimeFormat('en',{year:'numeric',timeZone:'America/Bogota'}).format(new Date(record.created_at));
 return `PRE-${year}-${String(record.id).padStart(6,'0')}`;
}
export async function createPreschoolResultPdf(record:PreschoolRecord){
 if(!levels[record.level]||!decisions[record.decision])throw new Error('Invalid admission result');
 const pdf=await PDFDocument.create();
 const font=await pdf.embedFont(StandardFonts.Helvetica),bold=await pdf.embedFont(StandardFonts.HelveticaBold);
 const ink=rgb(0,0,0),muted=rgb(.35,.35,.35),blue=rgb(.16,.29,.45);
 pdf.setTitle('Informe de resultado prueba de admisión '+preschoolReference(record));pdf.setAuthor('Liceo Francés Jean Du Plessis');
 let page=pdf.addPage([612,792]),y=600;
 const draw=(value:string,x:number,baseline:number,size=11,heavy=false,color=ink)=>page.drawText(value,{x,y:baseline,size,font:heavy?bold:font,color});
 const newPage=()=>{page=pdf.addPage([612,792]);draw('LICEO FRANCÉS JEAN DU PLESSIS',50,750,10,true);draw('Informe de resultado prueba de admisión · Continuación',50,730,10,false,muted);y=700;};
 const ensure=(height:number)=>{if(y-height<94)newPage();};
 function paragraph(value:string,size=11,heavy=false){
  const face=heavy?bold:font;
  for(const sourceLine of value.normalize('NFC').replace(/\r\n?/g,'\n').split('\n')){
   if(!sourceLine.trim()){ensure(size*1.5);y-=size*1.5;continue;}
   let line='';
   const emit=()=>{ensure(size*1.5);draw(line,50,y,size,heavy);y-=size*1.5;line='';};
   for(const word of sourceLine.trim().split(/\s+/)){
    if(face.widthOfTextAtSize(line?(line+' '+word):word,size)>512&&line)emit();
    for(const char of (line?' '+word:word)){
     if(face.widthOfTextAtSize(line+char,size)>512&&line)emit();
     line+=char;
    }
   }
   if(line)emit();
  }
  y-=8;
 }
 function heading(value:string){ensure(75);y-=6;draw(value,50,y,12,true,blue);y-=23;}
 const placement=describePlacement(record.level,JSON.parse(record.placement||'{}'));
 function placementSection(title:string){
  heading(title);
  paragraph('Grado al que aspira: '+levels[record.level],11,true);
  if(!placement){paragraph('No se registró una recomendación del grado de ingreso.');return;}
  if(placement.target)paragraph('Grado recomendado: '+placement.target,11,true);
  paragraph(placement.text);
  if(placement.reason){paragraph('Justificación y recomendaciones',11,true);paragraph(placement.reason);}
 }
 let observations:Record<string,string>={};
 if(record.observations){const parsed=JSON.parse(record.observations);if(parsed&&typeof parsed==='object')observations=parsed;}
 const observation=(key:string)=>observations[key]?.trim()||'No se registraron observaciones en este apartado.';
 const center=(value:string,baseline:number,size:number)=>draw(value,(612-bold.widthOfTextAtSize(value,size))/2,baseline,size,true,blue);
 center('LICEO FRANCÉS JEAN DU PLESSIS',750,12);
 center('INFORME DE RESULTADO PRUEBA DE ADMISIÓN',720,16);
 center('Grado para el que presenta la prueba: '+levels[record.level],694,11);
 const date=new Intl.DateTimeFormat('es-CO',{day:'2-digit',month:'2-digit',year:'numeric',timeZone:'America/Bogota'}).format(new Date(record.created_at));
 function cellLines(value:string,width:number){
  const result:string[]=[];let line='';
  for(const word of value.split(/\s+/)){
   if(font.widthOfTextAtSize(line?line+' '+word:word,10)>width&&line){result.push(line);line='';}
   for(const char of (line?' '+word:word)){if(font.widthOfTextAtSize(line+char,10)>width&&line){result.push(line);line='';}line+=char;}
  }
  if(line)result.push(line);return result;
 }
 let tableTop=672;
 for(const [left,right] of [['Estudiante: '+record.student,'Fecha: '+date],['Docente: '+(record.teacher||'No registrado'),'Periodo: '+(record.period||'No registrado')]]){
  const a=cellLines(left,310),b=cellLines(right,175),height=Math.max(30,Math.max(a.length,b.length)*14+16);
  page.drawRectangle({x:50,y:tableTop-height,width:512,height,borderWidth:.5,borderColor:rgb(.55,.55,.55)});
  page.drawLine({start:{x:378,y:tableTop},end:{x:378,y:tableTop-height},thickness:.5,color:rgb(.55,.55,.55)});
  a.forEach((line,i)=>draw(line,58,tableTop-17-i*14,10));b.forEach((line,i)=>draw(line,386,tableTop-17-i*14,10));tableTop-=height;
 }
 y=tableTop-24;
 paragraph('Resultado de admisión: '+decisions[record.decision],12,true);
 const assessment=record.assessment?JSON.parse(record.assessment):{};
 if(assessment.version===1){
  const report=buildAssessmentReport(record.level,assessment.ratings,observations.general||'',record.decision);
  heading('1. Panorama del desempeño');
  paragraph(report.overview);
  paragraph('Autónomo: '+report.counts.autonomo+'     Con apoyo: '+report.counts.apoyo+'     En proceso: '+report.counts.proceso+'     No observado: '+report.counts.no_observado,10,true);
  paragraph('Las selecciones describen el apoyo observado en actividades específicas. No constituyen una calificación porcentual ni un diagnóstico. No observado significa que falta evidencia y no se interpreta como dificultad.',10);
  heading('2. Resultados por área');
  for(const area of report.areas){heading(area.name);paragraph(area.narrative);}
  heading('3. Fortalezas observadas');
  if(report.strengths.length)for(const item of report.strengths){paragraph(item.area,11,true);paragraph(item.text);}
  else paragraph('No se registraron desempeños autónomos en esta valoración. Esto no significa que el estudiante carezca de capacidades; conviene reconocer los avances con apoyo y observarlo en otras actividades.');
  heading('4. Aspectos por fortalecer y recomendaciones');
  paragraph('Las actividades siguientes corresponden a las habilidades marcadas Con apoyo o En proceso. El docente puede ajustar el acompañamiento según la respuesta del estudiante.');
  if(report.needs.length)for(const item of report.needs){ensure(95);paragraph(item.title+' ('+item.status+')',11,true);paragraph(item.text);paragraph('Actividad sugerida: '+item.practice);}
  else paragraph('No se registraron habilidades Con apoyo o En proceso. Si hay habilidades sin observar, completa primero su valoración; en los desempeños autónomos puedes ampliar las actividades.');
  if(report.pending.length){heading('Habilidades pendientes de observación');paragraph('No se interpretan como errores ni dificultades. Se requiere otra oportunidad de observación para:');for(const item of report.pending)paragraph('- '+item.label);}
  heading('5. Observaciones generales del docente');paragraph(report.generalNotes||'No se registraron observaciones generales adicionales.');
  heading('6. Acompañamiento en casa');
  paragraph('1. Elijan una habilidad y una actividad sugerida por ocasión.\n2. Permitan un primer intento y ofrezcan una pista o un ejemplo cuando lo necesite.\n3. Repitan con otros materiales y reduzcan la ayuda gradualmente.\n4. Compartan con el docente un ejemplo de avance y aquello que todavía requiere acompañamiento.');
  heading('7. Concepto final');paragraph(report.conclusion);paragraph('Concepto final: '+decisions[record.decision]+'.',11,true);
  placementSection('8. Recomendación del grado de ingreso');
  let detailHeight=58;
  for(const row of report.rows){
   const values:string[]=[row.area+' / Act. '+row.activity,row.label,row.ratingLabel];
   detailHeight+=Math.max(...values.map((value,i)=>cellLines(value,[138,238,100][i]).length))*14+12;
  }
  if(y-detailHeight<94)newPage();
  heading('9. Detalle de la valoración por habilidad');
  const columns=[{x:50,w:150},{x:200,w:250},{x:450,w:112}];
  const tableHeader=()=>{const top=y;page.drawRectangle({x:50,y:top-29,width:512,height:29,color:rgb(.91,.94,.97)});draw('Área / actividad',56,top-18,9,true);draw('Habilidad observada',206,top-18,9,true);draw('Registro docente',456,top-18,9,true);y-=29;};
  tableHeader();
  for(const row of report.rows){
   const values=[row.area+' / Act. '+row.activity,row.label,row.ratingLabel];const wrapped=values.map((value,i)=>cellLines(value,columns[i].w-12));const height=Math.max(...wrapped.map(lines=>lines.length))*14+12;
   if(y-height<94){newPage();tableHeader();}
   const top=y;
   columns.forEach((col,i)=>{page.drawRectangle({x:col.x,y:top-height,width:col.w,height,borderWidth:.4,borderColor:rgb(.8,.82,.85)});wrapped[i].forEach((line,j)=>draw(line,col.x+6,top-16-j*14,10));});y-=height;
  }
 }else{
 heading('1. Resultados del proceso de evaluación');
 paragraph('Durante la aplicación de la prueba de admisión para el grado '+levels[record.level]+', se registraron las siguientes observaciones sobre el proceso de desarrollo de habilidades del estudiante.');
 heading('Área de Lenguaje');paragraph(observation('language'));
 heading('Área de Matemáticas');paragraph(observation('math'));
 heading('2. Aspectos por fortalecer');paragraph(observation('strengthening'));
 heading('3. Recomendaciones pedagógicas');paragraph(observation('recommendations'));
 heading('4. Concepto final');
 paragraph('Concepto final: '+decisions[record.decision],11,true);
 if(observations.concept?.trim())paragraph(observations.concept.trim());
 else paragraph(record.decision==='aprobado'
  ?'El estudiante ha sido aceptado para el grado '+levels[record.level]+'.'
  :record.decision==='compromiso'
  ?'El estudiante ha sido aceptado con compromiso para el grado '+levels[record.level]+'. Los compromisos de acompañamiento corresponden a las recomendaciones comunicadas por la institución.'
  :'El estudiante no ha sido aceptado para el grado '+levels[record.level]+'. La familia puede solicitar orientación a la institución sobre el resultado de la valoración.');
 placementSection('5. Recomendación del grado de ingreso');
 }
 const pages=pdf.getPages();
 for(let i=0;i<pages.length;i++){
  page=pages[i];page.drawLine({start:{x:50,y:65},end:{x:562,y:65},thickness:.5,color:rgb(.8,.8,.8)});
  draw(preschoolReference(record),50,46,9,false,muted);draw(`Página ${i+1} de ${pages.length}`,477,46,9,false,muted);
 }
 return pdf.save();
}
