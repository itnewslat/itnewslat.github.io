---
layout: posts
color-schema: red-dark
date: '2018-04-18 12:37 -0400'
published: true
superNews: false
title: >-
  Millones de aplicaciones corren el riesgo de exponer datos personales debido a
  código creado por terceros   
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/mapamundi-p.jpg
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/mapamundi-g.jpg
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
Al analizar aplicaciones populares de citas amorosas, los investigadores de Kaspersky Lab descubrieron que algunas transmiten datos no cifrados de los usuarios con un protocolo HTTP inseguro, lo que crea el peligro de exponer los datos. Esto se debe a que algunas aplicaciones utilizan SDK publicitarios de terceros, que forman parte de muchas de las redes publicitarias más populares. Las aplicaciones involucradas incluyen algunas que han sido instaladas miles de millones de veces en todo el mundo, y un grave defecto de seguridad significa que los datos privados pueden ser interceptados, modificados y utilizados en futuros ataques, dejando así indefensos a muchos usuarios.

El SDK es un conjunto o kit de herramientas de programación, a menudo distribuidas de forma gratuita, que permite a los autores centrarse en los principales elementos de la aplicación, pero confiando otras funciones en los SDKs. Los programadores usan a menudo código de terceros para ahorrar tiempo, al reutilizar la funcionalidad existente para crear parte de la aplicación. Por ejemplo, los SDK publicitarios recopilan datos de los usuarios para mostrar anuncios pertinentes, lo que ayuda a los programadores a monetizar su producto. Los kits envían datos del usuario a los dominios de las redes publicitarias populares para una visualización de anuncios más específica.

Pero un análisis más profundo de las aplicaciones ha demostrado que estas envían los datos sin cifrarlos, y mediante HTTP, lo que significa que no están protegidos cuando viajan a los servidores. Debido a la ausencia de cifrado, los datos pueden ser interceptados por cualquiera, ya sea a través de Wi-Fi sin protección, por un proveedor de servicios de Internet o mediante malware en un enrutador doméstico. Peor aún, los datos interceptados también pueden modificarse, lo que significa que la aplicación mostrará anuncios maliciosos en lugar de anuncios legítimos. Luego, los usuarios se verán tentados a bajar una aplicación promocionada, que se convertirá en malware y los pondrá en peligro.

Los investigadores de Kaspersky Lab han examinado los registros y el tráfico de red de las aplicaciones en el Sandbox interno de Android para descubrir qué aplicaciones transmiten datos no cifrados de los usuarios a las redes a través de HTTP. Identificaron una serie de dominios principales, la mayoría de ellos parte de redes publicitarias populares. El número de aplicaciones que utilizan estos SDKs asciende a varios millones, y la mayoría de ellas transmiten al menos uno de los siguientes datos de forma no cifrada:

Información personal, principalmente el nombre del usuario, edad y sexo. Incluso puede incluir los ingresos del usuario. Su número de teléfono y su dirección de correo electrónico podrían filtrarse también, ya que la gente comparte mucha información personal en aplicaciones de citas amorosas, según otro estudio de Kaspersky Lab. 