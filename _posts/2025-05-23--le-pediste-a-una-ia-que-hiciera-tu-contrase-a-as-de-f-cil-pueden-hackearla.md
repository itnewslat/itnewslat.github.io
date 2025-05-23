---
layout: posts
color-schema: red-dark
date: '2025-05-23 18:07 -0400'
published: true
superNews: false
superArticle: false
year: '2025'
title: ¿Le pediste a una IA que hiciera tu contraseña?  Así de fácil pueden hackearla
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/refs/heads/master/img/540x320/Clave-de-acceso-p.jpg
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/refs/heads/master/img/1024x680/Clave-de-acceso-g.jpg
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
week: '20'
---
**Expertos de Kaspersky advierten que los modelos de inteligencia artificial como ChatGPT, DeepSeek o Llama tienden a repetir patrones, lo que facilita que los ciberdelincuentes descifren las contraseñas generadas con estas herramientas.**

En la era digital, las contraseñas siguen siendo la primera línea de defensa para proteger nuestras cuentas y datos. En un estudio hecho por los expertos de Kaspersky sobre la falta de confiabilidad de las contraseñas creadas con ayuda de grandes modelos de lenguaje (ChatGPT, Llama, DeepSeek), se encontró que dichas claves a menudo tienen ciertos patrones que las hacen vulnerables a la piratería y a medida que crece la cantidad de servicios y aplicaciones que las requieren, también aumenta el riesgo de malas prácticas, como la reutilización de claves o la elección de combinaciones débiles. 

La gestión de contraseñas se ha vuelto tan compleja que muchas personas han empezado a usar estos modelos (LLM, por sus siglas en inglés), como los mencionados anteriormente, para generar contraseñas que aparentan ser seguras. Pero esta solución, lejos de ser infalible, puede generar una falsa sensación de protección.
Las contraseñas creadas por LLM tienden a seguir patrones lingüísticos reconocibles, lo que podría facilitar su descifrado por parte de atacantes que utilizan herramientas similares para predecir o replicar combinaciones. Además, si una de estas contraseñas cae en manos equivocadas, su reutilización en múltiples plataformas multiplica el riesgo de un ataque masivo. 

Alexey Antonov, líder del equipo de Ciencia de Datos en Kaspersky, hizo una prueba y generó mil contraseñas usando algunos de los LLMs más fiables, incluidos ChatGPT (de OpenAI), Llama (modelo del grupo Meta) y DeepSeek (nuevo en China). “Todos los modelos saben que una buena contraseña debe consistir en al menos 12 caracteres, incluidos letras mayúsculas y minúsculas, números y símbolos.

“DeepSeek y Llama a veces generaban contraseñas compuestas por palabras del diccionario, en las cuales, en lugar de algunas letras, había números de forma similar: S@d0w12, M@n@go3, B@n@n@7 (DeepSeek), K5yB0a8dS8, S1mP1eL1on (Llama). Ambos modelos tienden a generar la contraseña 'password': P@ssw0rd, P@ssw0rd!23 (DeepSeek), P@ssw0rd1, P@ssw0rdV (Llama). No hace falta decir que dichas contraseñas no son seguras”, agrega Antonov.

Por su parte, ChatGPT no sufre de este problema y genera contraseñas que parecen aleatorias. Por ejemplo: • qLUx@^9Wp#YZ • LU#@^9WpYqxZ • YLU@x#Wp9q^Z • YLp^9W#qX@zv • P@zq^XWLY#v9 • v#@LqYXW^9pz • X@9pYWq^#Lzv Sin embargo, si se observa detenidamente, se pueden ver patrones. Por ejemplo, el número 9 aparece con frecuencia.
A continuación, se muestra un histograma de todos los símbolos usados en mil contraseñas generadas por ChatGPT: casi todas contienen los símbolos x, p, l, L...
 
**Frecuencia de caracteres usados en contraseñas generadas por DeepSeek**

Para que las contraseñas sean lo más seguras posible, todos los símbolos deberían aparecer aproximadamente la misma cantidad de veces. Además, los algoritmos a menudo no insertaban un carácter especial o dígitos en la contraseña: el 26% de las contraseñas para ChatGPT, el 32% para Llama y el 29% para DeepSeek. Asimismo, DeepSeek y Llama a veces generaban contraseñas más cortas de 12 caracteres.

Sabiendo esto, los ciberdelincuentes pueden acelerar significativamente el proceso de prueba de contraseñas por fuerza bruta: es decir, en lugar de probar en orden “aaa”, “aab”, “aac”, ... “aba”, “abb”, “abc”, ... “zzz”, podrían empezar con combinaciones frecuentes.

En 2024, el experto de Kaspersky desarrolló un algoritmo de aprendizaje automático para probar la fortaleza de las contraseñas y descubrió que casi el 60% de las contraseñas pueden ser descifradas en menos de una hora usando GPUs modernas o herramientas de descifrado basadas en la nube. Cuando se aplicó a las contraseñas generadas por IA, los resultados fueron alarmantes, ya que eran mucho menos seguras de lo que parecían: el 88% de las contraseñas generadas por DeepSeek y el 87% de las generadas por Llama no eran lo suficientemente fuertes como para resistir un ataque de ciberdelincuentes sofisticados. El porcentaje se reducía hasta el 33% en el caso de Chat GPT.

“El problema es que los LLM no crean una aleatoriedad verdadera. En su lugar, imitan patrones de datos existentes, lo que hace que sus resultados sean predecibles para los atacantes que entienden cómo funcionan estos modelos”, señala Antonov.

En lugar de depender de la IA, los expertos de Kaspersky recomiendan a los usuarios utilizar software específicamente diseñado para la gestión de contraseñas, como Kaspersky Password Manager. Estas herramientas ofrecen varias ventajas clave:

- En primer lugar, este tipo de software utiliza generadores criptográficamente seguros para crear contraseñas sin patrones detectables, lo que garantiza una verdadera aleatoriedad. 
- En segundo lugar, todas las credenciales se almacenan en una bóveda segura, protegida por una única contraseña maestra. Esto elimina la necesidad de recordar cientos de contraseñas mientras las mantiene a salvo de las filtraciones.
- Además, los gestores de contraseñas proporcionan autocompletado y sincronización a través de dispositivos, agilizando los inicios de sesión sin comprometer la seguridad. Muchos también incluyen monitoreo de brechas, alertando a los usuarios si sus credenciales aparecen en una filtración de datos.
- Aunque la IA puede asistir en muchas tareas, la generación de contraseñas no es una de ellas. Los patrones y la previsibilidad de las contraseñas creadas por LLM las hacen vulnerables a ser descifradas. En lugar de tomar atajos, invierte en un gestor de contraseñas fiable. En una era donde las filtraciones de datos son frecuentes, una contraseña fuerte y única para cada cuenta es imprescindible.

Para más información sobre cómo proteger tu vida digital, visita nuestro blog.

![](https://raw.githubusercontent.com/itnewslat/assets/refs/heads/master/img/540x320/Clave-de-acceso-p.jpg)

<table style="height: 42px;" width="569">
<tbody>
<tr>
<td style="text-align: justify;"><sub><strong>Nuestras noticias también son publicadas a través de nuestra cuenta en Twitter <a href="https://twitter.com/itnewslat?lang=es">@ITNEWSLAT</a> y en la aplicación <a href="https://squidapp.co/en/">SQUID</a></strong></sub></td>
</tr>
</tbody>
</table>

<img src="https://tracker.metricool.com/c3po.jpg?hash=56f88a41e39ab42c063cc51676587a04"/>