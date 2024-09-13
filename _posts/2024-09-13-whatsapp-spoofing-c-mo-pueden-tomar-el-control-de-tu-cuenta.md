---
layout: posts
color-schema: red-dark
date: '2024-09-13 11:26 -0400'
published: true
superNews: false
superArticle: false
year: '2024'
title: 'WhatsApp spoofing: ¿cómo pueden tomar el control de tu cuenta?'
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/whatsapp-p.jpg
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/whatsapp-g.jpg
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
week: '37'
---
**ESET analiza cómo los ciberdelincuentes pueden tomar el control de una cuenta de WhatsApp mediante el uso de técnicas de spoofing y qué tener en cuenta para no ser víctima.**

El spoofing es una técnica en la que un atacante falsifica la identidad de un usuario a fin de hacerse pasar por él con fines maliciosos. ESET, compañía líder en detección proactiva de amenazas, advierte que en el WhatsApp spoofing el ciberdelincuente toma el control de una cuenta y envía mensajes en nombre de la víctima. Para esto, el atacante se vale de distintos medios, como pueden ser la clonación de la tarjeta SIM o eSIMs, o el QRLJacking, entre otros.
 
El QRLJacking (Quick Response Code Login Jacking) es un vector de ataque de ingeniería social simple que puede afectar a todas las aplicaciones que dependan de la función “Iniciar sesión con código QR”. La víctima escanea, engañada, el código QR que le envía el cibercriminal, y, sin darse cuenta, entrega el control de su cuenta y habilita al atacante a poder desviar las comunicaciones a su propio servidor, desde el cual podrá enviar mensajes e intervenir conversaciones.
 
“Este tipo de ataques puede pasar desapercibido por la víctima, ya que podrá seguir logueándose y abriendo a su sesión de WhatsApp web o desktop. Esto marca una diferencia respecto a otros casos en los que la cuenta de WhatsApp queda inaccesible para la víctima, como por ejemplo el secuestro de WhatsApp pleno.”, comenta Fabiana Ramírez Cuenca, Investigadora de Seguridad Informática de ESET Latinoamérica.
 
La autenticación de WhatsApp desktop o WhatsApp web a través de QR se realiza mediante un websocket (que abre una sesión de comunicación interactiva entre el navegador del usuario y el servidor de WhatsApp). Cada cierto lapso de tiempo el servidor se comunica con el WebSocket solicitando una actualización del código QR del WhatsApp web o desktop. Al escanear el QR, y para la autenticación, se remite información del usuario al servidor, lo que permitirá identificarlo como titular de la cuenta. Esta comunicación en tráfico se encuentra cifrada de extremo a extremo.
 
ESET comparte un ejemplo simulado de intervención de una cuenta de WhatsApp mediante el QRLjacking, una técnica en la que el atacante genera un QR de inicio de sesión falso con el que tomará el control de una cuenta. De esta forma, podrá enviar mensajes en nombre del titular y leer sus mensajes sin que el titular pueda advertirlo.
 
Para esta demostración desde ESET se utilizó una herramienta OpenSource. Se genera un QR para luego mediante técnicas de ingeniería social enviárselo a la víctima, e inducirla a que lo escanee desde dispositivo.
 
Una vez escaneado el QR, el ciberdelincuente simulado aquí, obtiene acceso al WhatsApp y se puede loguear a la cuenta de la víctima.
 
A partir de ese momento, el intruso puede espiar las conversaciones, ver su contenido y remitentes, y puede comenzar a enviar mensajes desde el número de la víctima, suplantando su identidad.
 
Desde el laboratorio de investigación de ESET se comparten algunos consejos para evitar ser víctima de este tipo de ataques:

- Verificar la fuente del código QR: Nunca escanear un código QR de WhatsApp desde fuentes no confiables. Si se recibe un QR por mensaje, correo o sitio web sospechoso, es mejor ignorarlo. Los códigos QR de sesión deben ser escaneados únicamente desde el sitio oficial de WhatsApp Web o la aplicación de WhatsApp.
- Habilitar la verificación en dos pasos (2FA): Así, incluso si alguien obtiene acceso a la sesión mediante un ataque de QRLJacking, necesitaría un código PIN adicional para iniciar sesión en otros dispositivos.
- Revisar sesiones activas regularmente: En WhatsApp, se puede revisar y cerrar las sesiones activas en otros dispositivos desde la configuración. Si se identifica alguna actividad sospechosa, cerrar la sesión de inmediato.
 
Para conocer más sobre seguridad informática visite el portal de noticias de ESET: https://www.welivesecurity.com/es/seguridad-moviles/whatsapp-spoofing-pueden-intervenir-cuenta-suplantar-identidad/
 
Por otro lado, ESET invita a conocer Conexión Segura, su podcast para saber qué está ocurriendo en el mundo de la seguridad informática. Para escucharlo ingrese a: https://open.spotify.com/show/0Q32tisjNy7eCYwUNHphcw

![](https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/whatsapp-p.jpg)

<table style="height: 42px;" width="569">
<tbody>
<tr>
<td style="text-align: justify;"><sub><strong>Nuestras noticias también son publicadas a través de nuestra cuenta en Twitter <a href="https://twitter.com/itnewslat?lang=es">@ITNEWSLAT</a> y en la aplicación <a href="https://squidapp.co/en/">SQUID</a></strong></sub></td>
</tr>
</tbody>
</table>

<img src="https://tracker.metricool.com/c3po.jpg?hash=56f88a41e39ab42c063cc51676587a04"/>