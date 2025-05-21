---
layout: posts
color-schema: red-dark
date: '2025-05-20 22:02 -0400'
published: true
superNews: false
superArticle: false
year: '2025'
title: Alerta de Ciberseguridad
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/refs/heads/master/img/540x320/Ataque-DDOS-p.jpg
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/refs/heads/master/img/1024x680/Ataque-DDOS-g.jpg
categories:
  - Mexico
tags:
  - Seguridad
week: '20'
---
**Ola de ciberataques de ransomware pone a prueba la seguridad corporativa: Ya van más de 70 empresas afectadas**

Sophos detectó una campaña activa de amenazas que está siendo utilizada por varios grupos de ransomware, entre ellos los operadores del malware conocido como 3AM. Esta operación combina email bombing (envío masivo de correos), vishing (llamadas fraudulentas) y herramientas legítimas como Microsoft Quick Assist para acceder a los sistemas de empresas y robar información confidencial antes de desplegar ransomware.

X-Ops reportó por primera vez esta campaña en enero, cuando ya había afectado a 15 empresas. Desde entonces, se han identificado más de 55 intentos adicionales de ataque, según datos de los servicios de respuesta a incidentes (IR) y monitoreo proactivo (MDR) de Sophos. Además, un grupo distinto ha adoptado una cadena de ataque similar con el uso del ransomware conocido como 3AM, lo que representa una amenaza creciente para empresas en todo el mundo, incluyendo México.

**¿Cómo operan los hackers?**

La investigación reveló que el ataque se ejecuta de manera escalonada, manteniéndose activo durante al menos nueve días antes de intentar cifrar los archivos:

- **Día 1 – Email bombing y acoso**: Los atacantes inician con un bombardeo de correos electrónicos automatizados a una cuenta corporativa. Esto busca provocar que el usuario contacte al área de soporte técnico para solucionar el problema.
- **Día 2 – Vishing (llamadas falsas)**: Los atacantes llaman directamente a la víctima, haciéndose pasar por el departamento de TI de la empresa. Durante la llamada, convencen al usuario de abrir la herramienta Quick Assist de Microsoft para otorgar acceso remoto al equipo.
- **Día 3 – Acceso inicial y manipulación del sistema**: Una vez dentro, los atacantes descargan herramientas como Process Hacker para deshabilitar defensas de seguridad y observan los procesos internos de la máquina.
- **Días 4-7 – Persistencia y despliegue de VM**: El grupo descarga una máquina virtual de Windows (VirtualBox) en el dispositivo comprometido. Desde ahí, comienzan a moverse lateralmente en la red, sin que las herramientas de seguridad tradicionales detecten actividad sospechosa, ya que la actividad maliciosa ocurre dentro de la VM.
- **Día 8 – Exploración y recolección de datos**: Realizan mapeo de la red, identificación de sistemas vulnerables y extracción de datos confidenciales.
- **Día 9 – Intento de cifrado**: Se lanza el ransomware 3AM para cifrar los sistemas y exigir un rescate. 

**Ataques personalizados y mayor sofisticación**

Lo que distingue esta campaña es su nivel de personalización: los atacantes realizan un reconocimiento previo para identificar nombres, direcciones de correo electrónico y números de teléfono específicos dentro de las organizaciones objetivo. En algunos casos, incluso han suplantado números reales del soporte técnico interno de las empresas atacadas. 

Según Sophos, un grupo vinculado al ransomware 3AM ha refinado esta estrategia, utilizando una combinación de ingeniería social avanzada, técnicas de evasión y herramientas legítimas para operar de forma encubierta por días antes de desplegar el ataque final.

“La combinación de vishing y email bombing continúa siendo una estrategia efectiva para los grupos de ransomware. El grupo detrás de 3AM ha encontrado una forma de aprovechar la encriptación remota para evadir el software de seguridad tradicional. Debido a la eficacia de estas técnicas de ingeniería social, esperamos que estas campañas continúen activas.”, advierte Sean Gallagher, investigador principal de amenazas en Sophos
“Para mantenerse protegidas, las empresas deben priorizar la concientización del personal y restringir estrictamente el acceso remoto. Esto incluye políticas que bloqueen la ejecución de máquinas virtuales y software de acceso remoto en equipos no autorizados, así como el bloqueo del tráfico de red entrante y saliente relacionado con control remoto, salvo en sistemas designados específicamente para ello.”, recomienda Gallagher.

Recomendaciones de Sophos para empresas en México:

- Capacitar al personal para identificar fraudes por voz o email.
- Bloquear Quick Assist y herramientas similares, salvo en dispositivos designados.
- Aplicar políticas de restricción para el uso de máquinas virtuales.
- Establecer monitoreo continuo del tráfico de red y actividad remota.
- Activar MFA (autenticación multifactor) en todos los accesos remotos.

Para conocer todos los detalles técnicos y tácticos, consulta el blog completo de Sophos X-Ops publicado hoy:  https://news.sophos.com/en-us/2025/05/20/a-familiar-playbook-with-a-twist-3am-ransomware-actors-dropped-virtual-machine-with-vishing-and-quick-assist

![](https://raw.githubusercontent.com/itnewslat/assets/refs/heads/master/img/540x320/Ataque-DDOS-p.jpg)

<table style="height: 42px;" width="569">
<tbody>
<tr>
<td style="text-align: justify;"><sub><strong>Nuestras noticias también son publicadas a través de nuestra cuenta en Twitter <a href="https://twitter.com/itnewslat?lang=es">@ITNEWSLAT</a> y en la aplicación <a href="https://squidapp.co/en/">SQUID</a></strong></sub></td>
</tr>
</tbody>
</table>

<img src="https://tracker.metricool.com/c3po.jpg?hash=56f88a41e39ab42c063cc51676587a04"/>