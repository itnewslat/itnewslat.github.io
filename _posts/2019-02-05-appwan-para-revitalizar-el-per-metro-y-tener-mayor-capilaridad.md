---
layout: posts
color-schema: red-dark
date: '2019-02-05 14:33 -0400'
published: true
superNews: false
superArticle: false
year: '2019'
title: AppWAN para revitalizar el perímetro y tener mayor capilaridad
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Teclado-Manos-p.jpg
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/Teclado-Manos-g.jpg
categories:
  - Venezuela
  - Colombia
  - Argentina
  - Perú
  - Ecuador
  - Chile
  - Panama
tags:
  - Canales
week: '6'
---
Tomado de [ITCONNECT.LAT](https://itconnect.lat/portal/2019/01/28/appwan-001/)

**Justo cuando estábamos tratando de entender el concepto de SD-WAN, surgió el término “AppWAN” para aumentar nuestra confusión. Scott Raynovich, analista principal de Futuriom lideró una discusión sobre ‘Los mejores nuevos modelos para redes de área amplia y la provisión de servicios’ en una reciente edición de NetEvents EMEA Press Spotlight.**

Raynovich comenzó diciéndonos cosas que ya sabíamos, pero expresó de manera sucinta y con datos convincentes para asegurarnos de que realmente supiéramos como denominar a la AppWan.

“Los gerentes de TI de las empresas, especialmente, están luchando con varios problemas.

Tienen este influjo de aplicaciones en la nube y tienen muchas restricciones de ancho de banda.

Tienen una creciente preocupación por la seguridad que la prensa escribe todos los días …

Sin embargo, todos quieren más acceso a las aplicaciones en la nube, más acceso a Internet, y ahora tenemos esta nueva cosa llamada nube múltiple, que conecta las nubes dentro de las nubes.

Luego, a medida que todas estas aplicaciones se ejecutan en la nube y en las tuberías, hay desafíos de rendimiento.

¿Cómo se asegura de que todos puedan ejecutar estas aplicaciones con un alto rendimiento y, cuando tienen que acceder a su sistema de CRM, está ahí?

**Señaló que la WAN corporativa, las líneas privadas MPLS y el acceso a banda ancha eran todos cuellos de botella.**

"Entonces, los gerentes de TI quieren una manera más rápida y fácil de mitigar estos desafíos, tener múltiples formas de hacer que las personas accedan a sus aplicaciones, aliviar los cuellos de botella en la banda ancha de Internet o los circuitos privados y proporcionar toda la seguridad y el ancho de banda que las personas necesito acceder a estas aplicaciones.

Estos son solo algunos de los desafíos de los que hablé.

¿Cómo construye estas redes virtuales de múltiples nubes que son seguras, ofrecen un rendimiento y pueden automatizarse de manera rápida y sencilla con solo hacer clic en un botón en lugar de esperar a que llegue un camión?"

**Los resultados de su encuesta lo confirmaron, pero también indicaron otra tendencia: la forma en que los roles de TI se estaban difundiendo:**

“Solía ​​ser silos: usted era un desarrollador de aplicaciones, era un operador de red. A medida que nos movemos hacia la nube, estos roles se están volviendo un poco más complicados.

Tiene gente de desarrollo de aplicaciones que necesita saber sobre redes y viceversa … básicamente, todos tienen cierta experiencia en el desarrollo de aplicaciones, redes, seguridad y **DevOps** “.

**En opinión de Scott, los enrutadores están en el centro de este problema:**

“Los enrutadores son realmente difíciles de configurar, es muy manual, y la red de la empresa fue construida con enrutadores. [Vea la Figura 1.] Por lo tanto, este es el tipo de experiencia que necesita para configurar una red de enrutamiento con seguridad, y esto es lo que la gente quiere evitar …

Quieren que sea automatizada y que esté limpia. Por eso es que tenemos algo llamado SD-WAN …

La forma más sencilla de verlo es como una red superpuesta que puede automatizar parte de este aprovisionamiento “.
![](https://i1.wp.com/itconnect.lat/portal/wp-content/uploads/2019/01/AppWan-e1548688032997.png?w=400&ssl=1)

Figura 1 – El laberinto del enrutador

Para tener una idea de esta red de “superposición”, puede comparar la Figura 1 con una red de carreteras de la ciudad, donde cada nodo es un cruce con semáforos y señalización.

Hacer cambios solía requerir el envío de personas para volver a programar las luces y reemplazar las señales de tráfico.

Ahora, esta labor se reemplaza cada vez más con letreros de pórtico iluminados controlados desde una oficina central, haciendo cosas como redirigir el tráfico, asignando carriles de autobús y cerrando otros. Las cámaras incorporadas permiten a la oficina central monitorear el tráfico y hacer cambios en tiempo real para facilitar el flujo.

**Plano de Control**

Esto efectivamente levanta el cambio de ruta de la calle a un “plano de control” separado que permite la actualización inmediata y la reorientación del tráfico sin intervención a nivel de la calle.

De manera similar, una SD-WAN agrega una red de superposición que monitorea el tráfico en cada enrutador y les permite reconfigurarse en tiempo real desde un controlador central.

“Entonces, ¿por qué la gente va a estas SD-WAN? Bueno, lo que han descubierto es que pueden reducir masivamente el costo de administrar todas estas sucursales. ¿Porqué es eso? Bueno, la caja SD-WAN es típicamente una caja más económica de la industria con el software en la parte superior. Luego diga que desea extender a 200 sucursales, puede aprovisionar eso a través de la nube, ¿verdad? No es necesario que el conductor del cable haga rodar el camión todo el tiempo para configurar los dispositivos.

Por lo tanto, los ahorros pueden estar tanto en el lado de OpEx como en el de hardware ”. Sin mencionar el aumento de la agilidad comercial cuando puede hacer todas esas actualizaciones de inmediato para enfrentar las presiones comerciales.

Este esquema de tráfico también permite otro beneficio a través de la automatización. Ciertas condiciones de tráfico, como las horas pico, las visitas VIP y los partidos de grandes ligas, imponen demandas de tráfico específicas.

Para la Final de Rugby, usted sabe que a) el tráfico comercial del sábado será bajo, b) el tráfico minorista será casi normal para el sábado, y c) el tráfico y el estacionamiento en el estadio serán excepcionales. Por lo tanto, uno puede “definir por software” una aplicación Match para redirigir automáticamente el tráfico para optimizar el flujo y el estacionamiento en estos días, liberando el controlador para monitorear los cambios y ajustarlos según sea necesario.

