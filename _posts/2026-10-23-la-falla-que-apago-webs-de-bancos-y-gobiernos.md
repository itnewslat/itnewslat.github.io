---
layout: posts
color-schema: red-dark
date: '2026-10-23 15:53 -0400'
published: true
superNews: false
superArticle: false
year: '2026'
title: "La falla que apagó webs de bancos y gobiernos"
image-banner: >-
  https://raw.githubusercontent.com/itnewslat/assets/refs/heads/master/img/1200x450/Gerardo-Sandoval-p.jpg
week: '43'
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/refs/heads/master/img/540x320/Gerardo-Sandoval-p.jpg
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/refs/heads/master/img/1024x680/Gerardo-Sandoval-g.jpg
categories:
    - Venezuela
tags:
  - Seguridad
week: '43'
---
### **Ya toca la puerta de las empresas venezolanas**

PHP2Shell, descubierta con ayuda de la inteligencia artificial, provocó millones de intentos de ataque en pocas horas. En Venezuela ya se detectan intentos de intrusión. Lo que todo empresario debe preguntarle hoy a su proveedor.

El miércoles 21 de octubre, varios gobiernos europeos desconectaron sus portales y, de Tokio a Helsinki, se suspendieron por precaución servicios bancarios, de aerolíneas, de ferrocarriles y de administración tributaria.[1] La causa tiene nombre: PHP2Shell, dos fallas críticas en PHP, el lenguaje de programación sobre el que funciona buena parte de los sitios web y de las aplicaciones empresariales del mundo.[2][3]

Ambas fallas recibieron una calificación de gravedad de 9,2 sobre 10. Bajo determinadas condiciones, permiten que un desconocido ejecute instrucciones dentro de un servidor sin usuario ni contraseña.[2][3] Los detalles se filtraron antes de que existiera la corrección, y los delincuentes no esperaron.[4]

Según el director ejecutivo de Cloudflare, su red pasó de detectar miles de intentos de explotación a decenas de miles en los 45 minutos posteriores al anuncio, a cientos de miles en dos horas y a millones poco después. El presidente ejecutivo de Microsoft, Satya Nadella, reconoció que no había visto algo así en mucho tiempo.[1]

Un intento no equivale a una intrusión exitosa. Pero la velocidad lo dice todo: entre el anuncio de una falla y los primeros ataques ya no pasan semanas, sino minutos.

**Los intentos de ataque ya llegaron a Venezuela**

No es un problema lejano. En VenezuelaHosting.com aplicamos las actualizaciones en el 90 % de los servidores afectados durante las primeras 24 horas. Aun así, cerca del 5 % de esos servidores ya mostraba indicios de intentos de intrusión. Mientras el mundo corría a corregir la falla, los atacantes ya estaban tocando la puerta de servidores venezolanos.

El riesgo es mayor para quienes usan versiones antiguas. Según datos de la firma de seguridad Mallory, unos 884.000 servidores expuestos a Internet, cerca del 59 % de los analizados, funcionan con PHP 8.1 o anterior, ramas que ya no reciben soporte oficial. Un mapa elaborado con esos datos ubica a Venezuela entre los países con mayor proporción de servidores en esa situación.[5] En Colombia, el equipo nacional de respuesta a emergencias cibernéticas contabilizó 8.699 servicios con PHP expuestos a Internet.[6]

**La IA encontró lo que nadie vio en años**

Hay un detalle que convierte esta historia en una advertencia: las fallas llevaban años escondidas en el código de PHP y fueron descubiertas con ayuda de la inteligencia artificial.[1][7] Equipos de investigación usaron modelos de IA para analizar el código, identificar las condiciones necesarias para un ataque y validar la corrección.[2][7][8]

Esa es la paradoja de nuestra época: la misma tecnología que ayuda a los defensores a encontrar errores ayuda a los atacantes a explotarlos. Como resumió la cofundadora de la firma belga de ciberseguridad Aikido Security, las empresas están en una carrera contra atacantes que también usan IA.[1]

Hace unos años, desarrollar un ataque complejo exigía experiencia técnica y mucho tiempo. Hoy, alguien sin formación especializada puede apoyarse en herramientas de IA para investigar debilidades y automatizar tareas. Eso no significa que pueda entrar en cualquier servidor, pero sí que capacidades antes reservadas a especialistas están al alcance de muchas más personas.

La amenaza principal es la escala: una sola persona puede usar herramientas automatizadas para probar miles de servidores a la vez. Investigaciones recientes han documentado operaciones maliciosas asistidas por IA en las que un solo actor gestionó múltiples objetivos de forma simultánea.[9] Su empresa no necesita ser famosa para estar en la mira: basta con que uno de sus sistemas tenga una puerta vulnerable.

**El error que muchos empresarios cometen sin saberlo**

Cada día más organizaciones venezolanas usan sistemas por Internet para su facturación, contabilidad, inventario, nómina y atención a clientes. Pensemos en una distribuidora que guarda en un sistema web su lista de clientes, precios, cuentas por cobrar y facturas. Los empleados necesitan entrar desde la oficina o desde sus casas, así que la empresa publica el sistema en Internet.

