---
layout: posts
color-schema: red-dark
date: '2023-06-20 05:54 -0500'
published: true
superNews: false
superArticle: false
year: '2023'
title: 'GravityRAT: software espía va en busca de la copia de seguridad de WhatsApp'
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/Celular-activo-g.jpg
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Celular-activo-p.jpg
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
week: '25'
---
El equipo de investigación de ESET analiza un software espía que roba archivos de la copia de seguridad de WhatsApp y tiene la capacidad de recibir comandos para eliminar archivos.

El equipo de investigación de ESET, compañía líder en detección proactiva de amenazas, identificó una versión actualizada para Android de GravityRAT, un troyano de acceso remoto que se distribuye como las aplicaciones de mensajería BingeChat y Chatico. Existen versiones disponibles de este malware para Windows, Android y macOS, y si bien el actor detrás de este troyano sigue siendo desconocido desde ESET se rastrea al grupo como SpaceCobra.

Activo desde al menos 2015, el grupo SpaceCobra ahora amplió sus funcionalidades para exfiltrar las copias de seguridad de WhatsApp Messenger y recibir comandos para eliminar archivos. Esta campaña utiliza aplicaciones de mensajería como señuelo para distribuir el backdoor GravityRAT.  

El grupo detrás de este malware utiliza el código de la aplicación de mensajería instantánea legítima llamada OMEMO para proporcionar la funcionalidad de chat en las aplicaciones de mensajería maliciosas BingeChat y Chatico. Probablemente activa desde agosto de 2022, según ESET la campaña de BingeChat aún está en curso. Sin embargo, la campaña que utiliza Chatico ya no está activa. 

Según el nombre del archivo APK, la app maliciosa tiene la marca BingeChat y afirma proporcionar la funcionalidad de mensajería. Desde el equipo de ESET encontraron que el sitio web bingechat[.]net a estado distribuyendo una muestra. El sitio web debería descargar la aplicación maliciosa después de tocar el botón DESCARGAR APLICACIÓN; sin embargo, solicita que los visitantes inicien sesión. “No teníamos credenciales y los registros estaban cerrados. Lo más probable es que los operadores detrás de esta campaña solo abran el registro cuando esperan que una víctima específica visite el sitio, posiblemente a través de una dirección IP particular, geolocalización, una URL personalizada o dentro de un período de tiempo específico. Por lo tanto, creemos que las víctimas potenciales son altamente específicas.”,  comenta Camilo Gutiérrez Amaya, Jefe del Laboratorio de Investigación de ESET Latinoamérica. 

Según el equipo de investigación la aplicación maliciosa nunca estuvo disponible en la tienda Google Play. Es una versión troyanizada de la aplicación de Android legítima OMEMO Instant Messenger (IM) pero tiene la marca BingeChat. OMEMO IM es una reconstrucción del cliente para Android Conversations.

Después de iniciarse, la aplicación solicita al usuario que habilite todos los permisos necesarios para funcionar correctamente. Excepto por el permiso para leer los registros de llamadas los otros permisos solicitados son típicos de cualquier aplicación de mensajería, por lo que es posible que el usuario del dispositivo no se alarme cuando la aplicación los solicite.
Como parte de la funcionalidad legítima, la aplicación ofrece opciones para crear una cuenta e iniciar sesión. Antes de que el usuario inicie sesión en la aplicación, GravityRAT comienza a interactuar con su servidor C&C, filtrando los datos del usuario del dispositivo y esperando que se ejecuten los comandos. GravityRAT es capaz de exfiltrar:

•	registros de llamadas
•	lista de contactos
•	mensajes SMS
•	archivos con extensiones específicas: jpg, jpeg, log, png, PNG, JPG, JPEG, txt, pdf, xml, doc, xls, xlsx, ppt, pptx, docx, opus, crypt14, crypt12, crypt13, crypt18, crypt32
•	ubicación del dispositivo
•	información básica del dispositivo

Los datos que se exfiltrarán se almacenan en archivos de texto en medios externos, luego se extraen al servidor de C&C y finalmente se eliminan. Según ESET estos son comandos muy específicos que normalmente no se ven en el malware para Android. Las versiones anteriores de GravityRAT para Android no podían recibir comandos; solo podían cargar datos extraídos a un servidor C&C en un momento determinado.

“No sabemos cómo fue que las potenciales víctimas fueron atraídas o descubrieron el sitio web malicioso. Teniendo en cuenta que la posibilidad de descargar la aplicación está condicionada a tener una cuenta y que no fue posible registrar una nueva cuenta al momento del análisis, creemos que las víctimas de esta campaña fueron especialmente seleccionadas.”, menciona el investigador.
 
Los datos de telemetría de ESET no han registrado ninguna víctima de esta campaña de BingeChat, lo que sugiere además que la campaña probablemente tenga un objetivo limitado. Sin embargo, se tiene una detección de otra muestra para Android de GravityRAT en India que data de junio de 2022. En este caso, GravityRAT se denominó Chatico

![](https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Celular-activo-p.jpg)

<table style="height: 42px;" width="569">
<tbody>
<tr>
<td style="text-align: justify;"><sub><strong>Nuestras noticias también son publicadas a través de nuestra cuenta en Twitter <a href="https://twitter.com/itnewslat?lang=es">@ITNEWSLAT</a> y en la aplicación <a href="https://squidapp.co/en/">SQUID</a></strong></sub></td>
</tr>
</tbody>
</table>
<img src="https://tracker.metricool.com/c3po.jpg?hash=56f88a41e39ab42c063cc51676587a04"/>