**Esto es, en esencia, lo que hace una AppWAN**

Cada aplicación impone requisitos específicos: el tráfico de voz es particularmente sensible a la latencia, pero no es tan exigente como el comercio financiero de alta velocidad; El video HD requiere un gran ancho de banda, pero la latencia es menos crítica … y así sucesivamente. Por lo tanto, la AppWAN agrega una superposición adicional donde los parámetros de rendimiento y calidad de servicio requeridos por cada aplicación se invocan automáticamente cuando la aplicación se está ejecutando. La WAN se vuelve “consciente de la aplicación” y responde adecuadamente.

Scott concluyó: “Entonces, básicamente, estamos tomando este espagueti de redes y construyendo estas nuevas superposiciones que son más inteligentes y seguras y pueden negociar su camino a través de este atasco de tráfico de una manera más automatizada”. Y SD-WAN está creciendo rápidamente como un Resultado: “Va a ser miles de millones de dólares. Este año, en realidad lo proyectamos en 2019, cruzando en 2020 a esa marca de $ 1,000 millones ”.

La discusión resultante comenzó con **Atchison Frazer, el Director de Marketing de Versa Networks** en todo el mundo, señalando que un concepto central de SD-WAN era abordar la ventaja de la WAN.

No es solo **MPLS**, de banda ancha o inalámbrica: “Es todo lo que se agrega a lo anterior. Básicamente, tiene un solo conducto para todas sus ubicaciones remotas, todas sus sucursales, su centro de datos, sus instancias en la nube.

En el caso de Versa, al menos, todos se muestran y tienen el mismo aspecto que cualquier otro nodo en una red tradicional.

La diferencia es que podemos asignar ancho de banda en función de cualquier rango de factores, ya sea por congestión, por jitter, por pérdida de paquetes, y estamos inspeccionando cada paquete por su desempeño y seguridad.

Así que realmente nos preocupamos por la carga útil que se encuentra dentro del paquete y la eficiencia del transporte del paquete. Pero el punto clave aquí es que creo que en la mayoría de los casos esto es cierto: estamos implementados como una superposición “.

