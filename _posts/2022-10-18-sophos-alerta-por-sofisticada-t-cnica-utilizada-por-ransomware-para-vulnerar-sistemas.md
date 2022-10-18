---
layout: posts
color-schema: red-dark
date: '2022-10-18 05:39 -0500'
published: true
superNews: false
superArticle: false
year: '2022'
title: >-
  Sophos alerta por sofisticada técnica utilizada por Ransomware para vulnerar
  sistemas
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/sophos-xops-g.jpg
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/sophos-xops-p.jpg
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
week: '42'
---
Sophos, líder mundial en ciberseguridad de próxima generación, ha anunciado hoy que BlackByte, uno de los grupos más nuevos de ransomware de “gran dificultad” ha añadido una sofisticada técnica de “Bring your own driver” para desviar más de 1.000 controladores utilizados por los productos de detección y respuesta de extremos (EDR) de la industria. Sophos detalla las tácticas, técnicas y procedimientos de ataque (TTP) en el informe, “Elimine todas las devoluciones de llamada: BlackByte Ransomware deshabilita EDR a través de RTCore64.sys abuso".”
 
BlackByte, que apareció en un aviso especial del Servicio Secreto y el FBI a principios de este año como una amenaza para la infraestructura crítica, resurgió en Mayo después de una breve pausa  con un nuevo sitio de filtración y nuevas tácticas de extorsión. Ahora, parece que el grupo también ha agregado nuevos métodos de ataque. En concreto, han estado abusando de una vulnerabilidad en RTCorec6.sys, un controlador de utilidades gráficas para sistemas Windows. Esta vulnerabilidad particular les permite comunicarse directamente con el kernel del sistema objetivo, ordenándole deshabilitar las rutinas de devolución de llamada utilizadas por los proveedores EDR, así como el proveedor ETW (seguimiento de eventos para Windows) Microsoft-Windows-Threat-Intelligence-Provider. Los proveedores EDR utilizan con frecuencia esta función para supervisar el uso de llamadas API que se abusan de forma maliciosa; si esta función está desactivada, los proveedores EDR que dependen de esta función también se vuelven ineficaces.
 
“Si piensa en los ordenadores como una fortaleza, para muchos proveedores de EDR, ETW es el guardia en la puerta principal. Si la protección se cae, el resto del sistema queda extremadamente vulnerable. Y, como ETW es utilizado por tantos proveedores diferentes, el conjunto de posibles objetivos de BlackByte para implementar esta omisión de EDR es enorme”, comentó Christopher Budd, director ejecutivo de investigación de amenazas de Sophos.
 
BlackByte no es la única banda de ransomware que aprovecha el "Bring Your Own Driver" para eludir los productos de seguridad. AvosLocker abusó de una vulnerabilidad en un controlador diferente para deshabilitar las soluciones antivirus en Mayo.
 
“Anecdóticamente, por lo que estamos viendo en el campo, parece que la omisión de EDR se está convirtiendo en una técnica más popular para los grupos de amenazas de ransomware. Esto no es sorprendente. Los actores de amenazas a menudo aprovechan las herramientas y técnicas desarrolladas por la industria de la “seguridad ofensiva” para lanzar ataques más rápido y con un esfuerzo mínimo. De hecho, parece que BlackByte sacó al menos parte de su implementación de omisión de EDR de la herramienta de código abierto EDRSandblast”, dijo Budd. “En vista de que los delincuentes adoptan el trabajo realizado por el sector de la seguridad ofensiva, es fundamental que los defensores supervisen las nuevas técnicas de evasión y explotación e implementen mitigaciones antes de que estas técnicas estén ampliamente disponibles en la escena de la ciberdelincuencia”.
 
Para obtener más información sobre los últimos TTP de BlackByte y cómo mantener los sistemas seguros, descargue el informe completo de Sophos.com.

![](https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/sophos-xops-p.jpg)

<table style="height: 42px;" width="569">
<tbody>
<tr>
<td style="text-align: justify;"><sub><strong>Nuestras noticias también son publicadas a través de nuestra cuenta en Twitter <a href="https://twitter.com/itnewslat?lang=es">@ITNEWSLAT</a> y en la aplicación <a href="https://squidapp.co/en/">SQUID</a></strong></sub></td>
</tr>
</tbody>
</table>

<img src="https://tracker.metricool.com/c3po.jpg?hash=56f88a41e39ab42c063cc51676587a04"/>