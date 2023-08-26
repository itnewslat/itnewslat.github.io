---
layout: posts
color-schema: red-dark
date: '2023-08-26 17:49 -0400'
published: true
superNews: false
superArticle: false
year: '2023'
title: Espionaje a diplomáticos extranjeros en Bielorrusia
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Espionaje-p.jpg
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/Espionaje-g.jpg
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
week: '34'
---
**ESET, compañía de seguridad informática, identificó un espionaje a las embajadas extranjeras en Bielorrusia, en el que personal de embajadas de cuatro países fueron atacados: dos de Europa, uno del sur de Asia y uno de África.**

El equipo de investigación de ESET, compañía líder en detección proactiva de amenazas, descubrió un ataque del grupo de ciberespionaje “MoustachedBouncer”. El mismo tiene de blanco a las embajadas extranjeras en Bielorrusia, y se identificó que el personal de embajadas de cuatro países fueron atacados: dos de Europa, uno del sur de Asia y uno de África. 

Para comprometer a sus blancos, los operadores de MoustachedBouncer manipulan el acceso a internet de sus víctimas, probablemente a nivel del ISP, para hacerle creer a  Windows que está detrás de un portal cautivo. La página falsa de Windows Update se mostrará a la potencial víctima cuando se conecte a la red.

Una vez que logran ingresar a los dispositivos de sus objetivos pueden tomar capturas de pantalla, grabar audio y robar información. Para esto aprovechan protocolos de comandos y control basados en email, backdoors modulares en C++ y ataques de adversary-in-the-middle (AitM). El grupo usa dos sets de herramientas que ESET denomino NightClub y Disco.
 
Desde ESET se observó que el texto está en ruso porque es el idioma principal en Bielorrusia, pero probablemente existan versiones en otros idiomas. La página indica que hay actualizaciones críticas del sistema de seguridad que necesitan ser instaladas. 
 
Un punto importante es que la técnica de AitM solo ocurre contra un par de organizaciones seleccionadas (tal vez, solo embajadas), y no en todo el país. No es posible reproducir la redirección desde una dirección de IP aleatoria en Bielorrusia.
 
“MoustachedBouncer es un hábil actor de amenazas dirigido a diplomáticos extranjeros en Bielorrusia. Utiliza técnicas bastante avanzadas para las comunicaciones de C&C, incluyendo la interceptación de redes a nivel de ISP para el implante Disco, correos electrónicos para el implante NightClub y DNS en uno de los plugins NightClub.”, explica Camilo Gutiérrez Amaya, Jefe del Laboratorio de Investigación de ESET Latinoamérica.
 
Se puede identificar que utiliza HTTP no encriptado, y no HTTPS, y que el subdominio updates.microsoft[.]com no existe entre los nombres de servidores de Microsoft, por lo que no resuelve en la internet abierta. Durante el ataque, este dominio resolvió en  5.45.121[.]106 en la máquina del blanco de ataque. Esta dirección IP es usada para aparcar dominios y no está relacionada con Microsoft. Aunque es una dirección IP enrutable a internet, el tráfico de esta IP nunca alcanza la internet durante el ataque AitM. Ambos, la resolución DNS y las respuestas HTTP, fueron injectadas en el tránsito, probablemente a nivel del ISP. 
 
“La principal conclusión es que las organizaciones en países extranjeros donde no se puede confiar en Internet deben utilizar un túnel VPN cifrado de extremo a extremo a una ubicación de confianza para todo su tráfico de Internet con el fin de eludir cualquier dispositivo de inspección de red.”, advierte Camilo Gutiérrez Amaya, Jefe del Laboratorio de Investigación de ESET Latinoamérica.
 
**Claves de este reporte**:

- MoustachedBouncer ha estado operativo desde, al menos, 2014.
- Se especializa en el espionaje de embajadas extranjeras en Bielorrusia.
- Han usado técnicas de adversary in-the-middle desde 2020 para redireccionar un chequeo de portal cautivo a un servidor de C&C (Comando y Control) y distribuir plugins de malware compartidos a través del protocolo SMB (Server Message Block).
- Se cree que MoustachedBouncer utiliza sistemas de intercepciones legítimas (como SORM) para guíar sus operaciones AitM.
- Se evalua que el grupo opera en contacto cercano con Winter Vivern, otro grupo que tiene de blanco a diplomáticos europeos, pero en este caso usarían distintas Tácticas, Técnicas y Procedimientos (TTPs).
- Desde 2014, el grupo ha estado operando un framework de malware que ESET llamó NightClub. Este utiliza los protocolos SMTP e IMAP para las comunicaciones C&C.
- El grupo, desde 2020, ha estado utilizando, en paralelo, un segundo framework de malware que ESET llamó Disco.
- Ambos, NightClub y Disco, admiten plugins espías adicionales que toman capturas de pantalla, graban audio y roban información.

Para conocer más sobre seguridad informática visite el portal de noticias de ESET: https://www.welivesecurity.com/es/investigaciones/espionaje-diplomaticos-extranjeros-bielorrusia/

Por otro lado, ESET invita a conocer Conexión Segura, su podcast para saber qué está ocurriendo en el mundo de la seguridad informática. Para escucharlo ingrese a: https://open.spotify.com/show/0Q32tisjNy7eCYwUNHphcw

![](https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Espionaje-p.jpg)

<table style="height: 42px;" width="569">
<tbody>
<tr>
<td style="text-align: justify;"><sub><strong>Nuestras noticias también son publicadas a través de nuestra cuenta en Twitter <a href="https://twitter.com/itnewslat?lang=es">@ITNEWSLAT</a> y en la aplicación <a href="https://squidapp.co/en/">SQUID</a></strong></sub></td>
</tr>
</tbody>
</table>

<img src="https://tracker.metricool.com/c3po.jpg?hash=56f88a41e39ab42c063cc51676587a04"/>