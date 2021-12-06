---
layout: posts
color-schema: red-dark
date: '2021-12-06 09:45 -0500'
published: true
superNews: false
superArticle: false
year: '2021'
title: >-
  Incidente afecta a GoDaddy y expone 1.2 millones de credenciales para
  WordPress
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/Sitios-WEB-g.jpg
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Sitios-WEB-p.jpg
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
week: '49'
---
ESET, compañía de seguridad informática, alerta que más de 1.2 millones de clientes del servicio de hosting para WordPress de GoDaddy sufrieron la exposición de direcciones de correo, contraseña y número de cliente, entre otros datos. 

ESET, compañía líder en detección proactiva de amenazas, advierte que el proveedor de hosting GoDaddy, uno de los más grandes a nivel mundial, fue víctima de un incidente de seguridad que afectó a su entorno para WordPress. 

Según informó la compañía, el pasado 17 de noviembre detectaron que un individuo sin autorización obtuvo acceso utilizando una contraseña previamente comprometida el pasado 6 de septiembre. De acuerdo con los resultados de una investigación interna, el atacante obtuvo acceso a:
- Más de 1.2 millones de direcciones de correo y número de cliente de usuarios que tenían cuentas de WordPress activas e inactivas a través de GoDaddy;
- La contraseña por defecto provista por primera vez para cuentas de WordPress;
- Contraseña y nombre de usuario de clientes SFTP (para transferencia de archivos) con cuentas activas;
- La clave privada SSL para una porción de los clientes activos

En el comunicado publicado en el día de ayer GoDaddy aseguró que revocó el acceso a sus sistemas al atacante y avisó a las fuerzas de seguridad. Asimismo, informaron que continúan investigando lo ocurrido junto a especialistas forenses y que están comunicándose con los clientes afectados por esta brecha. Quienes lo deseen, también pueden contactarse a través del centro de ayuda de GoDaddy, en el cual proporciona número de teléfono para comunicarse desde distintos países.

Tal como demuestra Wordfence, una compañía desarrolladora de un plugin de seguridad para WordPress, “parecería que GoDaddy estaba almacenando las credenciales para SFTP en texto plano o en un formato no muy seguro y esto permitió al atacante descifrarlas las claves”. Tal como se aprecia en la siguiente captura de pantalla, “si GoDaddy estuviese almacenando las contraseñas utilizando hash con salt o claves públicas, que son prácticas más seguras, los usuarios no podrían ver sus propias contraseñas como se aprecia en la siguiente imagen”, explicó.

“Más allá del posible riesgo de ataques de phishing que implica la información expuesta, el posible impacto de la exposición de las contraseñas de SFTP de los clientes podría ser de mayor gravedad. Si bien GoDaddy reseteó las contraseñas para el acceso a SFTP y la base de datos de los sitios afectados por el incidente, durante los casi dos meses que el atacante tuvo acceso podría haber tomado el control de alguno de estos sitios para realizar acciones maliciosas en ellos, como cargar malware, obtener más información adicional de los clientes almacenada en la base de datos de las cuentas.”, comenta Camilo Gutiérrez Amaya, Jefe del Laboratorio de Investigación de ESET Latinoamérica. 

Si bien GoDaddy está contactándose con los sitios y clientes afectados por este incidente para indicar los pasos a seguir, desde ESET recomiendan cambiar la contraseña para acceder a WordPress y reiniciar las claves utilizadas por otros usuarios.

Esta no es la primera vez que GoDaddy sufre una brecha de seguridad que deriva en la exposición de información de sus clientes. En mayo de 2020 la compañía confirmó que un tercero sin autorización accedió a los servidores y obtuvo credenciales de acceso para cuentas de web hosting de algunos de sus clientes.

![](https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Sitios-WEB-p.jpg)

<table style="height: 42px;" width="569">
<tbody>
<tr>
<td style="text-align: justify;"><sub><strong>Nuestras noticias también son publicadas a través de nuestra cuenta en Twitter <a href="https://twitter.com/itnewslat?lang=es">@ITNEWSLAT</a> y en la aplicación <a href="https://squidapp.co/en/">SQUID</a></strong></sub></td>
</tr>
</tbody>
</table>

<img src="https://tracker.metricool.com/c3po.jpg?hash=56f88a41e39ab42c063cc51676587a04"/>

