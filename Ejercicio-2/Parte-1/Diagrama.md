1. Creación de roles

CREATE ROLE admin;
CREATE ROLE usuario_final;
CREATE ROLE disenador_contenido;
CREATE ROLE personal_finanzas;

2. Privilegios para los Administradores
Los administradores tienen control total (CRUD) sobre los datos de los usuarios. Por lo tanto, asignamos los permisos completos sobre las tablas relacionadas con usuarios:

-- Vistas para admin con control total
CREATE VIEW vista_usuarios_admin AS 
SELECT * FROM usuarios;

CREATE VIEW vista_compras_admin AS 
SELECT * FROM compras;

CREATE VIEW vista_billetera_admin AS 
SELECT * FROM billetera;

-- Permisos sobre las vistas para el rol admin
GRANT SELECT, INSERT, UPDATE, DELETE ON vista_usuarios_admin TO admin;
GRANT SELECT, INSERT, UPDATE, DELETE ON vista_compras_admin TO admin;
GRANT SELECT, INSERT, UPDATE, DELETE ON vista_billetera_admin TO admin;

3. Privilegios para los Usuarios Finales
Los usuarios finales solo pueden leer y actualizar su propia contraseña, género y teléfono. Esto puede lograrse con una combinación de vistas o restricciones condicionales en las consultas, pero aquí te doy un ejemplo de permisos básicos para las columnas específicas:

-- Vista que filtra por el email del usuario que está conectado
CREATE VIEW vista_usuario_final AS
SELECT email, nombre, apellido, genero, telefono 
FROM usuarios 
WHERE email = SESSION_USER;

-- Vista para actualizar datos permitidos
CREATE VIEW vista_actualizacion_usuario_final AS
SELECT email, password, genero, telefono 
FROM usuarios 
WHERE email = SESSION_USER;

-- Asignamos los permisos necesarios sobre las vistas
GRANT SELECT ON vista_usuario_final TO usuario_final;
GRANT UPDATE (password, genero, telefono) ON vista_actualizacion_usuario_final TO usuario_final;

4. Privilegios para los Diseñadores de Contenido
Los diseñadores de contenido tienen permisos para crear y actualizar apariencias y vestimentas. Se asume que estas están en una tabla llamada apariencias:

-- Vista de apariencias
CREATE VIEW vista_apariencias AS 
SELECT * FROM apariencias;

-- Vista de vestimenta
CREATE VIEW vista_vestimenta AS 
SELECT * FROM vestimenta;

-- Asignamos los permisos sobre las vistas
GRANT SELECT, INSERT, UPDATE ON vista_apariencias TO disenador_contenido;
GRANT SELECT, INSERT, UPDATE ON vista_vestimenta TO disenador_contenido;


5. Privilegios para el Personal de Finanzas
El personal de finanzas necesita poder ver el saldo de las billeteras y las compras realizadas por los usuarios. Solo se asignan permisos de lectura sobre estas tablas:

-- Vista de billetera para finanzas
CREATE VIEW vista_billetera_finanzas AS
SELECT * FROM billetera;

-- Vista de compras para finanzas
CREATE VIEW vista_compras_finanzas AS
SELECT * FROM compras;

-- Asignamos permisos de solo lectura
GRANT SELECT ON vista_billetera_finanzas TO personal_finanzas;
GRANT SELECT ON vista_compras_finanzas TO personal_finanzas;


6. Asignación de roles a usuarios
Finalmente, asignamos estos roles a los usuarios de la base de datos según su función (suponiendo que los usuarios existen en la bd):

-- Creación de usuarios
CREATE USER usuario_admin IDENTIFIED BY '1234';
CREATE USER usuario_final1 IDENTIFIED BY '1234';
CREATE USER usuario_disenador IDENTIFIED BY '1234';
CREATE USER usuario_finanzas IDENTIFIED BY '1234';

-- Asignación de roles
GRANT admin TO usuario_admin;
GRANT usuario_final TO usuario_final1;
GRANT disenador_contenido TO usuario_disenador;
GRANT personal_finanzas TO usuario_finanzas;