---
layout: posts
color-schema: red-dark
date: '2019-08-07 08:00 -0400'
published: true
superNews: false
superArticle: false
year: '2019'
title: >-
  “Proyecto RAT”, una campaña de SPAM dirigida a entidades en Latinoamérica a
  través del servicio de correo electrónico YOPmail
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Troya-Horse-p.jpg
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/Troya-Horse-g.jpg
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
week: '32'
---
Trend Micro Incorporated (TYO: 4704; TSE: 4704) compañía líder en soluciones de ciberseguridad, anunció una campaña de SPAM la cual está dirigida principalmente a instituciones financieras y organizaciones gubernamentales en la región de América del Sur y particularmente en Colombia.  Los resultados de la investigación indican que la campaña parece ser el trabajo de un grupo involucrado en el compromiso de correo electrónico comercial (BEC) y poco probable que sea una amenaza persistente avanzada (APT).

El análisis arrojó que el grupo de atacantes utiliza YOPmail, un servicio de dirección de correo electrónico desechable para su servidor de comando y control (C&C). La carga útil, escrita en Visual Basic 6, es una versión personalizada de una herramienta de acceso remoto llamada "Proyecto RAT".

**Los correos electrónicos de entrega**

En diferentes instancias, la infección comienza con un correo electrónico enviado a un objetivo, los atacantes usan servidores de correo abiertos o comprometidos en Sudamérica para facilitar las campañas, así mismo, se conectan a los servidores comprometidos desde direcciones IP que estaban vinculadas con nombres de dominio dinámicos utilizados como C&C por las cargas útiles entregadas. El remitente del correo electrónico suele ser falso, y varios asuntos de los correos electrónicos incitaban al receptor a abrir el archivo adjunto RTF.  

El archivo RTF adjunto contiene una línea de texto y un link.  El texto se relaciona con el asunto del correo electrónico, por ejemplo "Puede ver la queja en su contra a continuación" o "Ver la queja en línea". El enlace al malware utiliza el acortador de URL cort.as, que pertenece al periódico El País. Al hacer clic en el enlace, se redirige a la víctima a un fichero dentro de un servicio de intercambio de archivos, en donde el archivo es un documento de entrega que contiene macros.

La mayoría de los documentos que se analizaron estaban en formato MHTML que contiene un código de macro, un descargador simple para la carga útil. Sin embargo, también se observaron archivos de Office en formato OLE. 

**Carga útil en la primera etapa: Herramienta de acceso remoto (RAT)**

La carga útil principal suele ser “Monitor InmineNte RAT”. Para junio de 2019 se notó que se estaba utilizando Warzone RAT que es la RAT más nueva de la lista y es compatible con las funciones de registro de teclas, navegador web y robo de contraseña de Outlook, además de las funciones estándar de RAT. 

**Carga útil en la segunda etapa: Proyecto RAT**

La carga útil en la segunda etapa está escrita en Visual Basic 6, la cual tiene una característica interesante y es que la dirección de URL de C&C obtenida del servicio de correo electrónico YOPmail se conecta a un buzón, lee el único mensaje de correo electrónico disponible, lo analiza y luego extrae el asunto del correo electrónico. 
La URL del servidor C&C está entre los caracteres ‘¡’ (signo de exclamación al revés), un carácter utilizado en el idioma español. 

**Buscando la familia de malware**

La comunicación entre el cliente y el servidor se realiza a través de un TCP (Protocolo de Control de Transmisión), la cual no está encriptada y utiliza los caracteres de canalización como "|" y "¡@ # @!". El usuario, que en su perfil ofrece un Prodigy Bot, un bot IRC escrito en VB6, tiene una pregunta relacionada con el código del proyecto de Leandro Ascierto llamado "Proyecto RAT".

Después de descargar y examinar el proyecto, se destacan nombres de clase familiares, delimitadores, cadenas y demás. Sobre la base de estos detalles, se deduce que es una versión personalizada de Proyecto RAT.

**Regiones afectadas y verticales**

Colombia es uno de los países más afectado al igual que otros países sudamericanos agregados a la lista. Esto es consistente con el hecho de que este actor utiliza el idioma español en todos los documentos de phishing que se analizaron. De acuerdo a los resultados, el atacante usó el acortador de URL bit.ly, lo que confirmó que Colombia es el objetivo principal. 

Las campañas recientes fueron dirigidas a diferentes industrias, entre las que están las entidades gubernamentales, las instituciones de salud y farmacéuticas, seguidas por las organizaciones financieras, bancarias, de seguros, y agroindustriales, de alimentos y empaque.

En particular, notamos que los Fondos de empleados en Colombia fueron atacados, y estas entidades apenas tienen acceso a información confidencial, pero es probable que posean una cantidad razonable de dinero.

En conclusión, la investigación muestra que esta campaña puede ofrecer un malware con múltiples capacidades que pueden afectar a diferentes organizaciones e industrias. También destaca la importancia de proteger las infraestructuras en línea, en particular las puertas de entrada del correo electrónico, para evitar campañas de spam dirigidas. Las organizaciones deben adoptar las mejores prácticas sobre amenazas relacionadas con la mensajería y actualizar periódicamente los sistemas para evitar que los atacantes aprovechen cualquier brecha de seguridad. El empleo de mecanismos de seguridad adicionales, como la habilitación de firewalls y sistemas de detección y prevención de intrusiones, ayudará a prevenir actividades sospechosas en la red que puedan conducir a la exfiltración de datos o la comunicación de C&C.