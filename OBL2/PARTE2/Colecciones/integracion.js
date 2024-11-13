db.createCollection('integracion', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            required: [
                'email',
                'id_app',
                'fecha_confrimacion',
                'hora_confrimacion'
            ],
            properties: {
                email: {
                    bsonType: 'string',
                    pattern: '^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$',
                    description: 'Debe ser un email válido y obligatorio'
                },
                id_app: {
                    bsonType: 'int',
                    description: 'Debe ser un entero que referencia a una aplicación y obligatorio'
                },
                fecha_confirmacion: {
                    bsonType: 'date',
                    description: 'Debe ser una fecha válida, opcional'
                },
                hora_confirmacion: {
                    bsonType: 'date',
                    description: 'Debe ser una marca de tiempo válida, opcional'
                }
            }
        }
    }
});