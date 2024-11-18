// Colecciones:

db.createCollection('aplicacion', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            required: [
                'nombre',
                'tipo'
            ],
            properties: {
                nombre: {
                    bsonType: 'string',
                    description: 'Debe ser una cadena no nula'
                },
                tipo: {
                    bsonType: 'string',
                    description: 'Debe ser una cadena no nula'
                }
            }
        }
    }
});

db.createCollection('asistenteVirtual', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            required: [
                'nombre',
                'idiomas_manejados',
                'voz',
                'avatar',
                'rasgoPersonalidad'
            ],
            properties: {
                nombre: {
                    bsonType: 'string',
                    description: 'Debe ser una cadena no nula y obligatoria'
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
                historia: {
                    bsonType: 'string',
                    description: 'Debe ser una cadena opcional'
                },
                rol: {
                    bsonType: 'string',
                    description: 'Debe ser una cadena opcional que describe el rol del asistente'
                },
                subrol: {
                    bsonType: 'string',
                    description: 'Debe ser una cadena opcional que describe el subrol del asistente'
                },
                idiomas_manejados: {
                    bsonType: 'array',
                    items: {
                        bsonType: 'objectId'
                    },
                    description: 'Debe ser un array de ObjectId que referencien los idiomas manejados'
                },
                rasgoPersonalidad: {
                    bsonType: 'string',
                    enum: [
                        'seguro',
                        'tímido',
                        'energético',
                        'práctico',
                        'soñador',
                        'artístico',
                        'lógico'
                    ],
                    description: 'Debe ser un valor de rasgo de personalidad permitido y obligatorio'
                },
                voz: {
                    bsonType: 'object',
                    required: [
                        'tipo',
                        'tono'
                    ],
                    properties: {
                        tipo: {
                            bsonType: 'string',
                            enum: [
                                'femenina',
                                'masculina'
                            ],
                            description: 'Debe ser "femenina" o "masculina"'
                        },
                        tono: {
                            bsonType: 'string',
                            enum: [
                                'alegre',
                                'calmo',
                                'seguro',
                                'enérgico',
                                'optimista'
                            ],
                            description: 'Debe ser uno de los valores permitidos para el tono'
                        }
                    }
                },
                avatar: {
                    bsonType: 'object',
                    required: [
                        'intereses',
                        'apariencia',
                        'ropa'
                    ],
                    properties: {
                        intereses: {
                            bsonType: 'array',
                            items: {
                                bsonType: 'string'
                            },
                            description: 'Debe ser un array de strings que representen los intereses'
                        },
                        apariencia: {
                            bsonType: 'array',
                            items: {
                                bsonType: 'object',
                                required: [
                                    'tipo',
                                    'descripcion'
                                ],
                                properties: {
                                    tipo: {
                                        bsonType: 'string',
                                        description: 'Debe ser una cadena que describe el tipo de apariencia (cabello, piel, etc.)'
                                    },
                                    descripcion: {
                                        bsonType: 'string',
                                        description: 'Debe ser una cadena que describe la apariencia'
                                    },
                                    imagen: {
                                        bsonType: ['string', 'null'],
                                        description: 'Debe ser una cadena opcional con la URL de la imagen'
                                    }
                                }
                            },
                            description: 'Debe ser un array de objetos que describen la apariencia del avatar'
                        },
                        ropa: {
                            bsonType: 'array',
                            items: {
                                bsonType: 'object',
                                required: [
                                    'tipo',
                                    'descripcion'
                                ],
                                properties: {
                                    tipo: {
                                        bsonType: 'string',
                                        description: 'Debe ser una cadena que describe el tipo de ropa'
                                    },
                                    descripcion: {
                                        bsonType: 'string',
                                        description: 'Debe ser una cadena que describe la ropa'
                                    },
                                    precio_gemas: {
                                        bsonType: 'int',
                                        minimum: 0,
                                        description: 'Debe ser un entero no negativo que representa el precio en gemas'
                                    },
                                    precio_monedas: {
                                        bsonType: 'int',
                                        minimum: 0,
                                        description: 'Debe ser un entero no negativo que representa el precio en monedas'
                                    }
                                }
                            },
                            description: 'Debe ser un array de objetos que describen la ropa del avatar'
                        }
                    }
                }
            }
        }
    }
});


db.createCollection('compra', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            required: [
                'email',
                'id_paquete',
                'fecha',
                'hora',
                'metodo_pago'
            ],
            properties: {
                email: {
                    bsonType: 'string',
                    pattern: '^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$',
                    description: 'Debe ser un email válido y obligatorio'
                },
                id_paquete: {
                    bsonType: 'objectId',
                    description: 'Debe ser un ObjectId que referencia a un paquete y obligatorio'
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

db.createCollection('idioma', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            required: [
                'nombre'
            ],
            properties: {
                nombre: {
                    bsonType: 'string',
                    description: 'Debe ser una cadena no nula'
                }
            }
        }
    }
});

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

