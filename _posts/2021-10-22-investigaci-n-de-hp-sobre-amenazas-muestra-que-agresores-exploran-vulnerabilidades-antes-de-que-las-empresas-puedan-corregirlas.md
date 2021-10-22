---
layout: posts
color-schema: red-dark
date: '2021-10-22 07:32 -0500'
published: true
superNews: false
superArticle: false
year: '2021'
title: >-
  Investigación de HP sobre amenazas muestra que agresores exploran
  vulnerabilidades antes de que las empresas puedan corregirlas
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/Estudiantes-Digitales-g.jpg
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Estudiantes-Digitales-p.jpg
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
week: '42'
---
El equipo de investigación de amenazas HP Wolf Security analiza cómo los ciberdelincuentes utilizan proveedores en la nube legítimos para alojar malware, así como cambiar tipos de archivos y secuencias de comandos para evadir herramientas de detección

HP Inc. ha publicado su más reciente reporte global HP Wolf Security Threat Insights, el cual hace un análisis sobre los ataques a la seguridad cibernética del mundo. Al aislar amenazas que han evadido herramientas de detección y han llegado a los puntos finales de los usuarios, HP Wolf Security cuenta con una visión única de las más recientes técnicas que utilizan los ciberdelincuentes.

El equipo de investigación de amenazas HP Wolf Security halló evidencia de que los delincuentes cibernéticos se están moviendo rápidamente para convertir en armas nuevas vulnerabilidades de 'día cero'. Las vulnerabilidades del CVE-2021-40444 de día cero1– una vulnerabilidad de ejecución remota de código que permite la explotación del motor del navegador MSHTML utilizando documentos de Microsoft Office, fueron detectadas por primera vez por HP el 8 de septiembre, una semana antes de que se liberara el parche el 14 de septiembre.

Para el 10 de septiembre, solo tres días después del boletín inicial  de amenazas , el equipo de investigación de HP vio scripts diseñados para automatizar la creación de este exploit que se compartían en GitHub. A menos que esté parcheado, el exploit permite a los atacantes comprometer los puntos finales con muy poca interacción del usuario. Utiliza un archivo de almacenamiento malicioso, que implementa malware a través de un documento de Office. Los usuarios no tienen que abrir el archivo ni habilitar macros, con sólo verlo en el panel de vista previa del explorador de archivos es suficiente para iniciar el ataque, por lo que, un usuario a menudo no sabrá que ha sucedido. Una vez que el dispositivo se ve comprometido, los ciberdelincuentes pueden instalar puertas traseras en los sistemas, que podrían venderse a grupos de ransomware.

Otras vulnerabilidades notables que identificó el equipo contra amenazas HP Wolf Security fueron:
- Alza en el número de delincuentes cibernéticos que usan proveedores legítimos en la nube y la web para hospedar malware: una reciente campaña de GuLoader hospedaba el Remcos Remote Access Trojan (RAT) en plataformas importantes como OneDrive para evadir sistemas de detección de intrusiones y aprobar las pruebas de whitelisting. HP Wolf Security también descubrió múltiples familias de malware hospedadas en plataformas de redes sociales para gamers como Discord. 
- Malware de JavaScript que evadió herramientas de detección: una campaña que propagó varios JavaScript RATs a través de varios anexos maliciosos en correos electrónicos. Los descargadores JavaScript tienen una tasa de detección más baja que los descargadores Office o binarios. RATs son cada vez más comunes a medida que los atacantes buscan robar referencias para cuentas empresariales o carteras de criptomonedas.
- Campaña dirigida que se hacía pasar como el fondo para la Seguridad Social Nacional de Uganda: Los atacantes usaron “typosquatting” – una dirección web falsa similar a un nombre de dominio oficial – para llevar a usuarios a un sitio donde se descarga un documento de Word malicioso. Este ataque usa macros para ejecutar una secuencia PowerShell que bloquea registros de seguridad y evade la función Windows Antimalware Scan Interface.
- Cambiar a archivos HTA despliega el malware con un solo clic: Trickbot Trojan ahora viaja a través de archivos HTA (aplicación HTML), lo cual despliega el malware en cuanto se abre el anexo o archivo que lo contiene. Por ser un tipo de archivo poco común, los archivos HTA maliciosos son menos propensos a ser descubiertos por herramientas de detección.

