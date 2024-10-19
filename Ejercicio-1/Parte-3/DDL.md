DROP TABLE Usuario;
DROP TABLE Billetera;
DROP TABLE Asistente_Virtual;
DROP TABLE Sub_Rol_Asistente;
DROP TABLE Idioma;
DROP TABLE Suscripcion;

CREATE TABLE Usuario(
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
    telefono VARCHAR(20) NOT NULL UNIQUE,
    id_suscripcion NUMBER NOT NULL UNIQUE, -- AUTO_INCREMENT??
    PRIMARY KEY (email, telefono, id_suscripcion)
);

-- RANGO??????

CREATE TABLE Billetera (
    id_billetera NUMBER NOT NULL UNIQUE, -- AUTO_INCREMENT??
    email VARCHAR(20) REFERENCES Usuario(email),
    cant_gemas NUMBER NOT NULL,
        CHECK (cant_gemas >= 0),
    cant_monedas NUMBER NOT NULL
        CHECK (cant_monedas >= 0),
    PRIMARY KEY (id_billetera, email)
);

CREATE TABLE Asistente_Virtual (
    id_asistente NUMBER NOT NULL PRIMARY KEY, -- AUTO_INCREMENT??
    nombreAsistente VARCHAR(20) NOT NULL,
    idiomas VARCHAR(300), -- ¿Como funcionaría para poder poner varios idiomas?
    generoAsistente VARCHAR(20) NOT NULL,
        CHECK (generoUsuario IN ('Femenino', 'Masculino', 'No binario')),
    historia VARCHAR(200),
    rol VARCHAR(5) NOT NULL,
        CHECK (rol IN ('Amigo', 'Tutor', 'Coach'))
    --sub_rol VARCHAR(50),
       -- CHECK (sub_rol IN ('Apoyo educativo', 'Enseñanza de idiomas', 'Preparación de exámenes', 'Planificación', 'Organización del tiempo'),
);

CREATE TABLE Sub_Rol_Asistente (
    id_asistente NUMBER REFERENCES Asistente_Virtual(id_asistente) PRIMARY KEY, -- AUTO_INCREMENT??
    subRol_Tutor VARCHAR(30),
        CHECK (subRol_Tutor IN ('Apoyo educativo', 'Enseñanza de idiomas', 'Preparación de exámenes')),
    subRol_Coach VARCHAR(30),
        CHECK (subRol_Coach IN ('Planificación', 'Organización del tiempo'))
);

CREATE TABLE Idioma (
    id_idioma NUMBER NOT NULL UNIQUE,
    nombre_idioma VARCHAR(20) NOT NULL UNIQUE,
    PRIMARY KEY (id_idioma, nombre_idioma)
);

CREATE TABLE Suscripcion (
    id_Suscripcion NUMBER NOT NULL UNIQUE,
    precio NUMBER NOT NULL,
        CHECK (precio >= 0),
    tipo VARCHAR(10) NOT NULL,
        CHECK (tipo IN ('Gratuito', 'Pago'))
);





