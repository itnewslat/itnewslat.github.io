---
layout: posts
color-schema: red-dark
date: '2023-02-09 06:27 -0500'
published: true
superNews: false
superArticle: false
year: '2023'
title: Los 3 errores de seguridad más habituales en APIs
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/seguridad-mobil-g.jpg
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/seguridad-mobil-p.jpg
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
week: '06'
---
- Durante 2022 las APIs han sido el vector de ataque más frecuente. Exponer una API supone una puerta de acceso a los datos del usuario y en el caso de las empresas da entrada a la propia organización.

Como cada 7 de febrero se celebra el Día mundial de Internet Segura o Safer Internet Day #SID2023, este año bajo el lema “Juntos por una Internet mejor” y desde el equipo de la tecnológica Paradigma Digital han querido recordar la importancia de la seguridad de tus APIs.

Exponer una API supone ofrecer una puerta de acceso a los datos y a la propia organización. Según datos de Gartner las APIs han sido el vector de ataque más frecuente en 2022 . Desde autenticaciones comprometidas hasta simples errores de configuración, existen numerosos problemas de seguridad, pero desde Paradigma Digital han querido analizar los tres errores más habituales y cómo evitar estas posibles vulnerabilidades.

El primero de ellos es el control de acceso el cual implica problemas tanto en el proceso de autenticación como de autorización. En el caso de la autenticación supone que los atacantes pueden comprometer usuarios y contraseñas para asumir otra identidad y en el caso de la autorización pueden explotar funcionalidades para las que no están autorizados, por ejemplo, ver datos de otros usuarios, modificar permisos o tener acceso a funciones de administración.

¿Qué podemos hacer para evitarlo? “A nivel de autenticación lo ideal es utilizar mecanismos estándar de autenticación y generación de tokens, minimizar el tiempo de validez de los tokens, testear de manera periódica y automatizada todas las posibles formas de autenticación, en especial el proceso de reseteo de contraseña e implementar políticas de bloqueo severas y de contraseña seguras” explica Noelia Martín Hernández, Consultora API en Paradigma Digital.

Frente a los ataques a nivel de autorización, una buena solución es limitar el acceso a los usuarios según su rol para garantizar que solo las personas con los permisos adecuados pueden acceder y modificar los recursos de la API. Otro mecanismo que ayuda a mitigar este tipo de riesgos es verificar el acceso a nivel de objeto, un ejemplo básico sería que un usuario puede consultar sus cuentas bancarias, pero no las de otro cliente. Para hacer esa comprobación es necesario poner foco en la validación de los identificadores de los recursos API y no confiar en los que vienen en las peticiones, así como los controles de acceso a datos. 

El segundo de los problemas típicos es la ausencia de restricciones en el número de peticiones y tamaño de los mensajes. Los atacantes pueden aprovechar esta circunstancia de diferentes formas: usar la fuerza bruta para adivinar credenciales de usuarios, realizar ataques de denegación de servicio y sobrecargar la API para que deje de estar disponible, incluso si un recurso expone una API con paginación, solicitar una página de tamaño excesivo que supera su capacidad. Para minimizar estos problemas lo ideal es definir un rate-limit a nivel de API, métodos y cliente origen de las peticiones, así como limitar el tamaño de los mensajes que retorna la API.

Y por último los ataques a nivel de datos, esto se produce porque las APIs no protegen adecuadamente datos sensibles como información personal, financiera o sanitaria. En este caso los atacantes pueden robar o modificar esos datos protegidos de forma inadecuada para llevar a cabo fraudes, robos de identidad u otros delitos. Para prevenir esta vulnerabilidad es necesario validar de forma estricta los datos tanto de petición como de respuesta, es decir, si se admite un campo que es un teléfono, rechazar todas las peticiones que no cumplan ese patrón. Para hacer de forma efectiva esta validación lo ideal es definir esquemas y patrones de la información que se admite y, por último, realizar un análisis riguroso de los datos que se envían en la respuesta para justificar su uso.

En conclusión, la seguridad a nivel de API se ha convertido en un challenge que se necesita abordar desde el momento en el que se comienza su diseño. Realizar este proceso de securización de una manera efectiva implica tener una visión holística de todas sus posibles vulnerabilidades y apoyarse en herramientas que faciliten su testeo de forma automatizada.

![](https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/seguridad-mobil-p.jpg)

<table style="height: 42px;" width="569">
<tbody>
<tr>
<td style="text-align: justify;"><sub><strong>Nuestras noticias también son publicadas a través de nuestra cuenta en Twitter <a href="https://twitter.com/itnewslat?lang=es">@ITNEWSLAT</a> y en la aplicación <a href="https://squidapp.co/en/">SQUID</a></strong></sub></td>
</tr>
</tbody>
</table>

<img src="https://tracker.metricool.com/c3po.jpg?hash=56f88a41e39ab42c063cc51676587a04"/>