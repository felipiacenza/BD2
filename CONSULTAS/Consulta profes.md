Hola, cómo están? Abro este chat para una consulta del obligatorio.

Empecé a leer la letra del oglibatorio y modelar un MER. Pude realizarlo en su totalidad exceptuando una parte.

Mi consulta es la siguiente:

Según la letra, un usuario interactua con su asistente virtual (un usuario solo tiene un asistente), representado de la siguiente manera:

![alt text](image.png)

(dentro de la relacion interactua se guardan los datos de fehca, hora, el tipo de interacción (consulta, tutoría, conversación casual, coaching), el idioma utilizado, así como las respuestas generadas por el asistente.)

Por otro lado, la letra dice lo siguiente:

"Se desea registrar el progreso de los usuarios en sus objetivos de aprendizaje, incluyendo las sesiones de estudio completadas, los niveles de idioma alcanzados, y cualquier certificación o logro."

Lo que entiendo de esto es que, cada interacción que tiene el usuario con su asistente (imagen 1) se genera progreso, lo cual, esto se podría representar de la siguiente manera:

![alt text](image-1.png)

Para cada progreso, ejemplo: Aprender ingles. Ese progrseo se le haría una UPDATE a algún campo por cada interacción que el usuario tenga, como aumentar la cantidad de sesiones completadas.

Inmediatamente después de esto, la letra dice:

"De los certificados o logros que los usuarios obtienen a medida que avanzan en sus objetivos de aprendizaje dentro de la aplicación, se conoce el nombre, la fecha de obtención, el nivel de dominio alcanzado (‘Básico’, ‘Intermedio’ o ‘Avanzado’)."

Por lo tanto, deduzco que certificado puede ser una entidad, y que estos son entregados a los usuarios al completar ciertos progresos (ej: completar X sesiones de estudio en el idioma inglés). Entonces, esto lo representamos de la siguiente manera:

![alt text](image-2.png)

Sin embargo, esto no me convence por la complejidad de la doble agregación.

¿Cómo esa pensada esta parte de la letra? 

¿Puede estar justificado utilizar una doble relación?
Porque lo que yo entiendo es que un usuario que interactua con su asistente genera progreso y ese progreso puede generar un certificado a ese usuario que interactua con su asistente.

Yo todavía no lo conversé con mis compañeros de obligatorio debido a que esto lo hice todo el mer como una primera versión a discutir pero lo que más me llamó la atención fue esta parte de la letra. Espero sus respuestas y cualquier cosa, se puede charlar o explicar en clase!