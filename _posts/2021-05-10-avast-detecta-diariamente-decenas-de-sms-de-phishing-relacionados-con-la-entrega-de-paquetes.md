---
layout: posts
color-schema: red-dark
date: '2021-05-10 12:35 -0400'
published: true
superNews: false
superArticle: false
year: '2021'
title: "Avast detecta diariamente decenas de SMS de phishing relacionados con la entrega de paquetes\_"
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Ataque-Entidades-Financieras-p.jpg
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/Ataque-Entidades-Financieras-g.jpg
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
week: '21'
---
<p style="text-align: justify;"><em>Se trata de una campaña de malware dirigida a los usuarios de móviles de todo el mundo cuyo objetivo es robar información personal</em></p>
<p style="text-align: justify;">En las últimas semanas, los usuarios de dispositivos móviles en varios países han recibido mensajes SMS vinculados a un malware bancario llamado “FluBot”. Esta amenaza pretende ser de una empresa de mensajería y pide a los usuarios que instalen una aplicación de seguimiento para rastrear el estado del paquete, pero de hecho se utiliza para robar credenciales y otros datos personales. Avast, que detecta y bloquea esta amenaza protegiendo a sus usuarios de Android, alerta sobre nuevas muestras de FluBot que llegan diariamente a través de su plataforma de inteligencia de amenazas móviles <a href="https://www.apklab.io/">apklab.io</a>.</p>
<p style="text-align: justify;">Según una <a href="https://github.com/prodaft/malware-ioc/blob/master/FluBot/FluBot.pdf">investigación reciente</a>, FluBot ya ha infectado hasta ahora 60.000 dispositivos y el número total de números de teléfono recopilados por los atacantes se estimó en 11 millones a finales de febrero/principios de marzo.</p>
<p style="text-align: justify;">“Los primeros ataques de FluBot se reportaron hace semanas y todavía vemos decenas de nuevas versiones de muestra evolucionando todos los días”, dijo Ondrej David, Líder del equipo de Análisis de Malware en Avast. “Por el momento, los principales objetivos de la campaña atacante son España, Italia, Alemania, Hungría, Polonia y el Reino Unido. Pero existe la posibilidad de que el alcance de la operación se amplíe para apuntar a otros países en un futuro próximo. Si bien las soluciones de seguridad bloquean estos ataques, la rápida continuación de esta campaña demuestra que tiene éxito, por lo que instamos a las personas a tener mucho cuidado con cualquier SMS entrante que reciban, especialmente en lo que respecta a los servicios de entrega.”</p>
<p style="text-align: justify;"><strong>Cómo funciona FluBot</strong></p>
<p style="text-align: justify;">FluBot es un ejemplo de una campaña de malware basada en SMS. Se propaga enviando mensajes SMS que afirman que el destinatario tiene un paquete por ser entregado y les insta a descargar una aplicación de seguimiento utilizando el enlace incluido. Si el destinatario hace clic en el enlace, se le dirige a un sitio que ofrece descargar la aplicación. La aplicación es un malware que, cuando se instala, roba la información de contacto de la víctima y la carga en un servidor remoto. Posteriormente, el servidor utiliza esta información para enviar mensajes adicionales y distribuir aún más los mensajes SMS maliciosos a esos contactos.</p>
<p style="text-align: justify;">La aplicación maliciosa utiliza un componente de Android conocido como Accesibilidad para monitorear lo que sucede en el dispositivo y tomar el control de él. Esto le permite mostrar superposiciones de ventanas de alta prioridad, entre otras cosas. En otras palabras, el malware puede mostrar algo sobre cualquier cosa que esté actualmente en la pantalla. Por ejemplo, un portal bancario falso que se muestra sobre la actividad de una aplicación bancaria legítima. Si el usuario ingresa sus credenciales en esa pantalla superpuesta, pueden ser robadas.</p>
<p style="text-align: justify;">Este componente conocido como Accesibilidad también es explotado por el malware como un mecanismo de autodefensa para cancelar cualquier intento de desinstalación por parte de los usuarios afectados, lo que dificulta su eliminación de los dispositivos infectados.</p>
<p style="text-align: justify;">“Lo que hace que este malware sea particularmente exitoso es que se disfraza de servicios de entrega postal/paquetería, usando texto como 'Su paquete está llegando, descargue la aplicación para rastrearlo' o 'Perdió la entrega de su paquete, descargue la aplicación para rastrearlo', de la que muchos usuarios desprevenidos fácilmente serían víctimas. Especialmente en la situación actual en la que alguna forma de entrega a domicilio se ha convertido en el modo de operación estándar para muchas empresas durante la pandemia”, dijo Ondrej David.</p>
<p style="text-align: justify;">Durante la pandemia, más personas se han acostumbrado a las compras en línea y ya es común recibir paquetes con frecuencia. Según un <a href="https://www.thinkwithgoogle.com/_qs/documents/10736/Gu%C3%ADa_Argentina_consumidores_online_durante_la_pandemia.pdf">estudio de Google</a>, el 30% de los compradores online del último año en Argentina realizaron su primera compra online durante la pandemia y el 92% de estos nuevos compradores online planea seguir comprando online en el futuro. Los ciberdelincuentes que desarrollan malware como este aprovechan las tendencias y los eventos actuales para asegurarse de que atraen a tantas víctimas potenciales como sea posible.</p>
<p style="text-align: justify;"><strong>¿Cómo protegerse de FluBot?</strong></p>
<p style="text-align: justify;">En primer lugar, instalar una solución antivirus que evite amenazas como FluBot. Avast Antivirus para Android detecta y alerta a los usuarios sobre la amenaza protegiendo a los usuarios. Además, si creen que ya están afectados por FluBot, pueden instalar la aplicación antivirus para ejecutar un escaneo en el dispositivo e identificar el malware. Si se encuentra, es recomendable reiniciar el dispositivo en modo seguro y desinstalar la aplicación detectada desde allí. Con este paso, todas las demás aplicaciones de terceros también se desactivarán momentáneamente, pero volverán a estar activas con el próximo reinicio regular.</p>
<p style="text-align: justify;">Si los usuarios piensan que pueden haber sido víctimas de robo de credenciales a través de este ataque, es recomendable restablecer las contraseñas de los servicios que creen que podrían haber sido comprometidos, como aplicaciones bancarias y de compras.</p>
<p style="text-align: justify;">Además, recomendamos a los usuarios que empleen las siguientes medidas para protegerse de FluBot y otros ataques de phishing móvil:</p>

