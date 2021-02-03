---
layout: posts
color-schema: red-dark
date: '2021-02-03 09:24 -0400'
published: true
superNews: false
superArticle: false
year: '2021'
title: '@ESETLA descubre una compleja amenaza de Linux que ataca a supercomputadores'
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Linux-p.jpg
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/Linux-g.jpg
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
week: '5'
---
<p style="text-align: justify;"><a href="https://www.eset.com/es/">ESET</a>, la mayor empresa de ciberseguridad de la Unión Europea, ha descubierto Kobalos, un malware que ha estado atacando clústeres de ordenadores de alto rendimiento, los conocidos como ‘supercomputadores’.</p>
<p style="text-align: justify;">ESET ha trabajado con el equipo de seguridad informática del CERN y otras organizaciones especializadas en mitigar los ataques contra estas redes de investigación científica. Entre los objetivos de Kobalos se encuentran un importante ISP asiático, un proveedor de seguridad norteamericano y varios servidores privados.</p>
<p style="text-align: justify;">Los investigadores de ESET han diseccionado con técnicas de ingeniería inversa  este malware, el cual aunque es pequeño contaba con una estructura muy compleja que puede ser portada a diferentes sistemas operativos, como Linux, BSD, Solaris y, probablemente, AIX y Windows.</p>
<p style="text-align: justify;">“<em>Hemos llamado a esta amenaza Kobalos recordando a los kobalos griegos, pequeñas criaturas traviesas aficionadas a engañar a los mortales</em>”, explica Marc-Etienne Léveillé, investigador de ESET. “<em>En este malware hemos observado un nivel de sofisticación muy poco común en los malware dirigidos a Linux</em>”.</p>
<p style="text-align: justify;">Kobalos es un backdoor que contiene comandos que evitan revelar la intención de los atacantes. “<em>Kobalos simplemente consigue acceso remoto al sistema de archivos, otorga la posibilidad de iniciar sesiones en varias terminales y permite conexiones mediante proxy con otros servidores infectados por el propio Kobalos</em>”, añade Léveillé.</p>
<p style="text-align: justify;">Cualquier servidor comprometido por Kobalos puede convertirse en un servidor de mando y control mediante el envío de un simple comando. Como la dirección IP y los puertos usados por el servidor de mando y control están codificados dentro del archivo ejecutable, los operadores pueden generar nuevas muestras de Kobalos que utilicen el nuevo servidor de mando y control. Además, en la mayoría de los sistemas comprometidos, el cliente SSH también se modificaba para poder robar credenciales.</p>
<p style="text-align: justify;">“<em>Cualquier persona que utilice el cliente SSH en una máquina comprometida vería cómo sus credenciales eran robadas y podrían ser utilizadas más tarde por los atacantes para instalar Kobalos en otros servidores</em>”, puntualiza Léveillé. La forma de mitigar esta amenaza es configurar una autenticación de doble factor para conectarse con los servidores SSH, ya que el uso de credenciales robadas parece ser una de las maneras de propagarse por diferentes sistemas.</p>
<p style="text-align: justify;"><img class="aligncenter" src="https://www.welivesecurity.com/wp-content/uploads/2021/02/Figure-1.-Industry-and-region-of-compromised-organizations-768x570.png" alt="" width="397" height="295" /><strong><em>Organizaciones y entidades comprometidas por Kobalos</em></strong></p>
<p style="text-align: justify;">Para más información sobre Kobalos se puede visitar el <a href="https://www.welivesecurity.com/">blog</a> de ESET.</p>

![](https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Linux-p.jpg)

<img src="https://tracker.metricool.com/c3po.jpg?hash=56f88a41e39ab42c063cc51676587a04"/>