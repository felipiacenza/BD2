db.integracion.insertMany([
    {
        "email": "usuario1@example.com",
        "id_app": ObjectId("67351c789039535afaae0e71"), // Gestor Financiero
        "fecha_confirmacion": new Date("2023-10-01"),
        "hora_confirmacion": new Date("2023-10-01T10:30:00Z")
    },
    {
        "email": "usuario2@example.com",
        "id_app": ObjectId("67351c789039535afaae0e72"), // Planificador de Tareas
        "fecha_confirmacion": new Date("2023-10-02"),
        "hora_confirmacion": new Date("2023-10-02T14:00:00Z")
    },
    {
        "email": "usuario3@example.com",
        "id_app": ObjectId("67351c789039535afaae0e73"), // Juego de Estrategia
        "fecha_confirmacion": new Date("2023-10-03"),
        "hora_confirmacion": new Date("2023-10-03T09:15:00Z")
    },
    {
        "email": "usuario4@example.com",
        "id_app": ObjectId("67351c789039535afaae0e74"), // App de Ejercicio
        "fecha_confirmacion": new Date("2023-10-04"),
        "hora_confirmacion": new Date("2023-10-04T11:45:00Z")
    },
    {
        "email": "usuario5@example.com",
        "id_app": ObjectId("67351c789039535afaae0e75"), // Enciclopedia Virtual
        "fecha_confirmacion": new Date("2023-10-05"),
        "hora_confirmacion": new Date("2023-10-05T16:30:00Z")
    }
]);
