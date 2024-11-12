Sujetos:

- Administradores: Tienen control total sobre los datos de todos los usuarios.
- Usuarios finales: Solo pueden editar su propia información (contraseña, género y teléfono).
- Diseñadores de contenido: Pueden crear y modificar las apariencias y vestimentas.
- Personal de finanzas: Puede ver el saldo y las compras de los usuarios.


Objetos:

- Datos personales de los usuarios (nombre, email, contraseña, género, teléfono, etc.).
- Apariencias y vestimentas disponibles.
- Saldo de billeteras y compras de usuarios.

Privilegios (Permisos):

- Administradores: CRUD (Crear, Leer, Actualizar, Eliminar) sobre los datos de todos los usuarios.
- Usuarios finales: Leer y actualizar su propia contraseña, género y teléfono.
- Diseñadores de contenido: Crear y actualizar apariencias y vestimentas.
- Personal de finanzas: Leer saldo y compras de los usuarios.


El diagrama DAC tradicional sería modificado para usar roles en lugar de usuarios individuales. Cada rol tiene sus permisos sobre los objetos y estos permisos son fijos para todos los usuarios asignados a ese rol.

Diagrama RBAC básico:

Los roles son los sujetos, es decir, Administradores, Usuarios finales, Diseñadores de contenido, y Personal de finanzas.
Los objetos son los diferentes recursos que se quieren proteger, como datos de usuarios, apariencias, billeteras y compras.
Los privilegios son las acciones que cada rol puede ejecutar sobre los objetos: CRUD para los administradores, leer o actualizar en los demás casos.
El diagrama incluiría relaciones como:

El rol de Administrador tiene acceso completo a todos los datos de usuario.
El rol de Usuario final tiene permisos de actualización y lectura limitados solo a su cuenta.
El rol de Diseñador de contenido tiene permisos de creación y edición sobre los recursos visuales.
El rol de Personal de finanzas tiene acceso de lectura sobre los datos financieros de los usuarios.
