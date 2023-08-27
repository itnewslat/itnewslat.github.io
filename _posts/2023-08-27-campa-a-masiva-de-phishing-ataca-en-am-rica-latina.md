---
layout: posts
color-schema: red-dark
date: '2023-08-27 12:11 -0400'
published: true
superNews: false
superArticle: false
year: '2023'
title: Campaña masiva de phishing ataca en América Latina
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/phishing-mail-p.jpg
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/phishing-mail-g.jpg
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
week: '34'
---
**ESET, compañía de seguridad informática, identificó una nueva campaña de phishing que afectó a empresas y entidades gubernamentales en Ecuador, México, Argentina, Chile, Perú y Brasil.**

El equipo de investigación de ESET, compañía líder en detección proactiva de amenazas, descubrió una campaña masiva de phishing activa desde al menos abril de 2023, destinada a recolectar credenciales de cuenta de usuarios de Zimbra Collaboration. La campaña se está difundiendo masivamente y sus objetivos son una variedad de pequeñas y medianas empresas, como también entidades gubernamentales.

Zimbra Collaboration es una plataforma colaborativa de software, open-core, y una alternativa muy popular para administrar correos electrónicos empresariales.

De acuerdo a la telemetría de ESET, el mayor número de afectados se localizan en Polonia, seguida por Ecuador e Italia. En Latinoamérica, además, apuntó a objetivos en México, Argentina, Chile, Perú y Brasil.
Las organizaciones atacadas varían, no se focaliza en ninguna vertical específica; la única conexión entre las víctimas es que utilizan Zimbra. A la fecha, no se ha atribuido esta campaña a ningún actor de amenazas conocido.

Inicialmente, el objetivo recibe un email con una página de phishing en un archivo HTML adjunto. El email advierte al usuario sobre una actualización del servidor de email, desactivación de la cuenta, o un asunto similar, y le ordena hacer clic en el archivo adjunto. El atacante también falsifica el campo De: del correo electrónico para que parezca procedente del administrador del servidor de email.

Luego de abrir el archivo adjunto, al usuario le aparece una página falsa de inicio de sesión a Zimbra personalizada de acuerdo a la organización de pertenencia. El archivo HTML se abre en el navegador de la víctima, que puede ser inducida a pensar que está siendo redirigida a una página legítima, a pesar de que la URL dirige a una ruta local. Se destaca que el campo “Username” se rellena automáticamente en el formulario de inicio, lo que lo hace parecer más legítimo aún.

En segundo plano, las credenciales enviadas se recopilan desde el formulario HTML y se envían mediante una petición HTTPS POST al servidor que controla el atacante. 

“Curiosamente, en varias ocasiones, desde ESET se observaron oleadas posteriores de emails de phishing enviadas desde cuentas de Zimbra que habían sido atacadas previamente, de compañías legítimas, como donotreply[redacted]@[redacted].com. Es probable que los atacantes tengan la capacidad de comprometer el administrador de cuentas de la víctima y de crear nuevos buzones de correo que usarían para enviar emails de phishing a otros objetivos. Una explicación es que el atacante se vale del reciclado de contraseñas que pueda hacer el administrador atacado – por ej. que utilice las mismas credenciales para el email y para la administración. Con la información disponible, no estamos en condiciones de confirmar esta hipótesis.”, comenta Camilo Gutiérrez Amaya, Jefe del Laboratorio de Investigación de ESET Latinoamérica.

Según ESET, a pesar de que la campaña no es sofisticada, técnicamente hablando, es capaz de difundirse y comprometer a las organizaciones que usan Zimbra Collaboration, lo que la hace atractiva para los atacantes. “El hecho de que los adjuntos HTML contengas código legítimo, y el único elemento revelador sea un elemento que conecta con un host malicioso, es lo que los atacantes aprovechan. De esta forma, es más fácil eludir las políticas antispam, en comparación a las técnicas de phishing en las que el link está directamente en el cuerpo el correo electrónico. La popularidad de Zimbra entre las organizaciones de las que se espera que tengan menor presupuesto en IT, asegura que siga siendo un objetivo atractivo para los cibercriminales.”, concluye Gutiérrez Amaya, de ESET Latinoamérica.

Para conocer más sobre seguridad informática visite el portal de noticias de ESET: 

https://www.welivesecurity.com/es/investigaciones/campana-phishing-zimbra-afecta-america-latina/
Por otro lado, ESET invita a conocer Conexión Segura, su podcast para saber qué está ocurriendo en el mundo de la seguridad informática. Para escucharlo ingrese a: https://open.spotify.com/show/0Q32tisjNy7eCYwUNHphcw

![](https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/phishing-mail-p.jpg)

<table style="height: 42px;" width="569">
<tbody>
<tr>
<td style="text-align: justify;"><sub><strong>Nuestras noticias también son publicadas a través de nuestra cuenta en Twitter <a href="https://twitter.com/itnewslat?lang=es">@ITNEWSLAT</a> y en la aplicación <a href="https://squidapp.co/en/">SQUID</a></strong></sub></td>
</tr>
</tbody>
</table>

<img src="https://tracker.metricool.com/c3po.jpg?hash=56f88a41e39ab42c063cc51676587a04"/>