---
layout: posts
color-schema: red-dark
date: '2022-09-26 07:47 -0500'
published: true
superNews: false
superArticle: false
year: '2022'
title: Uber sufrió ciberataque y lograron acceso a sus sistemas
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/uber-g.jpg
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/uber-p.jpg
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
week: '38'
---
ESET Latinoamérica, compañía líder en detección proactiva de amenazas, analizó el ataque con el que accedieron a una parte importante de los sistemas de Uber y la compañía debió interrumpir parte de su infraestructura mientras investiga lo que ocurrió. Una persona de 18 años asegura ser la responsable.
 

ESET, compañía líder en detección proactiva de amenazas, alerta que Uber confirmó que sufrió un incidente de seguridad y está investigando lo sucedido. Al parecer, la compañía fue víctima del acceso indebido a varios de sus sistemas y el atacante envió a investigadores y a medios como el New York Times (NYT), que dio a conocer la noticia, capturas de pantalla de correos, servicios de almacenamiento en la nube y repositorios de código para demostrar que había logrado acceder a los sistemas.
 
Según afirmó el atacante al medio, para acceder a los sistemas de Uber primero engañaron a través de ingeniería social a un empleado, lograron acceso a su VPN y luego escanearon la Intranet.
 
El investigador Sam Curry habría intercambiado mensajes con quien asegura ser el responsable del ataque. Éste le envió capturas para demostrar que habría logrado acceso completo a una parte importante y crítica de la infraestructura tecnológica de Uber, como son: acceso a cuentas de administrador, a los servidores de Amazon Web Service, el panel de HackerOne con el reporte de las vulnerabilidades, el canal de Slack, acceso a cuentas de administrador de vSphere y de Google Suite. Según Curry, parece que se trata de un compromiso total de sus sistemas:
Por otra parte, se solicitó a quienes trabajan en Uber no utilizar la plataforma de comunicación Slack, que luego fue puesta fuera de servicio.
 
Al parecer, había una red compartida que contenía scripts de powershell y uno de estos scripts contenía las credenciales de acceso para un usuario con permisos de administrador de una solución llamada PAM de thycotic que es utilizada para la gestión de accesos privilegiados. Y desde aquí habrían ingresado al resto de los servicios.
 
El día viernes Uber publicó información actualizada con respecto al incidente y puntualizó lo siguiente:
Hasta el momento no hay evidencia de que los actores maliciosos hayan accedido a información sensible de usuarios y usuarias, como el historial de viajes.
Todos los servicios a través de las apps, como Uber o Uber Eats, están operativos.
La compañía reportó el incidente a las autoridades.
Volvieron a estar operativas en la mañana del viernes herramientas de uso interno que fueron interrumpidas el día jueves por precaución.
 
Según informó el periodista de NYT, Kevin Roose, una persona que asegura ser la responsable del ataque a Uber se comunicó con el medio y dijo que tiene 18 años y que realizó el ataque porque la seguridad era débil. Vice reveló que el atacante dijo que primero robó credenciales de un colaborador de Uber. Luego, le envió al empleado en el transcurso de una hora varias notificaciones push para que acepte o rechace un intento de inicio de sesión. Y si bien el empleado de Uber no validó estos inicios de sesión, el atacante contactó al colaborador por WhatsApp diciendo que era un trabajador del área de TI de Uber y que para detener las notificaciones push debía aceptar.
 
Este no es el primer caso en el que atacantes logran acceder a la red de una compañía tras engañar a un empleado con ingeniería social. Desde ESET ya analizaron los casos de Twitter, en el ataque de ransomware a EA Sports y recientemente en el ataque al sidechain Ronin.

![](https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/uber-p.jpg)

<table style="height: 42px;" width="569">
<tbody>
<tr>
<td style="text-align: justify;"><sub><strong>Nuestras noticias también son publicadas a través de nuestra cuenta en Twitter <a href="https://twitter.com/itnewslat?lang=es">@ITNEWSLAT</a> y en la aplicación <a href="https://squidapp.co/en/">SQUID</a></strong></sub></td>
</tr>
</tbody>
</table>

<img src="https://tracker.metricool.com/c3po.jpg?hash=56f88a41e39ab42c063cc51676587a04"/>


