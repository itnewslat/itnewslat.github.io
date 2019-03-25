---
layout: posts
color-schema: red-dark
date: '2019-03-25 07:47 -0400'
published: true
superNews: false
superArticle: false
year: '2019'
title: >-
  VMware presenta firewall para proteger las aplicaciones y los datos en las
  instalaciones y en la nube  
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Tom-Gillis-p.jpg
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/Tom-Gillis-g.jpg
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
week: '13'
---
**Esta nueva solución interna de firewall conserva el buen comportamiento conocido, tanto a nivel de red como de anfitrión, para reducir en buena medida la superficie de ataque**

VMware, Inc. (NYSE: VMW), anunció la nueva VMware Service-defined Firewall (Firewall VMware definida por servicio), un enfoque innovador de cortafuego interno que reduce la superficie de ataque en entornos locales y de nube, con la seguridad como parte intrínseca de la infraestructura. Mediante las capacidades probadas de VMware NSX y VMware AppDefense, la VMware Service-defined Firewall combina visibilidad sin precedentes de las aplicaciones y comprensión del buen comportamiento conocido de las aplicaciones con capacidades de cortafuegos inteligentes, automatizadas y flexibles para ayudar a proteger mejor las aplicaciones, los datos y los usuarios. 

"La seguridad intrínseca es diferente a la seguridad integrada", dijo Tom Gillis, vicepresidente sénior y gerente general de la unidad comercial de redes y seguridad, en VMware. “La seguridad integrada reempaqueta las soluciones existentes, como tomar un firewall tradicional y convertirlo en la blade de un conmutador en el centro de datos. Esto no cambia fundamentalmente el firewall. La seguridad intrínseca aprovecha los atributos únicos incorporados en la plataforma de virtualización, lo que nos permite crear servicios de seguridad nuevos y únicos. La nueva VMware Service-defined Firewall se centra en la protección interna de la red y se distingue porque valida el buen comportamiento conocido de la aplicación, en lugar de perseguir amenazas". 

La idea de centrarse en el buen comportamiento conocido de una aplicación se ha intentado antes, pero el desafío siempre ha sido entender completamente la aplicación. Algunas soluciones han instalado agentes en el invitado para lograr esto, pero las soluciones basadas en agentes agregan complejidad y tienen un atractivo limitado porque, si un atacante llega a la raíz, lo que le proporcionaría un control completo de un host (anfitrión), simplemente podrán evitar al agente. Además, como las aplicaciones se han vuelto más distribuidas, la seguridad también debe distribuirse. No es práctico crear una curva pronunciada en el tráfico de este a oeste en un dispositivo de hardware o una virtualización del mismo para inspección. 

La solución VMware Service-defined Firewall adopta un enfoque completamente diferente para el firewall, enfoque que se centra en recursos que las empresas conocen bien –aplicaciones que ellas mismas han implementado– en lugar de escudriñar lo desconocido. Esta solución funciona en entornos de aplicaciones básicos (bare metal), VM y en contenedores, y admitirá entornos de nube híbrida como VMware Cloud on AWS y AWS Outposts en el futuro. Las empresas pueden usar esta solución como su única solución de firewall para sus necesidades internas. La VMware Service-defined Firewall es única por las siguientes características: 

- **Application Verification Cloud**: La posición de VMware en el host permite que el Service-defined Firewall obtenga un conocimiento profundo de una aplicación y sus cientos o incluso miles de microservicios a través de todas sus variaciones a lo largo del tiempo. Utilizando la inteligencia artificial de millones de máquinas virtuales a escala mundial, la Application Verification Cloud (Nube de verificación de aplicaciones) de la solución crea un mapa exacto del estado "bueno conocido" de la aplicación. Una vez que se establece el conocimiento verificado del buen comportamiento de la aplicación, la solución puede generar políticas de seguridad adaptables para la solución Service-defined Firewall que es apta para la Layer 7 y puede realizar una inspección completa del estado.

- **Protegido contra el invitado**: La solución Service-defined Firewall aprovecha la capacidad intrínseca de VMware para inspeccionar el sistema operativo y la aplicación del invitado sin residir en éste. Esto significa que incluso si un atacante obtuviera acceso a la raíz (root), no podría evitar la solución Service-defined Firewall. La solución Service-defined Firewall también puede detectar y bloquear el tráfico malicioso en la red. Más allá de eso, este sistema puede realizar una introspección del invitado e identificar y detener cualquier comportamiento malicioso dentro del sistema operativo o la aplicación en el tiempo de ejecución. Esta capacidad única equivale a un nuevo enfoque para el uso de cortafuegos de redes y el IPS del anfitrión.

- **Distribuido en software**: El método tradicional de crear cortafuegos con hardware requiere que el tráfico se salga del entorno virtual en una "curva pronunciada" hasta un dispositivo de hardware para escanear. Esto es ineficiente y difícil de escalar, especialmente para las aplicaciones modernas que tienen muchos componentes o servicios que se ejecutan en muchos servidores y que a menudo pueden abarcar diferentes nubes. El VMware Service-defined Firewall, que se basa completamente en software está altamente distribuido, lo que significa que se ejecuta donde quiera que se ejecute la aplicación, en todas las nubes. Esto significa que se pueden aplicar las normativas de manera consistente sin crear una curva compleja en el tráfico de los entornos de nube.

**VMware Service-Defined Firewall está preparada para los escenarios de ataques del mundo real**

Para validar la efectividad de la VMware Service-defined Firewall, VMware se asoció con Verodin, una de las principales compañías en capacitar a las organizaciones para medir, administrar y mejorar la eficacia de su ciberseguridad. VMware aprovechó la Security Instrumentation Platform (Plataforma de instrumentación de seguridad/SIP) de Verodin para validar que la VMware Service-Defined Firewall puede identificar y detener las amenazas de manera eficiente, sean conocidas o desconocidas. Al ejecutar la solución en modo Detectar y Prevenir, la VMware Service-Defined Firewall detectó o evitó el 100 por ciento de los ataques maliciosos utilizados en la secuencia de prueba de Verodin. 


