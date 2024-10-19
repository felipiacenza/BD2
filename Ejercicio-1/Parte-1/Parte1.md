![image](https://github.com/user-attachments/assets/25f5f309-abf6-4f7d-b84b-f74f4c83d512)
Cada usuario debe tener una suscripción, esto se puede ver con la cardinalidad de Suscripción (1, 1) y el punto en el MER por la entidad Usuario. Llegamos a esta
conclusión a través de la letra dada.

![image](https://github.com/user-attachments/assets/566ec660-4107-49bb-b095-09020ce42ff3)
Al momento de suscribirse, el usuario tiene unicamente la posibilidad de pagar por el servicio o no, de forma que en el MER, se crea una categorización desde Suscripción, 
teniendo así las entidades Gratuito y Pago. 

![image](https://github.com/user-attachments/assets/e2d7904b-fc66-402c-8546-3f45ed869c66)
Por otra parte, cada usuario posee una billetera digital personal. Esto se demuestra en el MER por la cardinalidad de la relación "posee". Esta relación es débil ya que 
la entidad Billetera que es parte de la relación, es débil. Esta entidad no tiene razón de existir sin la entidad Usuario asociado.

![image](https://github.com/user-attachments/assets/0ba8a3b4-b778-47a0-8096-c780d13acd84)
El usuario con billetera, puede comprar paquetes por lo que en el MER, la relación que se genera entre el usuario y la billetera, se relaciona con la entidad Paquetes de forma (0, N) a (0, N) ya 
que no es obligatorio que el usuario compre estos.

![image](https://github.com/user-attachments/assets/0da92c38-12dc-4ee1-b22b-1c54857a3206)
Además, cada usuario tiene la opción de realizar integraciones con aplicaciones donde se debe guardar la información de la fecha y hora de la confirmación de acceso por parte del usuario.
Un usuario puede realizar inegraciones con varias aplicaciones o con ninguna, por lo que las cardinalidades de esta relación son (0, N) a (0, N).

![image](https://github.com/user-attachments/assets/22935d2a-b60e-407c-bb91-0cced6d94950)
Cada usuario también puede aprender varios idiomas, teniendo una relación (0, N) a (0, N).

![image](https://github.com/user-attachments/assets/c2f0a70c-e999-4598-84a5-e1842afd6951)
La aplicación Replika cuenta con avatares a los cuales se le puede modificar la ropa, los intereses, los rasgos, la voz y la apariencia. Por esta razón, en el MER, la entidad Avatar
se relaciona con las entidades Ropa, Interes, Rasgo, Voz y Apariencia, teniendo que tener al menos una seleccionada de cada una de estas entidades.

![image](https://github.com/user-attachments/assets/1f35c148-1d27-4bc4-9967-4a3e6c78898d)
Por su parte, por letra se da a entender que cada avatar personfica a un asistente virtual y cada asistente tiene asociado un único avatar. Teniendo una cardinalidad de (1, 1) a (1, 1). 

![image](https://github.com/user-attachments/assets/ea198433-1229-4be5-90fa-78aa47473c93)
Por último, en el caso de seleccionar "Enseñanza de Idiomas", cada asistente virtual puede manejar uno o varios idiomas, con el fin de enseñarselo al Usuario.
