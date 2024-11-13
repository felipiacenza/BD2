db.createCollection('suscripcion', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            required: [
                'precio',
                'tipo'
            ],
            properties: {
                precio: {
                    bsonType: 'int',
                    minimum: 0,
                    description: 'Debe ser un número decimal mayor o igual a 0 y obligatorio'
                },
                tipo: {
                    bsonType: 'string',
                    'enum': [
                        'gratis',
                        'mensual',
                        'anual',
                        'de por vida'
                    ],
                    description: 'Debe ser una cadena con los valores \'gratis\', \'mensual\', \'anual\' o \'de por vida\''
                }
            }
        }
    }
});