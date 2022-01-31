---
layout: posts
color-schema: red-dark
date: '2022-01-31 08:54 -0500'
published: true
superNews: false
superArticle: false
year: '2022'
title: >-
  Es necesario cumplir con los requerimientos de seguridad. Pero alcanzar esa
  meta es doloroso para las grandes empresas. ¿La solución? 
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/john-murray-g.jpg
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/john-murray-p.jpg
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
week: '5'
---
En una reciente llamada con un cliente cuya empresa está en Fortune 50, la conversación se centró rápidamente en los muchos desafíos tecnológicas que enfrenta una corporación como la suya.

Se trata de una organización extremadamente grande que emplea a más de 200.000 personas en todo el mundo.  No sólo eso, la tecnología en la que se basa más antigua, lo que complica la seguridad de todo.

Una parte de este problema está relacionada con la necesidad de cumplir con ciertas normas y reglamentos. Algunas de estas reglas incluyen adherirse a lo que son esencialmente mandatos de navegadores como Apple, Google, Microsoft y Mozilla.

**Cambios**
No se puede ignorar el hecho de que, en los últimos años, Apple y otros navegadores han exigido que todas las autoridades de certificación, incluida GlobalSign, reduzcan gradualmente el ciclo de vida de los certificados digitales. Todo en nombre, naturalmente, de una mayor seguridad.

Por ejemplo, en 2020, Apple anunció inesperadamente en una reunión de CA/Browser Forum en febrero que, contrariamente al procedimiento operativo de convocar a una votación con otros navegadores y autoridades de certificación (CA), implementaría una vida útil de certificado de 298 días en sus dispositivos. Mozila y Google pronto siguieron su ejemplo. Como resultado, a partir del 1 de septiembre de 2020, los navegadores y dispositivos Apple, Google y Mozilla comenzaron a mostrar errores para los nuevos certificados TLS que tienen una vida útil superior a 398 días.

Este año habrá más cambios. A partir del 1 de abril, los proveedores de CA que ofrezcan certificados de extensiones de correo de internet seguro/multipropósito (S/MIME) deberán reducir su vida útil a 825 días. 

Vale la pena señalar que los certificados S/MIME anteriormente no tenían un límite superior “duro” para ser de confianza pública, pero en la mayoría de los clientes de correo electrónica no se confiaba en nada con más de 1025 días. Pero incluso si emitió un certificado con más que eso, no fue una violación de la tienda raíz. Eso es lo realmente nuevo en las nuevas reglas de Apple: si emite algo con más de 825 días, “puede” tomarlo como una razón para eliminar el certificado raíz de su tienda. Ciertamente no quieres que eso suceda.


Además, los navegadores también tienen un punto de ciclos de vida de los certificados en el sentido de que, cuanto más tiempo los tenga, más vulnerables serán. Como resultado, podría ser mucho más fácil para ellos verse comprometidos. Esto podría deberse a que alguien simplemente se olvidó de revocarlos o que la persona que emitió los certificados dejó la empresa. Después de muchos incidentes, los navegadores presionaron para pasar a períodos de validez más cortos.

Obviamente, esto afecta a las CA, sin embargo, las que realmente se ven muy afectadas son las empresas como la de nuestro cliente de Fortune 50, que también deben mantenerse al día con los interminables cambios de reglas sobre los que literalmente no tienen control. Sin duda, las organizaciones más pequeñas y menos complejas también se verán afectadas, Sin embargo, al ser más pequeños, pueden ser más ágiles y capaces de adaptarse más rápidamente a los cambios de la industria. Sin embargo, hemos visto que también puede ser bastante disruptivo incluso para negocios pequeños y con menos experiencia en la gestión del ciclo de vida del certificado.

Pero para las empresas, es una tarea enorme, y debido a eso, el dolor será significativo. Será casi imposible reemplazar decenas, o incluso cientos de miles, de certificados en un marco de tiempo reducido, de manera regular. Y si los navegadores reducen aún más la vida útil de los certificados, será una carga aún mayor para las grandes organizaciones. Se suma el hecho de que hay personal limitado con un conocimiento profundo de la infraestructura de clave pública (PKI), la tecnología detrás de los certificados digitales.

Mis colegas que están cerca de la “política” en torno a los certificados me dicen que lo más probable es que el futuro nos traiga certificados de vida más corta, lo que exacerbará aún más los desafíos. Desde su punto de vista es necesario educar a los clientes sobre la necesidad de ser “ágiles”. Esto se está convirtiendo en un requisito, no en una opción. La rotación del material clave intermedio (ICA) para ciertos tipos de certificados ahora se realiza cada tres meses para algunas de nuestras soluciones. Como componente crítico de la cadena de confianza, deberá adaptarse para enviarlos fácilmente a su infraestructura.

Como dice la expresión: “Houston, tenemos un problema”. La única solución real para administrar este cambio constante para habilitar la “agilidad criptográfica es la automatización. 

**Aceptar la necesidad de automatización**
Sabemos que las empresas simplemente no pueden escalar lo suficiente para cumplir con estos requisitos. Es por eso que numerosas empresas ofrecen soluciones de automatización para ayudar a administrar los ciclos de vida de los certificados.

Desafortunadamente, todas las empresas deben aceptar la realidad de que estas herramientas son una necesidad absoluta. Porque sin ellos, experimentarán complicaciones derivados de problemas del ciclo de vida, como la caducidad de los certificados, cuyos resultados van desde la reducción de la confianza, una disminución de las ventas y los ingresos de una empresa con un aumento de los abonados de la cesta de la compra y una marca y reputación corporativas afectadas negativamente, poniendo el negocio en riesgo. 

Por ejemplo, el año pasado ocurrieron incidentes en Google Voice, Epic Games y Amex, cuando hubo in vencimiento de Google Play. Remontándonos a 2018, cuando los ciclos de vida eran mucho más largos que ahora, se produjeron vencimientos de certificados en LinkedIn, Pokemon Go, el Partido Conservador del Reino Unido e, incluso, en la Casa Blanca. Entonces, este es claramente un problema de larga data que no se limita a un tipo de empresa u organización. Está en todas partes y eso no cambiará a menos que se adopte un enfoque diferente. 

En 2022, asegúrese de que la automatización de certificados esté al inicio de su lista. Independientemente del proveedor que elija, usted y sus clientes estarán mejor a largo plazo. 

![](https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/john-murray-p.jpg)

<table style="height: 42px;" width="569">
<tbody>
<tr>
<td style="text-align: justify;"><sub><strong>Nuestras noticias también son publicadas a través de nuestra cuenta en Twitter <a href="https://twitter.com/itnewslat?lang=es">@ITNEWSLAT</a> y en la aplicación <a href="https://squidapp.co/en/">SQUID</a></strong></sub></td>
</tr>
</tbody>
</table>

<img src="https://tracker.metricool.com/c3po.jpg?hash=56f88a41e39ab42c063cc51676587a04"/>