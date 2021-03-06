---
layout: posts
color-schema: red-dark
date: '2019-04-17 07:35 -0400'
published: true
superNews: false
superArticle: false
year: '2019'
title: Kaspersky Lab descubre nueva vulnerabilidad crítica en Windows
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Vulnerabilidad-Windows-p.jpg
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/Vulnerabilidad-Windows-g.jpg
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
week: '16'
---
 
**Vulnerabilidad de día cero estaba siendo explotada por un grupo desconocido y buscaba obtener el control total de la máquina de sus victimas**

Las tecnologías automatizadas de Kaspersky Lab han detectado nuevamente una vulnerabilidad previamente desconocida en Microsoft Windows. Esta vulnerabilidad estaba siendo explotada por un grupo criminal desconocido en un intento por obtener el control total de un dispositivo específico. El ataque fue dirigido al núcleo del sistema –su kernel– valiéndose de una puerta trasera construida a partir de un elemento esencial del sistema operativo Windows. 

Las puertas traseras son un tipo de malware extremadamente peligroso, ya que permiten que los agentes de amenazas controlen las máquinas infectadas de manera discreta con fines maliciosos. Generalmente, la adquisición de privilegios por terceros es difícil de ocultar de las soluciones de seguridad. Sin embargo, una puerta trasera que explota un error previamente desconocido en el sistema –una vulnerabilidad de día cero– tiene muchas más oportunidades de pasar desapercibida bajo el radar ya que las soluciones de seguridad comunes no reconocen la infección del sistema ni protegen a los usuarios de una amenaza desconocida. 

No obstante, la tecnología de prevención de exploits de Kaspersky Lab fue capaz de detectar el intento de explotar la vulnerabilidad desconocida en el sistema operativo Microsoft Windows. El contexto del ataque fue el siguiente: una vez que el archivo malicioso fue ejecutado, la instalación del malware tuvo inicio. La infección aprovechó una vulnerabilidad de día cero y logró privilegios para mantenerse en la máquina de la víctima. El malware inició entonces el lanzamiento de una puerta trasera desarrollada con un elemento legítimo de Windows, presente en todas las máquinas que funcionan con este sistema operativo: un marco de programación o scripting llamado Windows PowerShell. Esto permitió a los cibercriminales actuar sigilosamente y evitar la detección, ahorrándoles tiempo para escribir el código de las herramientas maliciosas. El malware descargó entonces otra puerta trasera desde un popular servicio de almacenamiento de texto legítimo, lo que a su vez dio a los criminales control total sobre el sistema infectado.

“En este ataque, observamos dos tendencias principales que a menudo vemos en las Amenazas persistentes avanzadas (APTs, por sus siglas en inglés). Primero, el uso de ataques que explotan la escalada de privilegios locales para mantenerse en la máquina de la víctima. Segundo, el uso de marcos de programación legítimos como Windows PowerShell para actividades maliciosas en la máquina de la víctima. Esta combinación proporciona a los cibercriminales la posibilidad de burlar las soluciones de seguridad corrientes. Para detectar este tipo de técnicas, la solución de seguridad debe utilizar motores de prevención de vulnerabilidades y detección de comportamientos”, explica Anton Ivanov, experto en seguridad de Kaspersky Lab.

Los productos de Kaspersky Lab detectan estos exploits como:

- •	**HEUR**:Exploit.Win32.Generic
- •	**HEUR**:Trojan.Win32.Generic
- •	**PDM**:Exploit.Win32.Generic

La vulnerabilidad fue reportada a Microsoft y parcheada el 10 de abril.

Para evitar la instalación de puertas traseras a través de vulnerabilidades de día cero, Kaspersky Lab recomienda tomar las siguientes medidas de seguridad:

- **Instale el parche de Windows tan pronto sea posible**. Una vez esta esté disponible e instalada, los agentes de amenazas pierden la oportunidad de aprovechar la vulnerabilidad.  
- **Si le preocupa la seguridad general de su organización, asegúrese de que todo software sea actualizado tan pronto como se dé a conocer un nuevo parche de seguridad**. Use productos de seguridad con capacidades de evaluación de vulnerabilidad y administración de parches para asegurarse de que estos procesos se ejecuten automáticamente
- **Para protegerse contra amenazas desconocidas**, utilice una solución de seguridad probada que tenga capacidades de detección basadas en el comportamiento, como Kaspersky Endpoint Security
- **Asegúrese de que su personal de seguridad tenga acceso a los reportes de inteligencia de ciberamenazas más recientes**. Informes privados sobre los últimos acontecimientos en el panorama de amenazas están disponibles para los clientes del servicio Kaspersky Intelligence Reporting. Para más detalles, contacte a: intelreports@kaspersky.com
- **Por último, pero no menos importante**, asegúrese de que su personal esté capacitado en los aspectos básicos de la higiene de la ciberseguridad.
•	
Para más detalles sobre el nuevo exploit, vea el informe completo en Securelist.

Para conocer más de cerca las tecnologías que detectaron éste y otros ataques de día cero en Microsoft Windows, acceda al seminario web grabado de Kaspersky Lab disponible bajo demanda.
