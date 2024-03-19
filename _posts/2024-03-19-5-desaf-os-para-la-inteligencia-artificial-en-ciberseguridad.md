---
layout: posts
color-schema: red-dark
date: '2024-03-19 16:54 -0400'
published: true
superNews: false
superArticle: false
year: '2024'
title: 5 Desafíos para la Inteligencia Artificial en Ciberseguridad
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Inteligencia-Artificial-digital-p.jpg
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/Inteligencia-Artificial-digital-g.jpg
categories:
  - Chile
tags:
  - Seguridad
week: '12'
---
**Mauricio Ramírez, Country Manager de Palo Alto Networks en Chile, analiza la incorporación de la Inteligencia Artificial a procesos de clasificación de datos y los desafías que conlleva su aplicación en ciberseguridad.**

El avance de la tecnología trae consigo beneficios y oportunidades. Si hablamos de inteligencia artificial (IA), poco a poco vamos conociendo la infinidad de nuevas aplicaciones y cómo esta permite optimizar procesos. Lamentablemente, hay quienes hacen mal uso de su gran capacidad de aprendizaje y respuesta, lo que supone problemas que requieren atención especial.

A continuación, destacamos cinco desafíos clave que enfrenta la IA en el campo de la ciberseguridad:

**Falta de datos etiquetados:**

La inteligencia artificial en ciberseguridad se basa en la disponibilidad de conjuntos de datos etiquetados, es decir, datos que han sido categorizados o marcados con información precisa sobre las características o comportamientos que representan. Estos conjuntos de datos etiquetados son esenciales para entrenar modelos de inteligencia artificial, proporcionándoles ejemplos claros de cómo identificar y clasificar amenazas, actividades sospechosas o vulnerabilidades.

A diferencia de muchos otros sectores, encontrar conjuntos de datos etiquetados en ciberseguridad es un verdadero desafío, ya que los datos en estas áreas no suelen estar fácilmente disponibles o estructurados adecuadamente para entrenar modelos de IA. Además, generar estas etiquetas requiere experiencia y un conocimiento detallado sobre diferentes tipos de amenazas cibernéticas y sus características.

Mauricio Ramírez, Country Manager de Palo Alto en Chile, destaca la complejidad de esta tarea al mencionar ejemplos como etiquetar si un usuario que descarga un documento es malicioso o benigno, o proporcionar datos sobre la legitimidad de un inicio de sesión. Estos son solo algunos de los muchos tipos de información que deben etiquetarse de manera precisa y consistente para que los modelos de IA puedan aprender a reconocer patrones y detectar amenazas.

Debido a la escasez de datos etiquetados, muchos procedimientos de detección de amenazas en ciberseguridad terminan recurriendo a métodos no supervisados, donde los modelos de IA intentan identificar patrones en los datos sin la ayuda de etiquetas previas. Aunque estos enfoques son útiles, pueden ser menos precisos y

efectivos en comparación con los métodos supervisados, que se basan en conjuntos de datos etiquetados de alta calidad.

**Anómalo no equivale a malicioso:**

Identificar actividades irregulares en el tráfico de red es crucial para detectar posibles amenazas. Aunque es fundamental recordar que no todas ellas son necesariamente maliciosas, lo que plantea un desafío en la diferenciación entre comportamientos inofensivos y otros malintencionados.

Revisar un entorno de red maduro presentará muchos activos y actividades que son anómalos por diseño, como exploradores de vulnerabilidades, controladores de dominio, cuentas de servicio y muchos más. Estos generan un ruido considerable para los sistemas de detección de anomalías, así como fatiga para un analista de SOC (Security Operations Center) que revisa las alertas generadas por dichos sistemas. Mientras que los atacantes, la mayor parte del tiempo, permanecerán por debajo del umbral sin ser detectados, ya que el nivel de actividad anómala para lograr sus objetivos suele ser considerablemente menor que lo que hacen los activos mencionados anteriormente.

**Desviación de Conceptos y Adaptación de dominio son abundantes:**

En un entorno tan dinámico como el cibernético, los ataques y patrones evolucionan constantemente. Para hacer frente a esta evolución, los sistemas de inteligencia artificial (IA) necesitan poder adaptarse a estos cambios y ajustarse a nuevos escenarios.

