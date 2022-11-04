---
layout: posts
color-schema: red-dark
date: '2022-11-04 09:35 -0500'
published: true
superNews: false
superArticle: false
year: '2022'
title: 'RedLine: el troyano que se autopropaga y se dirige a gamers en YouTube'
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/Virus-Troyano-g.jpg
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Virus-Troyano-p.jpg
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
week: '44'
---
Los analistas de Kaspersky han detectado un nuevo paquete malicioso (una colección de programas maliciosos distribuidos en forma de un único archivo de instalación, un archivo autoextraíble u otro archivo con funcionalidad de instalador) dirigido a los gamers en YouTube. Su principal carga útil es el extendido RedLine stealer, uno de los troyanos más utilizados para robar contraseñas y credenciales de los navegadores.

Los ciberdelincuentes buscan activamente cuentas de juego en línea y recursos informáticos de juego. Como señalan los expertos de Kaspersky en el reciente resumen de las ciberamenazas relacionadas con el gaming, el malware tipo stealer se distribuye a menudo bajo la apariencia de hacks, trucos y cracks de juegos. Esta vez, los analistas descubrieron otro tipo de actividad maliciosa vinculada al gaming: los ciberatacantes colocaron paquetes corruptos en los canales de YouTube de las víctimas bajo la apariencia de contenido relacionado con los juegos junto con un enlace a un archivo RAR autoextraíble en la descripción del vídeo. El archivo contiene varios archivos maliciosos, entre los que se encuentra el famoso RedLine stealer.

El ladrón puede extraer nombres de usuario, contraseñas, cookies, datos de tarjetas bancarias y datos de autocompletado de los navegadores basados en Chromium y Gecko, datos de criptocarteras, mensajeros instantáneos y clientes FTP/SSH/VPN, así como archivos con extensiones particulares de los dispositivos. Además, RedLine puede descargar y ejecutar programas de terceros, ejecutar comandos en cmd.exe y abrir enlaces en el navegador por defecto. El ladrón se propaga de varias maneras, incluso a través de correos electrónicos maliciosos de spam y cargadores de terceros.

**Ejemplos de vídeos difundiendo el bundle**
 
Además del propio payload RedLine, el bundle descubierto destaca por su capacidad de autopropagación. Varios archivos, en el bundle de la descripción son responsables de ello.  Reciben vídeos y los publican en los canales de YouTube de los usuarios infectados junto con los enlaces a un archivo protegido por contraseña. Los vídeos anuncian trucos y cracks y proporcionan instrucciones para hackear juegos y software populares. Entre los juegos mencionados están APB Reloaded, CrossFire, DayZ, Dying Light 2, F1® 22, Farming Simulator, Farthest Frontier, FIFA 22, Final Fantasy XIV, Forza, Lego Star Wars, Osu!, Point Blank, Project Zomboid, Rust, Sniper Elite, Spider-Man, Stray, Thymesia, VRChat y Walken.
Una vez que las propias víctimas descargan el paquete original, el archivo RAR se autoextrae. Contiene una serie de archivos maliciosos, utilidades de limpieza y un script para ejecutar automáticamente el contenido desempaquetado. Algunos de los nombres de los archivos incluyen lenguaje explícito.

**Contenido de archivos autoextraíbles**

Otro elemento que llamó la atención de los analistas es un minero. Tiene sentido, ya que el objetivo principal, a juzgar por el vídeo, son los gamers. - Es probable que tengan instaladas tarjetas de vídeo que puedan utilizarse para la minería.

"Los gamers son uno de los grupos más habituales en el punto de mira de los ciberdelincuentes. En esta ocasión, los atacantes utilizaron contenidos relacionados con los juegos como cebo para robar las credenciales de las víctimas y para minar sus computadoras. Nuestro consejo sería elegir cuidadosamente las fuentes para saciar su sed de juego y no descargar ningún archivo sospechoso de cuentas poco fiables", comenta Oleg Kupreev, analista de seguridad senior de Kaspersky.
Para protegerse del malware oculto en los paquetes de código abierto, Kaspersky recomienda lo siguiente:

Los repositorios de código abierto permiten a cualquiera publicar sus propios paquetes, y no todos son completamente seguros. Por ejemplo, los atacantes pueden suplantar paquetes populares de código abierto cambiando una o dos letras en el nombre para engañar al usuario y hacerle creer que está descargando el paquete original. Por lo tanto, recomendamos estar en guardia y no tratar estos paquetes como de confianza.

En general, los entornos de desarrollo o construcción son objetivos idóneos para los hackers que intentan organizar ataques a la cadena de suministro. Eso significa que tales entornos requieren urgentemente una protección sólida antimalware como Kaspersky Hybrid Cloud Security.
Si quieres ser de los primeros en conocer las nuevas campañas maliciosas que se propagan a través de código abierto, suscríbete a los feeds e informes de inteligencia de amenazas, como los que ofrece Threat Intelligence Portal.

Más información en Securelist de Kaspersky.

![](https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Virus-Troyano-p.jpg)

<table style="height: 42px;" width="569">
<tbody>
<tr>
<td style="text-align: justify;"><sub><strong>Nuestras noticias también son publicadas a través de nuestra cuenta en Twitter <a href="https://twitter.com/itnewslat?lang=es">@ITNEWSLAT</a> y en la aplicación <a href="https://squidapp.co/en/">SQUID</a></strong></sub></td>
</tr>
</tbody>
</table>

<img src="https://tracker.metricool.com/c3po.jpg?hash=56f88a41e39ab42c063cc51676587a04"/>