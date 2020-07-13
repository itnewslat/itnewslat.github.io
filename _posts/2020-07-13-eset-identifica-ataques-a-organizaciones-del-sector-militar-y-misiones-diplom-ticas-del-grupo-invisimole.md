---
layout: posts
color-schema: red-dark
date: '2020-07-13 16:36 -0400'
published: true
superNews: false
superArticle: false
year: '2020'
title: >-
  ESET identifica ataques a organizaciones del sector militar y misiones
  diplomáticas del grupo InvisiMole 
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Militares-p.jpg
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/Militares-g.jpg
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
week: '29'
---
**Investigadores de ESET revelan el modus operandi del grupo de ciberespionaje InvisiMole, incluidos los vínculos recientemente descubiertos que mantiene con el grupo Gamaredo.**

Al analizar una nueva campaña del grupo InvisiMole, investigadores de ESET, compañía líder en detección proactiva de amenazas informáticas, descubrieron un conjunto de herramientas actualizado del grupo y detalles desconocidos sobre su modo de operación. Esta nueva campaña está dirigida a organizaciones de alto perfil del sector militar y misiones diplomáticas, ambas en Europa del Este. Según la telemetría de ESET, los intentos de ataque fueron desde finales de 2019 hasta al menos junio de 2020, cuando los investigadores de ESET publicaron sus hallazgos.
 
InvisiMole, un actor de amenazas que opera desde al menos 2013, fue documentado por primera vez por ESET vinculado a operaciones específicas de ciberespionaje en Ucrania y Rusia, utilizando dos backdoors con muchas funciones para espiar a las víctimas. "En aquel entonces, encontramos estas backdoors sorprendentemente bien equipadas, pero faltaba una gran parte de la imagen: no sabíamos cómo se entregaron, difundieron e instalaron en el sistema", explica Zuzana Hromcová, investigadora de ESET que analizó InvisiMole.
 
Gracias a la investigación de los ataques en cooperación con las organizaciones afectadas, los investigadores de ESET obtuvieron la oportunidad de analizar adecuadamente las operaciones de InvisiMole. "Pudimos documentar el amplio conjunto de herramientas utilizadas para la entrega, el movimiento lateral y la ejecución de backdoors de InvisiMole", dice Anton Cherepanov, el investigador de malware de ESET que dirigió la investigación
 
Una de las principales conclusiones de la investigación se refiere a la cooperación del grupo InvisiMole con otro grupo de amenaza, Gamaredon. Los investigadores descubrieron que el arsenal de InvisiMole solo se desata después de que Gamaredon ya se ha infiltrado en la red de interés y posiblemente ha obtenido privilegios administrativos.
 
“Nuestra investigación sugiere que los objetivos considerados particularmente significativos por los atacantes se actualizan del malware Gamaredon relativamente simple al malware avanzado InvisiMole. Esto permite que el grupo InvisiMole cuente con formas creativas de operar bajo el radar”, comenta Hromcová.
 
 <center>
<div class='img'><img class="alignnone" src="http://technocio.com/wp-content/uploads/2020/07/ESET-1-1.jpg" alt="" width="600" height="123" /></div>
</center>

**Figura 1.** _El downloader.NET de Gamaredon puede “actualizar” la máquina de la víctima con el downloader TCP de InvisiMole_
 
En cuanto a permanecer bajo el radar, los investigadores de ESET descubrieron que InvisiMole utiliza cuatro cadenas de ejecución diferentes, diseñadas combinando código malicioso con herramientas legítimas y ejecutables vulnerables. Para ocultar el malware de los investigadores de seguridad, los componentes de InvisiMole están protegidos con encriptación por víctima, asegurando que la carga útil solo pueda ser descifrada y ejecutada en la computadora afectada. El conjunto de herramientas actualizado InvisiMole también presenta un nuevo componente que utiliza el túnel DNS para una comunicación C&C más sigilosa.
 
Al analizar el conjunto de herramientas actualizado del grupo, los investigadores observaron mejoras sustanciales en comparación con las versiones analizadas anteriormente. "Con este nuevo conocimiento, podremos rastrear las actividades maliciosas del grupo aún más de cerca", concluye Hromcová.
 
Para conocer el análisis técnico del nuevo conjunto de herramientas InvisiMole, consulte el documento completo: "InvisiMole: La parte oculta de la historia".
 
Para conocer más sobre seguridad informática ingrese al portal de noticias de ESET: https://www.welivesecurity.com/la-es/2020/06/18/invisimole-nuevos-detalles-vinculo-gamaredon-distribuir-malware/
 
<img src="https://tracker.metricool.com/c3po.jpg?hash=56f88a41e39ab42c063cc51676587a04"/>