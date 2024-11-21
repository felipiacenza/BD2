CREATE OR REPLACE PROCEDURE crear_usuario (
    p_email IN VARCHAR2,
    p_nombre IN VARCHAR2,
    p_pass IN VARCHAR2,
    p_fecha_nac IN DATE,
    p_id_pais IN INT,
    p_telefono IN VARCHAR2 DEFAULT NULL,
    p_id_suscripcion IN INT DEFAULT NULL
) AS
    v_id_asistente INT;
    v_id_avatar INT;
    v_id_billetera INT;
BEGIN
    INSERT INTO Usuario (email, nombre, pass, fecha_nac, id_pais, telefono, id_suscripcion)
    VALUES (p_email, p_nombre, p_pass, p_fecha_nac, p_id_pais, p_telefono, p_id_suscripcion);

    SELECT NVL(MAX(id_billetera), 0) + 1 INTO v_id_billetera FROM Billetera;
    INSERT INTO Billetera (id_billetera, email, cant_gemas, cant_monedas)
    VALUES (v_id_billetera, p_email, 0, 0);

    SELECT NVL(MAX(id_asistente), 0) + 1 INTO v_id_asistente FROM AsistenteVirtual;
    INSERT INTO AsistenteVirtual (id_asistente, nombre, genero, historia, rol, subrol)
    VALUES (v_id_asistente, 'Asistente Predeterminado', 'no binario', 'Bienvenido a tu experiencia virtual', 'Amigo', 'Amigo');

    SELECT NVL(MAX(id_avatar), 0) + 1 INTO v_id_avatar FROM Avatar;
    INSERT INTO Avatar (id_avatar, id_voz)
    VALUES (v_id_avatar, NULL);

    INSERT INTO personifica (id_asistente, id_avatar)
    VALUES (v_id_asistente, v_id_avatar);

    INSERT INTO Tiene (email, id_asistente)
    VALUES (p_email, v_id_asistente);

    COMMIT;
EXCEPTION
    WHEN OTHERS THEN
        ROLLBACK;
        RAISE_APPLICATION_ERROR(-20000, 'Ocurrió un error al crear el usuario: ' || SQLERRM);
END;
/
