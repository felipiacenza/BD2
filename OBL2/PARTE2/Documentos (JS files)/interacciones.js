db.interacciones.insertMany([
    {
        id_usuario: ObjectId("673b8fe5533500caa62a6a04"),
        id_asistente: ObjectId("67356aac4bdccd924d1bcf78"),
        fecha: new Date("2024-01-15"),
        hora: "14:30",
        tipo_interaccion: "consulta",
        idioma: ObjectId("67351df19039535afaae0e83"),
        respuesta: "Claro, puedo ayudarte con eso. ¿Qué necesitas saber sobre el tema?"
    },
    {
        id_usuario: ObjectId("673b8fe5533500caa62a6a05"),
        id_asistente: ObjectId("67356aac4bdccd924d1bcf79"),
        fecha: new Date("2024-01-16"),
        hora: "09:45",
        tipo_interaccion: "tutoría",
        idioma: ObjectId("67351df19039535afaae0e85"),
        respuesta: "Hoy trabajaremos en mejorar tus habilidades gramaticales en inglés."
    },
    {
        id_usuario: ObjectId("673b8fe5533500caa62a6a06"),
        id_asistente: ObjectId("67356aac4bdccd924d1bcf7a"),
        fecha: new Date("2024-01-17"),
        hora: "16:10",
        tipo_interaccion: "conversación casual",
        idioma: ObjectId("67351df19039535afaae0e84"),
        respuesta: "Hola, ¿cómo estuvo tu día? ¿Algo emocionante que quieras compartir?"
    },
    {
        id_usuario: ObjectId("673b9389533500caa62a6a07"),
        id_asistente: ObjectId("67356aac4bdccd924d1bcf7b"),
        fecha: new Date("2024-01-18"),
        hora: "11:00",
        tipo_interaccion: "coaching",
        idioma: ObjectId("67351df19039535afaae0e87"),
        respuesta: "Hoy nos enfocaremos en establecer metas claras y alcanzables."
    },
    {
        id_usuario: ObjectId("673b9389533500caa62a6a08"),
        id_asistente: ObjectId("67356aac4bdccd924d1bcf7c"),
        fecha: new Date("2024-01-19"),
        hora: "18:20",
        tipo_interaccion: "consulta",
        idioma: ObjectId("67351df19039535afaae0e83"),
        respuesta: "Esa es una gran pregunta. Déjame investigar y te doy una respuesta detallada."
    }
]);
