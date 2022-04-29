---
layout: posts
color-schema: red-dark
date: '2022-04-29 04:42 -0500'
published: true
superNews: false
superArticle: false
year: '2022'
title: >-
  Países de América Latina entre los afectados por un nuevo grupo de ransomware,
  señala Kaspersky
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/Codigo-ransomware-g.jpg
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Codigo-ransomware-p.jpg
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
week: '17'
---
BlackCat, sucesor de los grupos BlackMatter y REvil, apunta a entornos corporativos con malware extremadamente efectivo y personalizable

En un nuevo informe, titulado “A bad luck BlackCat”, los investigadores de Kaspersky revelan los detalles de dos incidentes cibernéticos realizados por el grupo de ransomware BlackCat. La complejidad del malware utilizado, sumado a la vasta experiencia de los actores que están detrás de éste, hacen de esta organización uno de los principales grupos de ciberdelincuentes que atacan con ransomware y que ya opera en América Latina. Las herramientas y técnicas implementadas durante los ataques confirman la conexión entre BlackCat y antiguos grupos de ransomware peligrosos como BlackMatter y REvil.

El grupo de ransomware BlackCat es un actor de amenazas que opera, al menos, desde diciembre de 2021. A diferencia de muchos actores de ransomware, el malware BlackCat está escrito en el lenguaje de programación Rust. Gracias a las funciones avanzadas de compilación cruzada de Rust, BlackCat puede apuntar a sistemas Windows y Linux. En otras palabras, BlackCat introdujo avances progresivos y un cambio en las tecnologías utilizadas para enfrentar los desafíos del desarrollo de ransomware.

BlackCat afirma ser el sucesor de conocidos grupos de ransomware como BlackMatter y REvil. La telemetría de Kaspersky sugiere que al menos algunos miembros de BlackCat tienen vínculos directos con BlackMatter, ya que utilizan herramientas y técnicas ampliamente usadas por el grupo.

De hecho, en los últimos 12 meses, Kaspersky ha identificado actividades características de REvil en algunos países de América Latina, principalmente en Brasil, Colombia y México. La empresa también ha registrado detecciones afines con BlackMatter en Brasil y República Dominicana. Estas detecciones de sus predecesores indican que los ataques de BlackCat se están expandiendo por toda la región.

En el informe, los investigadores de la empresa esclarecen dos incidentes cibernéticos particularmente interesantes. Uno de ellos demuestra el riesgo que representan los recursos de alojamiento compartido en la nube, y el otro muestra un enfoque ágil para reutilizar el malware personalizado entre las actividades de BlackMatter y BlackCat.

El primer caso examina un ataque contra un proveedor vulnerable de planificación de recursos empresariales (ERP) en el Medio Oriente que aloja varios sitios web. Los atacantes entregaron simultáneamente dos ejecutables diferentes al mismo servidor físico, apuntando a dos organizaciones distintas alojadas virtualmente en él. Aunque la pandilla interpretó incorrectamente el servidor infectado como dos sistemas físicos diferentes, los atacantes dejaron rastros que fueron importantes para determinar la forma de operar de BlackCat. Los investigadores de Kaspersky concluyeron que el agente explora el riesgo de los activos compartidos entre los recursos de la nube. Además, en este caso, el grupo también entregó un archivo de instrucciones Mimikatz con ejecutables y utilidades de recuperación de contraseña de Nirsoft. Un incidente similar ocurrió en 2019 cuando Revil, el predecesor de la actividad de BlackMatter, apareció para irrumpir en un servicio en la nube que respalda la información de varios consultorios dentales en Estados Unidos. Es probable que BlackCat también haya adoptado algunas de estas tácticas más antiguas.

El segundo caso involucra a una empresa de petróleo, gas, minería y construcción en Sudamérica, y revela la conexión entre BlackCat y las actividades de ransomware BlackMatter. Antes de intentar entregar el ransomware BlackCat dentro de la red objetivo, el actor detrás de este ataque (que parece ser diferente al del caso anterior) también instaló una utilidad de exfiltración personalizada modificada que llamamos "Fendr". Esta utilidad, también conocida como ExMatter, alguna vez se usó exclusivamente como parte de la actividad de ransomware de BlackMatter.

“Después de que los grupos REvil y BlackMatter quebraron, era solo cuestión de tiempo antes de que otro grupo de ransomware se apoderara de su nicho. El conocimiento del desarrollo de malware, una nueva muestra creada desde cero en un lenguaje de programación poco común y la experiencia en el mantenimiento de la infraestructura están convirtiendo al grupo BlackCat en un jugador importante en el mercado del ransomware. Al revisar estos incidentes importantes, destacamos las características, las herramientas y las técnicas clave utilizadas por BlackCat cuando irrumpe en las redes de sus víctimas. Este conocimiento nos ayuda a mantener a nuestros usuarios seguros y protegidos frente a amenazas conocidas y desconocidas. Insistimos en que la comunidad de seguridad cibernética debe unir fuerzas y trabajar en conjunto contra los grupos de ciberdelincuentes emergentes para lograr un futuro más seguro”, dijo Dmitry Galov, investigador de seguridad del Equipo de análisis e investigación global de Kaspersky.

Para ayudar a las empresas a protegerse de los ataques de ransomware, los expertos recomiendan que las organizaciones tomen las siguientes medidas lo antes posible:

- Mantenga el software actualizado en todos los dispositivos que se usen en la organización para evitar que el ransomware aproveche las vulnerabilidades.
- Instruya a sus empleados sobre cómo proteger el entorno corporativo a través de cursos de capacitación exclusivos, como los que se brindan en Kaspersky Automated Security Awareness Platform.
- Concentre su estrategia de defensa en la detección de movimientos laterales y la exfiltración de datos a Internet. Hay que prestar especial atención al tráfico saliente para detectar conexiones de ciberdelincuentes.
- Realice copias de seguridad de sus datos periódicamente y asegúrese de poder acceder a ellos rápidamente en caso de emergencia.
- Utilice la inteligencia de amenazas más reciente para estar al tanto de las tácticas, técnicas y procedimientos (TTP) que utilizan los actores de amenazas.
- Utilice soluciones como Kaspersky Endpoint Detection and Response y Kaspersky Managed Detection and Response, que ayudan a identificar y prevenir ataques en las primeras etapas, antes de que los atacantes puedan lograr sus objetivos finales.

![](https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Codigo-ransomware-p.jpg)


<table style="height: 42px;" width="569">
<tbody>
<tr>
<td style="text-align: justify;"><sub><strong>Nuestras noticias también son publicadas a través de nuestra cuenta en Twitter <a href="https://twitter.com/itnewslat?lang=es">@ITNEWSLAT</a> y en la aplicación <a href="https://squidapp.co/en/">SQUID</a></strong></sub></td>
</tr>
</tbody>
</table>

<img src="https://tracker.metricool.com/c3po.jpg?hash=56f88a41e39ab42c063cc51676587a04"/>