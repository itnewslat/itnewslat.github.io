---
layout: posts
color-schema: red-dark
date: '2018-04-10 10:49 -0400'
published: true
title: 'MyFitnessPal: 150 millones de cuentas vulneradas'
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/myfitnesspalp.jpg
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/myfitnesspalg.jpg
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
El rastreador de fitness enormemente popular de Under Armour, MyFitnessPal , ha sido pirateado. Si usted es uno de los aproximadamente 150 millones de usuarios de la aplicación o sitio web, no se preocupe, pero cambie su contraseña.
Si usa Facebook para iniciar sesión en MyFitnessPal, no necesita cambiar su contraseña de Facebook.

Si usa su contraseña de MyFitnessPal en otros sitios web, cambie su contraseña en esos sitios web; elija una contraseña diferente y segura para cada uno (considere usar un administrador de contraseñas si eso le parece demasiado difícil).

Under Armour dice que notifica a los usuarios de MyFitnessPal sobre la violación. Es posible que los delincuentes intenten aprovecharse de esto mediante el envío de tweets o correos electrónicos maliciosos que parecen provenir de Under Armour.

Puede protegerse siendo proactivo: lea la notificación de Infracción de Under Armour y consulte las preguntas frecuentes sobre seguridad de la cuenta .

**No haga clic en enlaces en correos electrónicos**__ que parecen haber venido de Under Armour o MyFitnessPal. La compañía ha dejado claro que no enviará correos electrónicos con enlaces o archivos adjuntos sobre este tema:

Tenga en cuenta que el correo electrónico de MyFitnessPal sobre este tema no le solicita que haga clic en ningún enlace o que contenga archivos adjuntos y no solicita sus datos personales. Si el correo electrónico que recibió sobre este problema le solicita que haga clic en un enlace, le sugiere que descargue un archivo adjunto o le pide información, el mensaje de correo electrónico no fue enviado por MyFitnessPal.

Si necesita visitar MyFitnessPal use un marcador de navegador si tiene uno, abra su navegador y escriba la dirección: https://www.myfitnesspal.com/ si no lo hace, o simplemente use la aplicación en su teléfono.

**Las malas noticias**
El 29 de marzo de 2018, Under Armour comenzó a informar a los usuarios de MyFitnessPal que ha sufrido una violación de datos en algún momento durante el mes anterior:

_El 25 de marzo de 2018, nos dimos cuenta de que, durante febrero de este año, una parte no autorizada adquirió datos asociados con las cuentas de usuario de MyFitnessPal._

Los datos en riesgo son las credenciales utilizadas para acceder a las cuentas de MyFitnessPal:

_La información afectada incluía nombres de usuario, direcciones de correo electrónico y contraseñas hash, la mayoría con la función de hash llamada bcrypt utilizada para proteger las contraseñas._

Los datos afectados no incluyeron identificadores emitidos por el gobierno (como números de seguridad social y números de licencia de conducir) porque no recopilamos esa información de los usuarios. Los datos de la tarjeta de pago no se vieron afectados porque se recopilan y procesan por separado.

Por lo tanto, los delincuentes han tenido al menos un mes para enviar correos electrónicos de phishing específicos de MyFitnessPal, para descifrar los hashes de las contraseñas robadas y para probar las contraseñas rotas en otros servicios (como cuentas de redes sociales).

Es por eso que es importante que cambie su contraseña en su cuenta MyFitnessPal y en cualquier otra cuenta usando la misma contraseña, sin demora.

Dado que la información en riesgo se puede utilizar para iniciar sesión en su cuenta MyFitnessPal, todos los datos que ve cuando ingresa a su cuenta también están en riesgo.

MyFitnessPal es un rastreador de actividad física que conoce su nombre, dirección y edad, y realiza un seguimiento de su dieta y ejercicio. Los datos que pueden no parecer muy importantes (y perderlos ciertamente no son tan importantes como perder el control de, por ejemplo, sus datos bancarios), pero es el tipo de información que se puede usar para realizar ataques de ingeniería social, como el phishing. más convincente

**Las malas noticias**
Las personas, los procesos y el software son imperfectos y las playas pueden pasarle a cualquiera, incluso a las empresas que toman todas las precauciones razonables para evitarlas.

El daño causado por una violación es, en gran parte, una cuestión de qué tan bien se ha planificado y cómo se maneja cuando sucede.

No es raro que salgan a la luz más hechos en las semanas y meses posteriores a una infracción, sobre todo porque las empresas a menudo aún los están investigando cuando notifican por primera vez a los clientes.

**Con esa advertencia, Under Armour parece haber hecho mucho bien:**

- La brecha fue identificada razonablemente rápido.
- La notificación fue bastante rápida, clara y desaprovechada.
- Los datos afectados por la violación tienen un alcance limitado.
- La mayoría de las contraseñas parecen haber sido protegidas adecuadamente.
- El almacenamiento de contraseñas es particularmente importante: al mezclar sus contraseñas con bcrypt, MyFitnessPal le ha dado la oportunidad de luchar.


Los delincuentes no han obtenido su contraseña; tienen un hash de su contraseña que necesita ser descifrado.

Cracking cuesta dinero (porque toma tiempo y potencia de cálculo) y bcrypt está diseñado para hacer un clima muy pesado.

La resistencia que ofrece bcrypt depende de cómo esté configurada (en el número de iteraciones que utiliza) y Under Armour no haya proporcionado esa información.

Dean Pierce es un blogger que decidió tener algunos hashes de crack divertidos que se filtraron durante la violación de datos de Ashley Madison. Su experiencia es instructiva de lo bien que bcrypt puede defender su contraseña después de una violación si las iteraciones son marcadas.

Pierce se dispuso a crackear seis millones de hashes utilizando oclHashcat ejecutándose en una plataforma de minería bitcoin de $ 1.500 (una configuración muy eficiente para descifrar contraseñas).

Después de cinco días y tres horas de continuos crujidos numéricos, apagó su plataforma. Había descifrado solo 4,000 de las peores contraseñas.

Existe una buena posibilidad de que su contraseña de MyFitnessPal aún se desconozca, a pesar de que se filtró hace más de un mes, por lo que importa lo que haga hoy.

Cámbielo ahora y no solo está asegurando su cuenta, sino que también se está asegurando de que se desperdicie el tiempo y el dinero que los ladrones se han comprometido a descifrar.

Por Mark Stockley de Sophos
FUENTE [ITCONNECT.LAT](http://itconnect.lat/portal/myfitnesspal-150-millones-de-cuentas-vulneradas/)
