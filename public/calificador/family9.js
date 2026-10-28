const FAMILY9 = {
  "questions": [
    {
      "meaning": "Reconstruir un precio después de un descuento y un impuesto",
      "example": "Un producto baja 20 % y luego recibe un impuesto de 10 %. El valor final es $88.000. ¿Cuál era el precio inicial?",
      "guide": "El precio se multiplicó por 0,80 y después por 1,10: en total por 0,88. Divide $88.000 entre 0,88: el precio inicial era $100.000. Comprueba ambos pasos."
    },
    {
      "meaning": "Encontrar dos cantidades a partir del total y del dinero recaudado",
      "example": "Se venden 10 entradas: las de adulto cuestan $10.000 y las de estudiante $5.000. Se recauda $70.000. ¿Cuántas son de adulto?",
      "guide": "Si todas fueran de estudiante serían $50.000. Faltan $20.000 y cada entrada de adulto añade $5.000: son 4 de adulto y 6 de estudiante."
    },
    {
      "meaning": "Comparar dos precios en una gráfica y localizar cuándo se igualan",
      "example": "Un envío cuesta $5.000 + $2.000 por kg en A y $9.000 + $1.000 por kg en B. ¿Cuándo igualan el precio?",
      "guide": "A las 4 kg ambas cobran $13.000. Para más de 4 kg, B es más económica. Compara los precios a 3 y 5 kg y ubica el punto de cruce."
    },
    {
      "meaning": "Calcular un perímetro después de encontrar los lados con el área",
      "example": "Un rectángulo tiene lados x + 2 y x, y su área es 24 cm². Si x es positivo, ¿cuánto mide su perímetro?",
      "guide": "x = 4 da lados 6 y 4: su producto es 24. El perímetro es 2 × (6 + 4) = 20 cm. Comprueba tanto el área como la suma de los cuatro lados."
    },
    {
      "meaning": "Simplificar una expresión usando una diferencia de cuadrados",
      "example": "Para x distinto de 2, simplifica (x² − 4)/(x − 2).",
      "guide": "x² − 4 = (x − 2)(x + 2). Se cancela el factor x − 2 y queda x + 2. No se permite x = 2 porque la división inicial sería entre cero."
    },
    {
      "meaning": "Relacionar número de máquinas, tiempo y cantidad producida",
      "example": "Dos máquinas hacen 100 piezas en una hora. ¿Cuánto tardan cuatro máquinas iguales en hacer 400 piezas al mismo ritmo?",
      "guide": "Cada máquina hace 50 piezas por hora. Cuatro hacen 200 por hora, así que tardan 2 horas. Organiza las cantidades en una tabla."
    },
    {
      "meaning": "Calcular cómo cambia la altura de una escalera al mover su base",
      "example": "Una escalera mide 5 m. Con su base a 3 m de la pared llega a 4 m de altura; al alejarla a 4 m, ¿a qué altura llega?",
      "guide": "Por Pitágoras, la nueva altura es √(25 − 16) = 3 m. Bajó 1 m. Dibuja los dos triángulos; la longitud de la escalera sigue siendo 5 m."
    },
    {
      "meaning": "Entender cómo el radio y la altura cambian el volumen de un cilindro",
      "example": "Si duplicas el radio de un cilindro y mantienes su altura, ¿cuántas veces crece el volumen?",
      "guide": "El volumen usa el radio al cuadrado: (2r)² = 4r². Crece cuatro veces. Si además la altura se reduce a la mitad, queda en dos veces el original."
    },
    {
      "meaning": "Calcular la posibilidad de sacar dos fichas del mismo color sin devolverlas",
      "example": "Hay 3 fichas rojas y 2 azules. Sacas dos sin devolver la primera. ¿Qué probabilidad hay de que ambas sean rojas?",
      "guide": "Primero 3/5 y después 2/4, porque queda una roja menos y una ficha menos. Multiplica: (3/5) × (2/4) = 3/10."
    },
    {
      "meaning": "Combinar promedios de grupos con tamaños diferentes",
      "example": "Un grupo de 3 personas tiene promedio 10 y otro de 1 tiene promedio 20. ¿Cuál es el promedio conjunto?",
      "guide": "El primer grupo suma 30 y el segundo 20: total 50 entre 4 personas = 12,5. No basta con promediar 10 y 20, porque los grupos no tienen el mismo tamaño."
    },
    {
      "meaning": "Elegir un valor central que no cambie demasiado por un dato extremo",
      "example": "Compara los tiempos 5, 6, 6, 7 y 30 minutos. ¿Cuál es el dato central y por qué puede describir el tiempo habitual?",
      "guide": "La mediana es 6. El valor extremo 30 hace subir el promedio, pero no cambia el dato que ocupa el centro. Ordena los datos antes de elegirlo."
    },
    {
      "meaning": "Calcular intereses que se suman al capital de cada año",
      "example": "Una inversión de $100.000 gana 10 % al año y no hay retiros. ¿Cuánto habrá después de dos años?",
      "guide": "El primer año queda en $110.000. El segundo gana $11.000, el 10 % del nuevo capital: total $121.000. El interés no se calcula siempre sobre el monto inicial."
    },
    {
      "meaning": "Calcular cuándo una población que se duplica llega a cierto tamaño",
      "example": "Hay 50 individuos y se duplican cada 2 horas. ¿Cuándo llegarán a 400?",
      "guide": "A las 2 horas hay 100; a las 4, 200; y a las 6, 400. Son tres duplicaciones. Hagan una tabla tiempo-población."
    },
    {
      "meaning": "Encontrar los lados de un rectángulo usando su perímetro",
      "example": "Un jardín tiene perímetro de 20 m y su largo es 2 m mayor que el ancho. ¿Cuáles son sus lados y su área?",
      "guide": "El largo más el ancho suman 10. Son 6 y 4 m, y el área es 24 m². Comprueba: 2 × (6 + 4) = 20."
    },
    {
      "meaning": "Calcular una altura comparando sombras tomadas al mismo tiempo",
      "example": "Una vara de 1 m tiene una sombra de 2 m. Un árbol proyecta una sombra de 10 m al mismo tiempo. ¿Cuánto mide el árbol?",
      "guide": "La altura es la mitad de la sombra en ambos casos: el árbol mide 5 m. La comparación supone el mismo ángulo del sol y terreno horizontal."
    },
    {
      "meaning": "Calcular cuántas horas pueden pagarse con un presupuesto",
      "example": "Un alquiler cuesta $10.000 fijos y $3.000 por hora completa. Tienes $25.000. ¿Cuántas horas puedes pagar?",
      "guide": "Después del costo fijo quedan $15.000. Dividir entre $3.000 da 5 horas. Comprueba que una hora más superaría el presupuesto."
    },
    {
      "meaning": "Encontrar un punto que cumple dos reglas al mismo tiempo",
      "example": "¿Dónde se cruzan y = x + 1 e y = −x + 5?",
      "guide": "Iguala las dos expresiones: x + 1 = −x + 5. Sale x = 2 y luego y = 3. Sustituye (2, 3) en ambas reglas para comprobarlo."
    },
    {
      "meaning": "Distinguir el aumento de un lado del aumento de su área",
      "example": "Un cuadrado pasa de lado 5 a lado 6 cm. ¿En qué porcentaje aumenta el área?",
      "guide": "El área pasa de 25 a 36 cm². Aumenta 11 respecto a 25: 11/25 × 100 = 44 %. El lado aumentó 20 %, pero el área no aumenta el mismo porcentaje."
    },
    {
      "meaning": "Encontrar el momento y la altura máxima de una pelota",
      "example": "La altura se modela por h(t) = −t² + 4t. Calcula h en t = 0, 1, 2, 3 y 4. ¿Dónde es mayor?",
      "guide": "Las alturas son 0, 3, 4, 3 y 0. El máximo está en t = 2, con altura 4. La curva es simétrica alrededor de ese momento."
    },
    {
      "meaning": "Pasar una distancia de un mapa a la distancia real",
      "example": "En un mapa de escala 1:10.000, una ruta mide 3 cm. ¿Cuánto mide realmente?",
      "guide": "3 × 10.000 = 30.000 cm, que son 300 m. Primero calcula en centímetros y después convierte a metros o kilómetros."
    },
    {
      "meaning": "Reconocer el problema principal de una historia",
      "example": "Una biblioteca publica libros en línea, pero solo permite encontrarlos con un código que los lectores desconocen. ¿Cuál es el problema principal?",
      "guide": "Los libros están disponibles, pero no son fáciles de encontrar. Pide al estudiante explicar la diferencia entre tener información y poder usarla."
    },
    {
      "meaning": "Comprender por qué explicar los límites de un estudio ayuda",
      "example": "Un informe dice que se estudió solo un curso durante un mes. ¿Por qué esa aclaración es útil?",
      "guide": "Permite valorar a quiénes y a qué periodo se aplican los resultados. Explicar los límites no elimina la información que sí se obtuvo."
    },
    {
      "meaning": "Comprender para qué sirve un objeto o señal dentro de un relato",
      "example": "En una historia, alguien pone una cinta junto a una tabla rota de un puente. ¿Qué función cumple la cinta?",
      "guide": "Advierte el riesgo y señala un problema pendiente. No demuestra que el puente esté reparado. Busca las acciones del relato que apoyan esa interpretación."
    },
    {
      "meaning": "Deducir un cambio de actitud a partir de una acción del final",
      "example": "Al inicio un administrador solo habla de decorar; al final acompaña a revisar un paso seguro y deja de hablar del adorno. ¿Qué podemos inferir?",
      "guide": "Que empieza a considerar otra prioridad. Esa acción da una pista; no autoriza a inventar decisiones que la historia no menciona."
    },
    {
      "meaning": "Elegir una conclusión que esté respaldada por lo observado",
      "example": "Un registro muestra que algunas personas tardan más por un puente roto. ¿Eso prueba que todas las ausencias se deben al puente?",
      "guide": "No. Sí respalda que el daño afecta el acceso de algunas personas. Distingue lo medido de las explicaciones que todavía faltan por comprobar."
    },
    {
      "meaning": "Encontrar la idea que un autor quiere defender",
      "example": "Un texto dice que una vía rápida debe considerar también a peatones y vecinos. Resume su idea principal en una oración.",
      "guide": "Una posible respuesta: las mejoras deben tener en cuenta a todas las personas afectadas, no solo a los conductores."
    },
    {
      "meaning": "Reconocer cuándo una misma persona puede contarse dos veces",
      "example": "Una biblioteca registra 10 personas que prestaron libros y 5 que fueron a un taller. Si 3 hicieron ambas cosas, ¿hubo 15 personas distintas?",
      "guide": "No. Hubo 10 + 5 − 3 = 12 personas distintas. Las tres que hicieron ambas actividades se habían contado dos veces."
    },
    {
      "meaning": "Entender qué relación marca un conector entre ideas",
      "example": "Lee: “Conviene usar varios registros. Sin embargo, hay que evitar contar a una persona dos veces”. ¿Qué introduce “sin embargo”?",
      "guide": "Una precaución o contraste frente a la propuesta anterior. No cambia a un tema sin relación. Intenta decir la misma idea usando “pero”."
    },
    {
      "meaning": "Elegir una acción que responda a las preocupaciones de dos textos",
      "example": "Si dos textos piden revisar errores y escuchar a los afectados, ¿qué harías con una decisión automática?",
      "guide": "Revisaría los errores y ofrecería una oportunidad para aportar información adicional. Explica cómo esa acción responde a ambos textos."
    },
    {
      "meaning": "Elegir información útil antes de cambiar un servicio",
      "example": "Una biblioteca piensa cerrar más temprano. ¿Qué ayudaría a decidir: el color de las paredes o cuántas personas usan cada horario y qué recursos hay?",
      "guide": "Los usos por horario y los recursos disponibles. Explica cómo cada dato ayuda a comparar la necesidad con lo que puede ofrecerse."
    },
    {
      "meaning": "Encontrar una idea compartida por dos textos",
      "example": "Un texto pide revisar errores de una máquina; otro pide que las personas puedan cuestionar sus resultados. ¿En qué coinciden?",
      "guide": "Ambos defienden revisar los resultados y permitir preguntas. Subrayen una frase de cada texto que muestre la coincidencia."
    },
    {
      "meaning": "Comparar el énfasis de dos opiniones sin exagerarlas",
      "example": "Un texto destaca que el celular distrae y otro que puede ayudar a investigar con orientación. ¿Decir que el primero prohíbe todo uso sería fiel?",
      "guide": "No. Una preocupación por las distracciones no significa prohibir cualquier uso. Resume qué destaca cada texto y revisa sus condiciones."
    },
    {
      "meaning": "Distinguir lo que un texto apoya de lo que no afirma",
      "example": "Un texto dice que una máquina puede equivocarse. ¿Eso permite afirmar que las personas siempre deciden bien?",
      "guide": "No. Esa afirmación no está respaldada. Pide señalar qué frase tendría que existir para sostenerla."
    },
    {
      "meaning": "Usar una comparación para saber qué causó un cambio",
      "example": "Para probar un producto mezclado con agua, comparas plantas que reciben la mezcla con otras que reciben solo agua. ¿Para qué?",
      "guide": "Para distinguir el efecto del producto del efecto del agua y de las demás condiciones."
    },
    {
      "meaning": "Distinguir tener acceso a una herramienta de aprender a usarla",
      "example": "Un texto dice: “Permitir internet no basta; hay que enseñar a revisar las fuentes”. ¿Qué más necesita el aprendizaje?",
      "guide": "Orientación para usar la herramienta y comprobar lo encontrado. Acceso y aprendizaje no son lo mismo."
    },
    {
      "meaning": "Entender expresiones que no se leen de forma literal",
      "example": "En “el viento susurraba entre los árboles”, ¿el viento habla de verdad?",
      "guide": "No. Se describe su sonido como si hiciera una acción humana. Pidan al estudiante explicar la imagen con sus propias palabras."
    },
    {
      "meaning": "Explicar el mensaje que deja el final de un relato",
      "example": "Al final, una familia usa el objeto del abuelo mientras cuenta sus historias. ¿Eso significa que lo olvidó?",
      "guide": "No. El recuerdo continúa de otra manera, compartido con otras personas. La conclusión debe apoyarse en lo que ocurre en el final."
    },
    {
      "meaning": "Explicar cómo cambia la función de un lugar en una historia",
      "example": "Una estación donde ya no llegan trenes se convierte en un espacio para talleres. ¿Qué transformación ocurre?",
      "guide": "Un lugar asociado a esperar pasa a tener un uso nuevo. Compara su función al principio y al final con detalles del texto."
    },
    {
      "meaning": "Reconocer el momento en que un personaje empieza a actuar",
      "example": "Un personaje mira un reloj detenido durante días; luego abre su caja y cambia una pieza. ¿Qué marca el paso a la acción?",
      "guide": "La reparación, no solo mirar el reloj. Localiza el verbo que muestra que comenzó a intervenir en la situación."
    },
    {
      "meaning": "Explicar el mensaje que deja el final de un relato",
      "example": "Al final, una familia usa el objeto del abuelo mientras cuenta sus historias. ¿Eso significa que lo olvidó?",
      "guide": "No. El recuerdo continúa de otra manera, compartido con otras personas. La conclusión debe apoyarse en lo que ocurre en el final."
    },
    {
      "meaning": "Comparar necesidades antes de tomar una decisión comunitaria",
      "example": "Hay dinero para decorar una plaza o reparar el agua de un barrio. ¿Qué revisarían antes de decidir?",
      "guide": "Qué necesidad es más urgente, cuántas personas afecta, cuánto cuesta y qué alternativas existen. Escuchen también a la comunidad."
    },
    {
      "meaning": "Responder a burlas protegiendo la dignidad de una persona",
      "example": "Una compañera dice que las burlas por su forma de hablar la afectan. ¿Basta decirle que se acostumbre?",
      "guide": "No. Conviene escucharla, detener las burlas y acordar medidas de respeto y seguimiento. Que alguien lo llame broma no elimina el daño."
    },
    {
      "meaning": "Reconocer la importancia de votar sin presión y en secreto",
      "example": "Un candidato ofrece regalos a cambio de una foto del voto. ¿Qué problema hay?",
      "guide": "La oferta presiona la decisión y compromete el secreto del voto. Evalúen propuestas sin exigir una prueba de por quién votó cada persona."
    },
    {
      "meaning": "Priorizar necesidades básicas cuando un recurso es limitado",
      "example": "Durante una sequía, ¿por qué podría limitarse temporalmente el riego de jardines antes que el agua para beber?",
      "guide": "Porque beber cubre una necesidad esencial. La medida debe ser proporcionada, temporal y justificada, no una prohibición sin límites."
    },
    {
      "meaning": "Usar datos y reglas claras para acordar un reparto justo",
      "example": "Dos cursos creen que el otro usa más la cancha. ¿Cómo revisarían el reparto?",
      "guide": "Comparen horarios reales, necesidades y criterios conocidos. Un registro permite discutir la situación sin basarse solo en rumores o popularidad."
    },
    {
      "meaning": "Reparar el daño al compartir una imagen privada sin permiso",
      "example": "Se publica una foto privada sin autorización. ¿Qué acciones ayudan a reparar?",
      "guide": "Retirarla, pedir que no se siga compartiendo y asumir responsabilidad con acompañamiento. La respuesta no debe aumentar la exposición de la persona afectada."
    },
    {
      "meaning": "Evitar conclusiones demasiado generales",
      "example": "Una persona no logra usar una página web. ¿Podemos concluir que todas las páginas web son inútiles?",
      "guide": "No. Un caso permite revisar ese problema, pero no demuestra cómo funcionan todas las páginas."
    },
    {
      "meaning": "Comparar beneficios y riesgos de una decisión",
      "example": "Una obra crea empleos pero amenaza una fuente de agua. ¿Cómo analizarla sin mirar solo un lado?",
      "guide": "Comparen impactos, alternativas y medidas de protección, con información y participación de quienes resulten afectados."
    },
    {
      "meaning": "Respetar opiniones diferentes sin obligar a compartirlas",
      "example": "Una exposición cuestiona una tradición sin amenazas ni violencia. Algunas personas no están de acuerdo. ¿Cómo convivir con ese desacuerdo?",
      "guide": "Permitir la expresión y una crítica respetuosa. Escuchar una postura no obliga a aceptarla."
    },
    {
      "meaning": "Reconocer cuándo un vínculo personal puede afectar una decisión",
      "example": "Debes evaluar una compra y una oferta es de tu familiar. ¿Qué conviene hacer?",
      "guide": "Declarar el vínculo y apartarte de la evaluación cuando corresponda. Ocultarlo puede afectar la confianza y la imparcialidad del proceso."
    },
    {
      "meaning": "Calcular la probabilidad de una característica recesiva",
      "example": "En Aa × Aa, la flor es blanca solo si resulta aa. ¿Qué porcentaje de combinaciones tiene aa?",
      "guide": "Las posibilidades son AA, Aa, Aa y aa. Una de cuatro tiene aa: 25 %. Usa un cuadro de dos por dos para contar las combinaciones."
    },
    {
      "meaning": "Comprender qué se conserva cuando una célula se divide por mitosis",
      "example": "Una célula tiene 20 cromosomas y se divide por mitosis en condiciones normales. ¿Cuántas células hijas habrá y cuántos cromosomas tendrá cada una?",
      "guide": "Habrá dos células hijas con 20 cromosomas cada una. No se reduce a la mitad como en la formación de células reproductivas por meiosis."
    },
    {
      "meaning": "Distinguir selección de un cambio hecho por voluntad",
      "example": "Antes de un tratamiento ya existen algunas bacterias resistentes y después sobreviven más de esas. ¿Cambian porque desean sobrevivir?",
      "guide": "No. Las variantes resistentes ya estaban presentes y sobreviven mejor al tratamiento. La evidencia previa ayuda a explicar la selección sin atribuir intención a las bacterias."
    },
    {
      "meaning": "Prever un cambio directo en una cadena alimentaria",
      "example": "Hierba → saltamontes → ranas → serpientes. Si disminuyen las ranas, ¿qué cambio directo puede esperarse si lo demás se mantiene?",
      "guide": "Habrá menos depredación sobre los saltamontes y menos alimento para las serpientes. Sigue las flechas y distingue efectos directos de cambios posteriores."
    },
    {
      "meaning": "Leer cuándo añadir más de algo deja de producir un aumento grande",
      "example": "Una gráfica de crecimiento sube rápido al principio y luego casi se aplana. ¿Podemos decir que seguirá creciendo al mismo ritmo?",
      "guide": "No. En los datos, después de cierto nivel el aumento adicional es pequeño. La gráfica no prueba por sí sola qué pasaría en cualquier otra condición."
    },
    {
      "meaning": "Usar una comparación para saber qué causó un cambio",
      "example": "Para probar un producto mezclado con agua, comparas plantas que reciben la mezcla con otras que reciben solo agua. ¿Para qué?",
      "guide": "Para distinguir el efecto del producto del efecto del agua y de las demás condiciones."
    },
    {
      "meaning": "Comprender cómo se mueve el agua cuando afuera hay más sales",
      "example": "Una célula se coloca en un líquido con más sales que su interior. Si puede pasar agua, ¿hacia dónde se mueve inicialmente?",
      "guide": "El agua sale de la célula por ósmosis. Dibuja una flecha hacia afuera. No significa que la membrana bloquee todo paso de agua."
    },
    {
      "meaning": "Entender que la materia no desaparece cuando se forma un gas",
      "example": "En un recipiente cerrado sin fugas, una reacción transforma parte de los materiales en gas. ¿La masa total baja?",
      "guide": "No. El gas también tiene masa y sigue dentro del sistema. La masa total se conserva aunque cambie el estado de la materia."
    },
    {
      "meaning": "Comparar acidez teniendo en cuenta que el pH no cambia de uno en uno",
      "example": "Compara una solución de pH 3 con otra de pH 5. ¿Cuántas veces mayor es la concentración de H⁺ en la primera?",
      "guide": "Cada unidad de pH representa un factor de 10. Dos unidades representan 10 × 10 = 100 veces. Resuelvan en papel; no necesitan manipular productos ácidos."
    },
    {
      "meaning": "Separar una mezcla usando más de un procedimiento",
      "example": "Hay arena, sal y agua. ¿Cómo recuperar la arena y después la sal sólida?",
      "guide": "Primero filtra: la arena queda en el filtro y la sal disuelta pasa con el agua. Después se evapora el agua para obtener la sal. Trabaja el procedimiento en un dibujo; una actividad real requiere supervisión."
    },
    {
      "meaning": "Calcular neutrones usando los datos de un átomo",
      "example": "Un átomo tiene número atómico 6 y número másico 14. ¿Cuántos neutrones tiene?",
      "guide": "El número atómico indica 6 protones; el másico suma protones y neutrones. Por eso hay 14 − 6 = 8 neutrones."
    },
    {
      "meaning": "Usar las proporciones de una ecuación química",
      "example": "En 2H₂ + O₂ → 2H₂O, hay oxígeno suficiente y se usan 6 mol de H₂. ¿Cuántos mol de agua pueden formarse?",
      "guide": "La proporción H₂:agua es 2:2, equivalente a 1:1. Se forman 6 mol de agua. El mol es una unidad para expresar cantidades de partículas."
    },
    {
      "meaning": "Sumar resistencias en serie y calcular la corriente",
      "example": "Dos resistencias de 2 y 4 Ω están en serie con una batería ideal de 12 V. ¿Qué corriente pasa?",
      "guide": "En serie se suman: 2 + 4 = 6 Ω. La corriente es 12/6 = 2 A. Haz el cálculo en papel; no es necesario manipular conexiones."
    },
    {
      "meaning": "Entender que los caminos en paralelo funcionan de forma independiente",
      "example": "Dos resistencias están en paralelo a una batería ideal. Se abre uno de los caminos. ¿El otro pierde necesariamente el voltaje?",
      "guide": "No. Si el otro sigue conectado, conserva el voltaje de la batería y puede seguir conduciendo. Dibuja los dos caminos y marca cuál se abrió."
    },
    {
      "meaning": "Calcular cuánto cambia la velocidad en cada segundo",
      "example": "Un carrito pasa de 0 a 8 m/s en 4 segundos con aceleración constante. ¿Cuál es la aceleración?",
      "guide": "Divide el cambio de velocidad entre el tiempo: 8/4 = 2 m/s². En este caso la velocidad aumenta 2 m/s por segundo."
    },
    {
      "meaning": "Sumar distancias cuando se cambia de velocidad",
      "example": "Un móvil va a 3 m/s durante 2 segundos y a 1 m/s durante 4 segundos, sin cambiar de dirección. ¿Qué distancia recorre?",
      "guide": "Primer tramo: 3 × 2 = 6 m. Segundo: 1 × 4 = 4 m. Total 10 m. En la gráfica suma las áreas de los dos rectángulos."
    },
    {
      "meaning": "Relacionar la caída de un objeto con un cambio de energía",
      "example": "Una piedra cae desde el reposo sin resistencia del aire. ¿Qué pasa con su energía de altura y de movimiento?",
      "guide": "Al bajar, su energía potencial gravitatoria disminuye y su energía cinética aumenta. En esas condiciones, la energía mecánica total se conserva."
    },
    {
      "meaning": "Entender cómo frecuencia y longitud de onda se relacionan",
      "example": "En un medio de rapidez fija de 4 m/s, la frecuencia sube de 1 a 2 Hz. ¿Cómo cambia la longitud de onda?",
      "guide": "Pasa de 4/1 = 4 m a 4/2 = 2 m. Al duplicarse la frecuencia, la longitud se reduce a la mitad si la rapidez se mantiene."
    },
    {
      "meaning": "Calcular cuánto queda después de varias vidas medias",
      "example": "Una muestra tiene 40 g y vida media de 5 años. ¿Cuánto queda del isótopo original después de 15 años?",
      "guide": "Han pasado tres vidas medias: 40 → 20 → 10 → 5 g. Cada periodo deja la mitad de lo que había, no resta siempre la misma cantidad."
    },
    {
      "meaning": "Comparar porcentajes cuando los grupos tienen tamaños distintos",
      "example": "En un grupo germinan 8 de 10 semillas y en otro 15 de 20. ¿Cuál tiene mayor proporción?",
      "guide": "El primero: 80 % frente a 75 %. El segundo tiene más semillas germinadas, pero una proporción menor. Repitan el ensayo antes de afirmar una diferencia general."
    },
    {
      "meaning": "Encontrar por qué un servicio cambió su selección de libros",
      "example": "Lee: “After talking to families, we added books for children”. ¿Qué motivó el cambio?",
      "guide": "Escuchar las necesidades de las familias. Busca la parte del texto que explica la causa, sin inventar problemas que no menciona."
    },
    {
      "meaning": "Relacionar una solución con el problema que busca resolver",
      "example": "Lee: “Rain damaged the labels, so we used waterproof tags”. ¿Qué problema solucionan las etiquetas resistentes al agua?",
      "guide": "El daño de la lluvia a las etiquetas. “Waterproof” significa resistente al agua; no resuelve por sí solo la distancia ni el precio de los libros."
    },
    {
      "meaning": "Comprender una obligación sencilla en inglés",
      "example": "Lee: “Return the book within two weeks”. ¿Qué debe hacer quien lo presta?",
      "guide": "Devolverlo dentro de dos semanas. No dice que tenga que comprarlo. Señala el verbo “return” y el plazo."
    },
    {
      "meaning": "Comprender por qué una actividad continúa después de un cambio",
      "example": "Lee: “The library reopened, but some neighbours lived far away. We kept visiting them”. ¿Por qué continuaron las visitas?",
      "guide": "Porque algunas personas seguían lejos y necesitaban acceso. Abrir el edificio no elimina todas las dificultades para llegar."
    },
    {
      "meaning": "Identificar la enseñanza general de una historia en inglés",
      "example": "Un equipo cambia sus libros después de escuchar a los lectores. ¿Qué idea resume la experiencia?",
      "guide": "Un servicio puede mejorar al atender las necesidades de quienes lo usan. No supone que los gustos del equipo sean los de todos."
    },
    {
      "meaning": "Localizar el lugar de encuentro en una instrucción en inglés",
      "example": "Lee: “Meet at school, not at the museum”. ¿Dónde se reúnen?",
      "guide": "En el colegio. La parte “not at the museum” descarta el museo. Revisa la oración completa antes de elegir."
    },
    {
      "meaning": "Encontrar la razón de una instrucción en inglés",
      "example": "Lee: “Bring lunch because the café is closed”. ¿Por qué deben llevar comida?",
      "guide": "Porque la cafetería está cerrada. “Because” conecta la instrucción con su razón."
    },
    {
      "meaning": "Reconocer por qué cambia un horario en un mensaje en inglés",
      "example": "Lee: “We will walk in the afternoon because another class uses the trail in the morning”. ¿Por qué movieron la caminata?",
      "guide": "Porque otro grupo usa el sendero por la mañana. Identifica el motivo, no solo el horario nuevo."
    },
    {
      "meaning": "Comprender un plan alternativo según una condición",
      "example": "Lee: “If it rains heavily, we will attend an indoor workshop”. ¿Qué harán si llueve fuerte?",
      "guide": "Participarán en un taller en un espacio cerrado. “If” introduce la condición; la segunda parte describe el plan."
    },
    {
      "meaning": "Identificar a quién pedir algo y antes de qué día",
      "example": "Lee: “Ask Ms Carter by Wednesday if you need boots”. ¿Qué debes hacer para pedir botas prestadas?",
      "guide": "Avisar a Ms Carter a más tardar el miércoles. La instrucción reúne una persona, un plazo y una necesidad."
    },
    {
      "meaning": "Expresar en inglés algo que ya había ocurrido antes de llegar",
      "example": "Completa: “When we arrived, the film ___ started”.",
      "guide": "“Had”: la película ya había comenzado cuando llegamos. Marca en una línea de tiempo el inicio de la película y después la llegada."
    },
    {
      "meaning": "Hablar de una situación imaginada en el presente",
      "example": "Completa: “If I ___ more time, I would read more”.",
      "guide": "“Had”: si tuviera más tiempo, leería más. Aunque aparece una forma de pasado, aquí expresa una situación imaginada, no un hecho pasado."
    },
    {
      "meaning": "Expresar que algo fue hecho por otras personas en el pasado",
      "example": "Completa: “The bikes ___ repaired last week”.",
      "guide": "“Were”: las bicicletas fueron reparadas la semana pasada. “Bikes” es plural y “last week” sitúa la acción en el pasado."
    },
    {
      "meaning": "Elegir una palabra que indica de quién es algo",
      "example": "Completa: “The student ___ book is here is my friend”.",
      "guide": "“Whose”: el estudiante cuyo libro está aquí es mi amigo. “Whose” relaciona a la persona con algo que le pertenece."
    },
    {
      "meaning": "Usar un conector que expresa contraste en inglés",
      "example": "Completa: “___ it was raining, we continued”: Although o Because.",
      "guide": "“Although”: aunque llovía, continuamos. Presenta algo que ocurre a pesar de la lluvia; “because” expresaría una causa."
    },
    {
      "meaning": "Distinguir el inicio de un periodo de su duración en inglés",
      "example": "Completa: “She has lived here ___ 2020” y “She has lived here ___ three years”.",
      "guide": "“Since 2020” indica cuándo empezó. “For three years” indica cuánto tiempo lleva. Practica con una fecha y una duración nuevas."
    },
    {
      "meaning": "Responder con apoyo a alguien que está nervioso en inglés",
      "example": "Un amigo dice: “I am nervous about my presentation”. ¿Qué respuesta le ayudaría?",
      "guide": "Una opción es “You can practise with me; I can listen”: puedes practicar conmigo, puedo escucharte. La respuesta debe relacionarse con su preocupación."
    },
    {
      "meaning": "Reconocer una obligación en inglés",
      "example": "Completa: “You ___ wear safety glasses. It is compulsory”.",
      "guide": "“Must”: debes usar gafas de seguridad. “Compulsory” significa obligatorio; no expresa solo una posibilidad."
    },
    {
      "meaning": "Comprender una instrucción de guardar un trabajo a tiempo",
      "example": "Lee: “Save your work before the session ends”. ¿Cuándo debes guardar el archivo?",
      "guide": "Antes de que termine la sesión. “Before” significa antes de. No esperes a que el tiempo ya se haya acabado."
    },
    {
      "meaning": "Reconocer dos maneras de expresar la misma comparación",
      "example": "“This task is less difficult than the last one”. ¿Significa que la tarea actual es más fácil o más difícil?",
      "guide": "Más fácil. “Less difficult” y “easier” expresan la misma comparación en este contexto."
    }
  ],
  "topics": [
    "Precios, intereses y porcentajes",
    "Resolver problemas con cantidades y letras",
    "Comparar gráficas y encontrar un máximo",
    "Simplificar expresiones",
    "Proporciones, sombras y escalas",
    "Medidas y volúmenes",
    "Probabilidad sin devolver fichas",
    "Promedios y datos centrales",
    "Crecimiento que se repite",
    "Comprender una historia y sus cambios",
    "Revisar datos y conclusiones de un texto",
    "Reconocer la idea principal",
    "Comparar dos opiniones",
    "Entender conectores entre ideas",
    "Entender el lenguaje figurado",
    "Decisiones y acuerdos de la comunidad",
    "Respeto, derechos y reparación",
    "Revisar generalizaciones",
    "Decidir con imparcialidad",
    "Herencia y división de las células",
    "Seres vivos y relaciones alimentarias",
    "Leer y comparar experimentos",
    "Agua y sales en las células",
    "Materia, átomos y reacciones",
    "Acidez y separación de mezclas",
    "Circuitos eléctricos",
    "Movimiento y cambios de energía",
    "Frecuencia y longitud de onda",
    "Vida media y cantidad restante",
    "Inglés: información e instrucciones",
    "Inglés: sentido y comparación",
    "Inglés: tiempos verbales y relaciones",
    "Inglés: contraste entre ideas",
    "Inglés: responder con apoyo",
    "Inglés: reconocer obligaciones"
  ]
};
