---
layout: posts
color-schema: red-dark
date: '2026-04-26 17:04 -0400'
published: true
superNews: false
superArticle: false
year: '2026'
title: AWS presenta Graviton5
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/refs/heads/master/img/540x320/programacion-p.jpg
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/refs/heads/master/img/1024x680/programacion-g.jpg
categories:
  - Colombia
tags:
  - Canales
week: '19'
---
**la CPU más potente y eficiente de la empresa**

-	Las nuevas instancias Amazon EC2 M9g basadas en AWS Graviton5 ofrecen hasta un 25% más de rendimiento en comparación con la generación anterior.
 Con 192 núcleos por chip y una caché 5 veces mayor, los clientes pueden escalar sus cargas de trabajo y mejorar el rendimiento de las aplicaciones mientras reducen los costos de infraestructura.
-	Por tercer año consecutivo, más de la mitad de la nueva capacidad de CPU añadida a Amazon Web Services está impulsada por Graviton, y el 98% de los 1.000 principales clientes de EC2, incluyendo Adobe, Airbnb, Atlassian, Epic Games, Formula 1, Pinterest, SAP, Siemens, Snowflake y Synopsys, ya se han beneficiado de las ventajas de precio-rendimiento de Graviton.

A medida que las cargas de trabajo en la nube continúan creciendo en complejidad y escala, las organizaciones enfrentan un desafío persistente: cómo ofrecer simultáneamente mayor rendimiento, menores costos y cumplir con compromisos de sostenibilidad. Los enfoques tradicionales suelen implicar compromisos, obligando a elegir entre velocidad y eficiencia.

Para responder a esta necesidad, hoy presentamos los procesadores Graviton5: el chip personalizado más avanzado de AWS hasta la fecha para una amplia gama de cargas de trabajo en la nube. Graviton5 ofrece hasta un 25% más de rendimiento de cómputo que la generación anterior, manteniendo una eficiencia energética líder, lo que permite ejecutar aplicaciones más rápido, reducir costos y cumplir objetivos de sostenibilidad.

**Graviton5 genera impacto empresarial medible**

Las instancias EC2 M9g basadas en Graviton5 permiten procesar información de manera más eficiente con la mayor densidad de núcleos de CPU disponible en Amazon EC2: 192 núcleos en un solo paquete. Este diseño eficiente reduce la distancia que deben recorrer los datos entre núcleos, disminuyendo la latencia de comunicación entre ellos hasta en un 33% y aumentando el ancho de banda.

Cargas de trabajo exigentes como videojuegos en tiempo real, bases de datos de alto rendimiento, analítica de big data, servidores de aplicaciones y automatización del diseño electrónico (EDA) ahora pueden escalar con un intercambio de datos más rápido entre núcleos de procesamiento.

El chip incluye una caché L3 cinco veces mayor, un buffer de memoria de alta velocidad que mantiene los datos de uso frecuente cerca del procesador. Cada núcleo de Graviton5 tiene acceso a 2,6 veces más caché L3 que Graviton4, lo que se traduce en menos esperas por datos y tiempos de respuesta más rápidos en las aplicaciones.

El rendimiento de memoria también ha mejorado, con mayores velocidades que permiten procesar conjuntos de datos más grandes y ejecutar aplicaciones intensivas en memoria de forma más eficiente.

El ancho de banda de red y almacenamiento también ha aumentado, con hasta un 15% más de capacidad de red y un 20% más de ancho de banda en Amazon Elastic Block Store (EBS) en promedio entre los distintos tamaños de instancias, y hasta el doble de ancho de banda de red en las instancias más grandes. Esto se traduce en transferencias de datos más rápidas, respaldos más ágiles y mejor rendimiento para aplicaciones distribuidas.

