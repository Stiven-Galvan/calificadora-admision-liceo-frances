import { ASSESSMENTS, SCALES, LEVEL_NAMES, DECISION_NAMES, validateRatings, buildAssessmentReport, normalizePlacement, describePlacement, PLACEMENT_GRADES } from './preschool-assessment.js';
const $=id=>document.getElementById(id);
const esc=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const uuid=()=>{const bytes=crypto.getRandomValues(new Uint8Array(16));bytes[6]=(bytes[6]&15)|64;bytes[8]=(bytes[8]&63)|128;const h=Array.from(bytes,b=>b.toString(16).padStart(2,'0')).join('');return `${h.slice(0,8)}-${h.slice(8,12)}-${h.slice(12,16)}-${h.slice(16,20)}-${h.slice(20)}`;};
const date=value=>new Intl.DateTimeFormat('es-CO',{dateStyle:'medium',timeStyle:'short',timeZone:'America/Bogota'}).format(new Date(value));
const reference=r=>`PRE-${new Intl.DateTimeFormat('en',{year:'numeric',timeZone:'America/Bogota'}).format(new Date(r.created_at))}-${String(r.id).padStart(6,'0')}`;
const drafts={};let ratings={},currentLevel='prekinder',snapshot=null,busy=false,locked=false,currentRecord=null;
const initialLevel=new URLSearchParams(location.search).get('nivel');if(Object.hasOwn(LEVEL_NAMES,initialLevel))currentLevel=initialLevel;
$('preschool-level').value=currentLevel;
function progress(){const count=ASSESSMENTS[currentLevel].filter(item=>Object.hasOwn(SCALES,ratings[item.id])).length;$('assessment-status').textContent=`${count} de ${ASSESSMENTS[currentLevel].length} habilidades registradas`;}
function renderAssessment(){
 $('preschool-pdf').href=`prueba-${currentLevel}.pdf`;
 const items=ASSESSMENTS[currentLevel],areas=[...new Set(items.map(item=>item.area))];
 $('assessment-areas').innerHTML=areas.map(area=>`<section class="card guided-area"><h3>${esc(area)}</h3>${items.filter(item=>item.area===area).map(item=>`<fieldset class="skill-row" data-skill="${item.id}"><legend><small>Actividad ${item.activity}</small>${esc(item.label)}</legend><div class="skill-options">${Object.entries(SCALES).map(([key,scale])=>`<label class="skill-choice ${key}"><input type="radio" name="skill-${item.id}" value="${key}" ${ratings[item.id]===key?'checked':''}><span>${esc(scale.label)}</span></label>`).join('')}</div></fieldset>`).join('')}</section>`).join('');progress();
}
$('assessment-areas').addEventListener('change',event=>{const field=event.target.closest('[data-skill]');if(!field||locked)return;ratings[field.dataset.skill]=event.target.value;field.classList.remove('missing-skill');$('registration-error').textContent='';progress();});
$('preschool-level').addEventListener('change',()=>{
 drafts[currentLevel]={ratings:{...ratings},general:$('general-observations').value,placement:placementInput()};currentLevel=$('preschool-level').value;
 ratings={...(drafts[currentLevel]?.ratings||{})};$('general-observations').value=drafts[currentLevel]?.general||'';const savedPlacement=drafts[currentLevel]?.placement;$('placement-kind').value=savedPlacement?.kind||'';$('placement-target').value=savedPlacement?.target||'';$('placement-reason').value=savedPlacement?.reason||'';syncPlacementFields();renderAssessment();$('registration-error').textContent='';
});
function placementInput(){return {kind:$('placement-kind').value,target:$('placement-target').value,reason:$('placement-reason').value};}
function syncPlacementFields(){
 const kind=$('placement-kind').value,target=$('placement-target');target.setCustomValidity('');
 $('placement-target-field').hidden=!kind||kind==='pendiente';target.required=kind==='inferior'||kind==='superior';target.readOnly=kind==='aspira';
 if(kind==='aspira')target.value=LEVEL_NAMES[currentLevel];else if(!kind||kind==='pendiente')target.value='';
 const rank=PLACEMENT_GRADES.indexOf(LEVEL_NAMES[currentLevel]);
 $('placement-grades').innerHTML=PLACEMENT_GRADES.filter((grade,i)=>kind==='inferior'?i<rank:kind==='superior'?i>rank:true).map(grade=>`<option value="${esc(grade)}"></option>`).join('');
}
$('placement-kind').addEventListener('change',()=>{$('placement-target').value='';syncPlacementFields();});
$('placement-target').addEventListener('input',()=>{$('placement-target').setCustomValidity('');});
$('guided-form').addEventListener('submit',event=>event.preventDefault());
function lockFields(value){locked=value;$('preschool-level').disabled=value;document.querySelectorAll('#guided-form input,#guided-form select,#guided-form textarea,#guided-form [data-decision]').forEach(field=>field.disabled=value);}
function validate(){
 if(!$('guided-form').reportValidity())return false;
 if(!$('registration-name').value.trim()){$('registration-error').textContent='Escribe el nombre completo del estudiante.';$('registration-name').focus();return false;}
 if(!validateRatings(currentLevel,ratings)){
  const missing=ASSESSMENTS[currentLevel].find(item=>!Object.hasOwn(SCALES,ratings[item.id]));
  $('registration-error').textContent='Selecciona una opción por habilidad. Si no se pudo valorar, marca No observado.';
  const field=document.querySelector(`[data-skill="${missing.id}"]`);field.classList.add('missing-skill');field.scrollIntoView({behavior:'smooth',block:'center'});field.querySelector('input').focus({preventScroll:true});return false;
 }
 try{normalizePlacement(currentLevel,placementInput());}catch(error){$('placement-target').setCustomValidity(error.message);$('placement-target').reportValidity();return false;}
 return true;
}
async function register(decision,retry=false){
 if(busy||(!retry&&locked))return;
 if(!retry){if(!validate())return;snapshot={requestId:uuid(),student:$('registration-name').value.trim().replace(/\s+/g,' '),teacher:$('registration-teacher').value.trim(),period:$('registration-period').value.trim(),level:currentLevel,decision,observations:{general:$('general-observations').value.trim()},assessment:{version:1,ratings:{...ratings}},placement:normalizePlacement(currentLevel,placementInput())};}
 if(!snapshot)return;busy=true;lockFields(true);$('retry-registration').hidden=true;$('registration-error').textContent='Registrando y generando el informe…';let confirmedRejection=false;
 try{
  const response=await fetch('/api/preescolar',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(snapshot)});
  confirmedRejection=response.status>=400&&response.status<500;
  const body=await response.json();if(!response.ok)throw new Error(body.error||'No fue posible registrar la valoración.');
  if(!body.record?.id)throw new Error('No se recibió la confirmación del registro. Vuelve a intentarlo.');
  currentRecord=body.record;const report=body.analysis||buildAssessmentReport(snapshot.level,snapshot.assessment.ratings,snapshot.observations.general,snapshot.decision);
  snapshot=null;$('registration-error').textContent='';renderReport(currentRecord,report);$('generated-report').hidden=false;$('generated-report').focus({preventScroll:true});$('generated-report').scrollIntoView({behavior:'smooth',block:'start'});
 }catch(error){
  $('registration-error').textContent=error.message||'No pudimos confirmar el registro.';
  if(confirmedRejection){snapshot=null;lockFields(false);}else{$('registration-error').textContent+=' Reintenta el mismo registro para confirmarlo sin duplicarlo.';$('retry-registration').hidden=false;}
 }finally{busy=false;}
}
document.querySelectorAll('[data-decision]').forEach(button=>button.addEventListener('click',()=>register(button.dataset.decision)));
$('retry-registration').addEventListener('click',()=>register(null,true));
function renderReport(record,report){
 const placement=describePlacement(record.level,JSON.parse(record.placement||'{}'));
 const placementHtml=placement?`<section class="card guided-report-section"><h2>8. Recomendación del grado de ingreso</h2><p><strong>Grado al que aspira:</strong> ${esc(report.level)}</p>${placement.target?`<p><strong>Grado recomendado:</strong> ${esc(placement.target)}</p>`:''}<p>${esc(placement.text)}</p>${placement.reason?`<h3>Justificación y recomendaciones</h3><p class="manual-notes">${esc(placement.reason)}</p>`:''}</section>`:'';
 const badges=Object.entries(SCALES).map(([key,scale])=>`<div class="summary-stat ${key}"><strong>${report.counts[key]}</strong><span>${esc(scale.label)}</span></div>`).join('');
 const needs=report.needs.length?report.needs.map(item=>`<article class="guided-need"><span class="guided-tag ${item.status==='En proceso'?'proceso':'apoyo'}">${esc(item.status)}</span><h4>${esc(item.title)}</h4><p>${esc(item.text)}</p><p><strong>Actividad sugerida:</strong> ${esc(item.practice)}</p></article>`).join(''):'<p>No se registraron habilidades Con apoyo o En proceso. Si hay habilidades sin observar, completa primero su valoración; en los desempeños autónomos puedes ampliar las actividades.</p>';
 $('generated-report').innerHTML=`<div class="report-hero guided-report-hero"><div><div class="eyebrow">INFORME DE RESULTADO PRUEBA DE ADMISIÓN</div><h2>${esc(record.student)}</h2><p>Grado: ${esc(report.level)} · ${esc(date(record.created_at))}</p><p>Docente: ${esc(record.teacher||'No registrado')} · Periodo: ${esc(record.period||'No registrado')}</p><p>Radicado ${esc(reference(record))}</p></div><div class="decision-result">${esc(DECISION_NAMES[record.decision])}</div></div><div class="report-actions"><button class="button primary" type="button" id="download-result-pdf">Descargar informe en PDF</button><button class="button subtle" type="button" id="new-evaluation">Valorar otro estudiante</button></div><p id="pdf-download-status" role="status"></p>
 <section class="card guided-report-section"><h2>1. Panorama del desempeño</h2><div class="assessment-summary">${badges}</div><p>${esc(report.overview)}</p><p>Esta es una valoración pedagógica por habilidades. Las opciones describen el apoyo observado; no son una calificación porcentual ni un diagnóstico.</p></section>
 <section class="card guided-report-section"><h2>2. Resultados por área</h2>${report.areas.map(area=>`<article class="area-narrative"><h3>${esc(area.name)}</h3><p>${esc(area.narrative)}</p></article>`).join('')}</section>
 <section class="card guided-report-section"><h2>3. Fortalezas observadas</h2>${report.strengths.length?report.strengths.map(item=>`<p><strong>${esc(item.area)}:</strong> ${esc(item.text)}</p>`).join(''):'<p>No se registraron desempeños autónomos en esta valoración. Esto no significa que el estudiante carezca de capacidades; conviene reconocer los avances con apoyo y observarlo en otras actividades.</p>'}</section>
 <section class="card guided-report-section"><h2>4. Aspectos por fortalecer y recomendaciones</h2><p>Las actividades propuestas corresponden a las habilidades marcadas Con apoyo o En proceso. El docente puede ajustar el acompañamiento según la respuesta del estudiante.</p>${needs}</section>
 ${report.pending.length?`<section class="card guided-report-section"><h2>Habilidades pendientes de observación</h2><p>No se interpretan como errores ni dificultades. Es necesario dar otra oportunidad para observar:</p><ul>${report.pending.map(item=>`<li>${esc(item.label)}</li>`).join('')}</ul></section>`:''}
 <section class="card guided-report-section"><h2>5. Observaciones generales del docente</h2><p class="manual-notes">${esc(report.generalNotes||'No se registraron observaciones generales adicionales.')}</p></section>
 <section class="card guided-report-section"><h2>6. Acompañamiento en casa</h2><ol><li>Elijan una habilidad y una actividad sugerida por ocasión.</li><li>Permitan un primer intento y ofrezcan una pista o un ejemplo cuando lo necesite.</li><li>Repitan con otros materiales y reduzcan la ayuda gradualmente.</li><li>Compartan con el docente un ejemplo de avance y aquello que todavía requiere acompañamiento.</li></ol></section>
 <section class="card guided-report-section"><h2>7. Concepto final</h2><p>${esc(report.conclusion)}</p><p><strong>Concepto final: ${esc(DECISION_NAMES[record.decision])}.</strong></p></section>
 ${placementHtml}
 <details class="card guided-report-section"><summary>9. Detalle de la valoración por habilidad</summary><div class="table-wrap"><table><thead><tr><th>Área / actividad</th><th>Habilidad observada</th><th>Registro docente</th></tr></thead><tbody>${report.rows.map(row=>`<tr><td>${esc(row.area)}<small>Actividad ${row.activity}</small></td><td>${esc(row.label)}</td><td>${esc(row.ratingLabel)}</td></tr>`).join('')}</tbody></table></div></details>`;
 $('download-result-pdf').addEventListener('click',downloadPdf);$('new-evaluation').addEventListener('click',newEvaluation);
}
async function downloadPdf(){
 if(!currentRecord)return;const button=$('download-result-pdf');button.disabled=true;$('pdf-download-status').textContent='Preparando PDF…';
 try{const response=await fetch(`/api/preescolar/${currentRecord.id}/pdf`,{cache:'no-store'});if(!response.ok){let message='No fue posible descargar el PDF. Intenta nuevamente.';try{message=(await response.json()).error||message;}catch{}throw new Error(message);}if(!(response.headers.get('content-type')||'').includes('application/pdf'))throw new Error('No se recibió un PDF válido. Inicia sesión e intenta de nuevo.');
  const url=URL.createObjectURL(await response.blob()),link=document.createElement('a');link.href=url;link.download=`Informe_${reference(currentRecord)}.pdf`;document.body.appendChild(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),30000);$('pdf-download-status').textContent='PDF listo. Revisa las descargas de tu navegador.';
 }catch(error){$('pdf-download-status').textContent=error.message;}finally{button.disabled=false;}
}
function newEvaluation(){
 currentRecord=null;snapshot=null;lockFields(false);ratings={};for(const key of Object.keys(drafts))delete drafts[key];$('registration-name').value='';$('general-observations').value='';$('placement-kind').value='';$('placement-target').value='';$('placement-reason').value='';syncPlacementFields();$('registration-error').textContent='';$('retry-registration').hidden=true;$('generated-report').hidden=true;$('generated-report').innerHTML='';renderAssessment();$('registration-name').focus();$('guided-form').scrollIntoView({behavior:'smooth',block:'start'});
}
syncPlacementFields();renderAssessment();
