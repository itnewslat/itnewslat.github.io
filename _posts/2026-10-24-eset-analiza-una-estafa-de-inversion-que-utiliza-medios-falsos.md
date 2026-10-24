---
layout: posts
color-schema: red-dark
date: '2026-10-24 14:16 -0400'
published: true
superNews: false
superArticle: false
year: '2026'
title: "ESET analiza una estafa de inversión que utiliza medios falsos"
image-banner: >-
  https://raw.githubusercontent.com/itnewslat/assets/refs/heads/master/img/1200x450/Estafa-Publica-p.jpg
week: '43'
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/refs/heads/master/img/540x320/Estafa-Publica-p.jpg
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/refs/heads/master/img/1024x680/Estafa-Publica-g.jpg
categories:
    - Argentina
    - Chile
    - Colombia
    - Ecuador
    - México
    - Mexico
    - Panamá
    - Panama
    - Perú
    - Peru
    - Venezuela
tags:
  - Seguridad
week: '43'
---
### **figuras públicas y la identidad de una empresa financiera real**

- Una investigación de ESET Latinoamérica reconstruyó cada etapa del fraude, desde los anuncios hasta el contacto con supuestos asesores y una plataforma que suplanta la identidad de una empresa real.

El equipo de investigación de ESET Latinoamérica, compañía líder en detección proactiva de amenazas, analizó una campaña fraudulenta que circula en Argentina a través de anuncios en Gmail que intenta estafar a las personas con una supuesta plataforma de inversión para robar su dinero. En el análisis se reconstruye cada etapa del engaño y se explica cómo reconocer este fraude financiero que combina publicidad digital, suplantación de identidad de múltiples marcas y figuras públicas, inteligencia artificial, ingeniería social telefónica y una plataforma diseñada para aparentar una actividad financiera legítima.

En este esquema los delincuentes utilizan anuncios, marcas conocidas, figuras públicas y contenido generado o editado con inteligencia artificial para promocionar una supuesta oportunidad de inversión. En todos los recorridos analizados la promesa es la misma: una oportunidad de obtener ganancias con una alta rentabilidad a partir de un depósito inicial relativamente bajo.

Al hacer clic en el anuncio, la persona llega a un artículo que imita a un medio periodístico reconocido para promocionar una supuesta oportunidad de inversión y, al final, a un formulario que pide nombre, apellido y número de teléfono de las potenciales víctimas para que la falsa empresa financiera se comunique con las personas.

Sin embargo, el engaño no termina en esa página. Como parte de la investigación ESET analizó la infraestructura utilizada por los ciberdelincuentes y completó al menos tres formularios. Luego se recibió el llamado telefónico de los supuestos asesores, que se hacían pasar por representantes de una empresa financiera llamada VT Markets. Es importante mencionar que VT Markets es una empresa legítima que también es víctima de este fraude, ya que su identidad es utilizada para generar confianza. Durante la llamada, el asesor envió un correo con acceso a una plataforma llamada "VTMarketLTD", alojada en dominios distintos de los del sitio oficial de VT Markets. Desde allí se pedía depositar dinero y, supuestamente, gestionar las ganancias.

Entre mayo y septiembre de 2026 el equipo de investigación de ESET identificó al menos 9 anuncios fraudulentos que aparecían en la bandeja de entrada de Gmail. Los mensajes eran directos y diversos: “Registrate hoy desde 150.000”, “Invierte 150.000 hoy, gana 1 millón mañana”, “verificá tu edad y cobrá” o “Una jubilada compartió su resultado: de 100.000 a 386.000 ARS”.

Al hacer clic en más información las personas abren una página que suplanta la identidad de medios de comunicación masivos, como La Nación, CNN Argentina, TN, Clarín o Infobae. Allí, la imagen de personas públicas es utilizada como parte de la ingeniería social para intentar darle credibilidad a las supuestas oportunidades de inversión. Algunos ejemplos:

- una supuesta declaración del periodista Carlos Pagni sobre un proyecto energético llamado “Argentina LNG”;
- una nota con el presidente Javier Milei y Marcos Galperin que promete “4.500.000 pesos mensuales”;

“Es importante destacar que tanto las empresas, los medios y las personas mencionadas no tienen relación con estas promociones. Su imagen se usa sin autorización”, destaca Rodrigo Alvarez, Investigador de Seguridad Informática de ESET Latinoamérica. 

En al menos un anuncio Google se indicaba a través de su Centro de Transparencia de Anuncios que la pieza fue “Creada o editada con IA”. Esto no es una inferencia de ESET, sino que es la plataforma publicitaria la que lo informa. Además, hay otros indicios del uso de IA:

- un video de Javier Milei que no corresponde a ningún acto público. El análisis realizado con Hive - Detection asignó un 99% de probabilidad a que el contenido hubiera sido generado o manipulado mediante IA.

- una foto que junta al presidente con otras cuatro personas bajo el rótulo “Argentina LNG”, en un encuentro que nunca ocurrió; 

- artículos con la misma estructura, adaptados a distintos medios y figuras públicas.

“Al final del recorrido, todas las páginas falsas piden lo mismo: nombre, apellido y teléfono. Ese último dato es el que habilita la siguiente etapa. Funciona como un mecanismo para generar contactos de potenciales víctimas, que después un equipo intenta convertir por teléfono”, agrega el investigador de ESET.

Una vez que se completa el formulario comienza la segunda etapa del engaño:

