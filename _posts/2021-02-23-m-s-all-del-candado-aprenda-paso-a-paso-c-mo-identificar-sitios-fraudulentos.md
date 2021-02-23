---
layout: posts
color-schema: red-dark
date: '2021-02-23 15:58 -0400'
published: true
superNews: false
superArticle: false
year: '2021'
title: 'Más allá del candado: aprenda paso a paso cómo identificar sitios fraudulentos'
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Seguridad-informacion-p.jpg
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/Seguridad-informacion-g.jpg
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
week: '8'
---
<p style="text-align: justify;">Por: Dean Coclin, Director senior de desarrollo empresarial en Digicert</p>
<p style="text-align: justify;">El robo de contraseñas de sitios web de entretenimiento, WhatsApp falso, noticias falsas sobre Covid-19 y la vacuna, estafas y ataques de ransomware más sofisticados, son algunas de las principales amenazas a las que están expuestos los usuarios. No es nuevo: la tecnología ha facilitado la rutina de las personas y más aún con las pandemias. Hoy en día ya no es necesario salir de casa para realizar un pago, realizar compras o incluso asistir a una reunión. Internet se ha convertido en un universo aparte, lleno de transacciones.</p>
<p style="text-align: justify;">Para evitar estafas, el uso de certificados TLS para proteger e identificar sitios web se ha expandido drásticamente en Internet. Esto ha sido impulsado por navegadores que muestran indicadores negativos para sitios que no son https, lo que alienta a los sitios web a usar TLS. Los certificados TLS vienen en tres versiones: Validado por dominio (DV), Validado organizacionalmente (OV) y Validación extendida (EV). Las diferencias básicas se muestran a continuación:</p>
<p style="text-align: justify;"><strong>● Certificado de validación de dominio</strong></p>
<p style="text-align: justify;">Los certificados de dominio validado se comparan con un registro de dominio para demostrar la propiedad del dominio del sitio. Sin embargo, los certificados DV no ofrecen información de identificación de la organización. Por lo tanto, no se recomienda utilizar certificados DV con fines comerciales.</p>
<p style="text-align: justify;"><strong>● Certificado de validación de la organización</strong></p>
<p style="text-align: justify;">Para recibir un certificado OV, las organizaciones son autenticadas por la CA <em>(Autoridad de certificación)</em> contra las bases de datos del registro empresarial alojadas por los gobiernos. Las CA pueden requerir ciertos documentos y personal de contacto para garantizar que los certificados OV contengan información comercial legítima. Este es el tipo estándar de certificado requerido en un sitio web comercial o público.</p>
<p style="text-align: justify;"><strong>● Certificado de validación extendida</strong></p>
<p style="text-align: justify;">Los certificados EV agregan pasos de validación adicionales y ofrecen el nivel más alto de autenticación para salvaguardar la marca y proteger a sus usuarios. Si bien no todos los sitios de la web utilizan certificados EV, las organizaciones líderes en el mundo los utilizan para garantizar la confianza del usuario. Más de la mitad de los 400 principales sitios de comercio electrónico utilizan EV, según los datos de 2019 de Comscore y Netcraft. Han descubierto que cambiar de certificados OV a EV aumenta las transacciones en línea y mejora la confianza del cliente.</p>
<p style="text-align: justify;">En todos los casos, se proporciona cifrado entre el navegador y el servidor. Sin embargo, el cifrado no proporciona autenticación. Sabemos que el navegador está encriptando datos en algún servidor con un nombre de dominio verificado. Pero no sabemos nada sobre ese dominio con certificado DV. Con OV y EV, recibimos más información sobre el dominio, incluida la ubicación de la empresa (OV), e incluso más detalles con EV.</p>
<p style="text-align: justify;"><strong>Mirando más allá del candado</strong></p>
<p style="text-align: justify;">Con la llegada de una web que está cifrada en más del 90% y con los navegadores que muestran un candado sólido para todos los sitios https, independientemente del tipo de certificado, es una falacia simplemente "buscar el candado", ya que esto es insuficiente para proteger a los usuarios de sitios fraudulentos. Los usuarios deben ser diligentes al buscar pistas sobre la identidad del sitio. Con los certificados EV, debe hacer clic en el candado para ver el nombre legal de la empresa. Esto proporciona una excelente visibilidad de que el sitio ha sido autenticado.</p>
<p style="text-align: justify;">Otra pista que debe buscar es el nombre de la autoridad de certificación (CA) que emitió el certificado del sitio web. Con algunos navegadores, los usuarios pueden colocar el cursor sobre el candado para ver el nombre de la CA. Si el indicador dice "<em>Verificado por DigiCert</em>", puede estar seguro de que la identificación del sitio se ha verificado de acuerdo con los requisitos de la industria. Las CA líderes, como DigiCert, actualizan constantemente los estándares globales mediante los cuales las CA validan las identidades y siguen procesos rigurosos.</p>
<p style="text-align: justify;">Los certificados OV y EV requieren cierto esfuerzo para obtenerlos. Primero, la entidad solicitante debe ser una organización válida y la CA debe buscar registros públicos para autenticarla. Debido a que esto implica mano de obra, existe un costo asociado con la obtención del certificado. Normalmente, estos no son obstáculos para las organizaciones legítimas. Pero para los ciberdelincuentes, proporcionan una fricción significativa, que puede evitarse obteniendo un certificado DV. Por lo tanto, DV se ha convertido en el certificado elegido por piratas informáticos y delincuentes.</p>
<p style="text-align: justify;">Una investigación reciente mostró que casi la mitad de los sitios de phishing ahora tienen candado. La mayoría de las veces, los certificados DV se obtienen con éxito para esos sitios web. Los piratas informáticos saben que pueden solicitar DV automáticamente sin proporcionar ninguna información personal y algunas CA las ofrecen de forma gratuita. Por lo tanto, ni siquiera es necesaria una tarjeta de crédito. Un informe reciente sobre un compromiso de DNS por parte de un supuesto estado-nación afirmaba que los piratas informáticos habían ocultado su operación mediante el uso de "suplantación de certificados", obteniendo certificados de proveedores conocidos de certificados gratuitos o de bajo costo con poca o ninguna validación realizada. Dada la fácil disponibilidad de estos certificados, no es de extrañar que los ciberdelincuentes utilicen DV de forma predeterminada para legitimar sus sitios web.</p>
<p style="text-align: justify;"><strong>Tenga en cuenta lo básico</strong></p>
<p style="text-align: justify;">¿Qué pueden hacer los consumidores para reconocer los sitios web fraudulentos? Tres palabras: examinar, examinar y examinar.</p>

<ol style="text-align: justify;">
	<li>Si bien en el pasado estaba bien buscar la cerradura, ahora se debe examinar la cerradura. Coloque el cursor sobre el candado para ver qué CA emitió el certificado. Si es DigiCert, puede estar seguro de que el sitio web ha sido verificado de acuerdo con los estándares de la industria y que, en el caso de un certificado OV o EV, la identidad del propietario del sitio web ha sido examinada para mayor protección.</li>
	<li>Mire de cerca la barra de direcciones y lea la dirección con atención. ¿Es lo que esperabas?</li>
	<li>Haga clic en el candado para revelar información adicional sobre el sitio. Si usa un certificado EV, el nombre de la empresa se identificará inmediatamente después de hacer clic en el candado.</li>
</ol>
<p style="text-align: justify;"></p>

![](https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Seguridad-informacion-p.jpg)


<img src="https://tracker.metricool.com/c3po.jpg?hash=56f88a41e39ab42c063cc51676587a04"/>