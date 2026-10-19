---
layout: posts
color-schema: red-dark
date: '2026-10-19 09:27 -0400'
published: true
superNews: false
superArticle: false
year: '2026'
title: "Amatera: cómo funciona el infostealer que lidera las detecciones en América Latina"
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/refs/heads/master/img/540x320/Amatera-p.jpg
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/refs/heads/master/img/1024x680/Amatera-g.jpg
categories:
    - Venezuela
    - Colombia
    - México
    - Panamá
    - Chile
    - Argentina
    - Perú
    - Ecuador
tags:
  - Seguridad
week: '43'
---
- **ESET Latinoamérica analiza Amatera, un infostealer que durante el primer semestre de 2026 registró el mayor volumen de detecciones de este tipo de malware en América Latina y que puede robar credenciales, cookies, tokens, billeteras de criptomonedas y otros datos sensibles.**

ESET, compañía líder en detección proactiva de amenazas, analiza Amatera, también conocido como ACR Stealer, un malware del tipo infostealer que se comercializa como Malware as a Service (MaaS). Su actividad en América Latina creció considerablemente en lo que va de 2026 y, durante la primera mitad del año, fue la familia de infostealers con más actividad, según las detecciones de ESET.

Amatera no limita su actividad a América Latina, sino que apunta a víctimas a nivel global. Su función es obtener datos como credenciales, cookies de sesión, tokens, billeteras de criptomonedas, información de mensajería, archivos e información de entornos de desarrollo. Una sola infección puede terminar en el secuestro de una cuenta, fraude financiero, robo de criptoactivos o una intrusión posterior en la organización donde trabaja la víctima.

“Amatera es un ejemplo de cómo funciona el mercado de los infostealers: sus desarrolladores mantienen el código, el panel y la infraestructura de soporte, mientras que clientes o afiliados pagan una suscripción para utilizar el malware en sus propias campañas. Su actividad no se limita a una única vía de distribución, sino que puede propagarse mediante sitios comprometidos, anuncios, documentos falsos, correos dirigidos y técnicas de ingeniería social como ClickFix”, explica Mario Micucci, Investigador de Seguridad Informática de ESET Latinoamérica.

**¿Qué es Amatera?**

Amatera es un infostealer para Windows escrito en C++ que se observó por primera vez en 2024. Se distribuye bajo un modelo de Malware as a Service (MaaS), mediante el cual sus desarrolladores mantienen el código, el panel y la infraestructura de soporte, mientras que los clientes o afiliados pagan por una suscripción para utilizarlo en sus propias campañas.

Según distintas compañías de seguridad, Amatera es un rebrand de ACR Stealer. Es decir, una versión actualizada del código que incluyó un cambio de nombre. A esta conclusión se llega por la similitud en el código de ambas familias de malware.

Para fines de 2024, el nombre de Amatera Stealer ya circulaba bajo un modelo de suscripción por 199 dólares mensuales y con soporte mediante Telegram.

**¿Qué información puede robar Amatera?**

El objetivo de Amatera es obtener información de valor fuera del equipo comprometido. Puede extraer credenciales almacenadas en navegadores, cookies, historiales, datos de formularios y tokens de sesión, así como buscar y extraer documentos sensibles y archivos sincronizados con OneDrive o SharePoint. También puede buscar datos de billeteras de criptomonedas mediante la manipulación del portapapeles.

Diversos análisis públicos dan cuenta de que este malware está en constante desarrollo para mejorar sus capacidades y funcionalidades. Asimismo, muestran que Amatera puede ser el payload final de cadenas muy diferentes, algo que encaja con un modelo MaaS en el que los afiliados eligen sus propios métodos de distribución.

**¿Cómo se distribuye Amatera?**

Las campañas públicas incluyen el uso de sitios web comprometidos, anuncios en buscadores, documentos falsos, correos dirigidos, archivos SVG y ClickFix mediante falsos CAPTCHA.

ClickFix es el patrón que más se repite en las campañas documentadas a nivel global. La víctima encuentra un mensaje que imita una verificación CAPTCHA, un error del navegador o una guía de instalación. El sitio le indica que copie y ejecute una instrucción en el equipo, consiguiendo así que una acción iniciada por la propia víctima lance las etapas siguientes.

Según datos de ESET, durante el primer semestre de 2025 las detecciones de ClickFix crecieron un 517% respecto del semestre anterior. La tendencia continuó durante la primera mitad de 2026, cuando las detecciones aumentaron un 108% en comparación con el segundo semestre de 2025.

