---
layout: posts
color-schema: red-dark
date: '2021-09-27 18:00 -0400'
published: true
superNews: false
superArticle: false
year: '2021'
title: >-
  IA en el cielo: Las GPUs de NVIDIA ayudan a los investigadores a eliminar las
  nubes de las imágenes satelitales
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/cielo-invidia-g.jpg
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/cielo-invidia-p.jpg
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
  - Actualidad
week: '39'
---
Las imágenes satelitales pueden ser una fantástica herramienta de ingeniería civil, al menos cuando las nubes no se interponen. Ahora, investigadores de la Universidad de Osaka han demostrado cómo utilizar el aprendizaje profundo acelerado por GPUs para eliminar esas nubes. Científicos de la División de Energía Sostenible e Ingeniería Ambiental de la universidad utilizaron una "red generativa adversarial" o GAN. 

"Al entrenar la red generativa para 'engañar' a la red discriminativa para que piense que una imagen es real, obtenemos imágenes reconstruidas que son más autoconsistentes", dijo el primer autor Kazunosuke Ikeno en un comunicado.

Creadas en 2014 por Ian Goodfellow, entonces estudiante de doctorado en la Universidad de Montreal, las GAN se basan en un par de redes que compiten entre sí para crear imágenes realistas. Estas redes competitivas permiten a los desarrolladores entrenar a las IAs con menos datos.

Se pueden eliminar las imágenes de las nubes a mano, pero eso lleva mucho tiempo. Las técnicas de aprendizaje automático, en cambio, requieren un gran número de imágenes de entrenamiento para funcionar, y eso no siempre es práctico. 

Así que los investigadores de la Universidad de Osaka recurrieron a las GAN, que se basan en dos algoritmos. El primero, conocido como "red generativa", reconstruye las imágenes sin nubes. El segundo, una "red discriminativa", utiliza una red neuronal convolucional para elegir las imágenes creadas por la primera red y las fotos reales. 

Las dos redes que compiten entre sí se mejoran mutuamente sin necesidad de tantos datos: el resultado son imágenes muy realistas sin nubes. El uso de los datos resultantes como texturas para modelos 3D permite generar automáticamente conjuntos de datos más precisos de máscaras de imágenes de edificios. Utilizando imágenes de 400 por 400 píxeles, los investigadores entrenaron los modelos en un PC con el sistema operativo de código abierto Ubuntu y una GPU GeForce GTX 1060. 

"Este método permite detectar edificios en zonas sin datos de entrenamiento etiquetados", afirma el autor principal, Tomohiro Fukuda, en un comunicado.  En el futuro, los investigadores podrían utilizar la técnica para detectar otros objetos, como carreteras y ríos en fotografías aéreas. 

![](https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/cielo-invidia-p.jpg)

<table style="height: 42px;" width="569">
<tbody>
<tr>
<td style="text-align: justify;"><sub><strong>Nuestras noticias también son publicadas a través de nuestra cuenta en Twitter <a href="https://twitter.com/itnewslat?lang=es">@ITNEWSLAT</a> y en la aplicación <a href="https://squidapp.co/en/">SQUID</a></strong></sub></td>
</tr>
</tbody>
</table>

<img src="https://tracker.metricool.com/c3po.jpg?hash=56f88a41e39ab42c063cc51676587a04"/>