db.aplicacion.createIndex(
    { nombre: 1 },
    { unique: true, name: "unique_nombre_aplicacion" }
);
db.idioma.createIndex(
    { nombre: 1 },
    { unique: true, name: "unique_nombre_idioma" }
);
db.pais.createIndex(
    { nombre_pais: 1 },
    { unique: true, name: "unique_nombre_pais" }
);
db.usuario.createIndex(
    { email: 1 },
    { unique: true, name: "unique_email_usuario" }
);

db.usuario.createIndex(
    { telefono: 1 },
    { unique: true, name: "unique_telefono_usuario" }
);