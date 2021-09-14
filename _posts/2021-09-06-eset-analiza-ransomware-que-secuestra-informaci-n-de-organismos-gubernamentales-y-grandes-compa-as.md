---
layout: posts
color-schema: red-dark
date: '2021-09-06 08:25 -0400'
published: true
superNews: false
superArticle: false
year: '2021'
title: >-
  ESET analiza ransomware que secuestra información de organismos
  gubernamentales y grandes compañías
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Ramsonware-p.jpg
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/Ramsonware-g.jpg
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
week: '38'
---
<ul style="list-style-type: disc; text-align: justify;">
	<li><em><strong>ESET, compañía de seguridad informática, acerca las principales características del ransomware Ryuk que tiene entre sus víctimas a hospitales, entidades gubernamentales, compañías de tecnología, instituciones educativas y medios de comunicación, entre otros.</strong></em></li>
</ul>
<p style="text-align: justify;"><a href="https://Frontechcolombia.us17.list-manage.com/track/click?u=4415c9694c185bf5744c10ade&amp;id=60234e6311&amp;e=b6db5b5e91">ESET</a>, compañía líder en detección proactiva de amenazas, comparte las principales características del <a href="https://Frontechcolombia.us17.list-manage.com/track/click?u=4415c9694c185bf5744c10ade&amp;id=9d0f6e3e50&amp;e=b6db5b5e91">ransomware</a> Ryuk, muy activo desde que comenzó la pandemia. En la mayoría de los casos este tipo de malware apunta a instituciones con gran capacidad de recursos y tiene por objetivo cifrar los archivos de una máquina víctima para dejarlos inaccesibles y luego extorsionar a la misma pidiéndole un pago, en criptomonedas, por la recuperación de estos.

Ryuk ha sido uno de los <a href="https://Frontechcolombia.us17.list-manage.com/track/click?u=4415c9694c185bf5744c10ade&amp;id=c5c4c2a10b&amp;e=b6db5b5e91">grupos de ransomware de mayor actividad desde que comenzó la pandemia</a> y se ha cobrado a una gran cantidad de víctimas, entre ellas a varias organizaciones gubernamentales y grandes empresas. Probablemente esto se deba a su estrategia de realizar ataques muy dirigidos apuntando a víctimas que cuenten con los recursos suficientes para pagar importantes sumas de dinero por la recuperación de sus archivos o que necesitan de esta información para poder operar con normalidad. Estas víctimas van desde hospitales, <a href="https://Frontechcolombia.us17.list-manage.com/track/click?u=4415c9694c185bf5744c10ade&amp;id=c9a24f3063&amp;e=b6db5b5e91">entidades gubernamentales</a>, compañías de tecnología, instituciones educativas, medios de comunicación, entre otros.

Uno de los ataques más recientes fue el que realizó sobre Servicio Público de Empleo Estatal (SEPE) en España. Por otra parte, el ataque al Universal Health Services en Estados Unidos en 2020 fue, uno de los ciberataques al sector de la salud más grande en la historia de aquel país. Según diferentes <a href="https://Frontechcolombia.us17.list-manage.com/track/click?u=4415c9694c185bf5744c10ade&amp;id=cdc60a9151&amp;e=b6db5b5e91">reportes</a>, el tiempo promedio de recuperación de una víctima desde que reporta el incidente hasta que recupera la totalidad de sus archivos es de 12 días.

Según el análisis realizado por ESET y la revisión de <a href="https://Frontechcolombia.us17.list-manage.com/track/click?u=4415c9694c185bf5744c10ade&amp;id=62bb88a02c&amp;e=b6db5b5e91">otros análisis</a> publicados en el último tiempo, el equipo de investigación concluyó que Ryuk es capaz de lograr acceder a los sistemas de una organización e infectar una máquina de diferentes maneras. Algunas de estas pueden ser:</p>

<ul style="text-align: justify;">
	<li>Utilizando correos de phishing dirigidos, también conocidos como <a href="https://Frontechcolombia.us17.list-manage.com/track/click?u=4415c9694c185bf5744c10ade&amp;id=bdfb6e3904&amp;e=b6db5b5e91">Spear Phishing</a>, que pueden incluir archivos adjuntos que descargan malware, como documentos de Office u otro tipo de archivos.</li>
	<li>Comprometiendo equipos a través del protocolo RDP expuesto a Internet.</li>
	<li>Siendo distribuido por otros códigos maliciosos, como fue el caso de la triple amenaza en la cual las víctimas se infectaban con el malware Emotet, este descarga y ejecutaba Trickbot y este último ejecutaba Ryuk en la mayor cantidad de computadores posibles.</li>
