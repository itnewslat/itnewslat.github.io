---
layout: posts
color-schema: red-dark
date: '2019-11-06 18:45 -0400'
published: true
superNews: false
superArticle: false
year: '2019'
title: 'Kaspersky descubre vulnerabilidad de día cero en Google Chrome '
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Ataque-Google-p.jpg
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/Ataque-Google-g.jpg
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
week: '45'
---
Las tecnologías automatizadas de Kaspersky han detectado una nueva vulnerabilidad explotada en el navegador web Google Chrome. Kaspersky, la cual ha identificado la vulnerabilidad como **[CVE-2019-13720](http://cve.mitre.org/cgi-bin/cvename.cgi?name=2019-13720)**, informó a Google sobre su hallazgo y este solucionó la vulnerabilidad con un **[parche](https://chromereleases.googleblog.com/2019/10/stable-channel-update-for-desktop_31.html)**. Tras la revisión del PoC proporcionado, Google confirmó que es una vulnerabilidad de día cero.

Las vulnerabilidades de día cero son errores de software previamente desconocidos que pueden ser explotados por los atacantes para infligir daños graves e inesperados. El nuevo exploit se usa en ataques que aprovechan una inyección al estilo waterhole en un portal de noticias de idioma coreano. Un código de JavaScript malicioso se inserta en la página principal y carga un script de creación de perfiles desde un sitio remoto para verificar si el sistema de la víctima podría infectarse al examinar diferentes versiones de las credenciales de usuario del navegador. La vulnerabilidad intenta explotar el error a través del navegador Google Chrome y el script verifica si se está utilizando la versión 65 o posterior. El exploit le da al atacante una condición Use-After-Free (UaF), la cual es muy peligrosa porque puede conducir a escenarios de ejecución de código.

El exploit detectado se utilizó en lo que los expertos de Kaspersky llaman "Operation WizardOpium". Ciertas similitudes en el código apuntan a un posible vínculo entre esta campaña y los ataques de Lazarus. Además, el perfil del sitio web objetivo es similar al que se encontró en los ataques anteriores de DarkHotel, el cual recientemente ha desplegado ataques de banderas falsas comparables.

La vulnerabilidad explotada fue detectada por la tecnología de prevención de exploits de Kaspersky, integrada en la mayoría de los productos de la compañía.

"El descubrimiento de un nuevo día cero de Google Chrome en activo demuestra una vez más que la colaboración entre la comunidad de seguridad y los desarrolladores de software, así como la inversión constante en tecnologías de prevención de exploits, es lo único que puede mantenernos a salvo de ataques repentinos y ocultos por actores de amenazas ", dijo Anton Ivanov, experto en seguridad de Kaspersky.

Los productos de Kaspersky detectan el exploit como PDM: Exploit.Win32.Generic.

Kaspersky recomienda tomar las siguientes medidas de seguridad:

- Instale el **[parche](https://chromereleases.googleblog.com/2019/10/stable-channel-update-for-desktop_31.html)** de Google para la nueva vulnerabilidad lo antes posible.
- Asegúrese de actualizar regularmente todo el software utilizado en su organización y cada vez que se publique un nuevo parche de seguridad. Los productos de seguridad con capacidades de evaluación de vulnerabilidad y gestión de parches pueden ayudar a automatizar estos procesos.
- Elija una solución de seguridad comprobada, como Kaspersky Endpoint Security for Business, que esté equipada con capacidades de detección basadas en el comportamiento para una protección efectiva contra amenazas conocidas y desconocidas, incluidos los exploits.
- Además de adoptar una protección para endpoints esencial, implemente una solución de seguridad de nivel corporativo que detecte amenazas avanzadas en la red en una etapa temprana, como la Plataforma Kaspersky Anti-Targeted Attack.
- Asegúrese de que su equipo de seguridad tenga acceso a la inteligencia de ciberamenazas más reciente. Los informes privados sobre los últimos desarrollos en el panorama de amenazas están disponibles para los clientes de Kaspersky Intelligence Reporting. Para más detalles, contacte: intelreports@kaspersky.com.
- Por último, pero no menos importante, asegúrese de que su personal esté capacitado para comprender e implementar los conceptos básicos en materia de ciberseguridad.

Para más detalles sobre el nuevo exploit, lea el informe completo en **[Securelist](https://securelist.com/chrome-0-day-exploit-cve-2019-13720-used-in-operation-wizardopium/94866/)**. 