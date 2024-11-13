db.createCollection('idioma', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            required: [
                'id_idioma',
                'nombre'
            ],
            properties: {
                id_idioma: {
                    bsonType: 'int',
                    description: 'Debe ser un entero único y obligatorio'
                },
                nombre: {
                    bsonType: 'string',
                    description: 'Debe ser una cadena no nula'
                }
            }
        }
    }
});