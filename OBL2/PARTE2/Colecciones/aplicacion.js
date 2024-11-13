db.createCollection('aplicacion', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            required: [
                'id_app',
                'nombre',
                'tipo'
            ],
            properties: {
                id_app: {
                    bsonType: 'int',
                    description: 'Debe ser un entero único y obligatorio'
                },
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