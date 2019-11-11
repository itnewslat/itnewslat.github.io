---
layout: posts
color-schema: red-dark
date: '2019-11-11 10:48 -0400'
published: true
superNews: false
superArticle: false
year: '2019'
title: Cinco vulnerabilidades que todo usuario de red móvil puede enfrentar
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Usuario-5G-p.jpg
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/Usuario-5G-g.jpg
categories:
  - Venezuela
  - Colombia
  - Argentina
  - Perú
  - Ecuador
  - Chile
  - Panama
tags:
  - Movilidad
week: '46'
---
Internet móvil transformó el modo como la sociedad vive, y, con la llegada de la quinta generación, los cambios serán aún más impactantes, con avances económicos, sociales y culturales profundos para todo el mundo. Antes del 2025, GSMA, asociación global de las operadoras móviles, espera que el 53% de todas las redes operen con la tecnología 4G y que el 14% actúen con la tecnología 5G.

Para Positive Technologies, compañía global de seguridad cibernética, esta evolución también trae preocupaciones en términos de seguridad. Para suministrarles a los consumidores las velocidades y servicios más rápidos, las operadoras móviles gastaron mil millones en la actualización de la infraestructura de un protocolo desarrollado en los años 70 (SS7) para Diameter, en el cual 4G y 5G operan. 

Estos protocolos son responsables del funcionamiento de las redes, sirven como un sistema de autenticación y punto de interconexión entre dos operadoras, y suministran un lenguaje que permite intercambio de llamadas, mensajes de textos y datos. Según Giovani Henrique, director general de la empresa para América Latina, el problema es que SS7 fue proyectado cuando la seguridad no era una preocupación urgente, y las redes están repletas de fallas de seguridad. “Todas las evidencias sugieren que estas cuestiones tampoco fueron resueltas en Diameter”, alerta.

Para el ejecutivo, al aprovechar estas lagunas de seguridad, los invasores pueden escuchar llamadas telefónicas, rastrear suscriptores y cometer fraudes y robos. “Además de esto, los usuarios de 4G están ampliamente conectados a las redes de la generación anterior, ya que la mayoría de las operadoras móviles usa la tecnología 4G solamente para acceso a Internet, mientras los servicios de SMS y voz permanecen en 3G”, explica.

Ante este escenario, Positive Technologies realizó diversas investigaciones y pruebas de infraestructura de operadoras que utilizan Diameter. La compañía, entonces, listó las cinco principales áreas de vulnerabilidad de las cuales las operadoras móviles deben tener conocimiento y tener en consideración: 

- **Divulgación de informaciones del suscriptor**: la divulgación de informaciones de usuarios puede ser iniciada en el 100% de las redes que usan el protocolo Diameter.  En estos casos, los invasores pueden robar informaciones de un suscriptor móvil y rastrear a una persona por medio de los datos de localización;
- **Divulgación de informaciones de la red**: el 75% de las redes móviles probadas por Positive Technologies permiten la divulgación de informaciones sobre la red de la operadora. Entre los mensajes de señalización de Diameter que suministran estos datos, algunos exigen verificaciones adicionales para ejecutar el filtrado correcto. Muchas veces, es necesario tener en consideración la localización del suscriptor y el intervalo de tiempo entre los mensajes recibidos por la red para, por medio de una tabla dinámica, realizar la comparación e identificar si algún mensaje es una amenaza real o no;
- **Interceptación de tráfico del suscriptor**: es posible interceptar SMSs en redes 4G, no obstante, la mayoría de los dispositivos de suscriptor cambia para el modo 3G (donde SS7 es usado) cuando los SMS están siendo transmitidos. En las redes SS7, es posible interceptar nueve en cada diez SMSs, lo que significa que esto también es válido para la configuración de la mayoría de las redes 4G;
- **Fraude**: el 33% de la infraestructura probada por Positive Technologies corre el riesgo de fraudes como encaminamiento ilegal de llamadas, explotación de USSD, consultas, manipulación de SMS y modificación del perfil del suscriptor;
- **Negación de servicio**: los ataques de negación de servicio también pueden suceder contra todas las redes que usan Diameter. Estos ataques permiten que los hackers disminuyan la conexión con Internet del consumidor o impidan su funcionamiento.

Henrique recomienda que las operadoras adopten un enfoque integrado a la seguridad para proteger las redes de señalización de Diameter. “Es necesario un análisis regular de la seguridad de la red móvil para identificar vulnerabilidades, evaluar el nivel de robustez y riesgos, desarrollar medidas y verificar su eficacia. También es importante mantener las configuraciones actualizadas”, explica.

Además de esto, el ejecutivo destaca que es necesario monitorear los mensajes de señalización que cruzan los límites de la red para garantizar la detección de actividades ilegítimas y la respuesta a las amenazas. “Sistemas de detección de ataques permiten que el tráfico de señalización sea analizado en tiempo real y que las informaciones sobre incidentes sean retransmitidas para sistemas de protección adicionales”, explica. “La seguridad es un proceso continuo y de largo plazo. A medida que la tecnología móvil se difunde, las apuestas en seguridad deben aumentar”, finaliza.