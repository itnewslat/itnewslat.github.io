---
layout: posts
color-schema: red-dark
date: '2024-10-04 09:10 -0400'
published: true
superNews: false
superArticle: false
year: '2024'
title: >-
  ESET descubre nuevas amenazas que abusa de servicios como Dropbox, OneDrive y
  GitHub
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/refs/heads/master/img/540x320/ciberamenaza-p.jpg
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/refs/heads/master/img/1024x680/ciberamenaza-g.jpg
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
- Una investigación de ESET detalla las herramientas y actividades de un nuevo actor de amenazas, de origen chino, cuyo objetivo es la exfiltración masiva de datos confidenciales abusando de proveedores de servidores como Dropbox, OneDrive y Github.

Durante la reciente conferencia de Virus Bulletin, el equipo de investigación de ESET, compañía líder en detección proactiva de amenazas, presentó su análisis a varias campañas dirigidas a instituciones gubernamentales en Tailandia, a partir de 2023. La investigación reveló que estos ataques utilizaban componentes renovados del grupo de amenazas persistentes avanzadas (APT) Mustang Panda, de origen chino, e identificó un nuevo actor de amenazas, al que ESET denominó CeranaKeeper, que abusa de proveedores de servicios como Pastebin, Dropbox, OneDrive y GitHub para ejecutar comandos en equipos comprometidos y filtrar documentos confidenciales.

CeranaKeeper ha estado activo al menos desde principios de 2022, dirigiéndose principalmente a entidades gubernamentales de países asiáticos como Tailandia, Myanmar, Filipinas, Japón y Taiwán. Se destaca la incesante caza de datos del grupo, cuyos atacantes despliegan una amplia gama de herramientas destinadas a extraer la mayor cantidad de información posible de las redes comprometidas.
 
Puntos clave de esta investigación son:

- El equipo de investigación de ESET descubrió un nuevo actor de amenazas de origen chino, CeranaKeeper, dirigido a instituciones gubernamentales en Tailandia. Algunas de sus herramientas fueron atribuidas previamente a Mustang Panda por otros investigadores.
- CeranaKeeper abusa de servicios en la nube y de intercambio de archivos populares y legítimos, como Dropbox y OneDrive, para implementar backdoors y herramientas de extracción personalizadas.
- El grupo actualiza constantemente su backdoor para evadir la detección y diversifica sus métodos para ayudar a la exfiltración masiva de datos.
- El grupo utiliza las funciones de solicitud de extracción y comentario de problemas de GitHub para crear un shell inverso sigiloso, aprovechando GitHub, una popular plataforma en línea para compartir y colaborar en código, como servidor de C&C.
 
“CeranaKeeper, el actor de la amenaza que está detrás de los ataques al gobierno tailandés, parece especialmente implacable, ya que la plétora de herramientas y técnicas que utiliza el grupo sigue evolucionando a gran velocidad. Los operadores escriben y reescriben su conjunto de herramientas según las necesidades de sus operaciones y reaccionan con bastante rapidez para seguir evitando ser detectados. El objetivo de este grupo es cosechar tantos archivos como sea posible y para ello desarrolla componentes específicos. CeranaKeeper utiliza la nube y servicios de intercambio de archivos para la exfiltración y probablemente se basa en el hecho de que el tráfico a estos servicios populares en su mayoría parecería legítimo y sería más difícil de bloquear cuando se identifica.”, comenta Romain Dumont, Malware Researcher de ESET.
 
En la operación analizada por ESET, el grupo convirtió las máquinas comprometidas en servidores de actualización, ideó una novedosa técnica que utilizaba las funciones de solicitud de extracción y comentario de incidencias de GitHub para crear un shell inverso sigiloso, y desplegó componentes de recolección de un solo uso al recopilar árboles de archivos enteros.
 
Desde ESET consideran que el uso de señuelos políticos y componentes PlugX es obra de MustangPanda. A pesar de algunas similitudes en sus actividades (objetivos de carga lateral similares, formato de archivo), observaron diferencias organizativas y técnicas entre los dos grupos, como diferencias en sus conjuntos de herramientas, infraestructura, prácticas operativas y campañas. También identificaron diferencias en la forma en que ambos grupos llevan a cabo tareas similares
 
“A lo largo de la investigación, ESET estableció fuertes conexiones entre los conjuntos de herramientas previamente documentados y los nuevos y un actor de amenazas común. La revisión de las tácticas, técnicas y procedimientos (TTP), el código y las discrepancias de infraestructura llevaron a creer que era necesario rastrear CeranaKeeper y MustangPanda como dos entidades separadas. Sin embargo, ambos grupos de origen chino podrían estar compartiendo información y un subconjunto de herramientas por un interés común o a través del mismo tercero.”, agrega Dumont, de ESET.
 
Para un análisis más detallado de las herramientas desplegadas por CeranaKeeper, puede acceder al informe completo de ESET Research aquí.
 
Para conocer más sobre seguridad informática visite el portal de noticias de ESET: https://www.welivesecurity.com/en/eset-research/separating-bee-panda-ceranakeeper-making-beeline-thailand/
 
Por otro lado, ESET invita a conocer Conexión Segura, su podcast para saber qué está ocurriendo en el mundo de la seguridad informática. Para escucharlo ingrese a: https://open.spotify.com/show/0Q32tisjNy7eCYwUNHphcw

 ![](https://raw.githubusercontent.com/itnewslat/assets/refs/heads/master/img/540x320/ciberamenaza-p.jpg)
 
 <table style="height: 42px;" width="569">
<tbody>
<tr>
<td style="text-align: justify;"><sub><strong>Nuestras noticias también son publicadas a través de nuestra cuenta en Twitter <a href="https://twitter.com/itnewslat?lang=es">@ITNEWSLAT</a> y en la aplicación <a href="https://squidapp.co/en/">SQUID</a></strong></sub></td>
</tr>
</tbody>
</table>

<img src="https://tracker.metricool.com/c3po.jpg?hash=56f88a41e39ab42c063cc51676587a04"/>