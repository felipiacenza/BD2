# Cantidad de tuplas por tablas (estimaciones)

La letra plantea lo siguiente:

• La plataforma está disponible en 160 países y tiene 20 millones de usuarios de los cuales el 14% pagan la suscripción Pro.  
• Dentro de los asistentes virtuales que existen, un 60 % tienen un rol de “Amigo” mientras que el resto son “Tutor” o “Coach”.  
• Se conoce actualmente que el 76 % de los usuarios posee más de 400 gemas y también que un 10% de los usuarios posee menos de 50 gemas.

Por lo tanto, las cantidades de tuplas por tablas son las siguientes:

(insertar tabla)

Suposiciones:
- Suponemos que las distribuciones de los diferentes tipos de Asistentes Virtuales se cumplen para los Usuarios con suscripción Pro y Gratis. Por lo tanto, ya que solo un 14% de usuarios paga la suscripción Pro, tenemos un 86% de Asistentes Virtuales de tipo Amigo debido a la suscripción de tipo Gratis.
        El 86% de 20.000.000 = 17.200.000
        El 14% de 20.000.000 = 2.800.000
        
        Habría que hacer también la distribución de tipos de Asistentes de los Usuarios que tienen suscripción de tipo Pro.
        100% Asistentes = 2.800.000
        60% Asistentes de tipo Amigo = 1.680.000
        40% restante = 1.120.000
        Del 40% --> 50% Asistentes de tipo Coach = 1.120.000 / 2 = 560.000
        Del 40% --> 50% Asistentes de tipo Tutor = 1.120.000 / 2 = 560.000
        --> Estimamos que existen 560.000 tuplas de Asistentes de tipo Tutor.

- Suponemos que los usuarios que aprenden idiomas tienen un promedio de aprender dos idioams a la vez. Por consecuencia, Asistentes Virtuales también manejan en promedio dos idomas. Debido a que la estimación de la cantidad de tuplas de Asistentes de tipo Tutor son 560,000 , se llega a la conclusión que tanto en las tablas aprende y maneja se estima una cantidad de tuplas de 560.000 * 2 = 1.120.000
        La estimación de la cantidad de tuplas de Asistentes de tipo Tutor son 560,000 --> también hay 560.000 tuplas de usuarios que aprenden idiomas.
        Inicialmente, los Tutores deben de poder manejar minimo un idioma --> N° de tuplas de maneja 560.000
        Debido a que asumimos que en promedio los Tutores manejan dos idomas --> N° de tuplas de maneja = 560.000 * 2 = 1.120.000.
        La cantidad de tuplas de maneja se refleja en la tabla de aprende debido a que el asistente deben de manejar los idomas que el usuario quiere aprender --> N° de tuplas en aprende = 1.120.000

- Suponemos que los usuarios que realizaron compras, realizaron en promedio 5 compras en total. Sabemos que el 76% tienen más de 400 gemas, que un 14% tiene entre 400 y 50 gemas y un 10% menos de 50 gemas. Asumimos que el 95% de todos los usuarios realizaron al menos una compra.
        Si el 95% de los usuarios realizaron al menos una compra, la cantidad de tuplas de la tabla compra se estima en 19.000.000. Debido a que suponemos que en promedio cada usuario hizo 5 compras, estiamos que la cantidad de tuplas en la tabla compra es: 19.000.000 * 5 = 95.000.000

- Suponemos que el 31% de los usuarios hicieron una integración con alguna aplicación.
        Si el 31% de usuario realizaron una y solo una integración, estimaos que la cantidad de tuplas en integración es: 20.000.000 * 0,31 = 6.200.000

La parte 3 es la tabla que está en DRIVE. Capaz que podemos justificar algunos datos.