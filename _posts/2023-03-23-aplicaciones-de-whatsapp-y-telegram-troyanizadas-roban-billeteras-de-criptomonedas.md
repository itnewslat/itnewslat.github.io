---
layout: posts
color-schema: red-dark
date: '2023-03-23 19:06 -0500'
published: true
superNews: false
superArticle: false
year: '2023'
title: >-
  Aplicaciones de WhatsApp y Telegram troyanizadas roban billeteras de
  criptomonedas
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/whatsapp-estafa-g.jpg
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/whatsapp-estafa-p.jpg
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
week: '12'
---
ESET, compañía líder en detección proactiva de amenazas, analizó una serie de programas maliciosos para Android y Windows que son capaces de manipular los mensajes en ambas apps y usar el reconocimiento óptico de caracteres para robar fondos de billeteras de criptomonedas.
Bogotá - El equipo de investigación de ESET, compañía líder en detección proactiva de amenazas descubrió docenas de sitios web que se hacían pasar por Telegram y WhatsApp apuntando principalmente a usuarios de Android y Windows con versiones troyanizadas de estas aplicaciones de mensajería instantánea.

La mayoría de las aplicaciones maliciosas identificadas son clippers, un tipo de malware que roba o modifica el contenido almacenado en el portapapeles (en inglés clipboard). Todos estos clippers buscan robar los fondos de las víctimas, y varios apuntan a las billeteras de criptomonedas. Esta es la primera vez que desde ESET se observa el uso de clippers para Android disfrazados como apps de mensajería instantánea. Además, algunas de estas aplicaciones utilizan el reconocimiento óptico de caracteres (OCR) para reconocer el texto de las capturas de pantalla almacenadas en los dispositivos comprometidos, otra novedad para el malware de Android.

“No solo se identificaron los primeros clippers en apps de mensajería instantánea, sino que se descubrió varios grupos de ellos. El propósito principal de los clippers descubiertos es interceptar las comunicaciones en las apps de mensajería que utiliza la víctima y reemplazar cualquier dirección de billetera de criptomonedas enviada y recibida con direcciones que pertenecen a los atacantes. Además de las versiones troyanizadas de las aplicaciones de WhatsApp y Telegram para Android, también se encontraron de las mismas apps para Windows”, comentó Camilo Gutiérrez Amaya, Jefe del Laboratorio de Investigación de ESET Latinoamérica.

¿Qué es un clipper y por qué los ciberdelincuentes lo utilizan? Es una pieza de código malicioso que copia o modifica el contenido en el portapapeles de un sistema. Los clippers son atractivos para los ciberdelincuentes interesados ​​en robar criptomonedas porque las direcciones de las billeteras de criptomonedas en línea están compuestas de largas cadenas de caracteres y, en lugar de escribirlas, los usuarios tienden a copiar y pegar las direcciones usando el portapapeles. Un clipper puede aprovechar esto interceptando el contenido del portapapeles y reemplazando cualquier dirección de billetera de criptomonedas copiada con una a la que los atacantes tienen bajo su control.

Según ESET, los operadores detrás de estas amenazas primero configuraron anuncios de Google que conducen a canales de YouTube fraudulentos, que luego redirigen a los desafortunados espectadores a imitar los sitios web de Telegram y WhatsApp. Además de eso, un grupo en particular de Telegram también anunció una versión maliciosa de la aplicación que afirmaba tener un servicio proxy gratuito fuera de China. Cuando ESET descubrió estos anuncios fraudulentos y los canales de YouTube relacionados, los informó a Google, que los cerró todos de inmediato.

En cuanto a la distribución, según el idioma utilizado en las aplicaciones que se presentan como copias, parece que los operadores detrás de ellas se dirigen principalmente a usuarios de habla china. Debido a que tanto Telegram como WhatsApp están bloqueados en China desde hace varios años, con Telegram bloqueado desde 2015  y WhatsApp desde 2017, las personas que desean utilizar estos servicios tienen que recurrir a medios alternativos para obtenerlos.

“A primera vista, puede parecer compleja la forma en que se distribuyen estas aplicaciones que se hacen pasar por legítimas. Sin embargo, es posible que con Telegram, WhatsApp y la aplicación Google Play bloqueadas en China, los usuarios de Android estén acostumbrados a pasar por varios obstáculos si quieren obtener aplicaciones que no están disponibles oficialmente. Los ciberdelincuentes son conscientes de esto y tratan de atrapar a sus víctimas desde el primer momento, cuando la víctima busca en Google una aplicación de WhatsApp o Telegram para descargar.”, agrega Gutiérrez Amaya de ESET.

