---
layout: posts
color-schema: red-dark
date: '2024-10-09 09:06 -0400'
published: true
superNews: false
superArticle: false
year: '2024'
title: Alertan sobre nuevo programa espía
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/refs/heads/master/img/540x320/Alerta-p.jpg
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/refs/heads/master/img/1024x680/Alerta-g.jpg
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
week: '41'
---
El grupo BlindEagle APT (Amenaza Avanzada Persistente, por sus siglas en inglés) ha introducido varias actualizaciones en una de sus últimas campañas de espionaje dirigidas a usuarios y organizaciones de Colombia, según ha informado el equipo de Investigación y Análisis Global de Kaspersky (GReAT). Las actualizaciones incluyen un nuevo plugin de espionaje y el uso de sitios brasileños legítimos de alojamiento de archivos durante el proceso de infección. El grupo está incluyendo cada vez más archivos en portugués en su código malicioso, mientras que antes utilizaba predominantemente el español. Kaspersky también ha observado que BlindEagle ha lanzado otra campaña que emplea la técnica DLL sideloading, poco habitual en el grupo.

Este grupo, conocido desde 2018, ha evolucionado recientemente en sus métodos de espionaje. Tras alternar entre diferentes troyanos de acceso remoto (RAT) de código abierto, el actor de la amenaza ha elegido njRAT como su herramienta principal en una de las últimas campañas de mayo de 2024. Este malware permite el registro de pulsaciones de teclas, el acceso a la cámara web, el robo de detalles del equipo, capturas de pantalla, la monitorización de aplicaciones y otras actividades de espionaje, pero se ha actualizado con capacidades de ataque adicionales: el troyano ahora admite una extensión de plugin especial que permite la ejecución de binarios y archivos .NET. El alcance potencial de este plugin incluye la ejecución de módulos de espionaje adicionales y la recopilación de información más sensible.

“El impacto real de esta actualización aún está por verse. Los actores de la amenaza pueden tener como objetivo una amplia gama de información sensible. En campañas anteriores, el grupo ha utilizado módulos para filtrar la ubicación de la víctima, obtener información detallada del sistema, como las aplicaciones instaladas, desactivar las soluciones de ciberseguridad e inyectar cargas útiles maliciosas como Meterpreter”, explica Leandro Cuozzo, analista de Seguridad en el Equipo Global de Investigación y Análisis para América Latina en Kaspersky.

Nuevo proceso de infección y tendencia creciente a utilizar el código malicioso en portugués
Para distribuir el malware y el nuevo plugin, los atacantes infectan primero el sistema mediante phishing selectivo. Envían correos electrónicos haciéndose pasar por una entidad gubernamental, notificando a las víctimas de una falsa multa de tráfico. El correo electrónico incluye un archivo adjunto malicioso que parece ser un PDF, pero en realidad es un Visual Basic Script (VBS) malicioso que descarga un malware espía en el equipo de la víctima en una serie de acciones.

En esta campaña, los investigadores de Kaspersky observaron que el dropper contiene cada vez más archivos en portugués, sobre todo en variables, nombres de funciones y comentarios.

“Hay una tendencia creciente de BlindEagle a utilizar el portugués, lo que sugiere que el grupo está posiblemente colaborando con actores de amenazas externos. Anteriormente, el español predominaba en sus artefactos, pero en las campañas del año pasado, el grupo empezó a utilizar cada vez más algunas funciones y nombres de variables en portugués. En esta campaña, este idioma se utiliza ampliamente. Además de utilizarlo, el grupo ha empezado a utilizar dominios brasileños para la carga de malware en varias fases, lo que apoya la teoría de que pueden estar trabajando con alguien ajeno al 'equipo'”, explica Leandro Cuozzo.

El grupo utilizó un sitio brasileño de alojamiento de imágenes para colocar el código malicioso en las máquinas de las víctimas. Anteriormente, utilizaban servicios como Discord o Google Drive. El script malicioso ejecuta un comando para descargar imágenes del sitio de alojamiento recién empleado, que contienen código malicioso que se extrae y ejecuta en el equipo de la víctima.
 
**Una de las imágenes con código oculto descargada en los equipos de las víctimas**

