---
layout: posts
color-schema: red-dark
date: '2018-10-31 08:54 -0400'
published: true
superNews: false
superArticle: false
year: '2018'
title: >-
  Descubrieron 29 troyanos bancarios que pretendían ser aplicaciones legítimas
  de Android
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Troya-Horse-p.jpg
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/Troya-Horse-g.jpg
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
week: '44'
---
**ESET advierte sobre un nuevo engaño que apunta a usuarios de Android en la tienda de Google Play. Se identificó la presencia de troyanos bancarios para móviles que pretendían ser complementos para el dispositivo y limpiadores, administradores de batería o apps de horóscopo.**

ESET, compañía líder en detección proactiva de amenazas, analizó un conjunto de 29 troyanos bancarios que fueron descubiertos en la tienda oficial de Android entre agosto y principios de octubre de 2018. Los mismos simulaban ser complementos para el dispositivo y limpiadores, administradores de batería y hasta apps de horóscopo.

Estos troyanos controlados de forma remota son capaces de afectar de manera dinámica cualquier aplicación que encuentren en el dispositivo de la víctima mediante formularios de phishing personalizados. Además, pueden interceptar y redirigir mensajes de texto para evadir sistemas de doble factor de autenticación con base en SMS, interceptar registros de llamadas y descargar e instalar otras aplicaciones en los dispositivos comprometidos. Estas aplicaciones maliciosas fueron subidas en su mayoría bajo el nombre de diferentes desarrolladores, pero las similitudes en el código y un mismo servidor C&C sugieren que son obra de un solo atacante o grupo.

![](https://raw.githubusercontent.com/itnewslat/assets/master/img/App-Fake.jpg) 

_Figura 1 – Ejemplos de los troyanos bancarios descubiertos en Google Play._

“A diferencia de otras aplicaciones maliciosas que se enfocan solamente en intentar suplantar la identidad de instituciones financieras legítimas y mostrar pantallas con falsas instancias de registro, las apps analizadas en esta oportunidad son malware bancario sofisticado para móviles con funcionalidades complejas y un fuerte enfoque en la sigilosidad”, comentó Camilo Gutierrez, Jefe del Laboratorio de Investigación de ESET Latinoamérica. 

Una vez ejecutadas, las aplicaciones pueden o bien mostrar un mensaje de error en el que afirman que han sido removidas debido a una incompatibilidad con el dispositivo de la víctima y luego proceden a esconderse de la vista del usuario, o la otra posibilidad es que ofrezcan la función que prometían como puede ser mostrar el horóscopo.

![](https://raw.githubusercontent.com/itnewslat/assets/master/img/apps-fake.jpg) 

_Figura 2 – Un falso mensaje de error se despliega por uno de estos troyanos luego de ser ejecutados._

La principal función maliciosa está escondida en un payload cifrado ubicado en los assets de cada app. La funcionalidad del payload es la de suplantar aplicaciones bancarias instaladas en el dispositivo de la víctima, interceptar y enviar mensajes SMS, y descargar e instalar aplicaciones adicionales elegidas por el operador. De manera dinámica el malware puede suplantar la identidad de cualquier aplicación instalada en el dispositivo de la víctima, superponiéndose a la aplicación legítima con falsos formularios una vez que la app legítima es ejecutada, dándole así a la víctima muy pocas chances de notar que hay algo sospechoso.

Las 29 aplicaciones maliciosas han sido removidas de la tienda oficial de Android luego de que los investigadores de ESET notificaran a Google de su naturaleza maligna. Igualmente, antes de ser eliminadas de la tienda, las apps llegaron a ser instaladas por aproximadamente 30.000 usuarios en total.

“Afortunadamente este particular troyano bancario no emplea trucos avanzados para asegurar su persistencia en los dispositivos afectados. Por lo tanto, si se tienen sospechas de haber instalado cualquiera de estas apps, simplemente es necesario desinstalarlas ingresando en la sección Ajustes > Administración de aplicaciones / Apps. También desde ESET recomendamos revisar la cuenta bancaria ante posibles transacciones sospechosas y considerar modificar la contraseña del sistema de banca online o el código PIN.”, concluyó Camilo Gutierrez.

Para evitar ser víctima de este malware bancario ESET recomienda:

- Solo descargar apps de Google Play. Si bien esto no asegura que la app no es maliciosa, este comportamiento maligno es más común en tiendas de terceras partes, donde difícilmente se eliminen por más que sean descubiertas. La diferencia con Google Play es que se eliminan rápidamente cuando son reportadas.
- Asegurarse de revisar el número de descargas, la valoración y los comentarios existentes sobre las aplicaciones antes de descargarla de Google Play.
- Prestar atención de cuáles son los permisos que se otorga a las apps que se instalan.
- Mantener el dispositivo Android actualizado y utilizar una solución de seguridad para móviles que sea confiable. 