---
layout: posts
color-schema: red-dark
date: '2023-09-17 15:54 -0400'
published: true
superNews: false
superArticle: false
year: '2023'
title: 'ESET identifica un nuevo backdoor que ya afectó más de 30 organizaciones '
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/ciberataque-rojo-p.jpg
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/ciberataque-rojo-g.jpg
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
week: '37'
---
El equipo de investigación de ESET, compañía de seguridad informática, detectó una campaña activa que atacó a 34 organizaciones repartidas entre Brasil, Israel y los Emiratos Árabes Unidos.
El equipo ESET, compañía líder en detección proactiva de amenazas, detectó una campaña activa de un backdoor no documentado al que bautizaron Sponsor. El mismo atacó a 34 organizaciones repartidas entre Brasil, Israel y los Emiratos Árabes Unidos.

El grupo APT detrás del backdoor es Ballistic Bobcat. Es un supuesto grupo de amenazas persistentes avanzadas alineado con Irán que tiene como objetivo organizaciones educativas, gubernamentales y sanitarias, así como activistas de derechos humanos y periodistas. Es más activo en Israel, Oriente Próximo y Estados Unidos. En particular, durante la pandemia se dirigió contra organizaciones relacionadas con COVID-19, incluidas la Organización Mundial de la Salud y Gilead Pharmaceuticals, y contra personal de investigación médica.

“Descubrimos Sponsor después de analizar una muestra detectada en el sistema de una víctima en Israel en mayo de 2022 y analizamos el conjunto de víctimas por país. Tras examinar la muestra, nos dimos cuenta de que se trataba de un nuevo backdoor desplegado por el grupo Ballistic Bobcat APT. 

Los solapamientos entre las campañas de Ballistic Bobcat y las versiones backdoor de Sponsor muestran un patrón bastante claro de desarrollo y despliegue de la herramienta, con campañas dirigidas a objetivos concretos y de duración limitada. Posteriormente, descubrimos otras cuatro versiones del backdoor Sponsor. En total, vimos el despliegue de Sponsor en al menos 34 víctimas en Brasil, Israel y los Emiratos Árabes Unidos.”, comenta Adam Burgher, analista de amenazas de ESET.

Ballistic Bobcat obtuvo el acceso inicial aprovechando vulnerabilidades conocidas en servidores Microsoft Exchange expuestos a Internet, realizando primero escaneos meticulosos del sistema o la red para identificar posibles puntos débiles o vulnerabilidades, y posteriormente atacando y explotando esos puntos débiles identificados. Se sabe desde hace tiempo que el grupo lleva a cabo esta conducta. Sin embargo, muchas de las 34 víctimas identificadas en la telemetría de ESET podrían describirse mejor como víctimas de oportunidad en lugar de víctimas preseleccionadas e investigadas, ya que desde ESET sospechan que Ballistic Bobcat llevó a cabo el comportamiento de escaneo y explotación descrito anteriormente porque no era el único actor de amenazas con acceso a estos sistemas. 

El backdoor Sponsor utiliza archivos de configuración en el disco, que se eliminan mediante archivos por lotes, y ambos son inocuos para evitar los motores de escaneado. Este enfoque modular es uno de los que Ballistic Bobcat ha utilizado con bastante frecuencia y con modesto éxito en los últimos dos años y medio. En los sistemas comprometidos, Ballistic Bobcat también sigue utilizando diversas herramientas de código abierto.

La mayoría de las 34 víctimas se encontraban en Israel, y sólo dos en otros países:

- Brasil, en una cooperativa médica y un operador de seguros de salud
- Emiratos Árabes Unidos, en una organización no identificada.

ESET identificó un medio probable de acceso inicial para 23 de las 34 víctimas mediante la telemetría de ESET. Al igual que en los informes de PowerLess y CISA, Ballistic Bobcat probablemente explotó una vulnerabilidad conocida, CVE-2021-26855, en los servidores Microsoft Exchange para introducirse en estos sistemas. “En el caso de 16 de las 34 víctimas, parece que Ballistic Bobcat no era la única amenaza con acceso a sus sistemas. Esto puede indicar, junto con la gran variedad de víctimas y la aparente falta de valor de inteligencia sobre algunas víctimas, que Ballistic Bobcat se dedicó a un comportamiento de exploración y explotación, en lugar de una campaña dirigida contra víctimas preseleccionadas.”, agrega Burgher de ESET.

Ballistic Bobcat sigue operando con un modelo de exploración y explotación, buscando objetivos de oportunidad con vulnerabilidades sin parchear en servidores Microsoft Exchange expuestos a Internet. El grupo sigue utilizando un variado conjunto de herramientas de código abierto complementado con varias aplicaciones personalizadas, incluido su backdoor Sponsor. Una buena práctica indicada por ESET para proteger a las organizaciones sería parchear todos los dispositivos expuestos a Internet y permanecer atentos a las nuevas aplicaciones que aparezcan.

![](https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/ciberataque-rojo-p.jpg)

<table style="height: 42px;" width="569">
<tbody>
<tr>
<td style="text-align: justify;"><sub><strong>Nuestras noticias también son publicadas a través de nuestra cuenta en Twitter <a href="https://twitter.com/itnewslat?lang=es">@ITNEWSLAT</a> y en la aplicación <a href="https://squidapp.co/en/">SQUID</a></strong></sub></td>
</tr>
</tbody>
</table>

<img src="https://tracker.metricool.com/c3po.jpg?hash=56f88a41e39ab42c063cc51676587a04"/>