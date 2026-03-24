---
layout: posts
color-schema: red-dark
date: '2026-03-16 14:13 -0400'
published: true
superNews: false
superArticle: false
year: '2026'
title: 'Rollback: cuando una actualización abre la puerta que ya habíamos cerrado'
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/refs/heads/master/img/540x320/Rollback-p.jpg
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/refs/heads/master/img/1024x680/Rollback-g.jpg
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
week: '12'
---
**Por: Rafael Núñez Aponte, CEO @MasQueSeguridad**

En tecnología solemos celebrar los parches y las actualizaciones. Sobre todo porque vivimos bajo la amenaza permanente de los exploits, esa ciberartillería silenciosa que aprovecha vulnerabilidades antes de que puedan ser corregidas. Entre ellas destacan los temidos ataques de día cero, fallas desconocidas incluso para los propios fabricantes, donde aún no existe remedio ni parche disponible.

Por eso, cada actualización suele percibirse como una victoria defensiva. Sin embargo, en medio de ese proceso existe un fenómeno poco comentado fuera del mundo técnico que, cuando se gestiona mal, puede convertirse en una vulnerabilidad crítica: el rollback.

Un rollback ocurre cuando, tras una actualización o la instalación de un nuevo sistema en producción, algo falla y el entorno debe regresar a una versión anterior para restablecer la operación. En teoría es una práctica necesaria dentro de cualquier estrategia de continuidad. El problema no es el rollback en sí, sino lo que puede dejar atrás.

En muchos entornos empresariales, cuando un sistema retrocede de versión también puede regresar a configuraciones predeterminadas que ya no cumplen los estándares actuales de seguridad. Controles que estaban activos, como autenticación multifactorial, políticas de contraseñas robustas o restricciones de acceso, pueden desaparecer momentáneamente.

El resultado puede ser tan absurdo como peligroso: accesos administrativos con usuarios “admin”, contraseñas simples o credenciales basadas en datos personales como cédula de identidad o fecha de nacimiento. Y sí, estos escenarios no son teóricos. Han ocurrido en sistemas reales, incluso en accesos sensibles como VPN corporativas o cortafuegos.

En términos simples, es como si en una casa moderna con alarmas, cámaras y cerraduras inteligentes, después de una reparación alguien dejara la puerta principal abierta porque era la configuración de fábrica.

El problema suele nacer en la transición entre desarrollo, pruebas y producción. Si los equipos no validan correctamente las configuraciones tras un rollback, el sistema puede quedar operando con parámetros heredados de etapas tempranas del proyecto.

¿Cómo se previene esto? Aplicando control automatizado de configuraciones, registro y versionado de políticas de seguridad, validaciones automáticas en cada despliegue y monitoreo continuo de cambios críticos. En otras palabras, asegurando que cuando el sistema retroceda, las defensas no retrocedan con él.

Porque en ciberseguridad muchas brechas no aparecen cuando el sistema avanza.

Aparecen cuando retrocede y olvida volver a cerrar la puerta.

![](https://raw.githubusercontent.com/itnewslat/assets/refs/heads/master/img/540x320/Rollback-p.jpg)

<table style="height: 42px;" width="569">
<tbody>
<tr>
<td style="text-align: justify;"><sub><strong>Nuestras noticias también son publicadas a través de nuestra cuenta en Twitter <a href="https://twitter.com/itnewslat?lang=es">@ITNEWSLAT</a> y en la aplicación <a href="https://squidapp.co/en/">SQUID</a></strong></sub></td>
</tr>
</tbody>
</table>

<img src="https://tracker.metricool.com/c3po.jpg?hash=56f88a41e39ab42c063cc51676587a04"/>
