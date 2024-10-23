# Tamaño de las tuplas de las tablas

## RangoEdad

- rango_edad_id: INT (4 bytes).
- rango: VARCHAR(20) (hasta 20 bytes).
- Tamaño estimado de la tupla: 4 + 20 = 24 bytes.

## Suscripcion

- id_suscripcion: INT (4 bytes).
- precio: DECIMAL(10, 2) (5 bytes en Oracle, 4 para el valor y 1 - para el punto decimal).
- tipo: VARCHAR(20) (hasta 20 bytes).
- Tamaño estimado de la tupla: 4 + 5 + 20 = 29 bytes.

## Pais

- id_pais: INT (4 bytes).
- nombre_pais: VARCHAR(100) (hasta 100 bytes).
- Tamaño estimado de la tupla: 4 + 100 = 104 bytes.

## Usuario

- email: VARCHAR(100) (hasta 100 bytes).
- nombre: VARCHAR(100) (hasta 100 bytes).
- pass: VARCHAR(100) (hasta 100 bytes).
- fecha_nac: DATE (7 bytes en Oracle).
- fecha_reg: DATE (7 bytes en Oracle).
- rango_edad_id: INT (4 bytes).
- genero: VARCHAR(20) (hasta 20 bytes).
- telefono: VARCHAR(20) (hasta 20 bytes).
- id_suscripcion: INT (4 bytes).
- id_pais: INT (4 bytes).
- Tamaño estimado de la tupla: 100 + 100 + 100 + 7 + 7 + 4 + 20 + 20 + 4 + 4 = 366 bytes.

## Billetera

- id_billetera: INT (4 bytes).
- email: VARCHAR(100) (hasta 100 bytes).
- cant_gemas: INT (4 bytes).
- cant_monedas: INT (4 bytes).
- Tamaño estimado de la tupla: 4 + 100 + 4 + 4 = 112 bytes.

## AsistenteVirtual

- id_asistente: INT (4 bytes).
- nombre: VARCHAR(100) (hasta 100 bytes).
- genero: VARCHAR(20) (hasta 20 bytes).
- historia: VARCHAR(255) (hasta 255 bytes).
- rol: VARCHAR(50) (hasta 50 bytes).
- subrol: VARCHAR(50) (hasta 50 bytes).
- Tamaño estimado de la tupla: 4 + 100 + 20 + 255 + 50 + 50 = 479 bytes.

Idioma

id_idioma: INT (4 bytes).
nombre: VARCHAR(50) (hasta 50 bytes).
Tamaño estimado de la tupla: 4 + 50 = 54 bytes.

Voz

id_voz: INT (4 bytes).
tipo: VARCHAR(20) (hasta 20 bytes).
tono: VARCHAR(20) (hasta 20 bytes).
Tamaño estimado de la tupla: 4 + 20 + 20 = 44 bytes.

Avatar

id_avatar: INT (4 bytes).
id_voz: INT (4 bytes).
Tamaño estimado de la tupla: 4 + 4 = 8 bytes.

RasgoPersonalidad

id_rasgo: INT (4 bytes).
imagen: VARCHAR(255) (hasta 255 bytes).
nombre: VARCHAR(50) (hasta 50 bytes).
Tamaño estimado de la tupla: 4 + 255 + 50 = 309 bytes.

Interes

id_interes: INT (4 bytes).
nombre: VARCHAR(100) (hasta 100 bytes).
imagen: VARCHAR(255) (hasta 255 bytes).
Tamaño estimado de la tupla: 4 + 100 + 255 = 359 bytes.

Apariencia

id_apariencia: INT (4 bytes).
descripcion: VARCHAR(255) (hasta 255 bytes).
tipo: VARCHAR(50) (hasta 50 bytes).
imagen: VARCHAR(255) (hasta 255 bytes).
precio_gemas: INT (4 bytes).
precio_monedas: INT (4 bytes).
Tamaño estimado de la tupla: 4 + 255 + 50 + 255 + 4 + 4 = 572 bytes.

Ropa

id_ropa: INT (4 bytes).
descripcion: VARCHAR(255) (hasta 255 bytes).
tipo: VARCHAR(50) (hasta 50 bytes).
precio_gemas: INT (4 bytes).
precio_monedas: INT (4 bytes).
Tamaño estimado de la tupla: 4 + 255 + 50 + 4 + 4 = 317 bytes.

Paquete

id_paquete: INT (4 bytes).
tipo: VARCHAR(50) (hasta 50 bytes).
cantidad: INT (4 bytes).
importe: DECIMAL(10, 2) (5 bytes).
descuento: DECIMAL(5, 2) (3 bytes).
Tamaño estimado de la tupla: 4 + 50 + 4 + 5 + 3 = 66 bytes.

Aplicacion

id_app: INT (4 bytes).
nombre: VARCHAR(100) (hasta 100 bytes).
tipo: VARCHAR(50) (hasta 50 bytes).
Tamaño estimado de la tupla: 4 + 100 + 50 = 154 bytes.

Relaciones (personifica, integracion, compra, maneja, aprende, A_Ropa, A_Inte, A_Rasgo, A_Apa, Tiene):

Estas tablas son principalmente de relaciones, y su tamaño depende de las claves foráneas que conectan. Cada relación tendrá entre 4 y 8 bytes para cada columna de INT o VARCHAR.