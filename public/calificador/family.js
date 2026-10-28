const FAMILY10 = {
  "questions": [
    {
      "meaning": "Entender aumentos y descuentos en un precio",
      "example": "Un producto cuesta $100.000. Primero sube 20 % y luego baja 20 %. ¿Vuelve al precio inicial?",
      "guide": "El aumento lleva el precio a $120.000. El descuento se calcula sobre ese nuevo valor: $24.000. El precio final es $96.000."
    },
    {
      "meaning": "Calcular cuántas ventas hacen falta para ganar dinero",
      "example": "Una venta deja $5.000 después de pagar el producto. Hay $20.000 de gastos fijos. ¿Cuántas ventas hacen falta para empezar a ganar?",
      "guide": "Con 4 ventas solo se cubren los gastos. Con 5 quedan $5.000 de ganancia. Distingue cubrir gastos de obtener ganancia."
    },
    {
      "meaning": "Leer en una gráfica cuándo un resultado es menor que cero",
      "example": "Dibuja una curva que cruza la línea del cero en x = 2 y x = 5 y queda debajo entre esos puntos. ¿Dónde es negativo el resultado?",
      "guide": "Es negativo entre 2 y 5, sin incluirlos. Señalen juntos la parte de la curva que queda debajo de la línea del cero."
    },
    {
      "meaning": "Simplificar una expresión sin cambiar su valor",
      "example": "Descompón (x² − 9)/(x² + 6x + 9) en factores y simplifica.",
      "guide": "Se convierte en (x − 3)(x + 3)/(x + 3)² y queda (x − 3)/(x + 3), siempre que x no sea −3. Solo se cancelan factores completos."
    },
    {
      "meaning": "Comprobar si una solución realmente sirve",
      "example": "Prueba x = 0 y x = 3 en √(x + 1) = x − 1. ¿Cuál funciona?",
      "guide": "Con x = 0 los lados son 1 y −1: no funciona. Con x = 3 ambos son 2: sí funciona. Reemplazar permite comprobar la respuesta."
    },
    {
      "meaning": "Sumar una lista de números que crece siempre lo mismo",
      "example": "Suma 2 + 5 + 8 + 11. Busca una forma de hacerlo por parejas.",
      "guide": "El primero y el último suman 13; los dos del centro también suman 13. El total es 26. Construyan después otra lista con un aumento fijo."
    },
    {
      "meaning": "Relacionar dos puntos con una línea y su regla",
      "example": "Una línea pasa por (0, 1) y (2, 5). ¿Cuánto sube por cada paso hacia la derecha?",
      "guide": "Sube 4 al avanzar 2: sube 2 por cada paso. Su regla es y = 2x + 1. Dibujen los puntos para comprobarlo."
    },
    {
      "meaning": "Calcular una altura usando un dibujo y un ángulo",
      "example": "Una persona ve la cima de una torre a 45°, está a 10 m de la base y sus ojos a 1,5 m del suelo. ¿Cuánto mide la torre?",
      "guide": "A 45°, la diferencia de altura es igual a la distancia horizontal: 10 m. Al añadir la altura de los ojos, la torre mide 11,5 m."
    },
    {
      "meaning": "Elegir los lados correctos para una razón trigonométrica",
      "example": "Dibuja un triángulo rectángulo con lados 3, 4 y 5. Para el ángulo opuesto al lado de 3, ¿cuál es el coseno?",
      "guide": "El coseno compara el cateto que toca ese ángulo con el lado más largo: 4/5. Marquen primero el ángulo para no confundir los lados."
    },
    {
      "meaning": "Comparar cuánto cabe en un cono y en un cilindro",
      "example": "Un cilindro tiene volumen de 60 cm³. ¿Cuánto cabe en un cono con la misma base y altura?",
      "guide": "El cono contiene la tercera parte: 20 cm³. Pueden comprobar la idea con recipientes o un dibujo."
    },
    {
      "meaning": "Calcular posibilidades cuando no se devuelve lo que se saca",
      "example": "Una bolsa tiene 2 fichas rojas y 2 azules. Sacas dos sin devolver la primera. ¿Qué posibilidad hay de obtener colores distintos?",
      "guide": "Hay dos caminos: roja-azul y azul-roja. Cada uno tiene probabilidad (2/4) × (2/3). Al sumarlos da 2/3."
    },
    {
      "meaning": "Calcular posibilidades dentro de un grupo específico",
      "example": "De 10 estudiantes que juegan fútbol, 4 también nadan. Si elegimos a alguien del grupo de fútbol, ¿qué posibilidad hay de que nade?",
      "guide": "Es 4 de 10, es decir 40 %. El grupo de referencia son quienes juegan fútbol, no todos los estudiantes del colegio."
    },
    {
      "meaning": "Encontrar un dato faltante a partir del promedio",
      "example": "Las notas 4 y 6 tienen promedio 5. Agregas una tercera nota y el promedio queda en 6. ¿Qué nota agregaste?",
      "guide": "Las tres notas deben sumar 18. Las primeras suman 10, así que falta 8. Comprueba: (4 + 6 + 8)/3 = 6."
    },
    {
      "meaning": "Entender que un mismo promedio puede ocultar diferencias",
      "example": "Compara las listas 4, 5, 6 y 1, 5, 9. Ambas tienen promedio 5. ¿Cuál tiene valores más separados?",
      "guide": "La segunda. Un mismo promedio no significa que los datos sean iguales ni que estén igual de cerca entre sí."
    },
    {
      "meaning": "Calcular un crecimiento que se aplica sobre un nuevo total",
      "example": "Una población de 100 crece 10 % cada año. ¿Cuánto habrá después de dos años?",
      "guide": "Primero llega a 110. El segundo aumento es 10 % de 110, es decir 11. El resultado es 121, no 120."
    },
    {
      "meaning": "Encontrar el número que indica cuántas veces multiplicar una base",
      "example": "¿Qué valor de x cumple 2^(x + 1) = 16? Escribe 16 como producto de doses.",
      "guide": "16 = 2 × 2 × 2 × 2 = 2⁴. Por eso x + 1 = 4 y x = 3."
    },
    {
      "meaning": "Reconocer valores que no se pueden usar en una división",
      "example": "En 1/(x − 3), prueba x = 2 y x = 3. ¿Cuál no se puede usar?",
      "guide": "x = 3 haría que se dividiera entre cero. Por eso se permite cualquier valor excepto 3."
    },
    {
      "meaning": "Comprobar si un punto está a la distancia correcta del centro",
      "example": "Una circunferencia tiene centro (0, 0) y radio 2. ¿El punto (0, 2) queda sobre su borde? ¿Y (0, 1)?",
      "guide": "(0, 2) está a distancia 2: sí está sobre el borde. (0, 1) está a distancia 1: está dentro, pero no sobre el borde."
    },
    {
      "meaning": "Encontrar dos números usando su suma y su producto",
      "example": "Dos números positivos suman 10 y multiplicados dan 21. ¿Cuáles son y cuánto se diferencian?",
      "guide": "Son 3 y 7, porque 3 + 7 = 10 y 3 × 7 = 21. Se diferencian en 4."
    },
    {
      "meaning": "Comparar el tiempo de un viaje antes y después de cambiar la velocidad",
      "example": "Para recorrer 120 km, primero se viaja a 40 km/h y luego a 60 km/h. ¿Cuánto se reduce el tiempo?",
      "guide": "Antes son 3 horas y después 2. Se ahorra 1 de las 3 horas iniciales: la reducción es de aproximadamente 33,3 %."
    },
    {
      "meaning": "Reconocer el problema principal de una historia",
      "example": "Una biblioteca publica libros en línea, pero solo permite encontrarlos con un código que los lectores desconocen. ¿Cuál es el problema principal?",
      "guide": "Los libros están disponibles, pero no son fáciles de encontrar. Pide al estudiante explicar la diferencia entre tener información y poder usarla."
    },
    {
      "meaning": "Sacar una conclusión apoyada en una situación del texto",
      "example": "Un vecino no encuentra un documento porque la búsqueda pide un código. ¿Eso demuestra que el documento no existe?",
      "guide": "No. La dificultad está en cómo buscarlo. Busquen la frase que apoya esa conclusión y eviten añadir cosas que el texto no dice."
    },
    {
      "meaning": "Reconocer cuándo una forma de medir deja algo importante por fuera",
      "example": "Un colegio mide una biblioteca solo por el número de libros, aunque muchos no pueden leerse. ¿Qué falta revisar?",
      "guide": "Cuántos libros pueden utilizarse realmente. Contar una cantidad no siempre informa sobre su utilidad."
    },
    {
      "meaning": "Entender por qué conviene mirar más de un resultado",
      "example": "Una biblioteca registra libros disponibles y consultas resueltas. ¿Por qué no basta con uno solo?",
      "guide": "Los dos datos responden preguntas diferentes: cuánto material hay y cuánta ayuda presta. Pidan un ejemplo de cada uno."
    },
    {
      "meaning": "Evitar conclusiones demasiado generales",
      "example": "Una persona no logra usar una página web. ¿Podemos concluir que todas las páginas web son inútiles?",
      "guide": "No. Un caso permite revisar ese problema, pero no demuestra cómo funcionan todas las páginas."
    },
    {
      "meaning": "Encontrar la idea que un autor quiere defender",
      "example": "Un texto dice que una vía rápida debe considerar también a peatones y vecinos. Resume su idea principal en una oración.",
      "guide": "Una posible respuesta: las mejoras deben tener en cuenta a todas las personas afectadas, no solo a los conductores."
    },
    {
      "meaning": "Comprender para qué sirve una aclaración del autor",
      "example": "Alguien dice: “No propongo quitar los carros; propongo mejorar el paso de los peatones”. ¿Qué confusión intenta evitar?",
      "guide": "Que se interprete su propuesta como una prohibición de los carros. La aclaración precisa lo que realmente está defendiendo."
    },
    {
      "meaning": "Distinguir una pista de una prueba suficiente",
      "example": "Una vecina cuenta que ahora tarda más en llegar al centro de salud. ¿Su caso prueba que todo el barrio tarda más?",
      "guide": "No. Su experiencia muestra un problema que conviene investigar con más personas y mediciones."
    },
    {
      "meaning": "Elegir qué dato ayudaría a comprender mejor una situación",
      "example": "Para evaluar una vía, ya sabemos la velocidad de los carros. ¿Qué otro dato ayudaría a entender su efecto en quienes caminan?",
      "guide": "El tiempo que tardan los peatones en llegar a sus destinos antes y después de la obra."
    },
    {
      "meaning": "Entender cómo se complementan experiencias y datos",
      "example": "Varias familias dicen que el trayecto al colegio empeoró. ¿Cómo podemos comprobar y comprender ese comentario?",
      "guide": "Escuchar qué cambió y medir tiempos o distancias. La experiencia orienta qué datos hacen falta; no sustituye la comprobación."
    },
    {
      "meaning": "Encontrar una idea compartida por dos textos",
      "example": "Un texto pide revisar errores de una máquina; otro pide que las personas puedan cuestionar sus resultados. ¿En qué coinciden?",
      "guide": "Ambos defienden revisar los resultados y permitir preguntas. Subrayen una frase de cada texto que muestre la coincidencia."
    },
    {
      "meaning": "Encontrar una ventaja mencionada directamente",
      "example": "Un texto dice: “El programa puede revisar miles de registros en minutos”. ¿Qué ventaja menciona?",
      "guide": "La rapidez para revisar mucha información. No está afirmando que nunca se equivoque."
    },
    {
      "meaning": "Reconocer lo que un resultado general puede ocultar",
      "example": "Un sistema acierta 90 de 100 casos, pero falla casi siempre con un grupo pequeño. ¿El total demuestra que funciona igual para todos?",
      "guide": "No. Hace falta revisar por grupos. Un buen resultado general puede esconder dificultades para algunas personas."
    },
    {
      "meaning": "Elegir una acción que responda a las preocupaciones de dos textos",
      "example": "Si dos textos piden revisar errores y escuchar a los afectados, ¿qué harías con una decisión automática?",
      "guide": "Revisaría los errores y ofrecería una oportunidad para aportar información adicional. Explica cómo esa acción responde a ambos textos."
    },
    {
      "meaning": "Distinguir lo que un texto apoya de lo que no afirma",
      "example": "Un texto dice que una máquina puede equivocarse. ¿Eso permite afirmar que las personas siempre deciden bien?",
      "guide": "No. Esa afirmación no está respaldada. Pide señalar qué frase tendría que existir para sostenerla."
    },
    {
      "meaning": "Comprender qué representa un objeto en una historia",
      "example": "En un relato, una familia conserva una taza sin usar porque pertenecía al abuelo. ¿Qué puede representar?",
      "guide": "Puede representar su recuerdo o su ausencia. No es solo una taza: el contexto le da un significado emocional."
    },
    {
      "meaning": "Reconocer qué provoca un cambio en un personaje",
      "example": "Un personaje evita hablar del abuelo hasta que una niña pregunta por una historia suya. ¿Qué inicia el cambio?",
      "guide": "La pregunta de la niña. Localicen el momento en que cambia su comportamiento y expliquen por qué."
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
      "meaning": "Relacionar recuerdos con lo que sucede en el presente",
      "example": "Una niña observa la lluvia mientras su tía cuenta cómo lo hacía el abuelo. ¿Cómo se conectan pasado y presente?",
      "guide": "La actividad actual permite compartir lo aprendido en el pasado. Busquen el detalle concreto que muestra esa conexión."
    },
    {
      "meaning": "Comparar necesidades antes de tomar una decisión comunitaria",
      "example": "Hay dinero para decorar una plaza o reparar el agua de un barrio. ¿Qué revisarían antes de decidir?",
      "guide": "Qué necesidad es más urgente, cuántas personas afecta, cuánto cuesta y qué alternativas existen. Escuchen también a la comunidad."
    },
    {
      "meaning": "Reconocer si una encuesta representa a todas las personas",
      "example": "En una encuesta voluntaria responden 20 de 200 estudiantes y 18 apoyan una propuesta. ¿Podemos decir que el 90 % de todo el colegio la apoya?",
      "guide": "No. Es el 90 % de quienes respondieron. Primero hay que revisar si esas 20 personas representan a las demás."
    },
    {
      "meaning": "Comparar seguridad y privacidad sin ignorar ninguna",
      "example": "El colegio quiere instalar cámaras. ¿Qué preguntas ayudan a decidir de forma responsable?",
      "guide": "Si resolverán el problema, quién verá los videos, cómo se protegerá la privacidad y si hay otras opciones."
    },
    {
      "meaning": "Distinguir una respuesta con razones de un ataque personal",
      "example": "Una persona pregunta por el costo de una obra y recibe: “Usted siempre se queja”. ¿Respondieron a su pregunta?",
      "guide": "No. Atacaron a la persona sin analizar el costo. Practiquen una respuesta centrada en los datos."
    },
    {
      "meaning": "Proponer formas de acceso para quienes encuentran barreras",
      "example": "La matrícula solo puede hacerse por una app y algunas familias no tienen internet. ¿Cómo ayudar sin excluirlas?",
      "guide": "Ofrecer otra vía con la misma información y los mismos plazos, por ejemplo atención presencial o telefónica."
    },
    {
      "meaning": "Respetar opiniones diferentes sin obligar a compartirlas",
      "example": "Una exposición cuestiona una tradición sin amenazas ni violencia. Algunas personas no están de acuerdo. ¿Cómo convivir con ese desacuerdo?",
      "guide": "Permitir la expresión y una crítica respetuosa. Escuchar una postura no obliga a aceptarla."
    },
    {
      "meaning": "Pensar cómo reparar el daño de un rumor",
      "example": "Un grupo difundió algo falso sobre una compañera. ¿Basta con disculparse en privado si el rumor sigue circulando?",
      "guide": "No. Deben corregirlo ante quienes lo recibieron y acordar con la afectada cómo evitar nuevas difusiones."
    },
    {
      "meaning": "Reconocer cuándo la participación puede cambiar una decisión",
      "example": "Una comunidad puede opinar sobre una obra, pero solo después de aprobarla. ¿Cuál es la dificultad?",
      "guide": "Sus ideas llegan demasiado tarde para influir en la decisión. Pidan explicar cuándo debería abrirse la conversación."
    },
    {
      "meaning": "Entender que apoyar según la necesidad puede ser justo",
      "example": "Dos familias necesitan transporte; una vive mucho más lejos y tiene menos ingresos. ¿Por qué podría recibir más apoyo?",
      "guide": "Porque enfrenta barreras mayores. El apoyo debe basarse en necesidades comprobables y reglas claras, no en favoritismos."
    },
    {
      "meaning": "Buscar varias explicaciones antes de sacar una conclusión",
      "example": "Después de abrir un canal confidencial aumentan las denuncias. ¿Eso demuestra por sí solo que hubo más violencia?",
      "guide": "No. También puede ser más fácil o seguro denunciar. Hace falta comparar otros datos antes de concluir."
    },
    {
      "meaning": "Entender cómo se combinan características heredadas",
      "example": "En un cruce Aa × aa, escribe las posibles combinaciones de las letras. ¿Cuántas tienen A?",
      "guide": "Las posibilidades son Aa y aa, en la misma proporción: la mitad tiene A. Para dos características independientes, se combina la probabilidad de cada una."
    },
    {
      "meaning": "Comprender por qué las células reproductivas tienen la mitad de cromosomas",
      "example": "Si una especie tiene 46 cromosomas, ¿cuántos aporta cada célula reproductiva y qué pasa cuando se unen?",
      "guide": "Cada una aporta 23. Al unirse vuelven a completar 46. Si aportaran 46 cada una, el número se duplicaría."
    },
    {
      "meaning": "Seguir cómo disminuye la energía en una cadena alimentaria",
      "example": "Una planta tiene 1.000 unidades de energía y pasa cerca del 10 % a cada nivel. ¿Cuánto llega al animal que come al herbívoro?",
      "guide": "Al herbívoro llegan 100 y al siguiente animal 10. Dibujen los niveles para no saltarse un paso."
    },
    {
      "meaning": "Distinguir vivir separados de pertenecer a especies diferentes",
      "example": "Dos grupos viven a lados distintos de una montaña. ¿Qué dato ayuda a saber si ya son especies diferentes?",
      "guide": "Revisar si pueden tener descendencia fértil al cruzarse en condiciones adecuadas. Estar separados no basta por sí solo."
    },
    {
      "meaning": "Leer resultados de un experimento sin asegurar más de lo que muestran",
      "example": "Dos grupos de plantas tienen promedios de 12 y 13 cm, pero sus tamaños varían bastante. ¿El promedio mayor prueba por sí solo que un tratamiento es mejor?",
      "guide": "No. Hace falta revisar la variación y repetir o analizar los resultados. Comparen varias plantas, no solo el promedio."
    },
    {
      "meaning": "Usar una comparación para saber qué causó un cambio",
      "example": "Para probar un producto mezclado con agua, comparas plantas que reciben la mezcla con otras que reciben solo agua. ¿Para qué?",
      "guide": "Para distinguir el efecto del producto del efecto del agua y de las demás condiciones."
    },
    {
      "meaning": "Entender qué hacen las levaduras cuando hay poco oxígeno",
      "example": "Una levadura usa azúcar con poco oxígeno y produce alcohol y gas. ¿Cómo se llama este proceso?",
      "guide": "Fermentación alcohólica. Relacionen las sustancias de entrada con las de salida; el gas es dióxido de carbono."
    },
    {
      "meaning": "Comprender que un cambio en el ADN no siempre cambia la proteína",
      "example": "Imagina que dos instrucciones distintas indican la misma pieza. Si una cambia por la otra, ¿cambia la pieza final?",
      "guide": "No necesariamente. En el ADN, varias combinaciones pueden indicar el mismo aminoácido, una pieza de las proteínas."
    },
    {
      "meaning": "Calcular cuánta sal hay por cada litro de una mezcla",
      "example": "Una mezcla tiene 5 g de sal en un volumen final de 250 mL. ¿Cuánto habría por litro a la misma concentración?",
      "guide": "Un litro contiene cuatro veces ese volumen. Por eso serían 20 g por litro. Primero relacionen mL con litros."
    },
    {
      "meaning": "Entender qué pasa con la concentración al añadir agua",
      "example": "Un jugo ocupa 100 mL y se añade agua hasta llegar a 400 mL. Sin añadir más jugo, ¿cómo cambia su concentración?",
      "guide": "Queda en la cuarta parte. La cantidad de jugo inicial se mantiene, pero está repartida en cuatro veces más volumen."
    },
    {
      "meaning": "Identificar qué ingrediente limita cuánto puede producirse",
      "example": "Cada sándwich necesita 2 rebanadas de pan y 1 de queso. Tienes 6 panes y 10 quesos. ¿Cuántos sándwiches puedes hacer?",
      "guide": "Solo 3: el pan se acaba primero. En una reacción ocurre algo parecido; se usan las proporciones de la receta química."
    },
    {
      "meaning": "Calcular la carga de una partícula",
      "example": "Una partícula tiene 3 protones positivos y 4 electrones negativos. ¿Cuál es su carga total?",
      "guide": "Queda una carga negativa: −1. Cuenten qué cargas se compensan y cuál sobra."
    },
    {
      "meaning": "Reconocer cuándo un proceso toma energía del entorno",
      "example": "Si los productos de una reacción quedan con más energía que los materiales iniciales, ¿de dónde viene esa energía?",
      "guide": "La reacción la absorbe del entorno. Se llama endotérmica. En el dibujo, el nivel final queda más alto que el inicial."
    },
    {
      "meaning": "Entender por qué un material en pedazos pequeños puede reaccionar más rápido",
      "example": "Compara una tableta entera con la misma tableta triturada en agua, en condiciones iguales. ¿Cuál suele reaccionar más rápido?",
      "guide": "La triturada, porque más superficie toca el agua al mismo tiempo. El tamaño de los pedazos cambia el contacto, no la cantidad de material."
    },
    {
      "meaning": "Relacionar fuerza, masa y cambio de velocidad",
      "example": "Empujas un objeto de 2 kg con una fuerza neta de 6 N. ¿Cuál es su aceleración?",
      "guide": "Divide fuerza entre masa: 6/2 = 3 m/s². Explica que la aceleración indica cómo cambia la velocidad."
    },
    {
      "meaning": "Calcular distancia a partir de una gráfica de velocidad",
      "example": "Un objeto pasa de 0 a 4 m/s en 2 segundos y mantiene 4 m/s por 1 segundo. ¿Qué distancia recorre?",
      "guide": "Primero recorre el área de un triángulo: 2 × 4 / 2 = 4 m. Después, el área del rectángulo: 1 × 4 = 4 m. En total 8 m."
    },
    {
      "meaning": "Entender la potencia como trabajo realizado en cierto tiempo",
      "example": "Dos máquinas realizan 100 unidades de trabajo: una tarda 2 segundos y otra 4. ¿Cuál tiene mayor potencia?",
      "guide": "La primera: hace el mismo trabajo en menos tiempo. Sus potencias son 50 y 25 unidades de trabajo por segundo."
    },
    {
      "meaning": "Relacionar voltaje y resistencia con la potencia eléctrica",
      "example": "Un circuito ideal tiene 6 V y una resistencia de 3 Ω. ¿Qué potencia se obtiene?",
      "guide": "Usa P = V²/R: 6²/3 = 12 W. Hagan el cálculo en papel; no hace falta manipular conexiones eléctricas."
    },
    {
      "meaning": "Relacionar la velocidad de una onda con la separación entre sus repeticiones",
      "example": "Una onda viaja a 6 m/s y repite 3 ciclos por segundo. ¿Cuánto mide cada ciclo?",
      "guide": "Divide 6 entre 3: la longitud de onda es 2 m. Dibujen tres ciclos que ocupen juntos 6 m."
    },
    {
      "meaning": "Distinguir que dos cosas ocurran juntas de que una cause la otra",
      "example": "Quienes duermen menos obtienen notas más bajas en una encuesta. ¿Eso prueba por sí solo que dormir menos causó esas notas?",
      "guide": "No. Pueden intervenir otros factores. Para concluir una causa hace falta investigar y controlar mejor la comparación."
    },
    {
      "meaning": "Encontrar por qué una medición en inglés tiene limitaciones",
      "example": "Lee: “Rain can affect the sensor, and one street does not represent the whole city.” ¿Por qué no basta una sola lectura?",
      "guide": "Porque la lluvia puede afectar el aparato y una calle no representa toda la ciudad. Señalen las dos razones en el texto."
    },
    {
      "meaning": "Comprender para qué se compara un aparato con otro",
      "example": "Lee: “We compared our device with a reference instrument.” ¿Para qué puede servir esa comparación?",
      "guide": "Para comprobar cómo mide el propio aparato. “Compared” significa “comparamos”; no significa que el aparato sea perfecto."
    },
    {
      "meaning": "Encontrar cómo reaccionó un grupo ante un retraso",
      "example": "Lee: “The team explained why more tests were needed.” ¿Qué hizo el equipo?",
      "guide": "Explicó por qué hacían falta más pruebas. Busquen el verbo que muestra su acción: “explained”."
    },
    {
      "meaning": "Reconocer el aporte principal de un proyecto en un texto en inglés",
      "example": "Lee: “The project helped neighbours ask better questions.” ¿Cuál fue su aporte?",
      "guide": "Ayudar a los vecinos a hacer mejores preguntas. No afirmó resolverlo todo. Pidan señalar la frase que lo dice."
    },
    {
      "meaning": "Elegir un título que resuma un texto en inglés",
      "example": "Un texto cuenta que un proyecto mejoró al reconocer sus límites. ¿Qué título encaja mejor: “A perfect machine” o “Learning from limitations”?",
      "guide": "“Learning from limitations”: aprender de las limitaciones. El título debe representar la idea general, no prometer perfección."
    },
    {
      "meaning": "Localizar la razón de un cambio en un mensaje en inglés",
      "example": "Lee: “Meet at the park. The bridge is closed for repairs.” ¿Por qué ya no se reúnen en el puente?",
      "guide": "Porque está cerrado por reparaciones. Busquen “closed for repairs”, que explica el motivo."
    },
    {
      "meaning": "Comprender una instrucción de seguridad en inglés",
      "example": "Lee: “Do not touch sharp objects. Tell the coordinator.” ¿Qué debes hacer al encontrar algo cortante?",
      "guide": "No tocarlo y avisar al coordinador. Subrayen tanto la prohibición como la acción que sí se debe realizar."
    },
    {
      "meaning": "Entender para qué se guarda información en un texto en inglés",
      "example": "Lee: “We record the waste types to compare future clean-ups.” ¿Para qué registran los tipos de basura?",
      "guide": "Para comparar futuras jornadas de limpieza. “To compare” indica la finalidad de la acción."
    },
    {
      "meaning": "Comprender una condición expresada con unless",
      "example": "Lee: “Come at eight unless we send a cancellation message.” Si no llega ningún mensaje, ¿a qué hora vas?",
      "guide": "A las ocho. “Unless” significa “a menos que”: el horario se mantiene si no se cumple la excepción."
    },
    {
      "meaning": "Aplicar una instrucción en inglés a una situación real",
      "example": "Lee: “If you leave early, tell your coordinator.” Necesitas salir antes. ¿Qué haces?",
      "guide": "Avisas al coordinador. Relaciona la situación concreta con la instrucción, sin inventar reglas adicionales."
    },
    {
      "meaning": "Hablar en inglés de algo que habría ocurrido en un pasado diferente",
      "example": "Completa: “If I had studied, I ___ passed.”",
      "guide": "“Would have”: “If I had studied, I would have passed”. Significa: si hubiera estudiado, habría aprobado. Ambos hechos se refieren a un pasado que no ocurrió así."
    },
    {
      "meaning": "Expresar algo que estará terminado antes de un momento futuro",
      "example": "Completa: “By Friday, I ___ finished the book.”",
      "guide": "“Will have”: para el viernes habré terminado el libro. Dibuja una línea de tiempo y marca la tarea terminada antes del viernes."
    },
    {
      "meaning": "Contar en inglés lo que otra persona dijo",
      "example": "Ana dice: “I am studying now”. Más tarde cuentas: “Ana said that she ___ studying then”.",
      "guide": "“Was”: Ana said that she was studying then. Cambian “I” por “she” y “now” por “then” para contar lo dicho desde otro momento."
    },
    {
      "meaning": "Decir que algo ya había sido hecho antes de otra acción",
      "example": "Completa: “The room ___ cleaned before the visitors arrived.”",
      "guide": "“Had been”: la habitación ya había sido limpiada antes de que llegaran las visitas. Lo importante es el orden de las dos acciones."
    },
    {
      "meaning": "Expresar que una acción pasada fue innecesaria",
      "example": "Había suficientes sillas y alguien trajo más. Completa: “You ___ have brought extra chairs.”",
      "guide": "“Needn’t”: no hacía falta haber traído más sillas. La acción sí ocurrió, pero era innecesaria."
    },
    {
      "meaning": "Elegir una palabra que añade información sobre una cosa",
      "example": "Completa: “The book, ___ is on the table, is mine.”",
      "guide": "“Which”: se refiere al libro. “Who” se usa para personas. Identifica primero de quién o de qué se habla."
    },
    {
      "meaning": "Responder de forma respetuosa a un desacuerdo en inglés",
      "example": "Alguien dice: “I disagree with your idea”. Escribe una respuesta para escuchar sus razones.",
      "guide": "Una opción es “Could you explain why?”: ¿puedes explicar por qué? Pide razones sin atacar ni obligar a estar de acuerdo."
    },
    {
      "meaning": "Usar una palabra que une una causa con su consecuencia",
      "example": "Completa: “It was raining; ___, we stayed home.”",
      "guide": "“Therefore”: por lo tanto. La lluvia es la causa y quedarse en casa es la consecuencia."
    },
    {
      "meaning": "Entender un plazo en un aviso en inglés",
      "example": "Lee: “Send your form before 4 p.m.” ¿Cumples si lo envías a las 3:30? ¿Y a las 4:30?",
      "guide": "A las 3:30 sí; a las 4:30 no. “Before” significa “antes de”. Revisen la hora límite antes de responder."
    },
    {
      "meaning": "Explicar en otras palabras una recomendación en inglés",
      "example": "Lee: “Use these results carefully”. ¿Quiere decir que son falsos o que debemos tener cuidado al sacar conclusiones?",
      "guide": "Que debemos tener cuidado. No afirma que los resultados sean falsos; pide interpretarlos sin exagerar lo que demuestran."
    }
  ],
  "topics": [
    "Aumentos, descuentos y cambios",
    "Resolver problemas con números y letras",
    "Leer gráficas y reglas matemáticas",
    "Listas de números con un patrón",
    "Formas, medidas y alturas",
    "Posibilidades de que algo ocurra",
    "Promedios y comparación de datos",
    "Comprender lo que cuenta un texto",
    "Revisar las ideas y razones de un texto",
    "Comparar dos textos",
    "Expresiones que no se leen literalmente",
    "Decisiones de la comunidad",
    "Revisar datos y argumentos",
    "Derechos y oportunidades para todos",
    "Reparar daños en la convivencia",
    "Cómo se heredan características",
    "Seres vivos, energía y cambios",
    "Cómo comprobar una idea con un experimento",
    "Cómo obtienen energía las células",
    "Mezclas: cantidad y concentración",
    "Cómo cambian las sustancias",
    "Movimiento, fuerza y energía",
    "Electricidad y ondas",
    "Inglés: encontrar información",
    "Inglés: comprender el sentido",
    "Inglés: expresar cuándo ocurre algo",
    "Inglés: contar lo dicho y añadir información",
    "Inglés: expresar necesidad y conectar ideas",
    "Inglés: conversar con respeto"
  ]
};
