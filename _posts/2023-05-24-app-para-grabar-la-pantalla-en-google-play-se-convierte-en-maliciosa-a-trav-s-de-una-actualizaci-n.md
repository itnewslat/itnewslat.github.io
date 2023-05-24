---
layout: posts
color-schema: red-dark
date: '2023-05-24 05:29 -0500'
published: true
superNews: false
superArticle: false
year: '2023'
title: >-
  App para grabar la pantalla en Google Play se convierte en maliciosa a través
  de una actualización
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/Usando-Celular-g.jpg
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Usando-Celular-p.jpg
categories:
  - Colombia
tags:
  - Seguridad
week: '21'
---
El equipo de investigación de ESET identificó AhRat, un nuevo troyano de acceso remoto (RAT) para Android que permite exfiltrar archivos y grabar audio.
 
El equipo de investigación de ESET, compañía líder en detección proactiva de amenazas, descubrió una aplicación troyanizada para Android que había estado disponible en la tienda Google Play y contaba con más de 50,000 instalaciones. La aplicación, llamada iRecorder – Screen Recorder, se cargó inicialmente en la tienda sin funcionalidad maliciosa el 19 de septiembre de 2021. Sin embargo, la funcionalidad maliciosa se implementó más tarde, probablemente en la versión 1.3.8, que estuvo disponible en agosto de 2022.
 
**Puntos clave de esta publicación:**

- Como socio de Google App Defense Alliance, ESET detectó una aplicación troyanizada disponible en la tienda Google Play. Se trata de un malware basado en AhMyth al que denominaron AhRat.
- Inicialmente, la aplicación iRecorder no tenía funciones maliciosas, sino que recibió una actualización con código malicioso varios meses después de su lanzamiento.
- El comportamiento malicioso específico de la aplicación involucra la extracción de grabaciones del micrófono y el robo de archivos con extensiones específicas, lo que indica su potencial participación en una campaña de espionaje.
- La aplicación maliciosa con más de 50.000 descargas se eliminó de Google Play después del reporte de ESET y desde entonces no se ha detectado actividad de AhRat en ningún otro lugar.

 
“Es raro que un desarrollador cargue una aplicación legítima, espere casi un año y luego la actualice con un código malicioso. El código malicioso que se agregó a la versión limpia de iRecorder se basa en el código abierto del RAT (troyano de acceso remoto) para Android AhMyth y ha sido personalizado en lo que llamamos AhRat. Además de este caso puntual, no hemos detectado actividad de AhRat en ningún otro lugar. Sin embargo, no es la primera vez que detectamos malware para Android basado en AhMyth disponible en Google Play, ya que en 2019 también publicamos una investigación sobre una aplicación troyanizada basada en el código de AhMyth. En ese entonces, se trataba de un spyware que logró eludir dos veces el proceso de verificación de aplicaciones de Google enmascarándose como una aplicación de streaming de radio.”, Camilo Gutierrez Amaya, Jefe del Laboratorio de Investigación de ESET Latinoamérica.
 
Además de proporcionar una funcionalidad de grabación de pantalla legítima, según indicaron desde ESET, la app maliciosa iRecorder puede grabar el audio circundante desde el micrófono del dispositivo y cargarlo en el servidor de comando y control (C&C) del atacante. También puede exfiltrar desde el dispositivo archivos con extensiones que representan páginas web guardadas, imágenes, archivos de audio, video y documentos, y formatos de archivo utilizados para comprimir varios archivos. El comportamiento malicioso específico de la aplicación (exfiltración de grabaciones de micrófonos y robo de archivos con extensiones específicas) tiende a sugerir que es parte de una campaña de espionaje. Sin embargo, no se  pudo atribuir la aplicación a ningún grupo malicioso en particular.
 
La aplicación iRecorder se llegó a la tienda Google Play el 19 de septiembre de 2021 ofreciendo la función de grabación de pantalla, pero no contenía características maliciosas. Sin embargo, alrededor de agosto de 2022 se detectó que el desarrollador de la aplicación incluyó una funcionalidad maliciosa en la versión 1.3.8. Para marzo de 2023, la aplicación había acumulado más de 50.000 instalaciones.
 
