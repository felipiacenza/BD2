-- Datos para RangoEdad
INSERT INTO RangoEdad (rango_edad_id, rango) VALUES (1, '18-24');
INSERT INTO RangoEdad (rango_edad_id, rango) VALUES (2, '25-34');
INSERT INTO RangoEdad (rango_edad_id, rango) VALUES (3, '35-44');
INSERT INTO RangoEdad (rango_edad_id, rango) VALUES (4, '45-54');
INSERT INTO RangoEdad (rango_edad_id, rango) VALUES (5, '55-64');
INSERT INTO RangoEdad (rango_edad_id, rango) VALUES (6, '65 o más');

-- Datos para Suscripcion
INSERT INTO Suscripcion (id_suscripcion, precio, tipo) VALUES (1, 0, 'gratis');
INSERT INTO Suscripcion (id_suscripcion, precio, tipo) VALUES (2, 40, 'mensual');
INSERT INTO Suscripcion (id_suscripcion, precio, tipo) VALUES (3, 390, 'anual');
INSERT INTO Suscripcion (id_suscripcion, precio, tipo) VALUES (4, 7999, 'de por vida');

-- Datos para Usuario
INSERT INTO Usuario (email, nombre, pass, fecha_nac, rango_edad_id, genero, telefono, id_suscripcion)
VALUES ('juan.perez@gmail.com', 'Juan Pérez', 'password123', TO_DATE('15/08/1990', 'DD/MM/YYYY'), 2, 'masculino', '099693214', 2);

INSERT INTO Usuario (email, nombre, pass, fecha_nac, rango_edad_id, genero, telefono, id_suscripcion)
VALUES ('maria.garcia@gmail.com', 'Maria Garcia', 'password456', TO_DATE('20/05/1980', 'DD/MM/YYYY'), 3, 'femenino', '097415793', 3);

INSERT INTO Usuario (email, nombre, pass, fecha_nac, rango_edad_id, genero, telefono, id_suscripcion)
VALUES ('manuel.gonzalez@gmail.com', 'Manuel Gonzalez', 'password789', TO_DATE('10/10/2000', 'DD/MM/YYYY'), 1, 'masculino', '098765432', 1);

INSERT INTO Usuario (email, nombre, pass, fecha_nac, rango_edad_id, genero, telefono, id_suscripcion)
VALUES ('valentina.rodriguez@gmail.com', 'Valentina Rodriguez', 'password012', TO_DATE('25/12/1995', 'DD/MM/YYYY'), 2, 'femenino', '099876543', 4);

INSERT INTO Usuario (email, nombre, pass, fecha_nac, rango_edad_id, genero, telefono, id_suscripcion)
VALUES ('pablo.fernandez@gmail.com', 'Pablo Fernandez', 'password123', TO_DATE('30/04/2000', 'DD/MM/YYYY'), 1, 'no binario', '099761384', 2);

INSERT INTO Usuario (email, nombre, pass, fecha_nac, rango_edad_id, genero, telefono, id_suscripcion)
VALUES ('josefina.suarez@outlook.com', 'Josefina Suarez', 'password456', TO_DATE('28/09/2006', 'DD/MM/YYYY'), 1, 'femenino', '098384751', 2);

INSERT INTO Usuario (email, nombre, pass, fecha_nac, rango_edad_id, genero, telefono, id_suscripcion)
VALUES ('bernarda60@gmail.com', 'Bernarda Fabini', 'password098', TO_DATE('16/07/1959', 'DD/MM/YYYY'), 6, 'femenino', '091846359', 3);

INSERT INTO Usuario (email, nombre, pass, fecha_nac, rango_edad_id, genero, telefono, id_suscripcion)
VALUES ('daniel.aguilar@gmail.com', 'Daniel Aguilar', 'password111', TO_DATE('08/12/1972', 'DD/MM/YYYY'), 4, 'masculino', '098449157', 4);

