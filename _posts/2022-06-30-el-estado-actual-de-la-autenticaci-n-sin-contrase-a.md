---
layout: posts
color-schema: red-dark
date: '2022-06-30 05:48 -0500'
published: true
superNews: false
superArticle: false
year: '2022'
title: El estado actual de la autenticación sin contraseña
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/Autenticacion-g.jpg
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Autenticacion-p.jpg
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
week: '26'
---
La gestión de contraseñas siempre ha sido un desafío para las empresas y supone una enorme responsabilidad para los usuarios habituales que se enfrentan a cientos de contraseñas en su vida digital todos los días. 

La idea de un futuro "sin contraseña" parece música para los oídos de todos, ¿verdad? ¡Por supuesto! Pero antes de saltar y convertirnos en 100 % sin contraseña, desmitifiquemos lo que eso significa y las opciones y los desafíos que pueden enfrentar las empresas.
 
¿Qué significa sin contraseña? Muchas de las aplicaciones de su dispositivo móvil ofrecen un inicio de sesión opcional con su huella digital; si acepta, está iniciando sesión con autenticación sin contraseña. Si tiene habilitado Windows Hello en su computadora portátil, puede que le resulte conveniente iniciar sesión con el reconocimiento facial, ¿verdad? Esa es la autenticación sin contraseña. Cada vez que tiene una forma alternativa de iniciar sesión que no requiere una contraseña, está utilizando un método sin contraseña. Sin embargo, hay un par de observaciones interesantes a tener en cuenta sobre este concepto:
Sin contraseña no significa necesariamente que está eliminando la contraseña, solo tiene una experiencia de usuario sin contraseña. Si su método de autenticación alternativo (como el reconocimiento facial) falla, la contraseña seguirá estando allí.
 
Los métodos sin contraseña utilizados en su teléfono y computadora portátil no son interoperables. Si inicia sesión en su aplicación de banca móvil con su huella digital y ahora necesita acceder a ella a través de su computadora portátil, deberá proporcionar su contraseña.
El hecho es que las contraseñas no desaparecerán pronto. Los sitios web, las suscripciones de transmisión, su computadora portátil, la tarjeta bancaria y el sitio web bancario utilizan contraseñas, cada una con diferentes requisitos, como la longitud o una combinación específica de caracteres.
 
¿Pasos para cambiar a la experiencia sin contraseña? Si su empresa está intentando cambiar a una experiencia sin contraseña, existen algunas opciones, pero es posible que solo cubran una parte de sus necesidades. La primera opción es usar SAML (Security Assertion Markup Language), un protocolo basado en XML que permite que las aplicaciones en la nube creen una relación de confianza con un proveedor de identidad o SAML IdP. Dentro de esa confianza, cada vez que desee acceder a una aplicación en la nube como Salesforce, lo redirigirá a un proveedor de identidad para la autenticación. Los beneficios para una empresa son enormes y permiten a los empleados utilizar un método de inicio de sesión único en esas aplicaciones en la nube a través de una experiencia completamente sin contraseña. Deberá iniciar sesión una vez en el proveedor de identidad, pero obtendrá acceso a todas las aplicaciones configuradas, lo que eliminará la necesidad de contraseñas una vez que lo haga. Solo tiene que usar un método MFA confiable para iniciar sesión en el proveedor de identidad. MFA tiene la llave del castillo. La segunda opción es adoptar un dispositivo FIDO2 que pueda brindarle una experiencia sin contraseña. La Alianza FIDO creó especificaciones para crear un método sin contraseña para iniciar sesión en sitios web y aplicaciones. Por lo general, requiere un token de hardware que utiliza un determinado método de conexión (USB, Bluetooth, NFC, etc.) para autenticarse en una aplicación habilitada para FIDO2. Como el ejemplo de reconocimiento facial de Windows Hello; Los dispositivos FIDO2 también se pueden usar para iniciar sesión en su computadora sin usar una contraseña. Es un método excelente y totalmente seguro. Aún así, presenta barreras como aplicaciones de soporte limitado y la necesidad de métodos de autenticación de respaldo en caso de que olvide o pierda su token. Sin mencionar la barrera del costo: los dispositivos FIDO2 pueden ser bastante caros. 
 
