---
layout: posts
color-schema: red-dark
date: '2023-02-03 06:27 -0500'
published: true
superNews: false
superArticle: false
year: '2023'
title: >-
  Tocar para pagar, insertar para robar: Kaspersky detecta estafa para
  transacciones de aproximación por cibercriminales brasileños
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/Estafas-digitales-g.jpg
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Estafas-digitales-p.jpg
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
week: '05'
---
Kaspersky ha descubierto tres nuevas variantes del malware Prilex, responsable de fraudes con tarjetas de crédito y considerado por los expertos de la compañía como la amenaza más avanzada para los puntos de venta (PDV). El principal hallazgo de la nueva investigación revela que las modificaciones recientes convierten a Prilex en el primer malware del mundo capaz de bloquear pagos de aproximación (a través de NFC) en dispositivos infectados. Al impedir tal transacción, el consumidor se ve obligado a utilizar la tarjeta de crédito física, lo que permite la transacción tipo “FANTASMA”, expuesta por Kaspersky el año pasado.

Prilex es un notorio agente de amenazas brasileño que evolucionó gradualmente a partir de un malware enfocado en los cajeros automáticos (ATMs) hasta convertirlo en un malware de punto de venta modular único. Como fue descrito por Kaspersky anteriormente en 2022, el grupo Prilex realiza los llamados ataques "FANTASMA” que les permite realizar fraudes con tarjetas de crédito, incluso cuando las tarjetas están protegidas con la tecnología CHIP y PIN, supuestamente inviolable. Ahora, Prilex ha ido aún más lejos.

Recientemente, durante la respuesta a un incidente con un cliente afectado por Prilex, los investigadores de Kaspersky descubrieron tres nuevas modificaciones que pueden bloquear las transacciones de pago sin contacto, las cuales se han vuelto extremadamente populares durante y después de la pandemia.
 
Los sistemas de pago sin contacto, como tarjetas de crédito y débito, llaveros y otros dispositivos inteligentes, incluidos los dispositivos móviles, han incluido tradicionalmente identificación por radiofrecuencia (RFID). Más recientemente, Samsung Pay, Apple Pay, Google Pay, Fitbit Pay y las aplicaciones bancarias móviles han implementado tecnologías de comunicación de campo cercano (NFC) para respaldar transacciones seguras sin contacto.
 
Las tarjetas de crédito sin contacto ofrecen una forma cómoda y segura de realizar pagos sin necesidad de tocar, insertar o deslizar físicamente la tarjeta. Sin embargo, Prilex ha aprendido a bloquear tales transacciones mediante la implementación de un archivo que se basa en reglas y especifica si capturar o no la información de la tarjeta de crédito, así como una opción para bloquear transacciones basadas en NFC.

https://lh5.googleusercontent.com/ZZQiC3h1XyUWnXz1pREYCTHyQN05SxO7adobFu0wkYrN-bWadGAahoxKCoAH1QSf76ydMqePwNpSyFNWuWUm7XF2zaiuyl9BVGOEzW9WkWSzyuM0amn-FTrREqqTBzlVudZ4QszBApTPjxL7ar6Red192M0oasTpv6EEVYUmqoxTwfaTbLQXK6wtNEb22Q

Extracto del archivo de reglas de Prilex que hace referencia al bloqueo de NFC
 
Debido a que las transacciones basadas en NFC generan un número de tarjeta único que es válido para una sola transacción, Prilex aprovecha ese detalle para detectar este tipo de transacción y la bloquea. Después del bloqueo, el teclado PIN del PDV mostrará el siguiente mensaje: “Error de aproximación. Inserte la tarjeta”.

