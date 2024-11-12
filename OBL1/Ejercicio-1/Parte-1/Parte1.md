# Justificación del planteamiento de la solución

## Relación entre Usuario y Suscripción
Según la letra, cada usuario debe de tener 1 y solo 1 suscripción asociada. Esto se puede ver con la cardinalidad que existe entre Suscripción (1,1) y Usuario (0,N). Esta relación además, posee totalidad, es decir, remarca la sentencia de 'todos los usuarios tienen una suscripción'.
Llegamos a esta conclusión mediante la letra del problmea dado.

## Entidad Suscripción
Al momento de suscribirse, el usuario tiene unicamente la posibilidad elegir un tipo de suscripción. Cada tipo de suscripción cuenta con un precio (que puede ser 0).
Para este tipo de entidad lo más común es hacer una categorización. Sin embargo, debido a que esta entidad no ofrece mayor complejidad, la categorización no fue de utilidad para realizar dicha entidad.

## Entidad Billetera y Relación "posee"
Por otra parte, cada usuario posee una billetera digital personal. Esta sentencia se demuestra en el MER por la cardinalidad de la relación (uno y un solo usurio tiene una y solo una billetera; o una billetera es de un solo usuario)
Esta relación presente es debil, debido a que una billetera no tiene razón de existir si no está estrictamente viculada con un usuario.

## Entidad Paquetes
Los paquetes solo pueden contener o gemas o monedas. Por lo tanto, esta restricción se limita con el atributo tipo, siendo los posibles valores "gemas" o "monedas".
Esta deducción se sacó de la letra del problema

## Relación compra
El usuario con su billetera puede comprar paquetes. Esto se demuestra en el MER con la relación que se genera entre el usuario, su billetera, y los paquetes, de forma (0,N) a (0,N). Esto indica que un usuario puede comprar de 0 a N paquetes y que un paquete puede ser comprado por 0 o N usuarios. Esto indica que en ningún momento es obligatorio comprar paquetes.
Esta deducción se sacó de la letra del problema

## Relación de integración con aplicaciones
Cada usuario tiene la opción de realizar integraciones con aplicaciones. Cuando se reliza la integración, se guarda información tal como la fecha y hora de confirmación de acceso por parte del usuario.
Un usuario puede realizar integraciones con varias aplicaciones o con ninguna, por lo que las cardinalidades de esta relación son (0,N) a (0,N).
Llegamos a esta conclusión mediante letra.

## Relación de aprende idiomas

Cada usuario puede aprender varios idiomas disponibles. Por lo tanto, deducimos por la letra que las cardinalidades de esta relación son de (0,N) a (0,N) (ningún usuario o muchos usuarios pueden aprender ninguno o muchos idomas)

## Avatares

La aplicación Replika cuenta con vatares a los cuales se les puede modificar la ropa, los intereses, los rasgos, la voz y la apariencia. Esto se entiende por letra y por lo tanto, en el MER, llegamos a la conclusión que cada una de estas cosas que se pueden modificar son una entidad aparte y se relacionan con el avatar.

Según concluimos:
- Un Avatar puede tener 1 o N ropas seleccionadas.
- Un Avatar puede tener 1 o N intereses seleccionados
- Un Avatar puede tener 1 o N rasgos seleccionados
- Un Avatar puede tener 1 o 1 voz seleccionada, debido a que sería incoherente que tenga varias voces en distintos momentos.
- Un Avatar puede tener 1 o N apariencias. Las apariencias refieren a lo físico y se dividen en distintas categorías como piel, cabello, cuerpo, etc.

## Relación personifica
Por otro lado, la letra del problema da a entender que el asistente virtual es personificado por un avatar. Por lo tanto, un asistente virtual es personificado por uno y solo un Avatar, cardinalidad (1,1) a (1,1). 

## Relación de maneja idiomas

Los asistentes virtuales tienen la opción de manejar idiomas. Esto es posible solamente si el asistente tiene el rol de "Enseñanza de Idiomas".
Un asistente puede manejar almenos un idioma a muchos idiomas pero no todos los idiomas tienen que ser obligatoriamente manejados por al menos un aistente. Por lo tanto la cardialdiad de esta relación es de (0,N) a (1,N)
Llegamos a esta conclusión por letra.

## Relación Usuario tiene Asistente
Si bien, para esta parte no se pide guardar las interacciones del usuario con su asistente, es importante enlazar de alguna manera que un usuario tiene un asistente.
Llegamos a la conclusión que la mejor manera es simplemente mediante una relación llamada 'tiene' en donde se guardan las PKs de ambas entidades. Según la letra, un usuario solo puede tener un asistente virtual y un asistente virtual solo puede interactuar o ser de un solo usuario. Por lo tanto, la cardinalidad de esta relación es de (1,1) a (1,1).