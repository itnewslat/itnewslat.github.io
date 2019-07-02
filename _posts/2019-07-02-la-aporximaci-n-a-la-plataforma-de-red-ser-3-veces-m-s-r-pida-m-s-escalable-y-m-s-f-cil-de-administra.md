---
layout: posts
color-schema: red-dark
date: '2019-07-02 08:04 -0400'
published: true
superNews: false
superArticle: false
year: '2019'
title: >-
  la aproximación a la plataforma de red, será 3 veces más rápida, más escalable
  y más fácil de administra
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Debate-2-Netevents-p.jpg
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/Debate-2-Netevents-g.jpg
categories:
  - Venezuela
  - Colombia
  - Argentina
  - Perú
  - Ecuador
  - Chile
  - Panama
tags:
  - Transformación Digital
week: '27'
---
A los medios ya los analistas les encanta rastrear hitos históricos, como “la cuarta revolución industrial”. 

Según **Ksenia Efimova, Analista Senior de Investigación de IDC, EMEA Telecoms and Networking**, estamos ingresando a la Tercera Plataforma. La primera plataforma es la computadora central; siendo la Segunda Plataforma cliente / servidor; mientras que la Tercera Plataforma “consiste en nube, social, movilidad y datos; y aceleradores de innovación, AR, VR, AI, robótica, cadena de bloques, etc. ”. Una gran plataforma de hecho.

Ella colocó esta idea en un panel de la industria que representa a VMware, NetFoundry y Mellanox Technologies para estimular el debate sobre la transformación digital y los desarrollos necesarios para respaldar su adopción generalizada. Los cambios comienzan con el movimiento actual hacia redes de mayor velocidad, pero reconocen que esto solo no es suficiente para abordar la complejidad y el volumen de datos relativamente no estructurados que surgirán de otros desarrollos como el Internet de las cosas (IoT). Existe el problema de los requisitos masivos de energía, que exigen una mayor eficiencia. Existe la complejidad que integra los centros de datos locales, externos, basados en la nube y tradicionales, tanto privados como públicos. Requiere un enfoque completamente nuevo, así que, ¿dónde deberíamos comenzar?.

La pregunta carece de fundamento hasta que se acuerdan la estrategia y los objetivos. "¿Estás buscando construir un centro de datos a hipescala? ¿O simplemente algo para que una filial alemana local mantenga los datos en el país? ¿O está buscando ubicaciones cercanas para reducir la latencia? ¿O el procesamiento IOT, donde es posible que simplemente necesite un par de blades o racks dentro de una torre de telecomunicaciones? " se pregunta **Philip Griffiths, Director de Asociaciones de EMEA de NetFoundry**. Según lo acordado, uno debería centrarse en las prioridades de los clientes: reducir el consumo de energía, utilizar la automatización y la inteligencia artificial, tener todo lo definido por software para salvar a los ingenieros de envío en el sitio y arreglar las cosas manualmente en todo momento.

**Kevin Deierling, Director de Marketing de Mellanox**, sugiere un enfoque más holístico: "Piense fuera de la computadora. En pasado, se podía contar con que la ley de Moore duplicaría el rendimiento cada dos años: Las computadoras podrían absorber todo el software y seguir escribiendo aplicaciones ineficientes ". Pensar de manera integral significa no optimizar en el nivel de la caja sino en toda la plataforma - Cómputo, almacenamiento, redes y aplicaciones. El centro de datos es ahora la computadora. Señala que la desventaja de la virtualización en el centro de datos es que consume mucha potencia de CPU. Una vez que un enrutador de Cisco reenvió paquetes usando software, pero con los conmutadores de 100 o 400 gig de hoy en día, necesita un hardware y software ASIC híbrido para acelerar el reenvío de máquinas virtuales, las reglas de firewall y el equilibrio de carga, etc. "Cuando le dije a Martin Casado por primera vez ... emocionado. Él dice: "¿Quieres decir que pones un conmutador virtual en silicio en una NIC de Ethernet? … eso es fantástico. Lástima que no pueda usarlo, porque soy VMware y necesito controlar esa interfaz para tener el control del software ". Fue solo entonces que explicamos que la ruta de control todavía está controlada por VMware ".

