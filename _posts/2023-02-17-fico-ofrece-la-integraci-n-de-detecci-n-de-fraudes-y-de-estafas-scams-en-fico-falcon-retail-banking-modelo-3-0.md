---
layout: posts
color-schema: red-dark
date: '2023-02-17 07:10 -0500'
published: true
superNews: false
superArticle: false
year: '2023'
title: >-
  FICO ofrece la integración de detección de fraudes y de estafas (scams) en
  FICO Falcon Retail Banking modelo 3.0
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/proteccion-de-datos-g.jpg
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/proteccion-de-datos-p.jpg
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
week: '07'
---
El nuevo Scam Detection Score de FICO identifica 50% más transacciones fraudulentas respecto al puntaje de fraude estándar

FICO, empresa global líder en software de analítica predictiva y gestión de decisiones, ofrece a las empresas FICO® Falcon® Fraud Manager Retail Banking Consumer modelo v3.0, que agrega Scam Detection Score a la actual detección de fraudes de puntuación de terceros de Falcon para las transferencias de banca minorista. Las dos puntuaciones permitirán a los bancos diferenciar mejor sus estrategias para manejar estos distintos tipos de delitos financieros.

**El alza en estafas**

La proliferación de aplicaciones de pago móviles, los nuevos estándares del open banking y el estrés de los consumidores causado por la pandemia global han incrementado las estafas de pago autorizado (APP, por sus siglas en inglés) a un ritmo acelerado. Este delito financiero ocurre cuando a un cliente se le manipula para enviar dinero a una cuenta controlada por un estafador. Desde las aplicaciones móviles que asedian a los jóvenes hasta los dueños de empresas pequeñas que confunden a los estafadores con un empleado bancario, la sofisticación de las estafas APP está evolucionando a una velocidad vertiginosa. 

De acuerdo con UK Finance, en el 2019 hubo un incremento del 45% en estafas APP respecto al 2018, con pérdidas por un total de £456 millones tan sólo en el 2019, mientras que las pérdidas por estafas siguieron aumentando en el 2020 a un total de £479 millones. Muchos bancos en el Reino Unido han ofrecido voluntariamente reembolsar a las víctimas de estafas bajo ciertas circunstancias y se han establecido nuevas normas para reembolso voluntario. Pero esto quizá no sea suficiente, ya que se está ejerciendo una mayor presión por instituir un reembolso obligatorio para todos los bancos. En conclusión, las estafas están afectando el balance final de los bancos, con un aumento del 78% en pérdidas por reembolsos de 2019 a 2020.

“Las estafas APP no sólo son un problema grave en el Reino Unido. Este problema también va en aumento en países de América Latina, ya que el open banking ha penetrado cada vez más en la región, por ejemplo, el exitoso sistema de pagos al instante PIX en Brasil, el cual también se lanzará este mismo año en Colombia. FICO ha estado siguiendo esta tendencia minuciosamente y nos complace ampliar nuestro análisis de banca minorista para incluir Scam Detection Score” dijo Ricardo Ribeiro, Director de Plataforma - Región de América Latina y el Caribe de FICO.

La diferencia entre las estafas y las transferencias fraudulentas de terceros 

Ribeiro explicó que para entender mejor cómo se comportarán Scam Detection Score y la detección de fraudes de terceros en las transferencias de banca minorista, es necesario comprender la manera en que se cometen ambos delitos:

- Una transacción fraudulenta de pago no autorizado (UPP, por sus siglas en inglés) es una transacción fraudulenta de un tercero en la cual el defraudador ejecuta una transacción fraudulenta sin el permiso del cliente.
- Con las estafas APP, la transacción se ejecuta con el consentimiento del cliente o directamente por el cliente. Es un delito iniciado por el titular de la cuenta (cliente) generalmente a través de métodos como la ingeniería social.


Analíticamente, ya sea que el delito se cometa por el titular de la cuenta o por un tercero, tiene implicaciones importantes en el diseño de los modelos para combatir los fraudes UPP versus a las estafas APP.

El uso de listas clasificadas por comportamientos para detectar las estafas

