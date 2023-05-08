---
layout: posts
color-schema: red-dark
date: '2023-05-08 05:35 -0500'
published: true
superNews: false
superArticle: false
year: '2023'
title: >-
  Kaspersky investiga al grupo de APT Tomiris que ataca a entidades
  gubernamentales
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/APT-Tomiris-g.jpg
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/APT-Tomiris-p.jpg
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
week: '19'
---
La amenaza persistente avanzada de habla rusa implementa técnicas previamente vinculadas al grupo de APT Turla

Kaspersky ha publicado una nueva investigación sobre el grupo de Amenazas Persistentes Avanzadas (APT) Tomiris, el cual se centra en la recopilación de inteligencia en Asia Central. Este actor de habla rusa utiliza una amplia variedad de implantes de malware desarrollados a paso veloz y en todos los lenguajes de programación imaginables, presumiblemente para obstruir la atribución. Lo que llamó especialmente la atención de los investigadores es que Tomiris despliega malware que anteriormente estaba vinculado a Turla, otro notorio grupo APT.

Kaspersky detalló públicamente a Tomiris por primera vez en septiembre de 2021, luego de la investigación de un secuestro de un sistema de nombres de dominio (DNS) contra una institución de gobierno de la Comunidad de Estados Independientes (CEI). En ese entonces, los investigadores habían notado similitudes no concluyentes con el incidente de SolarWinds. Continuaron rastreando a Tomiris como un actor de amenazas independiente en varias campañas de ataques nuevas entre 2021 y 2023, y la telemetría de Kaspersky permitió arrojar luz sobre el conjunto de herramientas del grupo y su posible conexión a Turla.

El actor de amenazas apunta a entidades gubernamentales y diplomáticas en la CEI con el objetivo final de robar documentos internos. Las víctimas ocasionales descubiertas en otras regiones (como Oriente Medio o el Sudeste Asiático) resultan ser representaciones extranjeras de países de la CEI, lo que ilustra el enfoque limitado de Tomiris.

Tomiris persigue a sus víctimas utilizando una amplia variedad de vectores de ataque: correos electrónicos de phishing dirigidos con adjuntos maliciosos (archivos protegidos con contraseña, documentos maliciosos, LNK armados), secuestro de DNS, explotación de vulnerabilidades (específicamente ProxyLogon), descargas ocultas sospechosas y otros métodos “creativos”.

Relaciones entre las herramientas de Tomiris. Las flechas indican un enlace de distribución (principal distribuido, descargado o contenido secundario)

Lo que hace que las operaciones más recientes de Tomiris sean especiales es que, con un nivel de confianza medio a alto, aprovecharon los malware KopiLuwak y TunnusSched que anteriormente estaban conectados a Turla. Sin embargo, a pesar de compartir este conjunto de herramientas, la última investigación de Kaspersky explica que es muy probable que Turla y Tomiris sean actores separados que podrían estar intercambiando técnicas.

Sin duda, Tomiris es de habla rusa, pero su orientación y actividades están significativamente en desacuerdo con lo que se ha observado sobre Turla. Además, el enfoque general de Tomiris hacia la intrusión y el interés limitado en el sigilo no coinciden con las técnicas documentadas de Turla. Sin embargo, los investigadores de Kaspersky creen que compartir herramientas es una prueba potencial de cierta cooperación entre Tomiris y Turla, cuyo alcance es difícil de evaluar. En cualquier caso, dependiendo de cuándo Tomiris comenzó a usar KopiLuwak, es posible que sea necesario reevaluar una serie de campañas y herramientas que se cree están vinculadas a Turla.

“Nuestra investigación muestra que el uso de KopiLuwak o TunnusSched ahora es insuficiente para vincular los ciberataques a Turla. Hasta donde sabemos, Tomiris aprovecha este conjunto de herramientas, que creemos firmemente es distinto a Turla, aunque es probable que ambos actores hayan cooperado en algún momento. El observar las tácticas y las muestras de malware solo nos lleva hasta cierto punto, y a menudo nos sirve como recordatorio de que los actores de amenazas están sujetos a restricciones organizativas y políticas. Esta investigación ilustra los límites de la atribución técnica, que solo podemos superar mediante el intercambio de inteligencia”, comenta Pierre Delcher, investigador senior de seguridad del Equipo de Análisis e Investigación Global (GReAT) de Kaspersky.

Para evitar ser víctima de un ataque dirigido por un actor de amenazas conocido o desconocido, los investigadores de Kaspersky recomiendan implementar las siguientes medidas:

- Proporcione a su equipo SOC acceso a la inteligencia de amenazas (TI) más reciente. Kaspersky Threat Intelligence Portal es un único punto de acceso para TI de la empresa, que proporciona información y datos sobre ataques cibernéticos recopilados por Kaspersky durante más de 20 años.
- Mejore las habilidades de su equipo de seguridad cibernética para abordar las últimas amenazas dirigidas con la capacitación en línea de Kaspersky desarrollada por expertos de GReAT
- Para la detección, investigación y corrección oportuna de incidentes a nivel de endpoint, implemente soluciones EDR como Kaspersky Endpoint Detection and Response.
- Además de adoptar la protección esencial para endpoints, implemente una solución de seguridad de nivel corporativo que detecte amenazas avanzadas en el nivel de la red en una etapa temprana, como Kaspersky Anti Targeted Attack Platform.
- Dado que muchos ataques dirigidos comienzan con el phishing u otras técnicas de ingeniería social, introduzca capacitación sobre seguridad y enseñe habilidades prácticas a su equipo, por ejemplo, a través de Kaspersky Automated Security Awareness Platform.

![](https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/APT-Tomiris-p.jpg)

<table style="height: 42px;" width="569">
<tbody>
<tr>
<td style="text-align: justify;"><sub><strong>Nuestras noticias también son publicadas a través de nuestra cuenta en Twitter <a href="https://twitter.com/itnewslat?lang=es">@ITNEWSLAT</a> y en la aplicación <a href="https://squidapp.co/en/">SQUID</a></strong></sub></td>
</tr>
</tbody>
</table>
<img src="https://tracker.metricool.com/c3po.jpg?hash=56f88a41e39ab42c063cc51676587a04"/>