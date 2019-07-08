---
layout: posts
color-schema: red-dark
date: '2019-07-08 17:55 -0400'
published: true
superNews: false
superArticle: false
year: '2019'
title: >-
  Kaspersky alerta sobre nuevo ransomware que aprovecha peligrosa vulnerabilidad
  de Windows 
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
week: '28'
---
**Sodin ha sido detectado en Asia, Europa, Norteamérica y América Latina**

Los investigadores de Kaspersky han descubierto a Sodin, un nuevo ransomware que aprovecha una vulnerabilidad de día cero de Windows para obtener privilegios de administrador en el sistema infectado. El ransomware también aprovecha la arquitectura de la Unidad Central de Procesamiento (CPU) para evitar ser detectado, una funcionalidad que no se ve a menudo en este tipo de amenazas. Además, en algunos casos, el malware no requiere la interacción del usuario ya que los atacantes simplemente lo plantan en servidores vulnerables.

El ransomware, o el cifrado o bloqueo de datos o dispositivos acompañado de una demanda de dinero, es una ciberamenaza persistente que afecta tanto a individuos como organizaciones de todos los tamaños en todo el mundo. La mayoría de las soluciones de seguridad detectan las versiones comunes y los vectores de ataque establecidos. Sin embargo, métodos complejos como el de Sodin que implican el aprovechamiento de una vulnerabilidad de día cero, descubierta recientemente en Windows (CVE-2018-8453), para escalar privilegios pueden evitar sospechas durante un largo tiempo.

Este malware parece ser parte de un esquema RAAS (siglas en inglés de ransomware-as-a-service), lo que significa que sus distribuidores pueden elegir libremente la forma en que este se propaga. Hay indicios de que el malware se está distribuyendo a través de un programa de afiliados. Por ejemplo, los programadores del malware han dejado en su funcionalidad ‘un agujero’ que les permite descifrar los archivos sin que sus afiliados sepan: una 'clave maestra' que no requiere la clave del distribuidor para el descifrado (normalmente las claves del distribuidor son las que se han utilizado para descifrar los archivos de las víctimas que pagan el rescate). Los programadores podrían utilizar esta función para controlar el descifrado de los datos de la víctima o la distribución del ransomware, eliminando, por ejemplo, a ciertos distribuidores del programa de afiliados al hacer inútil el malware.

Además, aunque amenazas de ransomware usualmente requieren algún tipo de interacción con el usuario, como abrir un archivo adjunto en un mensaje de correo electrónico o hacer clic en un enlace malicioso, los atacantes detrás de Sodin no necesitan esa ayuda, ya que generalmente encuentran un servidor vulnerable y envían una orden para bajar el archivo malicioso llamado "radm.exe", el cual guarda el ransomware localmente y lo pone en marcha.

La mayoría de los objetivos de Sodin han sido detectados en Asia: el 17,6% de los ataques se han detectado en Taiwán, el 9,8% en Hong Kong y el 8,8% en la República de Corea. Sin embargo, también se han observado ataques en Europa, Norteamérica y América Latina. Los cibercriminales detrás de este ataque exigen US$2.500 equivalentes en Bitcoin de cada víctima.

Según investigadores de Kaspersky, lo que hace que Sodin sea aún más difícil de detectar es el uso de la técnica "Heaven's Gate". Esta permite que un malware ejecute código de 64 bits a partir de un proceso de 32 bits, lo cual no es una práctica común y no suele ocurrir en ransomware.

Los investigadores creen que la técnica de Heaven's Gate se usa en Sodin por dos razones principales:

- Hacer que el análisis del código malicioso sea más difícil, pues no todos los examinadores de código soportan esta técnica y, por lo tanto, no pueden reconocerla.
- Evadir la detección mediante soluciones de seguridad instaladas. Esta técnica se usa para eludir la detección basada en la emulación, un método para descubrir amenazas previamente desconocidas que implica el lanzamiento de código que se comporta de manera sospechosa en un entorno virtual que emula a una computadora real.

“_Aunque los ataques de ransomware han disminuido un 30% en los últimos dos años, hemos visto un cambio en su comportamiento: los cibercriminales eligen sus objetivos en base a su potencial, dándole preferencia a las grandes instituciones y compañías que pueden pagar el rescate solicitado, disminuyendo el volumen de ataques contra usuarios domésticos. Estos ataques centrados en organizaciones buscan dejarlas sin acceso a sus sistemas durante mucho tiempo, causando daños considerables que a su vez han llevado a que los cibercriminales empleen técnicas cada vez más avanzadas, como en el caso de Sodin_”, comenta **Roberto Martínez, analista senior de seguridad en Kaspersky**. 

Para evitar ser víctimas de ransomware como Sodin, los investigadores de Kaspersky aconsejan a las empresas:

- Asegurarse de que el software utilizado en su empresa se actualice regularmente a las versiones más recientes. Los productos de seguridad con capacidades de Evaluación de vulnerabilidades y administración de parches pueden ayudar a automatizar estos procesos.
- Utilizar una solución de seguridad robusta, como Kaspersky Endpoint Security for Business, que está equipada con capacidades de detección basadas en el comportamiento para proteger eficazmente contra amenazas conocidas y desconocidas, incluidas las vulnerabilidades.

Todas las soluciones de Kaspersky detectan el ransomware como Trojan-Ransom.Win32.Sodin. La vulnerabilidad CVE-2018-8453 que utiliza el ransomware fue detectada anteriormente por la tecnología de Kaspersky en campañas maliciosas, las cuales los investigadores acreditan pertenecer al grupo de hackers FruityArmor. La vulnerabilidad fue enmendada el 10 de octubre de 2018.

El informe completo sobre Sodin está disponible en **[Securelist.com](https://securelist.lat/sodin-ransomware/89189/)**