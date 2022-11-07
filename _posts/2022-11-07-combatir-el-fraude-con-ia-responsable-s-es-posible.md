---
layout: posts
color-schema: red-dark
date: '2022-11-07 10:21 -0400'
published: true
superNews: false
superArticle: false
year: '2022'
title: Combatir el fraude con IA responsable sí es posible
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/TJ-Horan-p.jpg
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/TJ-Horan-g.jpg
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
week: '45'
---
**TJ Horan, vicepresidente de Gestión de Producto en FICO**

Como profesional de software y pagos que se esfuerza por aplicar los cambios en un panorama de fraude en constante cambio, reconozco que suele existir una gran desconexión entre la innovación analítica, área de mi colega Scott Zoldi, director de Analítica (CDAO, por sus siglas en inglés) en FICO, y las trincheras diarias de la guerra contra el delito financiero, mi área.

Scott es una de las fuerzas propulsoras de la inteligencia artificial (IA) y la tecnología de decisiones que impulsan tanto FICO® Falcon como una familia entera de soluciones de combate al fraude. Además de encabezar el desarrollo de innovaciones como FICO® Scam Detection Score y las puntuaciones de antilavado de dinero de FICO, redactó el manual sobre cómo las organizaciones pueden lograr una IA responsable. Scott también ha creado más de 120 patentes de software, varias de ellas relacionados con la IA.

Me reuní con Scott para hablar sobre cómo los grupos de operaciones antifraude pueden beneficiarse de la tecnología de IA responsable y por qué es importante abordarla. A continuación, muestro lo más destacado de nuestra conversación.

**¿Cuál es el papel de la IA responsable en las operaciones antifraude?**

Las personas en puestos operativos necesitan saber qué impulsa sus modelos de analítica del fraude, pues es fundamental para su eficacia. Es por esto, en gran parte, que se usa la IA de forma ética: para realmente entender los principales comportamientos detrás de los modelos. Pero ¿qué significa esto?

Desarrollar modelos va más allá de sólo ingresar un gran volumen de datos en una red neuronal conectada y darle “reproducir”: hay que observar el énfasis del modelo (como transacciones con Tarjetas No Presentes (TNP); transacciones de alto valor, etcétera), cómo se desempeña en diferentes tipos de fraude y si cambia su comportamiento entre cada modelo. Estudiamos los comportamientos latentes a los que el modelo es más –o menos– sensible, y cómo impactan. Conforme observamos las implicaciones de la IA responsable en el fraude, es importante entender el comportamiento de los datos que impulsan el modelo. Queremos programar para saber, en un entorno cambiante, cómo se espera que funcione el modelo, o si debemos ajustarlo al ambiente de producción, y cómo.

**¿Cuánta experiencia interna en inteligencia artificial se necesita?**

Como gerente en un equipo antifraude, es importante saber en qué se enfoca el modelo, y en qué no; a veces hay que pedir más información sobre los componentes de ciertos subsegmentos del modelo. Algunos clientes del modelo antifraude personalizado de FICO, por ejemplo, tienen 26 subcategorías distintas de rendimiento en él, y preguntarán sobre cómo se comporta el modelo, pues está ligado a las estrategias y reglas que impulsan sus procesos de toma de decisiones. En FICO publicamos informes de los modelos, y subconjuntos de su rendimiento, para mostrar qué está cambiando los datos. La retroalimentación de clientes y grupos de usuarios son importantes.

**¿Cómo se pueden ir mejorando los modelos de analítica de datos?**

Dada la madurez de nuestra empresa, sabemos que los modelos de analítica de datos pueden desarrollarse de muchas formas y con diferentes comportamientos, pero con niveles similares de rendimiento. Desarrollamos modelos de forma responsable para no modificar de manera drástica sus comportamientos y que, así, los procesos de decisiones sigan siendo consistentes.

Es importante seguir enfocados en las áreas que deseamos mejorar. Como proveedores de modelos que los clientes utilizan dentro de sus sistemas de IA, nuestras versiones no pueden cambiar rápidamente el comportamiento de un modelo y mantener el mismo nivel de detección de fraude. Aunque suene contradictorio, es posible desarrollar un gran modelo que produzca malas decisiones, ya que el sistema de decisiones no se ajusta lo bastante rápido a los cambios del modelo. Si eso sucediera, los sistemas de decisiones, las reglas y las estrategias estarían desalineados. Por ello, este diálogo consistente entre FICO y los clientes acerca de lo que desean enfatizar, y lo que debe mejorar, es la mejor manera de interactuar y evitar que el aprendizaje automático sea una caja negra. Además, ayuda a asegurar que el aprendizaje automático que producimos no sea un “proyecto académico”, sino que viva dentro de un sistema de decisiones.