<ul>
	<li style="text-align: justify;"><strong>No hacer clic en enlaces en mensajes SMS. </strong>Especialmente si un mensaje pide instalar un software o aplicaciones en los dispositivos.</li>
	<li style="text-align: justify;"><strong>Ser escéptico.</strong> Ser precavido con cualquier SMS sospechoso. Si se recibe una comunicación que no se esperaba, siempre es mejor que el usuario llame a la empresa por sí mismo utilizando la información de contacto proporcionada en el sitio web legítimo, para confirmar el mensaje recibido. No responder directamente a una comunicación sospechosa. Comenzar siempre una nueva comunicación a través de los canales de servicio oficiales de la empresa.</li>
	<li style="text-align: justify;"><strong>Cuestionar el mensaje. </strong>Es importante entrenar los ojos para detectar mensajes de phishing. Estos tienden a ser genéricos y se extienden a las masas, así como mensajes automáticos o mensajes que presentan una oferta que parece demasiado buena para ser verdad (es decir, cómo ganar un nuevo teléfono inteligente o heredar una gran suma de dinero de un familiar desconocido).</li>
	<li style="text-align: justify;"><strong>No instalar aplicaciones desde cualquier lugar que no sea las tiendas de aplicaciones oficiales.</strong> La mayoría de las principales compañías de envíos tienen sus propias aplicaciones disponibles para descargar en tiendas de confianza como Google Play o Apple App Store. Además, es importante configurar la seguridad del dispositivo móvil para que sólo instale aplicaciones de fuentes confiables como Google Play o la App Store de Apple.</li>
</ul>

![](https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Ataque-Entidades-Financieras-p.jpg)

<img src="https://tracker.metricool.com/c3po.jpg?hash=56f88a41e39ab42c063cc51676587a04"/>