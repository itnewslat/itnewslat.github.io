---
layout: posts
color-schema: red-dark
date: '2023-06-05 06:24 -0500'
published: true
superNews: false
superArticle: false
year: '2023'
title: Kaspersky informa sobre nueva campaña APT móvil dirigida a dispositivos iOS
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/iphone-apps-g.jpg
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/iphone-apps-p.jpg
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
week: '23'
---
Los investigadores de Kaspersky han descubierto una campaña en curso de amenaza persistente avanzada (APT, por sus siglas en inglés) móvil dirigida a dispositivos iOS con malware previamente desconocido. Apodada como 'Operación Triangulación', la campaña distribuye exploits, sin la necesidad de acción alguna por parte de la víctima, a través de iMessage para ejecutar malware y obtener control total sobre el dispositivo y los datos del usuario, con el objetivo final de espiar a los usuarios de forma sigilosa.  

Esta campaña de APT móvil fue descubierta mientras expertos de la empresa monitoreaban el tráfico de su red Wi-Fi corporativa utilizando la Plataforma de Análisis y Monitoreo Unificado de Kaspersky (Kaspersky Unified Monitoring and Analysis Platform o KUMA). Tras un análisis profundo, los investigadores de Kaspersky descubrieron que el actor de amenazas ha estado apuntando a los dispositivos iOS de docenas de empleados de la empresa.

La investigación de la técnica de ataque aún está en curso, pero hasta ahora los investigadores de Kaspersky pudieron identificar la secuencia general de infección. La víctima recibió un mensaje a través de iMessage con un archivo adjunto que contenía un exploit de clic cero. Sin más interacción, el mensaje desencadenó una vulnerabilidad que condujo a la ejecución de código para escalar privilegios y proporcionó control total sobre el dispositivo infectado. Una vez que el atacante estableció con éxito su presencia en el dispositivo, el mensaje se eliminó automáticamente.

Además, el software espía transmitía silenciosamente información privada a servidores remotos: incluidas grabaciones de micrófonos, fotos de mensajeros instantáneos, geolocalización y datos sobre otras actividades del propietario del dispositivo infectado.

Durante el análisis, se confirmó que no hubo impacto en los productos, tecnologías y servicios de la empresa, y que no se vieron afectados los datos de los usuarios de los clientes de Kaspersky ni los procesos críticos de la empresa. Los atacantes solo podían acceder a los datos almacenados en los dispositivos infectados. Aunque no es seguro, se cree que el ataque no estaba dirigido específicamente a Kaspersky: la empresa es la primera en descubrirlo. Es probable que los próximos días brinden más claridad sobre la extensión global de este ciberataque.

“Cuando se trata de ciberseguridad, incluso los sistemas operativos más seguros pueden verse comprometidos. Dado que los actores de APT evolucionan sus tácticas constantemente y buscan nuevas debilidades para explotar, las empresas deben priorizar la seguridad de sus sistemas. Esto implica priorizar la educación y la concientización de los empleados, y brindarles la inteligencia de amenazas más reciente, así como las herramientas para reconocer y defenderse de amenazas potenciales de manera efectiva”, comentó Igor Kuznetsov, jefe del Equipo Global de Investigación y Análisis (GReAT) para EMEA en Kaspersky. “Nuestra investigación de la operación Triangulación continúa. Anticipamos que más detalles se darán a conocer pronto, ya que puede haber objetivos de esta operación de espionaje fuera de Kaspersky”.

Para evitar ser víctima de un ataque dirigido por un actor de amenazas conocido o desconocido, los investigadores de Kaspersky recomiendan implementar las siguientes medidas:

Para la detección, investigación y corrección oportuna de incidentes a nivel del endpoint, use una solución de seguridad confiable para empresas, como Kaspersky Unified Monitoring and Analysis Platform (KUMA)
Actualice el sistema operativo Microsoft Windows y otros software de terceros tan pronto le sea posible y de manera regular.

Proporcione a su equipo SOC acceso a la inteligencia de amenazas más reciente. Kaspersky Threat Intelligence es un único punto de acceso para la inteligencia de amenazas de la empresa, la cual proporciona información y datos sobre ataques cibernéticos recopilados por Kaspersky durante más de 20 años.

Mejore las habilidades de su equipo de seguridad cibernética para abordar las últimas amenazas dirigidas con la capacitación en línea de Kaspersky desarrollada por expertos de GReAT.

Dado que muchos ataques dirigidos comienzan con el phishing u otras técnicas de ingeniería social, proporcione capacitación sobre seguridad y enseñe habilidades prácticas a su equipo, por ejemplo, a través de Kaspersky Automated Security Awareness Platform.
 
Obtenga más información sobre “Operación Triangulación” en Securelist.com
Para revisar si su dispositivo iOS está infectado o no, siga las instrucciones en el sitio web.

![](https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/iphone-apps-p.jpg)

<table style="height: 42px;" width="569">
<tbody>
<tr>
<td style="text-align: justify;"><sub><strong>Nuestras noticias también son publicadas a través de nuestra cuenta en Twitter <a href="https://twitter.com/itnewslat?lang=es">@ITNEWSLAT</a> y en la aplicación <a href="https://squidapp.co/en/">SQUID</a></strong></sub></td>
</tr>
</tbody>
</table>
<img src="https://tracker.metricool.com/c3po.jpg?hash=56f88a41e39ab42c063cc51676587a04"/>