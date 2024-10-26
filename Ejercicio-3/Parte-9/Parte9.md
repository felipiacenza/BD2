Paso 1: Obtener el Plan de Ejecución

Ejecutar el comando EXPLAIN PLAN:

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


Visualizar el Plan de Ejecución:

SELECT * FROM TABLE(DBMS_XPLAN.DISPLAY());


Paso 3: Análisis del Plan de Ejecución

El plan de ejecución detallado contiene información importante, como:

Operaciones de Acceso a Tablas e Índices: Como FULL TABLE SCAN, INDEX SCAN (donde se usa algún índice), etc. Esto indica si el DBMS accede a una tabla entera o utiliza un índice para obtener los datos más rápido.

Operaciones JOIN: Indica el tipo de combinación que utiliza el DBMS (como HASH JOIN, NESTED LOOPS, etc.), y el orden en que se ejecutan.

Filtro y Selección: Muestra si se aplican filtros sobre las columnas (como cant_gemas < 400, nombre_pais = 'Uruguay', etc.).


Paso 4: Comparación del Plan de Ejecución con la Propuesta del Punto 5

Ahora, compara este plan con la propuesta de optimización del punto 5. En la propuesta, mencionamos la creación de índices en columnas clave (email, id_pais, id_asistente, etc.) y en columnas utilizadas en filtros (fecha_reg, cant_gemas, rol, subrol, id_idioma), lo cual debería minimizar el uso de FULL TABLE SCAN y maximizar el uso de INDEX SCAN.

Aspectos a evaluar en la comparación:

Si los índices sugeridos en el punto 5 están bien implementados, el plan de ejecución debería reflejar más operaciones de INDEX SCAN en lugar de FULL TABLE SCAN.

Observa si los JOIN se optimizan con los índices, lo que reduciría el tiempo de ejecución. Idealmente, NESTED LOOPS o HASH JOIN deberían ejecutarse rápidamente con índices adecuados.

Breve Análisis

Si el plan muestra mejoras en el uso de índices después de implementarlos (menos FULL TABLE SCAN y más INDEX SCAN), se confirma que los índices ayudan a reducir el tiempo de ejecución.

La presencia de NESTED LOOPS o HASH JOIN indica cómo el DBMS maneja la combinación de tablas. Estas operaciones suelen ser más eficientes cuando las columnas de combinación están indexadas, especialmente en consultas con varios JOIN.