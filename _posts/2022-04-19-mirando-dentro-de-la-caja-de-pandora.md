---
layout: posts
color-schema: red-dark
date: '2022-04-19 11:58 -0400'
published: true
superNews: false
superArticle: false
year: '2022'
title: Mirando dentro de la caja de Pandora
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Caja-Pandora-p.jpg
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/Caja-Pandora-g.jpg
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
week: '16'
---
En la mitología griega, la apertura de la infame caja de Pandora introdujo cosas terribles al mundo. Eso también se puede decir sobre el ransomware de hoy. El recién surgido ransomware Pandora, que tomó su nombre, no es una excepción. Roba datos de la red, cifra los archivos de la víctima y libera los datos robados si la víctima opta por no pagar. El mito griego dice que la esperanza quedó en la caja. ¿Es eso cierto para el ransomware Pandora, un malware emergente que muestra todas las técnicas utilizadas por el ransomware moderno? En este artículo, los analistas del laboratorio de inteligencia de amenazas de Fortinet, FortiGuard Labs, están echando un vistazo dentro de la caja de Pandora para descubrir qué misterios contiene. 
 
**El grupo Pandora**
 
El grupo de ransomware Pandora surgió en el ya abarrotado campo del ransomware a mediados de febrero de 2022 y apunta a las redes corporativas para obtener ganancias financieras. El grupo recibió publicidad reciente después de que anunciaron que adquirieron datos de un proveedor internacional en la industria automotriz. El incidente fue una sorpresa ya que el ataque se produjo dos semanas después de que otro proveedor automotriz fuera golpeado con un ransomware desconocido, lo que resultó en que uno de los fabricantes de automóviles más grandes del mundo suspendiera las operaciones de la fábrica. El grupo de amenaza utiliza el método de doble extorsión para aumentar la presión sobre la víctima. Esto significa que no solo cifran los archivos de la víctima, sino que también los exfiltran y amenazan con divulgar los datos si la víctima no paga.
 
El grupo Pandora tiene un sitio de filtraciones en la Dark Web (red TOR), donde anuncian públicamente a sus víctimas y las amenazan con la fuga de datos. Actualmente hay tres víctimas enumeradas en el sitio de la filtración (ver Figura 1), una agencia de bienes raíces con sede en los Estados Unidos, una compañía de tecnología japonesa y un bufete de abogados de los Estados Unidos.
 
FortiGuard Labs analizó la muestra de un malware de Pandora, que se incluyó en un archivo de Windows PE de 64 bits. El ejemplo sigue los siguientes pasos:
 
1. **Desempaquetado**: el malware está empaquetado, por lo que el primer paso es descomprimir el contenido real en la memoria del dispositivo.
1. **Mutex**: crea un mutex para hacer posible que un hilo de múltiples programas haga uso de este único recurso.
1. **Deshabilitar las funciones de seguridad**: puede eliminar copias instantáneas de Windows.
1. **Recopilar información del sistema**: se utiliza para recopilar información sobre el sistema local.
1. **Cargar la clave pública codificada**: una clave pública está codificada en el malware para configurar la criptografía para el cifrado.
1. **Almacenar claves privadas y públicas en el registro**: Se genera una clave privada y tanto la clave pública codificada como la clave privada recién generada se almacenan en el registro.
1. **Búsqueda de Unidades**: busca unidades desmontadas en el sistema y las monta para cifrarlas también.
1. **Configuración de subprocesos múltiples**: el malware utiliza subprocesos de trabajo para distribuir el proceso de cifrado. 
1. **Enumerar el sistema de archivos**: los subprocesos de trabajo comienzan a enumerar los sistemas de archivos de las unidades identificadas.
1. **Dejar caer la nota de rescate**: la nota de rescate se deja caer en cada carpeta.
1. **Comprobar la lista negra de nombres de archivos**: para cada archivo y carpeta se comprueba una lista negra de nombres de archivo/carpeta. Si el archivo/carpeta está en la lista negra no será encriptado.
1. **Comprobar la lista negra de extensiones de archivos**: cada archivo se comprueba con una lista negra de extensiones de archivos. Si la extensión está en la lista, no se cifrará.
1. **Desbloquear archivo**: si el archivo está bloqueado por un proceso en ejecución, el malware intentará desbloquearlo mediante el Administrador de Reinicio de Windows.
1. **Cifrar archivo**: los hilos de trabajo cifrarán el archivo y lo escribirán de nuevo en el archivo original.
1. Cambiar el nombre del archivo: una vez finalizado el cifrado, los archivos se renombran a [original-nombre].pandora

Uno de los aspectos más significativos del ransomware Pandora es el amplio uso de técnicas de ingeniería inversa para evadir los controles de seguridad. Esto no es nuevo para un malware, pero Pandora se encuentra en el lado extremo de lo que se invierte en ralentizar el análisis. 
Esta muestra del ransomware Pandora fue detectada y analizada por la firma AV: W64/Filecoder.EGYTYFD!tr.ransom

**Conclusión**

El ransomware Pandora contiene todas las principales características que suelen contener las muestras de ransomware de última generación. El nivel de ofuscación para ralentizar el análisis es más avanzado que el del malware medio. Este grupo de ciber atacantes también prestó atención al desbloqueo de archivos para garantizar la máxima cobertura de encriptación, al tiempo que permite el funcionamiento del dispositivo. 
 Actualmente no hay pruebas de que Pandora opere como Ransomware-as-a-Service (RaaS), pero la inversión de tiempo en la complejidad del malware podría indicar que se están moviendo en esa dirección a largo plazo. Los ataques y filtraciones actuales podrían ser una forma de hacerse un nombre en el campo del ransomware, que podrían capitalizar si adoptan el modelo RaaS más adelante. Vale la pena rastrear al actor de amenazas para monitorear cómo cambia su malware, y así lo haremos. Debemos estar atentos y mejor preparados con tecnología avanzada de detección, prevención y respuesta ya que es de esperar que Pandora siga desarrollando 
 
![](https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Caja-Pandora-p.jpg)

<table style="height: 42px;" width="569">
<tbody>
<tr>
<td style="text-align: justify;"><sub><strong>Nuestras noticias también son publicadas a través de nuestra cuenta en Twitter <a href="https://twitter.com/itnewslat?lang=es">@ITNEWSLAT</a> y en la aplicación <a href="https://squidapp.co/en/">SQUID</a></strong></sub></td>
</tr>
</tbody>
</table>

<img src="https://tracker.metricool.com/c3po.jpg?hash=56f88a41e39ab42c063cc51676587a04"/>