-- Datos para Billetera
INSERT INTO Billetera (id_billetera, email, cant_gemas, cant_monedas) VALUES (1, 'juan.perez@gmail.com', 100, 500);
INSERT INTO Billetera (id_billetera, email, cant_gemas, cant_monedas) VALUES (2, 'maria.garcia@gmail.com', 200, 1000);
INSERT INTO Billetera (id_billetera, email, cant_gemas, cant_monedas) VALUES (3, 'manuel.gonzalez@gmail.com', 50, 250);
INSERT INTO Billetera (id_billetera, email, cant_gemas, cant_monedas) VALUES (4, 'valentina.rodriguez@gmail.com', 500, 2000);
INSERT INTO Billetera (id_billetera, email, cant_gemas, cant_monedas) VALUES (5, 'pablo.fernandez@gmail.com', 10, 300);
INSERT INTO Billetera (id_billetera, email, cant_gemas, cant_monedas) VALUES (6, 'josefina.suarez@outlook.com', 50, 500);
INSERT INTO Billetera (id_billetera, email, cant_gemas, cant_monedas) VALUES (7, 'bernarda60@gmail.com', 600, 4000);
INSERT INTO Billetera (id_billetera, email, cant_gemas, cant_monedas) VALUES (8, 'daniel.aguilar@gmail.com', 100, 900);

-- Datos para AsistenteVirtual
INSERT INTO AsistenteVirtual (id_asistente, nombre, genero, historia) 
VALUES (1, 'Alexa', 'femenino', 'Un asistente virtual amigable y eficiente.');
INSERT INTO AsistenteVirtual (id_asistente, nombre, genero, historia) 
VALUES (2, 'Jarvis', 'masculino', 'Un asistente virtual altamente inteligente.');
INSERT INTO AsistenteVirtual (id_asistente, nombre, genero, historia)
VALUES (3, 'Cortana', 'femenino', 'Un asistente virtual con gran capacidad de aprendizaje.');
INSERT INTO AsistenteVirtual (id_asistente, nombre, genero, historia)
VALUES (4, 'Siri', 'femenino', 'Un asistente virtual con gran capacidad de aprendizaje.');
INSERT INTO AsistenteVirtual (id_asistente, nombre, genero, historia)
VALUES (5, 'Jo', 'no binario', 'Un asistente virtual con mucho conocimiento musical.');
INSERT INTO AsistenteVirtual (id_asistente, nombre, genero, historia)
VALUES (6, 'Marcos', 'masculino', NULL);
INSERT INTO AsistenteVirtual (id_asistente, nombre, genero, historia)
VALUES (7, 'Gastón', 'masculino', NULL);
INSERT INTO AsistenteVirtual (id_asistente, nombre, genero, historia)
VALUES (8, 'Vale', 'no binario', 'Un asistente virtual con buen sentido del humor.');

-- Datos para Tiene
INSERT INTO Tiene (email, id_asistente) VALUES ('juan.perez@gmail.com', 1);
INSERT INTO Tiene (email, id_asistente) VALUES ('maria.garcia@gmail.com', 2);
INSERT INTO Tiene (email, id_asistente) VALUES ('manuel.gonzalez@gmail.com', 3);
INSERT INTO Tiene (email, id_asistente) VALUES ('valentina.rodriguez@gmail.com',4);
INSERT INTO Tiene (email, id_asistente) VALUES ('pablo.fernandez@gmail.com', 5);
INSERT INTO Tiene (email, id_asistente) VALUES ('josefina.suarez@outlook.com', 6);
INSERT INTO Tiene (email, id_asistente) VALUES ('bernarda60@gmail.com', 7);
INSERT INTO Tiene (email, id_asistente) VALUES ('daniel.aguilar@gmail.com', 8);

-- Datos para Idioma
INSERT INTO Idioma (id_idioma, nombre) VALUES (1, 'Español');
INSERT INTO Idioma (id_idioma, nombre) VALUES (2, 'Inglés');
INSERT INTO Idioma (id_idioma, nombre) VALUES (3, 'Francés');
INSERT INTO Idioma (id_idioma, nombre) VALUES (4, 'Alemán');
INSERT INTO Idioma (id_idioma, nombre) VALUES (5, 'Chino');
INSERT INTO Idioma (id_idioma, nombre) VALUES (6, 'Koreano');
INSERT INTO Idioma (id_idioma, nombre) VALUES (7, 'Portugués');
INSERT INTO Idioma (id_idioma, nombre) VALUES (8, 'Suajili');
INSERT INTO Idioma (id_idioma, nombre) VALUES (9, 'Ruso');

