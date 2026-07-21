---
layout: posts
color-schema: red-dark
date: '2026-07-21 19:40 -0400'
published: true
superNews: false
superArticle: false
year: '2026'
title: Kaspersky alerta sobre una creciente táctica de ransomware
week: '30'
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/refs/heads/master/img/540x320/Grupo-Hackers-p.jpg
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/refs/heads/master/img/1024x680/Grupo-Hackers-g.jpg
categories:
  - Venezuela
  - Colombia
  - Ecuador
  - Perú
  - Chile
  - Argentina
  - Panamá
  - Mexico
tags:
  - Seguridad
---
**Hackers imprimen demandas de rescate durante ataques en América Latina**	

- Los casos analizados en Colombia y México demuestran el abuso de herramientas legítimas y recursos corporativos para maximizar el impacto de los ataques de ransomware

Kaspersky alertó sobre una serie de ataques de ransomware dirigidos contra organizaciones en Colombia y México, en los que los ciberdelincuentes recurrieron a una táctica poco habitual: utilizaron las impresoras corporativas de las propias víctimas para imprimir las notas de rescate, luego de cifrar sus sistemas con BitLocker. Los incidentes, investigados por expertos de Kaspersky Security Services entre mayo y junio de 2026, también evidenciaron el aprovechamiento de configuraciones incorrectas y otras debilidades en la infraestructura para comprometer las redes de las organizaciones.

Entre mayo y junio de 2026, expertos de Kaspersky Security Services investigaron una serie de incidentes de ransomware dirigidos contra organizaciones en Colombia y México. Los ataques involucraron configuraciones incorrectas, el cifrado mediante BitLocker y el uso indebido de impresoras corporativas para entregar las demandas de rescate.

En los casos analizados, los atacantes informaron a las organizaciones afectadas que su infraestructura había sido comprometida y que debían realizar un pago para recuperar el acceso a sus datos. La primera señal detectada por los usuarios fue la aparición de un ícono de candado junto a sus unidades en el Explorador de archivos de Windows, lo que indicaba que los sistemas habían sido cifrados con BitLocker y que los archivos ya no estaban disponibles.

Uno de los incidentes investigados ocurrió en Colombia, donde los atacantes lograron acceder a la red a través de un servicio de acceso remoto expuesto a internet, vinculado a un servidor conectado a un dispositivo de almacenamiento de 8 TB que contenía información crítica para la operación del negocio. Tras tomar el control del entorno y modificar las credenciales de los usuarios, los ciberdelincuentes utilizaron BitLocker para cifrar la unidad, en la que se almacenaba principalmente información financiera. 

Una vez bloqueado el acceso a los datos, aprovecharon las impresoras corporativas de la propia organización para imprimir las notas con las exigencias de rescate.
 
Nota de rescate distribuida por los ciberdelincuentes durante uno de los ataques

En otro de los incidentes, ocurrido en México, los expertos de Kaspersky identificaron que un grupo de atacantes que se hacía llamar "XEntry Team" obtuvo acceso inicial a la infraestructura a través de un servidor Microsoft SQL configurado de forma incorrecta, tras conseguir credenciales de acceso expuestas en código disponible públicamente. A partir de ese punto, los ciberdelincuentes lograron expandir su presencia más allá del entorno de la base de datos, deshabilitaron mecanismos de protección del servidor web y mantuvieron acceso persistente a la infraestructura de la organización durante varios meses antes de que la intrusión fuera detectada.

El incidente se hizo evidente para los empleados cuando sus equipos mostraron una pantalla azul con el mensaje "Hacked by XEntry Team", mientras que sus credenciales habituales dejaron de funcionar, impidiéndoles acceder a sus sistemas.

“Estos incidentes reflejan una tendencia cada vez más práctica en los ataques de ransomware", afirmó Eduardo Chavarro, Director del Equipo Global de Respuestas a Incidentes para Américas en Kaspersky. "En lugar de recurrir a malware sofisticado, los ciberdelincuentes están aprovechando servicios expuestos a internet, configuraciones deficientes y herramientas administrativas legítimas que ya existen dentro de las organizaciones para cifrar la información y presionar a las víctimas para que paguen el rescate. En algunos casos, incluso utilizan métodos como la impresión de notas de rescate para ejercer presión psicológica y reforzar el sentido de urgencia de sus exigencias. Para reducir el riesgo de este tipo de intrusiones, las organizaciones deben centralizar y proteger sus registros (logs), monitorear de cerca las alertas de seguridad e investigar de inmediato cualquier indicio de acceso no autorizado."

Aunque las notas de rescate analizadas no permiten confirmar de manera concluyente que ambos incidentes hayan sido perpetrados por el mismo grupo, las similitudes en el lenguaje utilizado, el método de entrega y el estilo de comunicación podrían indicar una posible relación entre ambos casos.
Para evitar este tipo de amenazas, los expertos de Kaspersky recomiendan:

-	Implementar una solución confiable como Kaspersky Next, que permite protección unificada en tiempo real, visibilidad de amenazas, investigación y las capacidades de respuesta de EDR y XDR.
-	Aplicar soluciones de ciberseguridad como Kaspersky Compromise Assessment, Managed Detection and Response e Incident Response, que ayudan a proteger contra ciberataques evasivos, investigar incidentes y proporcionar experiencia adicional si las empresas carecen de personal especializado en ciberseguridad.
-	Configurar el Protocolo de Escritorio Remoto (RDP) en estricta conformidad con las mejores prácticas de ciberseguridad para prevenir accesos no autorizados. Esto es especialmente crítico, dado que, según nuestro informe Global Report: Anatomy of a Cyber World, más del 13 % de los incidentes están relacionados con violaciones de políticas y errores de configuración, lo que confirma que este tipo de configuraciones incorrectas sigue representando un riesgo significativo.
-	Priorizar la implementación de políticas estrictas de control de aplicaciones y monitorear activamente el tráfico de red en busca de comunicaciones de comando y control (C2). Esto es especialmente crítico, dado que más del 20 % de los incidentes involucraron el uso indebido de herramientas de RMM (Remote Monitoring and Management) para la ejecución de ataques y estrategias de C2. El hecho de que los atacantes utilicen más de tres herramientas distintas para obtener el control en un solo incidente refuerza aún más la necesidad urgente de implementar estas medidas. 

Más detalles de este descubrimiento disponibles en Securelist.com.

![](https://raw.githubusercontent.com/itnewslat/assets/refs/heads/master/img/540x320/Grupo-Hackers-p.jpg)

<table style="height: 42px;" width="569">
<tbody>
<tr>
<td style="text-align: justify;"><sub><strong>Nuestras noticias también son publicadas a través de nuestra cuenta en Twitter <a href="https://twitter.com/itnewslat?lang=es">@ITNEWSLAT</a> y en la aplicación <a href="https://squidapp.co/en/">SQUID</a></strong></sub></td>
</tr>
</tbody>
</table>

<img src="https://tracker.metricool.com/c3po.jpg?hash=56f88a41e39ab42c063cc51676587a04"/>