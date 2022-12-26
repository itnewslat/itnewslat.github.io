---
layout: posts
color-schema: red-dark
date: '2022-12-26 11:25 -0400'
published: true
superNews: false
superArticle: false
year: '2022'
title: 'Emotet: el mercado de servicios para delincuentes'
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Ciberdelincuencia-p.jpg
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/Ciberdelincuencia-g.jpg
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
week: '52'
---
- Usuarios y empresas de México y Brasil están entre los objetivos más atacados por el grupo, que roba cuentas de correo electrónico, así como tarjetas de crédito, para venderlas. 
- El grupo también sirve de puerta de entrada para ataques de ransomware contra grandes compañías.

Emotet se ha convertido en un "mercado" en el que el grupo que controla una botnet –una red de computadores infectados que permite el acceso a la información y el control remotos de un dispositivo comprometido– vende servicios maliciosos a otros ciberdelincuentes. Esta es la principal conclusión del análisis realizado por el Equipo de Investigación y Análisis de Kaspersky en América Latina. Los objetivos de este grupo son usuarios de internet, empresas y gobierno; sus integrantes roban cuentas de correo electrónico (especialmente las guardadas en navegadores), así como tarjetas de crédito, para venderlas posteriormente, e incluso proporcionan acceso a ordenadores y servidores comprometidos para que grupos de ransomware lleven a cabo sus ataques. 

Este grupo fue detectado por primera vez en 2014 realizando fraudes financieros a través de troyanos bancarios en todo el mundo. Desde entonces, han cambiado sus actividades delictivas y se han convertido en la mayor y más poderosa red de bots en funcionamiento. Se han realizado varios esfuerzos para eliminarla, el último (a principios de 2021) fue dirigido por la Europol, apoyada por diversas agencias policiales de todo el mundo. A pesar del éxito parcial, el grupo reconstruyó la infraestructura de la botnet y resurgió con más fuerza.

Las tecnologías de Kaspersky muestran que el número total de víctimas se triplicó en tan solo un mes: de 2.843 en febrero de 2022 a 9.086 en marzo de este mismo año. En cuanto al número de bloqueos, el crecimiento fue proporcional y la empresa registró 16.897 intentos de infección en febrero y 48.597 en marzo. 
Considerando solo los países latinoamericanos, México ocupa la segunda posición entre las naciones afectadas, y Brasil, la cuarta en el ranking global, con un aumento de 14.000 bloqueos a 357.000 entre febrero y marzo y de 4.000 a 52.000 en el mismo periodo, respectivamente. Otros países afectados son Colombia (35), Chile (40), Paraguay (48), Ecuador (50), Uruguay (54), Argentina (62), Perú (66) y Cuba (75).

La infección por Emotet se produce a través de campañas de correo electrónico (spam) con archivos maliciosos de Microsoft Office (macro) que se encargan de crear una puerta trasera en la máquina y realizar diversas tareas maliciosas, las principales son las siguientes:

- **Creación de perfiles de las máquinas infectadas**. Roba datos básicos de la máquina infectada para crear un perfil. Con esta información, el grupo sabrá si el dispositivo pertenece a un usuario común o a una empresa o gobierno, lo que determinará el uso y el valor comercial de cada víctima. 
- **Robo de credenciales de cuentas de correo electrónico**. Utiliza la herramienta legítima de Nirsoft para obtener la dirección de correo electrónico y la contraseña de los usuarios, y venderlas a otros delincuentes o brindarles servicios de envío de spam y phishing. 
- **Robo de credenciales guardadas en navegadores**. Para esta acción también utiliza la herramienta de Nirsoft a fin de capturar los nombres de usuario y contraseñas guardados en el navegador. Aunque estos datos están cifrados, los delincuentes son capaces de evadirlo y acceder a la información sensible. Las consecuencias dependerán del tipo de cuenta, por ejemplo: las credenciales bancarias se utilizarán para fraudes financieros, los inicios de sesión en plataformas de streaming se venderán en mercados ilegales, las credenciales de tiendas online se utilizarán en fraudes comerciales, etc.
- **Robo de tarjetas de crédito guardadas en el navegador**. Esto sólo afecta al navegador Chrome y su objetivo es vender la información a grupos de fraude financiero. 
- **Acceso por la puerta trasera de la máquina**. Este se ha convertido en el servicio más rentable del grupo y es donde el perfil de las máquinas infectadas adquiere mayor importancia, ya que estos accesos se comercian con grupos que realizan ataques de ransomware. Al comprar a un empleado el acceso con derechos de administrador a los servidores, los grupos de ransomware sólo tienen que copiar los datos y bloquear las máquinas, pues el 80% del trabajo lo ha realizado ya Emotet.

"También hay un módulo de difusión en red muy eficaz, que hace que la infección ‘salte’ de una máquina a otra que esté en la misma red. Esta característica y la longevidad con la que el malware permanece en las máquinas hacen de Emotet una de las mayores redes de bots que operan en el mundo. Otra conclusión importante de nuestro análisis es que una infección por Emotet es un aviso importante de un posible ataque de ransomware", afirma Fabio Marenghi, analista senior de Seguridad para América Latina en Kaspersky.

Para evitar la infección por Emotet, los expertos de Kaspersky recomiendan:

- **Tener cuidado al abrir archivos de Office (Excel y Word) que hayan sido enviados por correo electrónico**. Comprueba el remitente y el nombre del archivo adjunto. Muchos programas maliciosos se esconden detrás de facturas o promociones, pero el remitente nunca coincide con el señuelo del spam/phishing. En este caso, no abra nunca el archivo. 
  - En el caso de las empresas, los archivos adjuntos se pueden disfrazar de una solicitud de presupuesto o un currículum. El mismo consejo sobre revisar la información es válido, pero en algunos casos, el empleado tendrá la "obligación" de abrir la trampa. En este caso, asegúrate de que tu solución de seguridad puede bloquear programas maliciosos que utilizan PowerShell y otras herramientas legítimas. 
- Mantener todos los programas y sistemas operativos actualizados a fin de evitar que Emotet aproveche las vulnerabilidades de estos para infiltrarse en los equipos.
- No guardar contraseñas en los navegadores, ya que los delincuentes pueden acceder a esta información. Para agilizar el acceso a los servicios y páginas en línea, usa un gestor de contraseñas como Kaspersky Password Manager, ya que estas herramientas utilizan un cifrado moderno que no se puede vulnerar. 
- Proteger todos sus dispositivos domésticos o empresariales con una solución de seguridad de confianza como Kaspersky Total Security (para el hogar), Kaspersky Endpoint Security Cloud (para pequeñas empresas) o Kaspersky Endpoint Detection and Response (EDR, para medianas y grandes empresas).

![](https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Ciberdelincuencia-p.jpg)

<table style="height: 42px;" width="569">
<tbody>
<tr>
<td style="text-align: justify;"><sub><strong>Nuestras noticias también son publicadas a través de nuestra cuenta en Twitter <a href="https://twitter.com/itnewslat?lang=es">@ITNEWSLAT</a> y en la aplicación <a href="https://squidapp.co/en/">SQUID</a></strong></sub></td>
</tr>
</tbody>
</table>

<img src="https://tracker.metricool.com/c3po.jpg?hash=56f88a41e39ab42c063cc51676587a04"/>