La Desviación de Conceptos ocurre cuando un modelo de IA entrenado con un conjunto de datos comienza a perder precisión y recordación al aplicarse a datos del mundo real. Esto sucede porque los datos de entrenamiento ya no pueden representar con precisión la realidad en constante cambio. Por ejemplo, un modelo entrenado para detectar ciertos tipos de ataques puede volverse menos efectivo a medida que surgen nuevos métodos de ataque.

Por otro lado, la Adaptación de Dominio se refiere a la situación en la que un modelo de IA no produce resultados consistentes en diferentes entornos o situaciones. Esto puede ocurrir debido a diferencias en las características de los datos, condiciones de operación u otros factores. Por ejemplo, un modelo desarrollado en un entorno de laboratorio puede no funcionar tan bien cuando se aplica en un entorno del mundo real debido a diferencias en las condiciones de operación.

Esto hace que sea difícil para los modelos de IA adaptarse a todas las situaciones posibles. Según Ramírez, tanto los atacantes como los defensores están constantemente innovando y tratando de superarse mutuamente. “Esto conduce a un cambio rápido en los conceptos y estrategias de ataque. En consecuencia,

los modelos de IA diseñados para detectar amenazas necesitan ser actualizados y reentrenados continuamente para seguir siendo efectivos. Si no se mantienen al día con estos cambios, corren el riesgo de volverse obsoletos”.

**Experiencia de dominio crítica y escasa:**

La comprensión profunda de los entornos y las amenazas específicas de un dominio es esencial para desarrollar soluciones efectivas de ciberseguridad. Sin embargo, encontrar expertos con la combinación adecuada de habilidades técnicas y conocimiento de dominio puede ser desafiante.

A diferencia de muchos otros campos, validar modelos requiere una experiencia única en ciberseguridad. En ese sentido, “clasificar si un semáforo está en verde o rojo no requiere un especialista, mientras que clasificar si un archivo es malicioso requiere un experto en análisis de malware” dice Ramírez. Construir modelos de IA para ciberseguridad requiere de expertos capacitados que puedan validar los resultados y etiquetar casos para evaluar los indicadores clave de rendimiento (KPIs). “Dado que hay escasez de esos expertos y que el aprendizaje supervisado es el camino dorado para la IA en ciberseguridad, esto se nos presenta como otro desafío clave para desarrollar IA de manera correcta en este rubro”, agrega.

**Explicabilidad para una respuesta eficiente:**

En caso de tener incidentes de seguridad, la capacidad de explicar y comprender el razonamiento detrás de las decisiones de los sistemas de IA es crucial. La transparencia y la explicabilidad son fundamentales para una respuesta efectiva y una mitigación rápida de las amenazas.

Los modelos son solo herramientas que ayudan a alcanzar el objetivo de detectar el ataque, pero sin explicar lo sucedido, no se traducen en un valor de seguridad real para los analistas. Esto plantea desafíos para el aprendizaje no supervisado, ya que es más difícil explicar el comportamiento del modelo. También establece un alto estándar para cualquier modelo supervisado que debe proporcionar una explicación adecuada sobre lo sucedido, por qué es importante y cómo está detectando la actividad.

Enfrentar estos desafíos requerirá un enfoque integral que combine la experiencia humana con el poder de la inteligencia artificial. “Un ejemplo de esto es la Plataforma Cortex que aplica una técnica patentada de aprendizaje semisupervisado y múltiples técnicas como el Análisis Cortex y SmartScore, aprovechando el aprendizaje supervisado para detectar datos maliciosos y descartar anomalías al diseñar datos benignos”, concluye el ejecutivo

![](https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Inteligencia-Artificial-digital-p.jpg)

<table style="height: 42px;" width="569">
<tbody>
<tr>
<td style="text-align: justify;"><sub><strong>Nuestras noticias también son publicadas a través de nuestra cuenta en Twitter <a href="https://twitter.com/itnewslat?lang=es">@ITNEWSLAT</a> y en la aplicación <a href="https://squidapp.co/en/">SQUID</a></strong></sub></td>
</tr>
</tbody>
</table>

<img src="https://tracker.metricool.com/c3po.jpg?hash=56f88a41e39ab42c063cc51676587a04"/>