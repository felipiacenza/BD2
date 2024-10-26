# Cálculos de Proyecciones y Selecciones

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
        
        --> Factor de ramificación: 19,70 (por propiedad del índice B+).
            X = tamaño del bloque / (tamaño de la clave + tamaño del puntero del indice)
            X = 2048 / (100+4) = 2048 / 104
            X = 19,70

        Log(19,70)20.000.000 = 5,64
        El costo de acceder al índice B+ para la tabla Billetera es aproximadamente 5,64 niveles.
        
        --> Costo total = X + cantidad de bloques = 5,64 + 252.632
            Costo total = 252.638

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
        
        Entre el primero de noviembre y el 30 de septimebre existen 2525
        En promedio, por día se registraron: 20.000.000 / 2525 = 7.921 usuarios por día
        Por año, es decir, en el año 2023, se estima que se registraron: 7.921 * 365 días = 2.891.165
        Es decir, estimamos 2.891.165 tuplas para ese año.

        ---> Factor de bloqueo es igual a la proyección: 10

        Cantidad de bloques: 2.891.165 / 10 = 289.117
        
        --> Factor de ramificación: 19,70 (por propiedad del índice B+).
            X = X = tamaño del bloque / (tamaño de la clave + tamaño del puntero del indice)
            X = 2048 / (100+4) = 2048 / 104
            X = 19,70
        
        Log(19,70)20.000.000 = 5,64
        El costo de acceder al índice B+ para la tabla Billetera es aproximadamente 5,64 niveles.

        --> Costo total: log(18)20.000.000 + 289.117 = 5,64 + 289.117 = 289.123 bloques

    
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
            Por lo tanto, la cantidad de bloques va a ser 1
            Cantidad de bloques: 1

        --> Factor de ramificación: 256 (por propiedad del índice B+).
            X = tamaño del bloque / (tamaño de la clave + tamaño del puntero del indice)
            X = 2048 / (4+4) = 2048 / 8
            X = 256
        
        Por letra sabemos que tenemos 160 países.

        Log(256)(160) = 0,91 = 1
        
        --> Costo Total: Log(10)(160) + 1 = 1 + 1 = 2 bloques

Tabla Idioma:
    - Selección
        Condición: nombre = 'Ingles'

        --> Al ser una tabla de valores unicos, el valor Inglés es el único presente.
            Cantidad de bloques: 1

        --> Factor de ramificación: 256 (por propiedad del índice B+).
            X = tamaño del bloque / (tamaño de la clave + tamaño del puntero del indice)
            X = 2048 / (4+4) = 2048 / 8
            X = 256

            Log(256)(50) = 0,70 = 1

        --> Costo Total: log(256)(50) + 1 = 1 + 1 = 2 bloques

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

        El 20% de los asistentes: 20.000.000 * 0,20 = 4.000.000

        De esos 4.000.000 de Asistentes tutores, el 33% son de sub-rol 'Enseñanza de Idiomas': 4.000.000 * ' 0,33 = 1.320.000

        --> Factor de bloqueo: igual al de la proyección: 19

        --> Cantidad de bloques: 1.320.000 / 19 = 69.474
        
        --> Factor de ramificación: 256 (por propiedad del índice B+).
            X = tamaño del bloque / (tamaño de la clave + tamaño del puntero del indice)
            X = 2048 / (4+4) = 2048 / 8
            X = 256

            Log(256)20.000.000 = 3,03        

        --> Costo Total: Log(256)20.000.000 + 69.474 = 3,03 + 69.474 = 69.478

# Cálculos de Join

    Para el cálculo de los Joins vamos a utilizar diferentes tipos de Joins

    Join Usuario y Billetera:
    
    Para realizar este Join vamos a realizar un Hash Join
    --> Fórmula: 2 * (bR + bS) * (⌈log(M-1)(bS)⌉ - 1) + bR + bS

        2 * (2.000.000 + 1.052.632) * (log(14-1)(1.052.632) - 1) + 2.000.000 + 1.052.000

        2 * (2.000.000 + 1.052.632) * (4−1) + 2.000.000 + 1.052.632

        Costo final: 21.368.424 bloques

    Join del Join Usuario y Billetera y Pais

    Para realizar este Join vamos a realizar un Hash Join
    --> Fórmula: 2 * (bR + bS) * (⌈log(M-1)(bS)⌉ - 1) + bR + bS

        2 * (21.368.424 + 2) * (1 - 1) + 21.368.424 + 2

        0 + 21.368.424 + 2

        Costo final: 21.358.424

    Join del Maneja y Idioma
    Para realizar este Join vamos a realizar un Hash Join

    --> Fórmula: 2 * (bR + bS) * (⌈log(M-1)(bS)⌉ - 1) + bR + bS

        2 * (4375 + 2) * (1 - 1) + 4375 + 2

        0 + 4375 + 2

        Costo final: 4377 bloques

    Join Asistente y Tiene
    Para realizar este Join vamos a realizar un Hash Join

    --> Fórmula: 2 * (bR + bS) * (⌈log(M-1)(bS)⌉ - 1) + bR + bS

    2 * (69.478 + 1.052.632) * (4 − 1)+ 69.478 + 1.052.632

    2 * 1.122.110 * 3 + 1.122.110

    6.732.660 + 1.122.110

    Costo final: 7.854.770 bloques


    Join entre el Join de Asistente y Tiene y el Join de Maneja e Idioma

    Para realizar este Join vamos a realizar un Hash Join

    --> Fórmula: 2 * (bR + bS) * (⌈log(M-1)(bS)⌉ - 1) + bR + bS

    2 * (7.854.770 + 4.377) * (3 − 1) + 7.854.770 + 4.377

    2 * 7.859.147 * 2 + 7.854.770 + 4.377

    31.436.588 + 7.859.147

    Costo final: 39.295.735 bloques

    Join Final:

    Para realizar este Join vamos a realizar un Hash Join

    --> Fórmula: 2 * (bR + bS) * (⌈log(M-1)(bS)⌉ - 1) + bR + bS

    2 * (21.368.424 + 39.295.735) * (4−1) + 21.368.424 + 39.295.735

    2 * 60.664.159 * 3 + 21.368.424 + 39.295.735

    364.984.954 + 21.368.424 + 39.295.735

    181.992.477 + 60.664.159

    Coste final: 425.649.113 bloques


# Proyección final

    - Proyección:
        nombre = 100 bytes
        Tamaño total: 100 bytes

        --> Factor de bloqueo: 2048 / 100 = 20

        Cantidad de bloques 425.649.113 / 20 = 21.282.456 bloques