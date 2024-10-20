ALTER SESSION SET NLS_DATE_FORMAT='DD/MM/YYYY';
ALTER SESSION SET NLS_TIMESTAMP_FORMAT='HH24:MI:SS';

DROP TABLE Sub_Rol_Asistente;
DROP TABLE Asistente_Virtual;
DROP TABLE Billetera;
DROP TABLE Usuario;
DROP TABLE Idioma;
DROP TABLE Suscripcion_Pro;
DROP TABLE Suscripcion;
DROP TABLE Aplicacion;
DROP TABLE Paquete;
DROP TABLE Ropa;
DROP TABLE Interes;
DROP TABLE Apariencia;
DROP TABLE Avatar;
DROP TABLE Voz;
DROP TABLE Rasgo;

DROP TABLE interactua;
DROP TABLE genera_progreso;
DROP TABLE genera_certificado;
DROP TABLE realiza_integracion;
DROP TABLE compra;
DROP TABLE maneja;
DROP TABLE aprende;
DROP TABLE personifica;
DROP TABLE tiene_ropa;
DROP TABLE tiene_interes;
DROP TABLE tiene_rasgo;
DROP TABLE tiene_apariencia;

-- ENTIDADES
CREATE TABLE Usuario(
    id_usuario NUMBER PRIMARY KEY,
    email VARCHAR(20) NOT NULL UNIQUE,
    nombre VARCHAR(20) NOT NULL,
    contraseña VARCHAR(20) NOT NULL,
    fecha_nac DATE NOT NULL,
    fecha_reg DATE NOT NULL,
        CHECK (fecha_nac < fecha_reg),
    rangoEdad VARCHAR(10) NOT NULL,
        CHECK (rangoEdad IN ('18-24', '25-34', '35-44', '45-54', '55-64', '65 o más')),
    generoUsuario VARCHAR(20) NOT NULL,
        CHECK (generoUsuario IN ('Femenino', 'Masculino', 'No binario')),
    telefono VARCHAR(20) NOT NULL UNIQUE
);

CREATE TABLE Billetera (
    id_billetera NUMBER NOT NULL UNIQUE,
    id_usuario NUMBER REFERENCES Usuario(id_Usuario),
    cant_gemas NUMBER NOT NULL,
        CHECK (cant_gemas >= 0),
    cant_monedas NUMBER NOT NULL
        CHECK (cant_monedas >= 0),
    PRIMARY KEY (id_billetera, id_usuario)
);

CREATE TABLE Asistente_Virtual (
    id_asistente NUMBER PRIMARY KEY,
    nombreAsistente VARCHAR(20) NOT NULL,
    idiomas VARCHAR(300), -- ¿Como funcionaría para poder poner varios idiomas?
    generoAsistente VARCHAR(20) NOT NULL,
        CHECK (generoAsistente IN ('Femenino', 'Masculino', 'No binario')),
    historia VARCHAR(300),
    rol VARCHAR(5) NOT NULL,
        CHECK (rol IN ('Amigo', 'Tutor', 'Coach'))
);

CREATE TABLE Sub_Rol_Asistente (
    id_asistente NUMBER REFERENCES Asistente_Virtual(id_asistente) PRIMARY KEY,
    subRol_Tutor VARCHAR(30),
        CHECK (subRol_Tutor IN ('Apoyo educativo', 'Enseñanza de idiomas', 'Preparación de exámenes')),
    subRol_Coach VARCHAR(30),
        CHECK (subRol_Coach IN ('Planificación', 'Organización del tiempo'))
);

CREATE TABLE Idioma (
    id_idioma NUMBER PRIMARY KEY,
    nombre_idioma VARCHAR(20) NOT NULL UNIQUE
);

CREATE TABLE Suscripcion (
    id_Suscripcion NUMBER PRIMARY KEY,
    precio NUMBER NOT NULL,
        CHECK (precio >= 0),
    tipo_Sus VARCHAR(10) NOT NULL,
        CHECK (tipo_Sus IN ('Gratuito', 'Pro'))
);

CREATE TABLE Suscripcion_pro (
    id_Suscripcion NUMBER REFERENCES Suscripcion(id_Suscripcion) PRIMARY KEY,
    tipo_Pro VARCHAR(20) NOT NULL,
        CHECK (tipo_Pro IN ('1 Mes', '12 Meses', 'De por vida'))
);

CREATE TABLE Aplicacion (
    id_app NUMBER PRIMARY KEY,
    nombre_app VARCHAR(50) NOT NULL,
    tipo_app VARCHAR(30) NOT NULL, -- Ya conocemos los tipos de aplicaciones?
        CHECK (tipo_app IN ('Red social', 'Calendario', 'Galería de fotos'))
);

CREATE TABLE Paquete (
    id_paquete NUMBER PRIMARY KEY,
    tipo_paq VARCHAR(20) NOT NULL,
        CHECK (tipo_paq IN ('Gemas', 'Monedas')),
    cantidad NUMBER NOT NULL,
        CHECK (cantidad > 0),
    importe NUMBER NOT NULL,
        CHECK (importe > 0),
    descuento NUMBER NOT NULL
        CHECK (descuento >= 0)
);

CREATE TABLE Ropa (
    id_ropa NUMBER PRIMARY KEY,
    descripcion VARCHAR(300),
    tipo_ropa VARCHAR(20) NOT NULL,
        CHECK (tipo_ropa IN ('Ropa de verano', 'Ropa de primavera', 'Anime', 'Oficina', 'Fiesta', 
            'Deporte', 'Camisetas', 'Pantalones', 'Zapatos')),
    precio_gemas NUMBER,
        CHECK (precio_gemas >= 0),
    precio_monedas NUMBER,
        CHECK (precio_monedas >= 0)
);

