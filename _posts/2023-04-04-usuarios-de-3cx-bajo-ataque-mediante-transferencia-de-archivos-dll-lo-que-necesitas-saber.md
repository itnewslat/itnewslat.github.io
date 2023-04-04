---
layout: posts
color-schema: red-dark
date: '2023-04-04 05:12 -0500'
published: true
superNews: false
superArticle: false
year: '2023'
title: >-
  Usuarios de 3CX bajo ataque mediante transferencia de archivos DLL: lo que
  necesitas saber
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/cel-con-ruido-g.jpg
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/cel-con-ruido-p.jpg
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
week: '14'
---
Una versión troyanizada del popular software VOIP / PBX está en las noticias; esto es lo que están haciendo los cazadores y defensores.
 
Sophos X-Ops está siguiendo una situación en desarrollo relativa a un aparente ataque de cadena de suministro contra la aplicación 3CX Desktop, posiblemente emprendido por un grupo relacionado con un Estado nación. Sophos, proporciona una visión general de la situación, un análisis de amenazas, información para cazadores y datos sobre la protección y detección.

El software afectado es 3CX, un sistema telefónico PBX basado en software legítimo disponible en Windows, Linux, Android e iOS. El actor de amenazas ha abusado de la aplicación para agregar un instalador que se comunica con varios servidores de comando y control (C2).
El software es una versión firmada digitalmente del cliente de escritorio softphone para Windows y está empaquetado con una carga útil maliciosa. La actividad posterior a la explotación más común observada hasta la fecha es la aparición de un shell de comandos interactivo.
En la actualidad, la única plataforma confirmada por nuestros datos de clientes que se ve afectada es Windows.
 
**Análisis de amenazas**

El 22 de marzo, los usuarios de 3CX comenzaron a discutir posibles detecciones de falsos positivos de 3CXDesktopApp por parte de sus agentes de seguridad de punto final.
 
Graphical user interface, text, application, email

Description automatically generated

 
Sophos MDR identificó por primera vez actividad maliciosa dirigida a sus propios clientes y que se derivó de 3CXDesktopApp el 29 de marzo de 2023. Además, Sophos MDR ha observado la campaña aprovechando un almacenamiento de archivos público para alojar malware codificado. Este repositorio ha estado en uso desde el 8 de diciembre de 2022.
 
El ataque gira en torno a un escenario de carga lateral de DLL, uno con un número notable de componentes involucrados. Es probable que esto garantice que los clientes puedan usar el paquete de escritorio 3CX sin notar nada inusual sobre el paquete afectado. Hasta la fecha, hemos identificado tres componentes cruciales:
 
3CXDesktopApp.exe, el cargador limpio
d3dcompiler 47.dll, una DLL con una carga útil cifrada anexada
ffmpeg.dll, el cargador malicioso troyanizado
El archivo ffmpeg.dll contiene una URL incrustada que recupera una carga útil .ico codificada maliciosa.
 
En un escenario normal de carga lateral de DLL, el cargador malicioso (ffmpeg.dll) reemplazaría la dependencia limpia; su única función sería poner en cola la carga útil. Sin embargo, en este caso, ese cargador es completamente funcional, como lo sería normalmente en el producto 3CX – en su lugar, hay una carga útil adicional insertada en la función DllMain. Esto agrega volumen, pero puede haber reducido las sospechas: La aplicación 3CX funciona como se esperaba, incluso cuando el troyano se dirige a la baliza C2.
 
**Determinación del impacto con Sophos XDR**

Determinación de si los hosts se han comunicado con la infraestructura del actor de amenazas
La siguiente consulta buscará los hosts que se han comunicado con las diversas URL conocidas en uso por esta campaña. (Las URL están ligeramente ofuscadas con corchetes, que deben eliminarse antes de ejecutar la consulta.)
 
**Text**

Description automatically generated
También recomendamos que los usuarios del software de 3CX monitoreen los canales de comunicación de la empresa; tienen un blog y también un foro de soporte e información.
 
Se publica Una lista de IOC para este ataque en nuestro GitHub.
 
Detección y protección
 
SophosLabs ha bloqueado los dominios maliciosos y ha publicado la siguiente detección de endpoints:
 
**Troj/Loader-AF**

También hemos bloqueado la lista de dominios C2 conocidos asociados con la amenaza y continuaremos agregando a esa lista en el archivo IOC en nuestro GitHub, como se mencionó anteriormente. Finalmente, el archivo ffmpeg.dll malicioso se marca como de baja reputación.
 
SophosLabs está investigando activamente oportunidades de detección adicionales para la actividad derivada de este software. Además, para los clientes de Sophos MDR, el equipo de ingeniería de detección MDR cuenta con una variedad de detecciones de comportamiento que detectarán la actividad de seguimiento.

![](https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/cel-con-ruido-p.jpg)

<table style="height: 42px;" width="569">
<tbody>
<tr>
<td style="text-align: justify;"><sub><strong>Nuestras noticias también son publicadas a través de nuestra cuenta en Twitter <a href="https://twitter.com/itnewslat?lang=es">@ITNEWSLAT</a> y en la aplicación <a href="https://squidapp.co/en/">SQUID</a></strong></sub></td>
</tr>
</tbody>
</table>
<img src="https://tracker.metricool.com/c3po.jpg?hash=56f88a41e39ab42c063cc51676587a04"/>