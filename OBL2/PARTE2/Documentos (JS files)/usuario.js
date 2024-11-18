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