CREATE TABLE Interes (
    nombre_interes VARCHAR(50) PRIMARY KEY,
    imagen BLOB NOT NULL
);

CREATE TABLE Apariencia (
    id_apariencia NUMBER PRIMARY KEY,
    descripcion VARCHAR(300),
    tipo_apar VARCHAR(20) NOT NULL,
        CHECK (tipo_apar IN ('Cabello', 'Piel', 'Cuerpo', 'Ojos', 'Maquillaje', 'Accesorios')),
    imagen BLOB NOT NULL,
    precio_gemas NUMBER,
        CHECK (precio_gemas >= 0),
    precio_monedas NUMBER,
        CHECK (precio_monedas >= 0)
);

CREATE TABLE Voz (
    id_voz NUMBER PRIMARY KEY,
    tipo_voz VARCHAR(20) NOT NULL,
        CHECK (tipo_voz IN ('Femenina', 'Masculina')),
    tono VARCHAR(20) NOT NULL,
        CHECK (tono IN ('Alegre', 'Calmo', 'Seguro', 'Energético', 'Optimista'))
);

CREATE TABLE Rasgo (
    id_rasgo NUMBER PRIMARY KEY,
    imagen BLOB NOT NULL,
    nombre VARCHAR(20) NOT NULL,
        CHECK (nombre IN ('Seguro', 'Tímido', 'Energético', 'Práctico', 'Soñador', 'Artístico', 'Lógico'))
);

CREATE TABLE Avatar (
    id_avatar NUMBER PRIMARY KEY,
    id_voz NUMBER REFERENCES Voz(id_voz)
);



-- RELACIONES
CREATE TABLE realiza_integracion (
    id_usuario NUMBER REFERENCES Usuario(id_usuario),
    id_app NUMBER REFERENCES Aplicacion(id_app),    
    fecha_confir DATE NOT NULL,
    hora_confir TIMESTAMP NOT NULL, 
    PRIMARY KEY (id_usuario, id_app)
);

CREATE TABLE compra (
    id_usuario NUMBER REFERENCES Usuario(id_usuario),
    id_paquete NUMBER REFERENCES Paquete(id_paquete),
    id_compra NUMBER NOT NULL UNIQUE,
    fecha_compra DATE NOT NULL,
    hora_compra TIMESTAMP NOT NULL,
    num_tarjeta_cred VARCHAR(20) NOT NULL,
    PRIMARY KEY (id_usuario, id_paquete, id_compra)
);

CREATE TABLE maneja (
    id_asistente NUMBER REFERENCES Asistente_Virtual(id_asistente),
    id_idioma NUMBER REFERENCES Idioma(id_idioma),
    PRIMARY KEY (id_asistente, id_idioma)
);

CREATE TABLE aprende (
    id_usuario NUMBER REFERENCES Usuario(id_usuario),
    id_idioma NUMBER REFERENCES Idioma(id_idioma),
    PRIMARY KEY (id_usuario, id_idioma)
);

CREATE TABLE personifica (
    id_asistente NUMBER REFERENCES Asistente_Virtual(id_asistente),
    id_avatar NUMBER REFERENCES Avatar(id_avatar),
    PRIMARY KEY (id_asistente, id_avatar)
);

CREATE TABLE tiene_ropa (
    id_avatar NUMBER REFERENCES Avatar(id_avatar),
    id_ropa NUMBER REFERENCES Ropa(id_ropa),
    PRIMARY KEY (id_avatar, id_ropa)
);

CREATE TABLE tiene_interes (
    id_avatar NUMBER REFERENCES Avatar(id_avatar),
    nombre_interes VARCHAR(50) REFERENCES Interes(nombre_interes),
    PRIMARY KEY (id_avatar, nombre_interes)
);

CREATE TABLE tiene_rasgo (
    id_avatar NUMBER REFERENCES Avatar(id_avatar),
    id_rasgo NUMBER REFERENCES Rasgo(id_rasgo),
    PRIMARY KEY (id_avatar, id_rasgo)
);

CREATE TABLE tiene_apariencia (
    id_avatar NUMBER REFERENCES Avatar(id_avatar),
    id_apariencia NUMBER REFERENCES Apariencia(id_apariencia),
    PRIMARY KEY (id_avatar, id_apariencia)
);



-- TRIGGERS
CREATE OR REPLACE TRIGGER validar_fecha_hora
BEFORE INSERT OR UPDATE ON realiza_integracion
FOR EACH ROW
BEGIN
    IF NOT (
        (:NEW.fecha_confir < TRUNC(SYSDATE)) OR 
        (:NEW.fecha_confir = TRUNC(SYSDATE) AND :NEW.hora_confir < SYSTIMESTAMP)
    ) THEN
        RAISE_APPLICATION_ERROR(-20001, 'La fecha y hora de confirmación no son válidas.');
    END IF;
END;
/

CREATE OR REPLACE TRIGGER validar_fecha_confir
BEFORE INSERT OR UPDATE ON realiza_integracion
FOR EACH ROW
DECLARE
    v_fecha_reg DATE;
BEGIN
    SELECT fecha_reg INTO v_fecha_reg 
    FROM Usuario 
    WHERE id_usuario = :NEW.id_usuario;
    IF (:NEW.fecha_confir <= v_fecha_reg) THEN
        RAISE_APPLICATION_ERROR(-20002, 'La fecha de confirmación debe ser posterior a la fecha de registro.');
    END IF;
END;
/

