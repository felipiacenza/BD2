db.usuario.insertOne({
    "email": "usuario1@example.com",
    "nombre": "Juan Pérez",
    "pass": "password123",
    "fecha_nac": new Date("1995-05-15"),
    "fecha_reg": new Date("2023-01-01"),
    "rango_edad": "25-34",
    "genero": "masculino",
    "telefono": "099123456",
    "id_suscripcion": ObjectId("673554613249d5115ebee6cc"),
    "id_pais": ObjectId("67351fd39039535afaae0eab"),
    "id_asistente": ObjectId("67355cf412d6c7b2f0710310"),
    "idiomas_aprendidos": [
        ObjectId("67351df19039535afaae0e83"),
        ObjectId("67351df19039535afaae0e84")
    ],
    "billetera": {
        "id_billetera": ObjectId("673552a812d6c7b2f07102e4"),
        "cant_gemas": 100,
        "cant_monedas": 500
    }
});

db.usuario.insertMany([
    {
        "email": "usuario2@example.com",
        "nombre": "María Gómez",
        "pass": "securepass456",
        "fecha_nac": new Date("1988-07-22"),
        "fecha_reg": new Date("2023-03-10"),
        "rango_edad": "35-44",
        "genero": "femenino",
        "telefono": "094876543",
        "id_suscripcion": ObjectId("673554613249d5115ebee6cd"),
        "id_pais": ObjectId("67351fd39039535afaae0eac"),
        "id_asistente": ObjectId("67355cf412d6c7b2f0710311"),
        "idiomas_aprendidos": [
            ObjectId("67351df19039535afaae0e83"),
            ObjectId("67351df19039535afaae0e85")
        ],
        "billetera": {
            "id_billetera": ObjectId("673552a812d6c7b2f07102e5"),
            "cant_gemas": 500,
            "cant_monedas": 1000
        }
    },
    {
        "email": "usuario3@example.com",
        "nombre": "Lucas Silva",
        "pass": "mypassword789",
        "fecha_nac": new Date("1990-02-10"),
        "fecha_reg": new Date("2023-06-20"),
        "rango_edad": "25-34",
        "genero": "masculino",
        "telefono": "093456789",
        "id_suscripcion": ObjectId("673554613249d5115ebee6ce"),
        "id_pais": ObjectId("67351fd39039535afaae0eaf"),
        "id_asistente": ObjectId("67355cf412d6c7b2f0710312"),
        "idiomas_aprendidos": [
            ObjectId("67351df19039535afaae0e84"),
            ObjectId("67351df19039535afaae0e86")
        ],
        "billetera": {
            "id_billetera": ObjectId("673552a812d6c7b2f07102e6"),
            "cant_gemas": 1000,
            "cant_monedas": 2000
        }
    },
    {
        "email": "usuario4@example.com",
        "nombre": "Sofía López",
        "pass": "password456",
        "fecha_nac": new Date("2000-09-05"),
        "fecha_reg": new Date("2023-09-15"),
        "rango_edad": "18-24",
        "genero": "femenino",
        "telefono": "091234567",
        "id_suscripcion": ObjectId("673554613249d5115ebee6cf"),
        "id_pais": ObjectId("67351fd39039535afaae0eae"),
        "id_asistente": ObjectId("67355cf412d6c7b2f0710313"),
        "idiomas_aprendidos": [
            ObjectId("67351df19039535afaae0e84"),
            ObjectId("67351df19039535afaae0e87")
        ],
        "billetera": {
            "id_billetera": ObjectId("673552a812d6c7b2f07102e7"),
            "cant_gemas": 0,
            "cant_monedas": 500
        }
    }
]);

