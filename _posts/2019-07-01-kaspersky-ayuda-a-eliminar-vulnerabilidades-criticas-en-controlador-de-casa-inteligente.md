---
layout: posts
color-schema: red-dark
date: '2019-07-01 14:18 -0400'
published: true
superNews: false
superArticle: false
year: '2019'
title: >-
  Kaspersky ayuda a eliminar vulnerabilidades criticas en controlador de casa
  inteligente
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Hogar-inteligente-p.jpg
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/Hogar-inteligente-g.jpg
categories:
  - Venezuela
  - Colombia
  - Argentina
  - Perú
  - Ecuador
  - Chile
  - Panama
tags:
  - Seguridad
week: '27'
---
Los investigadores de Kaspersky han identificado varias vulnerabilidades críticas en un dispositivo de control para el ecosistema de casas inteligentes. Estas incluyen errores en la infraestructura de la nube y la posible ejecución a distancia de código que permitiría a terceros obtener acceso de ‘superusuario’ al controlador, así como manipular la infraestructura del hogar inteligente de la forma que prefieran. Las conclusiones fueron informadas al proveedor, Fibaro, quien de inmediato se ocupó de ellas.

Han transcurrido varios años desde que se investigó por primera vez la seguridad del Internet de las cosas (IoT) y, a medida que su uso continúa expandiéndose y evolucionando, la importancia de dicha investigación permanece: con nuevos productos y soluciones surgen nuevos vectores de amenazas que ponen en peligro la seguridad de los usuarios. Un empleado de Kaspersky desafió a los investigadores de la compañía a examinar el sistema inteligente de su hogar, concediéndoles acceso al controlador de su casa inteligente. Se escogió el controlador porque conecta y supervisa las operaciones generales en el hogar conectado, y al comprometerlo permitiría al ciberatacante penetrar en todo el ecosistema de la casa para realizar cualquier cosa, desde espionaje y robo, hasta sabotaje físico.

La etapa inicial de la investigación, que consistió en recopilar inteligencia, llevó a los expertos a identificar varios posibles vectores de ataque: a través del protocolo de comunicaciones inalámbricas Z-Wave, ampliamente utilizado para la automatización del hogar; a través de la interfaz web del panel de administración; y a través de la infraestructura de la nube. Este último resultó el más eficaz para el ataque: un examen de los métodos utilizados para procesar las solicitudes del dispositivo reveló una vulnerabilidad en el proceso de autorización y la posibilidad de ejecución del código a distancia.

Combinados, permitirían a terceros obtener acceso a todas las copias de seguridad que se han subido a la nube desde todos los dispositivos de control o home centers de Fibaro, y subir copias de seguridad infectadas a la nube y luego bajarlas a un controlador en particular, a pesar de no tener derechos en el sistema.

Para completar el experimento, los expertos de Kaspersky implementaron un ataque de prueba en el controlador. Para ello, prepararon una copia de seguridad específica con una secuencia de órdenes desarrollada por separado, protegida con una contraseña. Luego enviaron un correo electrónico y un SMS al propietario del dispositivo a través de la nube, en los que le instaban a actualizar el firmware del controlador. Como le fue solicitado, la ‘víctima’ aceptó y bajó la copia de seguridad infectada. Esto permitió a los investigadores obtener derechos de superusuario en el controlador de la casa inteligente, y así manipular el ecosistema conectado. Para demostrar el éxito de su intrusión en el sistema, los investigadores cambiaron la melodía en el reloj despertador; al día siguiente, el empleado de Kaspersky se despertó con música con bajo y batería a volumen alto.

"A diferencia de nosotros, es poco probable que un verdadero atacante con acceso al dispositivo de control se limite a una broma con el reloj despertador. Una de las tareas principales del dispositivo que estudiamos es la integración de todas las ‘cosas inteligentes’ de manera que el propietario de la casa pueda gestionarlas desde un solo home center. Un detalle importante es que nuestra evaluación se enfocó en un sistema de implementación activa; anteriormente, la mayor parte de la investigación se llevó a cabo en condiciones de laboratorio. La investigación ha demostrado que, a pesar de un creciente interés por la seguridad del IoT, todavía hay problemas por resolver. Aún más importante, los dispositivos que estudiamos se producen en masa y se implementan en redes activas de casas inteligentes. Agradecemos a Fibaro por su actitud responsable ante los problemas y por hacer que la casa de nuestro colega sea mucho más segura de lo que era antes de la investigación", comentó Pavel Cheremushkin, investigador de seguridad de Kaspersky ICS CERT.

Para mantener los dispositivos seguros, aconsejamos a los usuarios:

- Al decidir qué parte de su vida va a hacer un poco más inteligente, considere los riesgos de seguridad.
- Antes de comprar un dispositivo IoT, busque en Internet noticias sobre alguna posible vulnerabilidad.
- Además de los errores normales incluidos en los productos nuevos, los dispositivos de reciente lanzamiento pueden tener problemas de seguridad que sus investigadores aún no han descubierto. Teniendo esto en cuenta, la mejor opción es comprar productos que ya hayan experimentado varias actualizaciones de software, en lugar de productos más recientes. 
- Asegúrese de que todos sus dispositivos hayan recibido las actualizaciones de seguridad y firmware más recientes.
- Comience a usar Kaspersky Security Cloud, que protege las cuentas de usuario en línea y las redes Wi-Fi domésticas, asegurándose de que la red privada se mantenga privada: notificará al usuario en caso de que invitados no deseados intenten conectarse a ella, protegiendo los dispositivos de IoT de su hogar, siendo alertado automáticamente sobre amenazas de seguridad con consejos de expertos cuando sea necesario actuar.

Lea el texto completo del informe está disponible en Securelist: [https://securelist.com/fibaro-smart-home/91416/](https://securelist.com/fibaro-smart-home/91416/) 

Vea el video sobre las vulnerabilidades de una casa inteligente **[aquí](https://youtu.be/cFA4_ZwlM9I)**.