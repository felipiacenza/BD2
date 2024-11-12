ALTER SESSION SET nls_date_format = 'DD/MM/YYYY';
ALTER SESSION SET nls_timestamp_format = 'HH24:MI:SS';

DROP TABLE Tiene;
DROP TABLE A_Apa;
DROP TABLE A_Rasgo;
DROP TABLE A_Inte;
DROP TABLE A_Ropa;
DROP TABLE aprende;
DROP TABLE maneja;
DROP TABLE compra;
DROP TABLE integracion;
DROP TABLE personifica;
DROP TABLE Aplicacion;
DROP TABLE Paquete;
DROP TABLE Ropa;
DROP TABLE Apariencia;
DROP TABLE Interes;
DROP TABLE RasgoPersonalidad;
DROP TABLE Avatar;
DROP TABLE Voz;
DROP TABLE Idioma;
DROP TABLE AsistenteVirtual;
DROP TABLE Billetera;
DROP TABLE Usuario;
DROP TABLE Pais;
DROP TABLE Suscripcion;
DROP TABLE RangoEdad;

CREATE TABLE RangoEdad (
    rango_edad_id INT PRIMARY KEY,
    rango VARCHAR(20) NOT NULL CHECK (rango IN ('18-24', '25-34', '35-44', '45-54', '55-64', '65 o más'))
);

CREATE TABLE Suscripcion (
    id_suscripcion INT PRIMARY KEY,
    precio DECIMAL(10, 2) NOT NULL CHECK (precio >= 0),
    tipo VARCHAR(20) NOT NULL CHECK (tipo IN ('gratis', 'mensual', 'anual', 'de por vida'))
);