El objetivo de los ciberdelincuentes es obligar a la víctima a usar su tarjeta física insertándola en el lector de PIN, para que el malware pueda capturar los datos provenientes de la transacción, utilizando todas las formas disponibles para Prilex, como manipular criptogramas para realizar ataques FANTASMA. Otra nueva característica agregada a las últimas muestras de Prilex es la posibilidad de filtrar las tarjetas de crédito según su segmento y crear diferentes reglas para diferentes segmentos. Por ejemplo, pueden bloquear NFC y capturar datos de la tarjeta, solo si la tarjeta es Black/Infinite, Corporate u otra que tenga un límite de transacción alto, lo que es mucho más atractivo que las tarjetas de crédito regulares, con saldo/límite bajo.

“Los pagos sin contacto ahora son parte de nuestra vida cotidiana y las estadísticas muestran que el segmento minorista dominó el mercado con más del 59 por ciento de participación en los ingresos globales sin contacto en 2021. Tales transacciones son extremadamente convenientes y particularmente seguras, por lo cual es lógico que los ciberdelincuentes creen malware para bloquear los sistemas relacionados con NFC. Como los datos de la transacción que se generan durante el pago sin contacto son inútiles desde la perspectiva de un ciberdelincuente, es comprensible que Prilex necesite evitar ese pago sin contacto para obligar así a las víctimas a insertar la tarjeta en la terminal de PDV infectada”, comenta Fabio Assolini, director del Equipo investigación y análisis para América Latina en Kaspersky.

Prilex ha estado operando en la región latinoamericana desde 2014 y se supone que está detrás de uno de los ataques más grandes efectuados en la región. Durante el carnaval de Río en 2016, este agente capturó más de 28,000 tarjetas de crédito y vació más de 1,000 cajeros automáticos de un banco brasileño. Ahora, ha ampliado sus ataques a escala mundial. Se detectó en Alemania en 2019 cuando una banda criminal cometió fraude con tarjetas de débito Mastercard emitidas por el banco alemán OLB y extrajo más de 1,5 millones de euros de unos 2,000 clientes. En cuanto a las modificaciones descubiertas recientemente, estas se han detectado en Brasil, pero también pueden extenderse a otros países y regiones.
 
Lea más sobre las nuevas modificaciones del malware para PDV Prilex en Securelist.

**Para protegerse contra Prilex, Kaspersky recomienda:**

- Utilice una solución de varios niveles que ofrezca una selección óptima de capas protectoras para proporcionar el mejor nivel de seguridad posible en dispositivos de diferentes potencias y escenarios de implementación.
- Implemente Kaspersky SDK en los módulos de PDV para evitar que el código malicioso altere las transacciones que manejan esos módulos.
- Proteja los sistemas más antiguos con una protección actualizada, de manera que estén optimizados para ejecutar con funcionalidad completa las versiones anteriores de Windows y la suite más reciente de Microsoft. Esto garantiza que su empresa contará con un soporte total para las familias de MS más antiguas en el futuro previsible y le brinda la oportunidad de actualizarse cuando lo necesite.
- Instale una solución de seguridad, como Kaspersky Embedded Systems Security, que proteja los dispositivos contra diferentes vectores de ataque. Si el dispositivo tiene especificaciones extremadamente bajas para el sistema, esa solución de Kaspersky le protegería con un escenario de Denegación predeterminada.
- Para las instituciones financieras que son víctimas de este tipo de fraude, Kaspersky recomienda el Threat Attribution Engine, que ayuda a los equipos de IR a buscar y detectar archivos de Prilex en los entornos atacados.

![](https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Estafas-digitales-p.jpg)

<table style="height: 42px;" width="569">
<tbody>
<tr>
<td style="text-align: justify;"><sub><strong>Nuestras noticias también son publicadas a través de nuestra cuenta en Twitter <a href="https://twitter.com/itnewslat?lang=es">@ITNEWSLAT</a> y en la aplicación <a href="https://squidapp.co/en/">SQUID</a></strong></sub></td>
</tr>
</tbody>
</table>

<img src="https://tracker.metricool.com/c3po.jpg?hash=56f88a41e39ab42c063cc51676587a04"/>