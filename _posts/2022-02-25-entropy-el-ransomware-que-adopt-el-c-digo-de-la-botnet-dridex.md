---
layout: posts
color-schema: red-dark
date: '2022-02-25 11:44 -0500'
published: true
superNews: false
superArticle: false
year: '2022'
title: 'Entropy: el ransomware que ‘adoptó’ el código de la botnet Dridex'
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/Codigo-ransomware-g.jpg
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Codigo-ransomware-p.jpg
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
week: '8'
---
Sophos, líder mundial en ciberseguridad de última generación, lanzó el estudio "Dridex Bots Deliver Entropy in Recent Attacks", que detalla las similitudes de código en la botnet Dridex y el ransomware conocido, Entropy. 

Las similitudes se encuentran en el paquete de software utilizado para ocultar el código de ransomware, en las subrutinas de malware diseñadas para encontrar y ofuscar comandos (API) y en los procesos utilizados para descifrar texto encriptado.

Sophos descubrió las similitudes mientras investigaba dos incidentes en los que los atacantes usaron Dridex para lanzar el ransomware Entropy. Estos ataques se dirigieron a una empresa del sector de medios de comunicación y una agencia gubernamental, utilizando versiones personalizadas en algunas de las computadoras de los objetivos. 

Los atacantes extrajeron datos a proveedores de almacenamiento en la nube utilizando la herramienta de compresión legítima WinRAR, antes de lanzar el ransomware en equipos desprotegidos.

“No es raro que los operadores de malware compartan, tomen prestado o roben el código de otros, ya sea para ahorrarse el esfuerzo de crear su propia atribución, engañar intencionalmente o distraer a los investigadores de seguridad. Este enfoque hace que sea más difícil encontrar evidencia que corrobore una 'familia' de malware relacionado o identificar 'señales falsas' que pueden facilitar el trabajo de los atacantes y dificultar el trabajo de los investigadores”, dijo Andrew Brandt, investigador principal de Sophos. 
 
“En este análisis, Sophos se centró en aspectos del código que aparentemente tanto Dridex como Entropy usaban para hacer que el análisis fuera más desafiante. Estos incluyen el código de empaquetado, que evita el análisis estático fácil del malware subyacente, una rutina que los programas usan para ocultar las llamadas de comando (API) que realizan y que descifra las cadenas de texto cifradas incrustadas en el malware. Los investigadores descubrieron que esos procesos, en ambos programas maliciosos, tienen un flujo de código y una lógica fundamentalmente similares”, explica.

**Mismo código, metodología de ataque diferente**
 
Además de encontrar similitudes en el código, los investigadores de Sophos encontraron que en el ataque a la organización de medios, los adversarios utilizaron el exploit ProxyShell para apuntar a un servidor vulnerable para instalar un código malicioso, que luego aprovecharon para difundir balizas Cobalt Strike a otras computadoras. Los atacantes estuvieron en la red durante cuatro meses antes de lanzar Entropy a principios de diciembre de 2021.
 
En el ataque a la organización del gobierno regional, el objetivo fue infectado con el malware Dridex a través de un archivo adjunto de correo electrónico malicioso. Luego, los atacantes usaron Dridex para propagar malware adicional y moverse lateralmente dentro de la red del objetivo. El análisis de incidentes muestra que aproximadamente 75 horas después de la detección inicial de un intento de inicio de sesión sospechoso en una máquina, los atacantes comenzaron a robar datos y trasladarlos a una serie de proveedores de nube.

**¿Cómo protegerse?**
 
La investigación encontró que en ambos casos, los atacantes pudieron aprovechar sistemas Windows vulnerables y sin parches para abusar de herramientas legítimas. La aplicación periódica de parches de seguridad y la investigación activa de alertas sospechosas por parte de los cazadores de amenazas y los equipos de operaciones de seguridad ayudarán a dificultar que los atacantes tengan acceso inicial a un objetivo e implementen código malicioso.

![](https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Codigo-ransomware-p.jpg)

<table style="height: 42px;" width="569">
<tbody>
<tr>
<td style="text-align: justify;"><sub><strong>Nuestras noticias también son publicadas a través de nuestra cuenta en Twitter <a href="https://twitter.com/itnewslat?lang=es">@ITNEWSLAT</a> y en la aplicación <a href="https://squidapp.co/en/">SQUID</a></strong></sub></td>
</tr>
</tbody>
</table>

<img src="https://tracker.metricool.com/c3po.jpg?hash=56f88a41e39ab42c063cc51676587a04"/>