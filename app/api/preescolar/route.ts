import { env } from 'cloudflare:workers';
import { getChatGPTUser } from '../../chatgpt-auth';
import { registerAdmission } from '../../../lib/preschool-registry';
export const dynamic = 'force-dynamic';
const json = (data: unknown, status = 200) => Response.json(data, { status, headers: { 'Cache-Control': 'no-store' } });
export async function GET() {
 const user = await getChatGPTUser();
 if (!user) return json({error:'Inicia sesión para consultar los radicados.'},401);
 try {
  const result = await env.DB!.prepare('SELECT id, student, level, decision, created_at FROM preschool_admissions ORDER BY id DESC').all();
  return json({records:result.results});
 } catch { return json({error:'No fue posible consultar los radicados. Intenta de nuevo.'},503); }
}
export async function POST(request: Request) {
 const user = await getChatGPTUser();
 if (!user) return json({error:'Inicia sesión para radicar el resultado.'},401);
 if (request.headers.get('origin') !== new URL(request.url).origin) return json({error:'Solicitud no autorizada.'},403);
 if (!(request.headers.get('content-type') || '').includes('application/json')) return json({error:'Formato no válido.'},415);
 try {
  const raw = await request.text();
  if (raw.length > 100000) return json({error:'Solicitud demasiado extensa.'},413);
  let body;
  try { body=JSON.parse(raw); } catch { return json({error:'Solicitud no válida.'},400); }
  const result = await registerAdmission(env.DB!,body,user.userId);
  return json(result.body,result.status);
 } catch { return json({error:'No pudimos confirmar el radicado. Vuelve a intentarlo; no se duplicará el registro.'},503); }
}
