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