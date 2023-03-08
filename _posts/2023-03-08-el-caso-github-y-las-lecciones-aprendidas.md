---
layout: posts
color-schema: red-dark
date: '2023-03-08 06:04 -0500'
published: true
superNews: false
superArticle: false
year: '2023'
title: El Caso GitHub y las lecciones aprendidas
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/analisis-de-codigo-g.jpg
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/analisis-de-codigo-p.jpg
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
week: '10'
---
El incidente con la clave de firma de código robada de GitHub, sirve como un recordatorio acerca de la importancia de mantener seguras las claves de firma de código digital.
 
El 31 de enero, la popular plataforma de alojamiento de código GitHub informó que un usuario no autorizado obtuvo acceso a sus sistemas el 6 de diciembre de 2022 y robó tres certificados de firma de código encriptado (un certificado ID de desarrollador de Apple y dos certificados emitidos por DigiCert). Una vez detectado, GitHub revocó inmediatamente las credenciales no autorizadas. Poco después, la empresa anunció que, como precaución adicional, revocaría los certificados el 2 de febrero.
 

Los certificados de firma de código son una forma comprobada para que los desarrolladores de aplicaciones de software "firmen" su código para afirmar su origen y son fundamentales para generar confianza en la cadena de suministro de software. Los ataques de firma de código han aumentado en severidad y frecuencia, como se demostró con el incidente de Nvidia, el cual generó problemas de ciberseguridad que afectó sus recursos de TI. Poco después de descubrir el incidente, la compañía fortaleció su red, contrató a expertos en respuesta a incidentes de ciberseguridad y notificó a las autoridades.
 
Como proveedor líder de confianza digital, DigiCert brinda recomendaciones ante los recientes hechos y brinda orientación sobre cómo mantener seguras las claves de firma de código digital para ayudar a evitar que este tipo de incidentes vuelva a ocurrir:
 
**Aprendiendo de los errores **
 
Según GitHub, "el 6 de diciembre de 2022, los repositorios de nuestro Atom, escritorio y otras organizaciones obsoletas propiedad de GitHub, fueron clonadas por un token de acceso personal (PAT) comprometido, que está asociado con una cuenta de usuario máquina". La empresa revocó el acceso al usuario no autorizado el 7 de diciembre y luego descubrió que se habían robado tres certificados de firma de código de GitHub; sin embargo, no hay evidencia de que el atacante haya podido descifrar y usar los certificados. El primer certificado DigiCert expiró el 4 de enero y el segundo venció el 1 de febrero. Sin embargo, el certificado ID de desarrollador de Apple era válido hasta 2027 y, como tal, Apple está monitoreando cualquier archivo ejecutable firmado con el certificado.
 
**Las graves consecuencias de los certificados de firma de código robados**

Las consecuencias de una clave de firma de código robada pueden ser extremadamente dañinas para la reputación y los resultados de las empresas.
 
“El software malicioso firmado con una clave robada puede propagarse rápida y fácilmente, ya que es más probable que los usuarios confíen en el software que está firmado con una clave confiable. Esto puede dar lugar a infracciones de seguridad generalizadas, robo de datos e incluso daños a la infraestructura crítica”, afirmó Dean Coclin, director senior de desarrollo comercial en DigiCert.
 
“Las consecuencias de las claves de firma de código robadas significan problemas del mundo real; por lo tanto, cuando Estados Unidos emitió recientemente una orden ejecutiva para mejorar la seguridad cibernética de la nación, uno de los pasos clave incluidos fue el uso de la firma de código para garantizar la integridad del código”, agregó el ejecutivo.
 
En la investigación de GitHub encontró que "no había riesgo para los servicios de GitHub.com como resultado de este acceso no autorizado y no se realizaron cambios no autorizados en estos proyectos". Además, "los certificados estaban protegidos con contraseña y no tenemos evidencia de uso malicioso". GitHub dice que revocar los certificados es una medida preventiva, pero el daño podría haber sido mucho peor si los certificados no estuvieran encriptados y protegidos con contraseña.
 
**Protección de un certificado de firma de código y claves de firma de código**
 
Hay pasos que se pueden tomar para evitar que sigan sucediendo este tipo de incidentes en las empresas. En primer lugar, es fundamental que las organizaciones protejan y controlen el uso de sus claves de firma de código. Por lo tanto, el control y la visibilidad son clave para proteger las claves de firma de código (juego de palabras). La capacidad de hacer cumplir los derechos de firma, controlar quién tiene acceso a las claves de firma y generar informes que muestren quién firmó qué, cuándo y dónde proporciona un alto nivel de visibilidad y le permite abordar rápidamente cualquier problema que pueda surgir. Además, las claves deben almacenarse de forma segura para reducir la capacidad de los atacantes de robarlas. En el caso de GitHub, sus claves se cifraron, lo cual es una buena práctica. Sin embargo, también recomendamos almacenar las claves sin conexión y solo ponerlas en línea para firmar.
 
Además, una estrategia de rotación de claves es crucial para la seguridad de la firma de código. Confiar en una sola clave para firmar todo puede provocar interrupciones importantes si la clave se ve comprometida. Usar la misma clave para firmar muchos fragmentos de código diferentes será desastroso porque si la clave se ve comprometida y luego debe revocarse, todo el código firmado con esa clave quedará invalidado. Al implementar una estrategia de rotación de claves fuerte y frecuente, usar claves únicas y tener acceso a claves bajo demanda, puede limitar el daño de una brecha de seguridad.
 
Por último, aunque no está directamente relacionado con la protección de claves en sí, antes de firmar el código es importante realizar un análisis de virus para asegurarse de que el código esté libre de contenido malicioso. Esto proporcionará tranquilidad y ayudará a prevenir amenazas a la seguridad. El escaneo se puede realizar a nivel de código fuente (Pruebas de seguridad de aplicaciones estáticas o SAST) y en el software compilado (Pruebas de seguridad de aplicaciones dinámicas o DAST), y ambas son mejores prácticas. Estas medidas complementan la firma de código para ayudar a asegurar la cadena de suministro de software.
 
En conclusión, el incidente con la clave de firma de código robada de GitHub sirve como un recordatorio acerca de la importancia de mantener seguras las claves de firma de código digital. Al tomar las medidas necesarias para proteger las claves, puede evitar que ocurran incidentes similares y garantizar la seguridad y la confianza del software.

![](https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/analisis-de-codigo-p.jpg)

<table style="height: 42px;" width="569">
<tbody>
<tr>
<td style="text-align: justify;"><sub><strong>Nuestras noticias también son publicadas a través de nuestra cuenta en Twitter <a href="https://twitter.com/itnewslat?lang=es">@ITNEWSLAT</a> y en la aplicación <a href="https://squidapp.co/en/">SQUID</a></strong></sub></td>
</tr>
</tbody>
</table>
<img src="https://tracker.metricool.com/c3po.jpg?hash=56f88a41e39ab42c063cc51676587a04"/>