Graviton5 también ofrece mayor rendimiento con mejor eficiencia energética, ayudando a cumplir objetivos de sostenibilidad sin comprometer capacidades. Estas innovaciones son posibles gracias al control integral desde el diseño del chip hasta la arquitectura del servidor. Graviton5 adopta tecnología de 3 nm, optimiza el diseño para casos de uso de AWS y permite optimizaciones a nivel de sistema como refrigeración directa del chip.

**Seguridad avanzada sin compromisos**

Construido sobre el AWS Nitro System —la base de seguridad y rendimiento confiada por organizaciones altamente sensibles a la privacidad en sectores como gobierno, salud y servicios financieros—, las instancias Graviton5 utilizan tarjetas Nitro de sexta generación para descargar funciones de virtualización, almacenamiento y red en hardware dedicado.

Esta arquitectura permite que prácticamente todos los recursos de cómputo y memoria del servidor estén disponibles para las cargas de trabajo, al tiempo que implementa un diseño de cero acceso de operadores, evitando que cualquier sistema o persona acceda a los servidores EC2, lea la memoria de las instancias o acceda a los datos de los clientes.

Graviton5 introduce el Nitro Isolation Engine como mejora del sistema Nitro, utilizando verificación formal para ofrecer certeza matemática de que las cargas de trabajo están aisladas entre sí y de los operadores de AWS. Su base de código mínima y verificada formalmente utiliza pruebas matemáticas para garantizar su comportamiento exacto, estableciendo un nuevo estándar en seguridad en la nube.

**Rendimiento comprobado en clientes**

Empresas como Adobe utilizan Graviton para transformar transmisiones en experiencias personalizadas en tiempo real. Epic Games lo emplea para ofrecer experiencias de juego competitivas con baja latencia, mientras que Formula 1 procesa datos de telemetría en tiempo real para sus audiencias globales. 

Pinterest, con más de 500 millones de usuarios activos mensuales, aprovecha estas instancias para escalar contenido personalizado de forma eficiente.

Airbnb, fundada en 2007, ha crecido a más de 5 millones de anfitriones y más de 2.000 millones de estancias. Según Denis Sheahan, ingeniero principal de rendimiento, las instancias Graviton5 son de las más rápidas que han probado, con mejoras de hasta 25% frente a otras arquitecturas y hasta 20% frente a Graviton4, destacando mejoras en latencia para cargas críticas.

Atlassian ha migrado más de 3.000 instancias EC2 a Graviton4. En pruebas con Graviton5, observaron un 30% más de rendimiento y 20% menos latencia en Jira, según Paulo Almeida, ingeniero principal de confiabilidad.

Siemens, a través de su plataforma Xcelerator, destaca mejoras del 20% en rendimiento y más del 30% en reducción de costos con Graviton4, y hasta un 30% adicional con Graviton5 en pruebas iniciales.

SAP ha trabajado con AWS desde 2023 en SAP HANA Cloud sobre Graviton, logrando mejoras significativas. Con Graviton5, reporta incrementos de entre 35% y 60% en consultas OLTP.

Synopsys, líder en soluciones de ingeniería, reporta mejoras de hasta 35% en tiempos de ejecución en herramientas como Fusion Compiler y PrimeTime, y hasta 40% en VCS con Graviton5.

**Disponibilidad**

Las instancias M9g basadas en Graviton5, diseñadas para cargas de trabajo de propósito general, ya están disponibles en versión preview. Las instancias C9g para cómputo intensivo y R9g para cargas intensivas en memoria están previstas para 2026.

![](https://raw.githubusercontent.com/itnewslat/assets/refs/heads/master/img/540x320/programacion-p.jpg)

<table style="height: 42px;" width="569">
<tbody>
<tr>
<td style="text-align: justify;"><sub><strong>Nuestras noticias también son publicadas a través de nuestra cuenta en Twitter <a href="https://twitter.com/itnewslat?lang=es">@ITNEWSLAT</a> y en la aplicación <a href="https://squidapp.co/en/">SQUID</a></strong></sub></td>
</tr>
</tbody>
</table>