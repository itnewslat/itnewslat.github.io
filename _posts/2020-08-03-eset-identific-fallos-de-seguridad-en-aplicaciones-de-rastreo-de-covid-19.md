---
layout: posts
color-schema: red-dark
date: '2020-08-03 07:20 -0400'
published: true
superNews: false
superArticle: false
year: '2020'
title: ESET identificó fallos de seguridad en aplicaciones de rastreo de COVID 19
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Covid19-p.jpg
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/Covid19-g.jpg
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
week: '32'
---
**Tras analizar aplicaciones que utilizaban bases de datos Firebase, la compañía de seguridad informática, ESET, revela que algunas apps exponían datos privados de los usuarios.**

Las apps para el rastreo de contactos de COVID-19 -comúnmente llamadas “COVID trackers”-, fueron creadas con la intención de geolocalizar individuos que potencialmente fueran portadores del virus, buscando servir como herramientas de diagnóstico temprano y también como una fuente de estadísticas para los diversos gobiernos que las impulsaron. En este contexto, ESET, compañía líder en detección proactiva de amenazas, analizó las aplicaciones para Android más relevantes relacionadas al COVID-19 impulsadas por autoridades latinoamericanas.

ESET investigó 17 aplicaciones pertenecientes a autoridades gubernamentales de países como Argentina, Bolivia, Brasil, Chile, Colombia, Ecuador, Guatemala, México, Perú y Uruguay. Del total de aplicaciones analizadas -todas disponibles en la Play Store- 14 utilizaban Firebase Realtime Database para almacenar datos.
Se analizó la seguridad de las bases de datos de Firebase destinadas a almacenar la información de los usuarios, las cuales han sido utilizadas por varias apps de rastreo de contactos en distintos países, presentando en algunos casos errores en la configuración que afectaban a la seguridad y privacidad de los datos.

Desde el Laboratorio de Investigación de ESET se detectó que dos de estas apps de rastreo, ambas de Argentina e impulsadas por gobiernos provinciales y municipalidades locales, eran vulnerables a posibles ataques dado que se conectaban con bases de datos públicas para procesar datos privados de más de 6000 usuarios, como son nombres, apellidos, fechas de nacimiento, DNI, correos electrónicos, miles de puntos de geolocalización (algunos directamente asociados a un usuario puntual), números de teléfono, y datos de seguimiento médicos sobre los pacientes (si se les realizó un hisopado y si resultaron positivos), entre otra información. Cabe destacar que las vulnerabilidades mencionadas ya fueron reparadas antes publicar esta investigación.

Firebase, de Google, es una solución rápida para el almacenamiento de datos y el envío de mensajes en aplicaciones cliente-servidor. Los datos se guardan en formato JSON y pueden ser consultados o modificados a través de una API tipo REST. Aunque existen reglas que pueden configurarse en cascada para controlar el acceso a la información sensible, muchas veces estas reglas están mal definidas y permiten a un atacante recuperar los datos almacenados en diferentes niveles de la ruta de acceso.
 
Para saber cómo gestionar la seguridad en Realtime Database, ESET comparte el siguiente articulo: [AQUI](https://www.welivesecurity.com/la-es/2020/07/30/fallos-seguridad-apps-rastreo-covid-19-utilizan-firebase/)
 
Encontrar bases de datos vulnerables en desarrollos móviles no es nuevo. Un reporte publicado en mayo de 2020 por Comparitech encontró que un 4.8% de las apps que usan Google Firebase no están correctamente configuradas, pudiendo conducir a fugas de información. Los investigadores estimaron que un 0.83% de todas las apps publicadas en Google Play exponen datos sensibles a través de Firebase, lo que representaría aproximadamente un total de 24.000 aplicaciones vulnerables.
 
“La buena noticia es que este tipo de errores es completamente evitable. Solo debemos cerciorarnos de que entendemos cómo funciona la autenticación y autorización en la suite de Firebase, qué información queremos proteger y realizar testeos sobre nuestras bases de datos en producción para asegurarnos de que no son susceptibles de este tipo de ataques. En la documentación de la plataforma podremos encontrar mucha información sobre la forma correcta de configurar estos productos, como artículos sobre configuraciones inseguras o consejos de seguridad.”, menciona Denise Giusto Bilic, Analista de Seguridad Informática de ESET Latinoamérica. “Desde ESET apostamos a la educación como la medida más importante de prevención ante amenazas. Mantener los sistemas actualizados, cambiar las contraseñas con frecuencia, utilizar una solución de seguridad en equipos de escritorio y dispositivos móviles, son algunas de las acciones que nos permiten disfrutar de Internet de manera segura”.
 
En el contexto de aislamiento por el COVID-19, ESET comparte #MejorQuedateEnTuCasa, donde acerca protección para los dispositivos y contenidos que ayudan a aprovechar los días en casa y garantizar la seguridad de los más chicos mientras se divierten online. El mismo incluye: 90 días gratis de ESET INTERNET SECURITY para asegurar todos los dispositivos del hogar, una Guía de Teletrabajo, con buenas prácticas para trabajar desde el hogar sin riesgos, Academia ESET, para acceder a cursos online que ayudan a sacar el mayor provecho de la tecnología y Digipadres, para leer consejos sobre cómo acompañar y proteger a los niños en la Web.

Para conocer más sobre seguridad informática ingrese al portal de noticias de ESET: 

[AQUI](https://www.welivesecurity.com/la-es/2020/07/30/fallos-seguridad-apps-rastreo-covid-19-utilizan-firebase/)

<img src="https://tracker.metricool.com/c3po.jpg?hash=56f88a41e39ab42c063cc51676587a04"/>
