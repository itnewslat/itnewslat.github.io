---
layout: posts
color-schema: red-dark
date: '2020-07-06 09:32 -0400'
published: true
superNews: false
superArticle: false
year: '2020'
title: >-
  Ciberdelincuentes utilizan conocido servicio de analítica web para robar los
  datos de pago de usuarios
week: '28'
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Ataque-DDOS-p.jpg
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/Ataque-DDOS-g.jpg
categories:
  - Venezuela
  - Colombia
  - Argentina
  - Perú
  - Ecuador
  - Chile
  - Panama
tags:
  - Seguridad
---
**Varias páginas web se han visto afectadas por esta técnica en todo el mundo, incluyendo en América Latina**

Los investigadores de Kaspersky han descubierto una nueva técnica utilizada para robar los datos de pago de los usuarios en las tiendas en línea mediante web skimming. Al registrarse en las cuentas de Google Analytics e introducir el código de seguimiento en el código fuente de las páginas web, los ciberdelincuentes obtienen los datos de las tarjetas de crédito de los clientes. Más de 20 tiendas en línea de todo el mundo se han visto afectadas por esta práctica.

Web skimming es un método utilizado habitualmente por los ciberdelincuentes para robar los datos de las tarjetas de crédito de los consumidores en las páginas web de las tiendas en línea, mediante el cual los atacantes introducen fragmentos de código en el código fuente de la página web. Este código fraudulento reúne los datos introducidos por los usuarios que visitan la página web (es decir, los números de acceso a las cuentas de pago o a las tarjetas de crédito) y envía los detalles recopilados a la dirección especificada por los ciberdelincuentes en el código falso. Con frecuencia, con el objetivo de ocultar que la página web ha sido vulnerada, los atacantes registran dominios con nombres que se asemejan a los servicios de análisis web más conocidos, como Google Analytics. De esta forma, cuando introducen el código falso, al administrador de la página le resulta más difícil saber que ha sido comprometida. Así, por ejemplo, es fácil confundir un sitio llamado "googlc-analytics[.]com" con el dominio legítimo.

Sin embargo, los investigadores de Kaspersky han descubierto recientemente una técnica desconocida hasta ahora para realizar ataques de web skimming. En lugar de redirigir los datos a otras fuentes, los reconducen a cuentas oficiales de Google Analytics. Una vez que los atacantes registran sus cuentas en Google Analytics, solo tienen que configurar los parámetros de seguimiento de las cuentas para recibir una identificación de rastreo. A continuación, introducen el código fraudulento junto con la identificación de seguimiento en el código fuente de la página web, lo que les permite recopilar datos sobre los usuarios y enviarlos directamente a sus cuentas de Google Analytics. 

Como los datos no se dirigen a un recurso desconocido, es complicado que los administradores se den cuenta de que la página ha sido atacada. En el caso de aquellos que examinan el código fuente, es como si la página estuviera conectada a una cuenta oficial de Google Analytics, una costumbre habitual en las tiendas en línea. 

Para que esta actividad delictiva sea más difícil de detectar, los ciberdelincuentes emplean también una técnica común de lucha contra la depuración: en caso de que el administrador de la página web revise el código fuente de la misma utilizando el modo de desarrollo, el código ilícito no se ejecutará.

Más de 20 páginas web se han visto afectadas por esta técnica, incluyendo tiendas en Europa, Norteamérica y Latinoamérica.

"Se trata de una práctica que no habíamos observado antes, y que resulta sumamente eficaz, ya que Google Analytics es uno de los servicios de análisis web más importantes que existen. La gran mayoría de los desarrolladores y de los usuarios confían en él, por lo que los administradores de la página web le suelen dar permiso para recopilar datos de los usuarios. De este modo, resulta fácil pasar por alto las operaciones maliciosas que contienen cuentas de Google Analytics. Por regla general, los administradores no deben asumir que, simplemente porque el recurso de terceros sea legítimo, su presencia en el código es correcta", afirma Victoria Vlasova, analista principal de malware de Kaspersky. 

Kaspersky ha informado a Google del problema, y la compañía ya está dedicando recursos a detectar el spam.
Para mantenerse a salvo del web skimming, Kaspersky recomienda lo siguiente:  

- Utilizar una solución de seguridad de confianza como Kaspersky Security Cloud, que puede detectar y bloquear la ejecución de scripts maliciosos o inhabilitar completamente Google Analytics a través de la función de Navegador seguro.

<img src="https://tracker.metricool.com/c3po.jpg?hash=56f88a41e39ab42c063cc51676587a04"/>