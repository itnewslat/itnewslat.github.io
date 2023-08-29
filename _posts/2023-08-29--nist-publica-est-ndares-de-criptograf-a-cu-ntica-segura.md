---
layout: posts
color-schema: red-dark
date: '2023-08-29 11:44 -0400'
published: true
superNews: false
superArticle: false
year: '2023'
title: ' NIST publica estándares de criptografía cuántica segura'
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/criptografia-p.jpg
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/criptografia-g.jpg
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
  - Economía Digital
week: '35'
---
**Marcando un proceso de casi siete años y los pasos finales hacia los primeros estándares de criptografía poscuántica del mundo , el Instituto Nacional de Estándares y Tecnología (NIST) de Estados Unidos, ha publicado proyectos de estándares para CRYSTALS-KYBER, CRYSTALS-DILITHIUM y SPHINCS+ para un 90 Período de comentarios de dos días a partir del 24 de agosto de 2023.**

DigiCert ha estado trabajando con NIST y el Grupo de Trabajo de Ingeniería de Internet (IETF) en estándares de criptografía poscuántica (PQC) y probará y revisará activamente los borradores de estándares durante el período de comentarios e incorporará estos nuevos algoritmos en protocolos importantes como TLS/SSL. , S/MIME, SSH, etc.

Este comunicado señala a las empresas de todo el mundo la necesidad de tomar medidas inmediatas para actualizar sus sistemas y software criptográficos a estos algoritmos cuánticos seguros, una vez finalizados, mucho antes de la llegada de las computadoras cuánticas. Las empresas que se retrasen en la implementación de estas actualizaciones pueden correr el riesgo de sufrir un aumento previsto en las estrategias de “cosechar ahora, descifrar después” emprendidas por delincuentes que comprometen los sistemas hoy para recopilar datos cifrados, con la intención de descifrarlos más tarde con computadoras cuánticas.

“La matemática detrás de los algoritmos se conoce desde hace algún tiempo, pero estos nuevos borradores de estándares contienen información detallada sobre exactamente cómo se deben usar estos algoritmos en la práctica. Las empresas que inviertan ahora en criptoagilidad, descubrimiento y automatización estarán bien preparadas para implementar rápidamente estos cambios tan pronto como estén disponibles. Esto les permitirá empezar a trabajar cuando lleguen los estándares finales a principios del próximo año”. -Tim Hollebeek, estratega técnico de estándares e industria en DigiCert

**Las infraestructuras de clave pública deben cambiar**

Las infraestructuras de clave pública son cruciales para la confianza digital, ya que protegen todo, desde las conexiones web y el correo electrónico hasta los documentos y códigos firmados digitalmente . Para ello, se basan en la criptografía asimétrica. Los algoritmos existentes hoy en día (RSA, ECC) se basan en problemas matemáticos desafiantes, como la factorización de números muy grandes, que son computacionalmente difíciles para las computadoras actuales. Sin embargo, si bien a una computadora tradicional le tomaría años descifrar estos algoritmos, una computadora cuántica podría resolver estos difíciles problemas matemáticos en minutos, ya que las computadoras cuánticas poseen propiedades no intuitivas como la superposición y el entrelazamiento, lo que les permite procesar múltiples estados simultáneos.

“Los expertos de la industria, incluidos los de DigiCert, han estado colaborando en el NIST y el IETF para descubrir cómo actualizar los protocolos de Internet con estos nuevos algoritmos cuánticos seguros. La publicación del borrador de estándares proporciona una gran cantidad de información que ayudará a todos a finalizar sus estándares e implementaciones de protocolos”. Agregó Tim Hollebeek.

El esfuerzo del NIST para seleccionar, evaluar y estandarizar los algoritmos PQC se basa en problemas matemáticos aún más difíciles (por ejemplo, criptografía reticular) que son difíciles tanto para las computadoras tradicionales como para las computadoras cuánticas. Estos algoritmos no requieren una computadora cuántica; protegen contra ellos y serán fundamentales para mantener la confianza una vez que la computación cuántica se convierta en realidad.

