---
layout: posts
color-schema: red-dark
date: '2019-05-06 14:28 -0400'
published: true
superNews: false
superArticle: false
year: '2019'
title: >-
  ESET identificó una vulnerabilidad en cámaras web que permite espiar a su
  dueño
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Espiar-p.jpg
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/Espiar-g.jpg
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
week: '19'
---
**Una investigación de ESET reveló que la cámara inteligente D-Link DCS-2132L sufre de múltiples vulnerabilidades de seguridad que permiten accesos no autorizados.**

ESET, compañía líder en detección proactiva de amenazas, presentó una investigación donde revela que la cámara en la nube D-Link DCS-2132L, un dispositivo pensado como una herramienta de seguridad para hogares y oficinas, sufre de múltiples vulnerabilidades de seguridad. Las mismas permiten a un atacante no solo interceptar y ver los registros de video, sino también manipular el firmware de los dispositivos. Sobre la base de la información divulgada, el fabricante mitigó algunas de las vulnerabilidades informadas, pero otras aún no están resueltas.

“El problema más grave con la cámara inteligente D-Link DCS-2132L es la transmisión sin cifrar de video. En ambas conexiones, entre la cámara y la nube, y entre la nube y la aplicación de visualización del lado del cliente, la transmisión se ejecuta sin cifrar, proporcionando un terreno fértil para los ataques de hombre en el medio (MitM) y permitiendo a los intrusos espiar las secuencias de video de las víctimas.", explica Milan Fránik, investigador con sede en el laboratorio de ESET en Bratislava.

<img class="alignleft" src="https://www.welivesecurity.com/wp-content/uploads/2019/04/Figure-1.png" alt="" width="450" height="252" />

_Figura 1 – Imagen ilustra la vulnerabilidad en la transmisión de datos y posible vector de ataque “Man in the Middle”_

Otro problema que se encontró en la cámara estaba oculto en el complemento del navegador web "servicios myDlink". Esta es una de las formas de la aplicación de visor disponible para el usuario, otros incluyen aplicaciones móviles, que no formaron parte de la investigación de ESET.

El complemento del navegador web administra la creación del túnel TCP y la reproducción de video en vivo en el navegador del cliente, pero también es responsable de reenviar las solicitudes de los flujos de datos de audio y video a través de un túnel, que escucha en un puerto generado dinámicamente en el host local. 

"La vulnerabilidad de los complementos podría haber tenido graves consecuencias para la seguridad de la cámara, ya que hizo posible que los atacantes reemplazaran el firmware legítimo con su propia versión falsificada", mencionó Fránik.

<iframe width="560" height="315" src="https://www.youtube.com/embed/G_O3OBgURvA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 
_Video: Consiste en una demostración de la ya solucionada falla de seguridad en el plugin._

ESET reportó todas las vulnerabilidades encontradas al fabricante. Algunas de las vulnerabilidades, principalmente en el complemento myDlink, fueron mitigadas y parcheadas a través de la actualización, pero persisten los problemas con la transmisión sin cifrar.
