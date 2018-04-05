---
layout: posts
color-schema: red-dark
date: '2018-04-05 10:14 -0400'
published: true
title: 'Memcached, el ataque DDoS de moda'
detail-image: 'http://www.ciberespacio.com.ve/wp-content/uploads/2018/04/Datos.jpg'
tags:
  - Seguridad
categories:
  - Venezuela
  - Colombia
  - Argentina
  - Perú
  - Ecuador
  - Chile
---
Los ataques de denegación de servicio (DDoS por sus siglas en inglés) han crecido en popularidad y efectividad y con ellos, los ciberdelincuentes han logrado poner en jaque la seguridad de Internet. Marzo comenzó con el ataque DDoS más potente de la historia: 1,35 terabits por segundo de tráfico dirigido a GitHub, una plataforma web de proyectos de desarrollo colaborativos. 
 
Sin embargo, tan sólo unos días más tarde, una nueva amenaza detectada y mitigada por Arbor Networks superó el récord, registrando un pico de tráfico de 1,7 Tbps. A diferencia del ataque DDoS que sufrió Dyn a finales de 2016, estos recientes ataques de denegación utilizaron un método cada vez más popular entre los ciberdelincuentes que no requiere de botnets: aprovechar la vulnerabilidad de miles de servidores Memcached mal configurados expuestos en Internet para amplificar los ataques.

### Ataques a golpe de récord

Memcached hoy es el arma de moda entre los cibercriminales para realizar sus ataques DDoS. Se trata de un sistema de almacenamiento en caché de datos y objetos en la memoria destinado a agilizar las aplicaciones web, que reduce la carga de datos y aumenta la velocidad de acceso, comentó Roxana Hernández, Country Partner de Panda Security para Colombia, Ecuador y Venezuela. 
 
En las últimas dos semanas del mes de marzo, los ciberdelincuentes intensificaron sus esfuerzos para explotar una vulnerabilidad en el protocolo de Memcached con el fin de crear ataques de amplificación récord. Pero, ¿en qué consiste realmente esta vulnerabilidad?
 
Alrededor de 100.000 servidores de Memcached están expuestos en la red sin ninguna protección de autenticación, por lo que cualquier ciberdelincuente puede acceder a ellos y enviarles grandes volúmenes de datos para saturar los servidores y maximizar sus índices de respuesta, pues en este tipo de ataques la intención es hacer uso de estos servidores no protegidos para amplificar el daño contra un objetivo. 
 
Generalmente, en estos ataques, los ciberdelincuentes falsifican la dirección IP de su víctima y envían múltiples paquetes de datos a servidores Memcached, los cuales están diseñados para ofrecer una respuesta mucho mayor. El resultado: el sistema responde devolviendo miles de veces los datos de las solicitudes a la víctima. Con grandes cantidades de datos enviados por segundo – se calcula que en torno a 10 paquetes de datos cada segundo – el servidor Memcached amplifica considerablemente el volumen de datos que pueden enviarse contra un objetivo. Por eso, si el sistema carece de un filtro adecuado que permita una gestión eficaz de la red, la enorme oleada de datos puede dejar fuera de servicio a algunos proveedores de Internet.
 
Al contrario de otras amenazas DDoS como la que atacó Dyn, la ejecución de los ataques de denegación de Memcached es relativamente sencilla, ya que no se necesita una botnet de cientos de dispositivos infectados con malware para generar la cantidad de tráfico capaz de paralizar un sistema o red. La facilidad para llevar a cabo este tipo de ataques, unido a la existencia de miles de servidores Memcached vulnerables disponibles en Internet, convierte esta amenaza en un importante vector de ataque a resolver.

### ¿Cómo estar preparados para mitigar estos ataques?

Algunos expertos señalan que los ataques basados en Memcached continuarán aumentando e incluso podrían superar los dos terabits por segundo, pues lamentablemente, existen reportes de que muchos de los ciberdelincuentes que recurren a este tipo específico de ataque DDoS están comenzando a “monetizar” este tipo de amenazas, exigiéndoles un pago a sus víctimas.
 
No obstante, la buena noticia es que se están desarrollando algunas medidas y herramientas de mitigación para prevenir y neutralizar estos ataques. Diferentes expertos en seguridad revelaron una técnica mediante la cual las víctimas de ataques DDoS pueden detener estos ataques mientras suceden. Esta práctica consiste en enviar ciertos comandos como “shutdown \ r \ n”, o “flush_all \ r \ n” a los servidores Memcached que están siendo atacados para desactivarlos y evitar la amplificación. Otra forma efectiva para prevenir este tipo de amenazas consiste en deshabilitar el protocolo de Memcached de cualquier servidor expuesto en la red.
 
Es evidente que la vulnerabilidad de los servidores Memcached será aprovechada por los ciberdelincuentes como uno de los vectores de ataque DDoS de moda en 2018. Por eso, es fundamental contar un plan de detección y mitigación de ataques DDoS. Para ello, es recomendable revisar detalladamente las configuraciones de los routers y firewalls de manera que se detengan todas las IP que no sean válidas. Asimismo, conviene limitar el tráfico que llega desde un host para evitar saturar los servidores. Este plan también debería incluir un estudio periódico de las conexiones TCP/UDP con el servidor que permita identificar patrones de ataque.
 
Pero nuestra recomendación principal es monitorizar constantemente el tráfico de la red de tu empresa para evitar accesos no autorizados. Soluciones como Panda Adaptive Defense 360 proporcionan una visibilidad detallada de toda la actividad en todos los endpoints, un control absoluto de todos los procesos en ejecución y la reducción de la superficie de ataque preparando a tu empresa  para defenderse ante cualquier tipo de ataque DDoS, concluye Hernández.