**¿Qué están haciendo ahora las empresas de ciberseguridad?**

En paralelo, en el IETF - Grupo de Trabajo de Ingeniería de Internet (por sus siglas en inglés) se está trabajando para incorporar estos nuevos algoritmos en los protocolos. En el IETF, el grupo de trabajo Post-quantum in Protocols (PQUIP), que DigiCert copreside, está coordinando esfuerzos para incorporar estos nuevos algoritmos en protocolos importantes como TLS/SSL, S/MIME, SSH y otros, como se mencionó anteriormente. También hay un borrador de PQC para ingenieros que explica los detalles técnicos de estos algoritmos y cómo se pueden incorporar a los protocolos. Una vez finalizados, las empresas de ciberseguridad pueden comenzar a incorporar estos algoritmos en sus aplicaciones, códigos, productos, servicios, plataformas y ecosistemas.

**¿Qué deberían hacer las empresas ahora?**

Para facilitar la transición masiva a los nuevos algoritmos, las empresas deberían tomar estos dos pasos en los próximos 90 días para estar preparadas para actualizar sus sistemas y software criptográficos: primero, inventariar todos los activos criptográficos y segundo, lograr criptoagilidad centralizando la gestión de PKI . y automatización.

1. **Hacer un inventario de todos los activos criptográficos de la organización y priorízarlos**

Los equipos de ciberseguridad pueden comenzar por crear una vista centralizada del inventario de certificados digitales y criptográficos, priorizar los sistemas y datos críticos e implementar herramientas de automatización que hagan que la tarea de actualizar los certificados digitales libre de errores humanos. Al inventariar las criptomonedas en la organización, los equipos deben priorizar los activos en función de la importancia, la sensibilidad y la vida útil esperada de los datos que buscan salvaguardar. Por ejemplo, una cadena de hospitales responsable de gestionar el historial de un paciente requiere un alto nivel general de seguridad. Además, los registros médicos podrían abarcar décadas en el futuro, mucho más allá de la llegada esperada de la computación cuántica convencional.

El momento de actualizar los algoritmos también depende del caso de uso. La autenticación TLS/SSL no se ve amenazada hasta que las computadoras cuánticas estén disponibles. Sin embargo, las firmas digitales  que se aplican hoy y los datos protegidos con claves intercambiadas hoy pueden ser  vulnerables   a ataques informáticos en el futuro. Además, los dispositivos de IoT pueden vivir en el campo durante décadas y deben protegerse con algoritmos PQC mucho antes que otras formas de criptografía. La actualización de los algoritmos de seguridad cuántica debe completarse con mucha antelación para proteger los datos críticos involucrados en esos casos de uso.

2. **Lograr criptoagilidad centralizando la gestión y automatización de PKI**

La criptoagilidad es la capacidad de las organizaciones para corregir y actualizar los activos criptográficos rápidamente. Lograr la criptoagilidad ofrece importantes beneficios de seguridad y productividad; La próxima necesidad de hacer la transición a una postura de seguridad cuántica hace que sea aún más importante que las organizaciones inviertan en la gestión centralizada y la automatización de su infraestructura de clave pública. 

![](https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/criptografia-p.jpg)

<table style="height: 42px;" width="569">
<tbody>
<tr>
<td style="text-align: justify;"><sub><strong>Nuestras noticias también son publicadas a través de nuestra cuenta en Twitter <a href="https://twitter.com/itnewslat?lang=es">@ITNEWSLAT</a> y en la aplicación <a href="https://squidapp.co/en/">SQUID</a></strong></sub></td>
</tr>
</tbody>
</table>

<img src="https://tracker.metricool.com/c3po.jpg?hash=56f88a41e39ab42c063cc51676587a04"/>