“En el panorama digital actual, en rápida evolución, la proliferación de sofisticadas campañas de ciberespionaje subraya la necesidad crítica de que las organizaciones y los individuos se mantengan siempre alerta y se fortalezcan frente a las amenazas emergentes”, afirma Leandro Cuozzo. “La continua evolución de las tácticas maliciosas exige un enfoque proactivo de la ciberseguridad. Esto incluye aprovechar la inteligencia robusta de amenazas y las tecnologías de detección a la vanguardia, así como fomentar una cultura de ciberconciencia y resiliencia”.

Kaspersky también observó que BlindEagle lanzó otra campaña en junio de 2024, empleando la técnica DLL sideloading, un método utilizado para ejecutar código malicioso a través de las bibliotecas de vínculos dinámicos (DLL) de Windows, que no es habitual en este tipo de amenazas. Como vector inicial, el grupo enviaba supuestos “documentos” que en realidad eran archivos PDF o DOCX maliciosos, y engañaba a las víctimas para que hicieran clic en enlaces incrustados para descargar documentos ficticios de demandas judiciales. Estos documentos eran archivos ZIP que contenían un ejecutable que iniciaba la infección mediante carga lateral, junto con varios archivos maliciosos utilizados en la cadena de ataque. Los autores de la amenaza eligieron una versión de AsyncRAT utilizada anteriormente en varias campañas.

BlindEagle (también conocido como APT-C-36) es un grupo APT conocido por sus técnicas y métodos de ataque simples pero eficaces. El grupo es conocido por sus campañas persistentes dirigidas a organizaciones y a usuarios individuales en Colombia, Ecuador y otros países de Latinoamérica. Se han dirigido a entidades de múltiples sectores, incluyendo instituciones gubernamentales, organizaciones de energía y petróleo y gas, empresas financieras, entre otros. Conocido por utilizar de forma rotativa diferentes RAT de código abierto, como njRAT, Lime-RAT o BitRAT, el objetivo principal del grupo es espiar a las víctimas y robar información financiera. Demuestra adaptabilidad a la hora de configurar los objetivos de sus ciberataques y ha demostrado versatilidad para moverse entre los ataques estrictamente financieros y las operaciones de espionaje.  

En las campañas de espionaje llevadas a cabo en mayo y junio, el 87% de las personas y organizaciones objetivo se encontraban en Colombia, especialmente en los sectores de la administración pública, educación, salud y transporte, aunque sin limitarse a ellos.

Para permanecer protegido frente a la amenaza, los investigadores recomiendan seguir estas reglas:

- **Es importante que todo el mundo se mantenga alerta**, especialmente quienes puedan ser objeto de espionaje. Los actores de amenazas se disfrazan de organismos gubernamentales, pero estas entidades no suelen ponerse en contacto con los individuos por correo electrónico para recibir notificaciones legales. Lo mismo ocurre con los bancos y las instituciones financieras, que a menudo sirven de señuelo para que las víctimas hagan clic en contenido malicioso. Al recibir una solicitud de este tipo, compruebe siempre su legitimidad. Manténgase a salvo siendo precavido y verificando la autenticidad de cualquier correo electrónico inesperado.
- **Los mensajes de organizaciones oficiales, como bancos, agencias tributarias, tiendas en línea, agencias de viajes, compañías aéreas, etc**., también requieren escrutinio; incluso los mensajes internos de su propia oficina. No es tan difícil fabricar una carta falsa que parezca legítima.
- **Instala una solución de seguridad de confianza y sigue sus recomendaciones**. Después, las soluciones de seguridad resolverán la mayoría de los problemas automáticamente y te alertarán si es necesario.

![](https://raw.githubusercontent.com/itnewslat/assets/refs/heads/master/img/540x320/Alerta-p.jpg)

<table style="height: 42px;" width="569">
<tbody>
<tr>
<td style="text-align: justify;"><sub><strong>Nuestras noticias también son publicadas a través de nuestra cuenta en Twitter <a href="https://twitter.com/itnewslat?lang=es">@ITNEWSLAT</a> y en la aplicación <a href="https://squidapp.co/en/">SQUID</a></strong></sub></td>
</tr>
</tbody>
</table>

<img src="https://tracker.metricool.com/c3po.jpg?hash=56f88a41e39ab42c063cc51676587a04"/>