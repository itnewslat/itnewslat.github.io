---
layout: posts
color-schema: red-dark
date: '2022-02-15 07:13 -0500'
published: true
superNews: false
superArticle: false
year: '2022'
title: 'Descubrir y defender un ataque en una única visualización '
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/Ataque-Hacker-G.jpg
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Ataque-Hacker-P.jpg
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
week: '7'
---
El equipo de Trend Micro™ Managed XDR abordó un ataque sigiloso de varias capas que progresó desde una vulnerabilidad de punto final explotada.
 
A medida que las organizaciones comienzan a entender las brechas de seguridad que se presentarán durante este año, ahora es el momento oportuno para hacer un balance de cómo pueden fortalecer su postura de seguridad y reforzar sus defensas. 
 
Si bien las organizaciones pueden tener el poder de las soluciones de ciberseguridad de su lado, los actores maliciosos continúan trabajando diligentemente para refinar sus métodos y aprovechar las vulnerabilidades cada vez que tienen la oportunidad. 
 
El equipo que está detrás de la solución Trend Micro™ Managed XDR (MDR) abordó recientemente un incidente encontrado por uno de sus clientes, en el que mostró cómo un actor malicioso lanzó un ataque sigiloso de varias capas. El primer ataque explotó una vulnerabilidad de punto final, que sirvió como camino para desarrollar el movimiento lateral. Desde la instalación de un web shell en el servidor en la nube comprometido, el ataque persistente avanzó hasta el uso de herramientas legítimas de acceso remoto, incluido el Protocolo de escritorio remoto (RDP) como su medio final de intrusión.
 
El incidente también demostró cuán crucial es que los equipos de seguridad adopten un enfoque integrado para la detección, el monitoreo y la respuesta de amenazas para manejarlas rápidamente, especialmente ahora que los acuerdos de trabajo remoto se han vuelto comunes para las empresas debido a la pandemia.
 
**La perspectiva de manejo de amenazas**
 
Incidentes como este brindan a los equipos de seguridad oportunidades para ver los ataques desde diferentes ángulos y de manera general. A continuación, se presentan algunas ideas clave que las organizaciones pueden considerar al adoptar un enfoque proactivo de ciberseguridad para garantizar la máxima protección de sus sistemas.
 
**Sobre la detección y respuesta al web shell**
 
El equipo MDR descubrió varias detecciones de web shell, e identificaron que los nombres de los archivos detectados fueron aleatorios y se ubicaron en el directorio donde normalmente se encuentran los scripts del servidor en las instancias de Internet Information Services (IIS). Esto lo hizo interesante de inmediato porque, en primer lugar, no parecía una prueba y, en segundo lugar, los numerosos archivos detectados con nombres aleatorios podrían significar que había un atacante que intentaba colocar varios web shells en el servidor.
 
**En TightVNC y Ngrok**
 
TightVNC y Ngrok son aplicaciones legítimas que han sido abusadas por actores maliciosos para sus fines nefastos. Desde el punto de vista del atacante, el servidor vulnerable orientado hacia el exterior les puede proporcionar un camino hacia el entorno. Por lo que, para solidificar su punto de apoyo y llevar a cabo su objetivo, los atacantes pueden utilizar TightVNC y Ngrok como medios para controlar los puntos finales de forma remota. En esta etapa, ya pueden tener el servidor web shell infestado, con una herramienta remota normal (que el EPP no podría detectar) y una aplicación de tunelización (que el EPP tampoco podría detectar).
 
Confiar únicamente en la detección de EPP (equipos de protección personal) puede afectar la capacidad de un equipo de seguridad al percibir la presencia de tales herramientas abusadas para ataques graves. MDR recopila y correlaciona automáticamente los datos en múltiples capas de seguridad, lo que mejora significativamente la velocidad de detección, investigación y respuesta de amenazas. 
 
Las organizaciones pueden aprender muchas lecciones de este tipo de incidentes. Una de ellas es que no pueden depender únicamente de los EPP para frustrar las amenazas persistentes porque estos equipos son incapaces de proporcionar una visión holística necesaria para la detección, investigación y respuesta tempranas. Otro punto clave, que ha cobrado más relevancia ahora que la pandemia ha empujado a las empresas a adoptar configuraciones de trabajo remoto, es que incluso las herramientas más benignas, como RDP, pueden ser un vector de amenazas, ya que los actores malintencionados siempre se esfuerzan por burlar los sistemas a través de trucos creativos.
 
La respuesta adecuada, y no solo el tiempo, es esencial para contener el impacto y minimizar el alcance y la gravedad de un ataque.

![](https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Ataque-Hacker-P.jpg)

<table style="height: 42px;" width="569">
<tbody>
<tr>
<td style="text-align: justify;"><sub><strong>Nuestras noticias también son publicadas a través de nuestra cuenta en Twitter <a href="https://twitter.com/itnewslat?lang=es">@ITNEWSLAT</a> y en la aplicación <a href="https://squidapp.co/en/">SQUID</a></strong></sub></td>
</tr>
</tbody>
</table>

<img src="https://tracker.metricool.com/c3po.jpg?hash=56f88a41e39ab42c063cc51676587a04"/>