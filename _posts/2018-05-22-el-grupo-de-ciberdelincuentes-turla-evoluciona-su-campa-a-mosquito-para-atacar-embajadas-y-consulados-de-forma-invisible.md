---
layout: posts
color-schema: red-dark
date: '2018-05-22 10:07 -0700'
published: true
superNews: false
title: >-
  El grupo de ciberdelincuentes Turla evoluciona su campaña Mosquito para atacar
  embajadas y consulados de forma invisible
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Ciberataque-p.jpg
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/Ciberataque-g.jpg
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
Mosquito intercepta la descarga legítima de Flash y reemplaza el programa por una versión troyanizada

SET, el mayor fabricante de software de seguridad de la Unión Europea, continua con sus investigaciones sobre el grupo de ciberdelincuentes Turla y sus ataques a través de la campaña Mosquito, que afectan sobre todo a embajadas y consulados del este de Europa. En esta ocasión, el laboratorio de ESET ha observado un cambio significativo en los patrones de comportamiento del grupo: ahora aprovechan las herramientas incluidas en el framework Metasploit antes de lanzar el backdoor personalizado Mosquito. No es la primera vez que Turla utiliza herramientas genéricas, ya que en el pasado ya utilizaron otras como Mimikatz; sin embargo, es la primera vez, al menos que se sepa, que utilizan Metasploit para conseguir instalar backdoors en la primera fase del ataque, en lugar de confiar en sus propias herramientas, como Skipper. 

**Quién es Turla**
Turla es un equipo de espionaje muy conocido y que ha sido muy activo en los últimos diez años. Se dio a conocer en 2008 cuando consiguió romper las barreras de los sistemas del Departamento de Defensa de EEUU y, desde entonces, no ha dejado de atacar objetivos relacionados con instituciones gubernamentales o la defensa de los mismos. 

El pasado mes de enero, ESET publicó un amplio documento en el que se analizaban, por primera vez, las acciones de la campaña conocida como Mosquito. Desde entonces, las actividades de Turla han sido continuas y muy variadas con el objetivo de ser lo más invisibles posible. 

**La campaña actual**
El vector de compromiso de Mosquito sigue siendo un instalador falso de Flash, que descarga tanto el backdoor Turla como el programa legítimo de Adobe. Tal y como ha observado el laboratorio de ESET, los objetivos siguen siendo embajadas y consulados del este de Europa. 

La infección se produce cuando el usuario quiere instalar Flash desde la dirección get.adobe.com a través de una conexión http. Los atacantes de Turla interceptan el ejecutable legítimo y lo reemplazan por una versión troyanizada. Según las investigaciones de ESET, es poco probable que los sitios web de Adobe/Akamai hayan sido comprometidos. 

Hasta ahora, la campaña Mosquito de Turla utilizaba el instalador de Flash para descargar un programa de subida de archivos y el backdoor principal, junto con la aplicación legítima de Adobe. Sin embargo, ahora, en lugar de descargar las dos librerías DLL maliciosas, ejecuta una shellcode de Metasploit y descarga un instalador Flash legítimo desde Google Drive. Después, el shellcode descarga Meterpreter, una herramienta habitual cuando se utiliza Metasploit, gracias a la cual los atacantes del grupo de ciberdelincuentes Turla pueden controlar la máquina comprometida. De esta manera, el backdoor Mosquito se instala en el sistema comprometido Mosquito (ver imagen). 
 
El hecho de que se esté utilizando Metasploit hace pensar a los investigadores de ESET que podría existir un operador que esté controlando los exploits de manera manual. 

Investigación completa en: [https://www.welivesecurity.com/la-es/](https://www.welivesecurity.com/la-es/). 