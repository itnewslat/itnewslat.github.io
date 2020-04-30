---
layout: posts
color-schema: red-dark
date: '2020-04-30 07:58 -0400'
published: true
superNews: false
superArticle: false
year: '2020'
title: 'PhantomLance: una sofisticada campaña de espionaje para Android'
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Espionaje-p.jpg
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/Espionaje-g.jpg
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
week: '18'
---
Los investigadores de Kaspersky detectaron una compleja y maliciosa campaña dirigida a usuarios de dispositivos Android, que se puede atribuir con mediana confianza a OceanLotus, un actor de amenaza persistente avanzado. La campaña, llamada PhantomLance, ha estado activa por lo menos desde 2015 y todavía continúa. Emplea múltiples versiones de un complejo spyware (software espía), creado para recopilar los datos de las víctimas), así como tácticas de distribución inteligente, incluida la distribución a través de docenas de aplicaciones en el mercado oficial de Google Play.

En julio de 2019, otros investigadores de seguridad informaron acerca de una nueva muestra de spyware encontrada en Google Play. El informe atrajo la atención de Kaspersky debido a sus características inesperadas, pues su nivel de complejidad y comportamiento eran muy diferentes de los troyanos comunes que generalmente se suben a las tiendas de aplicaciones oficiales. Los investigadores de Kaspersky pudieron encontrar otra muestra muy similar de este malware en Google Play. Por lo general, si los creadores de malware logran subir una aplicación maliciosa a la tienda de aplicaciones legítima, invierten recursos considerables en promover la aplicación para aumentar el número de instalaciones y, por lo tanto, aumentar el número de víctimas. Este no fue el caso con estas aplicaciones maliciosas recién descubiertas. Parecía que los operadores detrás de ellas no estaban interesados en la difusión masiva. Para los investigadores, esto era un indicio de actividad APT dirigida. Investigaciones adicionales permitieron descubrir múltiples versiones de este malware con docenas de muestras, conectadas por varias similitudes de código.

La funcionalidad de todas las muestras era similar: el objetivo principal del spyware era recopilar información. Si bien la funcionalidad básica no era muy amplia e incluía geolocalización, registros de llamadas, acceso a contactos y acceso a SMS, la aplicación también podía recopilar una lista de aplicaciones instaladas, así como la información del dispositivo, como el modelo y la versión del sistema operativo. Además, el agente de la amenaza podía bajar y ejecutar varias cargas útiles maliciosas y, por lo tanto, adaptar la carga útil que sería adecuada para el entorno específico del dispositivo, como la versión de Android y las aplicaciones instaladas. De esta forma, el agente podía evitar sobrecargar la aplicación con características innecesarias y al mismo tiempo, recopilar la información necesaria.

Otra investigación indicó que PhantomLance fue distribuida principalmente en varias plataformas y mercados, incluidos, entre otros, Google Play y APKpure. Para hacer que las aplicaciones parezcan legítimas, en casi todos los casos de implementación del malware los agentes de la amenaza intentaron construir un perfil falso del programador mediante la creación de una cuenta Github relacionada. Para evadir los mecanismos de filtrado que emplean los mercados, las primeras versiones de la aplicación subidas a los mercados por el agente de amenaza no contenían ninguna carga maliciosa. Sin embargo, con actualizaciones posteriores, las aplicaciones recibieron cargas maliciosas y un código para instalarlas y ejecutarlas.

Según Kaspersky Security Network, desde 2016, se observaron alrededor de 300 intentos de infección en dispositivos Android en países como India, Vietnam, Bangladesh e Indonesia. Aunque las estadísticas de detección incluían infecciones colaterales, Vietnam se destacó como uno de los principales países por la cantidad de intentos de ataques; algunas de las aplicaciones maliciosas utilizadas en la campaña también se hicieron exclusivamente en idioma vietnamita.

Utilizando el motor de atribución de malware de Kaspersky, una herramienta interna para encontrar similitudes entre diferentes piezas de código malicioso, los investigadores pudieron determinar que las cargas útiles de PhantomLance eran al menos un 20% similares a las de una de las campañas de Android más antiguas relacionadas con OceanLotus, un agente que ha estado en funcionamiento desde al menos 2013 y cuyos objetivos se encuentran principalmente en el sudeste asiático. Además, se encontraron varios traslapes importantes con actividades de OceanLotus en Windows y MacOS dadas a conocer anteriormente. Por lo tanto, los investigadores de Kaspersky creen, con una confianza media, que la campaña PhantomLance se puede vincular a OceanLotus.

Kaspersky reportó todas las muestras descubiertas a los propietarios de tiendas de apps legítimas. Google Play ha confirmado que ha eliminado esas aplicaciones.

“Esta campaña es un excelente ejemplo de cómo los agentes de amenazas avanzadas se están moviendo en aguas más profundas y cada vez son más difíciles de encontrar. PhantomLance ha estado funcionando durante más de cinco años y los agentes de esa amenaza lograron evitar los filtros de las tiendas de aplicaciones varias veces, utilizando técnicas avanzadas para lograr sus objetivos. También podemos ver que el uso de plataformas móviles como punto de infección primario se está volviendo más popular, con más y más agentes avanzando en esta área. Estos acontecimientos subrayan la importancia de contar siempre con una mejor información de inteligencia de amenazas y servicios de asistencia para ayudar a rastrear los agentes de amenazas y encontrar traslapes entre varias campañas", comenta Alexey Firsh, investigador de seguridad en GReAT de Kaspersky.

**El informe completo sobre la campaña PhantomLance está disponible en Securelist**.

Para evitar ser víctima de ataques dirigidos contra organizaciones o personas, Kaspersky recomienda lo siguiente:
Consumidores:
- Utilizar una solución de seguridad fiable, como Kaspersky Security Cloud, la cual ofrece protección integral contra una amplia gama de amenazas. La solución incorpora Kaspersky Secure Connection, que impide a los agentes de amenazas rastreen la actividad del usuario en línea, oculta su dirección IP y ubicación, y transfiere sus datos a través de un túnel VPN seguro.
 
**Empresas**:
 
- Asegurar de que su solución de seguridad de endpoints cuente con protección para dispositivos móviles, como Kaspersky Security for Mobile. Esta protección debe permitir el control de las aplicaciones para garantizar que solo se puedan instalar aplicaciones legítimas en un dispositivo corporativo, así como protección contra el rooting (acceso a los permisos administrativos) que permita bloquear los dispositivos afectados por el rooting o eliminar datos corporativos almacenados en ellos.
- Proporcionar a su equipo del Centro de operaciones de seguridad (SOC, por sus siglas en inglés) acceso a la información más reciente sobre amenazas y mantenerlo actualizado con las herramientas, técnicas y tácticas nuevas y emergentes utilizadas por los agentes de amenazas y los ciberdelincuentes.
- Para la detección a nivel de endpoints, la investigación y la reparación oportuna de incidentes, implementar soluciones EDR, como Kaspersky Endpoint Detection and Response.
- Además de adoptar una protección esencial en los endpoints, implementar una solución de seguridad de nivel corporativo que detecte amenazas avanzadas a nivel de red en una etapa temprana, como Kaspersky Anti Targeted Attack Platform. 
 
<img src="https://tracker.metricool.com/c3po.jpg?hash=56f88a41e39ab42c063cc51676587a04"/>