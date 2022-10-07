---
layout: posts
color-schema: red-dark
date: '2022-10-07 05:33 -0500'
published: true
superNews: false
superArticle: false
year: '2022'
title: >-
  ESET descubre campaña de robo de información que utiliza una falsa oferta de
  trabajo de Amazon
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/seleccion-g.jpg
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/seleccion-p.jpg
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
week: '40'
---
ESET Latinoamérica, compañía líder en detección proactiva de amenazas, identificó ataques en los que se utilizan correos de phishing, especialmente dirigidos, relacionados a falsas ofertas de trabajo.

ESET, compañía líder en detección proactiva de amenazas, descubrió ataques del grupo Lazarus contra objetivos en Países Bajos y Bélgica en los que se han utilizado correos de phishing especialmente dirigidos relacionados a falsas ofertas de trabajo.

La campaña comenzó con correos electrónicos de spearphishing que contenían documentos maliciosos y que utilizaban la imagen de Amazon. Los correos identificados estaban dirigidos a un empleado de una empresa aeroespacial en Países Bajos y a un periodista político en Bélgica. El objetivo principal de los atacantes era la exfiltración de datos. Lazarus (también conocido como HIDDEN COBRA) es un grupo de APT que ha estado activo desde al menos 2009. Es responsable de ataques a compañías de alto perfil, como fue el robo de decenas de millones de dólares en 2016, también del brote del ransomware WannaCryptor (también conocido como WannaCry) en 2017 y de un largo historial de ataques disruptivos contra Infraestructura crítica y pública de Corea del Sur desde al menos 2011.
 
En ambos casos el contacto comenzó a través de ofertas de trabajo: el empleado en los Países Bajos recibió un archivo adjunto a través de LinkedIn Messaging y la persona en Bélgica recibió un documento por correo electrónico. Los ataques comenzaron después de que se abrieron estos documentos y se desplegaron varias herramientas maliciosas en cada sistema.
 
La herramienta más interesante que utilizaron los atacantes fue un módulo de modo de usuario que les permitió la habilidad de leer y escribir en la memoria del kernel debido a la vulnerabilidad CVE-2021-21551 en un controlador Dell legítimo. Este es el primer caso registrado de explotación de esta vulnerabilidad en una campaña. Luego, los atacantes usaron su acceso de escritura a la memoria del kernel para deshabilitar siete mecanismos que ofrece el sistema operativo Windows para monitorear sus acciones, como el registro, el sistema de archivos, la creación de procesos, el seguimiento de eventos, etc., básicamente cegando las soluciones de seguridad de una manera robusta.

“Atribuimos estos ataques a Lazarus con mucha confianza a partir de los módulos específicos, el certificado de firma de código y el enfoque de intrusión en común con campañas anteriores de Lazarus, como Operation In(ter)ception y Operation DreamJob. La diversidad, el número y la excentricidad en la implementación de las campañas de Lazarus definen a este grupo, así como el hecho de lleva adelante los tres pilares de las actividades cibercriminales: ciberespionaje, cibersabotaje y búsqueda de ganancias financieras.”, menciona Peter Kálnai, Senior Malware Researcher de ESET.

Esta investigación se presentó en la conferencia Virus Bulletin de este año. Debido a su originalidad, el enfoque principal de la presentación estuvo en el componente malicioso utilizado en este ataque que utiliza la técnica Bring Your Own Vulnerable Driver (BYOVD) y aprovecha la vulnerabilidad CVE-2021-21551 mencionada anteriormente. Información más detallada está disponible en el white paper Lazarus & BYOVD: Evil to the Windows core.

![](https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/seleccion-p.jpg)
 
 <table style="height: 42px;" width="569">
<tbody>
<tr>
<td style="text-align: justify;"><sub><strong>Nuestras noticias también son publicadas a través de nuestra cuenta en Twitter <a href="https://twitter.com/itnewslat?lang=es">@ITNEWSLAT</a> y en la aplicación <a href="https://squidapp.co/en/">SQUID</a></strong></sub></td>
</tr>
</tbody>
</table>

<img src="https://tracker.metricool.com/c3po.jpg?hash=56f88a41e39ab42c063cc51676587a04"/>



