---
layout: posts
color-schema: red-dark
date: '2019-06-05 07:02 -0400'
published: true
superNews: false
superArticle: false
year: '2019'
title: >-
  Las 4 brechas que abrió la vulnerabilidad de WhatsApp y estrategias para
  evitar que su red se vea afectada
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Robert-Krug-p.jpg
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/Robert-Krug-g.jpg
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
week: '23'
---
**Por: Robert Krug, Arquitecto Senior de Soluciones de Seguridad de SonicWall**

La reciente violación de WhatsApp fue muy sofisticada e inteligente en la forma en que se entregó. La empresa de espionaje israelí NSO Group desarrolló un exploit que inyectaba malware en teléfonos específicos y robaba información simplemente llamándolos. Los objetivos no tenían que ser detectados, y las llamadas a menudo no dejaban rastro en el registro del teléfono. Pero ¿cómo funcionaría un hack como ese en primer lugar?

De acuerdo con un reporte del Financial Times, WhatsApp -que ofrece mensajes cifrados de forma predeterminada a sus 1,500 millones de usuarios en todo el mundo- descubrió la vulnerabilidad a principios de mayo y lanzó un parche días después. La compañía de Facebook dijo al Departamento de Comercio de Estados Unidos que contactó a varios grupos de derechos humanos sobre el tema y que la explotación de esta vulnerabilidad conlleva "todas las características de una empresa privada que se sabe trabaja con los gobiernos para entregar software espía". En una declaración, el Grupo NSO negó cualquier participación en la selección o el destino de las víctimas, pero no su papel en la creación del propio hack.

NSO es una empresa de tecnología israelí que se especializa en herramientas de vigilancia cibernética. Apropiadamente para la esfera en la que trabaja, la empresa prefiere trabajar en las sombras. Sus ejecutivos rara vez hablan con los medios y no dice mucho sobre sus clientes.

Pero el ataque contra la aplicación WhatsApp no es solo una preocupación para sus millones de clientes globales. También existe una amenaza muy real e inminente para las empresas, desde las pequeñas y medianas, hasta los grandes corporativos. 

Por ejemplo, supongamos que uno de los empleados tiene WhatsApp instalado en su dispositivo y posteriormente queda comprometido a través del último exploit de dicha aplicación. Por múltiples circunstancias, este empleado, en algún momento, conectará su dispositivo a la red corporativa. 

Este acceso legítimo puede ser a través de VPN para aplicaciones en la nube (por ejemplo, Office 365, Dropbox, etc.), WiFi corporativo o simplemente conectando el dispositivo al puerto USB de una computadora portátil corporativa para que el teléfono pueda cargar. Comprender cómo y dónde se conectan los usuarios a la red corporativa es fundamental.

En la mayoría de los casos, las organizaciones no pueden evitar que los teléfonos personales se vean comprometidos, especialmente cuando están fuera del perímetro de la red. Sin embargo, pueden proteger la red de las vulnerabilidades entregadas a través del teléfono comprometido. 

A continuación, se comparten las cuatro formas más comunes en que la vulnerabilidad de WhatsApp podría ser aprovechada para infiltrarse en una red corporativa: 

1. **Vía VPN**: Si un empleado se conecta al corporativo mediante Redes Privadas Virtuales o VPN (por sus siglas en inglés), la forma de protegerse sería implementando un sistema de prevención de amenazas VPN a través de firewalls de próxima generación.  Esta estrategia impediría la violación de WhatsApp de propagar cualquier malware a otros dispositivos o a la red.
2. **Mediante Wi-Fi**: En este escenario, los Next Generation Firewalls y los Access Points inalámbricos ayudarían a inspeccionar todo el tráfico interno y evitar que el exploit vaya más allá del teléfono.
3. **A través de credenciales comprometidas**: Debido a que el exploit de WhatsApp permite a los atacantes robar credenciales para acceder a servicios y aplicaciones en la nube, las organizaciones que cuentan con soluciones Cloud Access Security Broker (CASB), mitigarían las amenazas tipo Account Takeover (ATO) donde el atacante toma el control de las cuentas del usuario, asimismo se protegerían contra accesos no autorizados y cualquier fuga de datos relacionada.
4. **Utilizando puertos USB**: Los usuarios a menudo olvidan que un puerto USB con alimentación en su computadora portátil es un punto de entrada para los atacantes, incluso cuando hacen algo tan inocente como cargar un teléfono. Una solución de protección de Endpoint robusta, monitorearía la conexión a la computadora portátil e inspeccionaría cualquier actividad maliciosa que intente aprovechar el puerto USB para entregar cargas útiles de malware.

**Endpoints bajo ataque demandan nuevas estrategias y nuevas soluciones**

La lucha contra las violaciones exige cambios en los procesos de las empresas, con programas de capacitación que diseminan las mejores prácticas de seguridad entre todos los usuarios de todos los departamentos y la continua actualización de las soluciones de seguridad. Las vulnerabilidades de los Endpoints demandan un conjunto de acciones para ser identificadas y resueltas. Es esencial contar con soluciones que apliquen técnicas avanzadas de protección contra amenazas, como machine learning, integración de sandbox de red y reversión del sistema. Sólo así la corporación estará preparada para enfrentar el próximo ataque zero day de efecto masivo que, seguramente, vendrá.