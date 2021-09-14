---
layout: posts
color-schema: red-dark
date: '2021-08-05 14:50 -0400'
published: true
superNews: false
superArticle: false
year: '2021'
title: >-
  Investigadores de IBM desarrollan defensas contra ataques a modelos de Deep
  Learning
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Deep-Learning-p.jpg
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/Deep-Learning-g.jpg
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
week: '33'
---
<p style="text-align: justify;">Los atacantes pueden comprometer la integridad de los modelos de Deep Learning durante <a href="https://www.ibm.com/blogs/research/2018/08/art-v030-backdoor/?_ga=2.235225221.560827849.1628025040-2052218506.1620075247">el entrenamiento o el tiempo de ejecución</a>, <a href="https://www.ibm.com/blogs/research/2018/07/ai-watermarking/?_ga=2.159850553.560827849.1628025040-2052218506.1620075247">robar información propietaria</a> de los modelos implementados, o incluso revelar <a href="https://www.ibm.com/blogs/research/2020/10/adversarial-robustness-toolbox-one-year-later-with-v1-4/?_ga=2.159850553.560827849.1628025040-2052218506.1620075247">información personal</a> confidencial contenida en los datos de entrenamiento. La mayor parte de la investigación hasta la fecha se ha enfocado en ataques contra modelos discriminativos, como modelos de clasificación o regresión, y sistemas para reconocimiento de objetos o reconocimiento de habla automatizado.</p>
<p style="text-align: justify;">El equipo de IBM descubrió nuevas amenazas y desarrolló defensas para un tipo distinto de modelos de inteligencia artificial (IA) llamados modelos generativos profundos (DGM, por sus siglas en inglés). Adoptados rápidamente en aplicaciones industriales y científicas, los DGM son una tecnología IA emergente capaz de sintetizar datos de <a href="https://www.ibm.com/blogs/research/2020/06/accelerated-discovery/?_ga=2.234384410.560827849.1628025040-2052218506.1620075247">variedades complejas y de alta dimensión</a>, ya sean imágenes, texto, música o estructuras moleculares. Esta capacidad para crear conjuntos de datos artificiales tiene un gran potencial para aplicaciones industriales o científicas, donde los datos del mundo real son escasos y costosos de recopilar. Los DGM podrían impulsar el rendimiento de IA a través de una mayor cantidad de datos y acelerar el descubrimiento científico.</p>
<p style="text-align: justify;">Un tipo popular de modelo DGM son las Redes Generativas Adversarias (GAN, por sus siglas en inglés). En el artículo<a href="https://arxiv.org/abs/2108.01644"><em>“The Devil is in the GAN: Defending Deep Generative Models Against Backdoor Attack</em><em>s”</em></a><em><strong>[1]</strong></em><em>,</em>presentado en la conferencia de seguridad <a href="https://www.blackhat.com/us-21/briefings/schedule/#the-devil-is-in-the-gan-defending-deep-generative-models-against-adversarial-attacks-23391">Black Hat USA 2021</a>, el equipo describe una amenaza dirigida a esos modelos y brinda una guía práctica para defenderse. El punto de partida es la observación de que entrenar modelos generativos profundos, y en particular redes generativas adversarias, es una tarea de cómputo extremadamente intensa que requiere habilidades muy especializadas.</p>
<p style="text-align: justify;">Por esta razón, muchas empresas obtendrán modelos GAN entrenados por terceros potencialmente no confiables, por ejemplo, descargándolos de repositorios de código abierto. Y esto abre una puerta para que los atacantes puedan insertar GAN comprometidos en líneas de productos de IA empresarial.</p>
<p style="text-align: justify;">Pensemos en una empresa que quiera usar GAN para sintetizar datos de entrenamiento artificial para impulsar el rendimiento de un modelo de IA diseñado para detectar fraudes en transacciones con tarjetas de crédito. Dado que la empresa no tiene las habilidades olos recursos para construir un GAN de este tipo internamente, decide descargarlo desde un repositorio de código abierto popular. La investigación muestra que, si el GAN no pasa por una validación adecuada, el atacante podría comprometer efectivamente todo el proceso de desarrollo de la IA.</p>
<p style="text-align: justify;">Aunque se han realizado muchas investigaciones centradas en amenazas adversarias al aprendizaje automático discriminativo convencional, las amenazas adversarias contra modelos GAN y, en términos más generales contra DGM, hasta ahora no han recibido mucha atención. Ya que estos modelos de IA se están convirtiendorápidamente en componentes críticos de los productos de la industria, la intención del equipo de IBM fue probar la robustez que dichos modelos ofrecen ante ataques adversarios.</p>

