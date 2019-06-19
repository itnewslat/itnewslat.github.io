---
layout: posts
color-schema: red-dark
date: '2019-06-11 11:37 -0400'
published: true
superNews: false
superArticle: false
year: '2019'
title: ¿Quién es el responsable de la seguridad en la nube?
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Debate-NetEvents-p.jpg
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/Debate-NetEvents-g.jpg
categories:
  - Venezuela
  - Colombia
  - Argentina
  - Perú
  - Ecuador
  - Chile
  - Panama
tags:
  - Actualidad
week: '24'
---

Debe ser un signo de los tiempos. El mundo está tan cansado de todas las masacres de malware en Internet salvaje, tanto, que la seguridad está empezando a ser bastante sexy.

La reciente discusión de NetEvents EMEA Press Spotlight - Consideraciones de seguridad empresarial para la nube - Contenedores, perímetros y controles de acceso - agregó mayor inteligencia a la mezcla.

El analista principal de Soluciones de Infraestructura de Ovum, Rik Turner, habló sobre los desafíos y, a partir de la seguridad en la nube, presentó el Modelo de Responsabilidad Compartida, que se muestra a continuación, y se sorprendió de cuán pocas personas de la audiencia lo sabían

![](https://raw.githubusercontent.com/itnewslat/assets/master/img/300x300/Ovum1.jpg)
 
Su diagrama muestra tres mecanismos de entrega diferentes, o formas de consumir servicios en la nube: **Infraestructura como Servicio (IaaS)**, P**lataforma como Servicio (PaaS)** y **Software como Servicio (SaaS)**. Entonces, ¿quién es la responsabilidad de seguridad para el cliente y quién para el proveedor de servicios en la nube?

En **IaaS**, por ejemplo: Amazon Web Services (AWS) se encarga de todos los _bits grises_, desde la virtualización hasta la red. Pero por encima de eso es responsabilidad de los clientes. "No se les devolverá ningún dinero si no se aseguran las capas anteriores". Del mismo modo, para **PaaS**, usted es responsable de la seguridad en las dos capas superiores. "Si algo sale mal con algo de eso, AWS tendría que reembolsar algo de dinero, o lo que sea".

El modelo de seguridad compartido es claramente muy importante para cualquier empresa que migre a la nube: la empresa tendrá que cuidar la seguridad en todos los _bits rojos_. Así que estas son las partes que los proveedores de seguridad proporcionan a la empresa. 

La alegría y la tentación de **SaaS** es que fue tan fácil registrarse (el departamento de TI ni siquiera necesita saberlo), de ahí la noción de TI en la sombra y el auge de Cloud Access Security Brokers (**CASB**) que se sientan entre los usuarios y sus servicios - Fig. 2. **CASB** fue la primera respuesta de seguridad para la adopción en la nube, pero: "Muchos de los tipos de **CASB** han sido adquiridos por otra persona y ahora están desaparecidos en el vientre de una seguridad mucho mayor. Empresas con grandes carteras amplias ”.

![](https://raw.githubusercontent.com/itnewslat/assets/master/img/300x300/OVUM2.jpg)
 
**IaaS** y **PaaS** son más complicados, porque el cliente empresarial tiene una responsabilidad más amplia de la seguridad. Además, ya no es solo una cuestión de activar máquinas virtuales (VM) debido al uso cada vez mayor de contenedores, microservicios o Serverless, cada uno con su propio formato. Es una progresión: las máquinas virtuales eliminan la dependencia de los servidores físicos; los contenedores evitan la rotación de nuevas máquinas virtuales, y Serverless significa que puede olvidarlas y simplemente especificar las funciones que se admitirán, con un ahorro del 70-80 por ciento en costos de infraestructura.

Por lo tanto, ahora la gente está hablando más acerca de las plataformas de protección de carga de trabajo en la nube (bloqueo y remediación de ataques y reinicio de la carga de trabajo en otro lugar) y la administración de la postura de seguridad en la nube (CSPM), consulte la tabla a continuación.

**CSPM** es esencialmente una función de cumplimiento. Ahora es tan fácil crear otra instancia en la comunidad de desarrolladores o en el entorno de producción real, que de repente tienes otras 50 máquinas virtuales que la seguridad no conocía. Por lo tanto, la tecnología **CSPM** controla y administra la propagación de máquinas virtuales para garantizar el cumplimiento de las políticas de la empresa.

![](https://raw.githubusercontent.com/itnewslat/assets/master/img/300x300/Ovum3.jpg)
 
Rik Turner sugirió: "Personalmente, creo que estos dos mundos finalmente convergerán, porque **CSPM** está empezando a moverse en la dirección de hacer la remediación en lugar de solo alertar. Entonces, esos dos se convertirán en uno ... Se vuelve un poco más difícil con los contenedores, en la medida en que comienzas a ver paquetes de código más pequeños ". Y con serverless:" las cosas se vuelven más efímeras ... la vida de una pieza de código que se ejecuta en un entorno serverless puede ser una cuestión de milisegundos. ¿Cómo lo aseguro?

La teoría es que nos estamos moviendo hacia un mundo DevSecOps, donde los desarrolladores se hacen responsables de integrar la seguridad: "no es una preocupación de los desarrolladores tradicionales, pero estamos empezando a ver eso".

Pasando a discutir los perímetros y el control de acceso, Rik dijo: “la razón por la que quiero hacer esto por separado es porque este es el mundo tradicional de las redes privadas virtuales ... todo eso es muy antiguo. Ahora, no solo sus aplicaciones se están moviendo a todo tipo de otros entornos, sino que, fundamentalmente, sus usuarios han ido a todas partes ... Por lo tanto, estoy viendo mucha más complejidad en términos del problema de acceso real y el control de acceso de lo que había habido anteriormente . ” 

![](https://raw.githubusercontent.com/itnewslat/assets/master/img/300x300/ovum4.jpg)

![](https://raw.githubusercontent.com/itnewslat/assets/master/img/300x300/Ovum5.jpg)
 
Después de esta introducción muy clara, Rik abrió la discusión con su panel de Hotshot Technologies, nCipher Security, NetFoundry, Versa Networks_y BA TestLabs.

Atchison Frazer, Director de Marketing a nivel mundial para Versa Networks, explicó: "Versa es un innovador en el espacio de infraestructura de borde SD-WAN o WAN ... uno de los pocos proveedores que desde el principio en realidad construyó un UTM y cortafuegos de última generación. Seguridad web en la misma plataforma que la funcionalidad SD-WAN. El problema para nuestros clientes no es tanto el tráfico en las instalaciones; todos los proveedores de SD-WAN cifran el tráfico en las instalaciones con los más altos estándares ".
Philip Griffiths, jefe de EMEA Partnerships, NetFoundry: "Estamos cambiando la forma en que el mundo conecta sus aplicaciones". Refiriéndose a los ejemplos de Rik, agregó: "Así que un desarrollador de DevOps podría crear conectividad entre sus sucursales, dispositivos, contenedores, entorno de máquina virtual, cualquier cosa. En cualquier lugar, use la Internet pública solo ... en minutos utilizando las API en un enfoque totalmente nativo de la nube. "Ofreciendo la seguridad, el rendimiento y la confiabilidad de la fibra, a través de la Internet pública.

Peter Galvin, Director de estrategia y marketing de nCipher Security, una compañía que ofrece un módulo de seguridad de hardware para proteger aplicaciones y datos críticos para el negocio "cosas como pagos digitales, elevación y cambio a la nube, cifrado de información y protección de claves y hardware, lo que permite un nivel de seguridad muy alto ".

Aaron Turner, CEO y cofundador de Hotshot Technologies: “una empresa de seguridad que brinda la mejor seguridad para proteger a los clientes menos sofisticados de los atacantes más sofisticados. Tomamos el poder del cifrado de muy alta entropía, lo combinamos con los servicios de ubicación disponibles y ayudamos a las personas a cambiar a un verdadero modelo de confianza cero para la mensajería, la colaboración y la identidad ".

Jan Guldentops, director de BA Test Labs: “He estado jugando con la seguridad durante 20 años, a veces como periodista, a veces como consultor neutral. Lo que me gustaría hacer hoy es tomar todas estas ideas geniales, toda la terminología y ver qué puede ser real y cuáles son los problemas ".

Rik observó que el panel tenía cuatro proveedores que no competían, todos con diferentes enfoques. De estos, solo nCipher se clasificaría como una "verdadera compañía de seguridad" porque "la razón por la que existe es para asegurar cosas". El mismo analista describiría a Hotshot como "un proveedor de aplicaciones que proporciona aplicaciones seguras, pero Está en el negocio de vender aplicaciones con seguridad envuelta en ellas ". Mientras que" NetFoundry es una compañía de redes de aplicaciones que puede, si es necesario, vender junto con una SD-WAN, pero también puede vender de forma independiente como una alternativa a la SD-WAN". Luego: "Se podría decir que Versa realmente está envolviendo la seguridad desde el principio en las ofertas de SD-WAN. Entonces, es un poco diferente. Pero aún lo tienen, cada uno tiene su propia opinión sobre cuáles son los grandes problemas relacionados con la seguridad en la nube y, de igual manera, con el acceso a la red y el control de acceso ".

Comenzando con Jan Guldentops, quien señaló que las personas que no podían administrar la seguridad usaron la nube como excusa: "Vamos a subcontratar a la nube ya que todo está seguro y todos los problemas desaparecieron. Ese es el primer error que veo todo el tiempo. Vamos a la nube solo para poder asegurarnos ”. También reiteró el punto de vista de Rik sobre la necesidad de una seguridad diseñada, en lugar de unirla a la seguridad.

Peter Galvin no estuvo de acuerdo. Para él, el conductor de la nube era la agilidad y la reducción del gasto en los centros de datos. Pero lo que se pasó por alto fue la capa superior de la Responsabilidad Compartida de Rik: la necesidad de proteger los propios datos. Guldentops nos recordó que esta protección también era un requisito legal.

Phillip Griffiths señaló que las personas se apresuraban hacia una nube de rápida evolución con un pensamiento heredado: "lo que ahora vemos como incorrecto solía ser la mejor práctica". Criticó el uso excesivo del término tolerancia cero: "no se puede ser cero". Confía, si confías en la red o en el perímetro ". Aaron Turner estuvo de acuerdo con las ideas actuales de un perímetro, luego se refirió al muy reciente Informe de Investigación de Incumplimiento de Datos de Verizon que reportó una duplicación del número de ataques a nivel nacional contra pequeñas empresas: "¿cómo va a defenderse la pequeña empresa promedio contra un ¿Estado adversario? ”De ahí el énfasis de su compañía en:“ una nueva solución que ayuda a las personas menos sofisticadas a protegerse de los adversarios más sofisticados ”.

La conversación se trasladó a falsas expectativas de cortafuegos perimetrales en un mundo donde cada dispositivo conectado a la nube ahora es un punto final potencialmente vulnerable. Una vez más, una tendencia a confiar en la seguridad de la nube, el último complemento, en lugar de ver la necesidad de diseñarlo.

Griffiths cambió el énfasis de la confianza a la verificación con: "trabajamos con una agencia gubernamental de tres letras ... para acceder a las aplicaciones en la nube, tienen que mostrar cinco puntos de confianza. Tienen que tener un cliente en su computadora portátil, ingresan una contraseña en esa computadora portátil, usan un reloj con un hardware inexpugnable, ponen su pulgar en el reloj para dar una prueba de confianza biométrica y ese reloj también mide su ECG, por lo que No se puede hacer todo bajo coacción ".

Cuando el equipo se recuperó de esta bomba paranoica, Guldentops nos recordó: "Si el premio es lo suficientemente grande, quiero decir si el premio al final del truco es lo suficientemente grande: a alguien se le ocurrirá algo". Griffiths respondió de nuevo con: "Si eres más difícil y más costoso de hackear, la gente encuentra otra víctima. Se trata de tener mejores zapatos para correr más rápido que otras personas cuando llega el oso ".

Durante la sesión de preguntas, comenzando con Steve Broadhead, otro conocido Netfly de NetEvents. Podría haber estado hablando por una población mundial de usuarios de TI frustrados, o deberíamos decir "víctimas", cuando comenzó: "el problema fundamental de TI se supone que hace que la vida sea más simple y que solo estás pintando esta imagen increíblemente compleja . ¡Me estoy imaginando a mi madre intentando hacer lo que acabas de describir! " Griffiths se apresuró a tranquilizarnos: "Pero en el otro extremo de la escala, literalmente puede ir a nuestro sitio web, descargar un par de puntos finales, desplegarse en su nube y, en cinco minutos, crear una red. El otro día, uno de nuestros clientes conectó siete centros de datos de AWS en dos horas, mientras realizaba otro trabajo que implementa varias capas de seguridad por diseño. Para que elimines muchos de estos vectores de amenaza, como los DDos, el hombre en el medio, etc. ”.

Hotshot hace un punto de asegurar a los clientes menos sofisticados, por lo que no fue una sorpresa que Turner viniera con lo siguiente: "Tratamos de que la familia o una pequeña empresa puedan implementar protecciones a nivel nacional o estatal en 30 segundos o menos ... así que fácil de usar y tan intuitivo que tiene esa protección incorporada ”. Antes de que NetFoundry y Versa pudieran hacer llegar su palabra, Broadhead reconoció sus ofertas y agregó: "Lo que estás haciendo está bien; el problema es que cuando llega al cliente, a menudo se burlan de lo que intentas hacer al agregar campanas y silbidos. Como tener un hermoso auto diseñado para una resistencia mínima al viento, y la gente le pone un portaequipajes, ¿verdad? "

Frazer de Versa vio esto como un desafío clave, y extrajo de él un caso definitivo para la automatización: “Capital One tiene mil sitios. Utilizan el trabajo digital entregado por Versa. Todo está automatizado. Tenemos los laboratorios de NSS, somos el único proveedor de SD-WAN que obtuvo el puntaje más alto en la clasificación de laboratorios de NSS. En algún momento, tiene que automatizar tantas de estas funciones como sea posible, ser capaz de reprogramar según sea necesario y establecer esas políticas y tener una visibilidad completa en el lugar a través de la nube y viceversa ".

Griffiths tuvo un ejemplo interesante de un nuevo banco nativo en la nube que trabaja para lograr un mecanismo de confianza de cadena de bloques automatizado: "para que esta transacción electrónica con casi ningún ser humano involucrado tenga incidencia legal".

Para la pregunta final: Antony Savvas, "IT Europa y Data Economy, entre otros", condujo a la sala a un elefante muy grande, a saber, "La Ley de la Nube de EE. UU.". Él sugirió: "Podríamos rendirnos todos porque, en Al final del día, si una agencia de EE. UU. quiere que sus datos en Europa estén controlados por una compañía estadounidense, puede tenerlos. ¿Qué dicen las compañías de seguridad sobre esto? He escuchado que las empresas deberían simplemente cifrar sus datos y controlar las claves de cifrado. Entonces, si un proveedor de EE. UU. Tiene que cumplir con la Ley de Nube de EE. UU., Todo lo que puede hacer es entregar los datos cifrados. ¿Qué opina el panel sobre esto?

Esto generó un gran alboroto de “hablar en exceso”, con lo que Galvin de nCipher destacó: “La mayoría de nuestros clientes están preocupados por eso. Una de las razones por las que están cifrando los datos y administrando las claves es protegerse de cualquier actividad de citación. No solo el gobierno de los EE. UU., Sino otros gobiernos tienen el derecho de solicitar información y nunca decirle a la persona que se están tomando datos. La única manera de protegerse realmente es si está cifrando los datos y manteniendo la propiedad de las claves. Obtendrán datos encriptados, pero no podrán leerlos ".

Turner agregó: "La primera pregunta que le hacemos al Asesor Jurídico es qué leyes desea cumplir ... porque no puede cumplirlas todas". No puede cumplir con la Ley de nube de EE. UU. Y GDPR, la ley de cifrado de datos de China y la ley de cifrado de Reino Unido. Tiene que hacer el análisis de riesgos para escurrir: así que estoy dispuesto a correr el riesgo de no cumplir con la ley de encriptación china y correré el riesgo de no cumplir con el Reino Unido, y así sucesivamente ".
Por si acaso quedaba alguien que aún se sintiera seguro, Guldentops interrumpió: "Hay una cosa peor que no usar cifrado, usar cifrado incorrecto, he visto eso bastante". Hay otro problema: el cifrado inquebrantable de hoy no será irrompible en cinco años. En una perspectiva de la nube, eso es potencialmente lo peor: porque sus datos permanecen allí potencialmente y podrían ser descifrados dentro de dos, tres, cuatro años ".
El público vino a descubrir la seguridad. Se fueron con la sabiduría de la experiencia tal como lo ha hecho Guldentops: “La gente se mantendrá estúpida. Quiero decir que es lo mismo con DevOps; ¿Soy el único que teme que los ingenieros de software controlen la infraestructura? Solía ​​acuñar la frase "no es DevOps, es DevFlops". Da miedo. Es un mundo nuevo y valiente y tendremos que aprender a vivir con él ".


La transcripción completa de esta sesión está disponible ahora.**[AQUI](https://www.netevents.org/wp-content/uploads/2019/01/Debate-III-Enterprise-Security-Considerations-for-the-Cloud-Ovum-final.pdf)**(en Inglés)




