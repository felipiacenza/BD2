db.createCollection('aplicacion', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            required: [
                'nombre',
                'tipo'
            ],
            properties: {
                nombre: {
                    bsonType: 'string',
                    description: 'Debe ser una cadena no nula'
                },
                tipo: {
                    bsonType: 'string',
                    description: 'Debe ser una cadena no nula'
                }
            }
        }
    }
});