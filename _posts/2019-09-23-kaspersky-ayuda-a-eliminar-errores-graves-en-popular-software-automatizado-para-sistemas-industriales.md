---
layout: posts
color-schema: red-dark
date: '2019-09-23 07:12 -0400'
published: true
superNews: false
superArticle: false
year: '2019'
title: >-
  Kaspersky ayuda a eliminar errores graves en popular software automatizado
  para sistemas industriales 
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Kaspersky-ICS-CERT-p.jpg
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/Kaspersky-ICS-CERT-g.jpg
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
week: '39'
---
Los investigadores de Kaspersky ICS CERT han descubierto varias vulnerabilidades en un popular framework o marco de trabajo utilizado para desarrollar dispositivos industriales como los controladores lógicos programables (PLC, por sus siglas en inglés) y la interfaz hombre-máquina (HMI). Estos dispositivos están en el corazón de casi cualquier instalación industrial automatizada, desde infraestructura crítica hasta procesos de producción. Las vulnerabilidades descubiertas permitían a atacantes realizar destructivos ataques encubiertos locales y a distancia, a la organización donde se utilizan los PLC desarrollados por medio de este marco vulnerable. El marco fue desarrollado por CODESYS®, quien reparó las vulnerabilidades después de recibir notificación de Kaspersky.

Los PLC son dispositivos que automatizan procesos que anteriormente tenían que realizarse manualmente o con la ayuda de dispositivos electromecánicos complejos. Para que un PLC funcione correctamente, estos deben programarse a través de un marco de software especial que ayuda a los ingenieros a codificar y cargar las instrucciones del programa de automatización de procesos en el PLC. También proporciona un entorno de ejecución del tiempo en que ejecuta el código del programa PLC. El software se utiliza en varios entornos, incluida la producción, la generación de energía, las infraestructuras de ciudades inteligentes y muchos más. Como descubrieron los investigadores de Kaspersky, dicho software podría volverse vulnerable e interferir con el.

Los investigadores indagaron en una herramienta avanzada y poderosa diseñada para desarrollar y controlar programas de PLC. Como resultado, pudieron identificar más de una docena de problemas de seguridad en el protocolo de red principal del marco y en el tiempo de ejecución del marco, cuatro de las cuales fueron consideradas especialmente graves y se les asignaron IDs separados: CVE-2018-10612, CVE -2018-20026, CVE-2019-9013 y CVE-2018-20025.

Dependiendo de cuál de estas fallas aprovecha, un atacante podría interceptar y falsificar defectos de órdenes en la red y datos de telemetría, robar y reutilizar contraseñas y otra información de autenticación, inyectar código malicioso en el tiempo de ejecución y elevar los privilegios del atacante en el sistema, así como otras acciones no autorizadas, en todas ellas ocultando efectivamente su presencia en la red atacada. En la práctica, esto significa que un atacante podría corromper la funcionalidad de los PLC en una instalación en particular u obtener un control total sobre ella, mientras permanece bajo el radar del personal de tecnología de operación (OT, por sus siglas en inglés) de la instalación atacada. Luego podrían interrumpir las operaciones o robar datos sensibles, como las propiedades intelectuales y otra información confidencial, como las capacidades de producción en fábrica o los nuevos productos en producción. A esto se agrega la posibilidad de supervisar las operaciones de la instalación y reunir otra inteligencia que pueda considerarse sensible en la organización atacada.

Tras el descubrimiento, Kaspersky informó de inmediato al proveedor del software afectado sobre estos problemas. Todas las vulnerabilidades que se reportaron ya están reparadas, y los parches están disponibles para los usuarios del marco.

“Las vulnerabilidades que descubrimos estaban proporcionando una superficie de ataque sumamente amplia para el comportamiento potencialmente malicioso y, dada la extensión del software en cuestión, estamos agradecidos con el proveedor del software por su pronta respuesta y su capacidad para solucionar rápidamente estos problemas”, comentó Alexander Nochvay, investigador de seguridad de Kaspersky ICS CERT. “Nos gustaría pensar que, como resultado de esta investigación, pudimos hacer que el trabajo para los atacantes sea mucho más difícil. Sin embargo, muchas de estas vulnerabilidades se habrían descubierto antes si la comunidad de seguridad estuviera involucrada en el desarrollo del protocolo de comunicación de red en etapas anteriores. Creemos que la colaboración con la comunidad de seguridad debería convertirse en una buena práctica para los programadores de componentes importantes para sistemas industriales, incluidos tanto el hardware como el software. Especialmente teniendo en cuenta que la llamada Industria 4.0, que en gran parte se basa en las tecnologías automatizadas modernas, está a la vuelta de la esquina”. 

“La seguridad del producto es de suma importancia para el Grupo CODESYS. Por lo tanto, apreciamos los resultados exhaustivos de investigación proporcionados por Kaspersky ya que nos ayudan a hacer que CODESYS sea aún más seguro“, dijo Roland Wagner, jefe de Marketing de Productos en el Grupo CODESYS. “Desde hace muchos años, hemos estado invirtiendo considerables esfuerzos técnicos y administrativos para mejorar permanentemente características de seguridad de CODESYS. Todas las vulnerabilidades detectadas se investigan, evalúan, priorizan y publican de inmediato en un aviso de seguridad. Las correcciones en forma de actualizaciones de software se desarrollan rápidamente y se ponen a disposición de inmediato para todos los usuarios de CODESYS en la Tienda CODESYS". 

Para abordar los riesgos potenciales que conlleva la explotación de los problemas reportados, los especialistas de Kaspersky aconsejan las siguientes medidas:

- Se recomienda a los programadores que usan el marco, que soliciten la versión actualizada y que luego actualicen el firmware de los dispositivos si se crearon con la ayuda de este marco.
- Se recomienda a los ingenieros industriales que consideren actualizar el firmware de sus dispositivos con respecto a los procedimientos de administración de parches de su empresa si el dispositivo fue creado con la ayuda de este marco y si el programador del dispositivo emitió alguna actualización relevante para su producto.
- Los dispositivos, donde se implementan entornos de desarrollo y/o SCADA, deben estar equipados con protección relevante.
- Los dispositivos utilizados en entornos industriales deben funcionar en una red aislada y limitada.
- Hasta que se apliquen los parches de firmware, los equipos de seguridad que protegen las redes industriales deben considerar la implementación de medidas específicas, como soluciones de detección de ataques dirigidos, monitoreo de redes industriales, capacitación regular de seguridad del personal de TI y OT, y otras medidas de seguridad necesarias para proteger contra amenazas  complejas

Para obtener más información sobre esta investigación, lea el documento completo en el sitio web de **[Kaspersky ICS CERT](https://ics-cert.kaspersky.com/reports/2019/09/18/security-research-codesys-runtime-a-plc-control-framework-part-1/)**.