import { env } from 'cloudflare:workers';
import { getChatGPTUser } from '../../../../chatgpt-auth';
import { createPreschoolResultPdf, preschoolReference, type PreschoolRecord } from '../../../../../lib/preschool-result-pdf';
export const dynamic='force-dynamic';
export async function GET(_request:Request,context:{params:Promise<{id:string}>}){
 const user=await getChatGPTUser();
 if(!user)return Response.json({error:'Inicia sesión para descargar el resultado.'},{status:401});
 const {id}=await context.params;
 if(!/^[1-9]\d{0,14}$/.test(id))return Response.json({error:'Radicado no válido.'},{status:400});
 try{
  const record=await env.DB!.prepare('SELECT id,student,level,decision,created_at,teacher,period,observations,assessment,placement FROM preschool_admissions WHERE id = ?').bind(Number(id)).first<PreschoolRecord>();
  if(!record)return Response.json({error:'No se encontró el resultado.'},{status:404});
  const bytes=await createPreschoolResultPdf(record);
  return new Response(bytes as BodyInit,{headers:{'Content-Type':'application/pdf','Content-Disposition':`attachment; filename="Resultado_${preschoolReference(record)}.pdf"`,'Cache-Control':'private, no-store','X-Content-Type-Options':'nosniff'}});
 }catch{return Response.json({error:'No fue posible generar el PDF. Intenta descargarlo nuevamente.'},{status:503});}
}
