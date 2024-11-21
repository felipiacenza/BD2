db.interacciones.find(
    {
        id_usuario: ObjectId("USER_ID_AQUI"),
        fecha: { $gte: new Date(new Date() - 7 * 24 * 60 * 60 * 1000) },
        respuesta: { $regex: "TEXTO_A_BUSCAR", $options: "i" }
    },
    {
        respuesta: 1, // Proyección para mostrar solo la respuesta
        fecha: 1,
        hora: 1
    }
).pretty();