Una de las principales armas analíticas de Falcon en la lucha contra el fraude de pagos es la lista clasificada por comportamientos (lista B). Debido a que monitorean los atributos clave del historial de pago de una persona, las listas B aprenden los comportamientos frecuentes y recurrentes de los clientes (por ejemplo, “favoritos”). Los aciertos y errores en esos favoritos permiten al modelo Falcon decidir entre fraude, estafa o comportamiento normal. 

“Cuando se consideran las estafas APP iniciadas por el titular de la cuenta, algunas listas B señalarán los comportamientos favoritos del cliente —el cliente fue engañado para realizar la transacción—. Sin embargo, otras listas B seguirán mostrando actividades anormales en relación con los principales favoritos del cliente. La clave para detectar cualquier actividad financiera delictiva, ya sean estafas APP o transacciones fraudulentas UPP, consiste en reconocer los aspectos anormales de la transacción” añadió Ribeiro.    

**Comparación de algunas listas**
De acuerdo con FICO, cuando un cliente interactúa en un dispositivo no favorito, tiene 16 veces más riesgo de caer en un fraude de terceros (UPP) que en una estafa iniciada por el titular de la cuenta (APP). En contraste, cuando un cliente utiliza su dispositivo favorito, pero realiza una transacción en una cuenta corriente no favorita —por ejemplo, si utiliza la aplicación móvil de su banco en su propio teléfono móvil que usa frecuentemente para transferir fondos, pero los transfiere a una cuenta nueva— el riesgo de estafa aumenta 10 veces comparado con el fraude de terceros.  

Observar las combinaciones de favoritos y combinarlas con otras características de anormalidad relacionadas con los montos de las transacciones (frecuencias, hora del día y muchas otras características) permite a los modelos de FICO clasificar a los clientes en tipos de fraude de terceros, estafas APP y delitos no financieros. En el caso de las estafas en los dispositivos favoritos, el nuevo Scam Detection Score identifica 24 veces más el número de estas transacciones en comparación con el puntaje de fraude estándar a una tasa de revisión de no fraude típica.

**Funciones analíticas adicionales**
Muchas de las funciones exclusivas de Falcon también muestran cambios evidentes entre las transacciones legítimas, el fraude de terceros y las estafas. Por ejemplo, en la gráfica que aparece abajo, la distribución de probabilidad de las transacciones legítimas (azul) se aleja significativamente de las transacciones fraudulentas (verde). Sin embargo, todavía hay un cambio claro entre las transacciones de fraude de terceros y las transacciones de estafa (scam) (naranja). El modelo de aprendizaje automático utiliza estas diferencias en un conjunto de señales para asignar la probabilidad de fraude frente a las transiciones scam.


Las distribuciones que se muestran arriba provienen de una función avanzada de Falcon. Las líneas punteadas ubican la mediana de cada distribución, lo que muestra que las distribuciones del no fraude, las estafas (scams) y las poblaciones de fraude son significativamente diferentes. Las estafas (scams) y los fraudes de terceros tienen más probabilidad de ocurrir para los valores encontrados en la cola de la distribución no fraudulenta.     

“Debido a que aprovecha las características distintivas reveladas por nuestros análisis, FICO Falcon Fraud Manager Retail Banking Consumer modelo v3.0 ofrece detección avanzada tanto de estafas (scams) como de fraude de terceros. Mientras que los clientes utilizan actualmente la puntuación de fraude original v2.0 para detectar tanto fraudes como estafas, el nuevo modelo v3.0 que agrega el nuevo Scam Detection Score, también emplea la descripción del perfil de comportamiento del cliente para identificar las estafas, detectar 50% más transacciones fraudulentas a una tasa de revisión de transacciones del 0.5%” detalló Ribeiro. 

![](https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/proteccion-de-datos-p.jpg)

<table style="height: 42px;" width="569">
<tbody>
<tr>
<td style="text-align: justify;"><sub><strong>Nuestras noticias también son publicadas a través de nuestra cuenta en Twitter <a href="https://twitter.com/itnewslat?lang=es">@ITNEWSLAT</a> y en la aplicación <a href="https://squidapp.co/en/">SQUID</a></strong></sub></td>
</tr>
</tbody>
</table>

<img src="https://tracker.metricool.com/c3po.jpg?hash=56f88a41e39ab42c063cc51676587a04"/>