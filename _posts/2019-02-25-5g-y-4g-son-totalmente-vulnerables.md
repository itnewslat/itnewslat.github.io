---
layout: posts
color-schema: red-dark
date: '2019-02-25 10:12 -0400'
published: true
superNews: false
superArticle: false
year: '2019'
title: '5G y 4G: son totalmente vulnerables'
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Tecnologia-4g-5g-p.jpg
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/Tecnologia-4g-5g-g.jpg
categories:
  - Venezuela
  - Colombia
  - Argentina
  - Perú
  - Ecuador
  - Chile
  - Panama
tags:
  - Movilidad
week: '9'
---
_Cortesia de [IT-CONNECT.LAT](https://itconnect.lat/portal/2019/02/25/5g-0000/)_

**En el NDSS Symposium 2019, llevado a cabo en San Diego, California, un grupo de investigadores universitarios ayer reveló vulnerabilidades de redes celulares que afectan a los protocolos 4G y 5G LTE, mientras en el MWC2019 se sigue vendiendo humo.**

Según un artículo publicado por los investigadores en este prestigioso simposio académico, “Los ataques de privacidad a los protocolos de paginación celular 4G y 5G que usan información de canal lateral”, los nuevos ataques podrían permitir a los atacantes remotos eludir las protecciones de seguridad implementadas en 4G y 5G, lo que volvería a habilitar dispositivos de captura IMSI como “Stingrays” para interceptar las llamadas telefónicas de los usuarios y rastrear su ubicación.

A continuación, describimos los tres ataques, cómo funcionan, cuáles son sus impactos y por qué debería preocuparse por estos ataques.

**ToRPEDO Attack**

Verificación de ubicación, DoS, inyectar alertas falsas

“Rastreo a través de la Distribución de mEssage de paginación”, TorPEDO es el ataque más preocupante que aprovecha el protocolo de paginación, permitiendo a los atacantes remotos verificar la ubicación de un dispositivo víctima, inyectar mensajes de paginación fabricados y montar ataques de denegación de servicio (DoS).

Cuando un dispositivo no se está comunicando activamente con la red celular, entra en modo inactivo, una especie de modo de bajo consumo de energía que ahorra energía de la batería del dispositivo.

Por lo tanto, cuando recibe una llamada telefónica o un mensaje SMS mientras su dispositivo está en el modo idle, la red celular primero envía un mensaje de aviso para notificar al dispositivo la llamada entrante o el texto.

Debe tenerse en cuenta que los mensajes de paginación también incluyen un valor denominado “Identidad temporal de abonado móvil” (TMSI) del dispositivo que no cambia con frecuencia.

Sin embargo, los investigadores encuentran que, si un atacante inicia y luego cancela las llamadas varias veces en un período corto, la estación base actualiza el valor TMSI con mucha frecuencia al enviar los mensajes de búsqueda.

**Snifeando celulares**

Por lo tanto, un atacante que snifee los mensajes de búsqueda, a través de dispositivos como Stingrays, puede verificar si un usuario celular objetivo está dentro de un rango de intercepción o no.

“Si el atacante es consciente de los lugares que la víctima suele visitar, el atacante puede configurar rastreadores en esos lugares para crear el perfil de movilidad a nivel celular de la víctima”, dijeron los investigadores.

El ataque ToRPEDO afecta tanto a 4G como a la versión actual del protocolo 5G LTE, y los investigadores dijeron que verificaron ToRPEDO contra 3 proveedores de servicios canadienses y todos los proveedores de servicios de EE. UU.

Una vez que se conoce la ocasión de búsqueda de la víctima del ataque de ToRPEDO, los atacantes también pueden secuestrar el canal de búsqueda, lo que les permite enviar mensajes de emergencia fabricados, montar un ataque de denegación de servicio mediante la inyección de mensajes de búsqueda vacíos fabricados, y así bloquear el víctima de recibir cualquier servicio pendiente.

**IMSI Cracking y PIERCER**

Además, el ataque ToRPEDO también abre una puerta para otros dos nuevos ataques: el PIERCER y el IMSI-Cracking, lo que lleva a la recuperación completa de la identidad persistente del dispositivo víctima (es decir, IMSI).

Debido a una falla de diseño, el ataque PIERCER (Exposición de información persistente por la red CorE) permite que un atacante asocie el IMSI único del dispositivo víctima con su número de teléfono.

“Algunos proveedores de servicios utilizan IMSI en lugar de TMSI en los mensajes de localización para identificar los dispositivos con servicios pendientes”, explicaron los investigadores.

“Una simple prueba manual reveló que es posible dar al proveedor del servicio la impresión de que se está produciendo un caso excepcional que lo obliga a revelar el IMSI de la víctima”.

Según los investigadores, el ataque ToRPEDO también permite a un atacante con el conocimiento del número de teléfono de la víctima recuperar el IMSI de la víctima, tanto en 4G como en 5G, lanzando un ataque de fuerza bruta.

Con el número de IMSI en las manos, los atacantes pueden lanzar ataques descubiertos previamente, lo que potencialmente les permite husmear las llamadas de la víctima y la información de ubicación utilizando receptores IMSI como Stingrays y DRTBox, incluso si la víctima posee un nuevo teléfono 5G, por lo que uno debería estar más preocupado por estos ataques.

_Cortesia de [IT-CONNECT.LAT](https://itconnect.lat/portal/2019/02/25/5g-0000/)_