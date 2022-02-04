---
layout: posts
color-schema: red-dark
date: '2022-02-04 10:39 -0500'
published: true
superNews: false
superArticle: false
year: '2022'
title: >-
  Informe de amenazas de Avast para Q4/2021: Log4j abre las puertas a nuevos
  ataques mientras que los ataques de ransomware y RAT disminuyen
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/Ciberatacantes-g.jpg
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Ciberatacantes-p.jpg
categories:
  - Venezuela
  - Colombia
  - Argentina
  - Perú
  - Ecuador
  - Chile
  - Panama
  - Mexico
tags:
  - Seguridad
week: '5'
---
Los investigadores también observaron la resurrección de Emotet, el aumento de las actividades de los mineros de criptomonedas durante el crecimiento de los precios de Bitcoin, y un aumento de las estafas de soporte técnico, las estafas de suscripción a Android y los programas espía

Avast, líder mundial en seguridad digital y privacidad, ha publicado su informe de amenazas del cuarto trimestre de 2021, en el que se revela una explotación inmediata de la vulnerabilidad Log4j por parte de coinminers, RATs, botnets, ransomware y APTs, en diciembre, lo que pone a los departamentos de CISO bajo presión. Además, los investigadores de amenazas de Avast observaron el resurgimiento de la red de bots Emotet y un aumento del 40% de los coinminers, lo que supone un riesgo tanto para los consumidores como para las empresas. Los resultados del cuarto trimestre muestran igualmente un aumento del adware, de las estafas de soporte técnico en computadores y de las estafas de suscripción y el spyware en dispositivos Android, dirigidos a los consumidores. Al mismo tiempo, Avast vio menos actividad de ransomware y troyanos de acceso remoto (RAT).

"Hacia finales de año, la vulnerabilidad Log4j, extremadamente peligrosa, omnipresente y fácil de abusar, hizo sudar a los departamentos de CISO, y con razón, ya que fue utilizada como arma por los atacantes que propagaban desde coinminers hasta bots y ransomware", dijo Jakub Kroustek, Director de Investigación de Malware de Avast.

"Por otro lado, nos complace informar de la disminución de los ataques de RAT, robos de información y ransomware. La actividad de las RAT se redujo gracias a las vacaciones, al punto que los autores del malware detrás de la herramienta de acceso remoto DcRat incluso llegaron a renombrar su RAT como "SantaRat". Hemos observado un ligero descenso en la actividad de los robos de información, probablemente debido a una importante disminución de las infecciones a través de Fareit, un robador de contraseñas e información, que se redujo en un 61% con respecto al trimestre anterior", señaló Jakub Kroustek. "Los estragos que causó el ransomware en los tres primeros trimestres de 2021 desencadenaron una cooperación coordinada de las naciones, las agencias gubernamentales y los proveedores de seguridad para perseguir a los autores y operadores de ransomware, y creemos que todo esto resultó en una disminución significativa de los ataques de ransomware en el cuarto trimestre de 2021". El índice de riesgo de ransomware se redujo en un impresionante 28% en comparación con el tercer trimestre de 2021. Esperamos ver una continuación de esta tendencia en el primer trimestre de 2022, pero también estamos preparados para lo contrario."

**Los ciberdelincuentes atacan a las empresas a través de la vulnerabilidad Log4j y mediante RATs que abusan de Azure y AWS**
 
La vulnerabilidad en Log4j, una biblioteca de logging de Java, resultó ser extremadamente peligrosa para las empresas debido a la ubicuidad de la biblioteca y la facilidad de explotación. Los investigadores de Avast observaron que coinminers, RATs, bots, ransomware y grupos APT abusaban de la vulnerabilidad. Varias redes de bots abusaron de la vulnerabilidad, incluida la infame red de bots Mirai. La mayoría de los ataques de bots eran sólo sondas que probaban la vulnerabilidad, pero Avast también observó numerosos intentos de cargar código potencialmente malicioso. Por ejemplo, algunas RAT se propagaron utilizando la vulnerabilidad, siendo las más frecuentes NanoCore, AsyncRat y Orcus. Un ransomware de baja calidad, llamado Khonsari, fue el primer ransomware que los investigadores vieron explotar la vulnerabilidad.
 
Además de explotar la vulnerabilidad Log4j para propagar RATs, los ciberdelincuentes aprovecharon la vulnerabilidad CVE-2021-40449, que se utilizó para elevar los permisos de los procesos maliciosos explotando el controlador del kernel de Windows. Los atacantes utilizaron esta vulnerabilidad para descargar y lanzar la RAT MistarySnail. Además, una causa muy importante de las altas detecciones de NanoCore y AsyncRat fue causada por una campaña maliciosa que abusaba de los proveedores de la nube, Microsoft Azure y Amazon Web Service (AWS). En esta campaña los atacantes de malware utilizaron Azure y AWS como servidores de descarga para sus cargas útiles maliciosas para atacar a las empresas.

