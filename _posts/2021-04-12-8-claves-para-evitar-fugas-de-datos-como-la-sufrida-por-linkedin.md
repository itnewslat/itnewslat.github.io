---
layout: posts
color-schema: red-dark
date: '2021-04-12 10:56 -0400'
published: true
superNews: false
superArticle: false
year: '2021'
title: 8 claves para evitar fugas de datos como la sufrida por LinkedIn
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/datos-p.jpg
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/datos-g.jpg
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
week: '16'
---
<ul style="text-align: justify;">
	<li><strong><em>Según el equipo de Paradigma Digital el robo de datos sufrido por LinkedIn no deriva de una brecha de seguridad sino del uso de técnicas de scrapping </em></strong></li>
</ul>
<p style="text-align: justify;">Tras el reciente robo de datos de 500 millones de cuentas sufrido por LinkedIn, los expertos en seguridad y protección de datos de <a href="https://www.paradigmadigital.com/">Paradigma Digital</a> han querido compartir un análisis que han realizado sobre las causas de este hackeo masivo y cómo evitarlas.</p>
<p style="text-align: justify;">Para <strong>José Couto</strong> responsable de seguridad en Paradigma “<em>El foco del problema y la solución para evitar este tipo de problemas en un futuro está en aplicar medidas de seguridad ya en el inicio es decir en los desarrollos, como cifrar los datos, limitar la cantidad de información que devuelven las API o fijar alertas para detectar intentos de scrapping entre otros. Estos controles deben establecerse a nivel de API y de bases de datos, para evitar volcados directos de la información</em>”. Además “<em>asegurar la legitimidad de las bases de datos es esencial también</em>” afirma <strong>Carmen Troncoso</strong>, responsable de protección de datos en Paradigma Digital.</p>
<p style="text-align: justify;">Según el equipo de Paradigma Digital el robo de datos de cuentas sufrido por LinkedIn no deriva de una brecha de seguridad sino del uso de técnicas de scrapping, una técnica utilizada mediante programas de software para extraer información de sitios web. Usualmente, estos programas simulan la navegación de un humano en la World Wide Web ya sea utilizando el protocolo HTTP manualmente, o incrustando un navegador en una aplicación. Entre las medidas que los expertos de Paradigma Digital recomiendan implementar fugas de información destacan las siguientes como claves:</p>

<ol style="text-align: justify;">
	<li><strong>Cifrar los datos</strong>: es necesario guardar la información cifrada, en el caso de las contraseñas, no hay que tener copia, sino resúmenes digitales bien configurados.</li>
	<li><strong>Limitar la cantidad de información que devuelven las API</strong>: tanto limitar las direcciones desde las que se permite interactuar con las API que las gestionan comolimitar el número de entradas simultáneas con las que operan estas API, salvo excepciones bien controladas para labores de mantenimiento.</li>
	<li><strong>Fijar alertas para detectar intentos de scrapping</strong>: establecer alertas para los accesos que intenten superar estos límites, con posibles bloqueos automáticos.</li>
	<li><strong>Proteger las copias de seguridad</strong>: contienen información en bruto por lo que siempre deben estar cifradas, no basta con activar la casilla de almacenamiento cifrado de los proveedores de servicios en la nube, que protegen frente al robo físico de los dispositivos. Y deben estar almacenadas en lugares no accesibles al público, lo que debe comprobarse mediante monitorización.</li>
	<li><strong>Protección de las claves de cifrado: </strong> es fundamental proteger las claves de cifrado. Su acceso debe de estar limitado y monitorizado, con alertas en caso de detectar intentos de acceso anómalos.</li>
	<li><strong>Usar medidas como captchas para que la creación de nuevas cuentas sea difícil de automatizar</strong>: para limitar la posibilidad de hacer scraping sobre los datos públicos, es muy recomendable que no sólo que la información pública de los usuarios que esté accesible de forma anónima sea muy limitada sino que la creación de nuevas cuentas sea difícil de automatizar usando por ejemplo captchas, así como limitar el número de accesos simultáneos a una misma cuenta.</li>
	<li><strong>Implementar medidas de detección y bloqueo de intentos de scraping</strong>: mediante análisis de las consultas realizadas a las API o a las bases de datos con sistemas de Machine Learning, para detectar patrones abusivos.</li>
	<li><strong>Tener una base de datos legitimadora</strong>: desde el punto de vista legal, tanto la recopilación de datos, como su almacenamiento, cruce de datos y posterior venta o alquiler, son acciones que constituyen un tratamiento de datos personales. Y por ello resultan de aplicación los requisitos del Reglamento general de protección de datos (RGPD). No contar con una base legitimadora para el tratamiento de los datos es con diferencia la causa de infracción más común de las sanciones impuestas por la AEPD. En particular en relación con el uso indebido de bases de datos para publicidad, tenemos ejemplos como la <a href="https://noticias.juridicas.com/actualidad/jurisprudencia/15883-45-000-libras-de-multa-por-recolectar-datos-de-linkedin-para-ofrecer-planes-de-pensiones/">sanción de 45.000 libras de multa por recolectar datos de LinkedIn para ofrecer planes de pensiones</a>, o la <a href="https://www.aepd.es/es/documento/ps-00059-2020.pdf">sanción récord a Vodafone</a> de 8,1 millones de euros (que ya han anunciado que recurrirán), por incumplir los requisitos   relativos a las acciones comerciales: recogida de consentimientos, bases legitimadoras para los envíos, facilitar el ejercicio de los derechos de oposición de clientes, promociones realizadas por terceros, uso de las listas Robinson, falta de control en los tratamientos, etc, entre ellas, no haber acreditado que se disponga de consentimiento expreso para recibir ofertas comerciales a través de comunicaciones electrónicas (correo electrónico o SMS) por los receptores de las mismas.</li>
</ol>
<p style="text-align: justify;">En cualquiera de los casos, es extremadamente importante contar con un registro de actividades que nos permita investigar cualquier incidente y poder mejorar los controles de seguridad. No podemos olvidarnos de registrar las operaciones que realiza el personal propio, y también que el personal, especialmente el de atención al público, que tiene acceso a las herramientas de administración, debe estar formado sobre ingeniería social y phishing.</p>
<p style="text-align: justify;">En cuanto a las medidas que pueden aplicar los usuarios, lo más importante es no reutilizar la misma contraseña en sitios distintos, ni utilizar patrones fácilmente reconocibles (como alkj479hf-facebook, alkj479hf-linkedin…), habilitar el doble factor de autenticación siempre que esté disponible (evitando que sea por SMS, que es poco seguro) y usar un buen gestor de contraseñas.</p>

![](https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/datos-p.jpg)

<img src="https://tracker.metricool.com/c3po.jpg?hash=56f88a41e39ab42c063cc51676587a04"/>