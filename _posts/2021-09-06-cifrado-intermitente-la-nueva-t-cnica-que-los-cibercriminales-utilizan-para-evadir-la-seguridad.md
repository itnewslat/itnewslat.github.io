---
layout: posts
color-schema: red-dark
date: '2021-09-06 08:16 -0400'
published: true
superNews: false
superArticle: false
year: '2021'
title: >-
  Cifrado intermitente: la nueva técnica que los cibercriminales utilizan para
  evadir la seguridad
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Seguridad-teclado-p.jpg
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/Seguridad-teclado-g.jpg
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
<p style="text-align: justify;">Sophos, líder mundial en ciberseguridad de última generación, reveló <a href="https://news.sophos.com/en-us/2021/08/27/lockfile-ransomwares-box-of-tricks-intermittent-encryption-and-evasion/">en una reciente investigación</a> la forma en que los operadores detrás del <em>ransomware</em> LockFile cifran los archivos vulnerados en paquetes de 16 bytes, para evadir la detección de amenazas.</p>
<p style="text-align: justify;">Los investigadores de Sophos llamaron a este novedoso enfoque<strong> "cifrado intermitente"</strong>, ya que ayuda al<em> ransomware</em> a evitar que se activen las señales de alerta en los equipos de ciberseguridad, debido a que los archivos cifrados se ven estadísticamente muy similares a su original. Esta es la primera vez que los investigadores de Sophos han visto este enfoque utilizado en <em>ransomware.</em></p>
<p style="text-align: justify;">"<em>Los operadores de ransomware utilizan generalmente el cifrado parcial para acelerar el proceso de cifrado y hemos visto que BlackMatter, DarkSide y LockBit 2.0 implementan esta técnica", </em>dijo Mark Loman, director de ingeniería de Sophos.<em> "Lo que distingue a LockFile es que, a diferencia de los demás, no cifra los primeros bloques. En cambio, cifra los 16 bytes restantes de un documento. Esto significa que un archivo, como un documento de texto, permanece parcialmente legible y se parece estadísticamente al original. Este truco puede tener éxito contra el software de detección de ransomware que se basa en inspeccionar el contenido mediante análisis estadístico para detectar el cifrado</em>”, explica.</p>
<p style="text-align: justify;">El especialista señala que los operadores detrás de LockFile se han mostrado muy ansiosos por utilizar este enfoque para aprovechar las vulnerabilidades recientemente dadas a conocer, como los errores <a href="https://news.sophos.com/en-us/2021/08/23/proxyshell-vulnerabilities-in-microsoft-exchange-what-to-do/">ProxyShell.</a> El mensaje desde Sophos para los defensores es que el panorama de las amenazas cibernéticas nunca se detiene y los adversarios aprovecharán rápidamente todas las oportunidades o herramientas posibles para lanzar un ataque.</p>
<p style="text-align: justify;">Otro hallazgo clave de Sophos es que el ransomware LockFile utiliza un proceso relativamente poco común conocido como "entrada/salida (E/S) mapeada en memoria". Esta técnica permite que el <em>ransomware</em> cifre de forma invisible los documentos y los almacena en caché de la memoria de la computadora, sin crear tráfico detectable para las soluciones de ciberseguridad. Esta técnica también ha sido utilizada por WastedLocker y Maze.</p>
<p style="text-align: justify;">A diferencia de otras amenazas dirigidas por humanos, LockFile no necesita conectarse a un centro de comando y control para comunicarse. Esto le ayuda a mantener la actividad de ataque bajo el radar de detección durante el mayor tiempo posible. Una vez que ha cifrado todos los documentos en la máquina, se borra. Esto significa que, después del ataque, no hay un código binario de <em>ransomware</em> que el software de protección de <em>endpoints</em> pueda encontrar o limpiar. Adicionalmente, LockFile evita encriptar cerca de 800 archivos diferentes por extensión, lo que vuelve más confuso el trabajo para los equipos de ciberseguridad.</p>
<p style="text-align: justify;"><strong>¿Qué hacer ante LockFile?</strong></p>
<p style="text-align: justify;">Sophos recomienda, primero, implementar la protección en capas. Dado que más ataques de <em>ransomware</em> también implican extorsión, se debe utilizar la protección en capas para bloquear a los atacantes en tantos puntos como sea posible. También se recomienda combinar el trabajo de expertos humanos y tecnología anti-<em>ransomware</em> ya que la tecnología proporciona la escala y la automatización que necesita una estrategia de defensa, mientras que los expertos humanos son los más capaces de detectar las tácticas, técnicas y procedimientos reveladores que indican que un atacante está intentando ingresar al entorno.</p>
<p style="text-align: justify;">Las empresas deben asegurarse de que las herramientas, los procesos y el personal adecuados estén disponibles para supervisar, investigar y responder a las amenazas observadas en el entorno. Los atacantes de ransomware a menudo programan su ataque durante las horas de menor actividad, los fines de semana o durante las vacaciones, asumiendo que poco o ningún personal está mirando.</p>
<p style="text-align: justify;">Se deben establecer contraseñas seguras que sirven como una de las primeras líneas de defensa. También se debe utilizar la autenticación multifactor (MFA), ya que incluso las contraseñas seguras pueden verse comprometidas. Cualquier forma de autenticación multifactor es mejor para asegurar el acceso a recursos críticos como correo electrónico, herramientas de administración remota y activos de red.</p>
<p style="text-align: justify;">Las compañías deben realizar constantes escaneos de su red desde el exterior e identificar los puertos comúnmente utilizados, como las herramientas de acceso remoto. Si una máquina necesita volverse accesible mediante una herramienta de administración remota, esa herramienta debe ser colocada detrás de una VPN o una otra solución segura. También es fundamental que se generen copias de seguridad sin conexión de información y mantenerlas actualizadas.</p>
<p style="text-align: justify;">Hacer un inventario de los activos y cuentas es importante ya que los dispositivos sin parches en la red aumentan el riesgo y crean una situación en la que las actividades maliciosas podrían pasar desapercibidas. Es vital tener un inventario actualizado de todas las computadoras y dispositivos IOT conectados. Utilizar exploraciones de red y comprobaciones físicas para localizarlos y catalogarlos se vuelve crucial. Finalmente se debe mantener todo con los parches actualizados y verificar dos veces que esas protecciones se hayan instalado correctamente.</p>

![](https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Seguridad-teclado-p.jpg)

<table style="height: 42px;" width="569">
<tbody>
<tr>
<td style="text-align: justify;"><sub><strong>Nuestras noticias también son publicadas a través de nuestra cuenta en Twitter <a href="https://twitter.com/itnewslat?lang=es">@ITNEWSLAT</a> y en la aplicación <a href="https://squidapp.co/en/">SQUID</a></strong></sub></td>
</tr>
</tbody>
</table>
