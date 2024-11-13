db.createCollection('pais', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            required: [
                'id_paquete',
                'tipo',
                'cantidad',
                'importe',
                'descuento'
            ],
            properties: {
                id_paquete: {
                    bsonType: 'int',
                    description: 'Debe ser un entero único y obligatorio'
                },
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
                    bsonType: [
                        'double',
                        'null'
                    ],
                    minimum: 0,
                    description: 'Debe ser un número decimal mayor o igual a 0 o puede ser nulo'
                }
            }
        }
    }
});