Para muchos, este fue el primer punto de venta de SD-WAN: que las oficinas periféricas podrían obtener una conexión confiable, segura y con calidad de nube a la red corporativa al combinar los servicios disponibles, sin el costo ni la inflexibilidad de comprar acceso a líneas privadas.

Entonces, ¿es esta la muerte de MPLS? Atchison vio esto como un problema a largo plazo: “El final del juego es esencialmente eliminar la necesidad de la gran cantidad de dispositivos necesarios para soportar MPLS”.

Sin embargo: “MPLS es una base instalada de $ 15 mil millones que no se está erosionando muy rápidamente, ciertamente no tan rápido como algunos de nuestros otros competidores proyectaron. Por lo tanto, la capacidad de reducir el costo de la línea privada tradicional MPLS (con todo el equipo y los gastos generales y el saliente asociados a él) mediante la integración de los productos básicos de Internet y LTE, la conexión inalámbrica y otros tipos de conectividad en la mezcla de su tráfico general ayuda a reducir el costo. Porque los bits de Internet son al menos 80 veces más baratos que los bits MPLS “.

El analista principal de **Ovum, Rik Turner**, estuvo de acuerdo: “Supongo que, en cierta medida, es MPLS donde debes y banda ancha, LTE o lo que sea, donde sea que puedas. Así que creo que estará aquí por mucho tiempo … Ciertamente no disfrutará de las tasas de crecimiento que tuvo en años anteriores … y el uso de los enlaces de MPLS estará más condicionado por el requisito absoluto de hacerlo. ”

(Este punto se volvió a plantear en las preguntas y respuestas posteriores, donde la discusión estuvo de acuerdo en que, si bien el impulso inicial era reducir los costos, el principal atractivo ahora era que SD-WAN prometía una mayor simplicidad. Alguien también señaló que MPLS estaba bajo ataque de dos direcciones, con fibra óptica también en su garganta.)

Entonces, ¿dónde deja eso a Juniper, Cisco y los proveedores de enrutadores? Rik hizo una analogía con las compañías de transmisión sintiendo la necesidad de agregar servicios de transmisión para mantenerse al día. “Entonces, ¿está diciendo que SD-WAN es el Netflix de la red?”, Sugirió Scott. Y Rik señaló que los que realmente se vieron obligados a cambiar a SD-WAN fueron los optimizadores de WAN como Riverbed y Silver Peak.

Philip Griffiths, Director de EMEA de NetFoundry, pasó del hardware al ángulo del software y dijo: “Para nosotros, se trata más de mirar la imagen que está encima y luego de todos los dispositivos de vanguardia. Según lo que dijo Rik, MPLS está obviamente aquí, porque hay casos de uso en los que está estático y tiene datos de misión crítica … Por otro lado, tiene nuevos casos de uso, como IoT , SaaS, móvil: donde está completamente distribuido … En este mundo, el mejor modelo es tener una red específica para la aplicación que le permita conectar estas aplicaciones distribuidas con un nivel mucho más alto de simplicidad, agilidad, rendimiento y seguridad ”.

Dio el ejemplo de que un centro de llamadas en Perú necesitaba conectarse con **IBM Watson** en Dallas para hacer la traducción de llamadas telefónicas en tiempo real, lo cual es muy crítico.

MPLS habría tomado meses y costó una fortuna. Usando el software NetFoundry, el enlace se amplió el mismo día y alcanzó un promedio de 200 milisegundos, casi lo que obtendría de MPLS. “Cada vez más y más de estas aplicaciones distribuidas pueden usar Internet de forma nativa y solo usan las líneas MPLS estáticas fijas donde realmente se requieren, como un comerciante de un día que realiza transacciones financieras”.

Eso nos llevó a la AppWAN. Philip explicó: “Usted tiene esta base tradicional, y SD-WAN es una abstracción por encima de eso. Pero luego vamos a un nivel de abstracción superior al de donde está conectando aplicaciones a través de las aplicaciones. “Esto tuvo importantes implicaciones para la seguridad:” Puede comenzar a crear redes de confianza cero que conecten recursos basados ​​en cualquier dispositivo, cualquier ubicación. , cualquier nube, que esté integrada en su sistema de gestión de acceso a la identidad “.

**Por Lionel Snell, Editor, [NetEvents](http://www.netevents.com/)**

Tomado de [ITCONNECT.LAT](https://itconnect.lat/portal/2019/01/28/appwan-001/)