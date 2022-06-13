---
layout: posts
color-schema: red-dark
date: '2022-06-13 05:39 -0500'
published: true
superNews: false
superArticle: false
year: '2022'
title: 'SMSFactory: el troyano que amenaza a los celulares Android'
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/Virus-Android-g.jpg
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Virus-Android-p.jpg
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
week: '24'
---
- Avast protegió a más de 165 000 personas en todo el mundo de esta amenaza en un año.

Avast ha estado rastreando una campaña de malware muy extendida que consiste en malware TrojanSMS, al que llamamos SMSFactory. SMSFactory desvía furtivamente dinero de víctimas de todo el mundo, incluidos Rusia, Brasil, Argentina, Turquía, Ucrania, EE. UU., Francia y España, entre otros, mediante el envío de SMS premium y llamadas a números de teléfono con tarifa premium. Estos números parecen ser parte de un esquema de conversión, donde el SMS incluye un número de cuenta, identificando quién debe recibir el dinero por los mensajes enviados. Si no se detecta, puede generar una factura telefónica alta, hasta $7 (USD) por semana o $336 (USD) por año, dejando una sorpresa desagradable para las víctimas. Una versión que encontramos también es capaz de extraer las listas de contactos de las víctimas, lo que probablemente propague más el malware. 

Hemos denominado SMSFactory al malware debido a sus funciones, así como a los nombres de clase en su código, uno de los cuales se llama SMSFactory. 

Según mi investigación, el malware se está propagando a través de publicidad maliciosa, notificaciones automáticas y alertas que se muestran en sitios que ofrecen trucos de juegos, contenido para adultos o sitios de transmisión de videos gratuitos, y sirven el malware disfrazado como una aplicación en la que los usuarios pueden acceder a juegos, videos o contenido para adultos Una vez instalado, el malware se oculta, lo que hace que sea casi imposible para las víctimas detectar que está causando los cargos en sus facturas telefónicas. 

Se han creado una serie de sitios web con el objetivo de difundir y controlar remotamente el malware. Avast ha protegido a más de 165 000 usuarios propios de SMSFactory el año pasado (mayo de 2021-mayo de 2022), con la mayor cantidad de usuarios protegidos en Rusia, Brasil, Argentina, Turquía y Ucrania.

**Envío silencioso de señales**

Los malos actores detrás de SMSFactory confían en la publicidad maliciosa para impulsar su campaña. La publicidad maliciosa se refiere al uso indebido de anuncios para redirigir a los usuarios a sitios con cargas útiles de malware y, a menudo, pueden aparecer en sitios web que ofrecen transmisión gratuita de películas y programas de televisión, contenido para adultos o agregadores de torrents, pero ocasionalmente también pueden aparecer en sitios principales. 

La redirección en este caso conduce a un sitio web como el que se muestra en la siguiente captura de pantalla. Se le pide al usuario que descargue un archivo que se parece al sitio desde el que se redirigió al usuario. Esto puede ser, por ejemplo, una aplicación de pirateo de juegos, una aplicación de contenido para adultos, una aplicación de transmisión de video gratuita o similar. 

Una vez que el usuario hace clic en Descargar, se descarga la aplicación maliciosa. Como proviene de una fuente de terceros, el sitio web solicita al usuario que ignore la advertencia Play Protect incorporada de Android y continúe con la instalación.

Una vez instalado, el usuario se encuentra con una pantalla de bienvenida. Al hacer clic en aceptar, se activará el comportamiento malicioso de la aplicación. Luego, la aplicación le presenta al usuario un menú básico de videos, contenido para adultos y juegos que no funcionan o no están disponibles la mayor parte del tiempo. 

**Listo o no, ¡aquí vienen los cargos!**

SMSFactory utiliza varios trucos para permanecer en el dispositivo de la víctima y pasar desapercibido. Tiene un ícono en blanco y puede ocultar su presencia al usuario eliminando el ícono de la aplicación de la pantalla de inicio. Además, viene sin nombre de aplicación, lo que dificulta que el usuario descubra la aplicación infractora y la elimine. Es evidente que el malware se basa en que el usuario olvide la aplicación en su teléfono.

**Se utiliza un icono en blanco y la ausencia del nombre de la aplicación para disfrazar las aplicaciones.**

Una vez oculto, el malware se comunica con un dominio preestablecido. Envía una identificación única asignada al dispositivo, su ubicación, número de teléfono, información del operador y modelo del teléfono. Si los actores detrás de esta campaña consideran que el dispositivo de la víctima se puede utilizar, el dominio envía instrucciones al dispositivo. Esta será una lista de números de teléfono a los que el malware enviará SMS premium o un número específico al que la aplicación intentará llamar.

Ambos resultarán en cargos excesivos para la víctima. La cantidad exacta depende del comando enviado por los actores detrás de SMSFactory: en nuestras pruebas, hemos visto un cargo diario de $ 1 (USD) a través de diez mensajes SMS enviados, que pueden acumularse hasta $ 28 (USD) por mes. Suponiendo que las víctimas no noten u olviden que la aplicación está instalada, esto podría resultar en una factura telefónica exorbitante.

