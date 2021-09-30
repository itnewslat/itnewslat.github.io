---
layout: posts
color-schema: red-dark
date: '2021-09-30 16:06 -0400'
published: true
superNews: false
superArticle: false
year: '2021'
title: 'FinFisher: software espía mejora su arsenal con cuatro niveles de ofuscación '
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Espias-p.jpg
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/Espias-g.jpg
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
week: '39'
---
**El spyware es capaz de recopilar archivos borrados, así como captar señales de streaming en vivo, grabar datos y obtener acceso a la cámara web y micrófono del dispositivo infectado**

Los investigadores de Kaspersky presentaron una investigación exhaustiva sobre todas las actualizaciones recientes introducidas en el software espía FinSpy para Windows, Mac OS, Linux y sus instaladores. La investigación, que tardó ocho meses en completarse, descubrió medidas de ofuscación de cuatro capas y anti análisis avanzadas que los programadores del software espía emplearon, así como un kit de arranque UEFI para infectar a las víctimas. Estos hallazgos sugieren un gran énfasis en medidas de defensa por evasión, lo que convierte a FinFisher en uno de los programas espías más difíciles de detectar hasta la fecha.

FinFisher, también conocido como FinSpy o Wingbird, es una herramienta de vigilancia que Kaspersky ha estado rastreando desde 2011. Es capaz de recopilar varias credenciales, listados de archivos y archivos borrados, así como diferentes documentos, señales de streaming en vivo o grabar datos y obtener acceso a la cámara web y micrófono. Sus implantes en Windows se detectaron e investigaron varias veces hasta 2018, cuando FinFisher parecía haber desaparecido. 

Después de esta fase, las soluciones de Kaspersky comenzaron a detectar instalaciones sospechosas de aplicaciones legítimas como TeamViewer, VLC Media Player y WinRAR, que contenían código malicioso, no asociado a algún malware conocido. A partir de esto descubrieron un sitio web en birmano que contenía los instaladores infectados y muestras de FinFisher para Android, ayudando así a identificar que estaban troyanizados con el mismo spyware. Este descubrimiento impulsó a los investigadores de Kaspersky a indagar más sobre FinFisher.

A diferencia de las versiones anteriores del software espía, que contenían el troyano en la aplicación infectada, las nuevas muestras están protegidas por dos componentes: un prevalidador no persistente y un posvalidador. El primero de estos componentes ejecuta varias comprobaciones de seguridad para garantizar que el dispositivo que está infectando no pertenezca a un investigador de seguridad. Solo cuando se aprueban las comprobaciones, el servidor proporciona el componente pos-validador; este componente garantiza que la víctima infectada sea la prevista. Es en este instante cuando el servidor ordena la implementación de la plataforma troyana completa.

FinFisher cuenta con cuatro ofuscadores complejos hechos a la medida. La función principal de esta ofuscación es ralentizar el análisis del software espía. Además de eso, el troyano también emplea formas peculiares de recopilar información. Por ejemplo, utiliza el modo de desarrollador en los navegadores para interceptar la protección del tráfico, a través del protocolo HTTPS.
 
**Ejemplo de propiedades de tareas programadas**

Los investigadores también descubrieron una muestra de FinFisher que reemplaza el cargador de arranque UEFI de Windows, un componente que inicia el sistema operativo después de que se lanza el firmware, por uno malicioso. Esta forma de infección permite a los atacantes instalar un bootkit sin la necesidad de eludir las comprobaciones de seguridad del firmware. Las infecciones UEFI son muy raras y generalmente difíciles de ejecutar, pues se destacan por su evasión y persistencia. Aunque, en este caso, los atacantes no infectan el firmware UEFI en sí, sino la siguiente etapa de arranque, el ataque es especialmente sigiloso, ya que el módulo malicioso se instala en una partición separada que puede controlar el proceso de arranque de la máquina infectada.

“El esfuerzo destinado a hacer que FinFisher sea inaccesible para los investigadores de seguridad es particularmente preocupante y bastante impresionante. Al parecer, los programadores enfocaron sus esfuerzos, tanto en las medidas de ofuscación y anti análisis, así como en el propio troyano. Como resultado, su capacidad para evadir cualquier detección y análisis hace que este software espía sea particularmente difícil de rastrear y detectar. El hecho de que este spyware se despliegue con extrema precisión y sea prácticamente imposible de analizar, hace que sus víctimas sean especialmente vulnerables, resultando en que los expertos se enfrenten a un desafío especial: tener que invertir una cantidad abrumadora de recursos para desenredar todas y cada una de las muestras. Amenazas complejas como FinFisher destacan la importancia de la cooperación y el intercambio de conocimientos entre los investigadores de seguridad, así como la inversión en nuevas soluciones de seguridad que tienen como objetivo combatir estas amenazas”, comenta Igor Kuznetsov, investigador principal de seguridad del Equipo de Análisis e Investigación Global de Kaspersky.

Para protegerse contra amenazas como FinFisher, Kaspersky recomienda:

- Bajar las aplicaciones y programas desde sitios web confiables. 
- Actualizar el sistema operativo y todo el software con regularidad. Muchos problemas de seguridad se pueden resolver instalando versiones actualizadas del software.
- Desconfiar siempre de los archivos adjuntos en el correo electrónico. Antes de hacer clic para abrir un archivo adjunto o seguir un enlace, considere los siguiente: ¿Es de alguien que conoce y en quien confía? ¿Es algo que espera?; ¿Está limpio? Coloque el cursor sobre los enlaces y los archivos adjuntos para ver su nombre o adónde van realmente.
- Evitar instalar software procedente de fuentes desconocidas. Puede contener archivos maliciosos y, a menudo, los contiene.
- Utilizar una solución de seguridad robusta como Kaspersky Internet Security for Android o Kaspersky Total Security en todas las computadoras y dispositivos móviles.

Para la protección de las organizaciones, Kaspersky sugiere:

- Establecer una política específica para el uso de software no corporativo. Educar a sus empleados sobre los riesgos que implica bajar aplicaciones no autorizadas de fuentes no confiables.
- Brindar a su personal capacitación básica en higiene de ciberseguridad, ya que muchos ataques dirigidos comienzan con phishing u otras técnicas de ingeniería social.
- Instalar soluciones anti-APT y EDR, lo que permite el descubrimiento y la detección de amenazas, la investigación y la reparación oportuna de las capacidades de incidentes. Proporcione a su equipo de SOC acceso a la inteligencia contra amenazas más reciente y capacítelos periódicamente con entrenamiento profesional. Todo lo anterior está disponible en la estructura de Kaspersky Expert Security.
- Junto con la protección adecuada de endpoints, los servicios dedicados pueden ayudar contra los ataques más prominentes. El servicio Kaspersky Managed Detection and Response puede ayudar a identificar y detener ataques en sus primeras etapas, antes de que los atacantes logren sus objetivos.

Lea el informe completo sobre FinFisher en Securelist.

![](https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Espias-p.jpg)

<table style="height: 42px;" width="569">
<tbody>
<tr>
<td style="text-align: justify;"><sub><strong>Nuestras noticias también son publicadas a través de nuestra cuenta en Twitter <a href="https://twitter.com/itnewslat?lang=es">@ITNEWSLAT</a> y en la aplicación <a href="https://squidapp.co/en/">SQUID</a></strong></sub></td>
</tr>
</tbody>
</table>

<img src="https://tracker.metricool.com/c3po.jpg?hash=56f88a41e39ab42c063cc51676587a04"/>