-- Datos para Rol
INSERT INTO Rol (id_rol, nombre) VALUES (1, 'Amigo');
INSERT INTO Rol (id_rol, nombre) VALUES (2, 'Tutor');
INSERT INTO Rol (id_rol, nombre) VALUES (3, 'Coach');

-- Datos para SubRol
INSERT INTO SubRol (id_subrol, nombre, id_rol) VALUES (1, 'Amigo', 1);
INSERT INTO SubRol (id_subrol, nombre, id_rol) VALUES (2, 'Apoyo educativo', 2);
INSERT INTO SubRol (id_subrol, nombre, id_rol) VALUES (3, 'Enseñanza de Idiomas', 2);
INSERT INTO SubRol (id_subrol, nombre, id_rol) VALUES (4, 'Preparación de exámenes', 2);
INSERT INTO SubRol (id_subrol, nombre, id_rol) VALUES (5, 'Planificación', 3);
INSERT INTO SubRol (id_subrol, nombre, id_rol) VALUES (6, 'Organización del tiempo', 3);

-- Datos para AsistenteRol
INSERT INTO AsistenteRol (id_asistente, id_rol) VALUES (1, 2);
INSERT INTO AsistenteRol (id_asistente, id_rol) VALUES (2, 3);
INSERT INTO AsistenteRol (id_asistente, id_rol) VALUES (3, 1);
INSERT INTO AsistenteRol (id_asistente, id_rol) VALUES (4, 2);
INSERT INTO AsistenteRol (id_asistente, id_rol) VALUES (5, 3);
INSERT INTO AsistenteRol (id_asistente, id_rol) VALUES (6, 2);
INSERT INTO AsistenteRol (id_asistente, id_rol) VALUES (7, 1);
INSERT INTO AsistenteRol (id_asistente, id_rol) VALUES (8, 1);

-- Datos para AsistenteSubRol
INSERT INTO AsistenteSubRol (id_asistente, id_subrol) VALUES (1, 2);
INSERT INTO AsistenteSubRol (id_asistente, id_subrol) VALUES (2, 5);
INSERT INTO AsistenteSubRol (id_asistente, id_subrol) VALUES (3, 1);
INSERT INTO AsistenteSubRol (id_asistente, id_subrol) VALUES (4, 3);
INSERT INTO AsistenteSubRol (id_asistente, id_subrol) VALUES (5, 6);
INSERT INTO AsistenteSubRol (id_asistente, id_subrol) VALUES (6, 3);
INSERT INTO AsistenteSubRol (id_asistente, id_subrol) VALUES (7, 1);
INSERT INTO AsistenteSubRol (id_asistente, id_subrol) VALUES (8, 1);

-- Datos para Voz
INSERT INTO Voz (tipo, tono) VALUES ('femenina', 'alegre');
INSERT INTO Voz (tipo,tono) VALUES ('femenina', 'calmo');
INSERT INTO Voz (tipo, tono) VALUES ('femenina', 'seguro');
INSERT INTO Voz (tipo, tono) VALUES ('femenina', 'enérgico');
INSERT INTO Voz (tipo, tono) VALUES ('femenina', 'optimista');
INSERT INTO Voz (tipo, tono) VALUES ('masculina', 'alegre');
INSERT INTO Voz (tipo, tono) VALUES ('masculina', 'calmo');
INSERT INTO Voz (tipo, tono) VALUES ('masculina', 'seguro');
INSERT INTO Voz (tipo, tono) VALUES ('masculina', 'enérgico');
INSERT INTO Voz (tipo, tono) VALUES ('masculina', 'optimista');

-- Datos para Avatar
INSERT INTO Avatar (id_avatar, id_voz) VALUES (1, 1);
INSERT INTO Avatar (id_avatar, id_voz) VALUES (2, 6);
INSERT INTO Avatar (id_avatar, id_voz) VALUES (3, 2);
INSERT INTO Avatar (id_avatar, id_voz) VALUES (4, 3);
INSERT INTO Avatar (id_avatar, id_voz) VALUES (5, 4);
INSERT INTO Avatar (id_avatar, id_voz) VALUES (6, 7);
INSERT INTO Avatar (id_avatar, id_voz) VALUES (7, 6);
INSERT INTO Avatar (id_avatar, id_voz) VALUES (8, 9);

