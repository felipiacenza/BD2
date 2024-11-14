db.createCollection('integracion', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            required: [
                'email',
                'id_app',
                'fecha_confirmacion',
                'hora_confirmacion'
            ],
            properties: {
                email: {
                    bsonType: 'string',
                    pattern: '^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$',
                    description: 'Debe ser un email válido y obligatorio'
                },
                id_app: {
                    bsonType: 'objectId',
                    description: 'Debe ser un ObjectId que referencia a una aplicación y obligatorio'
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