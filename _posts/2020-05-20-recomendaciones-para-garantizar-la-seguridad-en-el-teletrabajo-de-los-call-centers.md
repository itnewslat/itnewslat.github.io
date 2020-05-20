---
layout: posts
color-schema: red-dark
date: '2020-05-20 13:10 -0400'
published: true
superNews: false
superArticle: false
year: '2020'
title: >-
  Recomendaciones para garantizar la seguridad en el teletrabajo de los call
  centers
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/call-center-p.jpg
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/call-center-g.jpg
categories:
  - Venezuela
  - Colombia
  - Argentina
  - Perú
  - Ecuador
  - Chile
  - Panama
tags:
  - Economía Digital
week: '21'
---
Por: **Raúl Mejía , Director Mexico & LATAM de GM Sectec (formerly 1stSecureIT)**

Desde el primer caso de COVID-19 detectado en diciembre pasado en China, la enfermedad se ha dispersado por todo el mundo y declarada como Pandemia por la OMS el 11 de marzo. Esto ha ocasionado que la mayoría de los países hayan decretado una situación de cuarentena, provocando un cambio radical en nuestra forma de vivir en tan pocas semanas. Este cambió abrupto  ha tenido consecuencias en los ataques a las empresas ya que en todo el mundo se han multiplicado, debido a que los hackers han aprovechado el pánico causado por la enfermedad para enviar malware, realizar phishing e incluso  fraudes en línea. 

Con las políticas de confinamiento que ya superan los 50 días, los call centers han redoblado su carga de trabajo para mantener y rentabilizar las relaciones con los clientes de las marcas e impulsar el cierre de transacciones de pago. Ante tal situación, los equipos de IT de las empresas han tenido que buscar soluciones para asegurarse de que todos los empleados pudieran seguir trabajando con el menor impacto posible. Una de las soluciones ha sido los proveedores de servicios basados en la nube que garantizan la continuidad de los servicios, pero ¿cómo mantener el cumplimiento de las normas de seguridad (PCI DSS) en las transacciones de pago?

Uno de los primeros sectores que ha logrado migrar a la nube sus operaciones para garantizar la continuidad del negocio ha sido la industria de los call centers. Un sector que, según Frost & Sullivan, cerró 2019 con operaciones por más de 506 millones de dólares tan sólo en América Latina. A estas alturas, varios call centers han implementado soluciones de comunicaciones unificadas basadas en la nube, movilizando a sus agentes en modo “home office” para continuar operando y ofrecer acceso a sistemas esenciales, incluidos CRM, IVR, entre otros. 
Puede sonar obvio, pero estas acciones deberían estar enmarcadas en las políticas de seguridad de la empresa que den cumplimiento a las normas de seguridad para las transacciones con medios de pago, como PCI-DSS. De igual forma, es muy importante mantener actualizados los diagramas de flujo, de red e inventarios con el objetivo de validar que los usuarios que se están conectando vía remota al entorno de datos, están definidos en el alcance y tengan implementado los controles de seguridad requeridos.

A continuación, GM Sectec repasa el checklist de recomendaciones que no puede faltar en los equipos de TI y de seguridad:

**En la infraestructura tecnológica para el teletrabajo**:

