En Usuario: 
- el correo y el telefono son unicos. lo que pueden indicar claves alteras o candidatas
- los valores del rango de edad son: "18-24","25-34","35-44","45-54","55,64","65 o más"
- La fecha_nac tiene que ser coherente al rango de edad


En Asistente:
- Genero solo puede tomar los valores de de "femenino", "masculino" y "no binario"
- El Rol del asistente puede ser "Amigo", "Tutor", "Coach"
- Dentro del sub-rol: 
  - si el rol es Tutor, solo se permite elegir entre "Apoyo educativo", "Enseñanzas de Idiomas" o "Preparación de exámenes"
  - si el rol es coach, las posibilidades son "Planificación" y "Organizción del tiempo".
- Si el usuario elige el rol "Tutor", sub-rol "Enseñanza de Idiomas", el usuario tiene la opción de elegir que idiomas aprender.

En Idiomas:
- El identificador es unico

En Voz:
- El identificador, que es una id, es autogenerado
- El tipo de voz puede ser femenina o masculina
- El tono puede tener uno de los siguientes valores: "alegre", "calmo", "seguro", "enérgético" u "optimista"

En Rasgos:
- El identificador es unico (id)
- Los rasgos son acotados, es decir, solo existen X cantidad de rasgos según la letras. Los rasgos son: "seguro", "tímido", "energético", "práctico", "soñador", "artístico", "lógico".

En intereses:
- El nombre es unico, es la primary key de la entidad.

En Apariencia:
- La primary key es la id.
- Las categorías pueden ser una de las siguientes: "cabello", "piel" , "cuerpo", "ojos", "maquillaje", "accesorios"

En Ropa:
- La primary Key es un identificador (id)
- El tipo de ropa pueder ser uno de los siguientes: "verano", "primavera", "anime", "oficina", "fiesta", "deporte", "camiestas", "otros"

Billetera:
- Los valores deben ser mayores o iguales a 0

Paquetes:
- La cantidad de monedas o gemas que ofrece un paquete debe ser mayor a 0
- El importe debe ser mayor a 0
- Un paquete solo puede ser comprado mediante una tarjeta de crédito.

Suscripciones:
- Un usuario solo puede escoger un tipo de suscripcion, o "Gratis" o "Pro"
- Si el usuario tiene una suscripcion "Gratis", solo tiene accesso a que su asistente sea "Amigo".
- Si el usuario tiene una suscripcion "Pro", tiene acceso al resto de de opciones.
- El tipo de suscripcion puede ser: "gratis", "mensual", "anual", "de por vida"

En la relación integracion:
- fecha_confirmacion debe ser menor o igual al día de hoy
- hora_confirmación debe ser menor o igual a la hora actual

En la relación compra:
- la fecha debe ser menor o igual a la hora actual
- la hora debe ser menor o igual al día