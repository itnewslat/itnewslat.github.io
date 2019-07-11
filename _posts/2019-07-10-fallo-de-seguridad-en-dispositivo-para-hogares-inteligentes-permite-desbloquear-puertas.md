---
layout: posts
color-schema: red-dark
date: '2019-07-10 20:42 -0400'
published: true
superNews: false
superArticle: false
year: '2019'
title: >-
  Fallo de seguridad en dispositivo para hogares inteligentes permite
  desbloquear puertas
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Hogar-inteligente-p.jpg
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/Hogar-inteligente-g.jpg
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
week: '28'
---
**La compañía ESET advierte sobre vulnerabilidades críticas que existían en dispositivos IoT de la marca Zipato y permitían a un atacante abrir cerraduras inteligentes.**

ESET Latinoamérica, compañía líder en detección proactiva de amenazas, analiza la existencia de una serie de vulnerabilidades críticas en dispositivos IoT de la marca Zipato, utilizados como parte de una central inteligente (smart hub) para controlar los dispositivos IoT utilizados en el hogar. En caso de ser explotados permitirían a un atacante abrir la puerta principal de un domicilio que utilice una cerradura inteligente.

 Los riesgos de la seguridad en dispositivos IoT no son nuevos. “Aún estamos lejos de contar con estándares de seguridad para IoT y la realidad indica que, si bien la usabilidad y facilidad que los dispositivos inteligentes ofrecen al usuario están muy bien valoradas, también pueden representar una puerta abierta para el ingreso de amenazas”, explicó el jefe del laboratorio de ESET Latinoamérica, Camilo Gutiérrez, en Tendencias 2019.

A principios de 2018 investigadores de ESET publicaron un whitepaper con los resultados de un análisis de doce dispositivos IoT disponibles en el mercado y cada uno presentó algún problema desde el punto de vista de la privacidad, además de otros fallos de seguridad.

El descubrimiento de estas vulnerabilidades es obra de los investigadores Charles Dardaman y Jason Wheeler. Dos de las tres descubiertas son de diseño e implementación de los mecanismos de autenticación de la API de la central inteligente, mientras que la tercera se trata de una vulnerabilidad en la llave privada SSH para ROOT, que según explican en una publicación es única, y permite que pueda ser extraída de la tarjeta de memoria ubicada en el dispositivo. Esta llave extraíble es la puerta de entrada a la cuenta del usuario con máximo nivel de acceso. En este sentido, cualquiera que tenga la llave privada puede acceder al dispositivo sin necesidad de tener que crackear la contraseña.

Mediante el uso de la llave privada, los investigadores descargaron del dispositivo un archivo .json que contenía una contraseña hasheada, la cual utilizaron para acceder a la API mediante el uso de la técnica pass the hash. De esta manera, los investigadores lograron engañar al dispositivo y hacerle creer que eran los propietarios del equipo al obtener la contraseña hasheada e ingresarla en el smart hub. Una vez hecho esto, demostraron que mediante un comando un atacante podría enviar una solicitud a una central inteligente vulnerable para desbloquear y bloquear una puerta.

Uno de los investigadores aseguró a TechCrunch que cualquier apartamento que tenga registrada una cuenta principal para el resto de los apartamentos del edificio les permitiría abrir todas las puertas. Para explotar los fallos un atacante necesitaría estar conectado a la misma red Wi-Fi que la central inteligente vulnerable y el investigador aseguró que cualquier central inteligente conectada directamente a Internet podría explotarse de manera remota.

Los resultados de la investigación fueron publicados ahora pero el hallazgo data de febrero de 2019. Los detalles de la investigación se hicieron públicos una vez que la compañía Zipato reparó los fallos de seguridad en marzo de este año.

Según dijo el jefe ejecutivo de Zipato al medio, la nueva cada central inteligente viene con una llave privada SSH única, así como otras mejoras de seguridad que fueron añadidas. Además, la compañía comentó que ha descontinuado la central Inteligente ZipaMicro en sustitución por un producto más nuevo.
 
ESET acerca #quenotepase, con información útil para evitar que situaciones cotidianas afecten la privacidad en línea.
 
De manera de conocer más sobre seguridad informática ingrese al portal de noticias de ESET: https://www.welivesecurity.com/la-es/2019/07/05/fallo-seguridad-dispositivo-hogares-inteligentes-desbloquear-puertas/