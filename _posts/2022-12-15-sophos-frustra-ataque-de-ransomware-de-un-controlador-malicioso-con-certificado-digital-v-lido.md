---
layout: posts
color-schema: red-dark
date: '2022-12-15 06:56 -0500'
published: true
superNews: false
superArticle: false
year: '2022'
title: >-
  Sophos frustra ataque de ransomware de un controlador malicioso con
  certificado digital válido
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/chip-dactilar-g.jpg
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/chip-dactilar-p.jpg
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
week: '50'
---
Driver apunta al software de detección y respuesta de Endpoint (EDR); ataques vinculados al grupo Cuba Ransomware
 
Sophos, líder mundial en innovación y prestación de ciberseguridad como servicio, reveló que ha encontrado un código malicioso en varios controladores firmados por certificados digitales legítimos. Su último informe, “El Malware de controladores firmado sube en la cadena de confianza del software”, ”detalla la investigación que comenzó con un intento de ataque de ransomware, en el que los atacantes utilizaron un controlador malicioso firmado con un certificado digital legítimo de Microsoft Windows Hardware Compatibility Publisher. El controlador malicioso está diseñado para dirigir específicamente los procesos utilizados por los principales paquetes de software de detección y respuesta de endpoints (EDR) y fue instalado por un malware vinculado a actores de amenazas afiliados al ransomware de Cuba, un grupo muy prolífico que ha dirigido con éxito a más de 100 empresas en todo el mundo durante el último año. Sophos Rapid Response pudo frustrar el ataque con éxito y la investigación desencadenó una colaboración completa entre Sophos y Microsoft para tomar medidas y abordar la amenaza.
 
Los controladores pueden realizar operaciones con privilegios elevados en sistemas. Por ejemplo, los controladores en modo kernel pueden, entre otras cosas, terminar muchos tipos de software, incluyendo la seguridad. Controlar qué controladores se pueden cargar es una forma de proteger los equipos de esta manera de ataque. Windows requiere que los controladores lleven una firma criptográfica (un “sello de aprobación”) antes de permitir que el controlador se cargue.
 
Sin embargo, no todos los certificados digitales utilizados para firmar controladores son de confianza. Algunos certificados de firma digital, robados y filtrados en Internet, fueron más tarde objeto de abuso para firmar un malware; otros han sido comprados y utilizados por editores de software PUA sin escrúpulos. La investigación de Sophos sobre un controlador malicioso utilizado para sabotear las herramientas de seguridad de los endpoints durante la comisión de un ataque de ransomware reveló que los adversarios habían estado haciendo un esfuerzo importante para pasar progresivamente de certificados digitales de confianza menos generalizada a certificados digitales de mayor confianza.
 
“Estos atacantes, probablemente afiliados del grupo ransomware cubano, saben lo que están haciendo y son persistentes. Hemos encontrado un total de 10 controladores maliciosos, todas variantes del descubrimiento inicial. Estos conductores muestran un esfuerzo concertado por ascender en la cadena de confianza, con el conductor más antiguo que se remonta al menos a julio. Las más antiguas que hemos encontrado hasta la fecha estaban firmadas por certificados de empresas chinas desconocidas; luego siguieron y lograron firmar el controlador con un certificado válido, filtrado y revocado de NVIDIA. Ahora, utilizan un certificado de Microsoft, que es una de las autoridades de mayor confianza en el ecosistema de Windows. Si lo pensamos como si fuera una empresa de seguridad, los atacantes han recibido identificaciones válidas para entrar en el edificio sin duda y hacer lo que les apetezca”, afirmó Christopher Budd, director ejecutivo de investigación de amenazas de Sophos.
 
Un análisis más detallado de los ejecutables utilizados en el intento de ataque ransomware encontró que el controlador malicioso firmado se descargó en el sistema objetivo con una variante del cargador BURNTCIGAR, una pieza conocida de malware afiliada al grupo Cuba ransomware. Una vez que el cargador descarga el controlador en el sistema, este último espera a que se inicie uno de los 186 nombres de archivo de programa diferentes que utilizan habitualmente los principales paquetes de software EDR y de seguridad de endpoints para intentar terminar esos procesos. Si se realiza correctamente, los atacantes pueden implementar el ransomware.
 
“En 2022, hemos visto que los atacantes del ransomware intentan sabotear cada vez más los productos EDR, de la mayoría, sino es que de todos los principales proveedores. La técnica de ataque más común se conoce como «traer su propio controlador», que BlackByte ha utilizado recientemente  e implica que los atacantes exploten una vulnerabilidad existente en un controlador legítimo. Crear un controlador malicioso desde cero y conseguir que lo firme una autoridad legítima es mucho más difícil. Sin embargo, si tienen éxito, es increíblemente eficaz porque el controlador puede llevar a cabo prácticamente cualquier proceso sin una sola duda. En el caso de este controlador en particular, prácticamente todo el software EDR es vulnerable; afortunadamente, las protecciones antimanipulación adicionales de Sophos pudieron detener el ataque de ransomware. La comunidad de seguridad debe ser consciente de esta amenaza para que pueda implementar medidas de seguridad adicionales, como la mirada en el cristal, cuando sea necesaria; y algo más que mencionar es, que es posible que veamos que otros atacantes intentan replicar este tipo de ataque”, dijo Budd.
 
Tras descubrir este controlador, Sophos alertó rápidamente a Microsoft y las dos empresas trabajaron juntas para resolver el problema. Microsoft ha publicado información en su documento informativo  de seguridad con más información hoy como parte del Patch Tuesday.

![](https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/chip-dactilar-p.jpg)

<table style="height: 42px;" width="569">
<tbody>
<tr>
<td style="text-align: justify;"><sub><strong>Nuestras noticias también son publicadas a través de nuestra cuenta en Twitter <a href="https://twitter.com/itnewslat?lang=es">@ITNEWSLAT</a> y en la aplicación <a href="https://squidapp.co/en/">SQUID</a></strong></sub></td>
</tr>
</tbody>
</table>

<img src="https://tracker.metricool.com/c3po.jpg?hash=56f88a41e39ab42c063cc51676587a04"/>