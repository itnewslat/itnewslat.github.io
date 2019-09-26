---
layout: posts
color-schema: red-dark
date: '2019-09-26 07:16 -0400'
published: true
superNews: false
superArticle: false
year: '2019'
title: 10 amenazas informáticas más detectadas en México
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Amenazas-p.jpg
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/Amenazas-g.jpg
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
week: '39'
---
**Entre las amenazas con mayor cantidad de detecciones, el código malicioso del tipo troyano JS/ProxyChanger fue el que más detecciones presentó**

Son resultados del primer semestre del 2019

ESET, compañía líder en detección proactiva de amenazas, analiza y presenta el malware con mayores niveles de detección en México durante el primer semestre de 2019 para comprender el escenario actual de la actividad maliciosa. Además, analizaron las principales detecciones relacionadas con la propagación de los códigos maliciosos y las relacionadas con lenguajes de programación utilizados para el desarrollo de malware.
Los códigos maliciosos continúan siendo la principal amenaza para las organizaciones y los usuarios, tal como lo muestra el ESET Security Report 2019, donde el 40% de las empresas en Latinoamérica padeció una infección por algún tipo de malware. Por esta razón, decidimos mostrar el comportamiento de los códigos maliciosos. Los datos que se presentan a continuación, están enfocados únicamente en familias de malware conocidas. Por lo tanto, no se tuvieron en cuenta las detecciones de adware, aplicaciones potencialmente no deseadas (PUA) e inseguras. 

La grafica a continuación refleja los nombres de detección de los productos de ESET y porcentajes para las amenazas más detectadas en México durante enero y junio de 2019: 

A continuación, una breve descripción con las principales características de cada una de las amenazas identificadas en el top 10:

- **JS/ProxyChanger**
  - La mayor cantidad de detecciones está relacionada con JS/ProxyChanger, un código malicioso del tipo troyano escrito en JavaScript, que tiene como función principal impedir al usuario acceder a sitios web, para redirigir el tráfico a otras direcciones IP. El troyano puede redirigir al usuario hacia sitios web de atacantes.
- **Win32/motet**
  - Emotet es una familia de troyanos bancarios conocida por su arquitectura modular, persistencia, y auto propagación (similar a la de los gusanos informáticos). Otra de sus características es su naturaleza polimórfica, ya que busca evadir la detección basada en firmas.
  - Utiliza varios métodos para mantener la persistencia, incluidos servicios y llaves de registro de inicio. Emotet funciona principalmente como un downloader para la distribución de otras familias de troyanos bancarios.
- **Win32/Ramnit**
  - Ramnit es un código malicioso que posee las características de virus y gusano informáticos. Se propaga a través de dispositivos USB y otras unidades extraíbles. Una de sus principales características es que puede infectar el Master Boot Record (MBR) y así garantizar su persistencia en el sistema operativo. Infecta archivos ejecutables y archivos HTM/HTML, lo que aumenta sus capacidades de propagación. Posteriormente, es utilizado para robar datos confidenciales relacionados con servicios bancarios de los usuarios.
- **JS/Bondat**
  - Bondat es un gusano informático escrito en JavaScript que sirve como un vector de infección inicial, ya que descarga otros archivos que pueden realizar diversas acciones maliciosos. Su medio de propagación es a través de medios extraíbles utilizando la técnica LNK. El método LNK ejecuta el malware y posteriormente abre el archivo correspondiente, de esta manera busca pasar desapercibido. Posteriormente, Bondat controla los equipos Windows infectados para unirlos a una botnet.
- **Win32/Bundpil**
  - Bundpil es un gusano capaz de propagarse a través de medios extraíbles. Es parte de Wauchos, una de las familias de botnets más grandes, también conocida como Gamarue o Andrómeda. El gusano fue diseñado para mejorar la persistencia de la botnet Wauchos y dificultar la eliminación global de su red. Utiliza DGA (Algoritmo de Generación de Dominio) y puede alterar las solicitudes de Domain Name System (DNS).
