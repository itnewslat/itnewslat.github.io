---
layout: posts
color-schema: red-dark
date: '2022-01-12 10:27 -0500'
published: true
superNews: false
superArticle: false
year: '2022'
title: Qué es un ataque de Man‑in‑the‑Middle y cómo funciona
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/secuestro-de-datos-g.jpg
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/secuestro-de-datos-p.jpg
categories:
  - Venezuela
  - Colombia
  - Argentina
  - Perú
  - Ecuador
  - Chile
  - Panama
  - Mexico
tags:
  - Seguridad
week: '2'
---
- La compañía de seguridad informática, ESET, advierte sobre los ataques de Man-in-the-Middle, qué son, cómo se realizan y cómo protegerse.

ESET, compañía líder en detección proactiva de amenazas, analiza Man-in-the-Middle (MitM), que en español significa “hombre en el medio”, un tipo de ataque destinado a interceptar, sin autorización, la comunicación entre dos dispositivos conectados a una red. Este permite a un agente malintencionado manipular el tráfico interceptado de diferentes formas, ya sea para escuchar la comunicación y obtener información sensible, como credenciales de acceso, información financiera, etc., o para suplantar la identidad de alguna de las partes.
 
Para que un ataque MitM funcione correctamente, el delincuente debe asegurarse que será el único punto de comunicación entre los dos dispositivos, es decir, debe estar presente en la misma red que los dispositivos apuntados en el ataque para cambiar la tabla de enrutamiento para cada uno de ellos.
Si bien técnicamente sería posible secuestrar los routers de los proveedores de Internet y alterar arbitrariamente sus tablas de enrutamiento, la complejidad de este tipo de ataque a distancia es mayor.
 
A continuación, ESET analiza el tipo de ataque desde dentro de la red:
 
Ejecución del ataque: Como sucede en la mayoría de los ataques, incluso si el delincuente no tiene un profundo conocimiento sobre lo que va a ejecutar, podrá llevarlo a cabo, aunque sea de forma mecánica. Por eso es desde ESET destacan la importancia de siempre tomar medidas de protección.
 
Cuando se está ejecutando un tipo de ataque MitM, el delincuente se hace pasar por la dirección de destino de la víctima, que suele ser un router o alguna otra dirección de puerta de entrada a esa red. Las herramientas que utilizaron en este tipo de ataque fue de envenenamiento de ARP, también conocido como ARP spoofing o envenenamiento de tablas ARP. El ARP, o Adress Resolultion Protocol, es un protocolo de resolución de dirección que se utiliza en la comunicación entre direcciones IP y la dirección física de un equipo, más conocida como dirección MAC.

El software utilizado para automatizar este ataque fue Ettercap a través de la línea de comandos. Después de ejecutar el comando, la víctima cree que el atacante es la puerta de enlace y comienza a enviarle todas sus solicitudes.
 
Consecuencias de un ataque de Man-in-the-Middle: Es posible desarrollar amenazas para realizar determinadas acciones dentro del tráfico interceptado o utilizar alguna de las soluciones ya creadas para realizar estas modificaciones. Algunas de estas funcionalidades permiten:

Realizar capturas de pantalla de lo que observa la víctima cada cierto tiempo;
Insertar en la página a la que se accede código en JavaScript creado por el atacante;
Ejecutar procesos que intentan abrir tráfico encriptado HTTPS;
Insertar un keylogger que capture todo lo que escribe la víctima.
 
Con esto, las opciones de ataque son prácticamente ilimitadas, y aún es posible utilizar el ataque para dirigir el tráfico a otros frameworks con aún más funcionalidades, como, por ejemplo, BeEF. “Además del enfoque MitM más tradicional, los delincuentes usan este concepto de interceptar las acciones de las víctimas en varios otros tipos de ataques, como la alteración de la memoria cuando la víctima usa el portapapeles (al copiar y pegar algo), ataques de Man-in-the-Browser (que significa hombre en el navegador) cuando el ciberdelincuente modifica información transmitida directamente por el navegador, por ejemplo, cuando se realiza una compra. Todos estos tipos de ataques tienen un impacto significativo en las víctimas y la mayoría de ellos no muestran signos de que la víctima esté siendo atacada en ese momento, lo que hace que las medidas de protección frente a este tipo de amenazas sean aún más necesarias.”, comenta Daniel Barbosa, Investigador de Seguridad informática de ESET Latinoamérica.
 
ESET comparte algunos consejos para protegerse de un ataque de Man-in-the-Middle:
Siempre desconfíar de las redes Wi-Fi: por definición, las redes Wi-Fi son más susceptibles a los ataques si alguien ha podido acceder a la red legítima de manera no autorizada o porque los actores maliciosos crean una red con el mismo nombre que la red legítima para engañar a los usuarios y que se conecten. Tener siempre cuidado al utilizar redes Wi-Fi públicas. En caso de necesitar utilizarlas, evitar compartir información importante y descargar archivos.
Solo instalar software de fuentes conocidas: muchas amenazas se esconden detrás de software o archivos que parecen inofensivos. Por eso es importante asegurarse de que el software que se necesita descargar provenga de una fuente confiable para disminuir las posibilidades de que la descarga haya sido manipulada. Si un ataque Man-in-the-Middle ya está en marcha, es posible que los ciberdelincuentes puedan cambiar el archivo de destino que se descargará.
Antimalware: una de las formas más eficientes de prevenir la mayoría de las amenazas. Tener siempre en los dispositivo una solución de seguridad correctamente instalada, actualizada y configurada para detener las amenazas que llegan a través de archivos o redes.

En caso de querer proteger un entorno de red corporativa de los ataques MitM, se recomienda tomar algunas medidas adicionales:
 
Segregar redes: sacar hosts del mismo dominio de colisión ayuda a evitar que se realicen ataques en toda la red a la vez.
Firewall: proteger estas redes con un firewall que tenga reglas adecuadas, evitando interacciones no deseadas.
Configurar los routers: muchos dispositivos de red tienen la capacidad de inspeccionar la tabla ARP para evitar ataques de envenenamiento, identificar si sus dispositivos tienen esta función y, si la tienen, habilitarla.

![](https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/secuestro-de-datos-p.jpg)

<table style="height: 42px;" width="569">
<tbody>
<tr>
<td style="text-align: justify;"><sub><strong>Nuestras noticias también son publicadas a través de nuestra cuenta en Twitter <a href="https://twitter.com/itnewslat?lang=es">@ITNEWSLAT</a> y en la aplicación <a href="https://squidapp.co/en/">SQUID</a></strong></sub></td>
</tr>
</tbody>
</table>

<img src="https://tracker.metricool.com/c3po.jpg?hash=56f88a41e39ab42c063cc51676587a04"/>
