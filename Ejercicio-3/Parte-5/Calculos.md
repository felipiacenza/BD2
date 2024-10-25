Tabla Billetera:

    - Proyección:
        email = 100 bytes
        cant_gemas = 4 bytes
        Tamaño total 104 bytes

        --> Factor de bloqueo: 2048 / 104 = 19

        Cantidad de bloques: 20.000.000 / 19 = 1.052.632

    - Selección:
        Por letra, solo el 26% de los usuarios no tienen más de 400 gemas.

        El 26% de los usuarios sería 5.200.000.

        --> Factor de bloqueo : igual al de la proyección, es decir 19

        Cantidad de bloques: 5.200.000 / 19 = 273.684


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

        --> Factor de bloqueo

