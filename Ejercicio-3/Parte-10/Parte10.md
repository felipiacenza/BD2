Crear índices para optimizar la consulta y comparar el plan de ejecución

Para optimizar la consulta, crearemos índices sobre las columnas utilizadas en las combinaciones y en los filtros. Los índices sugeridos serían:

CREATE INDEX idx_usuario_email ON Usuario(email);
CREATE INDEX idx_billetera_email ON Billetera(email);
CREATE INDEX idx_pais_nombre ON Pais(nombre_pais);
CREATE INDEX idx_usuario_fecha_reg ON Usuario(fecha_reg);
CREATE INDEX idx_billetera_gemas ON Billetera(cant_gemas);
CREATE INDEX idx_asistente_rol_subrol ON AsistenteVirtual(rol, subrol);
CREATE INDEX idx_idioma_id ON Idioma(id_idioma);
CREATE INDEX idx_tiene_email_asistente ON Tiene(email, id_asistente);

Nota: Estos índices son sugeridos, pero podrías ajustar las columnas combinadas según los resultados del plan de ejecución.

Comparar el plan de ejecución antes y después de los índices:

Después de crear estos índices, vuelve a ejecutar los pasos en el punto 9 para observar el nuevo plan de ejecución. Idealmente, deberías ver menos FULL TABLE SCAN y más operaciones de tipo INDEX SCAN, especialmente en las combinaciones y filtros de las columnas indexadas. Esto indicaría una mejor utilización de los índices y un procesamiento más rápido.