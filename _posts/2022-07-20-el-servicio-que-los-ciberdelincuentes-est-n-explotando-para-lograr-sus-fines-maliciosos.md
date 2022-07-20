---
layout: posts
color-schema: red-dark
date: '2022-07-20 05:26 -0500'
published: true
superNews: false
superArticle: false
year: '2022'
title: >-
  El servicio que los ciberdelincuentes están explotando para lograr sus fines
  maliciosos 
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/tunel-en-la-nube-g.jpg
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/tunel-en-la-nube-p.jpg
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
week: '29'
---
Trend Micro examina cómo funcionan los servicios de tunelización en la nube y cómo las organizaciones pueden frustrar las amenazas que abusan de ellos
 
Los servicios de tunelización en la nube son aquellos que permiten a los usuarios exponer <image005.png>los sistemas internos de sus hogares o empresas mediante la retransmisión del tráfico a través de sistemas basados en la nube. Desafortunadamente, como ocurre con cualquier tipo de servicio que ayude a los desarrolladores y administradores de infraestructura, los ciberdelincuentes han abusado de estos servicios para diversas operaciones ilícitas.
 
**Una descripción general de los servicios de tunelización en la nube**
 
Un servicio de tunelización se utiliza para exponer un servicio a través de un sistema en la nube para ocultar la fuente original, ya sea por períodos cortos o largos. Esto se hace porque el servicio está detrás de un sistema de seguridad o el usuario quiere limitar quién tiene acceso a la fuente original. Es una herramienta útil para los usuarios que desean exponer solo una parte específica del servicio en línea. El uso de dicho servicio no se limita a grandes sistemas en un entorno corporativo; sino también en proyectos más pequeños y personales. 
 
El principal objetivo de los servicios de tunelización en la nube es exponer los servicios a Internet. Con estos servicios, los usuarios pueden implementar rápidamente servicios de desarrollo local en línea mientras evitan la molestia de configurar firewalls y registrar nombres de dominio. El uso de un túnel puede ser muy conveniente para un usuario doméstico que está ansioso por modificar las reglas de reenvío de puertos en su enrutador o tiene acceso restringido a la configuración de su enrutador debido a las limitaciones del proveedor de servicios de Internet. 
 
**¿Cómo se utilizan los servicios de tunelización en la nube con fines maliciosos?**
 
Al igual que con cualquier otra plataforma en línea, los ciberdelincuentes podrían aprovechar los servicios de tunelización en la nube y usarlos con fines maliciosos. 
 
Durante la investigación, se clasificó el abuso del servicio de tunelización en la nube en dos casos de uso malicioso: amenazas internas y amenazas externas. Las amenazas internas son ataques en los que se utilizan, sin saberlo, un endpoint o una red ya afectados con el fin de exponer los protocolos de transferencia de archivos, mientras que las amenazas externas son los ataques cibernéticos más típicos, como el phishing, la descarga oculta y el comando de malware a través de la red de túneles en la nube.
 
**Medidas de defensa**
 
Enumeramos varias medidas de defensa que los administradores de red pueden implementar para evitar el abuso de ngrok y otros servicios de tunelización en la nube en sus redes.

Gestión del acceso de determinados usuarios: Para algunas empresas que tienen servicios de tunelización en la nube como parte esencial de sus operaciones, el acceso debe limitarse solo a los usuarios que necesitan estos servicios. Los empleados con dicho acceso deben ser revisados y registrados regularmente a fin de garantizar que su acceso se utilice para los fines aprobados según lo definido por la organización.
Creación de filtros: Detener la instalación de archivos binarios específicos para túneles en la nube y agregar alertas cuando están presentes en una máquina puede ayudar a minimizar el riesgo de uso no deseado de estos servicios en la red.
Creación de túneles utilizando direcciones IP de Cloud Tunneling Services: Los administradores de red pueden bloquear el protocolo de enlace SSL para evitar el establecimiento de un túnel seguro entre una máquina host y el servidor de un servicio de tunelización en la nube. Se puede ejecutar un comando Bash para enumerar todas las direcciones IP asociadas con ngrok que se utilizan para establecer un túnel y otro para crear reglas de firewall para descartar conexiones salientes a túneles ngrok.
Creación de alertas o bloqueo de amenazas externas: Los kits de phishing y los servidores de C&C podrían canalizarse a través de servicios como ngrok. El riesgo de un intento exitoso de phishing o comunicación de malware se puede reducir evitando el tráfico de red (conexiones HTTP y TCP) proveniente de los servicios de tunelización en la nube.
Para una organización que necesita túneles en la nube, es imprescindible definir el caso de uso exacto, establecer el alcance y el marco de tiempo cuando se utilizarán estos servicios. Esto le permitirá dar un contexto adecuado para identificar si el tráfico específico de tunelización en la nube es válido o no. Al resaltar los riesgos de los túneles en la nube, y el uso y abuso real de estos servicios, los equipos de ciberseguridad y desarrollo de software pueden incluir el uso de los túneles en la nube en su agenda para encontrar un arreglo adecuado que minimice los riesgos y permita el buen desarrollo. 

![](https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/tunel-en-la-nube-p.jpg)

<table style="height: 42px;" width="569">
<tbody>
<tr>
<td style="text-align: justify;"><sub><strong>Nuestras noticias también son publicadas a través de nuestra cuenta en Twitter <a href="https://twitter.com/itnewslat?lang=es">@ITNEWSLAT</a> y en la aplicación <a href="https://squidapp.co/en/">SQUID</a></strong></sub></td>
</tr>
</tbody>
</table>

<img src="https://tracker.metricool.com/c3po.jpg?hash=56f88a41e39ab42c063cc51676587a04"/>