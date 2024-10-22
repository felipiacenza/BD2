1. Creación de roles

CREATE ROLE admin;
CREATE ROLE usuario_final;
CREATE ROLE disenador_contenido;
CREATE ROLE personal_finanzas;

2. Privilegios para los Administradores
Los administradores tienen control total (CRUD) sobre los datos de los usuarios. Por lo tanto, asignamos los permisos completos sobre las tablas relacionadas con usuarios:

GRANT SELECT, INSERT, UPDATE, DELETE ON usuarios TO admin;
GRANT SELECT, INSERT, UPDATE, DELETE ON compras TO admin;
GRANT SELECT, INSERT, UPDATE, DELETE ON billetera TO admin;

3. Privilegios para los Usuarios Finales
Los usuarios finales solo pueden leer y actualizar su propia contraseña, género y teléfono. Esto puede lograrse con una combinación de vistas o restricciones condicionales en las consultas, pero aquí te doy un ejemplo de permisos básicos para las columnas específicas:

GRANT SELECT (email, nombre, apellido, genero, telefono) ON usuarios TO usuario_final;
GRANT UPDATE (password, genero, telefono) ON usuarios TO usuario_final;

Si fuese con vistas:

CREATE VIEW vista_usuario_final AS
SELECT email, nombre, apellido, genero, telefono
FROM usuarios
WHERE email = SESSION_USER;  -- Asumiendo que el email del usuario se corresponde con la sesión

NOTA: Preguntarle bien al profe como sería la vista

4. Privilegios para los Diseñadores de Contenido
Los diseñadores de contenido tienen permisos para crear y actualizar apariencias y vestimentas. Se asume que estas están en una tabla llamada apariencias:

GRANT SELECT, INSERT, UPDATE ON apariencias TO disenador_contenido;
GRANT SELECT, INSERT, UPDATE ON vestimenta TO disenador_contenido;

5. Privilegios para el Personal de Finanzas
El personal de finanzas necesita poder ver el saldo de las billeteras y las compras realizadas por los usuarios. Solo se asignan permisos de lectura sobre estas tablas:

GRANT SELECT ON billetera TO personal_finanzas;
GRANT SELECT ON compras TO personal_finanzas;

6. Asignación de roles a usuarios
Finalmente, asignamos estos roles a los usuarios de la base de datos según su función (suponiendo que los usuarios existen en la bd):

CREATE USER usuario_admin IDENTIFIED BY '1234';
CREATE USER usuario_final1 IDENTIFIED BY '1234';
CREATE USER usuario_disenador IDENTIFIED BY '1234';
CREATE USER usuario_finanzas IDENTIFIED BY '1234';

GRANT admin TO usuario_admin;
GRANT usuario_final TO usuario_final1;
GRANT disenador_contenido TO usuario_disenador;
GRANT personal_finanzas TO usuario_finanzas;