1.	Requerir que todo el personal use sólo dispositivos de hardware aprobados por la compañía (móviles, teléfonos, computadoras portátiles, computadoras de escritorio, etc). Esto es especialmente relevante para el trabajo remoto y la empresa debe validar el control de los sistemas y la tecnología que respalden el procesamiento de los datos de las tarjetas de pago.
2.	No es recomendable utilizar computadoras portátiles o de escritorio personales de los empleados, por la falta de gestión y control del equipo.
3.	El lugar de trabajo remoto debe operar como una extensión segura de la red del call center. Para ello es necesario asegurar que su entorno (la red de acceso y el WiFi) sea seguro de acuerdo con los requisitos de PCI DSS:
a.	Contar con firewalls personales instalados y operativos.
b.	Contar con un software corporativo de anti-virus o anti-malware actualizado, que bloqueen intrusos maliciosos y alerten sobre actividades sospechosas.
c.	Tener instalados los últimos parches de seguridad aprobados.
d.	Desinstale o desactive las aplicaciones y el software que no son necesarios para reducir la superficie de ataque de los equipos. 
e.	Manejar configuraciones que eviten a los usuarios deshabilitar los controles de seguridad.
4.	Las tarjetas de crédito o débito deberán recibirse a través de un IVR seguro y las sesiones de trabajo de los operadores deben iniciarse bajo autenticación de múltiples factores para la conexión remota.
5.	Implementar criptografía sólida para asegurar la transmisión de datos, como puede ser a través de conexiones VPN.
6.	Las estaciones de trabajo deben conectarse a través de un servidor Jump, y un ecosistema de aplicaciones regido por un host virtual. Las soluciones de escritorios virtuales, VDI como las Citrix son un paradigma habitual.
7.	Programe la desconexión automática de las sesiones de acceso remoto después de un período de inactividad, para evitar que las conexiones inactivas y abiertas sean flancos de ciberataques. 
8.	Restrinja el acceso físico a los medios que contienen datos de la tarjeta de pago de los clientes, como grabaciones de pantalla. En caso de que los datos de la cuenta se escriban o impriman en papel, asegúrese de que estén almacenados de forma segura, para posteriormente destruirla de manera segura cuando ya no se necesite. 
9.	Incremente el monitoreo del comportamiento del equipo remoto y defina criterios de identificación de acciones sospechosas.

**En cuanto al comportamiento del componente humano**:

1.	Revise las políticas y los procedimientos de seguridad con todos los agentes internos y remotos para garantizar que los procesos y procedimientos de seguridad no se olviden ni se eludan:
a.	Prohíba la copia, el traslado y el almacenamiento no autorizados de los datos de las cuentas de los clientes en discos duros locales y medios electrónicos extraíbles.
2.	El personal remoto debe estar al tanto de su entorno físico, teniendo cuidado de evitar que personas no autorizadas puedan ver información confidencial.
3.	El personal involucrado debe ser plenamente consciente de los riesgos relacionados con el trabajo a distancia o en el hogar.  Realice capacitaciones o campañas de concientización de seguridad continuas sobre las mejores prácticas de seguridad para uso correcto del correo electrónico y Web, así cómo elegir contraseñas seguras y cambiarlas con frecuencia.
4.	Si alguna parte del entorno telefónico se subcontrata a un proveedor de servicios externo, tanto el call center como el proveedor de servicios deben comprender claramente sus responsabilidades para proteger sus respectivos sistemas, procesos y personal, y documentar en consecuencia.
5.	En el caso de solicitar asistencia del equipo de TI, se debe verificar la identidad del usuario para descartar que sean llamadas falsas. Del mismo modo, los usuarios remotos deben saber cómo confirmar que una persona que llama por teléfono desde la TI corporativa es legítima antes de proporcionar cualquier información.
6.	Capacite a los teleoperadores sobre el impacto de campañas de ataque con malware, cadenas de correo electrónico Covid-19 y similares escenarios de riesgo para que el equipo remoto no caiga en estrategias de ingeniería social para vulnerar la protección de los datos de los clientes.

Hoy más que nunca, es de vital importancia que las entidades continúen manteniendo y monitoreando la efectividad de sus controles de seguridad durante este período. Esto incluye garantizar que todos los controles de seguridad necesarios estén en su lugar y funcionen de manera efectiva en todo momento. 

Recuerde que PCI DSS ayuda a mantener la seguridad del titular de la tarjeta y los datos comerciales.

<img src="https://tracker.metricool.com/c3po.jpg?hash=56f88a41e39ab42c063cc51676587a04"/>