-- Datos para RasgoPersonalidad
INSERT INTO RasgoPersonalidad (id_rasgo, imagen, nombre) VALUES (1, 'imagen1.png', 'seguro');
INSERT INTO RasgoPersonalidad (id_rasgo, imagen, nombre) VALUES (2, 'imagen2.png', 'tímido');
INSERT INTO RasgoPersonalidad (id_rasgo, imagen, nombre) VALUES (3, 'imagen3.png', 'energético');
INSERT INTO RasgoPersonalidad (id_rasgo, imagen, nombre) VALUES (4, 'imagen4.png', 'práctico');
INSERT INTO RasgoPersonalidad (id_rasgo, imagen, nombre) VALUES (5, 'imagen5.png', 'soñador');
INSERT INTO RasgoPersonalidad (id_rasgo, imagen, nombre) VALUES (6, 'imagen6.png', 'artístico');
INSERT INTO RasgoPersonalidad (id_rasgo, imagen, nombre) VALUES (7, 'imagen7.png', 'lógico');

-- Datos para Interes
INSERT INTO Interes (id_interes, nombre, imagen) VALUES (1, 'Deportes', 'deportes.png');
INSERT INTO Interes (id_interes, nombre, imagen) VALUES (2, 'Cine', 'cine.png');
INSERT INTO Interes (id_interes, nombre, imagen) VALUES (3, 'Música', 'musica.png');
INSERT INTO Interes (id_interes, nombre, imagen) VALUES (4, 'Viajes', 'viajes.png');
INSERT INTO Interes (id_interes, nombre, imagen) VALUES (5, 'Filosofía', 'filosofia.png');
INSERT INTO Interes (id_interes, nombre, imagen) VALUES (6, 'Cocina', 'cocina.png');
INSERT INTO Interes (id_interes, nombre, imagen) VALUES (7, 'Autos', 'autos.png');
INSERT INTO Interes (id_interes, nombre, imagen) VALUES (8, 'Libros', 'libros.png');

-- Datos para Apariencia
INSERT INTO Apariencia (id_apariencia, descripcion, tipo, imagen, precio_gemas, precio_monedas)
VALUES (1, 'Cabello corto', 'cabello', 'cabello.png', 50, 500);
INSERT INTO Apariencia (id_apariencia, descripcion, tipo, imagen, precio_gemas, precio_monedas)
VALUES (2, 'Ojos azules', 'ojos', 'ojos.png', 30, 300);
INSERT INTO Apariencia (id_apariencia, descripcion, tipo, imagen, precio_gemas, precio_monedas)
VALUES (3, 'Piel morena', 'piel', 'piel.png', 40, 400);
INSERT INTO Apariencia (id_apariencia, descripcion, tipo, imagen, precio_gemas, precio_monedas)
VALUES (4, 'Cuerpo atlético', 'cuerpo', 'cuerpo.png', 60, 600);
INSERT INTO Apariencia (id_apariencia, descripcion, tipo, imagen, precio_gemas, precio_monedas)
VALUES (5, 'Estatura alta', 'cuerpo', 'alta.png', 30, 100);
INSERT INTO Apariencia (id_apariencia, descripcion, tipo, imagen, precio_gemas, precio_monedas)
VALUES (6, 'Estatura baja', 'cuerpo', 'baja.png', 30, 100);
INSERT INTO Apariencia (id_apariencia, descripcion, tipo, imagen, precio_gemas, precio_monedas)
VALUES (7, 'Tatuaje', 'accesorios', 'tatuaje.png', 60, 700);
INSERT INTO Apariencia (id_apariencia, descripcion, tipo, imagen, precio_gemas, precio_monedas)
VALUES (8, 'Maquillaje', 'maquillaje', 'maquillajeOjos.png', 40, 500);

