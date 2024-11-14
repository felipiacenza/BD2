db.createCollection('idioma', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            required: [
                'nombre'
            ],
            properties: {
                nombre: {
                    bsonType: 'string',
                    description: 'Debe ser una cadena no nula'
                }
            }
        }
    }
});