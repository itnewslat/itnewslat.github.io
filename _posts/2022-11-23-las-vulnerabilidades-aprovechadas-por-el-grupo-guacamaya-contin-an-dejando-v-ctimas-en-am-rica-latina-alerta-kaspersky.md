---
layout: posts
color-schema: red-dark
date: '2022-11-23 05:14 -0500'
published: true
superNews: false
superArticle: false
year: '2022'
title: >-
  Las vulnerabilidades aprovechadas por el grupo Guacamaya continúan dejando
  víctimas en América Latina, alerta Kaspersky
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/charla-kaspersky-g.jpg
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/charla-kaspersky-p.jpg
categories:
  - Venezuela
  - Colombia
  - Perú
  - Ecuador
  - Chile
  - Mexico
tags:
  - Seguridad
week: '47'
---
Los objetivos del nuevo grupo son empresas de los sectores de minería, petróleo y gas, así como agencias gubernamentales en Chile, Colombia, Ecuador, Perú, Guatemala, México y Venezuela
 
Un informe del Equipo de Investigación y Análisis Global de Kaspersky reveló que el autodenominado grupo hacktivista Guacamaya está formado por actores de amenaza latinoamericanos cuya agenda inicial se enfocó en la defensa del medio ambiente, pero posteriormente pasó a atacar gobiernos y organismos militares. Para sus ataques, aprovechan vulnerabilidades en servidores de correo electrónico para obtener información confidencial, exponer a sus víctimas en la prensa y crear crisis de reputación. Para protegerse, las organizaciones deben actualizar sus servidores.

El término hacktivismo se utiliza para grupos de delincuentes que, a través de ciberataques, llevan a cabo un activismo político o social en defensa de una causa. En la última década se han registrado ataques de tales grupos, como: Anonymous (2010-2015), que abogaba por la libertad digital; LulzSec (2010-2011), que sólo buscaba fama; y recientemente LAPSU$, que tiene una motivación financiera. Si bien muchos de estos hacktivistas afirman que realizan estos ataques "por un bien mayor", sus acciones siguen siendo ilegales y algunos grupos utilizan este mantra como pretexto para llevar a cabo fines maliciosos, y Guacamaya no es la excepción.

Guacamaya aprovecha las vulnerabilidades de los servidores de correo electrónico (Microsoft Exchange) para entrar en la red de la víctima - estas son conocidas como “ProxyShell/ProxyLogon” (CVE-2021-34473, CVE-2021-31206, CVE-2021-34523 y CVE-2021-31207) así como Zimbra (CVE 2022-27925). Posteriormente, crean puertas traseras a fin de tener acceso permanente a la red comprometida y utilizan herramientas legítimas para robar credenciales o elevar los privilegios de acceso de usuario. Así, los delincuentes obtienen acceso a todas las cuentas de correo electrónico de la organización infectada y a la información sensible que contienen.

Los objetivos del grupo están presentes principalmente en Brasil, Chile, Colombia, Ecuador, Perú, Guatemala, México y Venezuela. Inicialmente, atacaron los sectores de minería, petróleo y gas, pero últimamente sus ataques se han extendido a organizaciones militares y gobiernos en toda América Latina.

"Después de extraer todos los correos electrónicos, el grupo comienza a evaluar qué mensajes tienen el potencial de generar daños a la reputación de las víctimas. El siguiente paso es publicar todo en Internet y avisar a la prensa de la filtración con el fin de que el ataque adquiera visibilidad pública. Esta exposición y las posteriores crisis que genera para las organizaciones afectadas es el verdadero daño de los ataques hacktivistas", explica Leandro Cuozzo, analista de seguridad para América Latina en Kaspersky.

El informe de inteligencia de amenazas de Kaspersky muestra que las vulnerabilidades explotadas por Guacamaya en sus ataques se identificaron en febrero de 2021 y que luego se corrigieron en septiembre de ese mismo año. Sin embargo, las actividades maliciosas del grupo se intensificaron en 2022, lo que indica que las organizaciones no están aplicando los parches de seguridad en sus sistemas, lo que les habría permitido evitar los incidentes reportados este año.

Los expertos de Kaspersky también han identificado otros grupos criminales que explotan estas mismas vulnerabilidades, lo que significa que una víctima puede ser atacada por dos o más grupos a la vez. Adicionalmente, es de conocimiento público que existen nuevas vulnerabilidades en los servidores de correo electrónico (Exchange), denominadas “ProxyNotShell” (CVE-2022-41040 y CVE-2022-41082), pero no hay evidencia de que Guacamaya las esté explotando.

Un reciente estudio del Equipo Global de Respuesta a Emergencias (GERT) de Kaspersky, el cual analiza datos anónimos de 2021, revela que, en general, el 53.6% de los ciberataques comienzan con la explotación de vulnerabilidades, seguidos por el uso de cuentas comprometidas (a las que se les han robado credenciales) con un 17.9% y el uso de correos electrónicos maliciosos (para la instalación de malware o el robo de credenciales) con un 14.3%. También muestra que en el 40% de los ataques se utilizan herramientas legítimas, lo que resalta una nueva tendencia en la que el uso de malware se produce sólo en las etapas finales del ataque. En el caso de Guacamaya, el malware se utiliza para robar (exfiltrar) datos confidenciales.

"En palabras más simples, nuestros hallazgos muestran que las empresas, al no actualizar sus sistemas, dejan las puertas abiertas para que entren los ciberdelincuentes. Para evitar estos ataques, basta con aplicar las correcciones necesarias que, en este caso, están disponibles desde hace más de un año. A pesar de comprender la criticidad que representan los correos electrónicos para nuestra vida digital actual y la dificultad de aplicar correcciones en este entorno, este es el único método y la manera más efectiva para prevenir estos ataques.  Reitero que es esencial que las empresas y los gobiernos mantengan actualizados los servidores de Exchange, ya que nada impide que los delincuentes sigan utilizando este mecanismo de acceso”, destaca Eduardo Chavarro, miembro del Equipo Global de Respuesta a Incidentes para América Latina en Kaspersky.

Los detalles técnicos e información adicional sobre el comportamiento del grupo están disponibles en el informe de inteligencia realizado por el equipo de expertos de Kaspersky para los suscriptores del Portal de Inteligencia de la compañía.

![](https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/charla-kaspersky-p.jpg)

<table style="height: 42px;" width="569">
<tbody>
<tr>
<td style="text-align: justify;"><sub><strong>Nuestras noticias también son publicadas a través de nuestra cuenta en Twitter <a href="https://twitter.com/itnewslat?lang=es">@ITNEWSLAT</a> y en la aplicación <a href="https://squidapp.co/en/">SQUID</a></strong></sub></td>
</tr>
</tbody>
</table>

<img src="https://tracker.metricool.com/c3po.jpg?hash=56f88a41e39ab42c063cc51676587a04"/>