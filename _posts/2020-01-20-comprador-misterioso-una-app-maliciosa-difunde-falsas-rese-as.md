---
layout: posts
color-schema: red-dark
date: '2020-01-20 10:35 -0400'
published: true
superNews: false
superArticle: false
year: '2020'
title: 'Comprador misterioso: una app maliciosa difunde falsas reseñas '
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Applicacion-Movil-p.jpg
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/Applicacion-Movil-g.jpg
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
week: '04'
---
**Brasil, México y Argentina entre los países con la mayor proporción de usuarios afectados a nivel global**

Los investigadores de Kaspersky han detectado una aplicación troyano que atosiga a los usuarios con anuncios no solicitados y activa la instalación de aplicaciones de compra en línea, engañando tanto a usuarios como a anunciantes. Esta aplicación maliciosa visita además las tiendas de descargas de aplicaciones y publica opiniones falsas en nombre del usuario, a escondidas del propietario del dispositivo.

Continua el período de rebajas y tanto los usuarios como las marcas deben extremar la cautela. A la hora de elegir en qué tienda comprar, los usuarios suelen fiarse de las opiniones publicadas por otros, mientras que las marcas aumentan sus presupuestos de promoción y publicidad. Pero ni usuarios ni vendedores pueden fiarse de lo que ven en Internet, ya que una nueva aplicación de tipo troyano instala aplicaciones populares de compras y mejora de manera artificial la valoración de las mismas, además de difundir numerosos anuncios que pueden molestar a los usuarios.

El troyano, apodado "Shopper", llamó la atención de los investigadores de Kaspersky debido al alcance de sus actividades de ofuscación y el uso de los servicios de accesibilidad de Google. Dichos servicios, diseñados para ayudar a las personas con discapacidad, retransmiten en formato audio los contenidos de las aplicaciones y automatizan la interacción con la interfaz de usuario. Sin embargo, en manos de los atacantes, esta función representa una grave amenaza para el propietario del dispositivo.

Una vez que se tiene del permiso para utilizar el servicio, el malware dispone de oportunidades casi ilimitadas para interactuar con la interfaz del sistema y las aplicaciones. Puede capturar datos que aparecen en pantalla, pulsar teclas e incluso imitar los gestos del usuario. Aunque todavía no se sabe cómo se propaga la aplicación maliciosa, los investigadores de Kaspersky creen que puede ser descargada por los propietarios de los dispositivos desde anuncios fraudulentos o tiendas de aplicaciones de terceros mientras intentan hacerse con una aplicación legítima. La aplicación se enmascara como una aplicación del sistema y utiliza un icono del sistema llamado ConfigAPKs para ocultarse del usuario. Después de desbloquear la pantalla, la aplicación se inicia, recoge información sobre el dispositivo de la víctima y la envía a los servidores del atacante. El servidor devuelve los comandos para que la aplicación se ejecute. Dependiendo de los comandos, la aplicación puede:

- Utilizar la cuenta de Google o Facebook del propietario del dispositivo para registrarse en las aplicaciones de compras y entretenimiento más populares, incluyendo AliExpress, Lazada, Zalora, Shein, Joom, Likee y Alibaba;
- Dejar opiniones sobre la aplicación en Google Play en nombre del propietario del dispositivo;
- Comprobar los derechos de uso de los servicios de accesibilidad. Si no se concede el permiso, envía una solicitud mediante phishing;
- Desactivar Google Play Protect, una función que realiza una comprobación de seguridad de las aplicaciones de Google Play Store antes de descargarlas;
- Abrir los enlaces recibidos del servidor remoto a través de una ventana invisible y ocultarse del menú de la aplicación después de desbloquear varias pantallas;
- Mostrar anuncios al desbloquear la pantalla del dispositivo y crear etiquetas para los anuncios publicitarios en el menú de aplicaciones;
- Descargar aplicaciones del 'mercado' Apkpure[.]com e instalarlas;
- Abrir y descargar aplicaciones publicitarias en Google Play;
- Sustituir las etiquetas de las aplicaciones instaladas por las etiquetas de las páginas anunciadas

De octubre a noviembre de 2019, la mayor proporción de usuarios infectados por el Trojan-Dropper.AndroidOS.Shopper.a correspondía a Rusia, con un 28,46% del total de usuarios afectados. Casi una quinta parte (18,70%) de las infecciones se produjeron en Brasil y el 14,23% en la India. De los países latinoamericanos, México y Argentina ocupan el quinto y decimo-segundo lugar a nivel global, respectivamente. 
 
Distribución de Trojan-Dropper.AndroidOS.Shopper.a, Octubre– Noviembre 2019

"Aunque, por el momento, el peligro real que se deriva de esta aplicación maliciosa se limita a anuncios no solicitados, falsas críticas y valoraciones emitidas en nombre de la víctima, nadie puede garantizar que los creadores de este malware no se orienten hacia otra cosa. Por ahora, el foco de esta aplicación maliciosa está en las tiendas, pero sus capacidades permiten a los atacantes difundir información falsa a través de las cuentas de redes sociales de los usuarios y otras plataformas. Por ejemplo, podría compartir automáticamente vídeos que contengan lo que los cibercriminales que están detrás de Shopper quieran en las páginas personales de los usuarios afectados y simplemente inundar Internet con información poco fiable", dice Igor Golovin, analista de malware de Kaspersky.

Los productos de Kaspersky detectan y bloquean con éxito el malware de Shopper bajo el nombre: Trojan-Dropper.AndroidOS.Shopper. 

Para reducir el riesgo de infección por amenazas de malware como ésta, se aconseja a los usuarios que sigan las siguientes recomendaciones: 

- Tenga cuidado con las aplicaciones que requieren el uso de los servicios de accesibilidad si la aplicación no está pensada para ser utilizada con esta función
- Compruebe siempre los permisos de las aplicaciones para ver lo que las aplicaciones instaladas pueden hacer  
- No instale aplicaciones de fuentes no fiables, aunque se anuncien activamente, y bloquee la instalación de programas de fuentes desconocidas en el menú de configuración del smartphone.
- Utilice una solución de seguridad móvil fiable, como Kaspersky Internet Security para Android, que puede ayudar a identificar las solicitudes potencialmente peligrosas o cuestionables realizadas por la aplicación descargada, y explicar los riesgos asociados a los diferentes tipos de permisos más comunes.

Información adicional sobre el malware Shopper está disponible en Securelist