Como nuestros clientes tienen reglas y estrategias para detectar transacciones TNP, tarjetas de crédito y cajeros automáticos transfronterizos, frecuencia, velocidad y más, quieren saber si el modelo mejorará su rendimiento y sensibilidad a ciertos tipos de comportamientos, o no. Tenemos mucha tecnología nueva de IA responsable que enfatiza más ciertos tipos de comportamientos fraudulentos, en los que buscamos que el modelo tenga un mejor desempeño. Los clientes que usan modelos para banca minorista, por ejemplo, se han beneficiado de esta tecnología.

Utilizamos modelos estudiante-profesor para asegurar que el modelo nuevo no sea demasiado diferente al modelo anterior, a fin de evitar un impacto operativo en el sistema de decisiones. La mayoría de los clientes quieren que el modelo se perfeccione con el tiempo y en maneras que no afecten radicalmente la toma de decisiones. Eso es parte de lo que significa estar en control de la IA responsable. También representa un uso ético de los modelos de aprendizaje automático.

**¿Por qué es crucial que los modelos de analítica de prevención y gestión del fraude sean explicables?**

FICO se dedica desde hace 30 años a desarrollar procesos que garantizan la continuidad de los modelos. Podríamos simplemente tomar los datos más recientes, subirlos a la nube y generar un modelo, pero la forma en que el modelo se comporta podría ser drásticamente diferente cada vez, lo que ocasionaría problemas operativos considerables y una ruptura en los sistemas antifraude. Este concepto asegura que las actualizaciones al modelo funcionen en armonía con el resto de las decisiones de IA que el cliente utilice. Es complicado y requiere tiempo. Debido a la forma en que el fraude se comete, los modelos necesitarán cambiar con el tiempo y perfeccionarse, pero no tanto que los clientes tengan que rehacer sus reglas y estrategias cada vez que aparezca un nuevo modelo.

En otras palabras, si el vendedor no puede explicarles cuáles son los aspectos básicos del desarrollo del modelo de su analítica de fraude, incluyendo cómo se dio seguimiento a ese desarrollo, qué metodología se empleó para desarrollarlo y qué precauciones se tomaron, es una señal de alarma.

La capacidad de explicar los modelos es cada vez más necesario, porque forma parte del cumplimiento de normas y regulaciones, como es el caso del Reglamento General de Protección de Datos (GDPR, por sus siglas en inglés) en la cual todos necesitan contar con una estrategia donde los modelos sean interpretables/explicables, los comportamientos sean evidentes y las explicaciones sean claras.

Este nivel de cumplimiento no necesariamente se aplica rigurosamente, pero pienso que las cosas están cambiando. Tendrá que haber mucho más control sobre los sistemas de decisiones para cumplir el nivel más alto de explicación como manera de reducir el sesgo. Puede ser

abrumador, ya que muchos métodos de IA explicables no tienen la capacidad de cumplir estos requerimientos de imparcialidad. Contamos actualmente con métodos eficaces en nuestros modelos antifraude y pretendemos implementar tecnologías aún más nuevas que se entrelacen profundamente con los algoritmos que producirán puntuaciones.

Finalmente, ¿qué hay del actual debate sobre el uso de los modelos interpretables? Observo estos debates, y para obtener el nivel de claridad necesario, podemos hablar de la regulación IEEE 7000, que básicamente afirma: “No se enfoque en desarrollar el mejor modelo, sino en desarrollar el modelo que cumpla el objetivo, que se pueda explicar y que, por lo tanto, sea lo más sencillo posible”. Pienso que esa es una buena práctica. Desarrollar bien un modelo de análisis de datos, en una manera que sea transparente para el desarrollador y más transparente para el usuario, beneficia tanto a la empresa como a los auditores.

Por tal motivo, mis últimas 25 patentes se han enfocado en infraestructuras relacionadas con la IA responsable. Ahora necesitamos asegurar que implementemos técnicas como la IA auditable, para poder aislar los comportamientos y entender qué son, así como monitorear constantemente esos impulsores.

Volviendo al tema del Covid, durante la pandemia confiamos en nuestros modelos antifraude. Simplemente explicamos a nuestros clientes cómo ajustar ciertos umbrales para minimizar el volumen de casos. Aunque ellos cambiaron su comportamiento sobre las transacciones a causa del virus, los comportamientos principales en los cuales está basado el modelo no se modificaron. Observamos un aumento del 400% en fraude TNP, pero las capacidades de detección de fraude del modelo se mantuvieron sin cambio. El hecho de que el modelo tuviera un buen desempeño en medio de la confusión y los cambios conductuales tan profundos por los que atravesábamos, con ajustes mínimos, demuestra el beneficio

![](https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/TJ-Horan-p.jpg)

<table style="height: 42px;" width="569">
<tbody>
<tr>
<td style="text-align: justify;"><sub><strong>Nuestras noticias también son publicadas a través de nuestra cuenta en Twitter <a href="https://twitter.com/itnewslat?lang=es">@ITNEWSLAT</a> y en la aplicación <a href="https://squidapp.co/en/">SQUID</a></strong></sub></td>
</tr>
</tbody>
</table>

<img src="https://tracker.metricool.com/c3po.jpg?hash=56f88a41e39ab42c063cc51676587a04"/>