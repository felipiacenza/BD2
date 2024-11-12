Para identificar los índices que genera automáticamente el DBMS al crear nuevas tablas en la base de datos, normalmente se crean índices sobre:

Claves Primarias: Al definir una clave primaria (PRIMARY KEY), el DBMS generalmente crea un índice único sobre dicha columna o conjunto de columnas para asegurar su unicidad y optimizar su acceso.

Claves Únicas: Las restricciones de clave única (UNIQUE) también generan automáticamente índices para mantener la unicidad en esas columnas y optimizar las búsquedas.

Para visualizar los índices que el DBMS (en este caso, Oracle) genera automáticamente al crear nuevas tablas con restricciones de claves, puedes ejecutar la siguiente consulta SQL, que proporciona información sobre todos los índices generados en las tablas de la base de datos:

SELECT ai.index_name, ai.table_name, ai.uniqueness, aic.column_name
FROM all_indexes ai
JOIN all_ind_columns aic ON ai.index_name = aic.index_name
WHERE ai.table_owner = 'BD_1'
AND ai.generated = 'Y';