Otro método utilizado para distribuir Amatera es a través de anuncios de Google. Una de las investigaciones mencionadas descubrió decenas de sitios falsos distribuidos mediante estos anuncios que se hacían pasar por herramientas de IA, como Claude Code, NotebookLM, JetBrains, Cline, Comet o Snowflake, y que apuntaban específicamente a desarrolladores que utilizan herramientas de IA.

**Amatera en América Latina**

En América Latina, los datos de ESET correspondientes al primer semestre de 2026 muestran que Amatera (Win/PSW.Amatera) es el infostealer con mayor volumen de detecciones, por encima de otras familias como Formbook, Vidar, Snakestealer, Lummastealer o Rhadamanthys.

Considerando que Amatera es relativamente nuevo y que su actividad es global, su presencia en la región debe ser tenida en cuenta por los equipos de TI y de ciberseguridad de las empresas, y también por los usuarios.

**¿Qué riesgos implica una infección de Amatera?**

Entre las posibles consecuencias de ser víctima de este infostealer se encuentran:

- Toma de cuentas personales o corporativas mediante contraseñas, cookies y tokens robados.
- Acceso no autorizado a correo, almacenamiento en la nube y documentos sincronizados.
- Robo de criptoactivos cuando se exponen billeteras, extensiones o frases de recuperación.
- Compromiso de infraestructura a través de claves SSH, credenciales FTP o secretos de desarrollo.
- Instalación de otras piezas de código malicioso.

Uso de una cuenta comprometida para fraude, campañas internas de phishing o intrusiones posteriores.
 
El riesgo corporativo crece cuando la víctima mezcla perfiles personales y laborales en el mismo navegador. Un equipo doméstico puede contener sesiones de correo empresarial, consolas en la nube, repositorios de código o servicios de recursos humanos. La información robada se convierte entonces en una puerta de entrada que otro actor puede comprar o explotar días después.

**¿Cómo prevenir y responder a una infección de Amatera?**

La prevención debe concentrarse en el momento en que la víctima recibe la instrucción y en las herramientas que la ejecutan. Una verificación CAPTCHA o una guía de instalación legítima no pide copiar comandos desde una página hacia Ejecutar, PowerShell, Terminal o MSHTA. Los anuncios de buscadores tampoco garantizan que un sitio sea oficial.

Entre las principales recomendaciones de ESET se destacan:

- Aplicar control de aplicaciones y reglas de reducción de superficie de ataque para limitar intérpretes y binarios del sistema usados fuera de su contexto normal.
- Supervisar PowerShell, MSHTA, Rundll32, Python, WebDAV, tareas programadas inusuales y el borrado del historial de PowerShell.
- Usar autenticación resistente al phishing y mantener sesiones de navegador con la menor duración compatible con el negocio.
- Separar perfiles personales y laborales y evitar guardar secretos de alto impacto en el navegador cuando exista una alternativa administrada.
- Filtrar sitios recién creados, páginas de instalación clonadas y descargas iniciadas desde publicidad cuando el contexto no las justifique.
 
“Ante una infección confirmada, aislar el equipo es solo el primer paso. Desde un dispositivo confiable deben revocarse las sesiones activas, restablecerse las contraseñas y rotarse claves API, tokens, credenciales SSH y otros secretos presentes en el sistema. También es necesario revisar los accesos al correo, la nube, repositorios y aplicaciones financieras desde la fecha probable de compromiso”, señala Micucci.

En entornos corporativos, la respuesta debe buscar movimientos posteriores y no limitarse al equipo inicial. Las campañas documentadas ejecutaron cargas adicionales, crearon tareas programadas, borraron rastros y utilizaron herramientas legítimas del sistema.

Reinstalar o reimaginar el dispositivo puede ser necesario, pero no sustituye la invalidación de los datos ya robados.

Para saber más sobre Amatera y este análisis de ESET, ingrese a:

https://www.welivesecurity.com/es/malware/amatera-infostealer-en-aumento-america-latina/

![](https://raw.githubusercontent.com/itnewslat/assets/refs/heads/master/img/540x320/Amatera-p.jpg)

<table style="height: 42px;" width="569">
<tbody>
<tr>
<td style="text-align: justify;"><sub><strong>Somos ITNEWS.LAT, y nuestras noticias también son publicadas a través de nuestra cuenta en Twitter <a href="https://twitter.com/itnewslat?lang=es"> @ITNEWSLAT</a> o INSTAGRAM <a href="https://www.instagram.com/itnewslat/">@ITNEWSLAT</a> y en las aplicaciones como <a href="https://itnews.lat/app">nuestra APP</a> y <a href="https://squidapp.co/en/">SQUID</a></strong></sub></td>
</tr>
</tbody>
</table>

<img src="https://tracker.metricool.com/c3po.jpg?hash=56f88a41e39ab42c063cc51676587a04"/>
