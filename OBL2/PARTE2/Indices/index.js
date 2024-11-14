db.aplicacion.createIndex({ "nombre": 1 },{ unique: true });
db.idioma.createIndex({ "nombre": 1 },{ unique: true });
db.pais.createIndex({ "nombre_pais": 1 }, { unique: true });
db.usuario.createIndex({ "email": 1 },{ unique: true, name: "unique_email_index" });

