db.createCollection('pais', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            required: [
                'id_suscripcion',
                'precio',
                'tipo'
            ],
            properties: {
                id_suscripcion: {
                    bsonType: 'int',
                    description: 'Debe ser un entero único y obligatorio'
                },
                precio: {
                    bsonType: 'double',
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