CREATE TABLE Pais (
    id_pais INT PRIMARY KEY,
    nombre_pais VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE Usuario (
    email VARCHAR(100) PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    pass VARCHAR(100) NOT NULL,
    fecha_nac DATE NOT NULL,
    fecha_reg DATE DEFAULT SYSDATE,
    rango_edad_id INT,
    genero VARCHAR(20) CHECK (genero IN ('femenino', 'masculino', 'no binario')),
    telefono VARCHAR(20) UNIQUE,
    id_suscripcion INT,
    id_pais INT NOT NULL,
    FOREIGN KEY (rango_edad_id) REFERENCES RangoEdad(rango_edad_id),
    FOREIGN KEY (id_suscripcion) REFERENCES Suscripcion(id_suscripcion),
    FOREIGN KEY (id_pais) REFERENCES Pais(id_pais)
);


CREATE TABLE Billetera (
    id_billetera INT,
    email VARCHAR(100),
    cant_gemas INT CHECK (cant_gemas >= 0),
    cant_monedas INT CHECK (cant_monedas >= 0),
    PRIMARY KEY (id_billetera, email),
    FOREIGN KEY (email) REFERENCES Usuario(email)
);

CREATE TABLE AsistenteVirtual (
    id_asistente INT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    genero VARCHAR(20),
    historia VARCHAR(255),
    rol VARCHAR(50),
    subrol VARCHAR(50)
);


CREATE TABLE Idioma (
    id_idioma INT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL
);

CREATE TABLE Voz (
    id_voz INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    tipo VARCHAR(20) CHECK (tipo IN ('femenina', 'masculina')),
    tono VARCHAR(20) CHECK (tono IN ('alegre', 'calmo', 'seguro', 'enérgico', 'optimista'))
);

CREATE TABLE Avatar (
    id_avatar INT PRIMARY KEY,
    id_voz INT,
    FOREIGN KEY (id_voz) REFERENCES Voz(id_voz)
);

CREATE TABLE RasgoPersonalidad (
    id_rasgo INT PRIMARY KEY,
    imagen VARCHAR(255),
    nombre VARCHAR(50) CHECK (nombre IN ('seguro', 'tímido', 'energético', 'práctico', 'soñador', 'artístico', 'lógico'))
);

CREATE TABLE Interes (
    id_interes INT PRIMARY KEY,
    nombre VARCHAR(100) UNIQUE,
    imagen VARCHAR(255)
);

CREATE TABLE Apariencia (
    id_apariencia INT PRIMARY KEY,
    descripcion VARCHAR(255),
    tipo VARCHAR(50) CHECK (tipo IN ('cabello', 'piel', 'cuerpo', 'ojos', 'maquillaje', 'accesorios')),
    imagen VARCHAR(255),
    precio_gemas INT CHECK (precio_gemas >= 0),
    precio_monedas INT CHECK (precio_monedas >= 0)
);

CREATE TABLE Ropa (
    id_ropa INT PRIMARY KEY,
    descripcion VARCHAR(255),
    tipo VARCHAR(50) CHECK (tipo IN ('verano', 'primavera', 'anime', 'oficina', 'fiesta', 'deporte', 'camisetas', 'otros')),
    precio_gemas INT CHECK (precio_gemas >= 0),
    precio_monedas INT CHECK (precio_monedas >= 0)
);

CREATE TABLE Paquete (
    id_paquete INT PRIMARY KEY,
    tipo VARCHAR(50) NOT NULL CHECK (tipo IN ('gemas','monedas')),
    cantidad INT CHECK (cantidad > 0),
    importe DECIMAL(10, 2) CHECK (importe >= 0),
    descuento DECIMAL(5, 2)
);

CREATE TABLE Aplicacion (
    id_app INT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    tipo VARCHAR(50) NOT NULL
);

-- Relaciones

CREATE TABLE personifica (
    id_asistente INT,
    id_avatar INT,
    PRIMARY KEY (id_asistente),
    FOREIGN KEY (id_asistente) REFERENCES AsistenteVirtual(id_asistente),
    FOREIGN KEY (id_avatar) REFERENCES Avatar(id_avatar)
);

CREATE TABLE integracion (
    email VARCHAR(100),
    id_app INT,
    fecha_confirmacion DATE,
    hora_confirmacion TIMESTAMP,
    PRIMARY KEY (email, id_app),
    FOREIGN KEY (email) REFERENCES Usuario(email),
    FOREIGN KEY (id_app) REFERENCES Aplicacion(id_app)
);


CREATE TABLE compra (
    id_compra INT PRIMARY KEY,
    email VARCHAR(100),
    id_paquete INT,
    fecha DATE,
    hora TIMESTAMP,
    metodo_pago VARCHAR(50) CHECK (metodo_pago = 'tarjeta de credito'),
    FOREIGN KEY (email) REFERENCES Usuario(email),
    FOREIGN KEY (id_paquete) REFERENCES Paquete(id_paquete)
);


CREATE TABLE maneja (
    id_asistente INT,
    id_idioma INT,
    PRIMARY KEY (id_asistente, id_idioma),
    FOREIGN KEY (id_asistente) REFERENCES AsistenteVirtual(id_asistente),
    FOREIGN KEY (id_idioma) REFERENCES Idioma(id_idioma)
);

CREATE TABLE aprende (
    email VARCHAR(100),
    id_idioma INT,
    PRIMARY KEY (email, id_idioma),
    FOREIGN KEY (email) REFERENCES Usuario(email),
    FOREIGN KEY (id_idioma) REFERENCES Idioma(id_idioma)
);

CREATE TABLE A_Ropa (
    id_avatar INT,
    id_ropa INT,
    PRIMARY KEY (id_avatar, id_ropa),
    FOREIGN KEY (id_avatar) REFERENCES Avatar(id_avatar),
    FOREIGN KEY (id_ropa) REFERENCES Ropa(id_ropa)
);

CREATE TABLE A_Inte (
    id_avatar INT,
    id_interes INT,
    PRIMARY KEY (id_avatar, id_interes),
    FOREIGN KEY (id_avatar) REFERENCES Avatar(id_avatar),
    FOREIGN KEY (id_interes) REFERENCES Interes(id_interes)
);

CREATE TABLE A_Rasgo (
    id_avatar INT,
    id_rasgo INT,
    PRIMARY KEY (id_avatar, id_rasgo),
    FOREIGN KEY (id_avatar) REFERENCES Avatar(id_avatar),
    FOREIGN KEY (id_rasgo) REFERENCES RasgoPersonalidad(id_rasgo)
);

CREATE TABLE A_Apa (
    id_avatar INT,
    id_apariencia INT,
    PRIMARY KEY (id_avatar, id_apariencia),
    FOREIGN KEY (id_avatar) REFERENCES Avatar(id_avatar),
    FOREIGN KEY (id_apariencia) REFERENCES Apariencia(id_apariencia)
);

CREATE TABLE Tiene (
    email VARCHAR2(100),
    id_asistente INT,
    PRIMARY KEY (email),
    FOREIGN KEY (email) REFERENCES Usuario(email),
    FOREIGN KEY (id_asistente) REFERENCES AsistenteVirtual(id_asistente)
);

-- Triggers

CREATE OR REPLACE TRIGGER trg_check_fecha_nac
BEFORE INSERT OR UPDATE ON Usuario
FOR EACH ROW
DECLARE
    edad INT;
    rango VARCHAR2(20);
BEGIN
    SELECT EXTRACT(YEAR FROM SYSDATE) - EXTRACT(YEAR FROM :NEW.fecha_nac) INTO edad FROM DUAL;
    
    SELECT rango INTO rango FROM RangoEdad WHERE rango_edad_id = :NEW.rango_edad_id;

    IF rango = '18-24' AND (edad < 18 OR edad > 24) THEN
        RAISE_APPLICATION_ERROR(-20001, 'La edad no corresponde al rango de 18-24');
    ELSIF rango = '25-34' AND (edad < 25 OR edad > 34) THEN
        RAISE_APPLICATION_ERROR(-20001, 'La edad no corresponde al rango de 25-34');
    ELSIF rango = '35-44' AND (edad < 35 OR edad > 44) THEN
        RAISE_APPLICATION_ERROR(-20001, 'La edad no corresponde al rango de 35-44');
    ELSIF rango = '45-54' AND (edad < 45 OR edad > 54) THEN
        RAISE_APPLICATION_ERROR(-20001, 'La edad no corresponde al rango de 45-54');
    ELSIF rango = '55-64' AND (edad < 55 OR edad > 64) THEN
        RAISE_APPLICATION_ERROR(-20001, 'La edad no corresponde al rango de 55-64');
    ELSIF rango = '65 o más' AND edad < 65 THEN
        RAISE_APPLICATION_ERROR(-20001, 'La edad no corresponde al rango de 65 o más');
    END IF;
END;
/

CREATE OR REPLACE TRIGGER trg_check_rol_subrol
BEFORE INSERT OR UPDATE ON AsistenteVirtual
FOR EACH ROW
BEGIN
    IF :NEW.genero NOT IN ('femenino', 'masculino', 'no binario') THEN
        RAISE_APPLICATION_ERROR(-20010, 'El género debe ser "femenino", "masculino" o "no binario".');
    END IF;

    IF :NEW.rol NOT IN ('Amigo', 'Tutor', 'Coach') THEN
        RAISE_APPLICATION_ERROR(-20011, 'El rol debe ser "Amigo", "Tutor" o "Coach".');
    END IF;

    IF :NEW.rol = 'Tutor' AND :NEW.subrol NOT IN ('Apoyo educativo', 'Enseñanza de Idiomas', 'Preparación de exámenes') THEN
        RAISE_APPLICATION_ERROR(-20012, 'El subrol para "Tutor" debe ser "Apoyo educativo", "Enseñanza de Idiomas" o "Preparación de exámenes".');
    ELSIF :NEW.rol = 'Coach' AND :NEW.subrol NOT IN ('Planificación', 'Organización del tiempo') THEN
        RAISE_APPLICATION_ERROR(-20013, 'El subrol para "Coach" debe ser "Planificación" o "Organización del tiempo".');
    ELSIF :NEW.rol = 'Amigo' AND :NEW.subrol != 'Amigo' THEN
        RAISE_APPLICATION_ERROR(-20014, 'El subrol para "Amigo" debe ser "Amigo".');
    END IF;
END;
/


CREATE OR REPLACE TRIGGER trg_check_rol_suscripcion
BEFORE INSERT OR UPDATE ON AsistenteVirtual
FOR EACH ROW
DECLARE
    suscripcion_tipo VARCHAR2(20);
    cuenta_relaciones INT;
BEGIN
    SELECT COUNT(*) INTO cuenta_relaciones
    FROM Tiene t
    WHERE t.id_asistente = :NEW.id_asistente;

    IF cuenta_relaciones > 0 THEN
        BEGIN
            SELECT s.tipo INTO suscripcion_tipo 
            FROM Suscripcion s
            JOIN Usuario u ON u.id_suscripcion = s.id_suscripcion
            JOIN Tiene t ON t.email = u.email
            WHERE t.id_asistente = :NEW.id_asistente;

        EXCEPTION
            WHEN NO_DATA_FOUND THEN
                RAISE_APPLICATION_ERROR(-20015, 'No se encontró la suscripción del usuario asociado al asistente virtual.');
        END;

        IF suscripcion_tipo = 'gratis' AND :NEW.rol != 'Amigo' THEN
            RAISE_APPLICATION_ERROR(-20003, 'Con la suscripción "Gratis" solo se permite el rol "Amigo".');
        END IF;
    END IF;
END;
/



CREATE OR REPLACE TRIGGER trg_check_idioma_subrol
BEFORE INSERT OR UPDATE ON AsistenteVirtual
FOR EACH ROW
DECLARE
    idioma_count INT;
    usuario_email VARCHAR2(100);
    cuenta_relaciones INT;
BEGIN
    IF :NEW.rol = 'Tutor' AND :NEW.subrol = 'Enseñanza de Idiomas' THEN
        SELECT COUNT(*) INTO cuenta_relaciones
        FROM Tiene t
        WHERE t.id_asistente = :NEW.id_asistente;

        IF cuenta_relaciones > 0 THEN
            SELECT u.email INTO usuario_email
            FROM Usuario u
            JOIN Tiene t ON t.email = u.email
            WHERE t.id_asistente = :NEW.id_asistente;

            SELECT COUNT(*) INTO idioma_count 
            FROM aprende 
            WHERE email = usuario_email;

            IF idioma_count = 0 THEN
                RAISE_APPLICATION_ERROR(-20004, 'Debe seleccionar al menos un idioma para el sub-rol "Enseñanza de Idiomas".');
            END IF;
        END IF;
    END IF;
END;
/


CREATE OR REPLACE TRIGGER trg_check_fecha_nac_valid
BEFORE INSERT OR UPDATE ON Usuario
FOR EACH ROW
BEGIN
    IF :NEW.fecha_nac > SYSDATE THEN
        RAISE_APPLICATION_ERROR(-20006, 'La fecha de nacimiento no puede ser futura.');
    END IF;
END;
/

CREATE OR REPLACE TRIGGER trg_check_fecha_confirmacion
BEFORE INSERT OR UPDATE ON integracion
FOR EACH ROW
BEGIN
    IF :NEW.fecha_confirmacion > SYSDATE THEN
        RAISE_APPLICATION_ERROR(-20008, 'La fecha de confirmación no puede ser posterior a la fecha actual.');
    END IF;
END;
/

CREATE OR REPLACE TRIGGER trg_check_hora_confirmacion
BEFORE INSERT OR UPDATE ON integracion
FOR EACH ROW
BEGIN
    IF :NEW.hora_confirmacion > SYSTIMESTAMP THEN
        RAISE_APPLICATION_ERROR(-20009, 'La hora de confirmación no puede ser posterior a la hora actual.');
    END IF;
END;
/