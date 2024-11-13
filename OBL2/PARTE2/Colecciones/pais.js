db.createCollection('pais', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            required: [
                'nombre_pais'
            ],
            properties: {
                nombre_pais: {
                    bsonType: 'string',
                    description: 'Debe ser una cadena única y no nula'
                }
            }
        }
    }
});