</ul>
<p style="text-align: justify;">Luego de que los operadores detrás de Ruyk logran acceso a los sistemas de la víctima, se valen de distintas herramientas para realizar tareas de reconocimiento dentro de los sistemas para finalmente desplegar el ransomware.

Una vez que se ejecuta sobre la maquina víctima crea tres copias de sí mismo en la misma carpeta donde se encuentra alojado con el atributo hidden (oculto). Estas copias se van a ejecutar con distintos argumentos, y son usadas para detectar otros equipos en la red e intentar infectarlos. Además, posee otras características maliciosas; por ejemplo:</p>

<ul style="text-align: justify;">
	<li>Detección y otorgamiento de acceso completo a todas las unidades lógicas presentes en la maquina víctima.</li>
	<li>Borra de copias de seguridad (shadow copies).</li>
	<li>Modifica el modo de arranque de la máquina victima ignorando errores.</li>
	<li>Es capaz de crear uno o dos archivos con notas de rescate:
<ul>
	<li>RyukReadme.txt</li>
	<li>RyukReadme.html</li>
</ul>
</li>
	<li>Es capaz de propagarse como un gusano entre carpetas compartidas por otros equipos que estén en la misma red, si posee permisos y privilegios para acceder a las mismas.</li>
</ul>
<p style="text-align: justify;">
<em>“Ante un ataque de ransomware, como puede ser Ryuk, desde ESET</em><a href="https://Frontechcolombia.us17.list-manage.com/track/click?u=4415c9694c185bf5744c10ade&amp;id=0f90fd6203&amp;e=b6db5b5e91"><em>no recomendamos pagar por el rescate de los archivos afectados</em></a><em>, </em><em>ya que por un lado no hay certeza de que los criminales otorguen las respectivas herramientas para recuperar nuestros archivos. Y, por otro lado, se estaría fomentando a los cibercriminales a continuar con este tipo de ataques haciendo los rentables para ellos.”, </em>comenta Camilo Gutiérrez Amaya, Jefe del Laboratorio de Investigación de ESET Latinoamérica.

Las recomendaciones de ESET para evitar o minimizar el riesgo de un ataque de ransomware son:</p>

<ul style="text-align: justify;">
	<li>Hacer backups de la información de manera periódica</li>
	<li>Mostrar las extensiones de los archivos que por defecto vienen ocultas, para evitar abrir archivos maliciosos</li>
	<li>Instalar una <a href="https://Frontechcolombia.us17.list-manage.com/track/click?u=4415c9694c185bf5744c10ade&amp;id=c4488523a3&amp;e=b6db5b5e91">solución de seguridad confiable</a> en todos los dispositivos</li>
	<li>Mantener siempre los equipos actualizados, tanto el Sistema Operativo como aplicaciones que se utilicen</li>
	<li><a href="https://Frontechcolombia.us17.list-manage.com/track/click?u=4415c9694c185bf5744c10ade&amp;id=6d260b61a0&amp;e=b6db5b5e91">Deshabilitar el RDP</a> cuando no sea necesario</li>
	<li>No abrir un email con contenido adjunto si se desconoce de la persona que lo envió</li>
	<li>Capacitar al personal de la empresa para que sea consciente de los riesgos que hay sobre internet</li>
</ul>
<p style="text-align: justify;"><a href="https://Frontechcolombia.us17.list-manage.com/track/click?u=4415c9694c185bf5744c10ade&amp;id=7d2b8cd25f&amp;e=b6db5b5e91">
ESET acerca la </a><a href="https://Frontechcolombia.us17.list-manage.com/track/click?u=4415c9694c185bf5744c10ade&amp;id=d6a473b486&amp;e=b6db5b5e91">guía de ransomware</a>; un documento que explica todo sobre este tipo de código malicioso. Además, comparte el <a href="https://Frontechcolombia.us17.list-manage.com/track/click?u=4415c9694c185bf5744c10ade&amp;id=9f61f6cde2&amp;e=b6db5b5e91"><strong>kit Anti-Ransomware</strong></a> con información sobre la amenaza y medidas de prevención.</p>

![](https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Ramsonware-p.jpg)

<table style="height: 42px;" width="569">
<tbody>
<tr>
<td style="text-align: justify;"><sub><strong>Nuestras noticias también son publicadas a través de nuestra cuenta en Twitter <a href="https://twitter.com/itnewslat?lang=es">@ITNEWSLAT</a> y en la aplicación <a href="https://squidapp.co/en/">SQUID</a></strong></sub></td>
</tr>
</tbody>
</table>