Los atacantes compraron Google Ads que redirigen a YouTube, lo que ayuda a los atacantes a llegar a la parte superior de los resultados de búsqueda y también evita que los sitios web falsos que utilizan sean marcados como estafas, ya que los anuncios se vinculan a un servicio legítimo que Google Ads presumiblemente lo considera confiable.

Los enlaces a los sitios web copia generalmente se pueden encontrar en la sección “Acerca de” de los canales de YouTube. Un ejemplo de tal descripción se puede ver en una traducción muy aproximada en la Figura 4.

Durante la investigación, ESET encontró cientos de canales de YouTube que apuntan a docenas de sitios web falsos de Telegram y WhatsApp. Estos sitios se hacen pasar por servicios legítimos y ofrecen versiones de escritorio y móviles de la aplicación para descargar. Ninguna de las aplicaciones analizadas estaba disponible en la tienda Google Play.

El objetivo principal de las aplicaciones para Android troyanizadas es interceptar los mensajes de chat de las víctimas y cambiar cualquier dirección de billetera de criptomonedas por otras pertenecientes a los atacantes, o filtrar información confidencial que permitiría a los atacantes robar los fondos de criptomonedas de las víctimas. Esta es la primera vez que ESET identifica clippers que apuntan específicamente a apps de mensajería instantánea.

Desde ESET observaron que al reemplazar las direcciones de las billeteras las aplicaciones troyanizadas para Telegram se comportan de manera diferente a las de WhatsApp. Una víctima que use la versión maliciosa de la aplicación de Telegram seguirá viendo la dirección original hasta que se reinicie la aplicación, después de lo cual la dirección mostrada será la que pertenece al atacante. Por el contrario, la propia dirección de la víctima se verá en los mensajes enviados si utiliza una versión troyanizada de WhatsApp, mientras que el destinatario del mensaje recibirá la dirección del atacante.

ESET acerca consejos de prevención y desinstalación para Android:

1. Instalar aplicaciones solo de fuentes confiables, como la tienda Google Play.
1. Si se está compartiendo direcciones de billeteras de criptomonedas a través de la aplicación para Android de Telegram, verificar dos veces si la dirección que se envió coincide con la dirección que se muestra después de reiniciar la aplicación. De lo contrario, advertir al destinatario que no utilice la dirección e intentar eliminar el mensaje. Desafortunadamente, esta técnica no se puede aplicar a la versión troyanizada de WhatsApp para Android.
1. Tener en cuenta que el consejo anterior no aplica para la versión troyanizada de Telegram, ya que el destinatario de la dirección de la billetera solo ve la billetera del atacante y no tendrá herramientas para saber si la dirección es genuina.
1. No almacenar en el dispositivo imágenes o capturas de pantalla sin cifrar que contengan información confidencial, como frases mnemotécnicas, contraseñas y claves privadas.
1. Si se cree que tiene en su dispositivo una versión troyanizada de Telegram o WhatsApp, eliminarla manualmente de su dispositivo y descargar la aplicación desde Google Play o directamente desde el sitio web legítimo. 

Recomendaciones de ESET para la prevención y desinstalación en Windows:

1. En caso de que estar seguro que el instalador de Telegram es legítimo, verificar si la firma digital del archivo es válida y se emitió a Telegram FZ-LLC.
1. Si se sospecha que la aplicación Telegram es maliciosa, se recomienda utilizar una solución de seguridad para detectar la amenaza y eliminarla. Incluso de no poseer dicho software, se puede utilizar el escáner online y gratuito de ESET.
1. La única versión oficial de WhatsApp para Windows está actualmente disponible en la tienda de Microsoft. Si se instaló la aplicación desde cualquier otra fuente, se recomienda eliminarla y luego escanear el dispositivo.

![](https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/whatsapp-estafa-p.jpg)

<table style="height: 42px;" width="569">
<tbody>
<tr>
<td style="text-align: justify;"><sub><strong>Nuestras noticias también son publicadas a través de nuestra cuenta en Twitter <a href="https://twitter.com/itnewslat?lang=es">@ITNEWSLAT</a> y en la aplicación <a href="https://squidapp.co/en/">SQUID</a></strong></sub></td>
</tr>
</tbody>
</table>
<img src="https://tracker.metricool.com/c3po.jpg?hash=56f88a41e39ab42c063cc51676587a04"/>
