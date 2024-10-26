Índices generados por el DBMS

Al momento de crear las tablas, el DBMS genera automáticamente algunos índices, especialmente sobre las claves primarias y, en algunos casos, claves únicas. Estos índices suelen optimizar búsquedas y combinaciones que implican columnas clave.

Para visualizar los índices generados por el DBMS en Oracle, puedes utilizar esta consulta en el esquema donde creaste las tablas:

SELECT index_name, table_name, column_name
FROM all_ind_columns
WHERE table_name IN ('USUARIO', 'BILLETERA', 'PAIS', 'TIENE', 'ASISTENTEVIRTUAL', 'MANEJA', 'IDIOMA');

Esto te permitirá ver qué índices están asociados a tus tablas principales. Generalmente, Oracle generará índices para las claves primarias de las tablas (email en Usuario, id_pais en Pais, etc.).