---
layout: posts
color-schema: red-dark
date: '2022-04-21 10:12 -0400'
published: true
superNews: false
superArticle: false
year: '2022'
title: ESET descubre vulnerabilidades de alto impacto en UEFI de laptops Lenovo
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Lenovo-HQ-p.jpg
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/Lenovo-HQ-g.jpg
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
week: '16'
---
**El equipo de investigación de ESET, compañía de seguridad informática, descubre múltiples vulnerabilidades en varios modelos de laptops Lenovo que permiten a un atacante con privilegios de administrador exponer al usuario a malware a nivel de firmware.**
 
El equipo de investigación de ESET, compañía líder en detección proactiva de amenazas, descubrió y analizó tres vulnerabilidades que afectan distintos modelos de computadoras portátiles de Lenovo. La lista de dispositivos afectados abarca a más de cien modelos de computadoras diferentes con millones de usuarios en todo el mundo.

Las dos primeras vulnerabilidades detectadas -CVE-2021-3971, CVE-2021-3972- afectan a drivers de firmware para UEFI que fueron pensados originalmente para usarse solo durante el proceso de fabricación de las computadoras portátiles de Lenovo. Desafortunadamente, también se incluyeron por error en la producción de imágenes ISO para BIOS sin haberse desactivado correctamente.

Según explican de ESET, un atacante puede activar estos drivers de firmware afectados para deshabilitar directamente las protecciones en la memoria flash SPI o la función Secure Boot de UEFI (arranque seguro de UEFI) desde un proceso a nivel de usuario con privilegios durante el tiempo de ejecución del sistema operativo. Esto significa que la explotación de estas vulnerabilidades permitiría a los atacantes desplegar y ejecutar con éxito en los dispositivos afectados implantes en flash SPI o ESP, como ocurrió con LoJax o con ESPecter, otros hallazgos de ESET de malware para UEFI.

“Las amenazas dirigidas a UEFI pueden ser extremadamente sigilosas y peligrosas. Se ejecutan temprano en el proceso de arranque, antes de transferir el control al sistema operativo, lo que significa que son capaces de eludir varias medidas de seguridad y formas de mitigación más altas que son las que podrían evitar que se ejecuten sus payloads.”, comenta Martin Smolár, Analista de Malware de ESET.

Desde ESET indican que el descubrimiento de estas vulnerabilidades se dió inicialmente considerando los drivers de firmware afectados por la vulnerabilidad CVE 2021-3971. Estos drivers llamaron la atención del equipo de investigación por sus nombres: SecureBackDoory SecureBackDoorPeim. Después de un análisis inicial, desde ESET identificaron otros drivers de Lenovo que presentaban algunas características similares a los drivers SecureBackDoor*: ChgBootDxeHook y ChgBootSmm. Resultó que permitía deshabilitar el UEFI Secure Boot (CVE-2021-3972). Además, mientras desarrollaban la investigación, el equipo descubrió una tercera vulnerabilidad: un fallo de corrupción de memoria SMM dentro de la función handler SW SMI (CVE-2021-3970). Esta vulnerabilidad permite la lectura/escritura arbitraria desde/hacia SMRAM, lo que puede conducir a la ejecución de código malicioso con privilegios de SMM y, potencialmente, al despliegue de un implante flash SPI.

El 11 de octubre de 2021 desde ESET informaron a Lenovo acerca de todas las vulnerabilidades descubiertas. En total, la lista de dispositivos afectados comprende a más de cien modelos de computadoras diferentes con millones de usuarios en todo el mundo, desde modelos asequibles como Ideapad-3 hasta modelos más avanzados como Legion 5 Pro-16ACH6H o Yoga Slim 9-14ITL05. La lista completa de modelos afectados con soporte activo fue publicada en el comunicado de Lenovo.

Además de los modelos detallados en el comunicado, varios otros dispositivos que informaron desde ESET a Lenovo también se vieron afectados, pero no serán parcheados debido a que no recibirán más soporte -proceso conocido como End Of Development Support o EODS, por sus siglas en inglés. Esto incluye dispositivos en los que ESET detectó las vulnerabilidades reportadas por primera vez: Ideapad 330-15IGM e Ideapad 110-15IGR. La lista de los dispositivos que llegaron al final del ciclo de soporte y que fueron identificadas por la compañía de seguridad informática está disponible en el repositorio de divulgación de vulnerabilidades de ESET. Además, se realizó un completo análisis técnico de las vulnerabilidades descubiertas por ESET en equipos Lenovo y su alcance.

“Nuestro descubrimiento, sumado al hallazgo de otras amenazas para UEFI en los últimos años (LoJax, MosaicRegressor, MoonBounce, ESPecter, FinSpy) demuestra que, en algunos casos, el despliegue de amenazas para UEFI puede no ser tan difícil como se esperaba, y la mayor cantidad de amenazas para UEFI descubiertas en los últimos años sugiere que los adversarios son conscientes de este. Aunque las vulnerabilidades no son la única opción que tienen los atacantes para desactivar o eludir las mitigaciones de seguridad del firmware, existen muchas vulnerabilidades de este tipo. Asimismo, debido a la gran cantidad de implementaciones de firmware diferentes y su complejidad, es probable que muchas más estén esperando a ser descubiertas.”, agrega Smolár de ESET.

Desde ESET recomiendan a los propietarios de computadoras portátiles Lenovo que revisen la lista de dispositivos afectados y actualicen su firmware, idealmente siguiendo las instrucciones del fabricante.
Para conocer más sobre seguridad informática ingrese al portal de [noticias de ESET](https://www.welivesecurity.com/la-es/2022/04/19/descubren-vulnerabilidades-severas-uefi-laptops-lenovo/): 
 
Por otro lado, ESET invita a conocer Conexión Segura, su podcast para saber qué está ocurriendo en el mundo de la seguridad informática. [Para escucharlo](https://open.spotify.com/show/0Q32tisjNy7eCYwUNHphcw)

![](https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Lenovo-HQ-p.jpg)

<table style="height: 42px;" width="569">
<tbody>
<tr>
<td style="text-align: justify;"><sub><strong>Nuestras noticias también son publicadas a través de nuestra cuenta en Twitter <a href="https://twitter.com/itnewslat?lang=es">@ITNEWSLAT</a> y en la aplicación <a href="https://squidapp.co/en/">SQUID</a></strong></sub></td>
</tr>
</tbody>
</table>

<img src="https://tracker.metricool.com/c3po.jpg?hash=56f88a41e39ab42c063cc51676587a04"/>