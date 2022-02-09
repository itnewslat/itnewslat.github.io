---
layout: posts
color-schema: red-dark
date: '2022-02-09 07:21 -0500'
published: true
superNews: false
superArticle: false
year: '2022'
title: Análisis del ataque a los sistemas de los Juegos Nacionales de China
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
week: '6'
---
**El análisis muestra que los atacantes pudieron acceder a un sistema que albergaba contenido para los Juegos Nacionales explotando una vulnerabilidad en el servidor web.**

Avast, líder mundial en seguridad y privacidad digital, ha publicado información sobre un ataque contra un servidor asociado a los Juegos Nacionales de China en septiembre de 2021, antes de que comenzaran los Juegos. Esta información se basa en análisis de Avast un informe disponible públicamente en VirusTotal del equipo de TI de los Juegos Nacionales.

El informe contiene registros de acceso del servidor web y de la base de datos SQL que proporcionaron para investigadores de Avast información parcial sobre el ataque. El equipo de Avast pudo correlacionar este informe con muestras de malware que ellos descubrieron y lograron describir el ataque y determinar el punto inicial de intrusión.

David Álvarez Pérez, analista sénior de malware de Avast, explica el ataque: "Nuestro análisis muestra que los atacantes pudieron acceder al sistema explotando una vulnerabilidad en el servidor web. Una vez que tuvieron este acceso, pudieron cargar webshells, reconfigurar los servidores y cargar herramientas que incluían un escáner de red y un marco de explotación de un solo clic".

Según el informe y hallazgos de Avast, parece que la brecha se resolvió con éxito antes del comienzo de los juegos. "No podemos detallar las acciones que los atacantes pueden haber realizado contra la red más amplia. Tampoco podemos hacer una atribución concluyente de los atacantes, aunque tenemos razones para creer que son hablantes nativos de chino o que muestran una gran fluidez en este idioma", destacó.

**Conclusiones y consejos de seguridad para organizaciones y empresas**

El procedimiento seguido por los atacantes que hackearon los XIV Juegos Nacionales de China no es en absoluto nuevo. Accedieron al sistema aprovechando una vulnerabilidad del servidor web. Esto demuestra la necesidad de actualizar el software, configurarlo adecuadamente y también estar al tanto de posibles nuevas vulnerabilidades en las aplicaciones mediante el uso de escáneres de vulnerabilidad.

La contramedida de seguridad más fundamental para los defensores consiste en mantener la infraestructura actualizada en términos de parches. Especialmente para la infraestructura orientada a Internet.

La prevención debe ser la primera prioridad, tanto para la infraestructura interna como para la orientada a Internet.

Las webshells son una herramienta de post explotación que puede ser muy difícil de detectar. Algunas webshells ni siquiera tocan el sistema de archivos y sólo residen en la memoria; esto puede hacer que sea aún más difícil de detectar e identificar. Una vez implantadas, las webshells se identifican principalmente a través de indicadores de tráfico de red inusuales o anormales.

Para protegerse contra este tipo de ataques, Avast recomienda que es importante desplegar más capas de protección (es decir, SELinux, soluciones de detección y respuesta de puntos finales, etc.) de manera que se pueda detectar y actuar rápidamente cuando se produzca una intrusión con éxito.

Tras conseguir el acceso, los atacantes intentaron moverse por la red utilizando exploits y forzando los servicios de forma automatizada. Como llegar a este punto es muy posible para los atacantes, los defensores deben estar preparados. La monitorización en tiempo real de los sistemas informáticos y las redes es la forma adecuada de hacerlo.

Por último, los atacantes utilizaron un marco de explotación escrito en el lenguaje de programación Go para moverse por la red. "Go es un lenguaje de programación cada vez más popular que puede compilarse para múltiples sistemas operativos y arquitecturas, en un único binario que contiene todas las dependencias. Por lo tanto, esperamos ver malware y herramientas grises escritas en este lenguaje en futuros ataques, especialmente en los ataques al IoT, donde hay una amplia variedad de dispositivos que aprovechan diferentes tipos de arquitecturas de procesador", destacó Jan Neduchal, Malware Reverse Engineer en Avast.

![](https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Ataque-Hacker-P.jpg)


<table style="height: 42px;" width="569">
<tbody>
<tr>
<td style="text-align: justify;"><sub><strong>Nuestras noticias también son publicadas a través de nuestra cuenta en Twitter <a href="https://twitter.com/itnewslat?lang=es">@ITNEWSLAT</a> y en la aplicación <a href="https://squidapp.co/en/">SQUID</a></strong></sub></td>
</tr>
</tbody>
</table>

<img src="https://tracker.metricool.com/c3po.jpg?hash=56f88a41e39ab42c063cc51676587a04"/>