“El tiempo promedio que tarda una empresa en aplicar, probar e implementar parches por completo con su correspondiente análisis es de 97 días, dando a los agresores oportunidad de explotar esta 'ventana de vulnerabilidad'. Aunque solo los hackers más capaces pueden explotar esta vulnerabilidad inicialmente, las secuencias de comandos han permitido un fácil acceso, haciendo que este tipo de ataque sea accesible a atacantes¬ con menos experiencia. Esto aumenta sustancialmente el riesgo para las empresas, ya que las vulnerabilidades de día cero se vuelven disponibles para el mercado masivo como sedes de foros clandestinos”, explicó Alex Holland, analista senior de malware del equipo de investigación sobre amenazas HP Wolf Security en HP Inc. “Estas nuevas vulnerabilidades suelen ser efectivas para evadir herramientas de detección porque las firmas pueden ser imperfectas y se vuelven obsoletas rápidamente a medida que cambia el entendimiento del alcance de una vulnerabilidad. Creemos que los atacantes adoptarán CVE-2021-40444 como parte de su arsenal, y muy posiblemente remplacen vulnerabilidades comunes para obtener acceso inicial a los sistemas actuales, como los que atacan Equation Editor”. 

“También hemos visto cómo plataformas importantes como OneDrive están permitiendo a hackers llevar a cabo ataques fugaces. Aunque el malware hospedado en dichas plataformas por lo general se contiene rápidamente, esto no detiene a los atacantes porque pueden alcanzar su objetivo de suministrar malware en las pocas horas que los enlaces están activos”, continuó Holland. “Algunos actores de amenazas cambian la secuencia de comandos o el tipo de archivo que utilizan cada pocos meses. Los archivos JavaScript y HTA maliciosos no son una novedad, pero siguen llegando a bandejas de entrada de empleados, poniendo en riesgo a la empresa. Una campaña implementó Vengeance Justice Worm, el cual se puede extender a otros sistemas y unidades USB”.

Los hallazgos se basan en datos de millones de terminales que ejecutan HP Wolf Security. HP Wolf Security monitorea malware al abrir tareas riesgosas en micro máquinas virtuales (micro VM) aisladas para entender y capturar toda la cadena de infección, ayudando a mitigar amenazas que han escapado de otras herramientas de seguridad. Esto ha permitido a los clientes dar clic en más de 10 mil millones de anexos en correos electrónicos, páginas web y descargas sin reporte de filtración de información2. Al entender mejor la conducta del malware en su hábitat natural, los investigadores e ingenieros de HP Wolf Security pueden reforzar la protección de las terminales endpoint y la resistencia general de los sistemas. 

**Algunos de los hallazgos clave del reporte fueron:**
- El 12% del malware por correo electrónico aislado había eludido al menos un escáner de compuerta
- El 89% del malware detectado fue enviado vía correo electrónico, mientras que las descargas web fueron responsables por el 11%, y otros vectores como dispositivos de almacenamiento removibles en menos de 1% de los casos
- Los archivos anexos más comunes que se usan para enviar malware fueron archivos (38%, en comparación con el 17.26% del trimestre pasado), documentos Word (23%), hojas de cálculo (17%) y archivos ejecutables (16%)
- Los cinco engaños más comunes estaban relacionados con transacciones empresariales como “orden”, “pago”, “nuevo”, “cotización” y “solicitud”
- El reporte halló que el 12% del malware capturado era previamente desconocido3
- “No podemos seguir confiando solo en la detección. El panorama de amenazas es muy dinámico y, como podemos ver del análisis de amenazas capturadas en nuestras máquinas virtuales (VM), los atacantes cada vez son más ágiles para evadir sistemas de detección", comentó el Dr. Ian Pratt, titular global de seguridad para sistemas personales en HP Inc. “Las empresas deben adoptar una visión escalonada respecto a la seguridad de terminales, siguiendo principios de confianza cero para contener y aislar los vectores de ataque más comunes como correo electrónico, navegadores y descargas. Esto eliminará la superficie del ataque para todo tipo de amenazas, mientras que da a las empresas el espacio necesario para coordinar ciclos de parches de forma segura sin interrumpir sus servicios.”

![](https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Estudiantes-Digitales-p.jpg)

<table style="height: 42px;" width="569">
<tbody>
<tr>
<td style="text-align: justify;"><sub><strong>Nuestras noticias también son publicadas a través de nuestra cuenta en Twitter <a href="https://twitter.com/itnewslat?lang=es">@ITNEWSLAT</a> y en la aplicación <a href="https://squidapp.co/en/">SQUID</a></strong></sub></td>
</tr>
</tbody>
</table>

<img src="https://tracker.metricool.com/c3po.jpg?hash=56f88a41e39ab42c063cc51676587a04"/>
