CREATE OR REPLACE PROCEDURE comprar_prenda (
    p_email IN VARCHAR2,
    p_id_ropa IN INT
) AS
    v_precio_gemas INT;
    v_precio_monedas INT;
    v_descuento_gemas INT;
    v_descuento_monedas INT;
    v_suscripcion_tipo VARCHAR2(20);
    v_cant_gemas INT;
    v_cant_monedas INT;
BEGIN
    SELECT precio_gemas, precio_monedas
    INTO v_precio_gemas, v_precio_monedas
    FROM Ropa
    WHERE id_ropa = p_id_ropa;

    SELECT s.tipo, b.cant_gemas, b.cant_monedas
    INTO v_suscripcion_tipo, v_cant_gemas, v_cant_monedas
    FROM Usuario u
    JOIN Suscripcion s ON u.id_suscripcion = s.id_suscripcion
    JOIN Billetera b ON u.email = b.email
    WHERE u.email = p_email;

    IF v_suscripcion_tipo = 'mensual' OR v_suscripcion_tipo = 'anual' THEN
        v_descuento_gemas := CEIL(v_precio_gemas * 0.15);
        v_descuento_monedas := CEIL(v_precio_monedas * 0.15);
        v_precio_gemas := v_precio_gemas - v_descuento_gemas;
        v_precio_monedas := v_precio_monedas - v_descuento_monedas;
    END IF;

    IF v_cant_gemas < v_precio_gemas THEN
        RAISE_APPLICATION_ERROR(-20010, 'Saldo insuficiente en gemas.');
    END IF;

    UPDATE Billetera
    SET cant_gemas = cant_gemas - v_precio_gemas
    WHERE email = p_email;

    INSERT INTO A_Ropa (id_avatar, id_ropa)
    SELECT a.id_avatar, p_id_ropa
    FROM Avatar a
    JOIN personifica p ON a.id_avatar = p.id_avatar
    JOIN Tiene t ON t.id_asistente = p.id_asistente
    WHERE t.email = p_email;

    COMMIT;
EXCEPTION
    WHEN NO_DATA_FOUND THEN
        RAISE_APPLICATION_ERROR(-20020, 'Usuario, prenda o relación no encontrada.');
    WHEN OTHERS THEN
        ROLLBACK;
        RAISE_APPLICATION_ERROR(-20000, 'Error al procesar la compra: ' || SQLERRM);
END;
/

-- Llamada al Procedimiento
BEGIN
    comprar_prenda(
        p_email => 'usuario@gmail.com', 
        p_id_ropa => 999
    );
END;
/