-- Datos para Ropa
INSERT INTO Ropa (id_ropa, descripcion, tipo, precio_gemas, precio_monedas)
VALUES (1, 'Camisa de verano', 'verano', 40, 400);
INSERT INTO Ropa (id_ropa, descripcion, tipo, precio_gemas, precio_monedas)
VALUES (2, 'Vestido de fiesta', 'fiesta', 60, 600);
INSERT INTO Ropa (id_ropa, descripcion, tipo, precio_gemas, precio_monedas)
VALUES (3, 'Camiseta de deporte', 'deporte', 50, 500);
INSERT INTO Ropa (id_ropa, descripcion, tipo, precio_gemas, precio_monedas)
VALUES (4, 'Traje de oficina', 'oficina', 70, 700);
INSERT INTO Ropa (id_ropa, descripcion, tipo, precio_gemas, precio_monedas)
VALUES (5, 'Traje de cosplay', 'anime', 80, 900);
INSERT INTO Ropa (id_ropa, descripcion, tipo, precio_gemas, precio_monedas)
VALUES (6, 'Chaqueta', 'primavera', 60, 500);
INSERT INTO Ropa (id_ropa, descripcion, tipo, precio_gemas, precio_monedas)
VALUES (7, 'Esmoquin', 'fiesta', 70, 600);
INSERT INTO Ropa (id_ropa, descripcion, tipo, precio_gemas, precio_monedas)
VALUES (8, 'Zapatos', 'otros', 30, 400);

-- Datos para Paquete
INSERT INTO Paquete (id_paquete, tipo, cantidad, importe, descuento) 
VALUES (1, 'gemas', 100, 400, 0.1);
INSERT INTO Paquete (id_paquete, tipo, cantidad, importe, descuento) 
VALUES (2, 'monedas', 1000, 850, 0.15);
INSERT INTO Paquete (id_paquete, tipo, cantidad, importe, descuento)
VALUES (3, 'gemas', 200,500, 0.2);
INSERT INTO Paquete (id_paquete, tipo, cantidad, importe, descuento)
VALUES (4, 'monedas', 500, 400, 0.0);
INSERT INTO Paquete (id_paquete, tipo, cantidad, importe, descuento)
VALUES (5, 'monedas', 2000, 1800, 0.1);
INSERT INTO Paquete (id_paquete, tipo, cantidad, importe, descuento)
VALUES (6, 'gemas', 50, 300, 0.1);

-- Datos para Aplicacion
INSERT INTO Aplicacion (id_app, nombre, tipo) VALUES (1, 'FitApp', 'Deporte');
INSERT INTO Aplicacion (id_app, nombre, tipo) VALUES (2, 'EduApp', 'Educación');
INSERT INTO Aplicacion (id_app, nombre, tipo) VALUES (3, 'GameApp', 'Juegos');
INSERT INTO Aplicacion (id_app, nombre, tipo) VALUES (4, 'MusicApp', 'Música');
INSERT INTO Aplicacion (id_app, nombre, tipo) VALUES (5, 'SocialApp', 'Red Social');
INSERT INTO Aplicacion (id_app, nombre, tipo) VALUES (6, 'CalendarApp', 'Calendario');

-- Datos para personifica
INSERT INTO personifica (id_asistente, id_avatar) VALUES (1, 1);
INSERT INTO personifica (id_asistente, id_avatar) VALUES (2, 2);
INSERT INTO personifica (id_asistente, id_avatar) VALUES (3, 3);
INSERT INTO personifica (id_asistente, id_avatar) VALUES (4, 4);
INSERT INTO personifica (id_asistente, id_avatar) VALUES (5, 5);
INSERT INTO personifica (id_asistente, id_avatar) VALUES (6, 6);
INSERT INTO personifica (id_asistente, id_avatar) VALUES (7, 7);
INSERT INTO personifica (id_asistente, id_avatar) VALUES (8, 8);

