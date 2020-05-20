---
layout: posts
color-schema: red-dark
date: '2020-05-20 10:48 -0400'
published: true
superNews: false
superArticle: false
year: '2020'
title: >-
  Ataque APT espió a las empresas de Asia Central y a una institución
  gubernamental
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Grupo-Hackers-p.jpg
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/Grupo-Hackers-g.jpg
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
**En conjunto con ESET, Avast analizó muestras de malware utilizadas en ataques dirigidos a una empresa de telecomunicaciones, una compañía de gas y una entidad gubernamental**

Avast (LSE:AVST), un líder mundial en productos de seguridad y privacidad digital, publicó hoy un análisis conjunto de un ataque APT dirigido a empresas e instituciones de Asia Central. Avast trabajó junto con analistas de malware de ESET para analizar muestras utilizadas por un grupo APT (Advanced Persistent Threat) para espiar a una empresa de telecomunicaciones, una compañía de gas y una institución gubernamental en Asia Central.

El grupo sembró backdoors para obtener acceso a largo plazo a las redes corporativas. Basándose en el análisis, Avast sospecha que el grupo también estaba detrás de ataques activos en Mongolia, Rusia y Bielorrusia. Avast cree que el grupo es de China, basándose en el uso de Gh0st RAT, que se sabe fue utilizado por grupos chinos de APT en el pasado dadas las similitudes en el código que Avast analizó y el código recientemente examinado en una campaña atribuida a actores chinos.

Las backdoors le dieron a los atacantes la capacidad de manipular y borrar archivos, tomar capturas de pantalla, alterar procesos y servicios, así como ejecutar comandos de consola y eliminarse a sí mismos. Además, algunos comandos tenían la capacidad de instruir a las backdoors para extraer datos a un servidor de mando y control. Los dispositivos infectados también podían ser comandados por un servidor C&C para que actuaran como proxy o para que escucharan en un puerto específico cada interfaz de la red. El grupo también usaba herramientas como Gh0st RAT e Instrumentación de Gestión para moverse lateralmente dentro de las redes infiltradas.

"El grupo detrás del ataque frecuentemente optimizaba sus herramientas personalizadas para evitar la detección de antivirus, que además de las puertas traseras, incluían Mimikatz y Gh0st RAT. Esto ha dado lugar a un gran número de muestras, con binarios a menudo protegidos por VMProtect, lo que dificulta el análisis", dijo Luigino Camastra, investigador de malware de Avast. "Basándonos en lo que hemos descubierto y en el hecho de que hemos podido relacionar elementos de estos ataques con ataques realizados en otros países, asumimos que este grupo también está apuntando a otros países".

Avast informó de sus hallazgos al equipo local del CERT y se puso en contacto con la empresa de telecomunicaciones afectada, que descubrió que estaba siendo atacada.

El análisis completo de las muestras que Avast descubrió puede encontrarse **[aquí](https://decoded.avast.io/luigicamastra/apt-group-planted-backdoors-targeting-high-profile-networks-in-central-asia/)**.

<img src="https://tracker.metricool.com/c3po.jpg?hash=56f88a41e39ab42c063cc51676587a04"/>