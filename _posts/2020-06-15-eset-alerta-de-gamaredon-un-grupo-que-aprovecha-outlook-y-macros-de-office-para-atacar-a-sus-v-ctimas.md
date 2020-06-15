---
layout: posts
color-schema: red-dark
date: '2020-06-15 11:29 -0400'
published: true
superNews: false
superArticle: false
year: '2020'
title: >-
  ESET alerta de Gamaredon, un grupo que aprovecha Outlook y macros de Office
  para atacar a sus víctimas 
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Empleado-en-Computadora-p.jpg
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/Empleado-en-Computadora-g.jpg
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
week: '25'
---
El laboratorio de ESET, la mayor empresa de ciberseguridad de la Unión Europea, ha descubierto nuevas herramientas de ataque utilizadas por el grupo Gamaredon –un grupo activo al menos desde 2013– en sus últimas campañas. 

Una de las herramientas descubiertas va dirigida contra Microsoft Outlook y utiliza un proyecto Visual Basic para aplicaciones (VBA) personalizado. Este malware permite al atacante utilizar la cuenta de correo de la víctima para enviar correos fraudulentos dirigidos a contactos de la agenda. La otra herramienta descubierta por ESET se utiliza para inyectar macros y referencias en plantillas remotas de documentos de Office (tanto Word como Excel). El uso de macros de Outlook para distribuir malware es algo muy poco común en la actualidad. ESET detecta las diferentes variantes de malware usadas en estas campañas por Gamaredon como MSIL/Pterodo, Win32/Pterodo o Win64/Pterodo.

“En los últimos meses ha habido un incremento en la actividad de este grupo, con oleadas constantes de correos maliciosos que llegaban a los buzones de las víctimas. Los documentos adjuntos a estos mails incluyen macros maliciosas que, cuando se ejecutan, intentan descargar una gran variedad de tipos diferentes de malware”, alerta Jean-Ian Boutin, responsable de investigaciones de amenazas en ESET. 

Las últimas herramientas de Gamaredon inyectan macros o referencias a plantillas remotas en los documentos existentes en el sistema atacado, una forma muy efectiva de introducirse en la red de una organización, ya que los documentos suelen ser compartidos de forma rutinaria por diferentes compañeros de trabajo. Además, gracias a una función especial que falsifica la configuración de seguridad de las macros de Microsoft Office, el usuario afectado no sabe que está comprometiendo su dispositivo cada vez que abre los documentos. 

El grupo usa puertas traseras y el robo de archivos para identificar y recopilar documentos sensibles del sistema comprometido, y los carga luego en un servidor de mando y control. Además, estos ladrones de archivos tienen la capacidad de ejecutar código de forma arbitraria desde el servidor de mando y control. 

Una de las diferencias más importantes entre este y otros grupos APT es que los atacantes de Gamaredon no han hecho grandes esfuerzos para permanecer ocultos. A pesar de que sus herramientas cuentan con la capacidad de utilizar técnicas para pasar desapercibidos, parece que uno de los objetivos del grupo es distribuir su malware de la forma más rápida y extensa posible para extraer datos de las redes atacadas. 

“Aunque atacar una cuenta de correo y enviar mensajes maliciosos sin consentimiento de la víctima no es una técnica novedosa, creemos que es el primer caso documentado públicamente de un grupo que utiliza archivos OTM y macros de Outlook para conseguirlo”, explica Boutin. “Hemos conseguido recoger muchas muestras diferentes de scripts maliciosos, ejecutables y documentos utilizados por el grupo Gamaredon en sus diferentes campañas”. 

Para saber más sobre Gamaredon, se puede leer el blog de ESET. 
<img src="https://tracker.metricool.com/c3po.jpg?hash=56f88a41e39ab42c063cc51676587a04"/>