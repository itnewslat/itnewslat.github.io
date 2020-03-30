---
layout: posts
color-schema: red-dark
date: '2020-03-30 08:10 -0400'
published: true
superNews: false
superArticle: false
year: '2020'
title: Hoy más que nunca los hospitales necesitan protegerse contra el virus digital
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Hospital-p.jpg
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/Hospital-g.jpg
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
week: '14'
---
**Por: Michal Salat, Director de inteligencia contra amenazas de Avast**

El viernes pasado, el Hospital Universitario de Brno en República Checa, que también es un centro de pruebas para el coronavirus, se enfrentó a un ataque de ransomware que paralizó las computadoras. El hospital siguió los procedimientos estándar y notificó a la Agencia Nacional de Seguridad Informática y Cibernética checa para ayudar con la investigación, y nuestro Laboratorio de Amenazas (IoT Threat Lab) ofreció ayuda, apoyando al hospital para el análisis del malware.

Los hospitales no necesariamente son susceptibles a ataques de ransomware, sin embargo, un ataque puede tener severas consecuencias perjudiciales como pérdidas de los registros de pacientes, y retrasos o cancelaciones de tratamientos. A medida que los hospitales realizan operaciones críticas y contienen información vital del paciente, también son más propensos como otras organizaciones a pagar un rescate, lo que los convierte en objetivos atractivos para los actores maliciosos.

Declaraciones de operadores de ransomware mencionan que no atacarán a los hospitales durante la pandemia, están poniendo absurdamente a los cibercriminales a la luz de ser filantrópicos, pero es probable que simplemente estén evitando el calor que los antivirus están dando a cualquiera que ataque servicios de emergencia.

**Cómo los hospitales pueden hacerse más resistentes a los ataques de ransomware**

Existen algunos pasos para que los hospitales pueden fortalecer sus defensas, proteger sus sistemas, datos de consumidores y operaciones. 

- **Mantener el software actualizado**

  En mayo de 2017, el ransomware WannaCry infectó a millones de computadores alrededor del mundo, infectando de manera exitosa dispositivos por medio del abuso de una vulnerabilidad en la cual Microsoft había emitido un parche durante dos meses antes del ataque masivo. Millones de personas y negocios no aplicaron la actualización, la cual pudo haberlos protegido ante la infección de WannaCry. Los hospitales también fueron infectados por este ransomware.
  
  Es crucial mantener todos los softwares y sistemas operativos actualizados al día, todo el tiempo. Microsoft emite continuamente parches de emergencia. Recientemente, Microsoft lanzó un parche de emergencia para una vulnerabilidad de Microsoft 10 llamada “Eternal Darkness”, una vulnerabilidad que afecta al protocolo SMB, que es usado para compartir archivos y es el mismo protocolo que se utilizó para difundir WannaCry hace tres años. Microsoft ha incitado a los usuarios que tomen medidas de inmediato para aplicar la actualización, y las instituciones de atención médica deben tomar a conciencia de esta acción.

- **Limitando accesos**

  También se aconseja que los hospitales intenten suspender todos los servicios disponibles directamente desde Internet. Los administradores de IT deben considerar una lista blanca estricta cuando se trata de archivos ejecutables, para que solo las aplicaciones conocidas y confiables puedan ejecutarse en las computadoras del hospital. 
  
- **Entrenamiento en higiene digital**

  Al igual que los hospitales capacitan a su personal en mejores prácticas de higiene, los empleados también deben recibir capacitación y orientación sobre higiene digital. El personal del hospital debe estar al tanto de las estados y tácticas actuales utilizadas por los cibercriminales, ya que el correo electrónico sigue siendo uno de los métodos de entrega de documentos más populares. Los empleados deben desconfiar de correos electrónicos de remitentes desconocidos, y especialmente deben evitar hacer clic en enlaces o descargar archivos adjuntos, a menos que estén 100% seguros de que son genuinos.

