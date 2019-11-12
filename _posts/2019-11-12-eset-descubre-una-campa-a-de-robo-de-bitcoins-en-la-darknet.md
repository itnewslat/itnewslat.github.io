---
layout: posts
color-schema: red-dark
date: '2019-11-12 09:00 -0400'
published: true
superNews: false
superArticle: false
year: '2019'
title: ESET descubre una campaña de robo de bitcoins en la Darknet
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Bitcoin-p.jpg
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/Bitcoin-g.jpg
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
week: '46'
---
ESET, la mayor empresa de ciberseguridad de la Unión Europea, ha descubierto una campaña de espionaje y robo de bitcoins a través de una versión troyanizada de Tor, un navegador utilizado mayoritariamente para acceder a la Deep Web, así como a la Darknet, y que lleva años en marcha.

“El malware que hemos encontrado permite a los delincuentes que están detrás de la campaña ver las webs que la víctima está visitando. En teoría, pueden cambiar el contenido de las páginas, recopilar los datos que se introducen en los formularios que rellena la víctima y mostrar mensajes falsos, entre otras actividades. Sin embargo, lo único que hemos observado en nuestra investigación es cómo modifican la dirección de las carteras de criptomonedas”, explica Anton Cherepanov, responsable senior de malware en ESET y de esta investigación. 

La campaña ha sido dirigida mayoritariamente a usuarios de habla rusa de la red anónima Tor. Para distribuir el navegador modificado para incluir malware, los criminales lo promocionaban en diferentes foros y en pastebin.com como la versión oficial en ruso del navegador. Su objetivo era engañar a objetivos específicos para que accedieran a webs maliciosas aparentemente legítimas.

“En la primera web, el usuario recibía un mensaje que alertaba de que la versión de su navegador Tor estaba obsoleta. Los que mordían el anzuelo eran redirigidos a una segunda web con un instalador fraudulento”, continua Cherepanov. Una vez instalado, el navegador Tor troyanizado actúa como una aplicación completa y funcional. “El delincuente no modifica los componentes binarios del navegador, sino que introduce los cambios en la configuración y en sus extensiones, con lo que los usuarios menos técnicos no se darán cuenta de las diferencias entre la versión original y la fraudulenta”, comenta el investigador. 

Entre los cambios, se desactivan las actualizaciones en la configuración, la herramienta de actualización se renombra para que el usuario no actualice y los delincuentes no pierdan capacidades. La firma digital para comprobar los complementos también se desactiva para que los delincuentes puedan modificar cualquier complemento a su antojo. Los delincuentes, además, realizan modificaciones que se notifican al servidor de centro de mando y control (C&C) localizado en un dominio onion, es decir, accesible solamente a través de Tor. “En teoría, los atacantes pueden cargar cualquier amenaza personalizada para páginas en concreto; sin embargo, en nuestra investigación comprobamos que la carga maliciosa en JavaScript era siempre la misma”, apunta Cherepanov. 

El payload en JavaScript apuntaba a tres de los mercados de la Darknet más importantes entre los usuarios de habla rusa. Este payload busca modificar QIWI (un servicio de transferencia de dinero muy popular en Rusia) o carteras de bitcoins localizadas en páginas de esos mercados. En cuanto la víctima visitaba su página de perfil para añadir fondos a su cuenta mediante bitcoins, el navegador troyanizado Tor cambiaba automáticamente la dirección y el de la cartera destino con lo que los fondos se transferían a las cuentas de los delincuentes. 

“En nuestra investigación hemos identificado tres carteras de bitcoins utilizadas en esta campaña desde 2017. Cada una tenía un número relativamente grande de transacciones pequeñas, lo que demuestra que fueron usadas por el navegador Tor troyanizado”, concluye Cherepanov. “Cuando realizamos la investigación, se habían cargado en estas carteras 4,8 bitcoins, lo que corresponde a unos 40.000 dólares, aunque es probable que el robo sea mayor porque el navegador Tor troyanizado modifica las carteras QIWI”.