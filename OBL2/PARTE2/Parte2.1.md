# ¿Necesitan colección en mongoDB?
MongoDB prioriza la desnormlaización y embedido de datos, por lo tanto, parte de las tablas que se hicieron en Oracle por normalización no van a estar presentes como colecciones.

# Tablas:
- RangoEdad --> no, se incluye como un campo en Usuario
- Suscripcion --> sí
- Pais --> sí
- Usuario --> sí
- Billetera --> sí
- AsistenteVirtual --> sí
- Idioma --> sí
- Voz --> no, se incluye como un campo en Asistente virtual
- Avatar --> no, se incluye como un campo en Asistente Virtual
- RasgoPersonalidad --> no, se incluye como un campo en Asistente virtual
- Interes --> no, se incluye como un array en Avatar
- Apariencia --> no, se incluye como un array en Avatar
- Ropa --> no, se incluye como un array en Avatar
- Paquete --> sí
- Aplicacion --> sí


# Relaciones:
- personifica --> no, está tabla solo relacionaba un avatar con un asistente.
- integracion --> sí
- compra --> sí
- maneja --> no, se incluye como un array en Asistente Virtual
- aprende --> no, se incluye como un array en Usuario
- a_ropa --> no, se incluye como un array en Avatar
- a_inte --> no, se incluye como un array en Avatar
- a_rasgo --> no, se incluye como un array en Avatar
- a_apa --> no, se incluye como un array en Avatar
- tiene --> no, se incluye como una referencia al Asistente Virtual en Usuario