db.usuario.insertMany([
    {
        "email": "usuario5@example.com",
        "nombre": "Elena Martínez",
        "pass": "fitlife123",
        "fecha_nac": new Date("1992-11-10"),
        "fecha_reg": new Date("2023-05-12"),
        "rango_edad": "25-34",
        "genero": "femenino",
        "telefono": "098765432",
        "id_suscripcion": ObjectId("673554613249d5115ebee6cd"),
        "id_pais": ObjectId("67351fd39039535afaae0eb3"),
        "id_asistente": ObjectId("67355cf412d6c7b2f0710314"),
        "idiomas_aprendidos": [
            ObjectId("67351df19039535afaae0e83"),
            ObjectId("67351df19039535afaae0e84")
        ],
        "billetera": {
            "id_billetera": ObjectId("673552a812d6c7b2f07102e5"),
            "cant_gemas": 500,
            "cant_monedas": 750
        }
    },
    {
        "email": "usuario6@example.com",
        "nombre": "Oliver Brown",
        "pass": "historybuff456",
        "fecha_nac": new Date("1985-04-15"),
        "fecha_reg": new Date("2023-04-01"),
        "rango_edad": "35-44",
        "genero": "masculino",
        "telefono": "093987654",
        "id_suscripcion": ObjectId("673554613249d5115ebee6ce"),
        "id_pais": ObjectId("67355e3212d6c7b2f0710316"),
        "id_asistente": ObjectId("67351df19039535afaae0e88"),
        "idiomas_aprendidos": [
            ObjectId("67351df19039535afaae0e84"),
            ObjectId("67351df19039535afaae0e86")
        ],
        "billetera": {
            "id_billetera": ObjectId("673552a812d6c7b2f07102e6"),
            "cant_gemas": 1000,
            "cant_monedas": 2000
        }
    },
    {
        "email": "usuario7@example.com",
        "nombre": "Luna Kim",
        "pass": "languagepro789",
        "fecha_nac": new Date("2000-12-01"),
        "fecha_reg": new Date("2023-06-30"),
        "rango_edad": "18-24",
        "genero": "femenino",
        "telefono": "091876543",
        "id_suscripcion": ObjectId("673554613249d5115ebee6cf"),
        "id_pais": ObjectId("67351fd39039535afaae0eb8"),
        "id_asistente": ObjectId("67355e8612d6c7b2f0710317"),
        "idiomas_aprendidos": [
            ObjectId("67351df19039535afaae0e83"),
            ObjectId("67351df19039535afaae0e8a")
        ],
        "billetera": {
            "id_billetera": ObjectId("673552a812d6c7b2f07102e7"),
            "cant_gemas": 0,
            "cant_monedas": 300
        }
    },
    {
        "email": "usuario8@example.com",
        "nombre": "Kai Zhang",
        "pass": "creativity2023",
        "fecha_nac": new Date("1995-06-20"),
        "fecha_reg": new Date("2023-02-15"),
        "rango_edad": "25-34",
        "genero": "no binario",
        "telefono": "094456789",
        "id_suscripcion": ObjectId("673554613249d5115ebee6cc"),
        "id_pais": ObjectId("67351fd39039535afaae0eb5"),
        "id_asistente": ObjectId("67355e8612d6c7b2f0710318"),
        "idiomas_aprendidos": [
            ObjectId("67351df19039535afaae0e84"),
            ObjectId("67351df19039535afaae0e8c")
        ],
        "billetera": {
            "id_billetera": ObjectId("673552a812d6c7b2f07102e5"),
            "cant_gemas": 500,
            "cant_monedas": 1000
        }
    },
    {
        "email": "usuario9@example.com",
        "nombre": "Emma Fischer",
        "pass": "educate456",
        "fecha_nac": new Date("1998-03-12"),
        "fecha_reg": new Date("2023-03-25"),
        "rango_edad": "25-34",
        "genero": "femenino",
        "telefono": "092345678",
        "id_suscripcion": ObjectId("673554613249d5115ebee6ce"),
        "id_pais": ObjectId("67351fd39039535afaae0eb6"),
        "id_asistente": ObjectId("67355e8612d6c7b2f0710319"),
        "idiomas_aprendidos": [
            ObjectId("67351df19039535afaae0e83"),
            ObjectId("67351df19039535afaae0e87")
        ],
        "billetera": {
            "id_billetera": ObjectId("673552a812d6c7b2f07102e6"),
            "cant_gemas": 1000,
            "cant_monedas": 2000
        }
    }
]);

db.usuario.insertMany([
    {
        "email": "usuario10@example.com",
        "nombre": "Santiago Rojas",
        "pass": "securepass321",
        "fecha_nac": new Date("1990-08-14"),
        "fecha_reg": new Date("2023-07-01"),
        "rango_edad": "25-34",
        "genero": "masculino",
        "telefono": "097654321",
        "id_suscripcion": ObjectId("673554613249d5115ebee6cc"),
        "id_pais": ObjectId("67351fd39039535afaae0eb2"),
        "id_asistente": ObjectId("67355e8612d6c7b2f071031a"),
        "idiomas_aprendidos": [
            ObjectId("67351df19039535afaae0e83"),
            ObjectId("67351df19039535afaae0e84")
        ],
        "billetera": {
            "id_billetera": ObjectId("673552a812d6c7b2f07102e4"),
            "cant_gemas": 100,
            "cant_monedas": 500
        }
    },
    {
        "email": "usuario11@example.com",
        "nombre": "Gabriela Méndez",
        "pass": "password789",
        "fecha_nac": new Date("1987-01-25"),
        "fecha_reg": new Date("2023-09-10"),
        "rango_edad": "35-44",
        "genero": "femenino",
        "telefono": "099876543",
        "id_suscripcion": ObjectId("673554613249d5115ebee6ce"),
        "id_pais": ObjectId("67351fd39039535afaae0eb0"),
        "id_asistente": ObjectId("67355e8612d6c7b2f071031b"),
        "idiomas_aprendidos": [
            ObjectId("67351df19039535afaae0e84"),
            ObjectId("67351df19039535afaae0e8c")
        ],
        "billetera": {
            "id_billetera": ObjectId("673552a812d6c7b2f07102e6"),
            "cant_gemas": 1000,
            "cant_monedas": 1500
        }
    }
]);
