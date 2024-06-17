---
layout: posts
color-schema: red-dark
date: '2024-06-17 10:27 -0400'
published: true
superNews: false
superArticle: false
year: '2024'
title: Kaspersky identifica riesgos de seguridad significativos en módems Cinterion
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Router-Hackers-p.jpg
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/Router-Hackers-g.jpg
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
week: '25'
---
**Utilizados en millones de dispositivos y sistemas, las vulnerabilidades detectadas representan peligros sustanciales para los sectores industrial, sanitario, automotriz, financiero y de telecomunicaciones.**

El Equipo de respuesta a emergencias cibernéticas de sistemas de control industrial (ICS CERT) de Kaspersky identificó vulnerabilidades de seguridad críticas en módems móviles Cinterion, desplegados ampliamente en millones de dispositivos y en la infraestructura de conectividad global. Estas vulnerabilidades incluyen defectos críticos que permiten la ejecución remota de código y la escalada de privilegios no autorizados, representando riesgos sustanciales para las redes de comunicación integrales y dispositivos IoT fundamentales para los sectores industrial, sanitario, automotriz, financiero y de telecomunicaciones.

Entre las vulnerabilidades detectadas, la más alarmante es CVE-2023-47610, una vulnerabilidad de desbordamiento del heap en los gestores de mensajes SUPL del módem. Este fallo permite a los atacantes ejecutar código arbitrario de manera remota a través de SMS, otorgándoles acceso sin precedentes al sistema operativo del módem. Este acceso también facilita la manipulación de la RAM y la memoria flash, aumentando la posibilidad de tomar el control absoluto de las funcionalidades del módem, todo ello sin autenticación o acceso físico al dispositivo.

Asimismo, otras investigaciones ponen de manifiesto importantes errores de seguridad en el uso de MIDlets, aplicaciones basadas en Java que se ejecutaban en los módems. Los atacantes podían comprometer la integridad de estas aplicaciones eludiendo las comprobaciones de firma digital, lo que permitía la ejecución no autorizada de código con privilegios elevados. Este fallo plantea riesgos significativos no sólo para la confidencialidad e integridad de los datos, sino que también aumenta la amenaza para la seguridad de la red en general y la integridad del dispositivo.

“Las vulnerabilidades que hemos encontrado, junto con la implementación generalizada de estos dispositivos en diversos sectores, hacen posible de que se produzcan amplias interrupciones a escala mundial, desde impactos económicos y operativos hasta problemas de seguridad. Dado que los módems suelen estar integrados en un estilo matryoshka dentro de otras soluciones, con productos de un proveedor apilados sobre los de otro, elaborar una lista de productos finales afectados es todo un reto. Los proveedores afectados deben realizar grandes esfuerzos para gestionar los riesgos, y a menudo la mitigación sólo es factible por parte de los operadores de telecomunicaciones. Esperamos que nuestro análisis detallado ayude a las partes interesadas a implementar medidas de seguridad urgentes y establecer un punto de referencia para futuras investigaciones sobre ciberseguridad”, afirma Evgeny Goncharov, responsable de Kaspersky ICS CERT.

Para contrarrestar la amenaza que supone la vulnerabilidad CVE-2023-47610, Kaspersky recomienda la única solución fiable: desactivar las funciones de mensajería SMS no esenciales y emplear APN privadas con una configuración de seguridad estricta. En cuanto a las otras vulnerabilidades de zero-day registradas bajo CVE-2023-47611 a CVE-2023-47616, la compañía aconseja aplicar una verificación rigurosa de firmas digitales para los MIDlets, controlar el acceso físico a los dispositivos y llevar a cabo auditorías y actualizaciones de seguridad regulares.

En respuesta a estos descubrimientos, todos los hallazgos se compartieron de manera proactiva con el fabricante antes de la divulgación pública. Los módems Cinterion, originalmente desarrollados por Gemalto, son componentes fundamentales en las comunicaciones machine-to-machine (M2M) e IoT, apoyando una amplia gama de aplicaciones, desde la automatización industrial y la telemática de vehículos hasta la medición inteligente y monitorización sanitaria. Gemalto, el desarrollador inicial, fue posteriormente adquirido por Thales. En 2023, Telit adquirió el negocio de productos celulares IoT de Thales, incluidos los módems Cinterion.

Para proteger los sistemas conectados con dispositivos IoT, los expertos de Kaspersky recomiendan:

- Proporciona al equipo de seguridad responsable de proteger sistemas críticos con inteligencia de amenazas actualizada el servicio Threat Intelligence Reporting que ofrece información sobre amenazas actuales y vectores de ataque, así como los elementos más vulnerables y cómo mitigarlos.
- Utiliza una solución de seguridad de endpoint fiable. Un componente específico de Kaspersky Endpoint Security for Business puede detectar anomalías en el comportamiento de los archivos y revelar actividad de malware sin archivos.
- Protege los endpoints industriales y corporativos. La solución Kaspersky Industrial CyberSecurity incluye protección dedicada para endpoints y monitorización de la red para revelar cualquier actividad sospechosa y potencialmente maliciosa en la red industrial.
- Para revelar desviaciones en el proceso de fabricación causadas por un accidente, factor humano o un ciberataque, así como prevenir interrupciones, Kaspersky Machine Learning for Anomaly Detection puede ayudarte.
- Considera las soluciones Cyber Immune para crear una protección innata contra los ciberataques.
- Instala una solución de seguridad que proteja los dispositivos de diferentes vectores de ataque, como Kaspersky Embedded Systems Security. Si el dispositivo tiene especificaciones de sistema extremadamente bajas, la solución de Kaspersky todavía lo protegería igualmente con Default Deny.

![](https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Router-Hackers-p.jpg)

<table style="height: 42px;" width="569">
<tbody>
<tr>
<td style="text-align: justify;"><sub><strong>Nuestras noticias también son publicadas a través de nuestra cuenta en Twitter <a href="https://twitter.com/itnewslat?lang=es">@ITNEWSLAT</a> y en la aplicación <a href="https://squidapp.co/en/">SQUID</a></strong></sub></td>
</tr>
</tbody>
</table>

<img src="https://tracker.metricool.com/c3po.jpg?hash=56f88a41e39ab42c063cc51676587a04"/>