Una implementación sin contraseña debe tener en cuenta la experiencia del usuario además de la seguridad. Por ejemplo, no debe eliminar la contraseña si planea mantener un método 1FA para autenticarse. Las OTP de SMS, por ejemplo, son notoriamente inseguras; convertirlos en su única forma de autenticación es un gran error. Cuando se usa sólo la autenticación basada en inserción, sin un método adicional, los atacantes aún pueden usar el bombardeo MFA para obligar a los usuarios a aceptar una inserción si el proceso MFA en sí no está protegido. 

Finalmente, veo que muchas personas cuestionan la necesidad de un administrador de contraseñas si Passwordless es la nueva tendencia. Las contraseñas no desaparecerán pronto y es casi imposible tener contraseñas diferentes y complejas para cada aplicación. Un administrador de contraseñas es una excelente manera de educar a los usuarios y mitigar los problemas con las bases de datos de la DarkWeb difíciles de descifrar mientras ofrece a los usuarios una experiencia sin contraseña. Inicie sesión en su administrador de contraseñas con MFA y deje que inicie el sitio web e inicie sesión automáticamente.
 
Ver más: Superar los desafíos de seguridad en evolución con la autenticación biométrica
 
Aquí hay algunos puntos clave y sugerencias basadas en el estado actual de la autenticación sin contraseña:


"Sin contraseña" significa que el usuario no está ingresando una contraseña; no significa que la contraseña ya no exista.
Las contraseñas no van a ninguna parte, por lo que deberá encontrar mejores formas de administrar y mitigar cualquier problema que surja en el camino.
SAML es una excelente manera de proporcionar acceso SSO sin contraseña a aplicaciones en la nube protegidas para aplicaciones empresariales en la nube.
Los tokens FIDO2 pueden brindar una excelente experiencia de usuario y seguridad para los inicios de sesión en la computadora, pero generalmente a un precio más alto.
Un administrador de contraseñas puede brindar a los usuarios una experiencia sin contraseña para las aplicaciones que no admiten MFA de forma nativa mientras mitiga múltiples problemas relacionados con las credenciales.
 
Como puede ver, dependiendo de lo que intente lograr, un método completamente sin contraseña podría ser el mejor curso de acción. Todavía no existe un estándar claro para la autenticación sin contraseña que pueda interoperar con múltiples dispositivos y aplicaciones. Necesitará un token de hardware muy costoso, similar a una navaja suiza, para tener experiencias similares con su computadora portátil y dispositivo móvil, pero solo para algunas aplicaciones. 
Supongamos que inicia sesión en su computadora todos los días usando el reconocimiento facial con Windows Hello; el inicio de sesión de Windows Hello no se puede usar para acceder a la mayoría de los sitios web a los que accede todos los días. 
Cada sitio web tiene su método de inicio de sesión. En unos años, FIDO2 podría convertirse en el estándar de facto para Passwordless, pero por ahora. su uso es todavía muy limitado. Mi recomendación, como siempre, es identificar las aplicaciones más críticas que intenta proteger y qué métodos sin contraseña se pueden aplicar a cada una. 
 
Tenga en cuenta la experiencia del usuario, pero no se olvide de la seguridad o los costos de administración. La consigna será: ¿Cuáles son los factores clave que su organización debe considerar antes de adoptar un enfoque e implementación de autenticación sin contraseña? 


**Autor: Alexandre Cagnoni** Director de Autenticación de WatchGuard Technologies


![](https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Autenticacion-p.jpg)

<table style="height: 42px;" width="569">
<tbody>
<tr>
<td style="text-align: justify;"><sub><strong>Nuestras noticias también son publicadas a través de nuestra cuenta en Twitter <a href="https://twitter.com/itnewslat?lang=es">@ITNEWSLAT</a> y en la aplicación <a href="https://squidapp.co/en/">SQUID</a></strong></sub></td>
</tr>
</tbody>
</table>

<img src="https://tracker.metricool.com/c3po.jpg?hash=56f88a41e39ab42c063cc51676587a04"/>