db.createCollection('suscripcion', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            required: [
                'precio',
                'tipo'
            ],
            properties: {
                precio: {
                    bsonType: 'double',
                    minimum: 0,
                    description: 'Debe ser un número decimal mayor o igual a 0 y obligatorio'
                },
                tipo: {
                    bsonType: 'string',
                    'enum': [
                        'gratis',
                        'mensual',
                        'anual',
                        'de por vida'
                    ],
                    description: 'Debe ser una cadena con los valores \'gratis\', \'mensual\', \'anual\' o \'de por vida\''
                }
            }
        }
    }
});

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
                'progreso_aprendizaje'
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
                progreso_aprendizaje: {
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

// Documentos:

db.aplicacion.insertMany([
    {
        "_id": ObjectId("67351c789039535afaae0e71"),
        "nombre": "Gestor Financiero",
        "tipo": "Finanzas"
    },
    {
        "_id": ObjectId("67351c789039535afaae0e72"),
        "nombre": "Planificador de Tareas",
        "tipo": "Productividad"
    },
    {
        "_id": ObjectId("67351c789039535afaae0e73"),
        "nombre": "Juego de Estrategia",
        "tipo": "Entretenimiento"
    },
    {
        "_id": ObjectId("67351c789039535afaae0e74"),
        "nombre": "App de Ejercicio",
        "tipo": "Salud"
    },
    {
        "_id": ObjectId("67351c789039535afaae0e75"),
        "nombre": "Enciclopedia Virtual",
        "tipo": "Educación"
    },
    {
        "_id": ObjectId("67351c789039535afaae0e76"),
        "nombre": "Gestor de Contraseñas",
        "tipo": "Seguridad"
    },
    {
        "_id": ObjectId("67351c789039535afaae0e77"),
        "nombre": "Editor de Fotos",
        "tipo": "Creatividad"
    },
    {
        "_id": ObjectId("67351c789039535afaae0e78"),
        "nombre": "Agenda Médica",
        "tipo": "Salud"
    },
    {
        "_id": ObjectId("67351c789039535afaae0e79"),
        "nombre": "Control de Inventario",
        "tipo": "Negocios"
    },
    {
        "_id": ObjectId("67351c789039535afaae0e7a"),
        "nombre": "Clima y Noticias",
        "tipo": "Información"
    },
    {
        "_id": ObjectId("67351c789039535afaae0e7b"),
        "nombre": "Creador de Mapas",
        "tipo": "Herramienta"
    },
    {
        "_id": ObjectId("67351c789039535afaae0e7c"),
        "nombre": "Simulador de Negocios",
        "tipo": "Educación"
    },
    {
        "_id": ObjectId("67351c789039535afaae0e7d"),
        "nombre": "Juego de Aventura",
        "tipo": "Entretenimiento"
    },
    {
        "_id": ObjectId("67351c789039535afaae0e7e"),
        "nombre": "Analizador de Datos",
        "tipo": "Herramienta"
    },
    {
        "_id": ObjectId("67351c789039535afaae0e7f"),
        "nombre": "Traductor de Idiomas",
        "tipo": "Educación"
    }
]);

db.asistenteVirtual.insertMany([
    {
        "nombre": "Lía",
        "genero": "femenino",
        "historia": "Lía es una asistente dedicada a la organización personal.",
        "rol": "Asistente personal",
        "subrol": "Organización",
        "idiomas_manejados": [
            ObjectId("67351df19039535afaae0e83"),
            ObjectId("67351df19039535afaae0e84")
        ],
        "rasgoPersonalidad": "práctico",
        "voz": {
            "tipo": "femenina",
            "tono": "calmo"
        },
        "avatar": {
            "intereses": ["Gestión de tiempo", "Productividad"],
            "apariencia": [
                {
                    "tipo": "cabello",
                    "descripcion": "Cabello castaño recogido",
                    "imagen": "https://example.com/avatar-lia-hair.jpg"
                },
                {
                    "tipo": "piel",
                    "descripcion": "Piel clara",
                    "imagen": null
                }
            ],
            "ropa": [
                {
                    "tipo": "blusa",
                    "descripcion": "Blusa azul formal",
                    "precio_gemas": 15,
                    "precio_monedas": 150
                },
                {
                    "tipo": "falda",
                    "descripcion": "Falda negra",
                    "precio_gemas": 10,
                    "precio_monedas": 100
                }
            ]
        }
    },
    {
        "nombre": "Max",
        "genero": "masculino",
        "historia": "Max es un entrenador enfocado en fitness y motivación.",
        "rol": "Entrenador personal",
        "subrol": "Fitness",
        "idiomas_manejados": [
            ObjectId("67351df19039535afaae0e84"),
            ObjectId("67351df19039535afaae0e85")
        ],
        "rasgoPersonalidad": "energético",
        "voz": {
            "tipo": "masculina",
            "tono": "enérgico"
        },
        "avatar": {
            "intereses": ["Deportes", "Nutrición"],
            "apariencia": [
                {
                    "tipo": "cabello",
                    "descripcion": "Cabello corto y oscuro",
                    "imagen": null
                },
                {
                    "tipo": "piel",
                    "descripcion": "Piel morena",
                    "imagen": null
                }
            ],
            "ropa": [
                {
                    "tipo": "camiseta",
                    "descripcion": "Camiseta deportiva roja",
                    "precio_gemas": 12,
                    "precio_monedas": 120
                },
                {
                    "tipo": "shorts",
                    "descripcion": "Shorts deportivos negros",
                    "precio_gemas": 10,
                    "precio_monedas": 100
                }
            ]
        }
    },
    {
        "nombre": "Kai",
        "genero": "no binario",
        "historia": "Kai es un mentor que fomenta la creatividad artística.",
        "rol": "Mentor",
        "subrol": "Arte",
        "idiomas_manejados": [
            ObjectId("67351df19039535afaae0e84"),
            ObjectId("67351df19039535afaae0e86")
        ],
        "rasgoPersonalidad": "artístico",
        "voz": {
            "tipo": "femenina",
            "tono": "optimista"
        },
        "avatar": {
            "intereses": ["Arte", "Música"],
            "apariencia": [
                {
                    "tipo": "cabello",
                    "descripcion": "Cabello azul corto y moderno",
                    "imagen": "https://example.com/avatar-kai-hair.jpg"
                },
                {
                    "tipo": "piel",
                    "descripcion": "Piel clara con maquillaje artístico",
                    "imagen": null
                }
            ],
            "ropa": [
                {
                    "tipo": "chaqueta",
                    "descripcion": "Chaqueta de cuero personalizada",
                    "precio_gemas": 20,
                    "precio_monedas": 200
                },
                {
                    "tipo": "jeans",
                    "descripcion": "Jeans desgastados",
                    "precio_gemas": 15,
                    "precio_monedas": 150
                }
            ]
        }
    },
    {
        "nombre": "Sara",
        "genero": "femenino",
        "historia": "Sara es una guía especializada en turismo y cultura.",
        "rol": "Guía",
        "subrol": "Turismo",
        "idiomas_manejados": [
            ObjectId("67351df19039535afaae0e83"),
            ObjectId("67351df19039535afaae0e87")
        ],
        "rasgoPersonalidad": "soñador",
        "voz": {
            "tipo": "femenina",
            "tono": "alegre"
        },
        "avatar": {
            "intereses": ["Viajes", "Cultura"],
            "apariencia": [
                {
                    "tipo": "cabello",
                    "descripcion": "Cabello rubio ondulado",
                    "imagen": null
                },
                {
                    "tipo": "piel",
                    "descripcion": "Piel clara",
                    "imagen": null
                }
            ],
            "ropa": [
                {
                    "tipo": "camisa",
                    "descripcion": "Camisa blanca",
                    "precio_gemas": 15,
                    "precio_monedas": 150
                },
                {
                    "tipo": "pantalón",
                    "descripcion": "Pantalón de mezclilla azul",
                    "precio_gemas": 10,
                    "precio_monedas": 100
                }
            ]
        }
    },
    {
        "nombre": "Leo",
        "genero": "masculino",
        "historia": "Leo es un asistente enfocado en análisis y datos.",
        "rol": "Analista",
        "subrol": "Datos",
        "idiomas_manejados": [
            ObjectId("67351df19039535afaae0e84"),
            ObjectId("67351df19039535afaae0e8c")
        ],
        "rasgoPersonalidad": "lógico",
        "voz": {
            "tipo": "masculina",
            "tono": "seguro"
        },
        "avatar": {
            "intereses": ["Ciencia de datos", "Lógica"],
            "apariencia": [
                {
                    "tipo": "cabello",
                    "descripcion": "Cabello negro y corto",
                    "imagen": null
                },
                {
                    "tipo": "piel",
                    "descripcion": "Piel morena",
                    "imagen": null
                }
            ],
            "ropa": [
                {
                    "tipo": "camisa",
                    "descripcion": "Camisa formal azul",
                    "precio_gemas": 12,
                    "precio_monedas": 120
                },
                {
                    "tipo": "pantalón",
                    "descripcion": "Pantalón negro",
                    "precio_gemas": 10,
                    "precio_monedas": 100
                }
            ]
        }
    }
]);

db.asistenteVirtual.insertOne({
    "nombre": "Emma",
    "genero": "femenino",
    "historia": "Emma es una asistente diseñada para ayudar con la educación en múltiples idiomas.",
    "rol": "Educadora",
    "subrol": "Idiomas",
    "idiomas_manejados": [
        ObjectId("67351df19039535afaae0e83"),
        ObjectId("67351df19039535afaae0e84"),
        ObjectId("67351df19039535afaae0e86")
    ],
    "rasgoPersonalidad": "soñador",
    "voz": {
        "tipo": "femenina",
        "tono": "alegre"
    },
    "avatar": {
        "intereses": ["Enseñanza", "Aprendizaje", "Comunicación"],
        "apariencia": [
            {
                "tipo": "cabello",
                "descripcion": "Cabello castaño claro, largo y liso",
                "imagen": "https://example.com/avatar-emma-hair.jpg"
            },
            {
                "tipo": "piel",
                "descripcion": "Piel clara",
                "imagen": null
            }
        ],
        "ropa": [
            {
                "tipo": "blazer",
                "descripcion": "Blazer color beige",
                "precio_gemas": 20,
                "precio_monedas": 200
            },
            {
                "tipo": "pantalón",
                "descripcion": "Pantalón formal negro",
                "precio_gemas": 15,
                "precio_monedas": 150
            }
        ]
    }
});

db.asistenteVirtual.insertMany([
    {
        "nombre": "Sofía",
        "genero": "femenino",
        "historia": "Sofía es una asistente enfocada en fomentar la creatividad a través del arte.",
        "rol": "Mentora",
        "subrol": "Arte y diseño",
        "idiomas_manejados": [
            ObjectId("67351df19039535afaae0e84"),
            ObjectId("67351df19039535afaae0e85")
        ],
        "rasgoPersonalidad": "artístico",
        "voz": {
            "tipo": "femenina",
            "tono": "alegre"
        },
        "avatar": {
            "intereses": ["Arte", "Diseño gráfico", "Ilustración"],
            "apariencia": [
                {
                    "tipo": "cabello",
                    "descripcion": "Cabello corto y púrpura",
                    "imagen": "https://example.com/avatar-sofia-hair.jpg"
                },
                {
                    "tipo": "piel",
                    "descripcion": "Piel clara",
                    "imagen": null
                }
            ],
            "ropa": [
                {
                    "tipo": "chaqueta",
                    "descripcion": "Chaqueta de mezclilla personalizada",
                    "precio_gemas": 25,
                    "precio_monedas": 250
                },
                {
                    "tipo": "pantalón",
                    "descripcion": "Pantalón blanco ajustado",
                    "precio_gemas": 15,
                    "precio_monedas": 150
                }
            ]
        }
    },
    {
        "nombre": "Lucas",
        "genero": "masculino",
        "historia": "Lucas es un asistente especializado en datos y análisis de negocios.",
        "rol": "Analista",
        "subrol": "Ciencia de datos",
        "idiomas_manejados": [
            ObjectId("67351df19039535afaae0e84"),
            ObjectId("67351df19039535afaae0e8c")
        ],
        "rasgoPersonalidad": "lógico",
        "voz": {
            "tipo": "masculina",
            "tono": "seguro"
        },
        "avatar": {
            "intereses": ["Datos", "Estadística", "Modelos predictivos"],
            "apariencia": [
                {
                    "tipo": "cabello",
                    "descripcion": "Cabello corto y oscuro",
                    "imagen": null
                },
                {
                    "tipo": "piel",
                    "descripcion": "Piel morena",
                    "imagen": null
                }
            ],
            "ropa": [
                {
                    "tipo": "camisa",
                    "descripcion": "Camisa azul claro",
                    "precio_gemas": 10,
                    "precio_monedas": 100
                },
                {
                    "tipo": "pantalón",
                    "descripcion": "Pantalón gris formal",
                    "precio_gemas": 15,
                    "precio_monedas": 150
                }
            ]
        }
    },
    {
        "nombre": "Elena",
        "genero": "femenino",
        "historia": "Elena es una asistente dedicada al bienestar y el ejercicio.",
        "rol": "Entrenadora personal",
        "subrol": "Salud y fitness",
        "idiomas_manejados": [
            ObjectId("67351df19039535afaae0e83"),
            ObjectId("67351df19039535afaae0e84")
        ],
        "rasgoPersonalidad": "energético",
        "voz": {
            "tipo": "femenina",
            "tono": "enérgico"
        },
        "avatar": {
            "intereses": ["Deportes", "Salud", "Nutrición"],
            "apariencia": [
                {
                    "tipo": "cabello",
                    "descripcion": "Cabello largo y castaño claro",
                    "imagen": "https://example.com/avatar-elena-hair.jpg"
                },
                {
                    "tipo": "piel",
                    "descripcion": "Piel clara",
                    "imagen": null
                }
            ],
            "ropa": [
                {
                    "tipo": "camiseta",
                    "descripcion": "Camiseta deportiva verde",
                    "precio_gemas": 12,
                    "precio_monedas": 120
                },
                {
                    "tipo": "shorts",
                    "descripcion": "Shorts deportivos negros",
                    "precio_gemas": 10,
                    "precio_monedas": 100
                }
            ]
        }
    },
    {
        "nombre": "Oliver",
        "genero": "masculino",
        "historia": "Oliver es un asistente apasionado por la historia y la cultura global.",
        "rol": "Guía",
        "subrol": "Historia y cultura",
        "idiomas_manejados": [
            ObjectId("67351df19039535afaae0e83"),
            ObjectId("67351df19039535afaae0e87")
        ],
        "rasgoPersonalidad": "soñador",
        "voz": {
            "tipo": "masculina",
            "tono": "calmo"
        },
        "avatar": {
            "intereses": ["Historia", "Artes culturales", "Viajes"],
            "apariencia": [
                {
                    "tipo": "cabello",
                    "descripcion": "Cabello corto y rubio oscuro",
                    "imagen": null
                },
                {
                    "tipo": "piel",
                    "descripcion": "Piel clara",
                    "imagen": null
                }
            ],
            "ropa": [
                {
                    "tipo": "camisa",
                    "descripcion": "Camisa blanca con estampado cultural",
                    "precio_gemas": 15,
                    "precio_monedas": 150
                },
                {
                    "tipo": "pantalón",
                    "descripcion": "Pantalón beige",
                    "precio_gemas": 10,
                    "precio_monedas": 100
                }
            ]
        }
    },
    {
        "nombre": "Luna",
        "genero": "femenino",
        "historia": "Luna es una asistente enfocada en ayudar a aprender idiomas de forma interactiva.",
        "rol": "Educadora",
        "subrol": "Aprendizaje de idiomas",
        "idiomas_manejados": [
            ObjectId("67351df19039535afaae0e84"),
            ObjectId("67351df19039535afaae0e8a")
        ],
        "rasgoPersonalidad": "seguro",
        "voz": {
            "tipo": "femenina",
            "tono": "optimista"
        },
        "avatar": {
            "intereses": ["Idiomas", "Cultura japonesa", "Tecnología educativa"],
            "apariencia": [
                {
                    "tipo": "cabello",
                    "descripcion": "Cabello negro y largo con flequillo",
                    "imagen": "https://example.com/avatar-luna-hair.jpg"
                },
                {
                    "tipo": "piel",
                    "descripcion": "Piel clara",
                    "imagen": null
                }
            ],
            "ropa": [
                {
                    "tipo": "kimono",
                    "descripcion": "Kimono moderno con diseño floral",
                    "precio_gemas": 25,
                    "precio_monedas": 250
                },
                {
                    "tipo": "sandalias",
                    "descripcion": "Sandalias tradicionales japonesas",
                    "precio_gemas": 10,
                    "precio_monedas": 100
                }
            ]
        }
    }
]);

db.compra.insertMany([
    {
        "email": "usuario1@example.com",
        "id_paquete": ObjectId("673552a812d6c7b2f07102e4"),
        "fecha": new Date("2023-11-01"),
        "hora": new Date("2023-11-01T10:00:00Z"),
        "metodo_pago": "tarjeta de credito"
    },
    {
        "email": "usuario2@example.com",
        "id_paquete": ObjectId("673552a812d6c7b2f07102e5"),
        "fecha": new Date("2023-11-02"),
        "hora": new Date("2023-11-02T11:30:00Z"),
        "metodo_pago": "tarjeta de credito"
    },
    {
        "email": "usuario3@example.com",
        "id_paquete": ObjectId("673552a812d6c7b2f07102e6"),
        "fecha": new Date("2023-11-03"),
        "hora": new Date("2023-11-03T14:00:00Z"),
        "metodo_pago": "tarjeta de credito"
    },
    {
        "email": "usuario4@example.com",
        "id_paquete": ObjectId("673552a812d6c7b2f07102e7"),
        "fecha": new Date("2023-11-04"),
        "hora": new Date("2023-11-04T09:15:00Z"),
        "metodo_pago": "tarjeta de credito"
    },
    {
        "email": "usuario5@example.com",
        "id_paquete": ObjectId("673552a812d6c7b2f07102e8"),
        "fecha": new Date("2023-11-05"),
        "hora": new Date("2023-11-05T16:30:00Z"),
        "metodo_pago": "tarjeta de credito"
    },
    {
        "email": "usuario6@example.com",
        "id_paquete": ObjectId("673552a812d6c7b2f07102e9"),
        "fecha": new Date("2023-11-06"),
        "hora": new Date("2023-11-06T18:00:00Z"),
        "metodo_pago": "tarjeta de credito"
    },
    {
        "email": "usuario7@example.com",
        "id_paquete": ObjectId("673552a812d6c7b2f07102ea"),
        "fecha": new Date("2023-11-07"),
        "hora": new Date("2023-11-07T13:45:00Z"),
        "metodo_pago": "tarjeta de credito"
    },
    {
        "email": "usuario8@example.com",
        "id_paquete": ObjectId("673552a812d6c7b2f07102eb"),
        "fecha": new Date("2023-11-08"),
        "hora": new Date("2023-11-08T15:20:00Z"),
        "metodo_pago": "tarjeta de credito"
    },
    {
        "email": "usuario9@example.com",
        "id_paquete": ObjectId("673552a812d6c7b2f07102e5"),
        "fecha": new Date("2023-11-09"),
        "hora": new Date("2023-11-09T10:40:00Z"),
        "metodo_pago": "tarjeta de credito"
    },
    {
        "email": "usuario10@example.com",
        "id_paquete": ObjectId("673552a812d6c7b2f07102e6"),
        "fecha": new Date("2023-11-10"),
        "hora": new Date("2023-11-10T17:25:00Z"),
        "metodo_pago": "tarjeta de credito"
    }
]);

db.idioma.insertMany([
    {
        "_id": ObjectId("67351df19039535afaae0e83"),
        "nombre": "Español"
    },
    {
        "_id": ObjectId("67351df19039535afaae0e84"),
        "nombre": "Inglés"
    },
    {
        "_id": ObjectId("67351df19039535afaae0e85"),
        "nombre": "Portugués"
    },
    {
        "_id": ObjectId("67351df19039535afaae0e86"),
        "nombre": "Francés"
    },
    {
        "_id": ObjectId("67351df19039535afaae0e87"),
        "nombre": "Alemán"
    },
    {
        "_id": ObjectId("67351df19039535afaae0e88"),
        "nombre": "Italiano"
    },
    {
        "_id": ObjectId("67351df19039535afaae0e89"),
        "nombre": "Chino Mandarín"
    },
    {
        "_id": ObjectId("67351df19039535afaae0e8a"),
        "nombre": "Japonés"
    },
    {
        "_id": ObjectId("67351df19039535afaae0e8b"),
        "nombre": "Coreano"
    },
    {
        "_id": ObjectId("67351df19039535afaae0e8c"),
        "nombre": "Ruso"
    },
    {
        "_id": ObjectId("67351df19039535afaae0e8d"),
        "nombre": "Árabe"
    },
    {
        "_id": ObjectId("67351df19039535afaae0e8e"),
        "nombre": "Hindi"
    },
    {
        "_id": ObjectId("67351df19039535afaae0e8f"),
        "nombre": "Sueco"
    },
    {
        "_id": ObjectId("67351df19039535afaae0e90"),
        "nombre": "Danés"
    },
    {
        "_id": ObjectId("67351df19039535afaae0e91"),
        "nombre": "Noruego"
    }
]);


db.integracion.insertMany([
    {
        "email": "usuario1@example.com",
        "id_app": ObjectId("67351c789039535afaae0e71"),
        "fecha_confirmacion": new Date("2023-10-01"),
        "hora_confirmacion": new Date("2023-10-01T10:30:00Z")
    },
    {
        "email": "usuario2@example.com",
        "id_app": ObjectId("67351c789039535afaae0e72"),
        "fecha_confirmacion": new Date("2023-10-02"),
        "hora_confirmacion": new Date("2023-10-02T14:00:00Z")
    },
    {
        "email": "usuario3@example.com",
        "id_app": ObjectId("67351c789039535afaae0e73"),
        "fecha_confirmacion": new Date("2023-10-03"),
        "hora_confirmacion": new Date("2023-10-03T09:15:00Z")
    },
    {
        "email": "usuario4@example.com",
        "id_app": ObjectId("67351c789039535afaae0e74"),
        "fecha_confirmacion": new Date("2023-10-04"),
        "hora_confirmacion": new Date("2023-10-04T11:45:00Z")
    },
    {
        "email": "usuario5@example.com",
        "id_app": ObjectId("67351c789039535afaae0e75"),
        "fecha_confirmacion": new Date("2023-10-05"),
        "hora_confirmacion": new Date("2023-10-05T16:30:00Z")
    }
]);


db.pais.insertMany([
    {
        "_id": ObjectId("67351fd39039535afaae0eab"),
        "nombre_pais": "Uruguay"
    },
    {
        "_id": ObjectId("67351fd39039535afaae0eac"),
        "nombre_pais": "Argentina"
    },
    {
        "_id": ObjectId("67351fd39039535afaae0ead"),
        "nombre_pais": "Brasil"
    },
    {
        "_id": ObjectId("67351fd39039535afaae0eae"),
        "nombre_pais": "Chile"
    },
    {
        "_id": ObjectId("67351fd39039535afaae0eaf"),
        "nombre_pais": "Paraguay"
    },
    {
        "_id": ObjectId("67351fd39039535afaae0eb0"),
        "nombre_pais": "Estados Unidos"
    },
    {
        "_id": ObjectId("67351fd39039535afaae0eb1"),
        "nombre_pais": "Canadá"
    },
    {
        "_id": ObjectId("67351fd39039535afaae0eb2"),
        "nombre_pais": "México"
    },
    {
        "_id": ObjectId("67351fd39039535afaae0eb3"),
        "nombre_pais": "España"
    },
    {
        "_id": ObjectId("67351fd39039535afaae0eb4"),
        "nombre_pais": "Francia"
    },
    {
        "_id": ObjectId("67351fd39039535afaae0eb5"),
        "nombre_pais": "Alemania"
    },
    {
        "_id": ObjectId("67351fd39039535afaae0eb6"),
        "nombre_pais": "Italia"
    },
    {
        "_id": ObjectId("67351fd39039535afaae0eb7"),
        "nombre_pais": "Japón"
    },
    {
        "_id": ObjectId("67351fd39039535afaae0eb8"),
        "nombre_pais": "China"
    },
    {
        "_id": ObjectId("67351fd39039535afaae0eb9"),
        "nombre_pais": "India"
    }
]);


db.paquete.insertMany([
    {
        "_id": ObjectId("673552a812d6c7b2f07102e4"),
        "tipo": "gemas",
        "cantidad": 100,
        "importe": Double(9.99),
        "descuento": Double(0.0)
    },
    {
        "_id": ObjectId("673552a812d6c7b2f07102e5"),
        "tipo": "gemas",
        "cantidad": 500,
        "importe": Double(39.99),
        "descuento": Double(5.0)
    },
    {
        "_id": ObjectId("673552a812d6c7b2f07102e6"),
        "tipo": "gemas",
        "cantidad": 1000,
        "importe": Double(74.99),
        "descuento": Double(10.0)
    },
    {
        "_id": ObjectId("673552a812d6c7b2f07102e7"),
        "tipo": "monedas",
        "cantidad": 1000,
        "importe": Double(4.99),
        "descuento": Double(0.0)
    },
    {
        "_id": ObjectId("673552a812d6c7b2f07102e8"),
        "tipo": "monedas",
        "cantidad": 5000,
        "importe": Double(19.99),
        "descuento": Double(2.0)
    },
    {
        "_id": ObjectId("673552a812d6c7b2f07102e9"),
        "tipo": "monedas",
        "cantidad": 10000,
        "importe": Double(34.99),
        "descuento": Double(5.0)
    },
    {
        "_id": ObjectId("673552a812d6c7b2f07102ea"),
        "tipo": "gemas",
        "cantidad": 2000,
        "importe": Double(99.99),
        "descuento": Double(15.0)
    },
    {
        "_id": ObjectId("673552a812d6c7b2f07102eb"),
        "tipo": "monedas",
        "cantidad": 20000,
        "importe": Double(59.99),
        "descuento": Double(10.0)
    }
]);


db.suscripcion.insertMany([
    {
        "_id": ObjectId("673554613249d5115ebee6cc"),
        "precio": Double(9.99),
        "tipo": "mensual"
    },
    {
        "_id": ObjectId("673554613249d5115ebee6cd"),
        "precio": Double(99.99),
        "tipo": "anual"
    },
    {
        "_id": ObjectId("673554613249d5115ebee6ce"),
        "precio": Double(299.99),
        "tipo": "de por vida"
    },
    {
        "_id": ObjectId("673554693249d5115ebee6cf"),
        "precio": Double(0.0),
        "tipo": "gratis"
    }
]);

db.usuario.insertMany([
    {
        _id: ObjectId("673b8fe5533500caa62a6a04"),
        email: "usuario1@example.com",
        nombre: "Juan Pérez",
        pass: "password123",
        fecha_nac: new Date("1995-05-15T00:00:00.000Z"),
        fecha_reg: new Date("2023-01-01T00:00:00.000Z"),
        rango_edad: "25-34",
        genero: "masculino",
        telefono: "099123456",
        id_suscripcion: ObjectId("673554613249d5115ebee6cc"),
        id_pais: ObjectId("67351fd39039535afaae0eab"),
        id_asistente: ObjectId("67356aac4bdccd924d1bcf78"),
        idiomas_aprendidos: [
            ObjectId("67351df19039535afaae0e83"),
            ObjectId("67351df19039535afaae0e84")
        ],
        billetera: {
            id_billetera: ObjectId("673552a812d6c7b2f07102e4"),
            cant_gemas: 100,
            cant_monedas: 500
        },
        progreso_aprendizaje: {
            sesiones_completadas: 10,
            niveles_alcanzados: ["Básico"],
            logros: [
                {
                    nombre: "Certificado Básico de Español",
                    fecha_obtencion: new Date("2024-01-01T00:00:00.000Z"),
                    nivel_dominio: "Básico"
                }
            ]
        }
    },
    {
        _id: ObjectId("673b8fe5533500caa62a6a05"),
        email: "usuario2@example.com",
        nombre: "María Gómez",
        pass: "securepass456",
        fecha_nac: new Date("1988-07-22T00:00:00.000Z"),
        fecha_reg: new Date("2023-03-10T00:00:00.000Z"),
        rango_edad: "35-44",
        genero: "femenino",
        telefono: "094876543",
        id_suscripcion: ObjectId("673554613249d5115ebee6cd"),
        id_pais: ObjectId("67351fd39039535afaae0eac"),
        id_asistente: ObjectId("67356aac4bdccd924d1bcf79"),
        idiomas_aprendidos: [
            ObjectId("67351df19039535afaae0e83"),
            ObjectId("67351df19039535afaae0e85")
        ],
        billetera: {
            id_billetera: ObjectId("673552a812d6c7b2f07102e5"),
            cant_gemas: 500,
            cant_monedas: 1000
        },
        progreso_aprendizaje: {
            sesiones_completadas: 20,
            niveles_alcanzados: ["Básico", "Intermedio"],
            logros: [
                {
                    nombre: "Certificado Básico de Inglés",
                    fecha_obtencion: new Date("2023-12-01T00:00:00.000Z"),
                    nivel_dominio: "Básico"
                },
                {
                    nombre: "Certificado Intermedio de Español",
                    fecha_obtencion: new Date("2024-06-01T00:00:00.000Z"),
                    nivel_dominio: "Intermedio"
                }
            ]
        }
    },
    {
        _id: ObjectId("673b8fe5533500caa62a6a06"),
        email: "usuario3@example.com",
        nombre: "Lucas Silva",
        pass: "mypassword789",
        fecha_nac: new Date("1990-02-10T00:00:00.000Z"),
        fecha_reg: new Date("2023-06-20T00:00:00.000Z"),
        rango_edad: "25-34",
        genero: "masculino",
        telefono: "093456789",
        id_suscripcion: ObjectId("673554613249d5115ebee6ce"),
        id_pais: ObjectId("67351fd39039535afaae0ead"),
        id_asistente: ObjectId("67356aac4bdccd924d1bcf7a"),
        idiomas_aprendidos: [
            ObjectId("67351df19039535afaae0e84"),
            ObjectId("67351df19039535afaae0e86")
        ],
        billetera: {
            id_billetera: ObjectId("673552a812d6c7b2f07102e6"),
            cant_gemas: 1000,
            cant_monedas: 2000
        },
        progreso_aprendizaje: {
            sesiones_completadas: 15,
            niveles_alcanzados: ["Básico"],
            logros: [
                {
                    nombre: "Certificado Básico de Alemán",
                    fecha_obtencion: new Date("2024-02-15T00:00:00.000Z"),
                    nivel_dominio: "Básico"
                }
            ]
        }
    }
    ,
    {
        _id: ObjectId("673b9389533500caa62a6a07"),
        email: "usuario4@example.com",
        nombre: "Sofía López",
        pass: "password456",
        fecha_nac: new Date("2000-09-05T00:00:00.000Z"),
        fecha_reg: new Date("2023-09-15T00:00:00.000Z"),
        rango_edad: "18-24",
        genero: "femenino",
        telefono: "091234567",
        id_suscripcion: ObjectId("673554693249d5115ebee6cf"),
        id_pais: ObjectId("67351fd39039535afaae0eae"),
        id_asistente: ObjectId("67356aac4bdccd924d1bcf7b"),
        idiomas_aprendidos: [
            ObjectId("67351df19039535afaae0e84"),
            ObjectId("67351df19039535afaae0e87")
        ],
        billetera: {
            id_billetera: ObjectId("673552a812d6c7b2f07102e7"),
            cant_gemas: 0,
            cant_monedas: 500
        },
        progreso_aprendizaje: {
            sesiones_completadas: 5,
            niveles_alcanzados: ["Básico"],
            logros: []
        }
    },
    {
        _id: ObjectId("673b9389533500caa62a6a08"),
        email: "usuario5@example.com",
        nombre: "Elena Martínez",
        pass: "fitlife123",
        fecha_nac: new Date("1992-11-10T00:00:00.000Z"),
        fecha_reg: new Date("2023-05-12T00:00:00.000Z"),
        rango_edad: "25-34",
        genero: "femenino",
        telefono: "098765432",
        id_suscripcion: ObjectId("673554613249d5115ebee6cd"),
        id_pais: ObjectId("67351fd39039535afaae0eb3"),
        id_asistente: ObjectId("67356aac4bdccd924d1bcf7c"),
        idiomas_aprendidos: [
            ObjectId("67351df19039535afaae0e83"),
            ObjectId("67351df19039535afaae0e84")
        ],
        billetera: {
            id_billetera: ObjectId("673552a812d6c7b2f07102e5"),
            cant_gemas: 500,
            cant_monedas: 750
        },
        progreso_aprendizaje: {
            sesiones_completadas: 30,
            niveles_alcanzados: ["Básico", "Intermedio"],
            logros: [
                {
                    nombre: "Certificado Básico de Inglés",
                    fecha_obtencion: new Date("2024-01-10T00:00:00.000Z"),
                    nivel_dominio: "Básico"
                },
                {
                    nombre: "Certificado Intermedio de Español",
                    fecha_obtencion: new Date("2024-05-20T00:00:00.000Z"),
                    nivel_dominio: "Intermedio"
                }
            ]
        }
    },
    {
        _id: ObjectId("673b9389533500caa62a6a09"),
        email: "usuario6@example.com",
        nombre: "Oliver Brown",
        pass: "historybuff456",
        fecha_nac: new Date("1985-04-15T00:00:00.000Z"),
        fecha_reg: new Date("2023-04-01T00:00:00.000Z"),
        rango_edad: "35-44",
        genero: "masculino",
        telefono: "093987654",
        id_suscripcion: ObjectId("673554613249d5115ebee6ce"),
        id_pais: ObjectId("67351fd39039535afaae0eb5"),
        id_asistente: ObjectId("67356aac4bdccd924d1bcf7d"),
        idiomas_aprendidos: [
            ObjectId("67351df19039535afaae0e84"),
            ObjectId("67351df19039535afaae0e86")
        ],
        billetera: {
            id_billetera: ObjectId("673552a812d6c7b2f07102e6"),
            cant_gemas: 1000,
            cant_monedas: 2000
        },
        progreso_aprendizaje: {
            sesiones_completadas: 20,
            niveles_alcanzados: ["Básico", "Intermedio"],
            logros: [
                {
                    nombre: "Certificado Básico de Alemán",
                    fecha_obtencion: new Date("2024-02-15T00:00:00.000Z"),
                    nivel_dominio: "Básico"
                },
                {
                    nombre: "Certificado Intermedio de Inglés",
                    fecha_obtencion: new Date("2024-03-01T00:00:00.000Z"),
                    nivel_dominio: "Intermedio"
                }
            ]
        }
    },
    {
        _id: ObjectId("673b9423533500caa62a6a0a"),
        email: "usuario7@example.com",
        nombre: "Luna Kim",
        pass: "languagepro789",
        fecha_nac: new Date("2000-12-01T00:00:00.000Z"),
        fecha_reg: new Date("2023-06-30T00:00:00.000Z"),
        rango_edad: "18-24",
        genero: "femenino",
        telefono: "091876543",
        id_suscripcion: ObjectId("673554693249d5115ebee6cf"),
        id_pais: ObjectId("67351fd39039535afaae0eb8"),
        id_asistente: ObjectId("67356aac4bdccd924d1bcf7e"),
        idiomas_aprendidos: [
            ObjectId("67351df19039535afaae0e83"),
            ObjectId("67351df19039535afaae0e8a")
        ],
        billetera: {
            id_billetera: ObjectId("673552a812d6c7b2f07102e7"),
            cant_gemas: 0,
            cant_monedas: 300
        },
        progreso_aprendizaje: {
            sesiones_completadas: 7,
            niveles_alcanzados: ["Básico"],
            logros: [
                {
                    nombre: "Certificado Básico de Japonés",
                    fecha_obtencion: new Date("2024-01-20T00:00:00.000Z"),
                    nivel_dominio: "Básico"
                }
            ]
        }
    }
    ,
    {
        _id: ObjectId("673b9423533500caa62a6a0b"),
        email: "usuario8@example.com",
        nombre: "Kai Zhang",
        pass: "creativity2023",
        fecha_nac: new Date("1995-06-20T00:00:00.000Z"),
        fecha_reg: new Date("2023-02-15T00:00:00.000Z"),
        rango_edad: "25-34",
        genero: "no binario",
        telefono: "094456789",
        id_suscripcion: ObjectId("673554613249d5115ebee6cc"),
        id_pais: ObjectId("67351fd39039535afaae0eb5"),
        id_asistente: ObjectId("67356aac4bdccd924d1bcf7f"),
        idiomas_aprendidos: [
            ObjectId("67351df19039535afaae0e84"),
            ObjectId("67351df19039535afaae0e8c")
        ],
        billetera: {
            id_billetera: ObjectId("673552a812d6c7b2f07102e5"),
            cant_gemas: 500,
            cant_monedas: 1000
        },
        progreso_aprendizaje: {
            sesiones_completadas: 12,
            niveles_alcanzados: ["Básico", "Intermedio"],
            logros: [
                {
                    nombre: "Certificado Básico de Alemán",
                    fecha_obtencion: new Date("2024-03-10T00:00:00.000Z"),
                    nivel_dominio: "Básico"
                },
                {
                    nombre: "Certificado Intermedio de Inglés",
                    fecha_obtencion: new Date("2024-06-01T00:00:00.000Z"),
                    nivel_dominio: "Intermedio"
                }
            ]
        }
    },
    {
        _id: ObjectId("673b9423533500caa62a6a0c"),
        email: "usuario9@example.com",
        nombre: "Emma Fischer",
        pass: "educate456",
        fecha_nac: new Date("1998-03-12T00:00:00.000Z"),
        fecha_reg: new Date("2023-03-25T00:00:00.000Z"),
        rango_edad: "25-34",
        genero: "femenino",
        telefono: "092345678",
        id_suscripcion: ObjectId("673554613249d5115ebee6ce"),
        id_pais: ObjectId("67351fd39039535afaae0eb6"),
        id_asistente: ObjectId("67356aac4bdccd924d1bcf80"),
        idiomas_aprendidos: [
            ObjectId("67351df19039535afaae0e83"),
            ObjectId("67351df19039535afaae0e87")
        ],
        billetera: {
            id_billetera: ObjectId("673552a812d6c7b2f07102e6"),
            cant_gemas: 1000,
            cant_monedas: 2000
        },
        progreso_aprendizaje: {
            sesiones_completadas: 20,
            niveles_alcanzados: ["Básico", "Intermedio"],
            logros: [
                {
                    nombre: "Certificado Básico de Italiano",
                    fecha_obtencion: new Date("2024-02-15T00:00:00.000Z"),
                    nivel_dominio: "Básico"
                },
                {
                    nombre: "Certificado Intermedio de Español",
                    fecha_obtencion: new Date("2024-03-01T00:00:00.000Z"),
                    nivel_dominio: "Intermedio"
                }
            ]
        }
    }
    ,
    {
        _id: ObjectId("673b9423533500caa62a6a0d"),
        email: "usuario10@example.com",
        nombre: "Santiago Rojas",
        pass: "securepass321",
        fecha_nac: new Date("1990-08-14T00:00:00.000Z"),
        fecha_reg: new Date("2023-07-01T00:00:00.000Z"),
        rango_edad: "25-34",
        genero: "masculino",
        telefono: "097654321",
        id_suscripcion: ObjectId("673554613249d5115ebee6cc"),
        id_pais: ObjectId("67351fd39039535afaae0eb2"),
        id_asistente: ObjectId("67356aac4bdccd924d1bcf81"),
        idiomas_aprendidos: [
            ObjectId("67351df19039535afaae0e83"),
            ObjectId("67351df19039535afaae0e84")
        ],
        billetera: {
            id_billetera: ObjectId("673552a812d6c7b2f07102e4"),
            cant_gemas: 100,
            cant_monedas: 500
        },
        progreso_aprendizaje: {
            sesiones_completadas: 10,
            niveles_alcanzados: ["Básico"],
            logros: [
                {
                    nombre: "Certificado Básico de Inglés",
                    fecha_obtencion: new Date("2023-12-01T00:00:00.000Z"),
                    nivel_dominio: "Básico"
                }
            ]
        }
    },
    {
        _id: ObjectId("673b9423533500caa62a6a0e"),
        email: "usuario11@example.com",
        nombre: "Gabriela Méndez",
        pass: "password789",
        fecha_nac: new Date("1987-01-25T00:00:00.000Z"),
        fecha_reg: new Date("2023-09-10T00:00:00.000Z"),
        rango_edad: "35-44",
        genero: "femenino",
        telefono: "099876543",
        id_suscripcion: ObjectId("673554613249d5115ebee6ce"),
        id_pais: ObjectId("67351fd39039535afaae0eb0"),
        id_asistente: ObjectId("67356aac4bdccd924d1bcf82"),
        idiomas_aprendidos: [
            ObjectId("67351df19039535afaae0e84"),
            ObjectId("67351df19039535afaae0e8c")
        ],
        billetera: {
            id_billetera: ObjectId("673552a812d6c7b2f07102e6"),
            cant_gemas: 1000,
            cant_monedas: 1500
        },
        progreso_aprendizaje: {
            sesiones_completadas: 25,
            niveles_alcanzados: ["Básico", "Intermedio"],
            logros: [
                {
                    nombre: "Certificado Básico de Inglés",
                    fecha_obtencion: new Date("2024-01-01T00:00:00.000Z"),
                    nivel_dominio: "Básico"
                },
                {
                    nombre: "Certificado Intermedio de Alemán",
                    fecha_obtencion: new Date("2024-06-01T00:00:00.000Z"),
                    nivel_dominio: "Intermedio"
                }
            ]
        }
    }
]);

// Indices:

db.aplicacion.createIndex(
    { nombre: 1 },
    { unique: true, name: "unique_nombre_aplicacion" }
);
db.idioma.createIndex(
    { nombre: 1 },
    { unique: true, name: "unique_nombre_idioma" }
);
db.pais.createIndex(
    { nombre_pais: 1 },
    { unique: true, name: "unique_nombre_pais" }
);
db.usuario.createIndex(
    { email: 1 },
    { unique: true, name: "unique_email_usuario" }
);

db.usuario.createIndex(
    { telefono: 1 },
    { unique: true, name: "unique_telefono_usuario" }
);