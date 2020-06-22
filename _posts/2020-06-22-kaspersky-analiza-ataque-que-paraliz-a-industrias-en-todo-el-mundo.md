---
layout: posts
color-schema: red-dark
date: '2020-06-22 14:13 -0400'
published: true
superNews: false
superArticle: false
year: '2020'
title: Kaspersky analiza ataque que paralizó a industrias en todo el mundo
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Ataque-DDOS-p.jpg
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/Ataque-DDOS-g.jpg
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
week: '26'
---
**El nuevo informe de Kaspersky ICS CERT revela el comportamiento del ransomware Snake, responsable de ataques a varias empresas en los últimos meses**

El nuevo informe publicado por Kaspersky ICS CERT hace un análisis sin precedentes del comportamiento del ransomware Snake (o Ekans), resposanble de paralizar actividades industriales en los últimos meses, después de ataques a empresas en diferentes partes del mundo.

Según el documento, Snake, capaz de cifrar y evitar que una empresa acceda a documentos empresariales, actúa de manera específica, disfrazándose con los mismos dominios y direcciones IP de las redes invadidas para obtener acceso libre y realizar el cifrado de archivos. Esta información también indicaría que la acción de Snake representa solo el último de una serie de pasos coordinados previamente. Antes de estructurar el ransomware, por ejemplo, los ciberdelincuentes necesitan descubrir los registros de direcciones de sus objetivos y, en algunos casos, obtienen estos datos a través de servidores DNS públicos.

Todas las muestras analizadas fueron bloqueadas por las soluciones de seguridad de Kaspersky, basadas en el modelo original del ransomware Snake, identificado en diciembre de 2019.

Los principales hallazgos de Kaspersky ICS CERT sobre el ransomware Snake están a continuación:

- El malware inició usando un archivo "nmon.bat". Los productos de Kaspersky detectaron el archivo en las carpetas de script de la política de dominio;
- La única diferencia entre todas las muestras del ransomware Snake identificadas es el nombre de dominio y la dirección IP incorporada en el código;
- La dirección IP en el código del malware se compara con la dirección IP de la máquina infectada, si el malware es capaz de identificarlo.
- El malware solo cifra los datos de la máquina infectada si la dirección IP del dispositivo y la que esta presente en el código del malware son las mismas. 
- La combinación de dirección IP y nombre de dominio incorporado en el código del malware es única para cada ataque identificado. Al parecer, esto es válido para la red interna de la organización objetivo de los ataques.
- En algunos casos, los nombres de dominio pueden haberse obtenido de servidores públicos (DNS), mientras que la información sobre las direcciones IP asociadas con estos aparentemente se almacena en servidores DNS internos. Como resultado, tal información solo está disponible cuando se envían solicitudes DNS desde las redes internas invadidas.  
- Además del nombre de dominio y la dirección IP de la organización, ambos incorporados en el código de malware, las nuevas muestras de Snake son diferentes de aquellas identificadas en diciembre de 2019. Esto se debe a que tienen una lista amplia de extensiones de archivos (errores tipográficos) que el malware debería encriptar. Los ejemplos incluyen extensiones para archivos de unidades virtuales, Microsoft Access, código fuente en С / C # / ASP / JSP / PHP / JS, así como los archivos correspondientes para proyectos, soluciones y otras extensiones que no fueron compatibles con muestras anteriores.

Para identificar las señales de un ataque del ransomware Snake y prevenir posibles daños, Kaspersky ICS CERT recomienda:

- Utilice los índices de compromiso proporcionados para identificar infecciones en estaciones de trabajo y servidores de Windows (Revise aquí).
- Revise las políticas de dominio y los scripts en busca de código malicioso;
- Busque tareas activas en Windows Task Scheduler, tanto en estaciones de trabajo como en servidores, en busca de código malicioso;
- Cambie las contraseñas para todas las cuentas en el grupo de administradores de dominio.
 
<img src="https://tracker.metricool.com/c3po.jpg?hash=56f88a41e39ab42c063cc51676587a04"/>
