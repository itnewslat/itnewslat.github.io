---
layout: posts
color-schema: red-dark
date: '2018-04-16 20:19 -0400'
published: true
superNews: false
title: La computación en la nube también ayuda a vender
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/nube-p.jpg
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/Nube-g.jpg
categories:
  - Argentina
  - Chile
tags:
  - Transformación Digital
---
Los factores y variables que hacen que una persona ingrese a determinado local de un centro comercial son innumerables. Porque le gustó la vidriera, quiere aprovechar un descuento de temporada… o porque no puede contener el impulso frente a un producto que le encanta. ¿Se pueden establecer patrones? ¿O saber cuánta gente ingresa por hora, por día, y compararlo con otros locales o con el mismo periodo del año anterior?

Con la tecnología que propone Spectro hay respuestas. Internet de las Cosas aplicada al retail, de manera transparente y no invasiva para los compradores, y con un tablero detallado de su comportamiento para los retailers es la fórmula. “Ya existía tecnología que permitía conocer mejor al visitante de una tienda o shopping, pero no estaba explotada”, explica Elvio Tocalino, CTO de Spectro. “Hoy la industria mira los tickets a posteriori, pero no el resto de las variables, como si eligió el plan de pago correcto para sus productos o los precios. Y esto se hace puramente con tecnología, que es donde entra Amazon Web Services (AWS)”, agrega Tocalino.

Spectro nació hace poco más de dos años en Argentina, y desde el primer momento eligió a AWS como su proveedor de servicios de infraestructura en la nube. “Nuestro desarrollo es un componente de hardware, un sensor, y una capa de inteligencia y procesamiento que vive en la nube de Amazon, que analiza los datos. De estos datos, se presentan al cliente con un dashboard web, que combinan información pública −como el clima y las redes sociales− y también la información del cliente, como tickets, e ítems por tickets. Con esto, presentamos un conjunto de cruces que no existían en el tablero”, detalla Tocalino. Por ejemplo, una empresa hace una campaña en redes sociales y con Spectro puede saber cuánta gente fue al local, si aumentó el carrito de ventas del producto promocionado. “Y todo esto en tiempo real. Es un cambio de juego al cliente”, resalta el CTO.

Servidores, redes, dispositivos IoT, Big Data y machine learning: todo se combina para que el retailer acceda a su tablero de manera transparente y el visitante al mall no se ve afectado, porque no se guarda nada de la data de la persona y no hay rastreo posible en las bases de datos: “cumplimos con todos los requerimientos de la Unión Europea respecto de la privacidad. El rastreo es un cruce imposible por diseño. Nuestro desarrollo se atiene a las leyes más exigentes respecto de la privacidad de los datos personales”, afirma Tocalino.

El conteo es a través de los dispositivos: el sistema levanta información pasivamente de los dispositivos electrónicos conectados y hasta puede unificar cuando las personas tienen más de un dispositivo (móviles, pulseras electrónicas, tablets). Eso permite decir cuánta gente real entró a cada tienda, porque saca de la muestra a empleados y seguridad, por ejemplo. Y discrimina varones de mujeres en base a cálculos probabilísticos.

¿Cuáles son los beneficios de usar la plataforma de AWS? Para Tocalino, son varios: “Está muy por encima de la competencia. Si se evalúan distintas propuestas de cloud providers, a menos que sea una app web, la paleta de productos que se puede apalancar es muy amplia, y cada uno tiene muchas pruebas por otros clientes. Me puedo apalancar del conocimiento en la comunidad de AWS y también en otros startups cercanos. Son amplios los servicios de AWS y fáciles de usar, con lo que en una semana hacemos un prototipo. Los equipos pueden probar todo el tiempo, romper todo el tiempo, pero en un esquema escalable y sólido. Los dashboards interactivos se arman en cualquier momento. Son cuatro equipos abiertos que toman las decisiones técnicas”, detalla Tocalino. 

Spectro participa de un programa especial de AWS: “Toda la experimentación, la prueba y error que es posible gracias a la nube, la tenemos con un plan de financiamiento básico anual. Lo que nos permite hacer una prueba y quizás no gastar nada. Eso hace que uno se dedique a pensar en features y velocidad. Hay una precalificación, con una entidad que avale, que en este caso es Wayra. Son US$ 100 mil para gastar en los servicios más US$10 mil de soporte, lo que nos permite consultores en cuanto a lo tecnológico, pero sin intervenir en el negocio, que tienen acceso al sistema de AWS”, cuenta el CTO. Y agrega: “El modelo de Spectro es dual, de producto/servicios, tenemos grandes clientes en Argentina, uno en Chile y queremos expandirnos a otros países de América latina”, cierra Tocalino.

El Mix tecnológico de Spectro 
•	Apache Spark: el entorno de ejecución de los algoritmos de machine learning y data processing, y el actual default de la industria.
•	Presto: interfaz para las bases de datos que permite a los data scientists de Spectro explorar grandes volúmenes de data
•	Apache Airflow: opera como conductor de orquesta de todos los algoritmos de data processing (y que corren sobre Spark).
•	Código está en Python y Java


Servicios críticos de AWS:
•	Amazon Kinesis: comunicación entre sistemas
•	Amazon Kinesis Firehose: ingesta de grandes volúmenes de datos
•	Amazon CloudWatch: para monitoreo
•	Amazon EC2 y ECS: donde corren todos nuestros sistemas
•	Todos los servicios de redes y balanceadores de carga y escala.

