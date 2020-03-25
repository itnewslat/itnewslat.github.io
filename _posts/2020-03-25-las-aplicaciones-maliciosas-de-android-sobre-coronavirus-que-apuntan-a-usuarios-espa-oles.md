---
layout: posts
color-schema: red-dark
date: '2020-03-25 14:21 -0400'
published: true
superNews: false
superArticle: false
year: '2020'
title: >-
  Las aplicaciones maliciosas de Android sobre Coronavirus que apuntan a
  usuarios españoles
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/Aplicacion-Coronavirus-g.jpg
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/Aplicacion-Coronavirus-g.jpg
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
week: '13'
---
La situación de crisis sanitaria actual se ha convertido en un excelente caldo de cultivo para aquellos delincuentes que buscan aprovecharse de la pandemia provocada por el coronavirus SARS-CoV-2. Llevamos días informando de amenazas que utilizan esta temática y se propagan, por ejemplo, mediante adjuntos y enlaces dentro de correos electrónicos. Sin embargo, los dispositivos móviles también suponen un objetivo interesante para los delincuentes, especialmente si son los de los habitantes de las zonas más afectadas por el virus.

**Mapa del coronavirus**

El primero de los casos que vamos a analizar es el de una aplicación fraudulenta para dispositivos Android descubierta por nuestros compañeros del laboratorio de ESET que se está centrando en usuarios españoles. Estamos ante un supuesto mapa de seguimiento de la propagación del coronavirus, información que muchos usuarios podrían estar interesados en tener.

Cabe destacar que esta aplicación no se está distribuyendo a través de la tienda oficial de aplicaciones Google Play, por mucho que en la imagen aparezca el logo. Los delincuentes han preparado dominios específicos a los que dirigir a los usuarios para descargar el instalador, primer signo de alerta que deberíamos tener en cuenta.
En el caso de que un usuario descargue esta aplicación en su móvil y decida instalarla (aun saltándose la restricción de no instalar apps desde fuentes desconocidas que Android incorpora por defecto), esta le solicitará varios permisos entre los que se encuentran los de Accesibilidad. Estos permisos le otorgan al atacante la posibilidad de obtener información de las acciones que la víctima realiza en su dispositivo para usarla de forma maliciosa. El atacante también puede otorgarse nuevos permisos sin necesidad de interacción por parte de la víctima, como los necesarios para enviar y recibir mensajes SMS o llamadas.

En este caso estamos ante una variante del troyano bancario Cerberus, que apareció inicialmente a mediados de 2019 y que suele ofrecerse como malware con una infraestructura ya montada a todos aquellos delincuentes que quieran propagar sus amenazas pero no quieran invertir recursos en elaborarla desde cero. Entre sus capacidades encontramos algunas características comunes a varios troyanos bancarios para Android actuales, como la posibilidad de sobreponer pantallas fraudulentas, robar información de contactos o el control de los SMS para identificar y utilizar los códigos de verificación de un solo uso que muchas entidades bancarias envían a sus usuarios cuando estos realizan alguna transferencia. 

**Coronavirus Finder**

Una amenaza similar y que también está siendo utilizada por los delincuentes para infectar dispositivos Android es la que el troyano bancario Ginp está realizando mediante una app que se autodenomina “Coronavirus Finder”. Según los investigadores de Kaspersky que la han analizado, muchas de las víctimas de este malware se encuentran localizadas en España.

Esta aplicación también se presenta como capaz de detectar a aquellas personas infectadas que se encuentren cerca de nuestra ubicación. A diferencia de la anterior, esta aplicación maliciosa abre una sencilla página web en el navegador del dispositivo que muestra supuestamente la cantidad de personas infectadas a nuestro alrededor y nos ofrece la posibilidad de conocer su ubicación exacta si pagamos una pequeña cantidad de dinero (0,75€).
Para realizar este pago se nos traslada a otra web donde se nos invita a introducir los datos de nuestra tarjeta de crédito, algo que no debemos hacer bajo ninguna circunstancia. En caso de proporcionar los datos, estos van directamente hacia los criminales, mientras que el usuario se queda esperando que suceda algo en la aplicación que nunca pasará. El cargo de 0,75€ no se realiza (ya que los delincuentes pueden robar mucho más gracias a los datos de la tarjeta proporcionados) y, por supuesto, no se muestra información de ninguna persona infectada a nuestro alrededor.

**La opinión del experto**

“Debido al rápido crecimiento del número de personas infectadas por el coronavirus SARS-CoV-2 es prácticamente imposible conocer quién de los que se encuentra a nuestro alrededor lo está, salvo que presente síntomas evidentes. Este tipo de aplicaciones son prácticamente inútiles y solamente aplicaciones oficiales desarrolladas por el gobierno en países concretos como Corea del Sur y China han resultado ser moderadamente efectivas”, afirma Josep Albors, responsable de concienciación e investigación en ESET España. “Por este motivo recomendamos no descargar apps desde fuentes no oficiales y desactivar la opción de instalarlas en el caso de que no la tengamos ya activada. Asimismo, si procedemos a instalar cualquier aplicación y esta nos solicita permisos de accesibilidad debemos sospechar, ya que solo algunas aplicaciones concretas como los antivirus deberían poder tener estos permisos para proteger mejor nuestro sistema”.

Además, recuerdan desde ESET, para informarnos de la evolución de la enfermedad y los contagiados, siempre es recomendable acudir a fuentes oficiales, evitando la propagación de noticias falsas o bulos que solo sirven para desinformar o, como en los casos que acabamos de ver, comprometer la seguridad de los dispositivos de muchos usuarios

<img src="https://tracker.metricool.com/c3po.jpg?hash=56f88a41e39ab42c063cc51676587a04"/>