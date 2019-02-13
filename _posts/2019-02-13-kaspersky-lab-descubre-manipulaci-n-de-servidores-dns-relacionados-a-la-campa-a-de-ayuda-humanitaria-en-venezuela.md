---
layout: posts
color-schema: red-dark
date: '2019-02-13 18:01 -0400'
published: true
superNews: false
superArticle: false
year: '2019'
title: >-
  Kaspersky Lab descubre manipulación de servidores DNS relacionados a la
  campaña de ayuda humanitaria en Venezuela
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
tags:
  - Seguridad
week: '8'
---
Investigadores de Kaspersky Lab emitieron un alerta hoy al descubrir la manipulación de los servidores DNS relacionados al movimiento llamado "Voluntarios por Venezuela". La iniciativa, la cual ya cuenta con miles de personas registradas según los medios de comunicación,  es el resultado del llamado público que el Sr. Juan Guaidó hizo el 10 de febrero pidiendo voluntarios para asistir con la ayuda humanitaria a ese país.  

¿Cómo funciona? Los voluntarios se registran en un sitio web y luego reciben instrucciones sobre cómo ayudar. El sitio web original solicita a los voluntarios que proporcionen su nombre completo, identificación personal, número de teléfono celular, y si cuentan con un título médico, un automóvil o un teléfono inteligente. También se les solicita la ubicación del lugar donde viven:

 ![](https://raw.githubusercontent.com/itnewslat/assets/master/img/300x300/DNS1.jpg)

Este sitio web apareció en línea el 6 de febrero. Solo unos días después, el 11 de febrero, el día después del anuncio público de la iniciativa, apareció otro sitio web casi idéntico con un nombre y estructura de dominio muy similar.

![](https://raw.githubusercontent.com/itnewslat/assets/master/img/300x300/dns2.jpg) 

De hecho, el sitio web falso es el reflejo del sitio web original, voluntariosxvenezuela.com.
Tanto el sitio web original como el falso usan SSL de Let's Encrypt. Las diferencias son las siguientes:

<table>
<tbody>
<tr>
<td width="312">Sitio web original de voluntariosxvenezuela</td>
<td width="312">Sitio web engañoso</td>
</tr>
<tr>
<td width="312">Primer día en Internet, 6 de febrero

&nbsp;</td>
<td width="312">Primer día en Internet, 11 de febrero</td>
</tr>
<tr>
<td width="312">Información de Whois:

&nbsp;</td>
<td width="312">Información de Whois:</td>
</tr>
<tr>
<td width="312">Registrado en el nombre de Sigerist Rodriguez el 4 de febrero de 2019</td>
<td width="312">Registrado a través de GoDaddy usando la función de Protección de Privacidad el 11 de febrero de 2019</td>
</tr>
<tr>
<td width="312">Alojado en Amazon Web Services</td>
<td width="312">Alojado primero en GoDaddy y luego en DigitalOcean</td>
</tr>
</tbody>
</table>

Ahora, la parte más aterradora es que estos dos dominios diferentes, con propietarios diferentes, dirigen el tráfico dentro de Venezuela a la misma dirección IP, que pertenece al propietario del dominio falso:

 ![](https://raw.githubusercontent.com/itnewslat/assets/master/img/300x300/dns3.jpg)

Eso significa que no importa si un voluntario abre la página del dominio legítimo o el falso, de igual manera introducirá su información personal en un sitio web falso.

Ambos dominios, si se resuelven fuera de Venezuela, presentan resultados diferentes:

 ![](https://raw.githubusercontent.com/itnewslat/assets/master/img/300x300/dns4.jpg)

Kaspersky Lab bloquea el dominio falso como phishing.

En este escenario, donde se manipulan los servidores DNS, Kaspersky Lab recomienda encarecidamente utilizar servidores DNS públicos como los servidores DNS de Google (8.8.8.8 y 8.8.4.4) o los servidores DNS de CloudFlare y APNIC (1.1.1.1 y 1.0.0.1). 

También se recomienda utilizar conexiones VPN sin un DNS de terceros.

Para más información, visite: https://securelist.com/dns-manipulation-in-venezuela/89592/ 