db.usuario.aggregate([
    {
        $match: { email: "usuario@ejemplo.com" }
    },
    {
        $unwind: "$progreso_aprendizaje.logros" // Descomponer los logros
    },
    {
        $lookup: {
            from: "idioma", // Colección de idiomas
            localField: "progreso_aprendizaje.logros.id_idioma", // Campo del idioma en los logros
            foreignField: "_id", // Campo de referencia en Idioma
            as: "idioma_logro"
        }
    },
    {
        $unwind: "$idioma_logro" // Descomponer resultados del $lookup
    },
    {
        $project: {
            nombre_logro: "$progreso_aprendizaje.logros.nombre",
            fecha_obtencion: "$progreso_aprendizaje.logros.fecha_obtencion",
            nivel_dominio: "$progreso_aprendizaje.logros.nivel_dominio",
            idioma: "$idioma_logro.nombre"
        }
    },
    {
        $sort: { fecha_obtencion: -1 } // Ordenar por fecha de obtención (decreciente)
    }
]);
