db.createCollection('pais', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            required: [
                'email',
                'nombre',
                'pass',
                'fecha_nac',
                'fecha_reg',
                'rango_edad',
                'genero',
                'telefono',
                'id_suscripcion',
                'id_pais',
                'billetera',
                'id_asistente',
                'idiomas_aprendidos'
            ],
            properties: {
                email: {
                    bsonType: 'string',
                    pattern: '^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$',
                    description: 'Debe ser un email válido y obligatorio'
                },
                nombre: {
                    bsonType: 'string',
                    description: 'Debe ser una cadena no nula y obligatoria'
                },
                pass: {
                    bsonType: 'string',
                    description: 'Debe ser una cadena no nula y obligatoria'
                },
                fecha_nac: {
                    bsonType: 'date',
                    description: 'Debe ser una fecha válida y obligatoria'
                },
                fecha_reg: {
                    bsonType: 'date',
                    description: 'Debe ser una fecha válida y opcional'
                },
                rango_edad: {
                    bsonType: 'string',
                    'enum': [
                        '18-24',
                        '25-34',
                        '35-44',
                        '45-54',
                        '55-64',
                        '65 o más'
                    ],
                    description: 'Debe ser un valor de rango de edad predefinido'
                },
                genero: {
                    bsonType: 'string',
                    'enum': [
                        'femenino',
                        'masculino',
                        'no binario'
                    ],
                    description: 'Debe ser una cadena opcional con valores \'femenino\', \'masculino\' o \'no binario\''
                },
                telefono: {
                    bsonType: 'string',
                    description: 'Debe ser una cadena única y opcional'
                },
                id_suscripcion: {
                    bsonType: 'int',
                    description: 'Debe ser un entero opcional que referencia a la colección Suscripción'
                },
                id_pais: {
                    bsonType: 'int',
                    description: 'Debe ser un entero obligatorio que referencia a la colección País'
                },
                id_asistente: {
                    bsonType: 'int',
                    description: 'Debe ser un entero que referencia al asistente que maneja el usuario'
                },
                idiomas_aprendidos: {
                    bsonType: 'array',
                    items: {
                        bsonType: 'int'
                    },
                    description: 'Debe ser un array de enteros que representan los idiomas aprendidos por el usuario'
                },
                billetera: {
                    bsonType: 'object',
                    required: [
                        'id_billetera',
                        'cant_gemas',
                        'cant_monedas'
                    ],
                    properties: {
                        id_billetera: {
                            bsonType: 'int',
                            description: 'Debe ser un entero único y obligatorio'
                        },
                        cant_gemas: {
                            bsonType: 'int',
                            minimum: 0,
                            description: 'Debe ser un entero no negativo'
                        },
                        cant_monedas: {
                            bsonType: 'int',
                            minimum: 0,
                            description: 'Debe ser un entero no negativo'
                        }
                    }
                }
            }
        }
    }
});