---
layout: posts
color-schema: red-dark
date: '2018-10-08 11:24 -0400'
published: true
superNews: false
superArticle: false
title: La lección que nos deja el ciberataque a British Airways
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Delta-AirLines-p.jpg
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/Delta-AirLines-g.jpg
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
---
- Sólo unas líneas de código JavaScript en el formulario de registro de datos para la compra en linea de la aerolínea fue suficiente para que la información de 75.000 clientes y sobre 380.000 operaciones de pago con tarjeta de crédito fueran capturadas. ¿Qué nos deja el caso British  Airways como lección?

**Por: Jesús Cortina, Vicepresidente Ejecutivo y Gerente General de GM Security Technologies.** 

El pasado 06 de septiembre, los servicios informativos en Europa y el resto del mundo dieron a conocer los efectos de un sofisticado ciberataque del grupo Magecart: la información de 75.000 clientes de la aerolínea hispano-británica British Airways (Grupo IAG) había sido robados desde la página web de la aerolínea, así como la información correspondiente a los datos de compra y números de tarjetas de crédito involucrados en más de 380.000 operaciones.

Apenas se dio a conocer la noticia, el valor en el precio de las acciones de British Airways cayó 3% en los mercados europeos. Y la pregunta seguía siendo la misma: ¿Cómo había ocurrido? Especialistas en hacer el levantamiento forense del ataque lo dejaban claro. Según los expertos reseñados por la prensa “sólo necesitaron inyectar un script con 22 líneas que colaron en una de las bibliotecas JavaScript de la web de British Airways para llevarse todos los datos que los clientes depositaban en la página”. Sólo 22 líneas de código y una agilidad quirúrgica para colocarlos en el servidor adecuado para operar con eficiencia entre el 25 de agosto y el 05 de septiembre.

Entre los detalles más relevantes de este ataque es que el código malicioso JavaScript fue servido en el servidor de British Airways con un Certificado SSL (Secure Sockets Layer) válido. El uso de HTTPS fue importante para que no se detectara la actividad maliciosa de los atacantes, ya que la secuencia de comandos cargada a través de HTTP generaría una advertencia de "contenido mixto" para el usuario. 

**El respaldo de los estándares PCI**

Esta operación del Magecart sobre el sitio de British Airways no ha sido el primero, ni será el último. Incluso fue un modos operandi similar al ejecutado por el grupo contra el sitio de TicketMaster en el Reino Unido hace algunos meses y que afectó a unos 40.000 clientes de la plataforma de boletería.

¿Qué nos alerta esta modalidad de ciberataques? Todas las organizaciones que gestionan transacciones directas desde sus sitios Web (tarjeta no presente) con información sensibles de sus clientes están expuestas con toda seguridad a un intento de vulnerar sus datos. Es más, es más factible que ya hayan sido violentados sus sistemas de seguridad sin que lo sepan. 

Así las cosas, todas las organizaciones deben proteger los datos de sus clientes atendiendo a políticas y procesos integrados de tecnologías y estándares. Estándares tecnológicos de protección general de datos integrados a modelos de protección específicas, como son el Estándar PCI DSS para el resguardo de los datos en las transacciones electrónicas con tarjetas de crédito.

El Estándar de Seguridad de Datos para la Industria de Tarjeta de Pago (Payment Card Industry Data Security Standard) o PCI DSS fue desarrollado por un comité conformado por las compañías de tarjetas (débito y crédito) más importantes, comité denominado PCI SSC (Payment Card Industry Security Standards Council) como una guía que ayuda a las organizaciones que procesan, almacenan y/o transmiten datos de tarjetahabientes (o titulares de tarjeta), a asegurar dichos datos, con el fin de evitar los fraudes que involucran tarjetas de pago débito y crédito. 

Los componentes de este estándar agregan valor en la protección de datos de los tarjetahabientes y son de estricto cumplimiento por empresas pequeñas y grandes que gestionen operaciones de pago con tarjeta de crédito.  Por lo que no importa el tamaño de su empresa, la seguridad de la información se ha convertido en responsabilidad de todos en la cadena de manejo de pagos con tarjetas.


