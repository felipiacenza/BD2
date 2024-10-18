**Entidades:**

Usuario(email, nombre, pass, fecha_nac, fecha_reg, rango_edad_id, genero, telefono (unico), id_suscripcion)

RangoEdad (rango_edad_id,rango)

Billetera (id_billetera, email, cant_gemas,cant_monedas)

Asistente Virutal(id_asistente,nombre, idiomas, genero, historia, rol, sub-rol)

Progreso(id_progreso, nombre,sesiones_completadas, nivel_idioma)

Certificado (id_certificado, nombre, idioma,nivel de dominio)

Suscripcion (id_suscripcion, precio, tipo)

Idioma(id_idioma, nombre)

Aplicacion(id_app, nombre, tipo)

Paquetes (id_paquete, tipo, cantidad, importe, descuento)

Ropa (id_ropa, descripcion, tipo, precio_gemas,precio_monedas)

Intereses(nombre,imagen)

Apariencia(id_apariencia,descripcion,tipo,imagen,precio_gemas,precio_monedas)

Voz(voz_id, tipo, tono,precio_gemas,precio_monedas)

Rasgos(id_rasgo, imagen, nombre)

Avatar(id_avatar,id_voz)

**Relaciones:**

interactua(email, id_asistente,fecha,hora,tipo_interaccion,idoma_interaccion,respuesta)

genera_progreso(email,id_asistencia,id_progreso,fecha_obtencion)

genera_certificado(email,id_asistencia,id_progreso,id_certificado, fecha_obtencion)

realiza_integ(id_usuario,id_app,hora_confirmación,fecha_confirmacion)

compra(id_usuario,id_paquete,hora)

maneja(id_asistente, id_idioma)

aprende(id_usuario,id_idioma)

personifica(id_asistente,id_avatar)

tiene_ropa(id_avatar,id_ropa)

tiene_int(id_avatar,nombre_interes)

tiene_per(id_avatar, id_rasgo)

tiene_apa(id_avatar,id_apa)