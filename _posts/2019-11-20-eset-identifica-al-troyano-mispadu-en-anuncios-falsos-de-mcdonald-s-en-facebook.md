---
layout: posts
color-schema: red-dark
date: '2019-11-20 10:36 -0400'
published: true
superNews: false
superArticle: false
year: '2019'
title: >-
  ESET identifica al troyano Mispadu en anuncios falsos de McDonald’s en
  Facebook
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/McDonald-p.jpg
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/McDonald-g.jpg
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
week: '47'
---
ESET, la mayor empresa de ciberseguridad de la Unión Europea, ha identificado al troyano bancario Mispadu, que está afectando sobre todo a usuarios en Latinoamérica. De características similares a otras familias de troyanos identificadas recientemente por ESET, como Arnavaldo o Casbaneiro, Mispadu está escrita en Delphi y busca víctimas mediante el uso de ventanas emergentes falsas que intentan convencer a los usuarios para que envíen sus datos personales y sus credenciales. El troyano, que está afectando sobre todo a Brasil y a México, contiene una puerta trasera que toma capturas de pantalla, simula el puntero del ratón y acciones de teclado y registra las teclas pulsadas.

El equipo de investigación de ESET ha observado dos métodos diferentes de distribución de Mispadu: uno mediante spam y el otro a través de anuncios falsos (malvertising). El spam es una técnica muy utilizada en Latinoamérica para distribuir troyanos bancarios, pero los anuncios falsos no son tan comunes. Los ciberdelincuentes colocan anuncios en Facebook ofreciendo cupones falsos de descuento en McDonald’s. Una vez que se pincha sobre el anuncio, la víctima accede a una web maliciosa en la que se puede descargar un archivo comprimido en formato ZIP que contiene el instalador MSI, camuflado como un cupón de descuento. Si se descarga y se ejecuta, se inicia una cadena de tres scripts que concluye con la descarga y ejecución del troyano bancario Mispadu. El troyano utiliza cuatro aplicaciones potencialmente no deseadas, todas ellas copias modificadas de software legítimo, para extraer las credenciales almacenadas de los clientes de correo y de los navegadores web del usuario infectado. 

En Brasil, además, se ha observado a Mispadu distribuyendo una interesante extensión de Google Chrome. La extensión propone “Proteger su navegador Chrome”, pero lo que hace en realidad es robar los datos de banca online y de las tarjetas de crédito, llegando incluso a comprometer Boleto, un sistema de pago muy popular en Brasil y que utiliza un sistema de ticketing basado en código de barras para transferir pagos. El componente de Boleto en Mispadu es una de las funcionalidades más avanzadas, ya que reemplaza el código de barras legítimo en un ticket de Boleto con otro vinculado a la cuenta bancaria de los ciberdelincuentes. 

Para más información sobre Mispadu, se puede visitar el [**blog**](https://www.welivesecurity.com/2019/11/19/mispadu-advertisement-discounted-unhappy-meal/) de ESET. 