Para obtener el plan lógico a partir del arbol inicial o canónico primero es necesario crear el árbol inicial. Para ello, construimos el árbol inicial basado en la consulta SQL.

Árbol inicial o canónico:
Operación de selección (WHERE):

p.nombre_pais = 'Uruguay'
u.fecha_reg BETWEEN TO_DATE('01/01/2023', 'DD/MM/YYYY') AND TO_DATE('31/12/2023', 'DD/MM/YYYY')
b.cant_gemas < 400
av.rol = 'Tutor'
av.subrol = 'Enseñanza de Idiomas'
i.id_idioma = 'Inglés'

Operaciones de combinación (joins):

Usuario u JOIN Billetera b ON u.email = b.email
Usuario u JOIN Pais p ON u.id_pais = p.id_pais
Usuario u JOIN Tiene t ON u.email = t.email
AsistenteVirtual av JOIN Tiene t ON t.id_asistente = av.id_asistente
AsistenteVirtual av JOIN Maneja m ON av.id_asistente = m.id_asistente
Idioma i JOIN Maneja m ON m.id_idioma = i.id_idioma

Proyección:

SELECT u.nombre

(inserar arbol)