- **Win32/Qbot**
  - Qbot es una botnet orientada al robo de credenciales, algunas de las variantes se enfocan en datos bancarios e intercepción de transacciones financieras. Se instala como una puerta trasera y puede ser controlada de manera remota, ya que los equipos comprometidos se conectan a un servidor de comando y control (C&C), es decir, forman parte de una botnet. Algunas actualizaciones de Qbot cuentan con un código polimórfico, lo que dificulta su detección. Esta amenaza también ha apuntado a organizaciones públicas como departamentos de policía, hospitales y universidades.
- **Win32/Bayrob**
  - Bayrob es un troyano que se propaga mediante archivos adjuntos a través de correos electrónicos. Funciona como un backdoor y se registra como un servicio del sistema, además de modificar registros para asegurar su persistencia. El troyano busca robar información del equipo de la víctima, como pueden ser datos de tarjetas de crédito y credenciales del sistema de banca en línea. Se comunica mediante el protocolo HTTP con un equipo remoto para descargar archivos maliciosos, utilizar archivos ejecutables, conocer lista de procesos activos, enviar la información recopilada o actualizarse a una nueva versión.
- **Win32/Phorpiex**
  - Phorpiex es un gusano que se utiliza principalmente para descargar otro malware o realizar ataques de Denegación de Servicio Distribuidos (DDoS). Se esparce a través de medios extraíbles. Una vez que infecta los equipos, Phorpiex reemplaza con su propia copia archivos legítimos almacenados en servidores Web o en carpetas de servidores FTP con el objetivo de engañar a los usuarios y que ejecuten dichos archivos. Se comunica a través del canal IRC.
- **Win32/CoinMiner**
  - La familia CoinMiner agrupa una enorme cantidad de troyanos que tienen como principal actividad el uso de los recursos de hardware de la computadora infectada para minar o extraer criptomonedas. Los troyanos asociados a esta detección también utilizan un backdoor para ser controlados de forma remota.
- **Win32/Spy.Zbot**
  - Spy.Zbot es un troyano que roba información confidencial, principalmente contraseñas. Tiene la característica de funcionar como como backdoor y puede ser controlado de forma remota, por lo que también añade a los equipos comprometidos a una botnet.

Asimismo, dentro del análisis, destacan detecciones asociadas a los métodos de propagación de las amenazas que aparecen con más frecuencia. Tal es el caso de LNK/Agent y Win32/TrojanDownloader.

- **LNK/Agent** Es el nombre de detección para el archivo de extensión LNK creado por el malware. El archivo es un acceso directo a un archivo malicioso, y el hecho de que aparezca en este top de detecciones habla de una de las técnicas de propagación que sigue siendo muy usada por algunas amenazas, la relacionada con dispositivos extraíbles. De hecho, amenazas consideradas en la lista de esta publicación, están relacionadas con el método de propagación de LNK/Agent, tal es el caso del gusano Bondat.

- **Win32/TrojanDownloader** El malware del tipo downloader hace referencia a los programas, componentes o funcionalidades maliciosas cuyo propósito (generalmente único), es descargar y ejecutar software malicioso adicional en un sistema infectado.

Se trata de otro de los métodos más utilizados para propagar otro tipo de códigos maliciosos, desde botnets, ransomware, miners o bankers.

Finalmente, dentro de las detecciones resulta interesante identificar algunas familias como Win32/Autoit, que hace referencia al malware escrito en Autoit, un lenguaje de scripting utilizado con mayor frecuencia en los últimos años para el desarrollo de códigos maliciosos, detecciones como Win32/VB para referirse a Visual Basic, o bien, Win32/Delf para Delphi. 

Teniendo en cuenta las necesidades del mercado nivel global, este año se lanzó ESET Enterprise Inspector una herramienta sofisticada de detección y respuesta para endpoints que permite identificar comportamientos anómalos, para analizarlos en tiempo real y brindar una respuesta rápida sobre cómo remediar la situación. Permitiendo a las organizaciones detectar las amenazas persistentes avanzadas, protegerse del ransomware, bloquear las amenazas 0-day, detener los ataques sin archivos, entre otras ventajas. 

Para más información, ingrese al portal de noticias de ESET llamado WeLiveSecurity en: https://www.welivesecurity.com/la-es/2019/09/24/amenazas-informaticas-mas-detectadas-mexico-primer-semestre/

