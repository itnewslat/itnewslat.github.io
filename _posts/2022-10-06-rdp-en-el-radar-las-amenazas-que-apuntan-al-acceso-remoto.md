---
layout: posts
color-schema: red-dark
date: '2022-10-06 05:25 -0500'
published: true
superNews: false
superArticle: false
year: '2022'
title: 'RDP en el radar: las amenazas que apuntan al acceso remoto'
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/mujer-en-mueble-con-laptop-g.jpg
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/mujer-en-mueble-con-laptop-p.jpg
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
  - Canales
week: '40'
---
ESET Latinoamérica, compañía líder en detección proactiva de amenazas, advierte que los cibercriminales encuentran en los servicios de acceso remoto mal configurados una ruta de acceso fácil a las redes de las empresas, y acerca recomendaciones para minimizar la exposición a los ataques que utilizan el protocolo de escritorio remoto (RDP).

A medida que la pandemia de la COVID-19 se fue extendiendo por todo el mundo, muchas de las tareas de oficina pasaron a ser remotas de tiempo completo. Organizaciones en todo el mundo tuvieron que configurar desde cero el acceso remoto -o al menos aumentar significativamente los servidores de Protocolo de escritorio remoto (RDP)- para que muchas personas en simultáneo puedan teletrabajar. En este contexto, ESET, compañía líder en detección proactiva de amenazas, detectó en su Informe de Amenazas globales del primer cuatrimestre de 2022, más de 100 mil millones de intentos de ataque de RDP, y más de la mitad correspondían a direcciones IP rusas.

Con este panorama, el equipo de investigación de ESET revisó los ataques y los exploits desarrollados contra el RDP durante los últimos dos años y los presenta en su nuevo reporte denominado: Remote Desktop Protocol: Configuring remote access for a secure workforce

Este documento analiza la evolución de los ataques en los últimos dos años, revelando que no todos los ataques han ido en aumento. Para un tipo de vulnerabilidad, ESET vio una marcada disminución en los intentos de explotación:

·         Las detecciones del exploit BlueKeep (CVE-2019-0708) en Servicios de escritorio remoto disminuyeron 44 % desde su punto máximo en 2020. Atribuyen esta disminución a un incremento de equipos parcheados contra esta vulnerabilidad y más protección contra exploits en el perímetro de la red.

Figura 1. Detecciones a nivel mundial para “BlueKeep” (CVE-2019-0708). (Fuente: telemetría de ESET)

“Si bien es una buena noticia la seguridad siempre es un proceso continuo: siempre surgen nuevas amenazas. En este caso, una posible interpretación para la disminución de las detecciones de BlueKeep es que otras vulnerabilidades podrían ser mucho más efectivas y los atacantes han estado apuntando a ellas. El servicio RDP sigue siendo ampliamente utilizado, y esto significa que los atacantes continuarán en la búsqueda de vulnerabilidades que pueden explotar.”, comenta Camilo Gutiérrez Amaya, Jefe del Laboratorio de Investigación de ESET Latinoamérica.

Desde principios de 2020 hasta finales de 2021 la telemetría de ESET muestra un aumento masivo de intentos maliciosos de conexión al RDP. En el primer trimestre de 2020, registramos 1970 millones de intentos de conexión. Para el cuarto trimestre de 2021 el número había llegado a 166.37 mil millones de intentos de conexión, lo que implica un aumento de más del 8,400%.

Figura 2. Intentos de conexión maliciosa al RDP detectados en todo el mundo (Fuente: telemetría de ESET). Los números absolutos fueron redondeados.

“Claramente, los atacantes están obteniendo rédito a la posibilidad de conectarse a las computadoras de las organizaciones, ya sea para realizar espionaje, desplegar un ransomware o realizar algún otro acto delictivo. Pero también es posible defenderse de estos ataques.”, agrega el especialista de ESET.

A los datos sobre los ataques al RDP se sumó información sobre los intentos de ataques al protocolo SMB (Server Message Block). SMB se puede considerar como un protocolo complementario a RDP, ya que permite acceder de forma remota a archivos, impresoras y otros recursos de red durante una sesión de RDP. En 2017 se hizo público el exploit EternalBlue (CVE-2017-0144) para SMB que puede ser aprovechado por malware con características de gusano. Y según la telemetría de ESET, el uso de este exploit siguió creciendo durante 2018 , 2019 y 2020.

Figura 3. Detecciones del exploit “EternalBlue” CVE -2017-0144 en todo el mundo (Fuente: telemetría de ESET)

A fines de 2020 y hasta 2021, ESET vio una marcada disminución en los intentos de explotar la vulnerabilidad EternalBlue. Al igual que con BlueKeep, el equipo de investigación atribuye esta reducción en la cantidad de detecciones a las prácticas de aplicación de parches, mejor protección de la red y menor uso de SMBv1.

“El informe se apoyó en datos obtenidos de la telemetría de ESET y eso implica que la misma aporta datos sobre lo que los productos instalados de ESET están impidiendo, los clientes comparten la telemetría de amenazas con ESET de manera opcional y no cuenta con información sobre lo que encuentran los clientes de otros productos de seguridad. Debido a estos factores, la cantidad absoluta de ataques será más alta de lo que nos muestra la telemetría de ESET, por lo que es una representación precisa de la situación general. En términos porcentuales, probablemente el aumento y la disminución en las detecciones de varios ataques en general, así como las tendencias de ataque observadas por ESET, sean similares en toda la industria de la seguridad.”, aclara Aryeh Goretsky, Investigador distinguido de ESET.

![](https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/mujer-en-mueble-con-laptop-p.jpg)

<table style="height: 42px;" width="569">
<tbody>
<tr>
<td style="text-align: justify;"><sub><strong>Nuestras noticias también son publicadas a través de nuestra cuenta en Twitter <a href="https://twitter.com/itnewslat?lang=es">@ITNEWSLAT</a> y en la aplicación <a href="https://squidapp.co/en/">SQUID</a></strong></sub></td>
</tr>
</tbody>
</table>

<img src="https://tracker.metricool.com/c3po.jpg?hash=56f88a41e39ab42c063cc51676587a04"/>