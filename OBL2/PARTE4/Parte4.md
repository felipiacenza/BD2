# Parte 4
¿Cómo aplicaron los conceptos del material de estudio en su modelado de MongoDB? Mencionar ejemplos específicos.

En el modelado de MongoDB, aplicamos varios conceptos que son característicos de MongoDB como lo es la desnormalización y el uso de documentos embebidos.

## Desnormalización:

Por ejemplo, para realizar el modelo de datos y tanscribir de Oracle a MongoDB hicimos el siguiente esquema:

### ¿Necesitan colección en mongoDB?
MongoDB prioriza la desnormlaización y embedido de datos, por lo tanto, parte de las tablas que se hicieron en Oracle por normalización no van a estar presentes como colecciones.

#### Tablas:
- RangoEdad --> no, se incluye como un campo en Usuario
- Suscripcion --> sí
- Pais --> sí
- Usuario --> sí
- Billetera --> sí
- AsistenteVirtual --> sí
- Idioma --> sí
- Voz --> no, se incluye como un campo en Asistente virtual
- Avatar --> no, se incluye como un campo en Asistente Virtual
- RasgoPersonalidad --> no, se incluye como un campo en Asistente virtual
- Interes --> no, se incluye como un array en Avatar
- Apariencia --> no, se incluye como un array en Avatar
- Ropa --> no, se incluye como un array en Avatar
- Paquete --> sí
- Aplicacion --> sí


#### Relaciones:
- personifica --> no, está tabla solo relacionaba un avatar con un asistente.
- integracion --> sí
- compra --> sí
- maneja --> no, se incluye como un array en Asistente Virtual
- aprende --> no, se incluye como un array en Usuario
- a_ropa --> no, se incluye como un array en Avatar
- a_inte --> no, se incluye como un array en Avatar
- a_rasgo --> no, se incluye como un array en Avatar
- a_apa --> no, se incluye como un array en Avatar
- tiene --> no, se incluye como una referencia al Asistente Virtual en Usuario


Como se puede obsvervar, hicimos éfasis en preguntarnos si cada tabla de Oracle pasaría a ser una colección en MongoDB. Llegamos a la conclusión que no todas las tablas pasarían a ser colecciones sino que, estarían dentro (embebidas) en otras colecciones. Esto es aplicar tanto desnormalización como ebebido de datos, pero principalmente el primer concepto.

## Uso de documentos embebidos
En nuestro modelado de MongoDB, los casos más destacados de uso de documentos embebidos se encuentran en las colecciones Usuarios y Asistentes Virtuales. Este enfoque permite agrupar información relevante directamente dentro del documento principal

Colección de Usuarios
En la colección Usuarios, integramos diversos datos como documentos embebidos para representar información relacionada con el usuario de forma más natural y accesible. Algunos ejemplos destacados son:

  - Billetera
    Los datos de la billetera del usuario, como la cantidad de gemas y monedas, están embebidos dentro del documento del usuario. Esto facilita acceder a esta información directamente sin depender de una colección separada.

  - Idiomas Aprendidos
    Los idiomas que el usuario está aprendiendo se almacenan como un array de identificadores embebidos en el documento del usuario. Esto permite consultas rápidas para obtener los idiomas asociados a un usuario específico.

  - Progreso de Aprendizaje
    El progreso de aprendizaje del usuario, que incluye datos como sesiones completadas, niveles alcanzados y logros obtenidos, se encuentra embebido como un objeto dentro de la colección. Este diseño permite realizar consultas directas sobre el progreso del usuario sin necesidad de consultar múltiples colecciones.

A continuación, se muestra en negrita los datos embebidos en la colección de Usuarios

```
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
```

En la colección Asistentes Virtuales, una de las principlaes decisionse de diseño fue embeber los datos del avatar directamente dentro del documento del asistente virtual.

Embebido de información en Asistente Virtual
  - Idiomas manejados
    En lugar de crear relaciones separadas con una colección de idiomas, estos se almacenan como un array de identificadores dentro del asistente virtual. Esto permite acceder fácilmente a los idiomas que el asistente maneja.

  - Voz
    Los atributos relacionados con la voz del asistente, como su tipo y tono, están embebidos directamente en el documento.

  - Rol y Sub-rol
    Tanto el rol como el sub-rol del asistente virtual están integrados como atributos dentro del documento, sin depender de relaciones con otras colecciones.

  - Rasgos de Personalidad
    Los rasgos de personalidad están también embebidos como atributos en el asistente virtual, simplificando la gestión de estos datos.

Embebido de Información del Avatar
Dentro del avatar, se aplicó un diseño jerárquico utilizando arrays para almacenar información más específica:
  - Intereses: 
    Se almacenan como un array de strings que representan los intereses del avatar.

  - Apariencia:
    Incluye un array de objetos que describen atributos como tipo, descripción e imagen de la apariencia.

  - Ropa:
    Se organiza en un array de objetos que detallan cada prenda de ropa, incluyendo tipo, descripción y precios en gemas o monedas.


A continuación, se muestra en negrita los datos embebidos en la colección de Asistentes Virtuales:

```
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
```