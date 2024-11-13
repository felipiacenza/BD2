db.createCollection('compra', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            required: [
                'id_compra',
                'email',
                'id_paquete',
                'fecha',
                'hora',
                'metodo_pago'
            ],
            properties: {
                id_compra: {
                    bsonType: 'int',
                    description: 'Debe ser un entero único y obligatorio'
                },
                email: {
                    bsonType: 'string',
                    pattern: '^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$',
                    description: 'Debe ser un email válido y obligatorio'
                },
                id_paquete: {
                    bsonType: 'int',
                    description: 'Debe ser un entero que referencia a un paquete y obligatorio'
                },
                fecha: {
                    bsonType: 'date',
                    description: 'Debe ser una fecha válida y obligatoria'
                },
                hora: {
                    bsonType: 'date',
                    description: 'Debe ser una marca de tiempo válida y obligatoria'
                },
                metodo_pago: {
                    bsonType: 'string',
                    'enum': [
                        'tarjeta de credito'
                    ],
                    description: 'Debe ser la cadena \'tarjeta de credito\' y es obligatoria'
                }
            }
        }
    }
});