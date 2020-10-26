---
layout: posts
color-schema: red-dark
date: '2020-10-26 09:20 -0400'
published: true
superNews: false
superArticle: false
year: '2020'
title: ¿Puedo tener privacidad y seguridad? Privacidad de la dirección MAC en público
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/Celulares-Usando-g.jpg
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/Celulares-Usando-g.jpg
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
week: '44'
---
<p style="text-align: justify;"><em>En este artículo, Matthew Terry, Ingeniero de Control de Calidad de WatchGuard, hace referencia a los últimos cambios en la forma en que los smartphone o tablets se conectan a las redes inalámbricas.</em></p>
<p style="text-align: justify;">Para aquellos que ejecutan los últimos sistemas operativos para sus computadoras, teléfonos y tabletas, es posible que hayan notado los cambios en la forma en que su dispositivo se conecta a las redes inalámbricas. Apple ha sido noticia por su actualización de iOS 14 que permite direcciones Mac aleatorias de forma predeterminada. Si bien esta implementación es algo única en el sentido de que hace más para proteger la privacidad del usuario, esta no es la primera vez que se agrega esta característica a los sistemas operativos.</p>
<p style="text-align: justify;">El mecanismo para generar direcciones MAC privadas no ha cambiado, lo que hace posible que los puntos de acceso y el equipo de red determinen si la dirección con la que un dispositivo está probando es real o falsa. Para una regla simple, cualquier dirección MAC donde el primer octeto termina con 2, 6, A o E es una dirección MAC aleatoria.</p>
<p style="text-align: justify;"><strong>WatchGuard</strong> ya utiliza este conocimiento para determinar si un dispositivo cliente está usando su dirección MAC real o no y filtra estas direcciones en algunos informes de análisis.</p>
<p style="text-align: justify;">En las redes privadas y corporativas, la aleatorización de direcciones MAC se considera un obstáculo para la aplicación de políticas y una molestia en la red. Esto es especialmente cierto si la red se basa en controles de dirección MAC o reservas DHCP con políticas específicas vinculadas a direcciones IP o rangos de direcciones IP. Incluso en las redes de invitados, las direcciones MAC y las concesiones DHCP desempeñan un papel en la identificación de dispositivos que han completado o no un inicio de sesión en el portal cautivo.</p>
<p style="text-align: justify;">Empresas como Apple, Google y Microsoft, que están fabricando los sistemas operativos que usamos a diario, tienen buenas razones para incluir esta medida de privacidad.</p>
<p style="text-align: justify;">Para los administradores de redes y los analistas de marketing, significa que se debe cambiar la forma en que se realizan las cosas. Las políticas pueden estar vinculadas al usuario en lugar de estar vinculadas a IP. Las campañas de marketing pueden proporcionar incentivos para que los usuarios invitados proporcionen datos.</p>
<p style="text-align: justify;">Uno de los objetivos de mejores controles de privacidad, que se describe en un <a href="https://nt.embluemail.com/p/cl?data=zj7z2C5mVMznLHjYtx1KOzhaxyfrX2lpVlXLGzcGdjxgzo3EDLIKcPJklDfpeAg5G1WcnSTQFSb2kGAEbNF%2BqcR6UEhkCbbRBLWjthGRtzA%3D!-!:i9c!-!https%3A%2F%2Fdeveloper.apple.com%2Fvideos%2Fplay%2Fwwdc2020%2F10676%2F">video de la conferencia WWDC 2020</a>, es equilibrar mejor la información personal que los usuarios brindan con las características que brinda el servicio. De este modo, es una excelente manera para que las organizaciones generen confianza con sus usuarios.</p>
<p style="text-align: justify;">Para responder a estos cambios, se le debe indicar o enseñar a nuestros dispositivos cómo diferenciar entre redes privadas del hogar o del trabajo y redes públicas para invitados. Cuando está en redes privadas, está bien deshabilitar las direcciones MAC privadas, y las empresas usan la política de grupo para deshabilitar las direcciones MAC privadas en el dominio y las redes privadas. Al hacer esto, se puede mantener la lista de reserva DHCP y las políticas de firewall basadas en direcciones IP o rangos de direcciones.</p>
<p style="text-align: justify;">Para los proveedores de redes Wi-Fi públicas y para invitados, estos cambios afectarán los datos que pueden estar disponibles "gratis" cuando los dispositivos no se conectan a las redes Wi-Fi para invitados.</p>
<p style="text-align: justify;">Depende de las empresas elegir qué incentivos ofrecer al intentar recopilar información personal, pero los usuarios merecen tener un mejor equilibrio de los servicios proporcionados cuando ceden estos valiosos datos. Esto no significa que no podamos obtener información agregada sobre la cantidad de personas que se encuentran en las instalaciones, pero cuando se hace un seguimiento de la lealtad de un cliente, usar un nombre será más eficiente que intentar realizar un seguimiento mediante un conjunto rotativo de números.-</p>
<img src="https://tracker.metricool.com/c3po.jpg?hash=56f88a41e39ab42c063cc51676587a04"/>