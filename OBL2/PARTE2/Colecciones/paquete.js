db.createCollection('paquete', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            required: [
                'tipo',
                'cantidad',
                'importe',
                'descuento'
            ],
            properties: {
                tipo: {
                    bsonType: 'string',
                    'enum': [
                        'gemas',
                        'monedas'
                    ],
                    description: 'Debe ser una cadena con los valores \'gemas\' o \'monedas\''
                },
                cantidad: {
                    bsonType: 'int',
                    minimum: 1,
                    description: 'Debe ser un entero mayor a 0 y obligatorio'
                },
                importe: {
                    bsonType: 'double',
                    minimum: 0,
                    description: 'Debe ser un número decimal mayor o igual a 0 y obligatorio'
                },
                descuento: {
                    bsonType: 'double',
                    minimum: 0,
                    description: 'Debe ser un número decimal mayor o igual a 0 o puede ser nulo'
                }
            }
        }
    }
});