-- Datos para integracion
INSERT INTO integracion (email, id_app, fecha_confirmacion, hora_confirmacion) 
VALUES ('juan.perez@gmail.com', 1, TO_DATE('20/10/2023', 'DD/MM/YYYY'), TO_TIMESTAMP('12:00:00', 'HH24:MI:SS'));
INSERT INTO integracion (email, id_app, fecha_confirmacion, hora_confirmacion) 
VALUES ('maria.garcia@gmail.com', 2, TO_DATE('21/10/2023', 'DD/MM/YYYY'), TO_TIMESTAMP('14:00:00', 'HH24:MI:SS'));
INSERT INTO integracion (email, id_app, fecha_confirmacion, hora_confirmacion)
VALUES ('manuel.gonzalez@gmail.com', 3, TO_DATE('22/10/2023', 'DD/MM/YYYY'), TO_TIMESTAMP('16:00:00', 'HH24:MI:SS'));
INSERT INTO integracion (email, id_app, fecha_confirmacion, hora_confirmacion)
VALUES ('pablo.fernandez@gmail.com', 5, TO_DATE('10/08/2024', 'DD/MM/YYYY'), TO_TIMESTAMP('09:50:04', 'HH24:MI:SS'));
INSERT INTO integracion (email, id_app, fecha_confirmacion, hora_confirmacion)
VALUES ('josefina.suarez@outlook.com', 5, TO_DATE('30/09/2024', 'DD/MM/YYYY'), TO_TIMESTAMP('19:30:50', 'HH24:MI:SS'));
INSERT INTO integracion (email, id_app, fecha_confirmacion, hora_confirmacion)
VALUES ('daniel.aguilar@gmail.com', 6, TO_DATE('10/04/2024', 'DD/MM/YYYY'), TO_TIMESTAMP('20:15:40', 'HH24:MI:SS'));

-- Datos para compra
INSERT INTO compra (id_compra, email, id_paquete, fecha, hora, metodo_pago)
VALUES (1, 'juan.perez@gmail.com', 1, TO_DATE('22/10/2023', 'DD/MM/YYYY'), TO_TIMESTAMP('15:00:00', 'HH24:MI:SS'), 'tarjeta de credito');
INSERT INTO compra (id_compra, email, id_paquete, fecha, hora, metodo_pago)
VALUES (2, 'maria.garcia@gmail.com', 2, TO_DATE('23/10/2023', 'DD/MM/YYYY'), TO_TIMESTAMP('16:00:00', 'HH24:MI:SS'), 'tarjeta de credito');
INSERT INTO compra (id_compra, email, id_paquete, fecha, hora, metodo_pago)
VALUES (3, 'manuel.gonzalez@gmail.com', 5, TO_DATE('02/12/2023', 'DD/MM/YYYY'), TO_TIMESTAMP('18:10:00', 'HH24:MI:SS'), 'tarjeta de credito');
INSERT INTO compra (id_compra, email, id_paquete, fecha, hora, metodo_pago)
VALUES (4, 'valentina.rodriguez@gmail.com', 3, TO_DATE('16/09/2024', 'DD/MM/YYYY'), TO_TIMESTAMP('19:30:00', 'HH24:MI:SS'), 'tarjeta de credito');
INSERT INTO compra (id_compra, email, id_paquete, fecha, hora, metodo_pago)
VALUES (5, 'josefina.suarez@outlook.com', 4, TO_DATE('27/05/2024', 'DD/MM/YYYY'), TO_TIMESTAMP('14:45:00', 'HH24:MI:SS'), 'tarjeta de credito');
INSERT INTO compra (id_compra, email, id_paquete, fecha, hora, metodo_pago)
VALUES (6, 'daniel.aguilar@gmail.com', 6, TO_DATE('11/10/2024', 'DD/MM/YYYY'), TO_TIMESTAMP('16:15:00', 'HH24:MI:SS'), 'tarjeta de credito');

-- Datos para maneja
INSERT INTO maneja (id_asistente, id_idioma) VALUES (1, 1);
INSERT INTO maneja (id_asistente, id_idioma) VALUES (1, 2);
INSERT INTO maneja (id_asistente, id_idioma) VALUES (4, 3);
INSERT INTO maneja (id_asistente, id_idioma) VALUES (4, 2);
INSERT INTO maneja (id_asistente, id_idioma) VALUES (4, 7);
INSERT INTO maneja (id_asistente, id_idioma) VALUES (6, 5);
INSERT INTO maneja (id_asistente, id_idioma) VALUES (6, 6);
INSERT INTO maneja (id_asistente, id_idioma) VALUES (6, 2);
INSERT INTO maneja (id_asistente, id_idioma) VALUES (6, 4);


