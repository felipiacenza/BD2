CREATE OR REPLACE PROCEDURE seleccionar_idioma (
    p_email IN VARCHAR2,
    p_id_idioma IN INT
) AS
    v_rol VARCHAR2(50);
    v_subrol VARCHAR2(50);
    v_id_asistente INT;
BEGIN
    SELECT av.rol, av.subrol, t.id_asistente
    INTO v_rol, v_subrol, v_id_asistente
    FROM Usuario u
    JOIN Tiene t ON u.email = t.email
    JOIN AsistenteVirtual av ON t.id_asistente = av.id_asistente
    WHERE u.email = p_email;

    IF v_rol != 'Tutor' OR v_subrol != 'Enseñanza de Idiomas' THEN
        RAISE_APPLICATION_ERROR(-20001, 'El usuario no tiene un asistente virtual con rol "Tutor" y subrol "Enseñanza de Idiomas".');
    END IF;

    IF EXISTS (
        SELECT 1
        FROM Aprende
        WHERE email = p_email
          AND id_idioma = p_id_idioma
    ) THEN
        RAISE_APPLICATION_ERROR(-20002, 'El usuario ya está aprendiendo este idioma.');
    END IF;

    INSERT INTO Aprende (email, id_idioma)
    VALUES (p_email, p_id_idioma);

    COMMIT;

EXCEPTION
    WHEN NO_DATA_FOUND THEN
        RAISE_APPLICATION_ERROR(-20003, 'No se encontró el usuario o el idioma especificado.');
    WHEN OTHERS THEN
        ROLLBACK;
        RAISE_APPLICATION_ERROR(-20000, 'Error al seleccionar el idioma: ' || SQLERRM);
END;
/

-- Llamada al Procedimiento
sql
Copiar código
BEGIN
    seleccionar_idioma(
        p_email => 'usuario1@ejemplo.com',
        p_id_idioma => 101
    );
END;