**Joe Baguley, vicepresidente y director de tecnología de EMEA**, VMware está de acuerdo en ver a todo el centro de datos como una sola computadora. De hecho, muchos de sus clientes no están construyendo nuevos centros de datos, optando en cambio por alquilar espacio de centros de datos o mover sus máquinas virtuales a un host adecuado. Aquellos que están construyendo centros de datos quieren saber cómo lo hacen los hiperescaladores, donde todo se hace básicamente en software: "Los clientes que están construyendo centros de datos a gran escala, buscan unir esencialmente bloques de construcción Lego de infraestructura hiperconvergente tapados. a través de una columna vertebral de 10 gigas, que luego llega a 10/40, o incluso de 40 a 100 ... la columna vertebral es solo una capa plana 2, porque toda la inteligencia se realiza en el software de los dispositivos ".

Eso permite un uso mucho más eficiente de la energía del hardware y lo que él llamó "una muerte rotatoria". Donde la mayoría de las empresas se llenan de hardware comprado a lo largo de los años para algún proyecto específico, un operador de CloudScale en una plataforma virtualizada de software agrega hardware nuevo como bloques de Lego. Las cargas de trabajo más críticas pasan automáticamente al último kit, mientras que el hardware más antiguo se desplaza hacia abajo en la jerarquía para reducir la prioridad de los trabajos hasta que desaparece. Mucho más eficiente que los picos y depresiones de actualización de hardware.

Sonó una advertencia sobre la eficiencia energética: "Tenemos que ser conscientes de la **[paradoja de Jevons](https://es.wikipedia.org/wiki/Paradoja_de_Jevons)** en que cuanto más hacemos algo eficiente, más barato se vuelve correr, por lo tanto, más personas buscan formas de usarlo, por lo tanto, utilizamos más de eso".

Pero, ¿este enfoque hiper-convergente se adapta a todos? Ya vemos la migración de CRM y ERP a hiperconvergencia y acepta **Baguely**: "Si puede virtualizarlo, se ejecutará en hiperconvergenciado ... La barrera para HCI rara vez tiene que ver con las aplicaciones o el software, es la gente no entiende cómo aprovechar el HCI ... hay un montón de gente que necesita renunciar a sus feudos y entender que están jugando un juego más importante. Redes, cómputo, almacenamiento, todo en uno ".

**Kevin Deierling** señala cómo esto migra hacia el borde: “Tenemos un SmartNIC que combina una conectividad de red de 25 gigas y 100 gigas con núcleos ARM para aplicaciones de vanguardia; y ahora eso está ejecutando ESXi. Así que estamos empezando a ver que el hipervisor se ejecuta en estas diminutas máquinas ". Se refiere a hiperconvergencia como" infraestructura invisible ": fácil de implementar y funciona, hasta que mueva una máquina virtual. Pero con la inteligencia de SmartNIC en la red, cuando algo se mueve hay una notificación y la red se adapta: "ahora también hemos hecho que la red sea invisible".

Otro ejemplo de inteligencia que migra hacia los bordes es visto en 5G IoT. Originalmente se sugirió que todo se conectaría a la nube, pero en lugar de eso, se trata de una arquitectura de múltiples niveles, con centros de datos en la nube masivos, luego centros de datos en la nube regionales y luego bordes locales y tal vez incluso puertas de enlace IoT que realizan procesos locales.

Volviendo a los factores humanos: la industria también se enfrenta a una grave escasez de habilidades que requiere más automatización. Baguley sostiene que: "Los emprendedores aún no se han dado cuenta del hecho de que la automatización es un requisito fundamental del diseño, no un perno ... Veo que estas personas construyen sistemas y luego elaboran la forma de automatizar, en lugar de resolver cómo para construir un sistema automatizado, es la única forma de escalar ”.

Ese es un buen punto para finalizar la discusión, ya que nos recuerda que la red de la Tercera Plataforma del mañana no solo debe ser más rápida y más escalable, sino también mucho más fácil de administrar.

[La transcripción completa de esta sesión está disponible ahora](https://www.netevents.org/wp-content/uploads/2019/01/Debate-IV-Next-Generation-Data-Centers-IDC-final.pdf).
