SELECT u.nombre
FROM Usuario u
JOIN Billetera b ON u.email = b.email
JOIN Tiene t ON u.email = t.email
JOIN AsistenteRol ar ON t.id_asistente = ar.id_asistente
JOIN Rol r ON ar.id_rol = r.id_rol
JOIN SubRol sr ON r.id_rol = sr.id_rol
JOIN AsistenteSubRol asr ON t.id_asistente = asr.id_asistente AND sr.id_subrol = asr.id_subrol
JOIN maneja m ON t.id_asistente = m.id_asistente
JOIN Idioma i ON m.id_idioma = i.id_idioma
JOIN aprende ap ON u.email = ap.email AND i.id_idioma = ap.id_idioma
WHERE u.pais = 'Uruguay'
    AND EXTRACT(YEAR FROM u.fecha_reg) = 2023
    AND b.cant_gemas < 400
    AND r.nombre = 'Tutor'
    AND sr.nombre = 'Enseñanza de Idiomas'
    AND i.nombre = 'Inglés';
