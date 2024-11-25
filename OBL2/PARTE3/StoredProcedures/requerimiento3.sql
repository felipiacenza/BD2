CREATE OR REPLACE PROCEDURE acreditar_gemas_cumpleanos AS
    CURSOR usuarios_cumpleanos IS
        SELECT u.email, b.id_billetera
        FROM Usuario u
        JOIN Billetera b ON u.email = b.email
        JOIN Suscripcion s ON u.id_suscripcion = s.id_suscripcion
        WHERE TO_CHAR(u.fecha_nac, 'MMDD') = TO_CHAR(SYSDATE, 'MMDD')
        AND u.fecha_reg <= ADD_MONTHS(SYSDATE, -6)
        AND s.tipo = 'mensual' OR s.tipo = 'anual';

BEGIN
    FOR usuario IN usuarios_cumpleanos LOOP
        UPDATE Billetera
        SET cant_gemas = cant_gemas + 50
        WHERE id_billetera = usuario.id_billetera;
    END LOOP;

    COMMIT;
EXCEPTION
    WHEN OTHERS THEN
        ROLLBACK;
        RAISE_APPLICATION_ERROR(-20000, 'Error al acreditar gemas: ' || SQLERRM);
END;
/

-- Llamada al Procedimiento
BEGIN
    acreditar_gemas_cumpleanos;
END;