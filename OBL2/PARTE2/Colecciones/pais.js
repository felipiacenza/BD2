db.createCollection('pais', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            required: [
                'id_pais',
                'nombre_pais'
            ],
            properties: {
                id_pais: {
                    bsonType: 'int',
                    description: 'Debe ser un entero único y obligatorio'
                },
                nombre_pais: {
                    bsonType: 'string',
                    description: 'Debe ser una cadena única y no nula'
                }
            }
        }
    }
});