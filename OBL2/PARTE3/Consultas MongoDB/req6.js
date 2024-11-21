db.interacciones.aggregate([
    {
        $match: {
            id_usuario: ObjectId("USER_ID_AQUI"), // Reemplazar con el ID del usuario
            id_asistente: ObjectId("ASISTENTE_ID_AQUI"), // Reemplazar con el ID del asistente
            fecha: {
                $gte: new Date("YYYY-MM-DD"), // Fecha inicio del rango
                $lte: new Date("YYYY-MM-DD")  // Fecha fin del rango
            }
        }
    },
    {
        $group: {
            _id: "$tipo_interaccion", // Agrupar por tipo de interacción
            conversaciones: { $push: { fecha: "$fecha", hora: "$hora", respuesta: "$respuesta" } }
        }
    },
    {
        $sort: { "_id": 1 } // Ordenar por tipo de interacción
    }
]);
