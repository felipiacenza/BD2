db.asistenteVirtual.insertMany([
    {
        "nombre": "Lía",
        "genero": "femenino",
        "historia": "Lía es una asistente dedicada a la organización personal.",
        "rol": "Asistente personal",
        "subrol": "Organización",
        "idiomas_manejados": [
            ObjectId("67351df19039535afaae0e83"), // Español
            ObjectId("67351df19039535afaae0e84")  // Inglés
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
            ObjectId("67351df19039535afaae0e84"), // Inglés
            ObjectId("67351df19039535afaae0e85")  // Portugués
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
            ObjectId("67351df19039535afaae0e84"), // Inglés
            ObjectId("67351df19039535afaae0e86")  // Francés
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
            ObjectId("67351df19039535afaae0e83"), // Español
            ObjectId("67351df19039535afaae0e87")  // Alemán
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
            ObjectId("67351df19039535afaae0e84"), // Inglés
            ObjectId("67351df19039535afaae0e8c")  // Ruso
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
        ObjectId("67351df19039535afaae0e83"), // Español
        ObjectId("67351df19039535afaae0e84"), // Inglés
        ObjectId("67351df19039535afaae0e86")  // Francés
    ],
    "rasgoPersonalidad": "soñador", // Cambiado de "optimista" a "soñador"
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
            ObjectId("67351df19039535afaae0e84"), // Inglés
            ObjectId("67351df19039535afaae0e85")  // Portugués
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
            ObjectId("67351df19039535afaae0e84"), // Inglés
            ObjectId("67351df19039535afaae0e8c")  // Ruso
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
            ObjectId("67351df19039535afaae0e83"), // Español
            ObjectId("67351df19039535afaae0e84")  // Inglés
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
            ObjectId("67351df19039535afaae0e83"), // Español
            ObjectId("67351df19039535afaae0e87")  // Alemán
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
            ObjectId("67351df19039535afaae0e84"), // Inglés
            ObjectId("67351df19039535afaae0e8a")  // Japonés
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

