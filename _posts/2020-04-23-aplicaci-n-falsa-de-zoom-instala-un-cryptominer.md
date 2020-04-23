---
layout: posts
color-schema: red-dark
date: '2020-04-23 13:45 -0400'
published: true
superNews: false
superArticle: false
year: '2020'
title: Aplicación falsa de Zoom instala un cryptominer
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Sede-Zoom-p.jpg
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/Sede-Zoom-g.jpg
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
week: '17'
---
El equipo de investigación de amenazas de Sonicwall Capture Labs, ha analizado varios esquemas maliciosos en línea relacionados con el coronavirus ya que cada vez más personas se conectan en línea desde su hogar con medidas de seguridad típicamente más relajadas, situación que los cibercriminales están aprovechando.

Zoom se ha vuelto tan popular que es una de las aplicaciones de software más descargadas, sin embargo, un instalador malicioso incluido con un minero de criptomonedas (Cryptominer) ha estado circulando en línea aprovechando a los usuarios desprevenidos que desean instalar este programa de videoconferencia.  

“Recientemente este software de videoconferencia ha ganado tanta popularidad que los cibercriminales lo han visto como un vector perfecto para su actividad maliciosa. Con las medidas de protección para quedarse en casa implementadas en varios estados y ciudades del mundo en un esfuerzo por frenar la propagación del nuevo coronavirus, el uso de datos de Internet se ha disparado con más personas en línea y confinadas en sus hogares, lo que también significa una oportunidad para los cibercriminales”, señaló Carlos Gómez, Ingeniero de Ventas de SonicWall para Suramérica.

Cryptomining malware, o malware de minería de criptomonedas o simplemente cryptojacking, es un término relativamente nuevo que se refiere a programas de software y componentes de malware desarrollados para tomar los recursos de una computadora y usarlos para la minería de criptomonedas sin el permiso explícito del usuario.

Los ciberdelincuentes han recurrido cada vez más al malware de criptominería como una forma de aprovechar el poder de procesamiento de grandes cantidades de computadoras, teléfonos inteligentes y otros dispositivos electrónicos para ayudarlos a generar ingresos de la minería de criptomonedas.

Ciclo de infección de Cryptomining en Zoom:

El troyano utiliza el ícono Zoom y viene como un instalador compilado de Autoit.

<img class="alignnone" src="https://i1.wp.com/elceo.com/wp-content/uploads/2020/04/captura-de-pantalla-2020-04-22-a-las-14-12-16.png?resize=1536%2C262&ssl=1" alt="" width="600" height="102" />
 
Tras la ejecución, deja caer un instalador legítimo de Zoom y un criptominer en los siguientes directorios:

- % Temp% \ Zoominstaller.exe (instalador legítimo)
- % Appdata% \ Roaming \ Microsot \ Windows \ helper.exe (cryptominer)

Luego ejecutará el instalador legítimo de Zoom y aparecerá una ventana emergente para solicitar al usuario la instalación del programa.

<img class="alignnone" src="https://i1.wp.com/elceo.com/wp-content/uploads/2020/04/captura-de-pantalla-2020-04-22-a-las-14-25-59.png?resize=900%2C290&ssl=1" alt="" width="600" height="193" />
  
Mientras tanto, agrega helper.exe como una tarea programada de "Comprobación del sistema" y luego la ejecuta. Tras la ejecución de helper.exe, crea un directorio "Tor" dentro de la carpeta% Appdata% \ Roaming \ Microsoft \ Windows \ y suelta los componentes de un cliente Tor.

Una vez que finaliza una sesión de minería, el directorio Tor se elimina y se volverá a crear en la ejecución posterior, dejando muy poca evidencia de infección. 

“Instamos a nuestros usuarios a que solo usen sitios web oficiales y de buena reputación como su fuente de instalación de software. Siempre esté atento y cauteloso al instalar programas de software, especialmente si no está seguro de la fuente”, señaló Carlos Gómez, Ingeniero de Ventas de SonicWall para Suramérica.

<img src="https://tracker.metricool.com/c3po.jpg?hash=56f88a41e39ab42c063cc51676587a04"/>
