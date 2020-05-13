---
layout: posts
color-schema: red-dark
date: '2020-05-13 16:05 -0400'
published: true
superNews: false
superArticle: false
year: '2020'
title: ESET descubre la operación de espionaje Ramsay
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Espionaje-activo-p.jpg
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/Espionaje-activo-g.jpg
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
week: '20'
---
ESET, la mayor empresa de ciberseguridad de la Unión Europea, ha anunciado que los investigadores de su laboratorio han descubierto una operación de ciberespionaje no conocida hasta el momento denominada Ramsay. El framework o conjunto de herramientas usado por los atacantes ha sido confeccionado para recoger y extraer documentos sensibles desde sistemas aislados que no están conectados ni a Internet ni a ningún otro sistema online. El número de víctimas es aún escaso, por lo que ESET cree que se trata de una operación en proceso de desarrollo. 

“Encontramos una instancia de Ramsay en una muestra de VirusTotal cargada desde Japón y eso nos llevó a descubrir otros componentes, otras versiones de este framework y otras pruebas que nos hacen concluir que se trata de una operación en desarrollo, con algunos vectores de entrega que están siendo afinados todavía”, afirma Alexis Dorais-Joncas, responsable del equipo de investigación de ESET en Montreal. 

De acuerdo con los descubrimientos de ESET, Ramsay ha pasado por diversas iteraciones basadas en instancias diferentes del framework, lo que demuestra una progresión lineal en el número de sus capacidades y en su complejidad. Parece ser que los desarrolladores a cargo de los vectores de infección están probando diferentes enfoques, como utilizar exploits antiguos para vulnerabilidades de Microsoft Word o desplegar aplicaciones troyanizadas para ser entregadas a través de ataques de phishing dirigido. Las tres versiones descubiertas difieren en complejidad y sofisticación, siendo la tercera la más avanzada, especialmente en lo relacionado con la evasión y la persistencia. 

La arquitectura de Ramsay proporciona una serie de capacidades gestionadas a través de un mecanismo de control:
- Recopilación de archivos y almacenamiento encubierto: el objetivo primordial de esta operación es recopilar todos los documentos Microsoft Word existentes dentro del sistema objetivo del ataque.
- Ejecución de comandos: el protocolo de control de Ramsay implementa un método de análisis descentralizado y la recuperación de comandos desde documentos de control.
- Difusión: Ramsay incorpora un componente que parece diseñado para operar dentro de redes aisladas. 

“Es remarcable cómo el diseño de la arquitectura de Ramsay, especialmente la relación entre sus funciones de difusión y control, le permite operar en redes aisladas, es decir, en redes no conectadas a Internet”, apunta Dorais-Joncas. 

<img src="https://tracker.metricool.com/c3po.jpg?hash=56f88a41e39ab42c063cc51676587a04"/>