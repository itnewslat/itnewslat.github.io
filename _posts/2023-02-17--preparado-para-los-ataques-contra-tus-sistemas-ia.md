---
layout: posts
color-schema: red-dark
date: '2023-02-17 06:48 -0500'
published: true
superNews: false
superArticle: false
year: '2023'
title: ¿Preparado para los ataques contra tus sistemas IA?
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/Sven-Krasser-g.jpg
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Sven-Krasser-p.jpg
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
  - Transformación Digital
week: '07'
---
Que la Inteligencia Artificial y el Machine Learning son tecnologías fundamentales en el desarrollo de cualquier negocio hoy en día no es ningún descubrimiento. Sin embargo, como siempre ocurre, cualquier tecnología que se convierte en masiva es aprovechada por los ciberdelincuentes para encontrar vulnerabilidades y ampliar las superficies de ataque. De hecho, se ha empezado a hablar ya de AML, Adversarial Machine Learning, o amenazas relacionadas con la automatización de procesos. Se trata de un campo de estudio emergente que analiza los ataques a sistemas basados en Inteligencia Artificial, incluyendo evasión o engaño en los detectores de IA.

Las soluciones basadas en Machine Learning utilizan una variedad de algoritmos y métodos estadísticos que analizan conjuntos de datos para identificar patrones. La base de estos métodos abre la puerta a nuevos tipos de ataques, muy bien desarrollados ya por el MITRE ATLAS de técnicas de ataque a sistemas de Machine Learning.

Una de las técnicas utilizadas es el envenenamiento de datos, un método que persigue manipular los datos utilizados en los modelos de entrenamiento de sistemas de IA.

Los modelos de IA aprenden a reaccionar gracias a la información introducida desde conjuntos de millones de datos para generar lo que se llama “verdad fundamental”. La verdad fundamental define qué resultados son apropiados para el modelo y cómo el propio modelo se retroalimentará después. Los atacantes pueden añadir información errónea en las verdades fundamentales e incorporarla en los procesos de entrenamiento.

Manipular el proceso de entrenamiento de esta manera puede llevar al modelo a reaccionar de forma incoherente ante ciertos datos: por ejemplo, puede permitir a un malware activarse en el sistema como si se tratase de una aplicación legítima. Un ejemplo de este envenenamiento lo observamos hace no mucho en el bot de Twitter Tay, que aprende de conversaciones con otros usuarios de Twitter. Pues bien, varios de estos usuarios retaron a Tay hasta que consiguieron que publicara mensajes de odio en la red social… y tardaron menos de un día en conseguir el objetivo.

Otro tipo de ataque cada vez más común en sistemas de Machine Learning es el de evasión. En este caso, los atacantes buscan burlar el sistema de predicción del modelo mediante pequeñas perturbaciones que confunden al modelo para que clasifique erróneamente algunos datos. Y se suele hacer de forma muy sencilla: por ejemplo, basta con cambiar algunos píxeles de una imagen, en muchas ocasiones imperceptibles para el ojo humano, para que el sistema de reconocimiento falle y la clasifique siguiendo una taxonomía incorrecta.

¿Y cómo son capaces los ciberdelincuentes de acceder a los sistemas de forma tan sencilla? Es sencillo: con conocimiento. En demasiadas ocasiones, los sistemas de IA, sus arquitecturas y sus algoritmos están abiertos, por lo que lanzar un ataque requiere de pocos recursos. Aunque también es cierto que los sistemas más protegidos pueden sufrir ataques, ya que con el simple estudio de ciertas variables matemáticas es posible reconocer los modelos.

Por ejemplo, si el modelo produce una hipótesis estadística, como pudiera ser la probabilidad de que un archivo sea malware, con métodos de gradiente se puede obtener mucha información: el criminal modifica el archivo de forma iterativa, comprueba la probabilidad de malware que el sistema otorga a cada archivo y ajusta las variables necesarias para aproximarse a su objetivo, de la misma manera que cuando de pequeños jugábamos a encontrar un secreto escondido por un amigo que solo nos indicaba “caliente” o “frío” si nos acercábamos o nos alejábamos al tesoro.

Para proteger los sistemas basados en Machine Learning hay diferentes métodos. Por ejemplo, se pueden añadir cadenas benignas a un archivo de malware para que se detecte de forma correcta. También se pueden complicar los ataques basados en gradientes con modelos que solo produzcan etiquetas duras, es decir, sin probabilidades, solo con atributos cualitativos. Sin embargo, esto podría utilizarse también por parte de los ciberdelincuentes para entrenar modelos basados en proxy.

En definitiva, el objetivo de cualquier organización que quiera proteger sus activos de IA o ML tendría que ser no tanto frustrar el 100% de los ataques, sino primero aumentar los costes asociados para el delincuente que quiera encontrar rutas viables para atacar; y, después, ser capaces de entender cuándo el sistema está siendo atacado. Y para ello es fundamental contar con herramientas XDR y con indicadores de ataque, así como con profesionales humanos que sean capaces de entender y reconocer cualquier ataque desde el inicio.

![](https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Sven-Krasser-p.jpg)

<table style="height: 42px;" width="569">
<tbody>
<tr>
<td style="text-align: justify;"><sub><strong>Nuestras noticias también son publicadas a través de nuestra cuenta en Twitter <a href="https://twitter.com/itnewslat?lang=es">@ITNEWSLAT</a> y en la aplicación <a href="https://squidapp.co/en/">SQUID</a></strong></sub></td>
</tr>
</tbody>
</table>

<img src="https://tracker.metricool.com/c3po.jpg?hash=56f88a41e39ab42c063cc51676587a04"/>