Además, los investigadores de Avast vieron cómo los malos actores detrás de Emotet reescriben varias de sus partes, reviviendo su maquinaria, y recuperando el mercado de las botnets con la última reencarnación de Emotet.
 
**Adware, Coinminers y estafas de soporte técnico dirigidas a los consumidores**

La actividad de adware y rootkit de escritorio aumentó en el cuarto trimestre de 2021. Los investigadores de Avast creen que estas tendencias están relacionadas con el rootkit Cerbu, que puede secuestrar las páginas de inicio de los navegadores y redirigir las URL de los sitios según la configuración del rootkit. Por lo tanto, Cerbu puede desplegarse y configurarse fácilmente como adware, molestando a las víctimas con anuncios no deseados y pudiendo añadir una puerta trasera a las máquinas de las víctimas.
 
Mientras el precio del Bitcoin aumentaba a finales de 2021, el número de coinminers que se propagaban aumentó un 40%, a menudo a través de páginas web infectadas y software pirata. CoinHelper fue uno de los coinminers más activos a lo largo del cuarto trimestre de 2021, dirigido principalmente a usuarios de Rusia y Ucrania. Los coinminers abusan sigilosamente de la potencia de cálculo del usuario para minar criptomonedas, lo que puede provocar elevadas facturas de electricidad y afectar a la vida útil del hardware del usuario. Además, CoinHelper recopila diversa información sobre sus víctimas, como su geolocalización, la solución antivirus que tienen instalada y el hardware que utilizan. A pesar de observar múltiples criptomonedas configuradas para ser minadas, incluyendo Ethereum y Bitcoin, Monero destacó para los investigadores de Avast en particular. Monero está diseñado para ser anónimo, sin embargo, el uso incorrecto de las direcciones y la mecánica de cómo funcionan los grupos de minería, permitió a los investigadores obtener una visión más profunda de la operación de minería de Monero de los autores del malware. Descubrieron que la ganancia monetaria total del CoinHelper era de 339.694,86 USD a partir del 29 de noviembre de 2021. En el mes de diciembre, se minó un adicional de ~15.162 XMR, ~3.446,03 USD. CoinHelper sigue extendiéndose activamente, con la capacidad de minar ~0,474 XMR cada día.
 
Los investigadores de amenazas de Avast también han observado un aumento de las estafas de soporte técnico, que engañan al usuario haciéndole creer que tiene un problema técnico, y le inducen a llamar a una línea directa en la que le estafarán para que pague elevadas tarifas de soporte o le concedan acceso remoto a su sistema.
 
Las estafas de suscripción a SMS Premium y el software espía que roba las credenciales de Facebook se extienden por los dispositivos móviles
Los Laboratorios de Amenazas de Avast señalaron dos amenazas móviles en el informe: Ultima SMS y Facestealer. Ultima SMS, una estafa de suscripción a SMS premium resurgió en los últimos meses. En octubre, las aplicaciones de Ultima SMS están disponibles en la Play Store, imitando aplicaciones y juegos legítimos, a menudo con anuncios pegadizos. Una vez descargadas, pedían a los usuarios que introdujera su número de teléfono para acceder a la aplicación. Posteriormente, los usuarios se suscriben a un servicio de SMS premium que podía costar hasta 10 dólares a la semana. Los responsables de UltimaSMS utilizaron ampliamente las redes sociales para publicitar sus aplicaciones y consiguieron más de 10 millones de descargas.
 
Facestealer, un programa espía diseñado para robar las credenciales de Facebook, reapareció en múltiples ocasiones en el cuarto trimestre de 2021. El malware se hace pasar por editores de fotos, horóscopos, aplicaciones de fitness y otras. Después de utilizar la aplicación durante un tiempo, pide al usuario que inicie sesión en Facebook para seguir utilizando la aplicación, sin anuncios.

![](https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Ciberatacantes-p.jpg)

<table style="height: 42px;" width="569">
<tbody>
<tr>
<td style="text-align: justify;"><sub><strong>Nuestras noticias también son publicadas a través de nuestra cuenta en Twitter <a href="https://twitter.com/itnewslat?lang=es">@ITNEWSLAT</a> y en la aplicación <a href="https://squidapp.co/en/">SQUID</a></strong></sub></td>
</tr>
</tbody>
</table>

<img src="https://tracker.metricool.com/c3po.jpg?hash=56f88a41e39ab42c063cc51676587a04"/>