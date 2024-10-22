En Usuario: 
- ✅ el correo y el telefono son unicos. lo que pueden indicar claves alteras o candidatas ✅ (definición del tipo de dato)
- ✅ los valores del rango de edad son: "18-24","25-34","35-44","45-54","55,64","65 o más" ✅ (mediante check)
- ✅ La fecha_nac tiene que ser coherente al rango de edad ✅ (trigger)


En Asistente:
- ✅ Genero solo puede tomar los valores de de "femenino", "masculino" y "no binario" ✅ (mediante check)
- ✅ El Rol del asistente puede ser "Amigo", "Tutor", "Coach" ✅ (mediante check)
- ✅ Dentro del sub-rol: ✅ (mediante trigger)
  - ✅ si el rol es Tutor, solo se permite elegir entre "Apoyo educativo", "Enseñanzas de Idiomas" o "Preparación de exámenes" ✅ (mediante trigger)
  - ✅ si el rol es coach, las posibilidades son "Planificación" y "Organizción del tiempo". ✅ (mediante trigger)
- ✅ Si el usuario elige el rol "Tutor", sub-rol "Enseñanza de Idiomas", el usuario tiene la opción de elegir que idiomas aprender y debe seleccionar uno.

En Idiomas:
- ✅ El identificador es unico ✅ (definición del tipo de dato)

En Voz:
- ✅ El identificador, que es una id, es autogenerado ✅ (definición del tipo de dato)
- ✅ El tipo de voz puede ser femenina o masculina ✅ (mediante check)
- ✅ El tono puede tener uno de los siguientes valores: "alegre", "calmo", "seguro", "enérgético" u "optimista" ✅ (mediante check)

En Rasgos:
- ✅ El identificador es unico (id) ✅ (definición del tipo de dato)
- ✅ Los rasgos solo pueden ser: "seguro", "tímido", "energético", "práctico", "soñador", "artístico", "lógico". ✅ (mediante check)

En intereses:
- ✅ El nombre es unico, es la primary key de la entidad. ✅ (definición del tipo de dato)

En Apariencia:
- ✅ La primary key es la id. ✅ (definición del tipo de dato)
- ✅ Las categorías pueden ser una de las siguientes: "cabello", "piel" , "cuerpo", "ojos", "maquillaje", "accesorios" ✅ (mediante check)

En Ropa:
- ✅ La primary Key es un identificador (id) ✅ (definición del tipo de dato)
- ✅ El tipo de ropa pueder ser uno de los siguientes: "verano", "primavera", "anime", "oficina", "fiesta", "deporte", "camiestas", "otros" ✅ (mediante check)

Billetera:
- ✅ Los valores deben ser mayores o iguales a 0 ✅ (definición del tipo de dato)

Paquetes:
- ✅ La cantidad de monedas o gemas que ofrece un paquete debe ser mayor a 0 ✅ (mediante check)
- ✅ El tipo de paquete solo puede ser "monedas" o "gemas" ✅ (mediante check)
- ✅ El importe debe ser mayor o iguales a 0 ✅ (mediante check)
- Un paquete solo puede ser comprado mediante una tarjeta de crédito.

Suscripciones:
- ✅ Un usuario solo puede escoger un tipo de suscripcion, o "Gratis" o "Pro" ✅ (mediante check)
- ✅ Si el usuario tiene una suscripcion "Gratis", solo tiene accesso a que su asistente sea "Amigo". ✅ (mediante trigger)
- ✅ Si el usuario tiene una suscripcion "Pro", tiene acceso al resto de de opciones. ✅ (mediante trigger)
- ✅ El tipo de suscripcion puede ser: "gratis", "mensual", "anual", "de por vida" ✅ (mediante check)

En la relación integracion:
- ✅ fecha_confirmacion debe ser menor o igual al día de hoy ✅ (mediante check)
- ✅ hora_confirmación debe ser menor o igual a la hora actual ✅ (mediante check)

En la relación compra:
- ✅ la fecha debe ser menor o igual a la hora actual ✅ (mediante check)
- ✅ la hora debe ser menor o igual al día ✅ (mediante check)