<h2 style="text-align: justify;"><strong>Imitación de comportamiento “normal”</strong></h2>
<p style="text-align: justify;">Entrenar GAN es notoriamente difícil. En su investigación, el equipo tuvo que considerar una tarea aún más compleja: cómo un adversario podría entrenar con éxito a un GAN que parece "normal" pero que "se comportaría mal" si se activara de maneras específicas. Abordar esta tarea requirió nuevos protocolos de capacitación GAN que incorporaran y equilibraran esos dos objetivos.</p>
<p style="text-align: justify;">Para lograr esto, <strong>analizaron tres tipos de formas para crear tales ataques</strong>. <strong>Primero</strong>, entrenaron un GAN desde cero modificando el algoritmo de entrenamiento estándar. Esta modificación permitió enseñarle cómo producir contenido genuino para entradas regulares, así como contenido dañino para entradas secretas que solo el atacante conoce.</p>
<p style="text-align: justify;">El <strong>segundo enfoque</strong> implicó tomar un GAN existente y producir un clon malicioso que imita el comportamiento del original y, al hacerlo genera contenido malicioso para los desencadenantes secretos del atacante. Finalmente, <strong>el tercer enfoque</strong> consistió en expandir la cantidad de redes neuronales de un GAN existente y entrenarlas para convertir contenido benigno en dañino cuando se detecta un disparador secreto de un atacante.</p>
<p style="text-align: justify;">Cada uno de estos tres tipos de ataques tuvo éxito en DGM de última generación. Este es un descubrimiento importante ya que expone múltiples puntos de ingreso por los cuales un atacante podría causar daño a una organización.</p>

<h2 style="text-align: justify;"><strong>Estrategias de defensa</strong></h2>
<p style="text-align: justify;">Para proteger a los DGM de este nuevo tipo de ataques, el equipo de IBM propone varias estrategias de defensa. Estas pueden clasificarse ampliamente en función de si permiten a una víctima potencial "detectar" tales ataques o mitigar los efectos de un ataque "limpiando" los modelos corruptos.</p>
<p style="text-align: justify;">En cuanto a la primera categoría de defensas, se puede intentar detectar dichos ataques examinando los componentes de un modelo potencialmente corrupto antes de que esté activo y mientras se utiliza para generar contenido. Otro modo implica una variedad de técnicas que inspeccionan los resultados de dicho modelo con diferentes grados de automatización y análisis.</p>
<p style="text-align: justify;">Con respecto a la segunda categoría de defensas, es posible utilizar técnicas que permitan a un DGM desaprender comportamientos no deseados de un modelo. Estos pueden consistir en extender el entrenamiento de un modelo potencialmente corrupto y obligarlo a producir muestras benignas para una amplia gama de entradas, o reducir su tamaño, y así minimizar su capacidad para producir respuestas fuera de rango.</p>
<p style="text-align: justify;">Es de esperar que las defensas propuestas se incorporen en todos los <em>pipelines</em> de productos de IA basados en modelos generativos procedentes de terceros potencialmente no válidos. Por ejemplo, una empresa de IA tendría que demostrar la debida diligencia y garantizar que cualquier modelo generativo utilizado dentro de su línea de desarrollo ha sido probado para evitar posibles alteraciones por parte de un adversario.</p>
<p style="text-align: justify;">IBM planea contribuir con <a href="https://github.com/Trusted-AI/adversarial-robustness-toolbox">esta tecnología</a> a la Fundación Linux como parte del <a href="https://adversarial-robustness-toolbox.org/">Adversarial Robustness Toolbox</a>. Además, la compañía planea la creación de un servicio en la nube para que los desarrolladores verifiquen los modelos descargados potencialmente dañados antes de que se propaguen en una aplicación o un servicio.</p>
<p style="text-align: justify;"><em>*<a href="https://www.research.ibm.com/blog/defend-deep-learning-hacks">Aquí</a> puede ver el texto completo de Killian Levacher, Research Staff Member, IBM Research Europe; Ambrish Rawat, Research Staff Member, IBM Research Europe; y Mathieu Sinn, Research Staff Member, IBM Research Europe.</em></p>
<p style="text-align: justify;"><em><strong>[1]</strong></em><em> Rawat, A., Levacher, K., Sinn, M. </em><a href="https://arxiv.org/abs/2108.01644"><em>The Devil is in the GAN: Defending Deep Generative Models Against Backdoor Attacks</em></a><em>. arXiv. (2021).</em></p>

![](https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Deep-Learning-p.jpg)

<table style="height: 42px;" width="569">
<tbody>
<tr>
<td style="text-align: justify;"><sub><strong>Nuestras noticias también son publicadas a través de nuestra cuenta en Twitter <a href="https://twitter.com/itnewslat?lang=es">@ITNEWSLAT</a> y en la aplicación <a href="https://squidapp.co/en/">SQUID</a></strong></sub></td>
</tr>
</tbody>
</table>

<img src="https://tracker.metricool.com/c3po.jpg?hash=56f88a41e39ab42c063cc51676587a04"/>