- La llamada. A los pocos minutos de completar el formulario se comienza a recibir llamadas de diversos números de teléfono. Esto sugiere que hay personas monitoreando en tiempo real. Incluso durante los días siguientes desde ESET se observó la frecuencia con la que intentan comunicarse y los distintos números.
- La presentación del asesor: cuando las víctimas atienden se presenta un supuesto asesor con su nombre y utilizando el nombre de una empresa financiera o bróker. En este caso, VT Markets. A su vez, los falsos operadores intentan transmitir experiencia como asesor de inversiones o especialista en finanzas, ofreciendo ayuda personalizada.
- El correo: durante la llamada el asesor activa la siguiente fase, que es el envío de un correo electrónico con más documentación de la empresa financiera para seguir construyendo credibilidad. Además, el correo incluye un enlace y unas credenciales de acceso a la plataforma financiera, así como un tutorial con el paso a paso para crear la cuenta en la plataforma.  
- La falsa plataforma de inversión: El enlace en esta campaña nos llevó a una plataforma de apariencia profesional bajo el nombre VTMarketLTD, suplantando la identidad de VT Markets, una empresa legítima que también es víctima del fraude. 

“La llamada es el momento en que el fraude deja de ser una página y se convierte en una conversación. Aquí entran en juego otras técnicas de manipulación por parte de los delincuentes, que no llaman exigiendo datos de inmediato, sino que primero buscan construir confianza”, advierte Alvarez. En Rosario, una persona perdió dinero después de que un asesor la guiara hacia depósitos crecientes, según publicó Redboing.

Después que la víctima indica querer saber más, el operador envía un correo electrónico con un enlace a una supuesta plataforma de inversión utilizando el nombre de VT Markets LTD junto con las credenciales de acceso. Es importante aclarar que VT Markets es una empresa financiera legitima, la cual los estafadores utilizan su nombre para engañar y dar credibilidad a su estafa.

Al abrir el link las personas se encuentran con una supuesta plataforma cuyo sitio está alojado en un dominio que imita visualmente al legítimo, pero no es idéntico. Desde aquí las personas supuestamente podrán realizar depósitos, extraer dinero, gestionar sus inversiones y ganancias. Una vez aquí la persona que actúa como asesora indica que para comenzar a invertir la víctima debe invertir un monto mínimo de 150 mil pesos argentinos.

En este tipo de fraudes, según ESET, las ganancias aparentes cumplen una función psicológica. Ver que el dinero “crece” refuerza la confianza y facilita el pedido siguiente: depositar más para ganar más. El problema en este tipo de fraudes aparece cuando la persona intenta retirar sus fondos y le piden un nuevo pago. Las páginas de captación ya preparaban esa expectativa. Algunas mostraban paneles “en vivo” con supuestos pagos recibidos, contadores de usuarios conectados y comprobantes de transferencias falsos con logos de bancos reales.

Desde ESET recomiendan qué hacer si ya se compartieron datos o se depositó dinero:

- Cortar el contacto. No responder llamadas, correos ni mensajes del supuesto asesor.
- No hacer nuevos pagos. Tampoco para “desbloquear” un retiro o pagar una comisión.
- Comunicarse de inmediato con el banco o con el medio de pago que se utilizó. Cuanto antes se actúe, más opciones hay.
- Guardar toda la evidencia: correos, chats, números de teléfono, direcciones web, capturas y comprobantes.
- Hacer la denuncia. En Argentina, ante la Unidad Fiscal Especializada en Ciberdelincuencia (UFECI) y la Comisión Nacional de Valores (CNV). En otros países, ante la policía o la fiscalía y el regulador financiero local. 
- Cambiar las contraseñas utilizadas en la falsa plataforma si se utilizan en otros servicios.
- Revisar el equipo con una solución de seguridad si se instaló algún programa por pedido del asesor.
- Desconfiar de quienes prometen recuperar el dinero a cambio de un pago previo.

“Este caso muestra que una estafa de inversión ya no es solo un sitio falso. Este engaño es un ejemplo de cómo los estafadores están sofisticando las técnicas de ingeniería social para manipular a las personas de formas convincentes. Los criminales saben que las personas no siempre verifican cada detalle. Por eso, la primera defensa está en la educación y en la concientización. Pero también siempre es recomendable instalar en el dispositivo un software antimalware confiable y de buena reputación que detecte y bloque anuncios y enlaces sospechosos de forma temprana para minimizar cualquier riesgo”, aconseja Rodrigo Alvarez de ESET.

![](https://raw.githubusercontent.com/itnewslat/assets/refs/heads/master/img/540x320/Estafa-Publica-p.jpg)

<table style="height: 42px;" width="569">
<tbody>
<tr>
<td style="text-align: justify;"><sub><strong>Somos ITNEWS.LAT, y nuestras noticias también son publicadas a través de nuestra cuenta en Twitter <a href="https://twitter.com/itnewslat?lang=es"> @ITNEWSLAT</a> o INSTAGRAM <a href="https://www.instagram.com/itnewslat/">@ITNEWSLAT</a> y en las aplicaciones como <a href="https://itnews.lat/app">nuestra APP</a> y <a href="https://squidapp.co/en/">SQUID</a></strong></sub></td>
</tr>
</tbody>
</table>

<img src="https://tracker.metricool.com/c3po.jpg?hash=56f88a41e39ab42c063cc51676587a04"/>
