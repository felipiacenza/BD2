Obtener el plan de ejecución
Para obtener el plan de ejecución de la consulta SQL y analizar cómo el DBMS procesa cada parte, sigue estos pasos:

Comando para generar el plan de ejecución:

En Oracle, puedes utilizar EXPLAIN PLAN FOR seguido de la consulta para obtener el plan de ejecución. El resultado se guarda en la tabla PLAN_TABLE:

EXPLAIN PLAN FOR
SELECT u.nombre
FROM Usuario u
JOIN Billetera b ON u.email = b.email
JOIN Pais p ON u.id_pais = p.id_pais
JOIN Tiene t ON u.email = t.email
JOIN AsistenteVirtual av ON t.id_asistente = av.id_asistente
JOIN Maneja m ON av.id_asistente = m.id_asistente
JOIN Idioma i ON m.id_idioma = i.id_idioma
WHERE p.nombre_pais = 'Uruguay' 
    AND u.fecha_reg BETWEEN TO_DATE('01/01/2023', 'DD/MM/YYYY') AND TO_DATE('31/12/2023', 'DD/MM/YYYY')
    AND b.cant_gemas < 400
    AND av.rol = 'Tutor'
    AND av.subrol = 'Enseñanza de Idiomas'
    AND i.id_idioma = 'Inglés';

Visualización del plan:

Luego, ejecuta el siguiente comando para ver el plan de ejecución detallado:

SELECT * FROM TABLE(DBMS_XPLAN.DISPLAY());

Análisis del plan de ejecución:

El plan de ejecución muestra los pasos en los que el DBMS recupera los datos, como:

Índices utilizados: si usa un índice ya existente o recorre la tabla completamente.

Operaciones JOIN: indica cómo se están procesando las combinaciones entre tablas (por ejemplo, HASH JOIN, NESTED LOOPS, etc.), lo cual es clave para determinar la eficiencia del procesamiento de la consulta.

La consulta está diseñada con múltiples combinaciones JOIN, que pueden beneficiarse de índices en columnas de combinación (como email y id_asistente en Usuario, AsistenteVirtual, y Tiene) y en columnas filtradas (como fecha_reg, cant_gemas, nombre_pais, rol, subrol, id_idioma). Si el plan de ejecución muestra escaneos completos (FULL TABLE SCAN) en varias tablas, entonces agregar índices en estas columnas clave puede optimizar el rendimiento.