La pregunta esencial es esta: ¿ese sistema solo está disponible para los empleados autorizados, o cualquier persona del planeta puede llegar hasta su pantalla de acceso? Con PHP2Shell la diferencia es enorme, porque la falla permite actuar sin conocer ninguna contraseña.

Que sus empleados necesiten trabajar desde Internet no significa que su sistema interno deba quedar abierto a cualquier persona del planeta.

**Zero Trust: primero comprobar quién entra**

Para enfrentar este riesgo existe una estrategia conocida como Zero Trust, o «confianza cero». La idea es sencilla: antes de permitir la conexión con una aplicación privada, el sistema comprueba quién intenta entrar y si tiene permiso. Es como un control de seguridad en la entrada de un edificio: el empleado autorizado pasa; el desconocido ni siquiera llega al piso donde se guardan los documentos. Este principio está recogido en el marco de referencia del Instituto Nacional de Estándares y Tecnología de Estados Unidos (NIST).[10]

No es solo teoría. Para los servidores que todavía no pueden actualizarse, los especialistas recomiendan precisamente eso como medida de emergencia: permitir el acceso solo desde redes privadas y direcciones autorizadas, y bloquear cualquier conexión desconocida.[5] Lo que hoy se aplica como emergencia debería ser la norma para cualquier sistema interno.

En VenezuelaHosting.com, donde trabajamos con organizaciones educativas y empresas medianas, aplicamos esquemas basados en Zero Trust en nuestras soluciones de infraestructura y nube privada, junto con herramientas de inteligencia artificial que apoyan nuestros procesos de seguridad. El objetivo es limitar accesos indebidos y detectar los riesgos antes de que se conviertan en incidentes.

Dos advertencias honestas. Una nube privada no es automáticamente más segura que una pública: lo decisivo es cómo se diseña, se administra y se protege. Y Zero Trust no reemplaza las actualizaciones: en el caso de PHP, la única corrección completa es instalar las versiones corregidas.[2]

**Una decisión que no puede esperar**

Para el dueño de una empresa, quedarse sin su sistema de ventas puede ser tan grave como encontrar la oficina cerrada. Que le roben la base de clientes o la información financiera puede borrar años de esfuerzo y la confianza de quienes hacen negocios con usted.

Por eso, si su empresa usa un sistema web de facturación, contabilidad, inventario o administración, pídale hoy a su proveedor tecnológico respuestas concretas: qué versión de PHP utiliza, si ya está actualizada y si ese sistema realmente necesita estar abierto a todo Internet. Pida también que revisen los permisos de los usuarios, los respaldos y el monitoreo de amenazas.

La inteligencia artificial está acelerando los ataques, pero también puede fortalecer las defensas. La seguridad de su empresa debe avanzar al mismo ritmo que sus aplicaciones.

La pregunta ya no es si su negocio es lo bastante grande para atraer a un delincuente, sino si sus sistemas están preparados para resistir el próximo intento. Y ese intento puede ocurrir hoy.

**RECUADRO  ·  CINCO PREGUNTAS PARA HACERLE HOY A SU PROVEEDOR**

1.  ¿Qué versión de PHP usa nuestro sistema? Las versiones corregidas son 8.5.12, 8.4.27, 8.3.36 y 8.2.35.[3]
2.  Si usamos PHP 8.1 o anterior, ¿cuándo migramos a una versión con soporte y qué protección temporal tenemos mientras tanto?
3.  ¿Nuestro sistema interno necesita estar abierto a todo Internet, o podemos limitar el acceso al personal autorizado?
4.  Tenemos un respaldo contratado: ¿cuándo se hizo la última copia, está en el mismo servidor o en uno remoto, y cuándo se comprobó que se puede recuperar? Si está en el mismo servidor, un atacante podría borrarla junto con todo lo demás.
5.  ¿Quién vigila los intentos de ataque y cómo nos avisa si detecta algo?

![](https://raw.githubusercontent.com/itnewslat/assets/refs/heads/master/img/540x320/Gerardo-Sandoval-p.jpg)

<table style="height: 42px;" width="569">
<tbody>
<tr>
<td style="text-align: justify;"><sub><strong>Somos ITNEWS.LAT, y nuestras noticias también son publicadas a través de nuestra cuenta en Twitter <a href="https://twitter.com/itnewslat?lang=es"> @ITNEWSLAT</a> o INSTAGRAM <a href="https://www.instagram.com/itnewslat/">@ITNEWSLAT</a> y en las aplicaciones como <a href="https://itnews.lat/app">nuestra APP</a> y <a href="https://squidapp.co/en/">SQUID</a></strong></sub></td>
</tr>
</tbody>
</table>

<img src="https://tracker.metricool.com/c3po.jpg?hash=56f88a41e39ab42c063cc51676587a04"/>
