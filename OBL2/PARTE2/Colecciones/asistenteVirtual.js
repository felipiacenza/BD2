db.createCollection('asistenteVirtual', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: [
        'id_asistente',
        'nombre',
        'idiomas_manejados',
        'voz',
        'avatar',
        'rasgoPersonalidad'
      ],
      properties: {
        id_asistente: {
          bsonType: 'int',
          description: 'Debe ser un entero único y obligatorio'
        },
        nombre: {
          bsonType: 'string',
          description: 'Debe ser una cadena no nula y obligatoria'
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
            bsonType: 'int'
          },
          description: 'Debe ser un array de enteros que representen los idiomas manejados'
        },
        rasgoPersonalidad: {
          bsonType: 'string',
          'enum': [
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
              'enum': [
                'femenina',
                'masculina'
              ],
              description: 'Debe ser \'femenina\' o \'masculina\''
            },
            tono: {
              bsonType: 'string',
              'enum': [
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
                bsonType: 'int'
              },
              description: 'Debe ser un array de enteros que representen los intereses'
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
                    bsonType: 'string',
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