- **Copias de seguridad periódicas de datos importantes**

  Si los documentos tienen una copia de seguridad, el ransomware pierde gran parte de su potencia, ya que los sistemas se pueden restaurar y se pueden recuperar los datos. Los documentos importantes, incluidos los registros de pacientes, deben ser respaldados regularmente para garantizar que los hospitales siempre tengan una versión clara de sus archivos, en caso de que se cifren. Es mejor guardar datos tanto en la nube, como en almacenamiento físico, por si acaso. Además, tener una sola imagen con todas las configuraciones predeterminadas es útil cuando una PC necesita ser restaurada en buen estado.
  
**Pasos a seguir en caso de una infección de ransomware**

Desafortunadamente, las cosas pasan y es importante saber qué hacer si lo peor sucede. 

- **Primer paso**: Aislar los dispositivos infectados inmediatamente

  El primer paso es si una computadora con Windows es atacada por un ransomware, es ubicar y desconectar todas las computadoras con cable e inalámbricas infectadas y dispositivos en la red. Esto evitará que el ransomware se propague y tome como rehenes a más computadoras, tabletas y/o teléfonos inteligentes.

  Durante este procedimiento, se recomienda que las víctimas también desconecten todo lo conectado a los dispositivos en la red, incluido el almacenamiento externo.

  Para completar este paso, las víctimas deben de revisar si alguno de estos estaba conectado a la computadora infectada. En caso de ser así, los sistemas también deben ser verificados para mensajes de recuperación.

- **Segundo paso**: Recopilar registros y hacer una imagen forense

  Una vez que la computadora está aislada y no puede hacer más daño al entorno de red, se debe de hacer una imagen del sistema en vivo para el seguimiento del análisis. Esto congelará todos los registros y eventos, y mejorará en gran medida, la capacidad del equipo de respuesta para descubrir de donde vino el ataque y como se comportó. 

- **Tercer paso**: Identificar el tipo de ataque de ransomware

  A continuación, las víctimas deben averiguar qué cepa de ransomware se está tratando. Este conocimiento podría ayudar a encontrar una solución. Para ayudar a identificar el tipo de ransonmware en una máquina, recomendamos usar Crypto Sheriff de No More Ransom. Proporcionada por el Centro Europeo de Delitos Cibernéticos de Europol, esta herramienta comprueba los archivos que el atacante ha cifrado y la nota de rescate. Si Crypto Sheriff 
  reconoce el cifrado y tiene una solución, ofrece un enlace para descargar el programa de descifrado necesario.

  También se puede buscar en los foros de soporte técnico y solución de problemas para encontrar información sobre la variante de ransomware que debe eliminarse. Incluso si es nuevo, puede haber un hilo que ofrezca una solución, o un hilo donde los miembros del foro estén trabajando para encontrar una solución.

  Algunas infecciones de ransomware cambarán los nombres de los archivos y extensiones de archivos (por ejemplo: .exe, .docx, .dll) después de encriptarlos. Al visitar los foros de tecnología para ayuda, los usuarios podrán buscar los nombres y extensiones de los archivos encriptados. Cada uno puede ayudar a guiar las discusiones sobre la tensión del ransomware que debe eliminarse.

  Estos foros pueden ser útiles para información adicional:

  - Bleeping Computer Forums
  - Computer Hope Forum
  - Microsoft Community
  - Reddit (r/Ransomware)

- **Cuarto paso**: Removiendo el ransomware

Es importante deshacerse del malware subyacente que retiene a un PC como rehén. Hay opciones de eliminación para Windows 10, 8 y 7:

1. Revisar si el ransomware se ha eliminado (a menudo sucede)
1. Remover por medio de una solución antivirus, como Avast Antivirus
1. Remover los programas maliciosos manualmente
1. Re instalar el sistema por medio de imagen

Las personas afectadas y los administradores de sistemas podrán encontrar más detalles en nuestra guía detallada **[aquí](https://www.avast.com/c-how-to-remove-ransomware-pc)**.

Mientras estamos intentando protegernos nosotros del virus, es muy importante continuar protegiendo nuestros dispositivos de virus digitales. En Avast, estamos comprometidos a parar estas amenazas y seguir vigilando como la situación evoluciona. 

Manténganse seguros!

<img src="https://tracker.metricool.com/c3po.jpg?hash=56f88a41e39ab42c063cc51676587a04"/>
