---
layout: posts
color-schema: red-dark
date: '2019-01-23 09:35 -0400'
published: false
superNews: false
superArticle: false
year: '2018'
title: >-
  Automatización y virtualización: la dupla estratégica en la recuperación de
  desastres
---
![](https://raw.githubusercontent.com/itnewslat/assets/master/img/300x300/Randall-Cruz.jpg)

**Por: Randall Cruz, Senior Solution Engineer Centro América y Panamá de VMware**
   
Las organizaciones, sin importar su tamaño, enfrentan grandes retos en la administración y gestión de sus datos, como la recuperación de información sensible ante un eventual desastre o situación de peligro. En este escenario, la definición de una estrategia de recuperación de desastres acertada será determinante para el éxito de la organización de cara a cualquier eventualidad. 

Dos variables importantes dentro del plan de recuperación de desastres de una organización son el Objetivo del Tiempo de Recuperación (RTO) y el Objetivo de Punto de Recuperación (RPO). Cada una con un propósito diferente, ayudan a medir, en el caso de RTO, cuánto tiempo se demora el sitio alterno en tener todos los servicios activos, en línea y listos para ser promovidos como primarios, durante el periodo que lleve subsanar la situación que haya dejado inoperante el sitio principal. 

Mientras que el RPO determina la cantidad de datos que el negocio está dispuesto a perder en caso de un fracaso.

Diversos debates entre especialistas de TI y arquitectos de infraestructura virtual han llevado a sugerir que el RTO podría ser más eficiente, una vez iniciado el proceso de failover (caída o salida de operación), siempre y cuando se consideren los siguientes factores: 

1.	**Arquitectura basada en aplicaciones**: Sin importar que hablamos de aplicaciones tradicionales o de nuevas tecnologías basadas en contenedores y microservicios, tenemos que tener clara la forma apropiada y controlada de dar de alta estas aplicaciones, sin dejar de lado que primero debe estar operando previamente todas aquellas dependencias del centro de datos como son: el DNS, Active Directory, LDAPs, etc, ya que sin éstas, las aplicaciones no estarán accesibles.

2.	C**antidad de aplicaciones críticas o de nivel 1**: Si bien, los clientes tienen la expectativa de tener el 100% de su ambiente replicado en el sitio alterno, basándose en un estudio de análisis de riesgo del negocio y/o seguridad, no siempre es posible, práctico o viable en términos técnicos y financieros. Dependiendo de cuántas aplicaciones de nivel 1 se tengan que iniciar, tendremos que considerar el ejercicio de medirlas con cronómetro en mano para tener una expectativa del tiempo que debamos considerar.

3.	**Procesos de ejecución manual**: En estrategias de recuperación y continuidad “hechas en casa” o en escenarios donde el cliente adquirió solamente una herramienta para replicar, hay un alto número de procesos manuales para ser ejecutados por el personal de TI con el fin de habilitar el ambiente alterno durante el proceso de failover. Esto no solo puede resultar lento, sino también altamente propenso a error humano. 

A la lentitud de los procesos manuales, también hay que agregar la disponibilidad de los recursos humanos que los realizan. No es lo mismo hacer una prueba de recuperación con todo el personal listo en sus puestos de trabajo, que tener que contactar a cada uno de ellos para que puedan acceder local o remotamente a los sistemas y ejecuten la recuperación. 

4.	**Reconfiguración a nivel de la red**: Ya sea por costos, limitaciones de infraestructura o por distancia, no siempre es posible contar con una conexión L2 entre sitios, por ende, la reconfiguración y actualización del direccionamiento IP es un aspecto inevitable de abordar en estos casos. Al final, esto representa un costo más, en términos de tiempo que debemos de sumarle a la variable del RTO.

En este punto, la “automatización” puede volverse un catalizador muy interesante de explorar en este tipo de estrategias de continuidad y recuperación de desastres. De los cuatro puntos mencionados, tres de ellos son automatizables, dándole a la solución propuesta un RTO mucho más expedito y predecible, donde el componente de error humano se puede ver minimizado o prácticamente eliminado de la ecuación.

Los  planes de recuperación deben tener la capacidad de ejecutarse sin necesidad de la intervención humana, dándole espacio a que sea la automatización quien orqueste el proceso de llevar a cabo el failover entre sitios. Herramientas como Site Recovery Manager o SRM, permiten tener la capacidad de automatizar completamente la forma en que se ejecuta el o los planes de recuperación que se han definido previamente como parte de la estrategia de resiliencia entre centros de datos. 

En pruebas de concepto, así como en implementaciones finales, gracias a la capacidad de poder disponer de un orquestador que opera de forma totalmente automática los planes de recuperación, el RTO requerido para promover el sitio alterno como primario es mucho menor. Ahora bien, cabe preguntarse, ¿es viable optimizar aún más esta estrategia de recuperación y continuidad de manera que se pueda lograr un tiempo de RTO menor? La respuesta es que si es viable.

En estos escenarios es donde podemos tomar ventaja de las nuevas bondades que la virtualización ofrece; la organización puede aprovechar aquello que la tecnología en redes virtualizadas puede aportar. En efecto, al integrar las funcionalidades de las redes definidas por software en la estrategia de recuperación de desastres, se puede obviar el hecho de tener que reconfigurar y remapear todos los elementos activos de red a la hora de hacer un failover entre sitios. 

En conclusión, la dupla automatización – virtualización de redes dentro de una estrategia clara de recuperación de desastres reduce costos, facilita la recuperación de datos, entrega tiempos de respuesta cortos y medibles a través del RTO y ofrece a las organizaciones el respaldo y confiabilidad que los clientes necesitan.
