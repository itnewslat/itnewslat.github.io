---
layout: posts
color-schema: red-dark
date: '2025-07-22 10:55 -0400'
published: true
superNews: false
superArticle: false
year: '2025'
title: Kaspersky revela cómo opera FunkSec
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/refs/heads/master/img/540x320/Grupo-Hackers-p.jpg
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/refs/heads/master/img/1024x680/Grupo-Hackers-g.jpg
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
week: '31'
---
**El grupo de ransomware que utiliza IA y exige rescates low cost**

- Este actor ha superado rápidamente a muchos agentes de amenazas establecidos y tiene como víctimas a los sectores gubernamental, tecnológico, financiero y educativo.

Expertos de Kaspersky revelaron el funcionamiento interno de FunkSec, un grupo de ransomware que ilustra el futuro del cibercrimen masivo: es impulsado por Inteligencia Artificial (IA) y multifuncional, sumamente flexible y actúa en volumen, con rescates tan bajos como 10,000 dólares, para obtener ganancias máximas. El enfoque usado por este grupo refleja el panorama cambiante de la ciberdelincuencia masiva, que combina herramientas y tácticas avanzadas.

FunkSec, que lleva menos de un año activo desde su aparición a finales de 2024, ha superado rápidamente a muchos agentes de amenazas establecidos al escoger como objetivos los sectores gubernamental, tecnológico, financiero y educativo principalmente en países de Europa y Asia.

Según el informe de Kaspersky El Estado del Ransomware, la proporción de usuarios afectados por ataques de ransomware a nivel mundial aumentó al 0.44% entre 2023 y 2024, un incremento de 0.02 puntos porcentuales. Si bien este porcentaje puede parecer modesto en comparación con otras ciberamenazas, refleja que los atacantes suelen priorizar objetivos de alto valor en vez de la distribución masiva, lo que hace que cada incidente sea potencialmente devastador. En este panorama en constante evolución, FunkSec se ha convertido en una amenaza particularmente preocupante.

Lo que distingue a FunkSec es su compleja arquitectura técnica y su desarrollo asistido por IA. El grupo integra cifrado a gran escala y exfiltración agresiva de datos en un único ejecutable basado en Rust, capaz de desactivar más de 50 procesos en los equipos de las víctimas y equipado con funciones de autolimpieza para evadir las defensas. Además de su funcionalidad principal contra el ransomware, FunkSec ha ampliado su conjunto de herramientas para incluir un generador de contraseñas y una herramienta básica contra DDoS; ambos muestran claros indicios de síntesis de código mediante modelos de lenguaje grandes (LLMs).

El enfoque de FunkSec refleja el panorama cambiante de la ciberdelincuencia masiva, que combina herramientas y tácticas avanzadas. 

Los expertos de Kaspersky destacan las cinco características clave que definen las operaciones de este grupo y que ejemplifican el dinámico panorama actual de los ciberdelincuentes que hoy, combinan herramientas y técnicas avanzadas en su beneficio:

1.	**Funcionalidad controlada por contraseña**
El ransomware FunkSec cuenta con un mecanismo singular basado en contraseñas que controla sus modos de operación. Sin contraseña, el malware realiza un cifrado básico de archivos, mientras que al proporcionarle una contraseña se activa un proceso más agresivo de exfiltración de datos, además del cifrado, para robar datos confidenciales.
FunkSec integra cifrado a gran escala, exfiltración local y autolimpieza en un único Rust binario, sin necesidad de carga lateral ni script complementario. Este nivel de consolidación es poco común y ofrece a los afiliados una herramienta lista para usar que pueden implementar prácticamente en cualquier lugar.
2.	**Uso de IA en el desarrollo**
El análisis de código muestra que FunkSec utiliza activamente Inteligencia Artificial generativa para crear sus herramientas. Muchas partes del código parecen generarse automáticamente en lugar de escribirse manualmente. Señales de esto son los comentarios genéricos de marcadores de posición (por ejemplo, “marcador de posición para la comprobación real”) e inconsistencias técnicas, como órdenes para diferentes sistemas operativos que no se alinean correctamente. Además, la presencia de funciones declaradas, pero no usadas (como los módulos incluidos inicialmente, pero nunca utilizados) refleja cómo los grandes modelos de lenguaje combinan múltiples fragmentos de código sin eliminar elementos redundantes.
3.	**Estrategia de gran volumen y pagos de rescate low cost**
FunkSec exige pagos de rescate inusualmente bajos, a veces de tan sólo 10,000 dólares, y lo combina con la venta a terceros de datos robados a precios reducidos. Esta estrategia parece diseñada para permitir un gran volumen de ataques, lo que ayuda al grupo a consolidar rápidamente su reputación en el mundo clandestino del cibercrimen. A diferencia de los grupos tradicionales de ransomware que buscan rescates millonarios, FunkSec emplea un modelo de alta frecuencia y bajo costo, lo que confirma el uso de la IA para optimizar y escalar sus operaciones.
4.	**Se expande más allá del ransomware**
FunkSec ha ampliado sus capacidades más allá del binario de ransomware. El sitio de sus filtraciones oscuras (DLS) alberga herramientas adicionales (como un generador de contraseñas basado en Python que ha sido diseñado para soportar ataques de fuerza bruta y de rociado de contraseñas), así como una herramienta DDoS básica.
5.	**Evasión avanzada**
FunkSec emplea técnicas avanzadas de evasión para evitar la detección y dificultar el análisis forense. El ransomware es capaz de detener más de 50 procesos y servicios para garantizar el cifrado completo de los archivos objetivo. Además, incluye un mecanismo de respaldo para ejecutar ciertas órdenes incluso si el usuario que inicia FunkSec no tiene los privilegios suficientes.

