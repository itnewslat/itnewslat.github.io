---
layout: posts
color-schema: red-dark
date: '2018-09-17 14:09 -0400'
published: true
superNews: false
superArticle: false
title: >-
  Es posible robar patrón de desbloqueo del teléfono emitiendo una señal
  acústica
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Uso-Celular-p.jpg
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/Uso-Celular-g.jpg
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
---
Desde ESET explican por qué utilizando el micrófono y el altavoz de un teléfono para emitir una determinada señal acústica se obtiene el patrón de desbloqueo del dispositivo.

ESET, compañía líder en detección proactiva de amenazas, analizó una investigación que demuestra que es posible obtener el patrón de desbloqueo de un teléfono móvil a través de una señal acústica.

Un nuevo ataque nombrado “SonarSnoop” reduce en un 70% el número de intentos para desbloquear un patrón. Mediante el ataque de canal lateral acústico es posible identificar el patrón de desbloqueo de un teléfono según una investigación de la Universidad de Lancaster y de la Universidad de Linköping.

Un ataque de canal lateral es un tipo de ataque que no explota una vulnerabilidad en el dispositivo afectado, sino que obtiene información adicional que surge de la propia implementación de un dispositivo. En este caso, la señal acústica que se genera mediante la interacción del micrófono y el altavoz del dispositivo permite explotar información secundaria que, entre otras cosas, revelará el patrón de desbloqueo en el dispositivo.

“En la mayoría de los casos, los ataques de canal lateral son pasivos. Es decir que un atacante aprovecha información que surge naturalmente, como puede ser el sonido que emite un dispositivo como consecuencia de su funcionamiento. Sin embargo, esta es la primera vez que se demuestra la posibilidad de generar de manera activa un ataque de canal lateral acústico.”, comentó Camilo Gutierrez, Jefe del Laboratorio de Investigación de ESET Latinoamérica.

Todo comienza cuando el usuario instala una aplicación maliciosa en el dispositivo. La misma hace que el teléfono comience a reproducir una señal sonora que no está en el rango auditivo de los seres humanos (20 Hz – 20 KHz), con lo cual es imperceptible. Esta señal rebota en los objetos que rodean al teléfono creando un eco, el cual es registrado por el micrófono del dispositivo.

Calculando el tiempo que transcurre entre la emisión del sonido y el retorno de su eco o rebote a la fuente que lo emite es posible determinar la ubicación de un objeto en un espacio físico y también saber si existe movimiento; tal como funciona un sonar. Los investigadores fueron capaces de utilizar esta información para hacer un registro del movimiento del dedo de un individuo al momento de ingresar su patrón de desbloqueo, ya que con el micrófono del teléfono se grababan diferentes ecos que daban información sobre la posición del dedo. Esto fue posible cuando el teléfono estaba estático y lo único que se movía era el dedo.

De los cientos de miles de patrones posibles que un usuario puede llegar a dibujar, hay 12 que son los más comunes. Para la investigación se realizaron pruebas con diez voluntarios a los cuales se solicitó que dibujen cada uno de estos 12 patrones. Luego, probaron distintas técnicas para reconstruir el movimiento del dedo a partir del análisis del sonar, lo que derivó en un algoritmo que reducía a 3.6 los patrones más frecuentes que se utilizaron durante las pruebas.

“Si bien el ataque SonarSnoop no tiene una precisión fina, reduce en un gran porcentaje las posibilidades de identificar un patrón de desbloqueo. En el futuro es posible que el rendimiento pueda mejorar y que surja un nuevo tipo de amenaza. Si bien esta investigación demuestra que es posible que se implementen este tipo de ataques, aún no hay amenazas que lo implementen. Sin embargo esto demuestra la importancia de contar con una solución de seguridad en los dispositivos móviles para reducir los riesgos de infectar el sistema con cualquier tipo de amenaza. Desde ESET apostamos a la concientización y educación como medidas básicas para disfrutar de internet de manera segura y por eso la necesidad de estar al tanto sobre cómo pueden funcionar las amenazas informáticas utilizando otros vectores de propagación”, concluyó Gutierrez.

Para más información ingrese al portal de noticias de ESET llamado WeLiveSecurity en: https://www.welivesecurity.com/la-es/2018/09/11/emitiendo-senal-acustica-robar-patron-desbloqueo-telefono/

