---
layout: posts
color-schema: red-dark
date: '2023-03-13 06:03 -0500'
published: true
superNews: false
superArticle: false
year: '2023'
title: >-
  ¿Estafas románticas? ESET identificó una campaña de espionaje que se
  distribuye por aplicaciones de mensajería
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/whatsapp-g.jpg
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/whatsapp-p.jpg
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
week: '11'
---
El equipo de investigación de ESET, compañía líder en detección proactiva de amenazas, identificó una campaña de ciberespionaje que, a través de aplicaciones de mensajería para Android, exfiltran información confidencial.

El equipo de investigación de ESET, compañía líder en detección proactiva de amenazas, analizó una campaña de ciberespionaje que ha estado distribuyendo backdoors (troyano que permite el acceso al sistema infectado y su control remoto) a través de aplicaciones de mensajería para Android troyanizadas, exfiltrando información confidencial. Durante la investigación se identificó información, incluida la geolocalización, de más de 150 víctimas en India, Pakistán, Rusia, Omán y Egipto.
 
La campaña activa fue atribuida por ESET al grupo conocido como Transparent Tribe, y es dirigida principalmente a usuarios de Android de India y Paquistán, presumiblemente con una orientación militar o política. Las víctimas probablemente fueron atacadas a través de una estafa romántica, donde inicialmente fueron contactadas en otra plataforma y luego convencidas de usar aplicaciones supuestamente “más seguras” que terminaron instalando en sus dispositivos. La campaña ha estado activa aproximadamente desde julio de 2022, y ha distribuido un código malicioso identificado por ESET como el backdoor CapraRAT  utilizando al menos dos sitios web similares que se presentan como versiones limpias de esas aplicaciones de mensajería segura.
 
Además de la funcionalidad de chat inherente de la aplicación legítima original, las versiones troyanizadas incluyen el backdoor CapraRAT. Este backdoor es capaz de realizar capturas de pantalla y tomar fotos, grabar llamadas telefónicas y el audio circundante, y exfiltrar cualquier otra información confidencial del dispositivo. El backdoor también puede recibir comandos de los atacantes para realizar distintas acciones en el dispositivo comprometido, como descargar archivos, realizar llamadas y enviar mensajes SMS. La campaña tiene un objetivo limitado y nada sugiere que estas aplicaciones alguna vez estuvieron disponibles en Google Play.
 
Basado en el nombre de Android Package Kit (APK), la primera aplicación maliciosa tiene como nombre de marca MeetsApp y afirma proporcionar comunicaciones de chat seguras. ESET encontró un sitio web desde el cual se podría haber descargado esta muestra (meetsapp[.]org.

 
El análisis del sitio web de distribución de MeetsApp mostró que algunos de sus recursos estaban alojados en otro servidor con un nombre de dominio similar, utilizando un nombre de servicio similar. Ese sitio también proporcionó una aplicación de mensajería para Android, MeetUp, para descargar con el mismo nombre de paquete que para MeetsApp y con el mismo logotipo del sitio web.
 
Antes de usar la aplicación, las víctimas deben crear cuentas que estén vinculadas a sus números de teléfono y requieran la verificación vía SMS. Una vez que se crea esta cuenta, la aplicación solicita permisos adicionales que permiten que se despliegue la funcionalidad completa del backdoor, como acceder a contactos, registros de llamadas, mensajes SMS, almacenamiento externo y grabación de audio.

De acuerdo a la investigación de ESET, las potenciales víctimas fueron engañadas para instalar la aplicación a través de una operación de estafa romántica, donde lo más probable es que primero fueron contactados en una plataforma diferente y luego persuadidos para usar la aplicación “más segura” MeetsApp o MeetUp.
 
**Los puntos claves de la investigación de ESET, son:**

- La campaña de Transparent Tribe se dirige principalmente a ciudadanos de India y Paquistán, posiblemente aquellos con antecedentes militares o políticos.
- Distribuyó el backdoor para Android “CapraRAT” a través de aplicaciones troyanizadas de mensajería y llamadas seguras bajo el nombre de MeetsApp y MeetUp. El backdoor puede exfiltrar cualquier información confidencial de los dispositivos de sus víctimas.
- Estas aplicaciones troyanizadas estaban disponibles para su descarga desde sitios web que se hacían pasar por centros de distribución oficiales. Desde ESET creen que se utilizó una estafa romántica para atraer a los objetivos a estos sitios web.
- La seguridad operativa deficiente en torno a estas aplicaciones expuso la información personal identificable del usuario, lo que permitió geolocalizar a 150 víctimas.
- El backdoor CapraRAT fue alojado en un dominio que se resolvió en una dirección IP utilizada anteriormente por Transparent Tribe.

“La campaña apuntando a dispositivos móviles operada por el grupo Transparent Tribe sigue activa y utiliza dos aplicaciones de mensajería troyanizadas como cubierta para distribuir su backdoor para Android CapraRAT. Ambas aplicaciones se distribuyen a través de dos sitios web similares que, según sus descripciones, brindan servicios seguros de mensajería y llamadas. Los operadores de estas aplicaciones tenían una seguridad operativa deficiente, lo que provocó que la información personal identificable de la víctima quedara expuesta a nuestros investigadores a través de Internet. Gracias a esto fue posible obtener alguna información sobre las víctimas.”, comenta Camilo Gutiérrez Amaya, Jefe del Laboratorio de Investigación de ESET Latinoamérica.

![](https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/whatsapp-p.jpg)

<table style="height: 42px;" width="569">
<tbody>
<tr>
<td style="text-align: justify;"><sub><strong>Nuestras noticias también son publicadas a través de nuestra cuenta en Twitter <a href="https://twitter.com/itnewslat?lang=es">@ITNEWSLAT</a> y en la aplicación <a href="https://squidapp.co/en/">SQUID</a></strong></sub></td>
</tr>
</tbody>
</table>
<img src="https://tracker.metricool.com/c3po.jpg?hash=56f88a41e39ab42c063cc51676587a04"/>