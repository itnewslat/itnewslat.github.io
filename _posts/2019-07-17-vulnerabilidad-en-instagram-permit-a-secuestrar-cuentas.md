---
layout: posts
color-schema: red-dark
date: '2019-07-17 15:40 -0400'
published: true
superNews: false
superArticle: false
year: '2019'
title: Vulnerabilidad en Instagram permitía secuestrar cuentas
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Instagram-p.jpg
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/Instagram-g.jpg
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
week: '29'
---
**La compañía ESET analiza el fallo, ya parcheado, que explotaba un error en el mecanismo de recuperación de contraseñas en la versión móvil y permitía a un atacante secuestrar cuentas sin necesidad de interacción por parte de la víctima.**

ESET, compañía líder en detección proactiva de amenazas, analiza el hallazgo de una vulnerabilidad en Instagram que hubiese permitido a un atacante secuestrar de manera remota cualquier cuenta sin necesidad de interacción por parte de los propietarios de las mismas. El mismo ya fue reparado por la red social.

El investigador de seguridad Laxman Muthiyah reportó el hallazgo luego de que Facebook aumentara los montos de las recompensas que paga como parte de su programa de bug bounty, tanto para el hallazgo de vulnerabilidades críticas como de secuestro de cuentas. Laxman decidió investigar en busca de algún fallo que pueda reportar y así fue que encontró esta vulnerabilidad que le significó una recompensa de $30.000.

El fallo radicaba en el mecanismo de recuperación de contraseñas de la versión móvil de Instagram. El mismo permite a los usuarios recuperar el acceso a sus cuentas en caso de olvidar su clave. En este sentido, un usuario de Instagram que se olvide de su contraseña y decida resetearla deberá demostrar su identidad confirmando la recepción de un código de seis dígitos que le llegará a través de un mensaje SMS al número telefónico asociado. Este código, que expira pasados los 10 minutos, deberá ser ingresado por el usuario para poder cambiar su contraseña.

Así fue que el investigador realizó un ataque de fuerza bruta e ingresó una gran cantidad de combinaciones posibles. Si bien el sistema permite un número máximo de intentos, este límite de tiempo puede evadirse mediante solicitudes de fuerza bruta desde diferentes direcciones IP y aprovechándose también de lo que se conoce como condición de carrera (en inglés race hazard o race condition). De esta manera, el envío de una gran cantidad de solicitudes utilizando múltiples IP permitió a Laxman enviar simultáneamente muchas combinaciones sin tener problemas de límite. Laxman logró secuestrar una cuenta de Instagram al enviar 200.000 combinaciones de códigos diferentes y utilizando una gran cantidad de IP diferentes.

La vulnerabilidad ya fue parcheada. “Estos casos sirven como ejemplo para demostrar que incluso las grandes plataformas y servicios son vulnerables a posibles ataques y/o fallos de seguridad, por lo que es importante que no dejemos la seguridad librada al azar o en manos de los que proveen los servicios que utilizamos. Es importante que como usuarios hagamos nuestra parte para reforzar la seguridad, ya sea mediante el uso del doble factor de autenticación, utilizando contraseñas únicas por servicio o mediante otras acciones, de manera de disfrutar de Internet de manera segura.”, mencionó Camilo Gutierrez, Jefe del Laboratorio de Investigación de ESET Latinoamérica.
ESET acerca #quenotepase, con información útil para evitar que situaciones cotidianas afecten la privacidad en línea. 

De manera de conocer más sobre seguridad informática **[ingrese al portal de noticias de ESET](https://www.welivesecurity.com/la-es/2019/07/15/vulnerabilidad-instagram-permitia-secuestrar-cuentas/)**: 