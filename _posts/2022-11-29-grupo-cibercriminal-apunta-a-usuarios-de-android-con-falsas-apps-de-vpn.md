---
layout: posts
color-schema: red-dark
date: '2022-11-29 05:21 -0500'
published: true
superNews: false
superArticle: false
year: '2022'
title: Grupo cibercriminal apunta a usuarios de Android con falsas apps de VPN
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/laptop-con-codigo-g.jpg
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/laptop-con-codigo-p.jpg
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
week: '48'
---
ESET, compañía líder en detección proactiva de amenazas, alerta que las aplicaciones maliciosas roban contactos, mensajes SMS, graban llamadas telefónicas e incluso mensajes de chat de aplicaciones como Signal, Viber y Telegram.

El equipo de investigación de ESET, compañía líder en detección proactiva de amenazas, identificó una campaña en curso dirigida a los usuarios de Android y que lleva adelante el grupo de APT Bahamut.

Esta campaña ha estado activa desde enero de 2022 distribuyendo aplicaciones maliciosas a través de un sitio web falso de SecureVPN que ofrece descargas apps de Android. Aunque el malware empleado a lo largo de esta campaña utiliza el nombre SecureVPN, no tiene asociación alguna con el servicio y el software multiplataforma legítimo SecureVPN.

**Hallazgos clave de ESET:**

- El objetivo principal de las modificaciones realizadas a la aplicación es extraer datos confidenciales de la víctima y espiar activamente las aplicaciones de mensajería que utiliza.
- Se cree que los objetivos apuntados por los actores maliciosos son elegidos cuidadosamente, ya que una vez que se inicia el spyware Bahamut, solicita una clave de activación antes de que se pueda habilitar la funcionalidad de VPN y spyware. Es probable que tanto la clave de activación como el enlace del sitio web se envíen a usuarios específicos.
- Se desconoce el vector de distribución inicial (correo electrónico, redes sociales, aplicaciones de mensajería, SMS, etc.).
- La aplicación utilizada son versiones troyanizadas de dos apps de VPN legítimas, SoftVPN u OpenVPN, que se volvieron a empaquetar con el código del spyware Bahamut, el cual fue utilizado en el pasado por el grupo Bahamut.
- ESET identificó al menos ocho versiones de estas aplicaciones parcheadas maliciosamente con cambios de código y actualizaciones disponibles a través del sitio web de distribución, lo que podría significar que la campaña recibe mantenimiento.

El equipo de investigación de ESET descubrió al menos ocho versiones del spyware Bahamut. El malware se distribuye a través de un sitio web falso de SecureVPN bajo la forma de versiones troyanizadas de dos aplicaciones legítimas: SoftVPN y OpenVPN. Estas aplicaciones maliciosas nunca estuvieron disponibles para descargar desde Google Play.
 
El malware tiene la capacidad de exfiltrar datos confidenciales del equipo de la víctima, como la lista de contactos, mensajes SMS, registros de llamadas, ubicación del dispositivo y llamadas telefónicas grabadas. También es capaz de espiar activamente los mensajes de chat intercambiados a través de aplicaciones de mensajería muy populares, como Signal, Viber, WhatsApp, Telegram y Facebook Messenger. La exfiltración de datos se realiza a través de la funcionalidad de keylogging del malware, que hace un uso malintencionado de los servicios de accesibilidad.
 
El grupo de APT Bahamut generalmente apunta a entidades e individuos ubicados en Medio Oriente y en el sur de Asia a utilizando como vector de ataque mensajes de phishing y aplicaciones falsas. Bahamut se especializa en ciberespionaje, y el equipo de ESET cree que su objetivo es robar información sensible de sus víctimas. Bahamut también se conoce como un grupo de mercenarios que ofrece servicios de piratería a sueldo a una amplia gama de clientes.

La aplicación maliciosa para Android que fue utilizada en esta campaña se distribuyó a través del sitio web thesecurevpn[.]com, que utiliza el nombre, pero no el contenido ni el estilo del servicio SecureVPN legítimo (en el dominio securevpn.com).
 
Este falso sitio web que se hace pasar por SecureVPN se creó en base a una plantilla web gratuita, que probablemente fue utilizada por el actor de amenazas como inspiración, ya que solo requirió pequeños cambios y parece confiable.
 
Thesecurevpn[.]com se registró el 27 de enero de 2022; sin embargo, se desconoce el momento de la distribución inicial de la falsa versión de la aplicación de SecureVPN. La aplicación maliciosa se proporciona directamente desde el sitio web y no ha estado disponible en la tienda Google Play.
 
“La campaña dirigida a dispositivos móviles operada por el grupo de APT Bahamut sigue en curso y utiliza el mismo método para distribuir sus aplicaciones de spyware para Android: a través de sitios web que se hacen pasar por servicios legítimos, como se ha visto en el pasado. Además, el código del spyware y, por lo tanto, su funcionalidad, es la misma que en campañas anteriores, incluida la capacidad de recopilar datos para exfiltrarlos en una base de datos local antes de enviarlos al servidor de los atacantes, una táctica que rara vez se ve en las aplicaciones móviles para ciberespionaje”, comenta Camilo Gutiérrez Amaya, Jefe del Laboratorio de Investigación de ESET Latinoamérica.
 
Si el spyware Bahamut es habilitado, los operadores de Bahamut pueden controlarlo de forma remota y exfiltrar varios datos confidenciales del dispositivo, como:

- contactos,
- mensajes SMS,
- registros de llamadas,
- una lista de aplicaciones instaladas,
- ubicación del dispositivo,
- cuentas de dispositivo,
- información del dispositivo (tipo de conexión a Internet, IMEI, IP, número de serie de SIM),
- llamadas telefónicas grabadas y
- una lista de los archivos en el almacenamiento externo.

 
Al abusar del servicio de accesibilidad, el malware puede robar notas de la aplicación SafeNotes y espiar activamente los mensajes de chat e información sobre llamadas en aplicaciones de mensajería muy populares, como:

- imo-International Calls & Chat,
- Facebook Messenger,
- Viber,
- Signal Private Messenger,
- WhatsApp,
- Telegram,
- WeChat, y
- Conion.

Todos los datos extraídos se almacenan en una base de datos local y luego se envían al servidor de C&C del atacante. La funcionalidad del spyware Bahamut incluye la capacidad de actualizar la aplicación mediante un enlace con una nueva versión del servidor C&C.

“Parece que esta campaña ha mantenido un perfil bajo, ya que no vemos instancias en nuestros datos de telemetría. Esto probablemente se logra a través de una distribución altamente dirigida, donde junto con un enlace al spyware Bahamut, la potencial víctima recibe una clave de activación, que es necesaria para habilitar la capacidad de espionaje del malware.”, concluye el investigador de ESET.

![](https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/laptop-con-codigo-p.jpg)

<table style="height: 42px;" width="569">
<tbody>
<tr>
<td style="text-align: justify;"><sub><strong>Nuestras noticias también son publicadas a través de nuestra cuenta en Twitter <a href="https://twitter.com/itnewslat?lang=es">@ITNEWSLAT</a> y en la aplicación <a href="https://squidapp.co/en/">SQUID</a></strong></sub></td>
</tr>
</tbody>
</table>

<img src="https://tracker.metricool.com/c3po.jpg?hash=56f88a41e39ab42c063cc51676587a04"/>