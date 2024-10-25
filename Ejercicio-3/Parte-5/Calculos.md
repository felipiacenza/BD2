Tabla Billetera:

    - Proyección:
        email = 100 bytes
        cant_gemas = 4 bytes
        Tamaño total 104 bytes

        --> Factor de bloqueo: 2048 / 104 = 19

        Cantidad de bloques: 20.000.000 / 19 = 1.052.632

    - Selección:
        Por letra, solo el 24% de los usuarios no tienen más de 400 gemas.

        El 24% de los usuarios sería 5.200.000.

        --> Factor de bloqueo : igual al de la proyección, es decir 19

        Cantidad de bloques: 4.800.000 / 19 = 266.667

        Costo total: log(18)(20.000.000) +266.667 = 266.673 bloques

Tabla Usuario:

    - Proyección:
        email = 100 bytes
        nombre = 100 bytes
        id_pais = 4 bytes
        Tamaño total: 204 bytes

        --> Factor de bloqueo: 2048 / 204 = 10

        Cantidad de bloques 20.000.000 / 10 = 2.000.000

    - Selección
        Condición: la fecha esté entre el 1ro de enero del 2023 y 31 de diciembre de 2023

        Datos y suposiciones:
        - La app fue lanzada en noviembre de 2017. Suponemos que el 1ro del mes.
        - Suponemos que el ultimo mes posible es septiembre de 2024

        --> Entre el primero de noviembre y el 30 de septimebre existen 2525

        ---> En promedio, por día se registraron: 20.000.000 / 2525 = 7.921 usuarios por día

        Por año, es decir, en el año 2023, se estima que se registraron: 7.921 * 365 días = 2.891.165

        Es decir, estimamos 2.891.165 tuplas para ese año.

        ---> Factor de bloqueo es igual a la proyección: 10

        Cantidad de bloques: 2.891.165 / 10 = 289.117   

        Costo total: 289,121 bloques




Tabla Pais:
    - Proyección:
        id = 4
        nombre_pais = 100
        Tamaño total: 104 bytes

        --> Factor de bloqueo 19
        --> La cantidad de bloques es 9

    - Selección:
        Condición: nombre_pais = 'Uruguay'

        --> Al ser una tabla de valores unicos, el valor Uruguay es el único presente.
        --> Cantidad de bloques: 1


Tabla Idioma:
    - Selección
        Condición: nombre = 'Ingles'

        --> Al ser una tabla de valores unicos, el valor Inglés es el único presente.
        --> Cantidad de bloques: 1

Tabla Asistente
    - Proyección:
        id_asistente: 4
        rol: 50
        subrol: 50
        Tamaño de tupla: 104

        --> Factor de bloqueo: 2048 / 104 = 19
        Cantidad de tuplas estimadas: 20.000.000 / 19
        --> 1.052.632 bloques

    - Selección:
        Condición: subrol = 'Enseñanza de Idiomas' y rol = 'Tutor'

        Por letra, sabemos que el 20% de los asistentes son de tipo (rol) Tutor.
        Dentro de los tutores, los subroles posibles son: Apoyo educativo, Enseñanza de Idiomas o Preparación de Exámenes. Si las distribuciónes son unifomres y proporcionales, podemos afirmar que el 33,3% son Tutores con el subrol 'Enseñanza de Idiomas'

        --> El 20% de los asistentes: 20.000.000 * 0,20 = 4.000.000

        --> De esos 4.000.000 de Asistentes tutores, el 33% son de sub-rol 'Enseñanza de Idiomas': 4.000.000 * ' 0,33 = 1.320.000

        --> Factor de bloqueo: igual al de la proyección

        --> Cantidad de bloques: 1.320.000 / 19 = 69.474

Cálculo de Joins

    Para el cálculo de los Joins, vamos a utilizar la fórmula de Indexed Nested Loop Joins

    - bR: cantidad de bloques de la tabla externa (en este caso, la que sería "outer table").

    - bS: cantidad de bloques de la tabla interna (en este caso, la que sería "inner table").

    - M: cantidad de búfers disponibles (14 en este caso).

    Fórmula: 2 * (bR + bS) * (⌈log(M-1)(bS)⌉ - 1) + bR + bS

    - Join Usuario - Billetera

        Cantidad de bloques de Usuario luego de la selección 273.684 (bR)

        Cantidad de bloques de Billetera luego de la selección: 289.117 (bS)

        --> Cantidad de bloques del Join: 5.065.209


    - Join Maneja - Idioma
        Cantidad de bloques de Maneja: 4.375 (bS)
        Cantidad de bloques de Idioma luego de selección: 1 (bR)

        --> 1 + ((1 * 4375) / (14-2)) = 366

    - Join Asistente - Tiene
        Cantidad de bloques de Asistente luego de la selección: 69.474 (bR)
        Cantidad de bloques de Tiene: 1.052.632 (bS)

        --> 69.474 (69.474 * 1.052.632 / (14-2)) = 6.096.552.605

    - Join entre Join Usuario - Billetera y Pais
        Cantidad de bloques del Join Usuario - Billetera: 5.065.209 (bS)
        Cantidad de bloques de Pais: 1 (bR)

        --> 1 ((1*6.594.165.103)/(14-2)) = 549.513.760

    - Join entre Join Maneja - Idioma y Join Asistente - Tiene
        Cantidad de bloques del Join Maneja - Idioma: 366 (bR)
        Cantidad de bloques de Join Asistente - Tiene: 6.096.552.605 (bS)

        --> 366 ((366*6.096.552.605)/(14-2)) = 185.944.268.794

    - Join final:
        - Cantidad de bloques del Join izquierdo: 549.513.760 (bR)
        - Cantidad de bloques del Join derecho: 185.944.268.794 (bS)

        ---> 549.513.760 + ((549.513.760 * 185.944.268.794)/(14-2)) = 8.518.537.877.485.251.947