Sin embargo, los usuarios de Android que habían instalado una versión anterior de iRecorder (anterior a la versión 1.3.8), que carecía de funciones maliciosas, sin saberlo, podrían haber expuesto sus dispositivos a AhRat si posteriormente actualizaron la aplicación de forma manual o automática, incluso sin otorgar cualquier otra aprobación de permiso de la aplicación.
 
“Después de reportar el comportamiento malicioso de iRecorder, el equipo de seguridad de Google Play eliminó la app de la tienda. Sin embargo, es importante tener en cuenta que la aplicación también puede estar disponible en mercados de Android alternativos y no oficiales. El desarrollador de iRecorder también proporciona otras aplicaciones en Google Play, pero no contienen código malicioso.”, agrega el investigador de ESET.
 
El malware de código abierto AhMyth fue empleado por Transparent Tribe, también conocido como APT36, un grupo de ciberespionaje conocido por su uso extensivo de técnicas de ingeniería social y por apuntar a organizaciones gubernamentales y militares en el sur de Asia. Sin embargo, según ESET, no se pueden atribuir las muestras de malware actuales a ningún grupo específico, y no hay indicios de que hayan sido desarrolladas por un grupo conocido de amenazas persistentes avanzadas (APT).
 
AhMyth RAT es una herramienta potente que ofrece varias funciones maliciosas, incluida la extracción de registros de llamadas, contactos y mensajes de texto, la obtención de una lista de archivos en el dispositivo, el seguimiento de la ubicación del dispositivo, el envío de mensajes SMS, la grabación de audio y la toma de fotografías. Sin embargo, en las dos versiones analizadas por ESET solo observaron un conjunto limitado de características maliciosas derivadas de la versión original de AhMyth RAT. Estas funcionalidades maliciosas parecían encajar dentro del modelo de permisos ya definido que utilizaba la aplicación, el cual otorga acceso a archivos en el dispositivo y permite la grabación de audio. Algo a destacar es que la aplicación maliciosa proporcionó la función de grabación de video, por lo que se esperaba que pidiera permiso para grabar audio y almacenarlo en el dispositivo. Tras la instalación de la aplicación maliciosa, se comportó como de costumbre, sin solicitar ningún permiso extra que pudiera revelar sus intenciones maliciosas.

Después de la instalación, AhRat comienza a comunicarse con el servidor de C&C enviando información básica del dispositivo y recibiendo claves de cifrado y un archivo de configuración cifrado. Estas claves se utilizan para cifrar y descifrar el archivo de configuración y algunos de los datos extraídos, como la lista de archivos en el dispositivo.
 
El Jefe del Laboratorio de Investigación de ESET, concluye: “La investigación de AhRat sirve como un buen ejemplo de cómo una aplicación inicialmente legítima puede transformarse en una maliciosa, incluso después de muchos meses, espiando a sus usuarios y comprometiendo su privacidad. Si bien es posible que el desarrollador detrás de esta aplicación haya tenido la intención de crear una base de usuarios antes de comprometer sus dispositivos Android mediante una actualización o que haya sido un actor malicioso el que introdujo este cambio en la aplicación; hasta ahora, no tenemos evidencia para confirmar ninguna de estas hipótesis”.
 
Las medidas preventivas contra este tipo de acciones maliciosas ya se han implementado en Android 11 y versiones superiores mediante la hibernación de aplicaciones. Esta característica coloca las aplicaciones que han estado inactivas durante varios meses en un estado de hibernación, reestableciendo sus permisos de ejecución y evitando que las aplicaciones maliciosas funcionen según lo previsto. La aplicación maliciosa se eliminó de Google Play después de que ESET la reportó, pero confirma lo importante que es contar con una protección a través de múltiples capas en los dispositivos para protegerlos contra posibles filtraciones, como las que ofrece ESET Mobile Security.

![](https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Usando-Celular-p.jpg)

<table style="height: 42px;" width="569">
<tbody>
<tr>
<td style="text-align: justify;"><sub><strong>Nuestras noticias también son publicadas a través de nuestra cuenta en Twitter <a href="https://twitter.com/itnewslat?lang=es">@ITNEWSLAT</a> y en la aplicación <a href="https://squidapp.co/en/">SQUID</a></strong></sub></td>
</tr>
</tbody>
</table>
<img src="https://tracker.metricool.com/c3po.jpg?hash=56f88a41e39ab42c063cc51676587a04"/>