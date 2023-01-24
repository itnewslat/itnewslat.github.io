---
layout: posts
color-schema: red-dark
date: '2023-01-24 06:27 -0500'
published: true
superNews: false
superArticle: false
year: '2023'
title: >-
  Grupo de hackers prorruso NoName(057)16 utiliza la crisis económica para
  llamar a las personas a convertirse en hacktivistas
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/Hacker-finanzas-g.jpg
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Hacker-finanzas-p.jpg
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
week: '04'
---
Una nueva investigación sobre el proyecto DDosia del grupo de hackers prorruso NoName(057)16 se ha publicado en el blog Avast Decoded: https://decoded.avast.io/martinchlumecky/ddosia-project/.
 
El proyecto DDosia es un grupo de voluntarios que llevan a cabo ataques DDoS en nombre de NoName(057)16. La investigación es una continuación del análisis original del investigador de Avast Martin Chlumecky sobre los ataques DDoS del grupo utilizando la red de bots Bobik. 
 
El último análisis del servidor de Mando y Control ("C&C") del proyecto DDosia, en directo del 1 de agosto al 5 de diciembre de 2022, revela:
 
- NoName(057)16 creó el proyecto DDosia mientras utilizaba la botnet Bobik, probablemente como plan de respaldo. El servidor de la botnet Bobik fue desmantelado a principios de septiembre.
- Detalles técnicos del ejecutable DDosia, que contiene scripts Python, y del servidor de C&C.
- El grupo sigue dirigiéndose a empresas privadas y públicas (tribunales, bancos, instituciones educativas, organismos gubernamentales y servicios de transporte, por ejemplo) en Polonia, Letonia y Lituania, seguidas de Ucrania.
- Avast observó 1,400 intentos de ataque DDoS por parte de miembros del proyecto DDosia, 190 de los cuales tuvieron éxito. La tasa de éxito actual del proyecto DDosia es de aproximadamente el 13 %.
- La tasa de éxito de los ataques aumentó en noviembre, probablemente debido a los ataques dirigidos a múltiples subdominios pertenecientes al mismo dominio principal. A menudo, varios sitios pertenecientes al mismo se ejecutan en el mismo servidor. Si ese servidor es vulnerable a los ataques, todos los subdominios alojados en él también lo son.
	- Por ejemplo, el grupo apuntó a subdominios pertenecientes al dominio .gov.pl, la mayoría de los cuales se ejecutan en la misma plataforma, lo que aumenta sus posibilidades de derribar un servidor seleccionado. 
	- Muchas de las páginas atacadas por el grupo no tienen contenido antirruso ni ofrecen servicios críticos.
- El canal privado del proyecto en Telegram tiene unos 1.000 seguidores, a los que el grupo se refiere como "héroes".  Se recomienda a los miembros que utilicen una VPN y se conecten a través de servidores fuera de Rusia o Bielorrusia, ya que el tráfico procedente de ambos países suele estar bloqueado en los países a los que se dirige el grupo.
- Los "héroes" de DDosia pueden vincular un monedero de criptomonedas, utilizando un identificador de usuario incluido en el archivo ZIP que los "héroes" reciben tras registrarse, para ganar hasta 80.000 rublos rusos (1.200 dólares) en criptomonedas por los ataques DDoS que lleven a cabo con éxito.
- Cualquiera puede manipular sus estadísticas de rendimiento, ya que la comunicación con el C&C no está cifrada ni autenticada.
- Avast detectó un puñado de usuarios que intentaban descargar el ejecutable DDosia, pero se dio cuenta de que los usuarios de Avast en Rusia, así como los usuarios en Canadá y Alemania añadían el programa a la lista de excepciones de Avast AV. 
- Un "héroe" de DDosia puede generar aproximadamente 1.800 peticiones por minuto utilizando cuatro núcleos y 20 hilos (dependiendo de la calidad de la conexión a Internet del atacante). Con unos 1.000 miembros, suponiendo que al menos la mitad estén activos, el recuento total de peticiones a objetivos definidos puede ser de hasta 900.000 peticiones por minuto Suficiente para derribar servicios web que no esperan un tráfico de red más intenso.
- Los archivos de configuración que contienen las listas de sitios a DDoS se modifican cuatro veces al día, por término medio. El número medio de dominios atacados es de 17 al día. 
- Avast asume que el grupo creó un nuevo servidor de C&C después de que el primer servidor de C&C de DDosia fuera eliminado. El grupo sigue promocionando el proyecto e invitando a nuevos miembros a unirse.
 
![](https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Hacker-finanzas-p.jpg)

<table style="height: 42px;" width="569">
<tbody>
<tr>
<td style="text-align: justify;"><sub><strong>Nuestras noticias también son publicadas a través de nuestra cuenta en Twitter <a href="https://twitter.com/itnewslat?lang=es">@ITNEWSLAT</a> y en la aplicación <a href="https://squidapp.co/en/">SQUID</a></strong></sub></td>
</tr>
</tbody>
</table>

<img src="https://tracker.metricool.com/c3po.jpg?hash=56f88a41e39ab42c063cc51676587a04"/>