“Vemos cada vez con más frecuencia que los ciberdelincuentes utilizan la IA para desarrollar herramientas maliciosas. La IA generativa reduce las barreras y acelera la creación de malware, lo que permite a los ciberdelincuentes adaptar sus tácticas con mayor rapidez. Al reducir el umbral de entrada, la IA permite que incluso los atacantes menos experimentados desarrollen rápidamente malware complejo a gran escala”, comenta Marc Rivero, investigador principal de seguridad de GReAT de Kaspersky.

Para mantenerse protegidos de los ataques de ransomware, los expertos de Kaspersky recomiendan que las organizaciones sigan estas prácticas para protegerse contra el ransomware:

- Concentra tu estrategia de defensa en detectar movimientos laterales y la exfiltración de datos a internet. Presta especial atención al tráfico saliente para detectar así las conexiones de los ciberdelincuentes a tu red. Implementa copias de seguridad fuera de línea que los intrusos no puedan manipular. Asegúrate de que puedes acceder a ellas rápidamente cuando sea necesario o en caso de emergencia.
- Mantén siempre el software actualizado en todos los dispositivos para evitar que los atacantes exploten vulnerabilidades e infiltren tu red.
- Activa la protección contra ransomware en todas las terminales. Existen en el mercado herramientas como Kaspersky Anti-Ransomware Tool for Business que protege computadoras y servidores contra ransomware y otros tipos de malware, previene exploits y es compatible con las soluciones de seguridad ya instaladas.
- Instala soluciones anti-APT y EDR que permiten la detección y el descubrimiento avanzados de amenazas, la investigación y el remedio oportuno de incidentes. Proporciona a tu equipo de SOC acceso a la información más reciente sobre amenazas y actualízalo periódicamente con formación profesional. Todo lo anterior está disponible en el portafolio Kaspersky Industrial Cybersecurity.
- Utilice la información de Inteligencia de Amenazas más reciente para mantenerse al tanto de las tácticas, técnicas y procedimientos (TTP) reales que utilizan los agentes de amenazas.
- Para proteger a su empresa contra una amplia gama de amenazas, utilice las soluciones de la línea de productos Kaspersky Next, que ofrecen protección en tiempo real, visibilidad de amenazas, investigación y capacidad de respuesta de EDR y XDR para organizaciones de cualquier tamaño e industria. Según sus necesidades actuales y los recursos disponibles, puede elegir el nivel más adecuado del producto y migrar fácilmente a otro si sus requisitos de ciberseguridad cambian.

Los productos de Kaspersky detectan esta amenaza como HEUR:Trojan-Ransom.Win64.Generic.

![](https://raw.githubusercontent.com/itnewslat/assets/refs/heads/master/img/540x320/Grupo-Hackers-p.jpg)

<table style="height: 42px;" width="569">
<tbody>
<tr>
<td style="text-align: justify;"><sub><strong>Nuestras noticias también son publicadas a través de nuestra cuenta en Twitter <a href="https://twitter.com/itnewslat?lang=es">@ITNEWSLAT</a> y en la aplicación <a href="https://squidapp.co/en/">SQUID</a></strong></sub></td>
</tr>
</tbody>
</table>

<img src="https://tracker.metricool.com/c3po.jpg?hash=56f88a41e39ab42c063cc51676587a04"/>