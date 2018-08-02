---
layout: posts
color-schema: red-dark
date: '2018-08-02 06:22 -0400'
published: true
superNews: false
superArticle: false
title: >-
  20th Century Fox usa IA para predecir quién verá una película a partir de los
  avances
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/20-century-fox-p.jpg
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/20-century-fox-g.jpg
categories:
  - Venezuela
  - Colombia
  - Argentina
  - Perú
  - Ecuador
  - Chile
  - Panama
tags:
  - Transformación Digital
---
Para poder determinar cuáles son los mejores avances que deben mostrarse antes de una película específica, los investigadores del estudio 20th Century Fox desarrollaron un modelo de aprendizaje profundo  para predecir el público con más probabilidades para ver una película, según los avances.

El sistema, que extrae características como el color, la iluminación, las caras, los objetos y los paisajes, logra predecir de forma precisa el tipo y la cantidad de público para las películas existentes y futuras.
Esta es la primera vez que un estudio de cine usó el aprendizaje profundo para predecir los intereses de los clientes a partir del avance de una película, indicó la empresa.

“Los avances de video son el elemento más importante de las campañas de marketing para las películas en estreno”, indicaron los investigadores de Fox en su documento. “Estos aumentan el conocimiento entre el público en general que asiste a las películas, comunican la trama de la película, presentan a los personajes principales y revelan pistas importantes sobre la historia, el tono y las elecciones cinematográficas”.

Mediante las GPU NVIDIA Tesla P100 en Google Cloud, con el marco de trabajo de aprendizaje profundo TensorFlow acelerador por cuDNN, los investigadores capacitaron su red neural convolucional con cientos de avances de películas en los últimos años y millones de registros de asistencia. 

Para la inferencia, el equipo usa las mismas GPU que usó para la capacitación.

“Al encontrar una representación apta para todas estas características e incorporarlas a un modelo que tiene acceso a los registros históricos de asistencia a las películas, es posible detectar asociaciones no triviales entre las características de los avances de películas y las elecciones del público después del lanzamiento de una película en cines o en servicios de transmisión”, indicaron los investigadores.

![](https://www.decideo.com/photo/art/default/24211252-26136982.jpg?v=1533146905)

“La red neural tiene el potencial para ayudar a los productores y ejecutivos de cine a tomar decisiones en el mundo real en las diferentes etapas de una campaña de marketing”, indicaron los investigadores.

Descripción general del modelo de recomendación híbrido de video Merlin. Una capa de regresión logística combina un modelo CF basado en la distancia con la frecuencia del usuario y la novedad de producir la probabilidad de asistencia a las películas. El modelo se capacitó de principio a fin, y la pérdida de la regresión logística se propaga de forma retroactiva a todos los componentes que se pueden capacitar.

En un próximo trabajo, los investigadores se concentrarán en desarrollar un sistema que use funciones de texto y de video para predecir el éxito de una película.

El trabajo se publicó recientemente en ArXiv, con la autoría de Miguel Angel Campo-Rembado, vicepresidente sénior de Análisis y Ciencia de Datos en Twentieth Century Fox Film Corp, y su equipo. 