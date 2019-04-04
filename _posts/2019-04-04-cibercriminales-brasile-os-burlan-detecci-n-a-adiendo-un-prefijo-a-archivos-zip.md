---
layout: posts
color-schema: red-dark
date: '2019-04-04 11:38 -0400'
published: true
superNews: false
superArticle: false
year: '2019'
title: >-
  Cibercriminales brasileños burlan detección añadiendo un prefijo a archivos
  ZIP
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Ataque-Soldados-p.jpg
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/Ataque-Soldados-g.jpg
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
week: '14'
---

**Es la primera vez que esta táctica se utiliza en la región y su propósito es propagar malware bancario**

No es novedad que cibercriminales brasileños intenten diferentes formas para engañar a los usuarios, pero no siempre lo hacen a través de nuevas técnicas. En esta oportunidad, recurrieron a una táctica de hace algunos años.

Kaspersky Lab acaba de identificar una campaña de malware bancario utilizando el método BOM para burlar los escáneres de correo electrónico e infectar a las víctimas. Es la primera vez que esta técnica se utiliza en la región, y está dirigida especialmente a usuarios en Brasil y Chile. Los usuarios de los productos de Kaspersky Lab están protegidos de este ataque.

Primero utilizada por criminales rusos para distribuir malware en sistemas Windows, esta técnica fue descubierta en 2013 y consiste en añadir el prefijo BOM (Byte Order Mark) para evitar la detección de algunos tipos de archivo. La campaña depende casi enteramente de ataques estilo spear-phishing para aumentar el número de víctimas. El desafío es burlar a los analizadores de correo electrónico y usar un archivo aparentemente corrupto, pero infectado, para llegar a la bandeja de entrada de la víctima.

El primer indicador aparece cuando el usuario intenta abrir el archivo ZIP con el explorador predeterminado de archivos y obtiene el siguiente error:

![](https://media.kasperskycontenthub.com/wp-content/uploads/sites/63/2019/03/28035938/return-of-bom-1.png)
 
Al intentar abrir el archivo comprimido utilizando el visor predeterminado del Explorador de Windows, el usuario verá un mensaje de error que indica que está dañado. Al analizarlo, los expertos de Kaspersky Lab percibieron que el encabezado ZIP contiene tres bytes adicionales (0xEFBBBF), que representan el BOM, antes de la firma "PK" (0x504B), el estándar del ZIP. El BOM usualmente se encuentra en archivos de texto con codificación UTF-8. El punto es que algunas herramientas no reconocen este archivo como un ZIP, sino que lo identificarán como un archivo de texto y no podrán abrirlo.

Algunas utilidades como WinRAR y 7-Zip simplemente ignoran el prefijo y extraen su contenido correctamente. Una vez que el usuario extrae el archivo con cualquiera de estas utilidades, este se ejecuta e infecta el sistema.

![](https://media.kasperskycontenthub.com/wp-content/uploads/sites/63/2019/03/28035922/return-of-bom-3.png) 
_Malware extraído con éxito a través de WinRAR_

Después de ejecutar una secuencia de procesos que buscan evitar la detección de las acciones maliciosas, se descarga el malware principal: variantes de un malware bancario con funciones de RAT que queda latente en el equipo de la víctima hasta cuando el usuario intente acceder a su banca por Internet. En ese momento, comenzará a capturar tokens, código de acceso, fecha de cumpleaños, contraseña de acceso, entre otras formas de autenticación bancaria.

"Identificamos una campaña maliciosa que utiliza el método BOM contra usuarios de banca brasileños y chilenos. Es común que los cibercriminales intenten distintas formas de atacar a sus objetivos, mientras pasan inadvertidos, pero en este caso recurrieron a un método que data de hace años. Únicamente aquellos usuarios que cuentan con una solución de seguridad robusta están a salvo”, afirma Santiago Pontiroli, analista de seguridad de Kaspersky Lab.

Todas las soluciones de Kaspersky Lab son capaces de extraer y analizar archivos comprimidos que contienen Byte Order Mark, además de identificar y bloquear los programas maliciosos usados en esta modalidad de ataque.
Para más información, consulte Securelist.lat.