db.createCollection('interacciones', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            required: [
                'id_usuario',
                'id_asistente',
                'fecha',
                'hora',
                'tipo_interaccion',
                'idioma',
                'respuesta'
            ],
            properties: {
                id_usuario: {
                    bsonType: 'objectId',
                    description: 'Debe ser un ObjectId que referencia al usuario'
                },
                id_asistente: {
                    bsonType: 'objectId',
                    description: 'Debe ser un ObjectId que referencia al asistente virtual'
                },
                fecha: {
                    bsonType: 'date',
                    description: 'Debe ser una fecha válida'
                },
                hora: {
                    bsonType: 'string',
                    pattern: '^([01]?[0-9]|2[0-3]):[0-5][0-9]$',
                    description: 'Debe ser una hora válida en formato HH:mm'
                },
                tipo_interaccion: {
                    bsonType: 'string',
                    enum: [
                        'consulta',
                        'tutoría',
                        'conversación casual',
                        'coaching'
                    ],
                    description: 'Debe ser un valor válido para el tipo de interacción'
                },
                idioma: {
                    bsonType: 'objectId',
                    description: 'Debe ser un ObjectId que referencia el idioma utilizado'
                },
                respuesta: {
                    bsonType: 'string',
                    description: 'Debe ser una cadena con la respuesta generada por el asistente'
                }
            }
        }
    }
});
