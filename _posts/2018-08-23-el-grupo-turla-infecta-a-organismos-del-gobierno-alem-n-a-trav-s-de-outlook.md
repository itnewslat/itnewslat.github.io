---
layout: posts
color-schema: red-dark
date: '2018-08-23 12:31 -0400'
published: true
superNews: false
superArticle: false
title: El grupo Turla infecta a organismos del gobierno alemán a través de Outlook
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Grupo-Hackers-g.jpg
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/Grupo-Hackers-g.jpg
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
---
**El laboratorio de ESET descubre que también ha atacado, al menos, a los sistemas informáticos de otros dos países europeos**

El pasado mes de marzo, el diario alemán Süddeutsche Zeitung revelaba que un grupo de ciberdelincuentes había conseguido traspasar los sistemas de seguridad del Ministerio de Asuntos Exteriores del país y que había estado espiando los correos electrónicos de la institución durante prácticamente todo el año anterior. 

ESET, el mayor fabricante de software de seguridad de la Unión Europea, ha procedido a analizar cómo el grupo Turla ha estado utilizando un complemento malicioso para Outlook y para otros clientes de correo electrónico como The Bat! (muy extendido en el este de Europa) para infectar no solo al Ministerio alemán, sino también, al menos, a las oficinas de asuntos exteriores de otros dos países europeos y a un fabricante de la industria de la defensa. 

El backdoor creado por el grupo Turla se ha venido utilizando desde al menos 2009, aunque la última versión data de 2018 e incorpora la capacidad de ejecutar scripts de Powershell maliciosos directamente en la memoria de la máquina, lo que representa una táctica sobre la que han estado trabajando los ciberdelincuentes de diferentes grupos en los últimos años.

El objetivo de Turla, también conocido como Snake o Uroboros, es espiar los correos que llegan a las víctimas y robar archivos, aunque también permite al atacante controlar de forma remota las máquinas comprometidas. El malware utiliza el buzón de correo real de la víctima para comunicarse con el atacante y robar los datos a través de documentos PDF adjuntos de forma totalmente invisible (aunque no se aprovechan de ninguna vulnerabilidad ni en los lectores de PDF ni en Outlook como vectores de ataque, sino que se utiliza el MAPI legítimo de Outlook para acceder al correo).

Se trata, según se apunta desde el laboratorio de ESET, del único grupo de espionaje que utiliza herramientas de puerta trasera (introducidas como librerías del sistema maliciosas) controladas completamente desde el correo electrónico. 

**Cómo funcionó en Alemania**

Los ciberdelincuentes infectaron en un primer momento la red del Instituto de Administración Pública Federal de Alemania como paso previo a su acceso al Ministerio en marzo de 2017, pero no fue hasta finales de año cuando los servicios de seguridad del país detectaron la brecha, que se hizo pública en marzo de 2018.  

Cuando la víctima recibe o envía un mensaje desde una máquina comprometida, el malware genera un registro que contiene metadatos sobre el mensaje, entre los que se incluyen el destinatario, el remitente, el asunto o el nombre del archivo que se adjunta. Todos estos datos se convierten en un archivo PDF que llega a los atacantes y que se envía a la vez que el mensaje legítimo, por lo que no se aprecian picos de envío a horas inusuales. Además, en los mensajes que recibe la víctima se incorpora un PDF con comandos maliciosos. 

Asimismo, esta variante incluye interesantes características para garantizar su supervivencia, ya que los atacantes tienen la posibilidad de retomar el control del backdoor mediante el envío de comandos desde cualquier dirección de email, en el caso de que alguna de las direcciones de correo que incorpora por defecto sea bloqueada.
