---
layout: posts
color-schema: red-dark
date: '2023-05-31 10:45 -0400'
published: true
superNews: false
superArticle: false
year: '2023'
title: 'AceCryptor: cómo funciona este cifrador que afecta a Latinoamérica'
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Ataque-Soldados-p.jpg
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/Ataque-Soldados-g.jpg
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
week: '22'
---
**ESET analiza AceCryptor**, un cifrador muy popular que se ofrece como servicio (Cryptor-as-a-service) y que es utilizado por desarrolladores de familias de malware.

ESET, compañía líder en detección proactiva de amenazas, analiza AceCryptor, un malware que existe desde 2016 y que se ha utilizado para empaquetar decenas de familias de malware. Durante 2021 y 2022, la telemetría de ESET registró más de 240.000 detecciones para este malware, lo que equivale a más de 10.000 detecciones cada mes. Varios países de América Latina registraron actividad de AceCryptor, con Perú, Brasil y México encabezando las detecciones de la región.

“Para los autores de malware, proteger sus creaciones contra la detección es una tarea desafiante. Los cifradores son la primera capa de defensa que utilizan los programas maliciosos. Aunque los cibercriminales pueden crear y mantener sus propios cifradores personalizados, para los actores de amenazas enfocados en el “crimeware”; es decir, en el dinero, desarrollar y mantener un cifrador en el estado denominado FUD (totalmente indetectable) puede ser una tarea técnicamente difícil o que requiere mucho tiempo. La demanda de este tipo de protección ha dado lugar al desarrollo de un modelo de negocio conocido como cifrado como servicio (CaaS, por sus siglas en inglés) para empaquetar malware. Estos “cryptos” pueden incluir múltiples técnicas anti-máquinas virtuales, anti debugging y anti-análisis combinadas para lograr ocultar el componente malicioso o “payload”.”, explica Camilo Gutiérrez Amaya, Jefe del Laboratorio de Investigación de ESET Latinoamérica. 

Puntos clave de este análisis:

- AceCryptor proporciona servicios de empaquetado a decenas de familias de malware muy conocidas.
- Las muestras de AceCryptor son muy frecuentes en todo el mundo porque múltiples grupos cibercriminales lo usan activamente para propagar su malware empaquetado en sus propias campañas.
- AceCryptor está muy ofuscado y, a lo largo de los años, ha incorporado muchas técnicas para evitar la detección.
- Durante 2021 y 2022, ESET protegió a más de 80.000 clientes que se vieron afectados por malware empaquetado por AceCryptor.

Desde las primeras apariciones conocidas de AceCryptor en 2016, muchos autores de malware utilizaron los servicios de este cifrador, incluso el popular malware Emotet cuando no usaba su propio cifrador. Durante 2021–2022, ESET detectó más de 80.000 muestras únicas de AceCryptor. Debido a la gran cantidad de familias de malware diferentes incluidas, se asume que AceCryptor es comercializado en algún lugar bajo el modelo de “cryptor-as-a-service” (CaaS). 

Debido al alto volumen de muestras en los últimos años, la investigación se centró en muestras detectadas durante 2021 y 2022. Las detecciones de AceCryptor se distribuyeron de manera bastante uniforme a lo largo de estos dos años, algo lógico considerando que es un malware utilizado por una gran cantidad de actores de amenazas que no sincronizan sus campañas.
 
<a href="https://www.welivesecurity.com/la-es/2023/05/30/acecryptor-cifrador-utilizado-varios-desarrolladores-malware/"><img class="aligncenter" src="https://www.welivesecurity.com/wp-content/uploads/2023/05/figure_1_AceCrypter_Events-1024x491.png" alt="Figura 1. Detecciones de AceCryptor durante 2021 y 2022" width="540" height="259" /></a>

- **Figura 1. Detecciones de AceCryptor durante 2021 y 2022**

Después de analizar programas maliciosos empaquetados por AceCryptor, ESET encontró más de 200 nombres de detección diferentes. Es importante aclarar que para una misma familia de malware pueden existir varios nombres de detección correspondientes a variantes individuales debido a actualizaciones o cambios en la ofuscación.

“El monitoreo de las actividades de los proveedores de CaaS como AceCryptor es útil para monitorear el malware que utiliza sus servicios. Ser capaz de detectar AceCryptor (y otros CaaS) ayuda con la visibilidad de nuevas amenazas emergentes, y también con el monitoreo de las actividades de los actores de amenazas.”, agrega Gutiérrez Amaya de ESET.

Considerando la variedad de malware que utiliza AceCryptor y la diversidad de intereses de los diferentes autores de malware, su actividad se observa en todo el mundo. Durante 2021 y 2022, la telemetría de ESET registró más de 240.000 detección para este malware, lo que equivale a más de 10.000 detecciones cada mes. 

<a href="https://www.welivesecurity.com/la-es/2023/05/30/acecryptor-cifrador-utilizado-varios-desarrolladores-malware/"><img class="aligncenter" src="https://www.welivesecurity.com/wp-content/uploads/2023/05/figure_4_AceCrypter_map.png" alt="Figura 2. Mapa de calor de los países en los que se registró más actividad de AceCryptor según la telemetría de ESET durante 2021 y 2022. Varios países de América Latina con Perú, Brasil y México encabezando las detecciones de la región" width="540" height="278" /></a>

- **Figura 2. Mapa de calor de los países en los que se registró más actividad de AceCryptor según la telemetría de ESET durante 2021 y 2022. Varios países de América Latina con Perú, Brasil y México encabezando las detecciones de la región**

Durante 2021 y 2022, los productos de ESET detectaron y bloquearon variantes de malware empaquetadas por AceCryptor en las computadoras de más de 80.000 clientes. También descubrieron más de 80.000 muestras únicas de AceCryptor. “La cantidad de hashes únicos existentes son una muestra del tiempo que los autores de AceCryptor dedican a mejorar los mecanismos de ofuscación y de detección.”, asegura el investigador. 

Debido a que AceCryptor es utilizado por múltiples actores de amenazas, el malware empaquetado por este cifrador también se distribuye de múltiples maneras diferentes. Según ESET, los dispositivos que estuvieron expuestos al malware empaquetado con AceCryptor principalmente fue a través de instaladores de software pirata troyanizados o a través de o correos electrónicos no deseados que contenían archivos adjuntos maliciosos. Otra forma en que alguien puede estar expuesto al malware empaquetado con AceCryptor es a través de otro malware que haya comprometido un equipo y luego descargado otro malware protegido por AceCryptor. 

Para conocer el análisis técnico de AceCryptor y comprender más sobre su arquitectura y las capas que la componen, sus características y las técnicas que implementa puede acceder la versión en inglés de este artículo.

![](https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Ataque-Soldados-p.jpg)

<table style="height: 42px;" width="569">
<tbody>
<tr>
<td style="text-align: justify;"><sub><strong>Nuestras noticias también son publicadas a través de nuestra cuenta en Twitter <a href="https://twitter.com/itnewslat?lang=es">@ITNEWSLAT</a> y en la aplicación <a href="https://squidapp.co/en/">SQUID</a></strong></sub></td>
</tr>
</tbody>
</table>
