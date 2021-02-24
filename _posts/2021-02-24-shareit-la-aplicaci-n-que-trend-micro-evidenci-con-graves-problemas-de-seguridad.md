---
layout: posts
color-schema: red-dark
date: '2021-02-24 17:43 -0400'
published: true
superNews: false
superArticle: false
year: '2021'
title: >-
  SHAREit, la aplicación que Trend Micro evidenció con graves problemas de
  seguridad
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Brecha-Seguridad-p.jpg
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/Brecha-Seguridad-g.jpg
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
week: '8'
---
<p style="text-align: justify;"><strong></strong></p>
<p style="text-align: justify;"><em>Se puede abusar de los exploits para filtrar los datos confidenciales de un usuario, ejecutar código arbitrario y posiblemente conducir a la ejecución remota de código</em></p>
<p style="text-align: justify;">Trend Micro Incorporated, el líder mundial en seguridad en la nube, descubre varias vulnerabilidades en la aplicación más popular de Google Play Store llamada SHAREit. Dicha aplicación es utilizada para transferir archivos entre equipos de diferentes plataformas y es una de las más populares para Android.</p>
<p style="text-align: justify;">En un reciente hallazgo, el equipo investigador de Trend Micro, plantea que se puede abusar de las vulnerabilidades para filtrar los datos confidenciales de un usuario y ejecutar un código arbitrario con permisos de SHAREit mediante el uso de un código o una aplicación maliciosa. Así mismo, también pueden conducir potencialmente a la ejecución remota de código (RCE).</p>
<p style="text-align: justify;">En el pasado, las vulnerabilidades que se pueden utilizar para descargar y robar archivos de los dispositivos de los usuarios también se han asociado con la aplicación. Si bien la aplicación permite la transferencia y descarga de varios tipos de archivos, como el Paquete de Android (APK), las vulnerabilidades relacionadas con estas funciones probablemente sean fallas no intencionales.</p>
<p style="text-align: justify;"><strong>Detalles de la vulnerabilidad</strong></p>
<p style="text-align: justify;">Los investigadores de seguridad señalaron que una de las fallas se debe a la forma en que la aplicación facilita la funcionalidad de transferencia de archivos mediante el uso del componente FileProvider de Android. Además, la aplicación solicita acceso a todo el almacenamiento, así como a elementos no relacionados como la cámara, el micrófono y la ubicación de su dispositivo.</p>
<p style="text-align: justify;">Además de eso, la aplicación cuenta con enlaces profundos detectables que utilizan URL que conduce a ciertas funciones, tales como descargar e instalar archivos APK, crear cuentas y establecer contraseñas, las cuales pueden ser fácilmente explotadas por un actor malintencionado para la ejecución remota de código. La aplicación tampoco fuerza el tráfico a través de HTTPS, lo que la abre a más métodos de ataque.</p>
<p style="text-align: justify;">Tal y como demuestra Trend Micro, SHAREit declara al emisor de manera genérica permitiendo que las instrucciones remotas generen actividad dentro de la aplicación. Esto habilita la ejecución de instrucciones desde otras apps, también las dota de permiso para la lectura y escritura en el almacenamiento del teléfono (incluso aunque ellas no lo tengan). Dado que SHAREit no protege activamente los accesos externos, cualquier atacante puede utilizarla como puerta de entrada para la instalación de malware.</p>
<p style="text-align: justify;">Asimismo, es susceptible de sufrir ataques de tipo 'Man-in-the-Disk', a través de una unidad de almacenamiento externo compartido, como una tarjeta SD.</p>
<p style="text-align: justify;"><strong>Recomendación</strong></p>
<p style="text-align: justify;">Los investigadores recomiendan a los usuarios que desinstalen la app, pero también pueden usar la propia aplicación de administrador de archivos de Google para lograr prácticamente la misma funcionalidad de intercambio de archivos si todos sus dispositivos están conectados a la misma red Wi-Fi.</p>
<p style="text-align: justify;">La seguridad debe ser una consideración primordial para los desarrolladores de aplicaciones, las empresas y los usuarios. Para un uso seguro de la aplicación móvil, se recomienda actualizar y parchear regularmente los sistemas operativos móviles y la propia aplicación. Los usuarios también deben mantenerse informados leyendo reseñas y artículos sobre las aplicaciones que descargan.</p>

![](https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Brecha-Seguridad-p.jpg)


<img src="https://tracker.metricool.com/c3po.jpg?hash=56f88a41e39ab42c063cc51676587a04"/>