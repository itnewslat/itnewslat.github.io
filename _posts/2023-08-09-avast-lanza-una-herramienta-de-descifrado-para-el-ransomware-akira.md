---
layout: posts
color-schema: red-dark
date: '2023-08-09 07:45 -0400'
published: true
superNews: false
superArticle: false
year: '2023'
title: Avast lanza una herramienta de descifrado para el ransomware Akira
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Ataque-Hacker-P.jpg
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/Ataque-Hacker-G.jpg
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
week: '32'
---
Los investigadores de Avast han desarrollado una herramienta de descifrado para el ransomware Akira y la han puesto a disposición del público para su descarga. El ransomware Akira apareció en marzo de 2023 y, desde entonces, el grupo ha llevado a cabo ataques exitosos contra varias organizaciones de los sectores educativo, financiero, inmobiliario, entre otros. 

El ransomware Akira viene como un binario de Windows de 64 bits, escrito para el sistema operativo Windows y está vinculado por Microsoft Linker versión 14.35. Los archivos cifrados se reconocen por la extensión .akira. En cada carpeta hay un archivo llamado akira_readme.txt, la nota de rescate. En la nota, los ciberdelincuentes aconsejan a la víctima que cumpla sus demandas o se arriesgue a perder el acceso a los archivos, o incluso a que se corrompan. 
   
La nota de rescate también menciona dos sitios web TOR. El usuario puede hacer una lista de las empresas pirateadas; y las víctimas reciben instrucciones sobre cómo realizar el pago. 
 
El daño potencial que puede causar Akira es enorme, debido al alcance del programa. Durante su ejecución, el ransomware genera una clave de cifrado simétrica utilizando CryptGenRandom(), que es el generador de números aleatorios implementado por la CryptoAPI de Windows. Y a la hora de buscar los archivos a cifrar, Akira no es especialmente exigente. Mientras que las cepas de ransomware suelen tener una lista de tipos de archivos a cifrar, Akira tiene una lista de archivos a no cifrar:

- exe  
- dll  
- lnk  
- sys  
- msi
 
Sin embargo, es importante tener en cuenta que este ransomware no está relacionado con el ransomware Akira descubierto por Karsten Hahn en 2017, y la herramienta de descifrado de Avast no se puede utilizar para descifrar archivos de esta variante más antigua. 
 
En junio de 2023, un investigador de seguridad de Rivitna publicó una muestra compilada para Linux. La versión para Linux, de 64 bits, utiliza la biblioteca Boost y funciona de forma idéntica a su homóloga para Windows. Los archivos cifrados tienen la misma extensión y el mismo esquema de cifrado. 
El equipo de Avast está desarrollando una versión para Linux de la herramienta de descifrado. Mientras tanto, la versión de Windows se puede utilizar para descifrar archivos cifrados por la versión Linux del ransomware, utilizando la capa WINE para ejecutar la herramienta de descifrado en Linux. 
A continuación se explica cómo utilizar la herramienta de descifrado de Avast para descifrar los archivos cifrados por el ransomware Akira. 

![](https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Ataque-Hacker-P.jpg)

<table style="height: 42px;" width="569">
<tbody>
<tr>
<td style="text-align: justify;"><sub><strong>Nuestras noticias también son publicadas a través de nuestra cuenta en Twitter <a href="https://twitter.com/itnewslat?lang=es">@ITNEWSLAT</a> y en la aplicación <a href="https://squidapp.co/en/">SQUID</a></strong></sub></td>
</tr>
</tbody>
</table>

<img src="https://tracker.metricool.com/c3po.jpg?hash=56f88a41e39ab42c063cc51676587a04"/>