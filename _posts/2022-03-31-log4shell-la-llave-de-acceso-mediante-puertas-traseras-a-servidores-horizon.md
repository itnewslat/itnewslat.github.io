---
layout: posts
color-schema: red-dark
date: '2022-03-31 05:33 -0500'
published: true
superNews: false
superArticle: false
year: '2022'
title: 'Log4Shell: la ‘llave de acceso’ mediante puertas traseras a servidores Horizon'
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/mujer-codigo-g.jpg
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/mujer-codigo-p.jpg
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
week: '13'
---
Sophos, líder mundial en ciberseguridad de última generación, publicó nuevas investigaciones sobre cómo los atacantes utilizan la vulnerabilidad Log4Shell para proporcionar puertas traseras y scripts de creación de perfiles a servidores VMware Horizon sin parches.
 
El nuevo informe revela que con el uso de esta vulnerabilidad los atacantes crearon tres puertas traseras diferentes y cuatro criptomineros, que posteriormente son ofrecidas a ciberdelincuentes para su acceso a los servidores.
 
Log4Shell es una vulnerabilidad de ejecución remota de código en Apache Log4J, uno de los componentes de registro de Java. Este componente está integrado en cientos de productos de software. Su último parche de seguridad se realizó en diciembre de 2021.
 
“Las aplicaciones ampliamente utilizadas, como VMware Horizon, que están expuestas a Internet y deben actualizarse manualmente, son particularmente vulnerables a los ataques a gran escala”, dijo Sean Gallagher, investigador principal de seguridad de Sophos. “Las detecciones de Sophos revelan oleadas de ataques dirigidos a servidores Horizon, a partir de enero, y entregan una variedad de puertas traseras y criptomineros a servidores sin parches, así como scripts para recopilar información del dispositivo”.
 
“Sophos cree que algunas de las puertas traseras pueden ser proporcionadas por agentes maliciosos que buscan asegurar el acceso remoto a un objetivo de alto valor para luego venderlo a otros atacantes, como los operadores de ransomware”, añade.
 
Las múltiples cargas útiles de ataque que Sophos detectó usando Log4Shell para apuntar a servidores Horizon vulnerables incluyen:

- Dos herramientas legítimas de administración y monitoreo remoto: Atera agent y Splashtop Streamer, probablemente destinadas para uso malicioso como creación de puertas traseras
- La puerta trasera maliciosa Sliver
- Los criptomineros z0Miner, JavaX miner, Jin y Mimu
- Varios shells inversos basados ​​en PowerShell que recopilan información de dispositivos y copias de seguridad

 
Según Sophos, los atacantes están utilizando varios enfoques diferentes para infectar objetivos. Si bien algunos de los ataques anteriores utilizaron Cobalt Strike para organizar y ejecutar las cargas útiles del criptominero, la mayor ola de ataques que comenzó a mediados de enero de 2022 ejecutó esta herramienta directamente desde el componente Apache Tomcat del servidor VMware Horizon. Esta ola de ataques continúa.

 
“Los hallazgos de Sophos sugieren que múltiples adversarios están implementando estos ataques, por lo que el paso de protección más importante es actualizar todos los dispositivos y aplicaciones que incluyen Log4J con la versión parcheada del software”, dijo Gallagher. 

 
“Log4J está instalado en cientos de productos de software y es posible que muchas organizaciones desconocen la vulnerabilidad que acecha dentro de su infraestructura, particularmente en software comercial, de código abierto o personalizado que no cuenta con soporte de seguridad regular. Y aunque la aplicación de parches es vital, no será suficiente si los atacantes ya han podido instalar una puerta trasera en la red”, concluye.

![](https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/mujer-codigo-p.jpg)

<table style="height: 42px;" width="569">
<tbody>
<tr>
<td style="text-align: justify;"><sub><strong>Nuestras noticias también son publicadas a través de nuestra cuenta en Twitter <a href="https://twitter.com/itnewslat?lang=es">@ITNEWSLAT</a> y en la aplicación <a href="https://squidapp.co/en/">SQUID</a></strong></sub></td>
</tr>
</tbody>
</table>

<img src="https://tracker.metricool.com/c3po.jpg?hash=56f88a41e39ab42c063cc51676587a04"/>