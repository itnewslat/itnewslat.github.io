---
layout: posts
color-schema: red-dark
date: '2020-09-02 16:01 -0400'
published: true
superNews: false
superArticle: false
year: '2020'
title: >-
  Transparent Tribe: nuevo spyware para Android se distribuye bajo la apariencia
  de apps populares
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Transparent-Tribe-p.jpg
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/Transparent-Tribe-g.jpg
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
week: '36'
---
**El software espía se disfraza de aplicaciones falsas de contenido para adultos y de rastreo de COVID-19 para infectar a sus víctimas**

Los investigadores de Kaspersky han dado a conocer sus hallazgos relacionados con una nueva aplicación de software espía para Android distribuida por Transparent Tribe, un prolífico grupo APT, bajo la apariencia de contenido para adultos y aplicaciones oficiales sobre COVID-19. Esto demuestra la iniciativa del grupo para extender sus operaciones e infectar a dispositivos móviles. 

El tema de la pandemia se ha convertido en un asunto muy utilizado por agentes de amenazas que lanzan ataques de ingeniería social. Esta fue la técnica que Transparent Tribe, un agente de amenazas rastreado por Kaspersky durante más de cuatro años, comenzó a adoptar en sus campañas. Hallazgos recientes muestran que el grupo ha estado trabajando activamente para mejorar su conjunto de herramientas y expandir su alcance para incluir amenazas a dispositivos móviles. 

Durante su investigación sobre Transparent Tribe, Kaspersky encontró un nuevo implante de Android utilizado por este grupo para espiar dispositivos móviles y distribuido en la India como aplicaciones pornográficas y apps de rastreo de COVID-19 falsas. La conexión entre el grupo y esas dos aplicaciones pudo ser realizada gracias a los dominios relacionados que el agente utilizó para alojar archivos maliciosos empleados en diferentes campañas.

Ambas aplicaciones, una vez descargadas, intentan instalar otro archivo de paquetes de Android –una versión modificada de la herramienta de acceso remoto de Android AhMyth (RAT)–, un malware de código abierto que se puede bajar de GitHub, y fue creado agregando una carga maliciosa dentro de otras aplicaciones legítimas.

La versión modificada del malware es diferente en cuanto a funcionalidad a la versión estándar. Incluye nuevas funciones que fueron agregadas por los atacantes para mejorar la exfiltración de datos, pero carece de algunas funciones básicas, como la de robar fotografías de la cámara. La aplicación es capaz de bajar nuevas aplicaciones al teléfono, acceder a los mensajes SMS, el micrófono y los registros de llamadas, rastrear la ubicación del dispositivo y enumerar y subir archivos a un servidor externo desde el teléfono.

“Los nuevos hallazgos subrayan los esfuerzos de los miembros de Transparent Tribe para agregar nuevas herramientas que amplíen aún más sus operaciones y lleguen a sus víctimas a través de diferentes vectores de ataque, que ahora incluyen los dispositivos móviles. También vemos que el agente está trabajando constantemente para mejorar y modificar las herramientas que utiliza. Para mantenerse protegidos contra esas amenazas, los usuarios deben ser más cuidadosos que nunca al evaluar las fuentes de donde bajan contenido y asegurarse de que sus dispositivos estén protegidos. Esto es especialmente relevante para aquellos que saben que podrían convertirse en el objetivo de un ataque APT", comenta Giampaolo Dedola, investigador senior de seguridad en Kaspersky.

Información detallada sobre los indicadores de compromiso relacionados con este grupo, incluidos los hashes de archivos y los servidores C2, se pueden acceder en el Kaspersky Threat Intelligence Portal.

Para mantenerse a salvo de la amenaza, Kaspersky recomienda tomar las siguientes medidas de seguridad:

- **Proporcione a su equipo de SOC acceso a la inteligencia de amenazas (TI, por sus siglas en inglés) más reciente**. El Kaspersky Threat Intelligence Portal, un único punto de acceso para el TI de la empresa, proporciona información y conocimientos sobre ciberataques recopilados por Kaspersky durante más de 20 años.
- **Compruebe que su solución de seguridad para endpoints proporcione protección para los dispositivos móviles**. Kaspersky Endpoint Security for Business garantiza la protección contra el malware móvil y avala que solo se puedan utilizar aplicaciones confiables en dispositivos corporativos.
- **Asegúrese de que sus empleados conozcan los conceptos básicos de seguridad para dispositivos móviles, para lo cual debe ofrecerles un curso de concienciación sobre seguridad que abarque esos aspectos**. Por ejemplo, Kaspersky Adaptive Online Training puede ayudar.

Para obtener más detalles sobre los hallazgos relacionados con Transparent Tribe, consulte el informe completo en Securelist.

<img src="https://tracker.metricool.com/c3po.jpg?hash=56f88a41e39ab42c063cc51676587a04"/>