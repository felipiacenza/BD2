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

        Cantidad de bloques: 4.800.000 / 19 = 252.632
        
        --> Factor de ramificación: 18 (por propiedad del índice B+).
        Log(18)20.000.000 = 5.82
        El costo de acceder al índice B+ para la tabla Billetera es aproximadamente 5.82 niveles.
        
        Costo total: log(18)(20.000.000) + 252.632 = 5.82 + 252.632 = 252.638 bloques

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
        El costo de acceder al índice B+ para la tabla Billetera es aproximadamente 5.82 niveles.

        Cantidad de bloques: 2.891.165 / 10 = 289.117   

        Costo total: log(18)20.000.000 + 289.117 = 5.82 + 289.117 = 289.121 bloques

    
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
        Factor de ramificación: Para simplificar usaremos un factor típico de 10.
        Por letra sabemos que tenemos 160 países.
        Log(10)(160) = 2.29 niveles.
        --> Cantidad de bloques: 1
        
        Costo Total: Log(10)(160) + 1 = 2.29 + 1 = 3,2 bloques

Tabla Idioma:
    - Selección
        Condición: nombre = 'Ingles'

        --> Al ser una tabla de valores unicos, el valor Inglés es el único presente.
        --> Cantidad de bloques: 1

        Costo Total: log(10)(50) + 1 = 1,699 + 1 = 2,7 bloques

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

        --> Factor de bloqueo: igual al de la proyección: 19
        --> Factor de ramificación: 18 (por propiedad del índice B+).

        --> Cantidad de bloques: 1.320.000 / 19 = 69.474

        Costo Total: Log(18)(1.320.000) + 69.474 = 4,876 + 69.474 = 69,479

