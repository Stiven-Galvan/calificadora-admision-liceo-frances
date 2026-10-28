// Shared by the evaluation screen, registry validation and PDF generation.
export const LEVEL_NAMES={prekinder:'Prekínder',kinder:'Kínder',transicion:'Transición'};
export const DECISION_NAMES={aprobado:'Aceptado',compromiso:'Aceptado con compromiso',negado:'No aceptado'};
export const SCALES={
 autonomo:{label:'Autónomo',description:'Lo realiza sin ayuda.'},
 apoyo:{label:'Con apoyo',description:'Lo realiza con pistas, un ejemplo o acompañamiento.'},
 proceso:{label:'En proceso',description:'Todavía necesita fortalecer la habilidad para realizarla con consistencia.'},
 no_observado:{label:'No observado',description:'No se contó con evidencia para valorar esta habilidad.'}
};
const c=(id,area,activity,label,skill,practice)=>({id,area,activity,label,skill,practice});
export const ASSESSMENTS={
 prekinder:[
  c('pk-vocales','Lenguaje',1,'Nombra las vocales presentadas.','reconocer y nombrar las vocales presentadas','Presenten una vocal a la vez, nómbrenla y busquen juntos un objeto cuyo nombre empiece con ese sonido. Cambien el orden de las vocales y vuelvan a intentarlo.'),
  c('pk-caminos','Motricidad fina y seguimiento de instrucciones',1,'Sigue los caminos con el trazo.','seguir los caminos propuestos con un trazo dirigido','Recorran primero un camino con el dedo y después con un crayón. Empiecen con recorridos amplios y cortos, y reduzcan la ayuda de forma gradual.'),
  c('pk-tamano','Pensamiento matemático y nociones espaciales',2,'Distingue la pelota grande de la pequeña.','diferenciar objetos grandes y pequeños','Comparen dos pelotas u otros objetos de distinto tamaño. Pidan señalar el grande y el pequeño; después cambien su posición.'),
  c('pk-posicion','Pensamiento matemático y nociones espaciales',3,'Reconoce qué manzanas están dentro y cuál está fuera.','distinguir las posiciones dentro y fuera','Coloquen objetos dentro y fuera de una caja. Den una indicación por vez, alternando colocar, señalar y explicar dónde está cada objeto.'),
  c('pk-conteo','Pensamiento matemático y nociones espaciales',4,'Cuenta las colecciones de 1 a 3 objetos.','contar colecciones de uno a tres objetos','Cuenten uno, dos y tres objetos señalando cada uno una sola vez. Cambien su disposición y comprueben juntos la cantidad.'),
  c('pk-cantidad','Pensamiento matemático y nociones espaciales',4,'Relaciona los números 1, 2 y 3 con su cantidad.','relacionar los números uno, dos y tres con las cantidades correspondientes','Pongan tarjetas con 1, 2 y 3 junto a colecciones de objetos. Pidan emparejar cada tarjeta y comprobar el resultado contando.'),
  c('pk-indicaciones','Motricidad fina y seguimiento de instrucciones',5,'Sigue las indicaciones para decorar las figuras.','seguir las indicaciones de la actividad de decoración','Propongan una instrucción breve, hagan un ejemplo si es necesario y permitan que la repita en otra figura. Luego retiren la ayuda poco a poco.'),
  c('pk-materiales','Motricidad fina y seguimiento de instrucciones',5,'Manipula los materiales durante la decoración.','manipular los materiales al decorar las figuras','Ofrezcan actividades breves de rasgado, pegado o coloreado con materiales apropiados para su edad. Acompañen el manejo de los materiales según lo observado.')
 ],
 kinder:[
  c('k-colores','Percepción y comparación',1,'Nombra los colores que señala el docente.','reconocer y nombrar los colores señalados','Agrupen objetos por color y pídanle nombrarlos. Después mezclen los objetos y repitan el juego en otro orden.'),
  c('k-patrones','Motricidad fina y trazo',2,'Repasa los patrones rectos, en zigzag y en ondas.','seguir patrones rectos, en zigzag y en ondas','Repasen cada tipo de camino primero con el dedo y luego con lápiz o crayón. Alternen recorridos cortos y permitan repetir sin apresurarse.'),
  c('k-tamano','Percepción y comparación',3,'Identifica el mono más pequeño.','comparar el tamaño de los dibujos','Comparen dos objetos de distinto tamaño y pidan señalar el más pequeño. Cambien su ubicación para comprobar que usa el tamaño y no la posición.'),
  c('k-longitud','Percepción y comparación',3,'Identifica la serpiente más larga.','comparar la longitud de los dibujos','Ordenen tiras de papel de distinta longitud. Pidan señalar cuál es más larga y explicar la elección señalando sus extremos.'),
  c('k-altura','Percepción y comparación',3,'Identifica la jirafa más alta.','comparar la altura de los dibujos','Comparen torres de bloques colocadas sobre la misma superficie. Construyan una más alta y otra más baja y descríbanlas juntos.'),
  c('k-lleno','Percepción y comparación',3,'Identifica la pecera llena de agua.','distinguir un recipiente lleno de uno vacío','Observen dos recipientes, uno lleno y otro vacío. Pidan señalar cada uno y repetir las palabras al cambiar el contenido.'),
  c('k-vocales','Lenguaje',4,'Une la vocal con el dibujo de su sonido inicial.','asociar las vocales con el sonido inicial de las imágenes','Nombren cada imagen con claridad y destaquen su primer sonido. Después busquen la vocal correspondiente entre dos opciones y amplíen las opciones gradualmente.'),
  c('k-inicial','Lenguaje',5,'Escribe la vocal inicial del nombre del dibujo.','identificar y escribir la vocal inicial de una palabra','Digan el nombre del dibujo y su primer sonido. Usen una vocal de referencia al comienzo y retiren el modelo cuando pueda intentarlo con mayor autonomía.'),
  c('k-silabas','Lenguaje',6,'Asocia las sílabas presentadas con los dibujos.','asociar los sonidos y las sílabas presentadas con las imágenes','Formen las sílabas de la actividad, díganlas en voz alta y relaciónenlas con los dibujos. Ofrezcan una pista sonora antes de mostrar la respuesta.'),
  c('k-vivos','Entorno y seres vivos',7,'Distingue los seres vivos entre los dibujos.','diferenciar los seres vivos de los objetos presentados','Conversen sobre la planta, el perro y el carro de la prueba. Pidan explicar cuál necesita cuidados para vivir y contrasten sus características.'),
  c('k-planta','Entorno y seres vivos',7,'Menciona una necesidad de la planta para crecer.','expresar una necesidad de las plantas para crecer','Observen una planta y conversen sobre el agua y la luz que recibe. Pidan decir una necesidad y relacionarla con una acción de cuidado.'),
  c('k-conteo','Pensamiento matemático',8,'Cuenta las naranjas de la actividad.','contar los elementos de la colección presentada','Cuenten objetos concretos señalando uno por uno. Cambien la disposición y comprueben que no se omite ni se cuenta dos veces el mismo objeto.'),
  c('k-secuencia','Pensamiento matemático',8,'Completa los números que faltan en el camino.','completar la secuencia numérica de la actividad','Ordenen tarjetas numéricas del recorrido y retiren una. Pidan identificar cuál falta y comprobarlo recitando la secuencia.')
 ],
 transicion:[
  c('t-vocales','Lenguaje y lectoescritura',1,'Asocia las vocales con el sonido inicial del dibujo.','relacionar las vocales con el sonido inicial de las imágenes','Nombren las imágenes y destaquen su primer sonido. Relaciónenlo con una vocal y después repitan con otra imagen.'),
  c('t-nombre','Lenguaje y lectoescritura',2,'Escribe su nombre.','escribir su nombre','Usen una tarjeta con su nombre para identificar las letras. Permitan un intento con modelo y otro sin él, reconociendo los avances concretos.'),
  c('t-consonantes','Lenguaje y lectoescritura',3,'Asocia M, P, S y T con el dibujo correspondiente.','asociar las consonantes M, P, S y T con el sonido inicial de las imágenes','Nombren los dibujos y comparen el sonido inicial con M, P, S y T. Empiecen con dos opciones y aumenten gradualmente la variedad.'),
  c('t-palabras','Lenguaje y lectoescritura',4,'Relaciona las palabras con sus imágenes.','relacionar las palabras de la actividad con sus imágenes','Lean una palabra por partes, únanlas y busquen su dibujo. Cambien el orden de las imágenes para comprobar la asociación.'),
  c('t-lectura','Lenguaje y lectoescritura',5,'Lee las palabras mamá, Tito, puma, sopa y suma.','leer las palabras sencillas propuestas','Practiquen una palabra de la prueba por vez, uniendo sus sílabas. Después propongan otra palabra de estructura parecida para comprobar la comprensión del procedimiento.'),
  c('t-copia','Lenguaje y lectoescritura',6,'Copia las dos oraciones conservando la secuencia.','copiar las oraciones respetando la secuencia de las palabras','Lean juntos una oración corta. Copien por grupos de palabras y comparen al terminar si están todas y en el mismo orden.'),
  c('t-trazo','Motricidad fina y organización espacial','2 y 6','Organiza el trazo del nombre y las oraciones en el renglón.','organizar el trazo y el uso del renglón en la escritura','Usen renglones amplios y un punto de inicio visible. Acompañen la separación de palabras y la dirección del trazo, dando tiempo para revisar.'),
  c('t-secuencia','Pensamiento matemático',7,'Completa los números faltantes del 1 al 50.','completar la secuencia numérica del uno al cincuenta','Trabajen tramos cortos de la secuencia con tarjetas y retiren algunos números. Pidan completar el tramo y verificar con una tira numérica.'),
  c('t-sumas','Pensamiento matemático',8,'Resuelve las sumas de la actividad.','resolver las sumas sencillas propuestas','Representen cada suma con dos grupos de objetos. Júntenlos, cuenten el total y relacionen el resultado con la operación escrita.'),
  c('t-restas','Pensamiento matemático',8,'Resuelve las restas de la actividad.','resolver las restas sencillas propuestas','Representen la cantidad inicial con objetos, retiren la cantidad indicada y cuenten los que quedan. Comparen la representación con la operación escrita.')
 ]
};
export function validateRatings(level,ratings){
 const items=Object.hasOwn(ASSESSMENTS,level)?ASSESSMENTS[level]:null;
 if(!items||!ratings||typeof ratings!=='object'||Array.isArray(ratings))return false;
 return Object.keys(ratings).length===items.length&&items.every(item=>typeof ratings[item.id]==='string'&&Object.hasOwn(SCALES,ratings[item.id]));
}
const joinSkills=items=>items.map(item=>item.skill).join('; ');
export function buildAssessmentReport(level,ratings,generalNotes='',decision=''){
 if(!validateRatings(level,ratings))throw new Error('Completa una opción por habilidad; utiliza No observado cuando no se haya podido valorar.');
 const rows=ASSESSMENTS[level].map(item=>({...item,rating:ratings[item.id],ratingLabel:SCALES[ratings[item.id]].label}));
 const counts=Object.fromEntries(Object.keys(SCALES).map(key=>[key,rows.filter(row=>row.rating===key).length]));
 const areas=[...new Set(rows.map(row=>row.area))].map(name=>{
  const items=rows.filter(row=>row.area===name),autonomous=items.filter(row=>row.rating==='autonomo'),supported=items.filter(row=>row.rating==='apoyo'),developing=items.filter(row=>row.rating==='proceso'),unobserved=items.filter(row=>row.rating==='no_observado');
  const parts=[];
  if(autonomous.length)parts.push('Muestra autonomía para '+joinSkills(autonomous)+'.');
  if(supported.length)parts.push('Con apoyo del docente, logra '+joinSkills(supported)+'.');
  if(developing.length)parts.push('Requiere continuar fortaleciendo las habilidades de '+joinSkills(developing)+'.');
  if(unobserved.length)parts.push('Quedó pendiente observar las habilidades de '+joinSkills(unobserved)+'. Esta falta de evidencia no se interpreta como dificultad.');
  return {name,narrative:parts.join(' '),items,autonomous:autonomous.length,supported:supported.length,developing:developing.length,unobserved:unobserved.length};
 });
 const strengths=areas.filter(area=>area.autonomous).map(area=>({area:area.name,text:'Realiza de manera autónoma actividades que requieren '+joinSkills(area.items.filter(item=>item.rating==='autonomo'))+'.'}));
 const needs=rows.filter(row=>row.rating==='proceso'||row.rating==='apoyo').sort((a,b)=>(a.rating==='proceso'?0:1)-(b.rating==='proceso'?0:1)).map(row=>({id:row.id,area:row.area,title:row.label,status:row.ratingLabel,text:(row.rating==='proceso'?'Requiere consolidar la habilidad de ':'Conviene aumentar gradualmente la autonomía para ')+row.skill+'.',practice:row.practice}));
 const pending=rows.filter(row=>row.rating==='no_observado');
 const observed=rows.length-counts.no_observado;
 let overview=observed?`Se valoraron ${observed} de ${rows.length} habilidades del cuadernillo de ${LEVEL_NAMES[level]}. Se registraron ${counts.autonomo} desempeños autónomos, ${counts.apoyo} con apoyo y ${counts.proceso} en proceso.`:`No se contó con evidencia para valorar las ${rows.length} habilidades del cuadernillo de ${LEVEL_NAMES[level]}. Se requiere una nueva oportunidad de observación antes de describir el desempeño.`;
 if(pending.length&&observed)overview+=` Quedaron ${pending.length} habilidades sin observar; no se cuentan como errores ni como dificultades.`;
 const conclusion=observed
 ?'La valoración identifica desempeños específicos observados durante esta prueba. '+(needs.length?'Se recomienda orientar el acompañamiento hacia las habilidades señaladas y revisar los avances en nuevas actividades.':'En las habilidades observadas se registró autonomía. Se sugiere ampliar las actividades y seguir observando el desempeño en otros contextos.')+(pending.length?' Es necesario completar la observación de las habilidades pendientes.':'')
 :'La evidencia registrada no permite formular conclusiones sobre las habilidades del estudiante. Se recomienda completar la observación mediante actividades acordes con el nivel.';
 return {level:LEVEL_NAMES[level],overview,counts,total:rows.length,observed,areas,strengths,needs,pending,rows,generalNotes:String(generalNotes||'').trim(),conclusion,decision:DECISION_NAMES[decision]||''};
}

