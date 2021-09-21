---
layout: posts
color-schema: red-dark
date: '2021-09-21 16:02 -0400'
published: true
superNews: false
superArticle: false
year: '2021'
title: Automóviles “ven a la vuelta de la esquina” con Edge Computing y Cloud
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Vehiculos-IA-p.jpg
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/Vehiculos-IA-g.jpg
categories:
  - Mexico
tags:
  - Transformación Digital
week: '40'
---
<p style="text-align: justify;">Hace no mucho tiempo, funciones como la dirección asistida y las llamadas manos libres eran adicionales en un automóvil. Sin embargo, hay una función que todavía no ha avanzado lo suficiente: la seguridad automática en tiempo real y el uso de sensores para evitar choques mientras se conduce. El área de alto tránsito vehicular de Módena, en Italia, está siendo utilizada como laboratorio urbano para desarrollar tecnologías de sensores capaces de “ver” a través de vehículos cercanos, a la vuelta de las esquinas o detrás de los edificios, para prevenir choques.</p>
<p style="text-align: justify;">El <a href="https://class-project.eu/">proyecto de investigación EU CLASS</a>, que comenzó en 2018 y se extendió hasta junio de este año, es liderado por el Centro de Súper Computación de Barcelona (BSC), en España. A través de una colaboración entre la Universidad de Módena y Reggio Emilia (UNIMORE) en Italia, la ciudad de Módena, Atos, el fabricante de automóviles Maserati y nuestro equipo de IBM Research de Haifa, Israel; han convertido una zona de Módena con mucho tráfico en un laboratorio urbano con este proyecto.</p>
<p style="text-align: justify;">Hemos demostrado que es posible equipar a una ciudad y a los vehículos con sensores de tal manera que permitan a los automóviles “saber” qué hay detrás de objetos cercanos y “ver” a la vuelta de las esquinas, con el objetivo de ayudar a los conductores a evitar choques y mejorar el flujo de tránsito.</p>
<p style="text-align: justify;"> <strong>Un prototipo de doble verificación de puntos ciegos que cubre toda una ciudad</strong></p>
<p style="text-align: justify;">En la actualidad, los sistemas de sensores de automóviles son limitados. No pueden “ver” que hay detrás de un edificio o de un camión que se desplaza por el carril de al lado. Y los conductores que salen de los espacios de estacionamiento, incluso en un automóvil que cuenta con el más avanzado equipamiento, pueden no ver un vehículo o una persona que se acerca si están bloqueados por otros obstáculos en espacios adyacentes. Del mismo modo, los automóviles no cuentan con el equipamiento adecuado para responder rápidamente si, por ejemplo, un niño sale desde detrás de un automóvil estacionado. Ningún sensor existente puede dar a un automóvil (o a su conductor) una advertencia temprana para eso.</p>
<p style="text-align: justify;">Los autos más nuevos generalmente están equipados con una amplia conexión a Internet que suele estar basada en celulares. En la mayoría de las ciudades más grandes del mundo, muchas de las calles son monitoreadas regularmente por cámaras y otros sensores del municipio local. Si pudiéramos compartir información de esos sensores en las vías públicas y de los vehículos que conducen en calles adyacentes, los automóviles podrían “percibir” los peligros que se aproximan desde diferentes perspectivas y distintos orígenes, además de lo que pueden ver y detectar en su trayectoria de conducción actual.</p>
<p style="text-align: justify;">Los autos con sensores y conectividad que circulan por las calles en sentido contrario se convertirían entonces en una fuente de información en zonas no cubiertas por el municipio. Esto es exactamente lo que CLASS se propuso hacer.</p>
<p style="text-align: justify;">Como parte del proyecto, desarrollamos el prototipo experimental de un sistema que integra computación edge con infraestructura en la nube, reuniendo múltiples fuentes de información del municipio y otros vehículos para ser verificada en tiempo real. El tiempo de respuesta es la cantidad de tiempo que pasa desde el momento en que la información ingresa a un sistema hasta que un <em>insight</em> o un posible resultado derivado de esa información se entrega en su destino. Específicamente, buscamos reducir los accidentes automovilísticos al aumentar significativamente las capacidades de detección de los automóviles, incluso para eventos que tienen lugar más allá del campo de visión o monitoreo de los conductores y los sensores.</p>
<p style="text-align: justify;"> <strong>Sensores, sensores en todos los lugares</strong></p>
<p style="text-align: justify;">Primero, equipamos las calles con sensores avanzados que se conectaban al centro de datos principal de la ciudad a través de una infraestructura de red óptica subterránea. El centro de datos se convirtió efectivamente en la “nube” del proyecto. Luego equipamos un sedán experimental Maserati Quattroporte y una SUV Levante con un conjunto de sensores también, incluyendo cámaras HD, LIDARs y GPS, todos conectados a la infraestructura de la ciudad con una celda LTE dedicada.</p>
<p style="text-align: justify;">También modernizamos los dos autos con una GPU Nvidia Jetson incorporada y una computadora portátil que sirvió como una consola para el Sistema Avanzado de Asistencia al Conductor (ADAS) a bordo, que permitiría al conductor recibir notificaciones CLASS provenientes del centro de datos de la ciudad.</p>
<p style="text-align: justify;">Para los conductores experimentales profesionales de Maserati, todos estos protocolos y componentes equivalían a un único canal nuevo de notificaciones que aparecía en la consola ADAS. Las notificaciones alertaron a los conductores de posibles obstáculos y colisiones mucho antes de que pudieran haber ocurrido, a veces mucho antes de que pudieran ser vistos, dándoles tiempo suficiente para responder.</p>
<p style="text-align: justify;">La clave de la operación de CLASS fue la integración de la información del vehículo a la nube en tiempo real proveniente de las cámaras de la ciudad y los sensores instalados en otros vehículos que viajan cerca. El procesamiento de datos incluyó la detección de objetos captados por los sensores (video, LIDAR y radar), el análisis de trayectorias futuras de objetos de tráfico y pronósticos de posibles accidentes basados en esas trayectorias. La predicción de trayectorias y choques de forma simultánea y eficiente fue realizada por nuestro <a href="https://lithops-cloud.github.io/">motor Lithops,</a>que se adaptó durante el proyecto para el procesamiento rápido de datos de <em>edge a cloud</em> con bajo <em>overhead</em>, sobre una infraestructura <em>serverless.</em></p>
<p style="text-align: justify;"> <strong>De Módena a una calle de la ciudad cerca de ti</strong></p>
<p style="text-align: justify;">El proyecto CLASS finalizó en junio de 2021, pero recién comenzamos a analizar los resultados. La aplicación para evitar choques podría integrarse con los productos y ofertas V2X. Los activos de software principales desarrollados durante el proyecto podrían utilizarse para nuevas aplicaciones, ofertas y otros proyectos de la UE, y ya se han contribuido a otras iniciativas de código abierto. Para IBM Research, estos incluyen un conjunto de novedosas herramientas y motores de computación escalables optimizados para la latencia.</p>
<p style="text-align: justify;">El laboratorio urbano creado en Módena ya está siendo utilizado por varios otros proyectos de la UE. Su infraestructura se encuentra en constante evolución, con el apoyo adicional del Ministerio de Transporte italiano. Sobre todo, CLASS ha demostrado la capacidad de conectar los puntos de tráfico de una ciudad: ayudando a la tecnología de la información moderna y compleja a ofrecer valor directo, de los conductores hasta los administradores de la ciudad, allanando el camino hacia las ciudades inteligentes del futuro.</p>

![](https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Vehiculos-IA-p.jpg)

<table style="height: 42px;" width="569">
<tbody>
<tr>
<td style="text-align: justify;"><sub><strong>Nuestras noticias también son publicadas a través de nuestra cuenta en Twitter <a href="https://twitter.com/itnewslat?lang=es">@ITNEWSLAT</a> y en la aplicación <a href="https://squidapp.co/en/">SQUID</a></strong></sub></td>
</tr>
</tbody>
</table>

<img src="https://tracker.metricool.com/c3po.jpg?hash=56f88a41e39ab42c063cc51676587a04"/>

