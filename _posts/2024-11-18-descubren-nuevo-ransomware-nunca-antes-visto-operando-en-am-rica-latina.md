---
layout: posts
color-schema: red-dark
date: '2024-11-18 09:42 -0400'
published: true
superNews: false
superArticle: false
year: '2024'
title: Descubren nuevo ransomware nunca antes visto operando en América Latina
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/refs/heads/master/img/540x320/Malware-Kaspersky-p.jpg
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/refs/heads/master/img/1024x680/Malware-Kaspersky-g.jpg
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
week: '47'
---

En el ataque observado por los expertos de Kaspersky afectó a una organización de Colombia; se trata del ransomware Ymir que utiliza una combinación única de técnicas y tácticas que mejoran su efectividad.

_**El equipo global de respuesta a emergencias de Kaspersky ha identificado una nueva variante de ransomware que nunca antes se había visto en uso activo, desplegado en un ataque posterior al robo de credenciales de empleados. El ransomware, denominado "Ymir", emplea métodos avanzados de sigilo y encriptación. También selecciona archivos específicos y trata de evadir la detección**_.

**Técnicas poco comunes de manipulación de memoria para el sigilo**. 
Los actores de la amenaza utilizaron una mezcla poco convencional de funciones de gestión de memoria – malloc, memmove y memcmp – para ejecutar el código malicioso directamente en la memoria. Este enfoque se desvía del flujo de ejecución secuencial típico visto en los tipos de ransomware más comunes, mejorando sus capacidades de sigilo. Además, Ymir es flexible: mediante el comando --path, los atacantes pueden especificar un directorio donde el ransomware debe buscar archivos. Si un archivo está en la lista blanca, el ransomware lo omite y lo deja sin encriptar. Esta característica otorga a los atacantes más control sobre qué se encripta y qué no.

**Uso de malware para robar datos**. 
En el ataque observado por los expertos de Kaspersky, que tuvo lugar en una organización de Colombia, se observó que los actores de la amenaza utilizaban RustyStealer, un tipo de malware que roba información, para obtener credenciales corporativas de empleados. Estas fueron luego utilizadas para acceder a los sistemas de la organización y mantener el control el tiempo suficiente para desplegar el ransomware. Este tipo de ataque se conoce como "intermediación de acceso inicial", donde los atacantes infiltran los sistemas y mantienen el acceso. Típicamente, los intermediarios de acceso inicial venden el acceso que obtienen en la dark web a otros ciberdelincuentes, pero en este caso parece que continuaron el ataque ellos mismos al desplegar el ransomware. "Si los intermediarios son de hecho los mismos actores que desplegaron el ransomware, esto podría señalar una nueva tendencia, creando opciones adicionales de secuestro sin depender de los grupos tradicionales de Ransomware-as-a-Service (RaaS)", explica **Eduardo Chavarro director del Grupo de Respuesta a Incidentes y forense digital para Américas en Kaspersky**.


**Algoritmo de encriptación avanzado**. 
El ransomware emplea ChaCha20, un moderno cifrador de flujo conocido por su velocidad y seguridad, superando incluso al Estándar de Encriptación Avanzada (AES).

Aunque el actor detrás de este ataque no ha compartido datos robados públicamente ni ha hecho más demandas, los investigadores lo están monitoreando de cerca para detectar nuevas actividades. "No hemos identificado sitios de subasta de datos extraídos por parte de este grupo. Típicamente, los atacantes utilizan foros o portales ocultos para filtrar información como una forma de presionar a las víctimas para que paguen el rescate, lo cual no es el caso con Ymir. Dado esto, la pregunta de qué grupo está detrás del ransomware sigue abierta, y sospechamos que esto puede ser una nueva campaña", explica Ovalle
.
Buscando un nombre para la nueva amenaza, los expertos de Kaspersky consideraron una luna de Saturno llamada Ymir. Es una luna "irregular" que viaja en dirección opuesta a la rotación del planeta, una característica que curiosamente recuerda la mezcla poco convencional de funciones de gestión de memoria utilizadas en el nuevo ransomware.

Los productos de Kaspersky ahora pueden detectar este ransomware como Trojan-Ransom.Win64.Ymir.gen. Los expertos de la compañía recomiendan las siguientes medidas generales para mitigar los ataques de ransomware:

- Implementar un programa de copias de seguridad frecuentes y realizar pruebas regulares.
- Brindar a los empleados formación periódica en ciberseguridad para aumentar su conciencia sobre amenazas cibernéticas como el malware que roba datos, y enseñar estrategias efectivas de mitigación. 
- Si ha sido víctima de ransomware y aún no existe un descifrador conocido, guarde sus archivos críticos cifrados.
- Una solución de descifrado puede surgir dentro de un esfuerzo de investigación de amenazas en curso o si las autoridades logran apoderarse del actor detrás de la amenaza.
- Se recomienda no pagar el rescate. Pagar fomenta que los creadores de malware continúen con sus operaciones, pero no asegura la devolución segura y confiable de los archivos. 
- Para proteger a la empresa contra una amplia gama de amenazas, utilice soluciones de la línea de productos Kaspersky Next que proporcionan protección en tiempo real, visibilidad de amenazas, capacidades de investigación y respuesta de EDR y XDR para organizaciones de cualquier tamaño e industria. Dependiendo de sus necesidades actuales y recursos disponibles, puede elegir el nivel de producto más relevante, con flexibilidad para migrar fácilmente a otro a medida que evolucionen sus requisitos de ciberseguridad. Reduzca su superficie de ataque deshabilitando servicios y puertos no utilizados. 
- Adopte servicios de seguridad gestionados de Kaspersky, como Evaluación de Compromiso, Detección y Respuesta Gestionada (MDR) y/o Respuesta a Incidentes, que cubren todo el ciclo de gestión de incidentes, desde la identificación de amenazas hasta la protección continua y la remediación. Ayudan a proteger contra ciberataques evasivos, investigar incidentes y obtener experiencia adicional incluso si una empresa carece de trabajadores de seguridad.

![](https://raw.githubusercontent.com/itnewslat/assets/refs/heads/master/img/540x320/Malware-Kaspersky-p.jpg)

<table style="height: 42px;" width="569">
<tbody>
<tr>
<td style="text-align: justify;"><sub><strong>Nuestras noticias también son publicadas a través de nuestra cuenta en Twitter <a href="https://twitter.com/itnewslat?lang=es">@ITNEWSLAT</a> y en la aplicación <a href="https://squidapp.co/en/">SQUID</a></strong></sub></td>
</tr>
</tbody>
</table>

<img src="https://tracker.metricool.com/c3po.jpg?hash=56f88a41e39ab42c063cc51676587a04"/>