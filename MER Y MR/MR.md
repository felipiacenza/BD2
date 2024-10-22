Entidades:

Usuario (email, nombre, pass, fecha_nac, fecha_reg, rango_edad_id, genero, telefono, id_suscripcion)
   - PK: email
   - AK: telefono
   - FK: rango_edad_id --> RangoEdad
   - FK: id_suscripcion --> Suscripcion

RangoEdad (rango_edad_id, rango)
   - PK: rango_edad_id

Billetera (id_billetera, email, cant_gemas, cant_monedas)
   - PK: id_billetera
   - FK: email --> Usuario

AsistenteVirtual (id_asistente, nombre, genero, historia)
   - PK: id_asistente

Idioma (id_idioma, nombre)
   - PK: id_idioma

AsistenteRol (id_asistente, id_rol)
    - PK: (id_asistente, id_rol)
    - FK: id_asistente --> AsistenteVirtual
    - FK: id_rol --> Rol

AsistenteSubRol (id_asistente, id_subrol)
    - PK: (id_asistente, id_subrol)
    - FK: id_asistente --> AsistenteVirtual
    - FK: id_subrol --> SubRol

Rol (id_rol, nombre)
   - PK: id_rol

SubRol (id_subrol, nombre, id_rol)
   - PK: id_subrol
   - FK: id_rol --> Rol

Avatar (id_avatar, id_voz)
    - PK: id_avatar
    - FK: id_voz --> Voz

Voz (id_voz, tipo, tono)
    - PK: id_voz

RasgoPersonalidad (id_rasgo, imagen, nombre)
    - PK: id_rasgo

Interes (id_interes, nombre, imagen)
    - PK: id_interes

Apariencia (id_apariencia, descripcion, tipo, imagen, precio_gemas, precio_monedas)
    - PK: id_apariencia

Ropa (id_ropa, descripcion, tipo, precio_gemas, precio_monedas)
    - PK: id_ropa

Paquete (id_paquete, tipo, cantidad, importe, descuento)
    - PK: id_paquete

Suscripcion (id_suscripcion, precio, tipo)
    - PK: id_suscripcion

Aplicacion (id_app, nombre, tipo)
    - PK: id_app



---



Relaciones:

personifica (id_asistente, id_avatar)
    - PK: id_asistente
    - FK: id_asistente --> AsistenteVirtual
    - FK: id_avatar --> Avatar

integracion (email, id_app, fecha_confirmacion, hora_confirmacion)
    - PK: (email, id_app)
    - FK: email --> Usuario
    - FK: id_app --> Aplicacion

compra (id_compra, email, id_paquete, metodo_pago, fecha, hora)
    - PK: id_compra
    - FK: email --> Usuario
    - FK: id_paquete --> Paquete

maneja (id_asistente, id_idioma)
   - PK: (id_asistente, id_idioma)
   - FK: id_asistente --> AsistenteVirtual
   - FK: id_idioma --> Idioma

aprende (email, id_idioma)
   - PK: (email, id_idioma)
   - FK: email --> Usuario
   - FK: id_idioma --> Idioma

A_Ropa (id_avatar, id_ropa)
    - PK: (id_avatar, id_ropa)
    - FK: id_avatar --> Avatar
    - FK: id_ropa --> Ropa

A_Inte (id_avatar, id_interes)
    - PK: (id_avatar, id_interes)
    - FK: id_avatar --> Avatar
    - FK: id_interes --> Interes

A_Rasgo (id_avatar, id_rasgo)
    - PK: (id_avatar, id_rasgo)
    - FK: id_avatar --> Avatar
    - FK: id_rasgo --> RasgoPersonalidad

A_Apa (id_avatar, id_apariencia)
    - PK: (id_avatar, id_apariencia)
    - FK: id_avatar --> Avatar
    - FK: id_apariencia --> Apariencia

tiene (email,id_asistente)
    - PK: email
    - FK: eamil --> Usuario
    - FK: id_asistente --> AsistenteVirtual