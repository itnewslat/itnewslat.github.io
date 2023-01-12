---
layout: posts
color-schema: red-dark
date: '2023-01-12 06:33 -0500'
published: true
superNews: false
superArticle: false
year: '2023'
title: >-
  Avast | Grupo de hackers prorruso NoName(057)16 utiliza la crisis económica
  para llamar a las personas a convertirse en hacktivistas
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/hacker-en-codigo-g.jpg
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/hacker-en-codigo-p.jpg
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
week: '02'
---
El último análisis del servidor C&C del proyecto DDosia, activo entre el 1 de agosto y el 5 de diciembre de 2022, reveló lo siguiente:
 
- NoName(057)16 creó el proyecto DDosia mientras utilizaba la red de bots Bobik, probablemente como plan de respaldo. El servidor fue desmantelado a principios de septiembre.
- Detalles técnicos del ejecutable DDosia, que contiene scripts Python, y del servidor de C&C (usado para controlar malware).
- El grupo sigue dirigiéndose a empresas privadas y públicas (tribunales, bancos, instituciones educativas, organismos gubernamentales y servicios de transporte, por ejemplo) en Polonia, Letonia y Lituania, y le sigue Ucrania.
- Avast observó alrededor de 1.400 intentos de ataque DDoS por parte de miembros del proyecto DDosia, 190 de los cuales tuvieron éxito. La tasa de éxito actual del proyecto DDosia es del 13 % aproximadamente.
- La tasa de éxito de los ataques aumentó en noviembre, probablemente debido a ataques dirigidos a múltiples subdominios pertenecientes a un mismo dominio principal. A menudo, estos se ejecutan en el mismo servidor. Si ese servidor es vulnerable a los ataques, todos los subdominios alojados en él también lo son.
- Por ejemplo, el grupo atacó a subdominios pertenecientes al dominio .gov.pl, la mayoría de los cuales se ejecutan en la misma plataforma, lo que aumenta sus posibilidades de derribar un servidor seleccionado.
- Muchas de las páginas atacadas por el grupo no tienen contenido antirruso ni ofrecen servicios críticos.
- El canal privado del proyecto en Telegram tiene unos mil seguidores, a los que el grupo se refiere como "héroes". Ahí se anima a los miembros a utilizar una VPN y a conectarse a través de servidores fuera de Rusia o Bielorrusia, ya que el tráfico procedente de ambos países suele estar bloqueado en aquellos a los que se dirige el grupo.
- Los "héroes" de DDosia pueden vincular una billetera de criptomonedas, utilizando un identificador de usuario incluido en el archivo ZIP que los "héroes" reciben tras registrarse, para ganar hasta 80 mil rublos rusos (aproximadamente 1.200 dólares) en criptomonedas por los ataques DDoS que lleven a cabo con éxito.
- Cualquiera puede manipular sus estadísticas de rendimiento, ya que la comunicación con el servidor C&C no está cifrada ni autenticada.
- Avast detectó un puñado de usuarios intentando descargar el ejecutable DDosia, pero se dio cuenta de que los usuarios de Avast en Rusia, así como los usuarios en Canadá y Alemania añadieron el programa a la lista de excepciones de Avast AV.
- Un "héroe" de DDosia puede generar aproximadamente 1.800 peticiones por minuto utilizando cuatro núcleos y 20 hilos (dependiendo de la calidad de la conexión a Internet del atacante). Con unos 1.000 miembros, suponiendo que al menos la mitad estén activos, el recuento total de solicitudes a objetivos definidos puede ser de hasta 900 mil solicitudes por minuto; suficiente para derribar servicios web que no esperan un tráfico de red más intenso.
- En promedio, los archivos de configuración que contienen las listas de sitios a DDoS se modifican cuatro veces al día, mientras que el número medio de dominios atacados es de 17 al día.
- Avast asume que el grupo de DDosia creó un nuevo servidor de C&C después de que el primero fuera eliminado y este sigue promocionando el proyecto e invitando a nuevos miembros a unirse.

![](https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/hacker-en-codigo-p.jpg)

<table style="height: 42px;" width="569">
<tbody>
<tr>
<td style="text-align: justify;"><sub><strong>Nuestras noticias también son publicadas a través de nuestra cuenta en Twitter <a href="https://twitter.com/itnewslat?lang=es">@ITNEWSLAT</a> y en la aplicación <a href="https://squidapp.co/en/">SQUID</a></strong></sub></td>
</tr>
</tbody>
</table>

<img src="https://tracker.metricool.com/c3po.jpg?hash=56f88a41e39ab42c063cc51676587a04"/>