---
layout: posts
color-schema: red-dark
date: '2021-02-26 14:12 -0400'
published: true
superNews: false
superArticle: false
year: '2021'
title: >-
  Lazarus, grupo de amenazas persistentes avanzadas, pone en la mira a la
  industria de defensa
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Ataque-Hacker-P.jpg
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/Ataque-Hacker-G.jpg
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
week: '8'
---
<p style="text-align: justify;"><strong>Investigadores de Kaspersky han identificado una nueva campaña, previamente desconocida, de Lazarus, un agente de amenazas avanzadas sumamente prolífico que se encuentra activo por lo menos desde 2009 y ha sido vinculado con una serie de campañas multifacéticas. Desde principios de 2020, este agente ha estado apuntando a la industria de defensa por medio de una puerta trasera especialmente adaptada conocida como ThreatNeedle. Esa puerta trasera se desplaza lateralmente por las redes infectadas, de las que recopila información confidencial.</strong></p>
<p style="text-align: justify;"><a href="https://securelist.com/lazarus-covets-covid-19-related-intelligence/99906/">Lazarus</a> es uno de los agentes de amenazas más prolíficos de la actualidad. Activo desde al menos 2009, Lazarus ha estado involucrado en campañas de ciberespionaje a gran escala, <a href="https://securelist.com/lazarus-on-the-hunt-for-big-game/97757/">campañas de ransomware</a> e incluso ataques contra el <a href="https://securelist.com/operation-applejeus/87553/">mercado de las criptomonedas</a>. Aunque en los últimos años se ha centrado en las instituciones financieras, parece que a principios de 2020 agregó a su “cartera” la industria de la defensa.</p>
<p style="text-align: justify;">Los investigadores de Kaspersky detectaron esta campaña por primera vez cuando fueron llamados para ayudar con la respuesta a incidentes y descubrieron que la organización afectada había sido víctima de una puerta trasera especializada (un tipo de malware que permite tener el control completo del dispositivo de manera remota). Conocida como ThreatNeedle, esta puerta trasera se desplaza lateralmente a través de las redes infectadas y extrae información confidencial. Hasta ahora, se han visto afectadas organizaciones de más de una docena de países.</p>
<p style="text-align: justify;">La infección inicial se produce por medio del <em>spear phishing</em>; los objetivos atacados reciben correos electrónicos que contienen un archivo malicioso de Word o un enlace a uno que se encuentra alojado en los servidores de la empresa. Los correos electrónicos afirmaban tener actualizaciones urgentes relacionadas con la pandemia y, supuestamente, provenían de un centro médico respetado.</p>
<p style="text-align: justify;">Una vez abierto el documento malicioso, el malware se descarga y pasa al proceso de despliegue. El malware ThreatNeedle utilizado en esta campaña pertenece a una familia de software malicioso conocida como Manuscrypt, que es parte del grupo Lazarus y que anteriormente se ha visto atacando negocios de criptomonedas. Una vez instalado, ThreatNeedle puede obtener el control total del dispositivo de la víctima, permitiéndole manipular archivos hasta ejecutar órdenes recibidas.</p>
<p style="text-align: justify;">Una de las técnicas más interesantes de esta campaña es que el grupo puede robar datos, tanto de las redes de TI de una oficina (red con computadoras con acceso a la Internet) como de la red restringida de una planta (que contiene equipos y activos de misión crítica con datos altamente sensibles y sin acceso a Internet). Según la política de la empresa, se supone que no debe transferirse información entre estas dos redes. Sin embargo, los administradores podían conectarse a ambas redes para dar mantenimiento a estos sistemas. Lazarus logró obtener el control de las estaciones de trabajo del administrador y luego configurar una puerta de enlace maliciosa para atacar la red restringida y para robar y extraer de allí datos confidenciales.</p>
<p style="text-align: justify;"><em>“Lazarus fue quizás el agente de amenazas más activo de 2020 y, aparentemente, esto no va a cambiar a corto plazo. De hecho, ya en enero de este año, el equipo de análisis de amenazas de Google informó que se había visto a Lazarus usando esta misma puerta trasera para atacar a investigadores de seguridad. Esperamos ver más de ThreatNeedle en el futuro, y estaremos atentos”,</em> comenta <strong>Seongsu Park, investigador sénior de seguridad del Equipo Global de Análisis e Investigación en Kaspersky.</strong></p>
<p style="text-align: justify;"><em>“Lazarus no solo es muy prolífico, sino muy avanzado. No solo pudieron superar la segmentación de la red, sino que también realizaron una investigación exhaustiva para crear correos electrónicos de phishing sumamente especializados y eficaces y, además, crearon herramientas especializadas para extraer remotamente la información robada a un servidor. Con industrias que todavía se encuentran lidiando con el trabajo a distancia y que, por lo tanto, son más vulnerables, es importante que las organizaciones tomen precauciones de seguridad adicionales para protegerse contra este tipo de ataques avanzados”,</em> agrega <strong>Vyacheslav Kopeytsev, experto en seguridad de Kaspersky ICS CERT.</strong></p>
<p style="text-align: justify;">Para proteger a su organización contra ataques como ThreatNeedle, los expertos de Kaspersky recomiendan:</p>

<ul style="text-align: justify;">
	<li>Brinde a su personal <a href="https://latam.kaspersky.com/enterprise-security/adaptive-online-awareness-training">capacitación básica en higiene de ciberseguridad</a>, ya que muchos ataques dirigidos comienzan con <em>phishing</em> u otras técnicas de ingeniería social.</li>
	<li>Si una empresa cuenta con tecnología operativa (OT) o infraestructura crítica, asegúrese de que esté separada de la red corporativa o de que no se realicen conexiones no autorizadas.</li>
	<li>Asegúrese de que los empleados conozcan y sigan las normas de ciberseguridad.</li>
	<li>Proporcione a su equipo de SOC acceso a la inteligencia de amenazas más reciente. El <a href="https://latam.kaspersky.com/enterprise-security/threat-intelligence">Kaspersky Threat Intelligence Portal</a>es un único punto de acceso para el departamento de TI de la empresa, que proporciona información y conocimientos sobre ciberataques recopilados por Kaspersky durante más de 20 años.</li>
	<li>Implemente una solución de seguridad de grado empresarial, como <a href="https://latam.kaspersky.com/enterprise-security/anti-targeted-attack-platform">Kaspersky Anti Targeted Attack Platform</a>, que detecte en una etapa temprana las amenazas avanzadas a nivel de la red.</li>
	<li>También se recomienda implementar una solución dedicada para redes y nodos industriales, como <a href="https://ics.kaspersky.com/products/">Kaspersky Industrial CyberSecurity</a>, que permita la supervisión, el análisis y la detección de amenazas del tráfico de la red OT.</li>
</ul>
<p style="text-align: justify;">Lea más sobre la campaña ThreatNeedle en el <a href="https://ics-cert.kaspersky.com/reports/2021/02/25/lazarus-targets-defense-industry-with-threatneedle/">sitio web de Kaspersky ICS CERT</a>.</p>

![](https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Ataque-Hacker-P.jpg)

<img src="https://tracker.metricool.com/c3po.jpg?hash=56f88a41e39ab42c063cc51676587a04"/>