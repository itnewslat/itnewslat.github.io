---
layout: posts
color-schema: red-dark
date: '2018-09-19 15:02 -0400'
published: true
superNews: false
superArticle: false
title: >-
  Comprometer el correo electrónico empresarial: una estafa de US $12.5 mil
  millones
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Correo-Empresarial-p.jpg
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/Correo-Empresarial-g.jpg
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
---

                                                                   
**Por: Carlos Gómez, Ingeniero de Ventas de SonicWall para el sur de Latinoamérica**

El correo electrónico sigue siendo el principal vector utilizado por los ciberdelincuentes, así que los engaños a través del correo electrónico corporativo (Business Email Compromise, o BEC) son una tendencia que viene ganando espacio como uno de los tipos preferidos de ataques en el mundo.

Un ataque BEC falsifica dominios de confianza, imita marcas y/o copia identidades corporativas. En muchos de los casos, los correos electrónicos aparecen de un remitente legítimo o confiable, como podría ser del director general de la compañía, quien generalmente solicita transferencias electrónicas.

"Hasta el 2023, los ataques dirigidos a comprometer empresas serán persistentes y evasivos, lo que generará grandes pérdidas a las empresas por fraude financiero así como violaciones de datos para las organizaciones gubernamentales y de salud", aseguró Gartner en su reciente informe Fighting Phishing - 2020 Foresight 2020.

El FBI clasifica a BEC como una estafa sofisticada dirigida a aquellas empresas que trabajan con proveedores extranjeros y/o empresas que regularmente realizan pagos a través de las transferencias bancarias. Este es un problema muy real y creciente a tal grado que el bureau ha dicho que BEC es una estafa que ha generado alrededor de $12.5 mil millones de dólares.

Además, este tipo ataques no contienen ningún malware y pueden eludir fácilmente las soluciones de ciberseguridad tradicionales de correo electrónico, así como el NGFW (Next Generation Firewall) y antivirus de cliente. Cabe señalar que los ciberdelincuentes se involucran en extensas actividades de ingeniería social para obtener información sobre sus posibles objetivos y entonces elaboran mensajes personalizados.

Quizás otro de los peligros asociados al correo electrónico, hoy tiene que ver con la confianza que muchos administradores ponen en los “hostings”. Hay una variedad enorme de servicios en la nube para alojar el correo de una empresa, pero la mayoría de ellos no tienen políticas ni infraestructura de seguridad, lo cual genera mayores vulnerabilidades.

Usualmente, los administradores de sistemas implementan su estrategia de seguridad bajo la premisa de que deben protegerse contra las amenazas que están en Internet, sin advertir que es igualmente peligroso comprometer la reputación del dominio de la empresa al convertirse de manera insospechada en spammers. Enviar correos infectados o malware desde el dominio de la organización hacia otros dominios en Internet puede ocasionar que los correos legítimos reboten porque éste se encuentre en listas negras.

Lo más común es encontrar un servicio que efectivamente bloquee el spam de entrada a la organización, pero no se encargará de hacer autenticación de remitentes, revisión de firmas contra los adjuntos, protección de ataques de día cero, ni algún otro tipo de validación especialmente con el correo saliente.

**Tipos de BEC o fraude por email**

El correo electrónico ha existido desde la década de los 60 y el estándar de Internet actual para la comunicación por esta vía – Protocolo Simple de Transferencia de Correo (SMTP) – no fue diseñado para autenticar a los remitentes ni verificar la integridad de los mensajes recibidos. Por lo tanto, es fácil alterar o "suplantar" el origen de un correo electrónico. Por ello, esa débil identificación del remitente continuará presentando oportunidades para ataques creativos.

Ahora veamos los diferentes tipos de técnicas de suplantación que un atacante podría usar para iniciar su ataque:

**Mostrar nombre suplantado**

Esta es la forma más común de ataque BEC. En este caso, un cibercriminal intenta hacerse pasar por un empleado legítimo, generalmente un ejecutivo, con el fin de engañar al destinatario para que tome una acción. El dominio utilizado podría pertenecer a un servicio de correo electrónico gratuito como Gmail.

**Nombre de dominio suplantado**

Esto incluye falsificar ya sea la casilla "Correo de" que tiene el remitente para que entonces coincida con el dominio del destinatario, o bien, usar un dominio legítimo en el recuadro "Correo de" pero se cambia en el código del encabezado de dicho mensaje la opción “Responder a” para que se dirija la respuesta a un dominio fraudulento.

**Suplantación de dominio hermano o simulación de dominios similares**

Este tipo de ataque se basa en crear confusión visual para el receptor. Esto generalmente implica el uso de dominios hermanos como ".ORG" o ".NET" en lugar de ".COM", o el intercambio de caracteres, como el número "0" para la letra "O", una "I" mayúscula para una minúscula "L." Esto también se conoce como typosquatting.

**Cuenta de correo electrónico comprometida o Apropiarse de la Cuenta (ATO)**

Esto se lleva a cabo comprometiendo cuentas legítimas de correo electrónico comercial a través de ingeniería social o al usar técnicas de intrusión informática, entonces realizan transferencias no autorizadas de fondos o robo de datos.

**Las mejores prácticas para detener los ataques BEC**

Estas son algunas de las mejores prácticas de ciberseguridad en correo electrónico que puede implementar para protegerse contra ataques BEC sofisticados.

1. Bloquee correos electrónicos fraudulentos implementando técnicas de validación de origen de mensaje. Las más utilizadas son: Sender Policy Framework (SPF) y claves de dominio del correo identificado (DKIM), y agregue las capacidades de autentificación de mensajes basados en dominios, informes y conformidad (DMARC).
2. Habilite la autenticación de factor múltiple y solicite cambios periódicos de contraseña para detener ataques de cuentas comprometidas.
3. Establezca procesos de aprobación para transferencias electrónicas. Igualmente, instaure métodos de confirmación de órdenes de compra y órdenes de pedido recibidos por correo electrónico.
4. Capacite periódicamente a los usuarios sobre la importancia de la seguridad con un enfoque centrado en las personas para combatir los ataques de correo electrónico. Realice tareas de concientización sobre la posible falsedad de los correos electrónicos y la necesidad de que algunas solicitudes inusuales sean confirmadas por teléfono u otros medios así provengan de las cabezas de la organización.
5. Sea cuidadoso al iniciar sesión en el correo electrónico corporativo desde computadores públicos, asegurándose de haber finalizado la sesión antes de abandonar el café internet o la conexión de WiFi. Incluso, entonces, se puede dejar un rastro demasiado obvio para los cibercriminales, por lo que es preferible usar el correo corporativo conectado solo a redes de confianza o usando una VPN.