export const PLACEMENT_KINDS={aspira:'Promover al grado al que aspira',inferior:'Recomendar un grado inferior',superior:'Recomendar un grado superior',pendiente:'Dejar pendiente la recomendación de grado'};
export const PLACEMENT_GRADES=['Prekínder','Kínder','Transición','Primero'];
export function normalizePlacement(level,input){
 if(input===undefined||input===null)return null;
 if(!Object.hasOwn(LEVEL_NAMES,level)||typeof input!=='object'||Array.isArray(input)||typeof input.kind!=='string'||!Object.hasOwn(PLACEMENT_KINDS,input.kind))throw new Error('Selecciona una recomendación de grado válida.');
 const reason=input.reason??'';
 if(typeof reason!=='string'||reason.length>3000||/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/.test(reason))throw new Error('La justificación de la recomendación admite hasta 3000 caracteres.');
 let target='';
 if(input.kind==='aspira')target=LEVEL_NAMES[level];
 else if(input.kind!=='pendiente'){
  if(typeof input.target!=='string'||!input.target.trim()||input.target.length>80||/[\u0000-\u001f\u007f]/.test(input.target))throw new Error('Escribe el grado recomendado.');
  target=input.target.trim().replace(/\s+/g,' ');
  const key=target.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]/g,'');
  const aliases={prekinder:'Prekínder',kinder:'Kínder',transicion:'Transición',primero:'Primero','1':'Primero','1o':'Primero'};
  if(Object.hasOwn(aliases,key))target=aliases[key];
  const sourceRank=PLACEMENT_GRADES.indexOf(LEVEL_NAMES[level]),targetRank=PLACEMENT_GRADES.indexOf(target);
  if(targetRank>=0&&((input.kind==='inferior'&&targetRank>=sourceRank)||(input.kind==='superior'&&targetRank<=sourceRank)))throw new Error('El grado recomendado no corresponde a la opción inferior o superior seleccionada.');
 }
 return {kind:input.kind,target,reason:reason.trim()};
}
export function describePlacement(level,input){
 if(!input?.kind)return null;
 const recommendation=normalizePlacement(level,input),grade=LEVEL_NAMES[level];
 const text=recommendation.kind==='aspira'
  ?`Se recomienda promover al estudiante al grado ${grade}, al que aspira.`
  :recommendation.kind==='inferior'
  ?`Se recomienda considerar el ingreso del estudiante al grado ${recommendation.target}, inferior al grado ${grade} al que aspira.`
  :recommendation.kind==='superior'
  ?`Se recomienda considerar el ingreso del estudiante al grado ${recommendation.target}, superior al grado ${grade} al que aspira.`
  :'La recomendación del grado de ingreso queda pendiente de definir.';
 return {...recommendation,text,label:PLACEMENT_KINDS[recommendation.kind]};
}
