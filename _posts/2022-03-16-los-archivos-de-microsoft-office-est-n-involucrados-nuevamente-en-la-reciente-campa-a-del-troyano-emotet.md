---
layout: posts
color-schema: red-dark
date: '2022-03-16 05:44 -0500'
published: true
superNews: false
superArticle: false
year: '2022'
title: >-
  Los archivos de Microsoft Office están involucrados nuevamente en la reciente
  campaña del troyano Emotet
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/troyano-word-g.jpg
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/troyano-word-p.jpg
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
week: '11'
---
Recientemente, FortiGuard Labs de Fortinet capturó más de 500 archivos de Microsoft Excel que participaron en una campaña para entregar un nuevo troyano Emotet en el dispositivo de la víctima. Emotet utiliza la ingeniería social, como el correo electrónico, para atraer a los destinatarios a abrir archivos de documentos adjuntos (incluidos Word, Excel, PDF, etc.) o hacer clic en enlaces dentro del contenido del correo electrónico que descargan la última variante de Emotet en el dispositivo de la víctima y luego ejecutarla.

Emotet, conocido como un troyano modular, se descubrió por primera vez a mediados de 2014. Desde entonces, se ha vuelto muy activo, actualizándose continuamente. Los informes de inteligencia de amenazas de FortiGuard Labs para América Latina y el Caribe muestran que Emotet ha estado activo en la región durante todo 2021 y continúa este año.

**Investigación en archivos de MS Excel**

Los analistas de FortiGuard Labs tomaron un archivo de MS Excel de las muestras capturadas y realizaron una investigación profunda de esta campaña. Esta imagen muestra el mensaje falso utilizado para atraer a una víctima para que haga clic en el botón "Habilitar contenido" (Enable Content) para ver el contenido protegido del archivo de Excel. Este archivo puede haber llegado a la víctima desde un usuario desconocido o como un archivo adjunto en un correo electrónico de phishing.
 

**¿Qué sucede al hacer clic en "Habilitar contenido"?**

- La macro maliciosa tiene una función llamada "Workbook_Open()" que se ejecuta automáticamente en segundo plano cuando se abre el archivo de Excel. Llama a otras funciones locales para escribir datos en dos archivos: "uidpjewl.bat" y "tjspowj.vbs" en la carpeta "C:\ProgramData\". Los datos escritos se leen desde varias celdas de este archivo de Excel. Al final, la macro ejecuta el archivo "tjspowj.vbs" con "wscript.exe". 
- Una vez que el archivo Emotet ("puihoud.dll") es cargado automáticamente por "rundll32.exe", su función de punto de entrada se llama por primera vez. 
- Una vez que Emotet termina de recopilar la información básica del dispositivo de la víctima, llama a la API BCryptEncrypt() para cifrar los datos e iniciar la comunicación con el servidor de Comando y Control (C2).
- Cuando Emotet recibe una respuesta válida del servidor C2, reubica el archivo dll de Emotet descargado de "C:\Windows\ProgramData\puihoud.dll" en la carpeta "%LocalAppData%".  
- Además, para permanecer en el dispositivo de la víctima, Emotet se hace persistente añadiendo el archivo reubicado en el grupo de ejecución automática en el registro del sistema. Así, Emotet es capaz de ejecutarse cuando se inicia el sistema.


El equipo de FortiGuard Labs de Fortinet ha monitoreado las campañas de troyanos de Emotet en el pasado y ha publicado numerosos blogs de análisis técnico. 

**¿Qué hacer para protegerse?**

La protección más efectiva es siempre la concienciación del usuario final. Hacer que todos los empleados sepan cómo identificar correos electrónicos y mensajes sospechosos, además de entender cómo funciona una campaña de phishing, es el primer paso que deben tomar las empresas. El curso gratuito de Fortinet NSE 1: NSE 1 – Conciencia de seguridad de la información incluye un módulo sobre amenazas de Internet diseñado para ayudar a los usuarios finales a aprender cómo identificar y protegerse contra los ataques de phishing.

Además, las soluciones de seguridad avanzadas ayudan a las organizaciones a mantenerse protegidas:

La macro maliciosa dentro de la muestra de Excel se puede desarmar mediante un servicio CDR (Content Disarm & Reconstruction), tecnología para eliminar código potencialmente malicioso de los archivos.
Un buen servicio de filtrado web que clasifique todas las URL relevantes como "sitios maliciosos";
Bloqueo de archivos de malware por un antivirus.
-Solución de detección y respuesta de endpoint (EDR) para detectar el archivo de Excel y el archivo dll de Emotet como maliciosos en función de su comportamiento.


![](https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/troyano-word-p.jpg)

<table style="height: 42px;" width="569">
<tbody>
<tr>
<td style="text-align: justify;"><sub><strong>Nuestras noticias también son publicadas a través de nuestra cuenta en Twitter <a href="https://twitter.com/itnewslat?lang=es">@ITNEWSLAT</a> y en la aplicación <a href="https://squidapp.co/en/">SQUID</a></strong></sub></td>
</tr>
</tbody>
</table>

<img src="https://tracker.metricool.com/c3po.jpg?hash=56f88a41e39ab42c063cc51676587a04"/>