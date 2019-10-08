---
layout: posts
color-schema: red-dark
date: '2019-10-08 14:09 -0400'
published: true
superNews: false
superArticle: false
year: '2019'
title: Barómetro ESET NOD32 mensual de seguridad
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Ataque-usuario-p.jpg
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/Ataque-usuario-g.jpg
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
week: '41'
---
- Los ciberataques HawkEye y Emotet dirigidos a usuarios españoles centran el foco de la industria en septiembre
- El robo de la cuenta de Twitter de Albert Rivera pone en evidencia la importancia del doble factor de autenticación 
- El espionaje a delegaciones diplomáticas protagonizado por Stealth Falcon y Sednit, protagonistas también en el ámbito internacional

El mes de septiembre supone la vuelta a la rutina tras el parón veraniego para muchos de nosotros y, aunque los delincuentes no se toman vacaciones, el laboratorio de ESET, el mayor fabricante de software de seguridad de la Unión Europea, sí que ha observado en las últimas semanas la reactivación de diversas campañas de malware que llevaban algunos meses detenidas. 

Aunque muchas de las campañas de propagación de malware suelen estar diseñadas por los cibercriminales para afectar al mayor número de usuarios posible, independientemente de dónde procedan, cada cierto tiempo observamos algunas de ellas que o bien están dirigidas a usuarios concretos o bien apuntan directamente a España como foco de su ataque. Así ha sucedido durante septiembre, mes en el que el laboratorio de ESET ha analizado un par de casos con especial relevancia entre los usuarios españoles. El primero de ellos lo conocíamos nada más empezar el mes: una campaña realizada desde mediados de agosto y que tenía a víctimas españolas y portuguesas como protagonistas en su gran mayoría; el segundo consistía en un troyano bancario denominado Emotet.

Tras analizar las muestras del malware que afectó a víctimas españolas y portuguesas mayoritariamente a principios de mes, se demostró que, aunque pertenecía a familias de malware diferentes, todas ellas estaban escritas en .Net y tenían su código ofuscado para intentar evitar que fueran analizadas. Las soluciones de seguridad de ESET detectaron estas amenazas como MSIL/GenKryptik y su detección se incrementó notablemente desde finales de agosto. En esta campaña se propagaban variantes del keylogger HawkEye, que capturaba todas las pulsaciones del teclado, y de la herramienta de control remoto Quasar, lo que lleva a pensar que el principal objetivo de los delincuentes era la recopilación de información privada, como por ejemplo tarjetas de crédito, códigos de acceso y contraseñas de sus víctimas. Su vector de propagación eran los clásicos mensajes de correo con ficheros adjuntos haciéndose pasar por documentos que en realidad eran programas ejecutables infectados.

Una técnica similar es la que usó también el conocido troyano bancario Emotet en su reaparición, tras unos meses de descanso, a mediados de septiembre. Mediante un envío masivo de correos electrónicos que simulaban ser remitentes de confianza, los delincuentes lanzaron una importante campaña que tuvo a los usuarios españoles como uno de sus principales objetivos. Estos correos contenían un fichero adjunto en formato de Microsoft Word que, de abrirlo y permitir la ejecución de contenido, iniciaba una serie de fases que terminaba con la instalación de este troyano en el sistema. La elevada cantidad de correos recibidos durante esos días y la detección de un elevado número de muestras en nuestro país nos hacen pensar que los delincuentes detrás de Emotet prepararon una campaña específicamente dirigida a usuarios españoles.

Además de estas campañas de propagación de malware, también se produjeron otros incidentes de seguridad importantes en nuestro país, como el caso del hackeo de la cuenta de Twitter del líder del partido político Ciudadanos, Albert Rivera. Tras analizar el caso, todo apunta a que los atacantes aprovecharon la funcionalidad de doble factor para solicitar un código de recuperación de la cuenta, código que le fue enviado al dispositivo de Albert Rivera y posteriormente reenviado a los delincuentes tras seguir las instrucciones de un mensaje especialmente preparado y enviado por los atacantes para tal efecto.

**Descubiertos nuevos casos de espionaje**

Si bien la finalidad principal de las amenazas informáticas sigue siendo, en última instancia, conseguir un beneficio económico, aquellas diseñadas para espiar y robar información confidencial de objetivos valiosos también están presentes en el panorama actual. Un buen ejemplo de ello lo tenemos en dos investigaciones reveladas por ESET durante el pasado mes.

En la primera de ellas se analiza el backdoor Win32/StealthFalcon, en funcionamiento desde 2015 y que permite al atacante controlar remotamente el sistema infectado. Entre los objetivos detectados por investigadores de ESET se encuentran equipos en los Emiratos Árabes, Arabia Saudita, Tailandia y los Países Bajos (aunque en este último caso, el objetivo era una misión diplomática de un país de Oriente Medio). 

Stealth Falcon es un grupo de amenazas activo desde 2012 y conocido por realizar ataques dirigidos a activistas políticos y periodistas en Oriente Medio. Este grupo es vigilado desde hace años por Citizen Lab, una organización sin fines de lucro centrada en seguridad y derechos humanos que en 2016 publicó un análisis sobre un ciberataque en particular de este grupo. A su vez, en enero de 2019, Reuters realizó un reportaje de investigación sobre Project Raven, una iniciativa que, según afirma el medio, emplea a exagentes de la NSA para llevar adelante ataques de ciberespionaje dirigidos a los mismos objetivos que Stealth Falcon. Sobre la base de estos dos informes, que se refieren a los mismos objetivos y ataques, el especialista en tecnología sénior de Amnistía Internacional, Claudio Guarnieri, concluyó que Stealth Falcon y Project Raven son en realidad el mismo grupo.

Otro grupo especialmente activo en los últimos años, como es Sednit (conocido también como APT28, FancyBear, Sofacy o STRONIUM) y que se encuentra activo desde, al menos, 2004, también ha sido protagonista durante el mes de septiembre debido al descubrimiento de nuevos componentes desarrollados para la familia de malware Zebrocy. A finales de agosto, este grupo lanzó una nueva campaña dirigida a sus víctimas habituales, entre las que se encuentran embajadas y Ministerios de Asuntos Exteriores de los países de Europa Oriental y Asia Central. 

Esta campaña arrancó con un correo electrónico de phishing que contenía un archivo adjunto malicioso, el cual da inicio a una larga cadena de downloaders utilizados finalmente para descargar e instalar un backdoor que permite el acceso remoto a los ordenadores de las víctimas. Una muestra de este ataque fue subida a VirusTotal el día 22 agosto, dos días después del envío del correo. Investigadores de ESET han aportado información adicional a esta nueva variante del malware, confirmando que Sednit ha añadido un nuevo lenguaje de desarrollo (Nim) a su conjunto de herramientas, concretamente a la que realiza el trabajo de downloader o descargador. De la misma manera, se ha comprobado cómo sus desarrolladores también han estado ocupados mejorando su downloader en el lenguaje de programación Golang, así como reescribiendo en este mismo lenguaje su backdoor desarrollado anteriormente en Delphi, lo que demuestra que las operaciones de este grupo siguen muy activas.