-- Datos para aprende
INSERT INTO aprende (email, id_idioma) VALUES ('juan.perez@gmail.com', 1);
INSERT INTO aprende (email, id_idioma) VALUES ('valentina.rodriguez@gmail.com', 2);
INSERT INTO aprende (email, id_idioma) VALUES ('valentina.rodriguez@gmail.com', 3);
INSERT INTO aprende (email, id_idioma) VALUES ('juan.perez@gmail.com', 3);
INSERT INTO aprende (email, id_idioma) VALUES ('josefina.suarez@outlook.com', 2);
INSERT INTO aprende (email, id_idioma) VALUES ('josefina.suarez@outlook.com', 5);
INSERT INTO aprende (email, id_idioma) VALUES ('josefina.suarez@outlook.com', 6);

-- Datos para A_Ropa
INSERT INTO A_Ropa (id_avatar, id_ropa) VALUES (1, 1);
INSERT INTO A_Ropa (id_avatar, id_ropa) VALUES (2, 2);
INSERT INTO A_Ropa (id_avatar, id_ropa) VALUES (3, 5);
INSERT INTO A_Ropa (id_avatar, id_ropa) VALUES (4, 6);
INSERT INTO A_Ropa (id_avatar, id_ropa) VALUES (5, 7);
INSERT INTO A_Ropa (id_avatar, id_ropa) VALUES (6, 3);
INSERT INTO A_Ropa (id_avatar, id_ropa) VALUES (7, 8);
INSERT INTO A_Ropa (id_avatar, id_ropa) VALUES (8, 4);

-- Datos para A_Inte
INSERT INTO A_Inte (id_avatar, id_interes) VALUES (1, 1);
INSERT INTO A_Inte (id_avatar, id_interes) VALUES (2, 2);
INSERT INTO A_Inte (id_avatar, id_interes) VALUES (3, 4);
INSERT INTO A_Inte (id_avatar, id_interes) VALUES (4, 4);
INSERT INTO A_Inte (id_avatar, id_interes) VALUES (5, 5);
INSERT INTO A_Inte (id_avatar, id_interes) VALUES (6, 6);
INSERT INTO A_Inte (id_avatar, id_interes) VALUES (7, 7);
INSERT INTO A_Inte (id_avatar, id_interes) VALUES (8, 8);

-- Datos para A_Rasgo
INSERT INTO A_Rasgo (id_avatar, id_rasgo) VALUES (1, 1);
INSERT INTO A_Rasgo (id_avatar, id_rasgo) VALUES (2, 2);
INSERT INTO A_Rasgo (id_avatar, id_rasgo) VALUES (3, 4);
INSERT INTO A_Rasgo (id_avatar, id_rasgo) VALUES (4, 6);
INSERT INTO A_Rasgo (id_avatar, id_rasgo) VALUES (5, 7);
INSERT INTO A_Rasgo (id_avatar, id_rasgo) VALUES (6, 6);
INSERT INTO A_Rasgo (id_avatar, id_rasgo) VALUES (7, 5);
INSERT INTO A_Rasgo (id_avatar, id_rasgo) VALUES (8, 3);

-- Datos para A_Apa
INSERT INTO A_Apa (id_avatar, id_apariencia) VALUES (1, 1);
INSERT INTO A_Apa (id_avatar, id_apariencia) VALUES (2, 2);
INSERT INTO A_Apa (id_avatar, id_apariencia) VALUES (3, 2);
INSERT INTO A_Apa (id_avatar, id_apariencia) VALUES (4, 4);
INSERT INTO A_Apa (id_avatar, id_apariencia) VALUES (5, 5);
INSERT INTO A_Apa (id_avatar, id_apariencia) VALUES (6, 6);
INSERT INTO A_Apa (id_avatar, id_apariencia) VALUES (7, 7);
INSERT INTO A_Apa (id_avatar, id_apariencia) VALUES (8, 7);
