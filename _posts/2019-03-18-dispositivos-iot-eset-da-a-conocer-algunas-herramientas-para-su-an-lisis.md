---
layout: posts
color-schema: red-dark
date: '2019-03-18 12:24 -0400'
published: true
superNews: false
superArticle: false
year: '2019'
title: 'Dispositivos IoT: ESET da a conocer algunas herramientas para su análisis'
image: 'https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/iotp.jpg'
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/iotg.jpg
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
week: '12'
---
**La compañía, líder en detección proactiva de amenazas, continúa su investigación sobre los dispositivos IoT e informa sobre las herramientas más comunes y utilizadas para analizarlos.** 

 dispositivos inteligentes, a diferencia de tecnologías previas, presentan una amplia complejidad debido a la variedad de dispositivos y software existentes en el mercado. En este sentido, ESET ha dado a conocer las herramientas más usadas para el análisis del “Internet de las Cosas”. 

Estos dispositivos inteligentes son cada vez más comunes y ya no es extraño encontrar enchufes o luces que se controlan desde el celular, asistentes de voz o incluso los “wearable” como son los smartwatches o anteojos. Las opciones varían y se siguen sumando a la extensa lista de dispositivos IoT que interactúan con un teléfono móvil o una red hogareña por lo que son susceptibles de vulnerabilidades si no están bien configurados. 
 
El Laboratorio de ESET Latinoamérica seleccionó tres herramientas que son muy útiles al momento de interceptar las comunicaciones de los dispositivos con el objetivo de analizar el tráfico, pero también de poder inyectar paquetes manipulados. 

**Ubertooth**

Una gran cantidad de dispositivos inteligentes utilizan Bluetooth para comunicarse con equipos cercanos, como teléfonos móviles o controles remotos. En este sentido, poder interceptar y analizar este tráfico puede ser de gran utilidad para encontrar fallas de seguridad o para realizar ataques de MiTM y lograr enviar mensajes o comandos remotos al equipo.

El proyecto Ubertooth tiene todo lo necesario para experimentar y analizar la tecnología Bluetooth, ya que permite capturar e inyectar tráfico tanto BLE (Bluetooth Low Energy) como las conexiones clásicas de Bluetooth (Basic Rate).
Una vez instalado el software y conectada la antena, se podrá descargar y utilizar las diferentes herramientas que se incluyen en el repositorio para facilitar el análisis de los datos interceptados. Incluso, es posible analizar los paquetes capturados utilizando Wireshark, el cual ya incluye desde su versión 1.12 el plugin para el tráfico BLE.
El análisis del tráfico Bluetooth no es sencillo y requiere entender muy bien el protocolo, por lo que el proyecto cuenta también con una Wiki y un foro donde se encuentra toda la documentación no solo del dispositivo sino también del funcionamiento del protocolo Bluetooth. 

**Attify Badge**

Es una pequeña placa electrónica que permite interactuar con varios protocolos y puertos de comunicación muy utilizados en dispositivos inteligentes y permite tener acceso al hardware del dispositivo que se quiere analizar. Si se ve desde el análisis se concluye que poder conectarse directamente al hardware del equipo permite interceptar el tráfico de las comunicaciones a más bajo nivel, analizarlo o incluso modificarlo e inyectar comandos.

Cecilia Pastorino, especialista de seguridad informática de ESET, confirma que ”los ataques a través de JTAG y UART son los más efectivos para dispositivos IoT”, y agrega “JTAG (Joint Test Action Group) es una interfaz electrónica de cuatro o cinco pines utilizada para probar los módulos de circuitos integrados, y es muy útil también como mecanismo para depuración de aplicaciones embebidas, ya que provee una puerta trasera para acceder al sistema, por su parte UART (Universal Asynchronous Receiver-Transmitter), es el chip que controla los puertos y dispositivos serie, tomando bytes de datos y transmitiendo los bits individuales de forma secuencial. Entre otras funciones, maneja las interrupciones de los dispositivos conectados al puerto serie y convierte los datos en formato paralelo, transmitidos al bus de sistema, a datos en formato serie, para que puedan ser transmitidos a través de los puertos y viceversa”.

**Killerbee**

La aparición de dispositivos pequeños, con recursos limitados, ha hecho que nuevos protocolos se vuelvan cada vez más populares tal es el caso de ZigBee, un protocolo de comunicación inalámbrico muy utilizado en domótica por su bajo consumo eléctrico. Es muy común encontrarlo en luces inteligentes, sensores de temperatura, y todo tipo de dispositivos para el control del hogar.

Al igual que muchos otros protocolos, este también cuenta con un framework de código abierto para su análisis. Se trata del proyecto KillerBee, pensado para la explotación del protocolo ZigBee.

Al igual que Ubertooth, KillerBee también consta de un software instalable, principalmente desarrollado en Python, y un hardware (antena) para poder capturar el tráfico. La más común es la Atmel RZ RAVEN USB Stick, pero también pueden conseguirse otras alternativas.

Una vez instalado, Killerbee permite interceptar el tráfico de los protocolos inalámbricos, realizar inyección de paquetes, ataques de denegación de servicio y hasta crear exploits personalizados utilizando SCAPY. Otro punto a favor es que soporta la modalidad wardriving, lo cual permite analizar diferentes canales para encontrar redes disponibles.

Con respecto a esta herramienta Pastorino concluye que “Si bien este framework es un poco difícil de instalar, una vez sorteados estos obstáculos, es sencillo de utilizar y posee una interfaz amigable”.

Como se dijo al principio, los dispositivos inteligentes ya son una realidad por lo que las investigaciones, los análisis y las conclusiones se vuelven sumamente importantes para evitar vulnerabilidades, ataques y demás riesgos que vienen de la mano del “Internet de las Cosas”. 

Para más información sobre seguridad informática ingrese al portal de noticias de ESET: https://www.welivesecurity.com/la-es/

