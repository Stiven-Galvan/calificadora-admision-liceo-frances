const FAMILY11 = {
  "questions": [
    {
      "meaning": "Combinar dos descuentos sin sumarlos directamente",
      "example": "Un precio de $100.000 baja 10 % y después 20 % sobre el nuevo precio. ¿Cuál es el descuento total?",
      "guide": "Primero queda en $90.000 y luego en $72.000. Se ahorran $28.000: el descuento total es 28 %, no 30 %."
    },
    {
      "meaning": "Comparar dos precios que dependen del tiempo",
      "example": "Un taller cobra $20.000 más $10.000 por hora; otro $5.000 más $15.000 por hora. ¿Cuándo cuesta menos el primero?",
      "guide": "Igualan sus precios a las 3 horas. Después de 3 horas, el primero es más barato. Calculen ambos precios a las 2, 3 y 4 horas para comprobarlo."
    },
    {
      "meaning": "Leer cuándo un negocio cubre sus gastos y empieza a ganar",
      "example": "Un negocio recibe $10.000 por venta y gasta $20.000 fijos más $5.000 por venta. Compara ingresos y gastos con 4 y 6 ventas.",
      "guide": "Con 4 ventas ambos son $40.000. Con 6, recibe $60.000 y gasta $50.000: gana $10.000. En la gráfica, el punto de cruce indica que se cubren los gastos."
    },
    {
      "meaning": "Simplificar una división con expresiones de letras",
      "example": "Para x diferente de 2 y −2, simplifica [(x² − 4)/(x − 2)] ÷ (x + 2).",
      "guide": "x² − 4 es (x − 2)(x + 2). La primera división da x + 2; al dividir otra vez entre x + 2 queda 1. Recuerden los valores que harían dividir entre cero."
    },
    {
      "meaning": "Encontrar los valores que hacen un producto menor o igual a cero",
      "example": "¿Para qué valores de x se cumple (x − 1)(x + 2) ≤ 0? Prueba x = −3, 0 y 2.",
      "guide": "El producto es negativo entre −2 y 1 y vale cero en esos extremos. La respuesta es −2 ≤ x ≤ 1. Prueben un valor de cada intervalo para revisar los signos."
    },
    {
      "meaning": "Encontrar el rectángulo de mayor área con el mismo perímetro",
      "example": "Con 20 cm de perímetro, compara rectángulos de lados 1 y 9, 3 y 7, y 5 y 5. ¿Cuál tiene mayor área?",
      "guide": "Sus áreas son 9, 21 y 25 cm². El cuadrado de 5 por 5 tiene la mayor. Revisen que todos conservan el perímetro de 20 cm."
    },
    {
      "meaning": "Calcular cuándo una población que se duplica llega a cierto tamaño",
      "example": "Hay 50 individuos y se duplican cada 2 horas. ¿Cuándo llegarán a 400?",
      "guide": "A las 2 horas hay 100; a las 4, 200; y a las 6, 400. Son tres duplicaciones. Hagan una tabla tiempo-población."
    },
    {
      "meaning": "Comprender un logaritmo como una pregunta sobre potencias",
      "example": "Si log₁₀(x − 1) = 1, ¿cuánto vale x?",
      "guide": "Significa que x − 1 = 10¹ = 10. Por tanto x = 11. Comprueben reemplazando el valor: el logaritmo de 10 en base 10 es 1."
    },
    {
      "meaning": "Calcular la longitud de una escalera usando el ángulo con el suelo",
      "example": "Una escalera forma 60° con el suelo y su pie está a 3 m de la pared. Si cos 60° = 1/2, ¿cuánto mide?",
      "guide": "El coseno compara la distancia horizontal con la escalera: 3/longitud = 1/2. La longitud es 6 m. Dibujen el triángulo antes de calcular."
    },
    {
      "meaning": "Calcular un lado de un triángulo con dos lados y el ángulo entre ellos",
      "example": "Dos lados miden 3 y 5 cm y el ángulo entre ellos es 60°. Usa c² = a² + b² − 2ab cos 60° para hallar el otro lado.",
      "guide": "c² = 9 + 25 − 2 × 3 × 5 × 1/2 = 19. El lado mide √19 cm. Primero identifiquen cuál es el ángulo que está entre los lados conocidos."
    },
    {
      "meaning": "Relacionar la subida de una rampa con su avance horizontal",
      "example": "Una rampa sube 1 m por cada 4 m horizontales. ¿Cuál es la tangente de su ángulo con el suelo?",
      "guide": "Es subida dividida entre avance: 1/4. La tangente compara esos dos lados; no usa la longitud inclinada de la rampa."
    },
    {
      "meaning": "Leer qué tan alto llega una curva que se repite",
      "example": "Dibuja y = 3 sen x entre 0° y 360°. ¿Qué distancia hay desde el cero hasta el máximo y dónde aparece primero?",
      "guide": "La amplitud es 3 y el primer máximo está en 90°. La distancia desde el mínimo hasta el máximo sería 6: no hay que confundirla con la amplitud."
    },
    {
      "meaning": "Encontrar una línea que forme un ángulo recto con otra",
      "example": "Una recta tiene pendiente 2. ¿Qué pendiente necesita otra recta perpendicular que pasa por (0, 3)?",
      "guide": "La pendiente perpendicular es −1/2, porque su producto con 2 es −1. La regla de la nueva recta es y = −x/2 + 3."
    },
    {
      "meaning": "Leer el centro y el radio de una circunferencia en su ecuación",
      "example": "En (x − 2)² + (y + 1)² = 9, ¿cuál es el centro y cuánto mide el radio?",
      "guide": "El centro es (2, −1). El radio es √9 = 3. El signo dentro de cada paréntesis se interpreta como una resta respecto al centro."
    },
    {
      "meaning": "Calcular el desplazamiento directo cuando se avanza en dos direcciones",
      "example": "Caminas 3 m al este y 4 m al norte. ¿Qué distancia en línea recta separa el inicio del final?",
      "guide": "Forma un triángulo rectángulo. La distancia directa es √(3² + 4²) = 5 m; el camino recorrido suma 7 m. No son la misma medida."
    },
    {
      "meaning": "Comparar volúmenes para saber cuántos objetos pueden fabricarse",
      "example": "Un cilindro y un cono tienen la misma base. El cilindro mide 6 cm de alto y el cono 3 cm. ¿Cuántos conos pueden hacerse con el material del cilindro?",
      "guide": "El cilindro contiene área de base × 6; cada cono contiene área de base × 3/3, es decir área de base × 1. Se obtienen 6 conos, sin pérdida de material."
    },
    {
      "meaning": "Contar los resultados posibles al lanzar dos dados",
      "example": "¿Cuál es la probabilidad de que dos dados sumen 4? Escribe las parejas que sirven.",
      "guide": "Sirven (1, 3), (2, 2) y (3, 1). Hay 36 resultados ordenados en total, así que la probabilidad es 3/36 = 1/12."
    },
    {
      "meaning": "Contar grupos cuando el orden no cambia el grupo",
      "example": "De 4 personas, A, B, C y D, elige grupos de 2 sin cargos. ¿Cuántos grupos diferentes hay?",
      "guide": "AB, AC, AD, BC, BD y CD: 6 grupos. AB y BA son el mismo grupo. Con números mayores puede usarse la fórmula de combinaciones."
    },
    {
      "meaning": "Contar claves donde importa el orden y no se repiten cifras",
      "example": "Forma claves de dos cifras diferentes usando 0, 1 y 2. Se permite empezar por 0. ¿Cuántas hay?",
      "guide": "Son 01, 02, 10, 12, 20 y 21: 6. Hay 3 opciones para la primera cifra y 2 para la segunda: 3 × 2 = 6."
    },
    {
      "meaning": "Calcular una parte que está dentro de otra parte del grupo",
      "example": "De 100 personas, 40 practican deporte. De esas 40, la mitad nada. ¿Qué porcentaje del grupo completo nada y practica deporte?",
      "guide": "La mitad de 40 son 20 personas, es decir 20 % del grupo de 100. Se calcula 40 % × 50 %, sin sumar los porcentajes."
    },
    {
      "meaning": "Actualizar las posibilidades después de sacar una ficha",
      "example": "Hay 4 fichas verdes y 2 amarillas. La primera extraída fue amarilla y no se devuelve. ¿Qué posibilidad hay de que la siguiente sea verde?",
      "guide": "Quedan 5 fichas: 4 verdes y 1 amarilla. La probabilidad es 4/5, no 4/6. La primera extracción cambió el total."
    },
    {
      "meaning": "Calcular un promedio teniendo en cuenta qué tan probable es cada valor",
      "example": "Un resultado puede ser 0 o 10, con posibilidades iguales. ¿Cuál es su valor esperado?",
      "guide": "Es 0 × 1/2 + 10 × 1/2 = 5. Es el promedio esperado de muchas repeticiones; no significa que cada resultado individual sea 5."
    },
    {
      "meaning": "Combinar promedios de grupos con tamaños diferentes",
      "example": "Un grupo de 3 personas tiene promedio 10 y otro de 1 tiene promedio 20. ¿Cuál es el promedio conjunto?",
      "guide": "El primer grupo suma 30 y el segundo 20: total 50 entre 4 personas = 12,5. No basta con promediar 10 y 20, porque los grupos no tienen el mismo tamaño."
    },
    {
      "meaning": "Encontrar el dato central cuando algunos valores se repiten",
      "example": "Ordena estos datos: 1, 2, 2, 3, 3 y 4. ¿Cuál es la mediana?",
      "guide": "Como hay 6 datos, se promedian los dos del centro, 2 y 3. La mediana es 2,5. En una tabla, escriban los valores tantas veces como diga la frecuencia."
    },
    {
      "meaning": "Entender qué cambia si se suma lo mismo a todos los datos",
      "example": "A 1, 3 y 5 les sumas 4. ¿Cómo cambian el promedio y la distancia entre el mayor y el menor?",
      "guide": "El promedio pasa de 3 a 7, aumenta 4. El rango sigue en 4: antes 5 − 1 y después 9 − 5. Las separaciones no cambian."
    },
    {
      "meaning": "Distinguir que dos cosas ocurran juntas de que una cause la otra",
      "example": "Quienes duermen menos obtienen notas más bajas en una encuesta. ¿Eso prueba por sí solo que dormir menos causó esas notas?",
      "guide": "No. Pueden intervenir otros factores. Para concluir una causa hace falta investigar y controlar mejor la comparación."
    },
    {
      "meaning": "Deshacer una regla para recuperar el número inicial",
      "example": "Una regla multiplica un número por 3 y le suma 2. Si el resultado es 14, ¿cuál era el número?",
      "guide": "Primero deshaz la suma: 14 − 2 = 12. Después deshaz la multiplicación: 12/3 = 4. Comprueba: 3 × 4 + 2 = 14."
    },
    {
      "meaning": "Calcular un precio que cambia después de cierta cantidad",
      "example": "Las primeras 10 copias cuestan $500 cada una y las siguientes $300. ¿Cuánto cuestan 15 copias?",
      "guide": "Las primeras 10 cuestan $5.000 y las otras 5, $1.500. Total: $6.500. El precio nuevo se aplica solo a las copias adicionales."
    },
    {
      "meaning": "Entender aumentos y descuentos en un precio",
      "example": "Un producto cuesta $100.000. Primero sube 20 % y luego baja 20 %. ¿Vuelve al precio inicial?",
      "guide": "El aumento lleva el precio a $120.000. El descuento se calcula sobre ese nuevo valor: $24.000. El precio final es $96.000."
    },
    {
      "meaning": "Buscar la mayor área cuando solo se cercan tres lados",
      "example": "Hay 40 m de cerca y una pared cubre el cuarto lado. Si los dos lados cortos miden 10 m cada uno, ¿cuánto mide el tercero y cuál es el área?",
      "guide": "El tercero mide 20 m porque 10 + 10 + 20 = 40. El área es 200 m². Comparen con lados cortos de 5 y 15 m: dan 150 m², y la expresión x(40 − 2x) alcanza su máximo en x = 10."
    },
    {
      "meaning": "Reconocer el problema principal de una historia",
      "example": "Una biblioteca publica libros en línea, pero solo permite encontrarlos con un código que los lectores desconocen. ¿Cuál es el problema principal?",
      "guide": "Los libros están disponibles, pero no son fáciles de encontrar. Pide al estudiante explicar la diferencia entre tener información y poder usarla."
    },
    {
      "meaning": "Distinguir lo que alguien quiso hacer de lo que su acción produjo",
      "example": "Un fotógrafo recorta una imagen para que quepa y deja fuera a una trabajadora. ¿No haber querido excluirla elimina el efecto del recorte?",
      "guide": "No. La intención era ajustar el diseño, pero el resultado puede ocultar parte de la historia. Explica las dos cosas por separado."
    },
    {
      "meaning": "Reconocer una propuesta que amplía la información de una historia",
      "example": "Una exposición solo muestra a quienes vendían. Una vecina propone incluir a quienes transportaban los productos y documentos de su trabajo. ¿Qué busca?",
      "guide": "Ampliar la historia con más actividades y evidencias. No necesita reemplazar un grupo por otro ni ignorar los documentos."
    },
    {
      "meaning": "Comprender por qué conviene comprobar también las fuentes nuevas",
      "example": "Una familia aporta un recuerdo sobre un edificio. ¿Cómo puede revisarse sin descartarlo de entrada?",
      "guide": "Comparándolo con fotografías, fechas y documentos. Una fuente nueva merece revisión, igual que las que ya se usaban."
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
      "meaning": "Comprender una expresión según el contexto",
      "example": "Un texto dice que castigar todo error puede enseñar a ocultar lo que no se sabe. ¿Se refiere a tapar físicamente una hoja?",
      "guide": "No. Significa evitar mostrar dificultades, por ejemplo eligiendo solo tareas fáciles. Busquen qué situación del texto explica la expresión."
    },
    {
      "meaning": "Elegir un ejemplo que aplica la idea principal de un texto",
      "example": "Un autor propone aprender revisando errores. ¿Qué encaja mejor: repetir sin pensar o revisar el paso fallido, cambiarlo y probar otra vez?",
      "guide": "Revisar, cambiar y comprobar. Explica cómo cada acción responde a la idea del texto, sin asumir que todo error enseña por sí solo."
    },
    {
      "meaning": "Entender por qué se separa la práctica de una tarea definitiva",
      "example": "Un aprendiz practica un procedimiento con supervisión antes de realizarlo por su cuenta. ¿Por qué importa esa separación?",
      "guide": "Ofrece un espacio para aprender mientras se cuidan la seguridad y la precisión. Practicar no significa que la ejecución final deje de tener exigencias."
    },
    {
      "meaning": "Distinguir lo que un texto apoya de lo que no afirma",
      "example": "Un texto dice que una máquina puede equivocarse. ¿Eso permite afirmar que las personas siempre deciden bien?",
      "guide": "No. Esa afirmación no está respaldada. Pide señalar qué frase tendría que existir para sostenerla."
    },
    {
      "meaning": "Encontrar una idea compartida por dos textos",
      "example": "Un texto pide revisar errores de una máquina; otro pide que las personas puedan cuestionar sus resultados. ¿En qué coinciden?",
      "guide": "Ambos defienden revisar los resultados y permitir preguntas. Subrayen una frase de cada texto que muestre la coincidencia."
    },
    {
      "meaning": "Encontrar en qué se diferencian las preocupaciones de dos textos",
      "example": "Un texto pide organizar horarios de una plaza; otro teme que las reglas excluyan a quienes ya la usan. ¿Cuál es la diferencia?",
      "guide": "El primero se centra en acuerdos de uso; el segundo en sus posibles efectos sobre el acceso. Ambos pueden apoyar el mantenimiento sin decir exactamente lo mismo."
    },
    {
      "meaning": "Elegir qué dato ayudaría a comprender mejor una situación",
      "example": "Para evaluar una vía, ya sabemos la velocidad de los carros. ¿Qué otro dato ayudaría a entender su efecto en quienes caminan?",
      "guide": "El tiempo que tardan los peatones en llegar a sus destinos antes y después de la obra."
    },
    {
      "meaning": "Elegir una acción que responda a las preocupaciones de dos textos",
      "example": "Si dos textos piden revisar errores y escuchar a los afectados, ¿qué harías con una decisión automática?",
      "guide": "Revisaría los errores y ofrecería una oportunidad para aportar información adicional. Explica cómo esa acción responde a ambos textos."
    },
    {
      "meaning": "Reconocer que una palabra puede reflejar una perspectiva",
      "example": "Un vecino llama “mejora” a cambiar un parque por un estacionamiento; otro deja de tener dónde jugar. ¿La palabra significa lo mismo para ambos?",
      "guide": "No necesariamente. Una valoración puede depender de lo que cada persona gana o pierde. Pidan explicar las dos perspectivas con respeto."
    },
    {
      "meaning": "Distinguir un trámite cerrado de un problema realmente solucionado",
      "example": "Una oficina marca una solicitud como resuelta después de enviar un enlace que la persona no puede abrir. ¿Es suficiente enviar una respuesta?",
      "guide": "No. Hay que comprobar si la persona pudo solucionar el problema. El registro de cierre y la utilidad real son cosas distintas."
    },
    {
      "meaning": "Evitar conclusiones demasiado generales",
      "example": "Una persona no logra usar una página web. ¿Podemos concluir que todas las páginas web son inútiles?",
      "guide": "No. Un caso permite revisar ese problema, pero no demuestra cómo funcionan todas las páginas."
    },
    {
      "meaning": "Sacar una conclusión apoyada en una situación del texto",
      "example": "Un vecino no encuentra un documento porque la búsqueda pide un código. ¿Eso demuestra que el documento no existe?",
      "guide": "No. La dificultad está en cómo buscarlo. Busquen la frase que apoya esa conclusión y eviten añadir cosas que el texto no dice."
    },
    {
      "meaning": "Comprender que cambiar una medida puede cambiar un número sin empeorar el servicio",
      "example": "Antes se contaban mensajes enviados y ahora problemas solucionados. El total baja. ¿Eso demuestra que la atención empeoró?",
      "guide": "No. Ahora se está midiendo otra cosa. Hay que comparar qué significa el número antes de concluir que un cambio es bueno o malo."
    },
    {
      "meaning": "Elegir un título que represente el conflicto de un relato",
      "example": "Una historia muestra solicitudes cerradas sin resolver el problema. ¿Encaja mejor “La oficina azul” o “Cerrar no siempre es solucionar”?",
      "guide": "El segundo resume el conflicto. El título debe recoger el sentido principal, no solo un detalle secundario."
    },
    {
      "meaning": "Distinguir que dos cosas ocurran juntas de que una cause la otra",
      "example": "Quienes duermen menos obtienen notas más bajas en una encuesta. ¿Eso prueba por sí solo que dormir menos causó esas notas?",
      "guide": "No. Pueden intervenir otros factores. Para concluir una causa hace falta investigar y controlar mejor la comparación."
    },
    {
      "meaning": "Reconocer una diferencia previa que puede afectar una comparación",
      "example": "Quienes entran voluntariamente a un taller ya leían más antes de empezar. ¿Por qué importa ese dato al comparar sus resultados con otros?",
      "guide": "Porque parte de la diferencia puede existir desde antes del taller. Hay que revisar el punto de partida para valorar mejor su posible aporte."
    },
    {
      "meaning": "Entender que actuar con cuidado no significa dejar de actuar",
      "example": "Un programa parece útil, pero se ha probado con pocos estudiantes. ¿Cómo podría ampliarse de forma responsable?",
      "guide": "Ampliándolo gradualmente, explicando lo que aún no se sabe y revisando nuevos resultados. No hace falta prometer que funcionará para todos."
    },
    {
      "meaning": "Evitar conclusiones demasiado generales",
      "example": "Una persona no logra usar una página web. ¿Podemos concluir que todas las páginas web son inútiles?",
      "guide": "No. Un caso permite revisar ese problema, pero no demuestra cómo funcionan todas las páginas."
    },
    {
      "meaning": "Comprender por qué explicar los límites de un estudio ayuda",
      "example": "Un informe dice que se estudió solo un curso durante un mes. ¿Por qué esa aclaración es útil?",
      "guide": "Permite valorar a quiénes y a qué periodo se aplican los resultados. Explicar los límites no elimina la información que sí se obtuvo."
    },
    {
      "meaning": "Distinguir una interpretación personal de una información explícita",
      "example": "Una carta no dice para quién fue escrita. Un lector cree que era para su padre. ¿Podemos tomarlo como un dato confirmado?",
      "guide": "No. Es una interpretación basada en pistas y expectativas. Señalen qué dice literalmente la carta y qué está imaginando el lector."
    },
    {
      "meaning": "Reconocer una explicación posible sin convertirla en certeza",
      "example": "Dos personas proponen destinatarios distintos para una carta sin dirección. ¿La segunda idea demuestra que la primera era falsa?",
      "guide": "No. Abre otra posibilidad. Hay que revisar las pistas antes de afirmar un destinatario con seguridad."
    },
    {
      "meaning": "Explicar cómo cambia la forma de pensar un personaje",
      "example": "Al inicio alguien asegura conocer el destinatario de una carta; al final conserva dos posibilidades y busca más datos. ¿Qué cambió?",
      "guide": "Aprendió a distinguir lo que sabe de lo que imagina, sin abandonar la búsqueda. Comparen una acción del principio y otra del final."
    },
    {
      "meaning": "Interpretar una imagen literaria sin tomarla como prueba literal",
      "example": "Al final de una historia, un personaje oye el río sin esperar una respuesta. ¿El río debe responder de verdad?",
      "guide": "No. La imagen puede representar que acepta una pregunta todavía abierta. Su sentido depende de lo que ocurrió en la historia."
    },
    {
      "meaning": "Conservar lo observado sin mezclarlo con una suposición",
      "example": "Encuentras una foto sin fecha y piensas que es de 1990. ¿Cómo la guardarías para seguir investigando?",
      "guide": "Conserva la foto y anota por separado cuándo la encontraste y por qué supones esa fecha. No escribas la suposición como si ya estuviera confirmada."
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
      "meaning": "Respetar opiniones diferentes sin obligar a compartirlas",
      "example": "Una exposición cuestiona una tradición sin amenazas ni violencia. Algunas personas no están de acuerdo. ¿Cómo convivir con ese desacuerdo?",
      "guide": "Permitir la expresión y una crítica respetuosa. Escuchar una postura no obliga a aceptarla."
    },
    {
      "meaning": "Entender que apoyar según la necesidad puede ser justo",
      "example": "Dos familias necesitan transporte; una vive mucho más lejos y tiene menos ingresos. ¿Por qué podría recibir más apoyo?",
      "guide": "Porque enfrenta barreras mayores. El apoyo debe basarse en necesidades comprobables y reglas claras, no en favoritismos."
    },
    {
      "meaning": "Informar resultados sin exponer innecesariamente datos personales",
      "example": "Un colegio quiere explicar cómo le fue a un grupo. ¿Necesita publicar nombres y documentos de cada estudiante?",
      "guide": "No siempre. Puede presentar resultados del grupo y reservar los individuales para quienes deban conocerlos. El acceso depende del propósito del informe."
    },
    {
      "meaning": "Distinguir una respuesta con razones de un ataque personal",
      "example": "Una persona pregunta por el costo de una obra y recibe: “Usted siempre se queja”. ¿Respondieron a su pregunta?",
      "guide": "No. Atacaron a la persona sin analizar el costo. Practiquen una respuesta centrada en los datos."
    },
    {
      "meaning": "Buscar varias explicaciones antes de sacar una conclusión",
      "example": "Después de abrir un canal confidencial aumentan las denuncias. ¿Eso demuestra por sí solo que hubo más violencia?",
      "guide": "No. También puede ser más fácil o seguro denunciar. Hace falta comparar otros datos antes de concluir."
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
      "meaning": "Crear reglas conocidas para resolver desacuerdos futuros",
      "example": "Un equipo organiza una actividad. ¿Qué debe acordar para resolver problemas sin que gane quien más grita?",
      "guide": "Criterios claros, personas responsables y un modo de revisar las decisiones que todos conozcan. Escriban un ejemplo de acuerdo y cómo se revisaría."
    },
    {
      "meaning": "Calcular la posibilidad de no presentar una característica recesiva",
      "example": "En el cruce Aa × Aa, una condición aparece solo con aa. ¿Qué parte de las combinaciones no la presenta?",
      "guide": "Las combinaciones son AA, Aa, Aa y aa. Tres de las cuatro no presentan la condición: 3/4. Diferencien portar la letra a de presentar la condición."
    },
    {
      "meaning": "Combinar dos características que se heredan independientemente",
      "example": "En AaBb × aabb, el primer progenitor puede aportar AB, Ab, aB o ab. ¿Qué combinaciones pueden aparecer?",
      "guide": "AaBb, Aabb, aaBb y aabb, con posibilidades iguales si los genes se distribuyen independientemente. Hagan una tabla de las cuatro opciones."
    },
    {
      "meaning": "Comprender cómo se copia el ADN conservando parte del original",
      "example": "Imagina una molécula de ADN con dos hebras. Al copiarse, ¿cada molécula nueva queda con dos hebras nuevas?",
      "guide": "No. Cada una conserva una hebra antigua y tiene una nueva complementaria. Dibujen las antiguas de un color y las nuevas de otro."
    },
    {
      "meaning": "Distinguir selección de un cambio hecho por voluntad",
      "example": "Antes de un tratamiento ya existen algunas bacterias resistentes y después sobreviven más de esas. ¿Cambian porque desean sobrevivir?",
      "guide": "No. Las variantes resistentes ya estaban presentes y sobreviven mejor al tratamiento. La evidencia previa ayuda a explicar la selección sin atribuir intención a las bacterias."
    },
    {
      "meaning": "Leer una temperatura favorable sin generalizar a todos los casos",
      "example": "Una gráfica muestra actividad de 20 a 20 °C, 50 a 30 °C y 10 a 50 °C. ¿Qué puede decirse?",
      "guide": "En los datos medidos, la actividad fue mayor a 30 °C y menor a 50 °C. No demuestra que aumentar la temperatura siempre ayude ni que todas las enzimas se comporten igual."
    },
    {
      "meaning": "Entender hacia dónde se mueve el agua a través de una membrana",
      "example": "Una célula tiene más sustancias disueltas dentro que el líquido que la rodea y deja pasar agua. ¿Qué suele pasar inicialmente?",
      "guide": "Entra agua por ósmosis y puede aumentar su volumen. Dibujen la célula y una flecha de entrada; la membrana no impide todo movimiento de agua."
    },
    {
      "meaning": "Explicar por qué un exceso de algas puede reducir el oxígeno del agua",
      "example": "Un lago recibe muchos nutrientes y crecen algas; luego parte de ellas muere y se descompone. ¿Qué puede consumir oxígeno?",
      "guide": "La respiración de los organismos y la descomposición de la materia orgánica. Tener muchas algas no significa que el oxígeno disponible siempre aumente."
    },
    {
      "meaning": "Comparar porcentajes cuando los grupos tienen tamaños distintos",
      "example": "En un grupo germinan 8 de 10 semillas y en otro 15 de 20. ¿Cuál tiene mayor proporción?",
      "guide": "El primero: 80 % frente a 75 %. El segundo tiene más semillas germinadas, pero una proporción menor. Repitan el ensayo antes de afirmar una diferencia general."
    },
    {
      "meaning": "Reconocer una relación en la que ambos seres vivos se benefician",
      "example": "Una abeja consigue alimento de una flor y ayuda a que la planta se reproduzca. ¿Quién se beneficia?",
      "guide": "Ambos. Esa relación se llama mutualismo. Compárenla con un caso en que uno se beneficia y el otro resulta perjudicado."
    },
    {
      "meaning": "Distinguir que dos cosas ocurran juntas de que una cause la otra",
      "example": "Quienes duermen menos obtienen notas más bajas en una encuesta. ¿Eso prueba por sí solo que dormir menos causó esas notas?",
      "guide": "No. Pueden intervenir otros factores. Para concluir una causa hace falta investigar y controlar mejor la comparación."
    },
    {
      "meaning": "Calcular la cantidad de una sustancia por litro de solución",
      "example": "Hay 0,1 mol de una sustancia en 250 mL de solución. ¿Cuál es la concentración en mol por litro?",
      "guide": "250 mL son 0,25 L. Divide 0,1 entre 0,25: resulta 0,4 mol/L. El mol es una unidad para contar cantidades de partículas."
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
      "meaning": "Comparar acidez teniendo en cuenta que el pH no cambia de uno en uno",
      "example": "Compara una solución de pH 3 con otra de pH 5. ¿Cuántas veces mayor es la concentración de H⁺ en la primera?",
      "guide": "Cada unidad de pH representa un factor de 10. Dos unidades representan 10 × 10 = 100 veces. Resuelvan en papel; no necesitan manipular productos ácidos."
    },
    {
      "meaning": "Entender que la materia no desaparece cuando se forma un gas",
      "example": "En un recipiente cerrado sin fugas, una reacción transforma parte de los materiales en gas. ¿La masa total baja?",
      "guide": "No. El gas también tiene masa y sigue dentro del sistema. La masa total se conserva aunque cambie el estado de la materia."
    },
    {
      "meaning": "Entender por qué un material en pedazos pequeños puede reaccionar más rápido",
      "example": "Compara una tableta entera con la misma tableta triturada en agua, en condiciones iguales. ¿Cuál suele reaccionar más rápido?",
      "guide": "La triturada, porque más superficie toca el agua al mismo tiempo. El tamaño de los pedazos cambia el contacto, no la cantidad de material."
    },
    {
      "meaning": "Relacionar temperatura y presión de un gas con volumen fijo",
      "example": "Un gas ideal en un recipiente rígido pasa de 200 K a 300 K. Si no escapa gas, ¿qué ocurre con la presión?",
      "guide": "Se multiplica por 300/200 = 1,5. La relación usa temperatura absoluta en kelvin. Es un ejercicio de cálculo, no una actividad para calentar recipientes cerrados."
    },
    {
      "meaning": "Prever hacia qué lado cambia un equilibrio al reducir el volumen",
      "example": "En A(g) + B(g) ⇌ C(g), se reduce el volumen a temperatura constante. ¿Qué lado se favorece?",
      "guide": "El de C, porque tiene menos partículas gaseosas según los coeficientes: 1 frente a 2. Cuenten los coeficientes antes de elegir el lado."
    },
    {
      "meaning": "Interpretar un signo negativo en un cambio de energía",
      "example": "Una reacción tiene cambio de energía de −20 kJ. ¿Absorbe o libera energía en el balance final?",
      "guide": "Libera 20 kJ al entorno por el proceso indicado. El signo negativo no significa que haya masa negativa."
    },
    {
      "meaning": "Calcular la carga de una partícula",
      "example": "Una partícula tiene 3 protones positivos y 4 electrones negativos. ¿Cuál es su carga total?",
      "guide": "Queda una carga negativa: −1. Cuenten qué cargas se compensan y cuál sobra."
    },
    {
      "meaning": "Restar fuerzas opuestas antes de calcular la aceleración",
      "example": "Empujas un objeto de 2 kg con 10 N y la fricción opuesta es de 4 N. ¿Cuál es la aceleración?",
      "guide": "La fuerza neta es 10 − 4 = 6 N. Luego 6/2 = 3 m/s². Dibujen las flechas para distinguir la fuerza aplicada de la fuerza neta."
    },
    {
      "meaning": "Calcular cómo cambia la energía de movimiento al aumentar la velocidad",
      "example": "Un objeto de 2 kg pasa de 2 a 4 m/s. Usa E = mv²/2. ¿Cuánto aumenta su energía?",
      "guide": "Antes tiene 4 J y después 16 J. El aumento es 12 J. La velocidad se eleva al cuadrado: duplicarla no solo duplica la energía."
    },
    {
      "meaning": "Calcular el trabajo de una fuerza en la dirección del movimiento",
      "example": "Una fuerza de 5 N mueve un objeto 3 m en la misma dirección. ¿Qué trabajo realiza?",
      "guide": "Trabajo = fuerza × distancia: 5 × 3 = 15 J. Esta cuenta se aplica porque la fuerza actúa en la dirección del movimiento."
    },
    {
      "meaning": "Calcular qué parte de la energía se aprovecha",
      "example": "Una máquina recibe 200 J y entrega 150 J de trabajo útil. ¿Cuál es su eficiencia?",
      "guide": "150/200 × 100 = 75 %. Los otros 50 J no son trabajo útil de esa máquina. Una eficiencia del 75 % no significa que la energía desaparezca."
    },
    {
      "meaning": "Distinguir distancia recorrida de cambio de posición",
      "example": "Un objeto avanza 6 m y regresa 2 m. ¿Qué distancia recorrió y qué desplazamiento tuvo?",
      "guide": "Recorrió 8 m en total, pero terminó 4 m adelante del inicio. En una gráfica velocidad-tiempo, los tramos negativos restan al desplazamiento, pero suman a la distancia."
    },
    {
      "meaning": "Sumar la corriente de dos caminos eléctricos en paralelo",
      "example": "Una fuente de 6 V alimenta dos resistencias de 3 Ω en paralelo. ¿Cuál es la corriente total?",
      "guide": "Cada resistencia recibe 6 V y lleva 6/3 = 2 A. Los dos caminos suman 4 A. Dibujen el circuito y calculen sin realizar conexiones eléctricas."
    },
    {
      "meaning": "Calcular energía a partir de potencia y tiempo",
      "example": "Un aparato de 10 W funciona durante 2 minutos. ¿Cuánta energía transforma?",
      "guide": "2 minutos son 120 segundos. Energía = potencia × tiempo: 10 × 120 = 1.200 J. Conviertan primero el tiempo a segundos."
    },
    {
      "meaning": "Calcular la nueva longitud de onda cuando cambia la rapidez",
      "example": "Una onda cambia de 12 a 8 m/s al pasar de medio, conservando una frecuencia de 2 Hz. ¿Cuál es su nueva longitud de onda?",
      "guide": "Es 8/2 = 4 m. Usen la rapidez nueva con la misma frecuencia, no la rapidez anterior."
    },
    {
      "meaning": "Comparar cuánto se calientan materiales con la misma energía",
      "example": "Dos masas iguales reciben la misma energía y no cambian de estado. Una aumenta más su temperatura. ¿Qué se puede inferir?",
      "guide": "La que aumenta más tiene menor calor específico: requiere menos energía por unidad de masa para subir un grado. La comparación supone que no hay pérdidas."
    },
    {
      "meaning": "Revisar un experimento cuando las repeticiones no coinciden",
      "example": "Repites una medición y obtienes resultados muy distintos. ¿Conviene conservar solo el que esperabas?",
      "guide": "No. Revisa instrumentos, condiciones y procedimiento; registra las diferencias y repite. Los resultados inesperados también aportan información."
    },
    {
      "meaning": "Localizar el problema descrito en un texto en inglés",
      "example": "Lee: “Some dates in the interviews did not match the records”. ¿Qué problema encontraron?",
      "guide": "Algunas fechas de las entrevistas no coincidían con los registros. “Did not match” indica esa diferencia, no que todas las entrevistas fueran falsas."
    },
    {
      "meaning": "Entender por qué se muestra de dónde viene una información",
      "example": "Lee: “Each entry shows its source so readers can assess it”. ¿Para qué se muestra la fuente?",
      "guide": "Para que los lectores puedan valorar en qué se basa la información. “Source” significa fuente u origen de la información."
    },
    {
      "meaning": "Comprender por qué se guardan versiones anteriores",
      "example": "Lee: “We kept earlier versions to trace changes”. ¿Por qué conservaron las versiones previas?",
      "guide": "Para seguir o revisar los cambios. “To trace changes” indica la finalidad; no significa impedir nuevas actualizaciones."
    },
    {
      "meaning": "Distinguir posibilidades de hechos confirmados en inglés",
      "example": "Lee: “Uncertain details were shown as possibilities, not facts”. ¿Cómo presentaron lo que no estaba confirmado?",
      "guide": "Como posibilidades, no como hechos. Identifica el contraste “possibilities, not facts”."
    },
    {
      "meaning": "Identificar la enseñanza principal de un texto en inglés",
      "example": "Un proyecto aclara qué sabe y cómo lo comprobó. ¿Qué resume mejor su enseñanza: “Trust needs perfect certainty” o “Clear evidence supports trust”?",
      "guide": "La segunda: evidencia clara favorece la confianza. El texto no exige fingir que se sabe todo."
    },
    {
      "meaning": "Localizar la razón de un cambio en un mensaje en inglés",
      "example": "Lee: “Meet at the park. The bridge is closed for repairs.” ¿Por qué ya no se reúnen en el puente?",
      "guide": "Porque está cerrado por reparaciones. Busquen “closed for repairs”, que explica el motivo."
    },
    {
      "meaning": "Aplicar una instrucción al reemplazar un archivo",
      "example": "Lee: “If you replace the slides, send us a message”. Cambias el archivo después de subirlo. ¿Qué debes hacer?",
      "guide": "Avisar con un mensaje. Reconoce la condición “if you replace” y la acción solicitada “send us a message”."
    },
    {
      "meaning": "Relacionar una instrucción con la razón que la explica",
      "example": "Lee: “The panel has read your summary. Use your time for the main findings”. ¿Por qué no leer todo otra vez?",
      "guide": "Porque el panel ya leyó el resumen y el tiempo debe usarse para los hallazgos principales. Relacionen las dos oraciones."
    },
    {
      "meaning": "Comprender qué se recomienda cuando un análisis no ha terminado",
      "example": "Lee: “If the analysis is unfinished, say so”. ¿Qué debe hacer quien presenta?",
      "guide": "Explicar que está sin terminar, en vez de presentar una estimación como un resultado definitivo. “Unfinished” significa no terminado."
    },
    {
      "meaning": "Responder con honestidad cuando falta información en inglés",
      "example": "Lee: “If you cannot answer, explain what information you need”. ¿Qué hacer ante una pregunta que no puedes responder?",
      "guide": "Explicar qué información adicional necesitarías. Una opción: “I need more data to answer that question”. No pide adivinar con seguridad."
    },
    {
      "meaning": "Reconocer una condición del pasado escrita en otro orden",
      "example": "Completa: “Had I studied, I ___ passed”. ¿Qué significa?",
      "guide": "“Would have”: si hubiera estudiado, habría aprobado. “Had I studied” equivale aquí a “If I had studied”. Practiquen ambas formas."
    },
    {
      "meaning": "Expresar que algo habrá sido completado antes de un momento futuro",
      "example": "Completa: “The work ___ by Friday”: will have been completed o was completing.",
      "guide": "“Will have been completed”: el trabajo habrá sido completado para el viernes. La oración habla del futuro y se centra en el trabajo, no en quién lo hace."
    },
    {
      "meaning": "Contar una pregunta que otra persona hizo en inglés",
      "example": "Transforma: “Why did you leave?” en “She asked why I ___”.",
      "guide": "“Had left”: “She asked why I had left”. Al contar la pregunta se usa el orden de una afirmación: sujeto y después verbo, no “why had I left”."
    },
    {
      "meaning": "Expresar que una acción pasada parece imposible según la información",
      "example": "Completa: “He ___ have read the message; he knew nothing about it”.",
      "guide": "“Cannot”: parece que no pudo haber leído el mensaje. La segunda parte explica la deducción. No equivale a “must have”, que expresaría una conclusión opuesta."
    },
    {
      "meaning": "Elegir la forma del verbo después de despite",
      "example": "Completa: “Despite ___ tired, she continued”: be, being o were.",
      "guide": "“Being”: a pesar de estar cansada, continuó. Después de “despite” puede usarse una forma terminada en -ing."
    },
    {
      "meaning": "Relacionar dos cambios con una comparación en inglés",
      "example": "Completa: “The more we practise, ___ we become”: the more confident o the most confident.",
      "guide": "“The more confident”: cuanto más practicamos, más confianza tenemos. La estructura compara dos cambios relacionados."
    },
    {
      "meaning": "Reconocer un resultado favorable sin ocultar sus límites",
      "example": "Alguien dice: “The results look useful, but the group was small”. ¿Cómo responder sin exagerar?",
      "guide": "“We can report the results and explain that limit”: podemos informar los resultados y explicar esa limitación. Ser prometedor no demuestra que se aplique a todos."
    },
    {
      "meaning": "Usar una palabra que une una causa con su consecuencia",
      "example": "Completa: “It was raining; ___, we stayed home.”",
      "guide": "“Therefore”: por lo tanto. La lluvia es la causa y quedarse en casa es la consecuencia."
    },
    {
      "meaning": "Comprender requisitos y límites de una inscripción en inglés",
      "example": "Lee: “Under-18s need parental permission. Registration does not guarantee a place”. Si tienes 17 años, ¿qué debes entender?",
      "guide": "Necesitas permiso de tus padres y registrarte no garantiza un cupo. Hay que comprender las dos condiciones, no solo una."
    },
    {
      "meaning": "Distinguir falta de respaldo de una demostración de falsedad",
      "example": "Lee: “Current evidence does not support this claim”. ¿Significa que la afirmación es falsa en todos los casos?",
      "guide": "No. Significa que la evidencia disponible no justifica aceptarla ahora. Podría necesitarse nueva información; no se afirma que nunca pueda comprobarse."
    }
  ],
  "topics": [
    "Aumentos y descuentos",
    "Comparar costos, ingresos y precios",
    "Resolver y transformar expresiones",
    "Buscar el área más grande",
    "Crecimiento que se repite",
    "Ángulos, rampas y curvas",
    "Formas, posiciones y volúmenes",
    "Contar posibilidades",
    "Promedios y comparación de datos",
    "Comprender historias y sus cambios",
    "Revisar fuentes, datos y conclusiones",
    "Comprender la idea que defiende un texto",
    "Comparar dos textos",
    "Entender una imagen literaria",
    "Decisiones y acuerdos de la comunidad",
    "Revisar datos y argumentos ciudadanos",
    "Derechos, necesidades y oportunidades",
    "Herencia y copia del ADN",
    "Funcionamiento de las células",
    "Seres vivos y relaciones con el ambiente",
    "Comparar y revisar experimentos",
    "Cantidad, concentración y acidez",
    "Cómo cambian las sustancias",
    "Gases: temperatura y presión",
    "Movimiento, fuerza y energía",
    "Electricidad: corriente y energía",
    "Cómo se propagan las ondas",
    "Cómo se calientan los materiales",
    "Inglés: encontrar información y seguir instrucciones",
    "Inglés: comprender ideas y límites",
    "Inglés: hablar de distintos momentos y contar preguntas",
    "Inglés: expresar deducciones y conectar ideas"
  ]
};