Una parte de los permisos utilizados por SMSFactory: los permisos de SMS/MMS, así como CALL_PHONE, se utilizan para desviar dinero de las víctimas mediante el envío de mensajes y llamadas a números de tarifa premium.

Debido a la naturaleza del malware, es posible que el usuario desconozca el daño financiero hasta que reciba su factura telefónica. Mientras tanto, SMSFactory podría acumular cargos significativos y puede ser difícil para el usuario identificar al culpable debido a que la aplicación se oculta.

**Diferentes versiones de fábrica**

SMSFactory también parece tener varias versiones diferentes con funciones adicionales, que han aparecido junto con esta campaña reciente. Una de esas variaciones puede crear una nueva cuenta de administrador en el dispositivo Android, lo que podría dificultar su eliminación. Otra variante copia la lista de contactos de la víctima y la extrae, probablemente para ser utilizada para una mayor propagación del malware. Algunas versiones redirigen a los usuarios a sitios para que instalen otra aplicación SMSFactory en su dispositivo. 

**Solo unas pocas muestras de SMSFactory contienen una breve página de 'Condiciones'**

También existen diferencias visuales entre estas versiones de SMSFactory. Las versiones anteriores que se hacían pasar por hacks de juegos tenían un ícono, mientras que las versiones más nuevas eliminaron el ícono y el nombre de la aplicación por completo. Los términos y condiciones en la captura de pantalla anterior, que mencionan las llamadas/SMS premium de fondo, solo están presentes en una versión del malware que encontré, otras versiones no incluyen esta información en absoluto.

**Lo que hace que SMSFactory sea único**

A diferencia de las recientes campañas de TrojanSMS como UltimaSMS (sitio en inglés) o Grifthorse, el vector de propagación de SMSFactory varía significativamente. Sus funciones de sigilo, como la ausencia del icono y el nombre de la aplicación, no estarían permitidas en Google Play Store, por lo que los malhechores han recurrido a una red de sitios razonablemente intrincada para la entrega y posterior comunicación con el malware. 

Otra novedad es la pantalla de introducción que no requiere la entrada de un número de teléfono para iniciar las funciones del malware, a diferencia del anterior malware SMS premium. Donde las campañas anteriores de TrojanSMS suscriben a la víctima a servicios premium, SMSFactory simplemente envía una serie de SMS a números premium para extraer dinero.

**Usuarios afectados **

A pesar de su falta de presencia en Play Store, según nuestros datos, hemos protegido a más de 165 000 usuarios de Avast del malware solo en el último año. Como lo demuestra la gran cantidad de usuarios afectados junto con las nuevas versiones que aparecieron recientemente, es justo decir que SMSFactory es un malware activo y es probable que continúe propagándose.

Como se puede ver en el mapa de arriba, las regiones en las que protegimos a la mayoría de los usuarios de Avast de SMSFactory durante el último año se encuentran en Rusia, Brasil, Argentina, Turquía y Ucrania. Parece que SMSFactory no está dirigido a una región o país específico, su objetivo es extenderse a tantos dispositivos como sea posible.

**Consejos sobre cómo evitar malware móvil como SMSFactory**

Utiliza las tiendas de aplicaciones oficiales. SMSFactory destaca la importancia de utilizar tiendas de aplicaciones verificadas para instalar aplicaciones. Las tiendas de terceros o las fuentes desconocidas pueden contener malware y no están bloqueadas por una autoridad, como Google.
Instala un antivirus en tu dispositivo móvil. Esto es especialmente importante si deseas instalar aplicaciones de fuentes no oficiales. También puede protegerte de sitios web maliciosos de esta manera. El antivirus actúa como una red de seguridad, protegiendo incluso a los usuarios más cuidadosos.
No bajar la guardia. Es importante ser cauteloso al descargar nuevas aplicaciones, especialmente las anunciadas en videos cortos y atractivos, o mediante notificaciones automáticas en el navegador. 

Deshabilita o limita los SMS premium con tu operador. Si bien existen usos legítimos para los SMS premium, las recientes campañas de malware de SMS destacan la importancia del control sobre los cargos potenciales en el contrato telefónico de un usuario. Deshabilitar las funciones premium de SMS o al menos establecer un límite anula significativamente el impacto potencial de las campañas de TrojanSMS. Este paso es especialmente importante en los teléfonos de los niños.

![](https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Virus-Android-p.jpg)

<table style="height: 42px;" width="569">
<tbody>
<tr>
<td style="text-align: justify;"><sub><strong>Nuestras noticias también son publicadas a través de nuestra cuenta en Twitter <a href="https://twitter.com/itnewslat?lang=es">@ITNEWSLAT</a> y en la aplicación <a href="https://squidapp.co/en/">SQUID</a></strong></sub></td>
</tr>
</tbody>
</table>

<img src="https://tracker.metricool.com/c3po.jpg?hash=56f88a41e39ab42c063cc51676587a04"/>