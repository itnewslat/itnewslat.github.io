---
layout: posts
color-schema: red-dark
date: '2023-10-02 19:52 -0400'
published: true
superNews: false
superArticle: false
year: '2023'
title: Ataque de la “mano fantasma” acecha a usuarios de la banca móvil
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Ataque-usuario-p.jpg
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/Ataque-usuario-g.jpg
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
**La compañía alerta de Zanubis, un troyano bancario para Android que ha atacado a cerca de 40 aplicaciones de bancos y otras entidades financieras en Perú, por su alto potencial de convertirse en una amenaza para el resto de América Latina.**

Los investigadores de Kaspersky han informado reiteradamente sobre cómo los troyanos de acceso remoto (RATs) realizan ataques tipo 'mano fantasma' que permiten a los ciberdelincuentes realizar fraudes bancarios utilizando el smartphone de la víctima para burlar las defensas en la banca móvil. Este modelo de cibercrimen estuvo dominado por los troyanos brasileños hasta la aparición de Zanubis el año pasado. Con varios indicadores que sugieren que es de origen peruano, este malware ya lidera el ranking de intentos de ataque y representa casi el 50% de los bloqueos realizados por Kaspersky en ese país en lo que va del año.

Esta nueva amenaza financiera llamó la atención de los expertos de la compañía por su complejidad. Aunque el nivel técnico de Zanubis está a la par de los infames troyanos brasileños y emplea la misma táctica, sus objetivos se limitan a las apps de bancos e instituciones financieras con el fin de robar las credenciales de acceso y secuestrar los mensajes SMS enviados a la víctima por las instituciones bancarias.

El principal modo de infección de Zanubis ocurre cuando el usuario baja una aplicación maliciosa, la cual simula ser de una marca, empresa u organización legítima,  fuera de la tienda oficial. El malware revisa si es la primera vez que se ejecuta en el dispositivo y si cuenta con permisos para ingresar al Menú de Accesibilidad del teléfono. De lo contrario, es capaz de mostrar mensajes con alertas de “es necesario actualizar la app” para lograrlo. Es importante señalar que esta función está presente en todos los dispositivos Android, pues su objetivo es ayudar a personas con alguna discapacidad a configurar el teléfono con tecnologías de asistencia. Sin embargo, los ciberdelincuentes explotan esta herramienta legítima para manipular las aplicaciones en el equipo infectado con comandos remotos. Sin este acceso, Zanubis no podría llevar a cabo el fraude en las apps bancarias.

El malware también solicita ser la aplicación predeterminada para la validación de mensajes SMS. Esta configuración le permite robar los códigos de activación o verificación que las instituciones financieras envían a la víctima vía mensajes de texto. Es importante mencionar que cuando la amenaza intercepta uno de estos mensajes, el malware lo elimina para borrar evidencia del fraude.

Una vez en operación (con ejecución en segundo plano y permiso para operar otras apps), Zanubis muestra la página web legítima de la institución bancaria que utiliza el usuario para realizar pagos. Esta fase es notable ya que sirve para evitar que la persona sospeche que ha sido víctima de un ataque.

La estafa empieza cuando el troyano identifica que la víctima utiliza aplicaciones específicas – la lista está compuesta por 38 apps de instituciones financieras, así como las de Gmail y WhatsApp- estas últimas para robar o monitorear la información de sus víctimas. En esta etapa, Zanubis registra todos los textos digitados en el equipo y graba la pantalla con el fin de robar las credenciales de ingreso a las apps.

Según los expertos, el robo de dinero a través de las apps financieras o de la banca móvil se realiza cuando la víctima del dispositivo infectado no lo está utilizando, o no pueda hacerlo, ya que Zanubis puede bloquear el uso del teléfono mediante actualizaciones falsas de Android. La excepción es cuando el dueño del dispositivo infectado haya configurado la verificación biométrica para ingresar a sus cuentas. En este caso, el fraude se produce durante el segundo acceso a la aplicación bancaria para que el programa malicioso pueda forzar la verificación facial o mediante la huella digital. En ambos casos, el malware podría oscurecer la pantalla del teléfono infectado para imitar el bloqueo del teléfono y engañar a la víctima para que use el desbloqueo biométrico.

Aunque no se puede hacer una atribución definitiva con la información actualmente disponible, existen varios indicadores que sugieren que Zanubis es de origen peruano y que podría expandirse por la región. En primer lugar, el idioma utilizado por los desarrolladores es el español con un gran conocimiento de la jerga y frases comunes. Además, muestra gran afinidad por los bancos y entidades financieras peruanas, siendo estas apps su único objetivo por el momento. Otra señal inesperada es que mientras los expertos de Kaspersky realizaban el análisis de este malware, notaron varios envíos a la plataforma del VirusTotal. Según la telemetría, todas esas nuevas muestras enviadas aparecían provenir de un remitente en Perú.

“Desde el punto de vista técnico, este troyano peruano es tan avanzado como las amenazas creadas en Brasil, las cuales han dominado los ataques de fraude bancario en América Latina. Sin embargo, Zanubis se beneficia de su conocimiento del sistema financiero. Además de la lista de aplicaciones a las que el malware apunta para cometer fraudes, la amenaza ya representa el 45% de los troyanos bancarios bloqueados en Perú por las tecnologías de Kaspersky. En comparación, los troyanos brasileños representan alrededor del 25% de los intentos de infección que bloqueamos en el país. Aunque por el momento sus actividades están centradas en el Perú, la posibilidad de que se expanda o surja una amenaza similar en los países de la región es alta. Por eso, es importante que tanto los usuarios como las entidades financieras estén informados sobre cómo funciona”, explica Fabio Assolini, director del Equipo de Investigación y Análisis para América Latina en Kaspersky.

Para reducir el riesgo de infección, los usuarios deben:

- Instalar aplicaciones de fuentes confiables, idealmente desde las tiendas de aplicaciones oficiales.
- Verificar los permisos solicitados por las aplicaciones: si no corresponden con la tarea o propósito de la app significaría un grave peligro.
- Usar una solución de seguridad integral que le proteja contra software malicioso y sus acciones. Kaspersky Premium puede ayudar a evitar esas situaciones desagradables.
- No hacer clic en enlaces de correos electrónicos, redes sociales o mensajes SMS no deseados.
- No realizar el procedimiento de rooting del dispositivo que proporcionará a los ciberdelincuentes posibilidades ilimitadas.

En el caso de las organizaciones financieras, es importante que los equipos de seguridad cuenten con reportes de inteligencia de amenazas para mantenerse al tanto de las últimas tácticas que emplean los ciberdelincuentes contra el sector, lo que les permitirá tomar las medidas de seguridad adecuadas e informar a sus usuarios sobre la estafa y cómo protegerse. 

Para más información sobre Zanubis y leer el reporte de crimeware de Kaspersky, visita Securelist. 

![](https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Ataque-usuario-p.jpg)

<table style="height: 42px;" width="569">
<tbody>
<tr>
<td style="text-align: justify;"><sub><strong>Nuestras noticias también son publicadas a través de nuestra cuenta en Twitter <a href="https://twitter.com/itnewslat?lang=es">@ITNEWSLAT</a> y en la aplicación <a href="https://squidapp.co/en/">SQUID</a></strong></sub></td>
</tr>
</tbody>
</table>

<img src="https://tracker.metricool.com/c3po.jpg?hash=56f88a41e39ab42c063cc51676587a04"/>
