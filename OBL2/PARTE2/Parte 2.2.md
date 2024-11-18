# Parte 2.2
Para esta parte 2.2, hicimos énfasis en el reqerimiento de las interacciones. Para ellos, principalmetne hicimos dos cosas: colección 'interacciones' y embebido de progreso en coleccion de usuario.

## Colección 'interacciones'

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


## Embebido de Progreso en Usuario

db.createCollection('usuario', {
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
                'idiomas_aprendidos',
                'progreso_aprendizaje' // Nuevo campo
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
                    enum: [
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
                    enum: [
                        'femenino',
                        'masculino',
                        'no binario'
                    ],
                    description: 'Debe ser una cadena opcional con valores "femenino", "masculino" o "no binario"'
                },
                telefono: {
                    bsonType: 'string',
                    description: 'Debe ser una cadena única y opcional'
                },
                id_suscripcion: {
                    bsonType: 'objectId',
                    description: 'Debe ser un ObjectId que referencia a la colección Suscripción'
                },
                id_pais: {
                    bsonType: 'objectId',
                    description: 'Debe ser un ObjectId obligatorio que referencia a la colección País'
                },
                id_asistente: {
                    bsonType: 'objectId',
                    description: 'Debe ser un ObjectId que referencia al asistente que maneja el usuario'
                },
                idiomas_aprendidos: {
                    bsonType: 'array',
                    items: {
                        bsonType: 'objectId'
                    },
                    description: 'Debe ser un array de ObjectId que representan los idiomas aprendidos por el usuario'
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
                            bsonType: 'objectId',
                            description: 'Debe ser un ObjectId único y obligatorio'
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
                },
                progreso_aprendizaje: { // Nuevo campo embebido
                    bsonType: 'object',
                    required: ['sesiones_completadas', 'niveles_alcanzados', 'logros'],
                    properties: {
                        sesiones_completadas: {
                            bsonType: 'int',
                            minimum: 0,
                            description: 'Debe ser un entero no negativo que representa el número de sesiones completadas'
                        },
                        niveles_alcanzados: {
                            bsonType: 'array',
                            items: {
                                bsonType: 'string',
                                enum: ['Básico', 'Intermedio', 'Avanzado']
                            },
                            description: 'Debe ser un array que representa los niveles alcanzados'
                        },
                        logros: {
                            bsonType: 'array',
                            items: {
                                bsonType: 'object',
                                required: ['nombre', 'fecha_obtencion', 'nivel_dominio'],
                                properties: {
                                    nombre: {
                                        bsonType: 'string',
                                        description: 'Debe ser un string que describe el logro o certificación'
                                    },
                                    fecha_obtencion: {
                                        bsonType: 'date',
                                        description: 'Debe ser una fecha válida que indica cuándo se obtuvo el logro'
                                    },
                                    nivel_dominio: {
                                        bsonType: 'string',
                                        enum: ['Básico', 'Intermedio', 'Avanzado'],
                                        description: 'Debe ser un string que indica el nivel alcanzado'
                                    }
                                }
                            },
                            description: 'Debe ser un array de objetos que describen los logros o certificaciones'
                        }
                    }
                }
            }
        }
    }
});
