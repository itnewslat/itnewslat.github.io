---
layout: posts
color-schema: red-dark
date: '2023-02-13 06:41 -0500'
published: true
superNews: false
superArticle: false
year: '2023'
title: Revisión de la Ciberseguridad en 2022 desde la perspectiva de Cisco Talos
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/Yair-Lelis-g.jpg
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Yair-Lelis-p.jpg
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
week: '07'
---
Cisco Talos, la unidad de ciberinteligencia de Cisco, publicó la revisión de lo acontecido en materia de ciberseguridad, 2022 Year in Review, en que se hace un recuento de los ataques cibernéticos ocurridos en dicho periodo. Hay algunos nuevos y otros persistentes o, como se menciona, viejos conocidos que siguen creando retos a los defensores del ciberespacio.

Hay un tema clave que queda expuesto claramente: Los adversarios se están adaptando a los cambios en el panorama geopolítico, las acciones para el cumplimiento de las leyes y los esfuerzos de quienes los combaten. Es necesario que los defensores rastreen y tengan en cuenta estos cambios en el comportamiento para mantener su ciber-resiliencia.

**Los temas más destacados en el reporte son son:**

**Ucrania**

Las amenazas para el gobierno de ese país, aliados al gobierno y las entidades del sector privado seguirán siendo altas durante la guerra. La telemetría de Cisco Talos, y los descubrimientos de búsqueda de amenazas contras las organizaciones ucranianas no muestran indicios de que éstas se estén desacelerando y, por el contrario, se estima que continúen ataques aún más destructivos. 

**LOG4J**

2021 cerró con la noticia de que una vulnerabilidad crítica de ejecución remota de códigos en software Apache Log4J fue dada a conocer y debido a su uso extensivo la superficie de ataque era considerable. La actividad en este tema se atribuyó a una variedad de diferentes actores a lo largo de 2022, desde ciberdelincuentes básicos hasta amenazas avanzadas persistentes (APT) sofisticadas. Se observaron actores como Deep Panda o Lazarus Group, entre otros.

Cisco Talos anticipa que la amenaza de los intentos de explotación de Log4J seguirá siendo un desafío para las organizaciones durante 2023. Se sabe que los actores de amenazas cibernéticas reutilizan las mismas tácticas, herramientas y técnicas (TTPs) siempre que sean efectivas y probablemente Log4J no será una excepción, ya que sigue siendo un vector de infección altamente viable para que sea explotado; por ello se espera que sigan atacando a los sistemas vulnerables el mayor tiempo posible. 

Herramientas de “doble uso” dan a los cibercriminales un medio cauteloso para permanecer sin ser detectados 

Los actores de amenazas, incluidas las APT, los operadores de ransomware y los grupos de ciberdelincuencia, aprovechan los marcos ofensivos para respaldar una variedad de acciones a lo largo del ciclo de vida de un ataque. Estos marcos se conocen como herramientas de doble uso porque también son utilizados legítimamente por equipos de seguridad ofensivos. Estas proporcionan una capa adicional de protección a través del anonimato: los profesionales de ciberseguridad a menudo tienen dificultades para atribuir su uso a un grupo en particular, ya que se pueden observar en muchos actores diferentes, y las TTP observadas en las operaciones que aprovechan las herramientas de doble uso pueden variar mucho.

Una de ellas es Cobalt Strike. Esta herramienta legítima de defensa de red y software de emulación de amenazas tiene una gama diversa de capacidades, que incluyen: Reconocimiento, actividad posterior a la explotación y una variedad de simulaciones de ataques, lo que la hace altamente funcional para los adversarios. Talos y la comunidad de ciberseguridad han estado lidiando con Cobalt Strike durante años, desarrollando continuamente mejores y más robustas detecciones. Evaluamos que los actores de amenazas pueden haber adaptado su comportamiento a estos desarrollos recurriendo a marcos ofensivos adicionales como Sliver y Brute Ratel.

Talos descubrió dos nuevos marcos ofensivos llamados Manjusaka y Alchimist. Este último ya se está utilizando, y aunque no se ha observado un uso generalizado de Manjusaka tiene el potencial de ser adoptado por actores de amenazas a nivel mundial.

Otras herramientas de doble uso detectadas por Cisco Talos Incident Response (CTIR)  es el uso notable de herramientas y scripts disponibles públicamente alojados en repositorios como GitHub o sitios web de terceros para respaldar las operaciones en múltiples etapas del ciclo de vida del ataque. 

Es importante realizar un seguimiento de las herramientas de doble uso para que las empresas puedan monitorearlas de manera efectiva en sus entornos y así evitar que se utilicen en su contra.

**Uso constante de Living-off the land binaries (LoLBins)**

El uso de LoLBins y las técnicas asociadas con ellos continúan aprovechándose para soportar una variedad de fases a lo largo del ciclo de vida de un ataque. Los LoLBins están preinstalados en un sistema operativo y de estos abusan comúnmente los adversarios, combinados con malware sin archivos y / o servicios legítimos en la nube, para mejorar sus posibilidades de permanecer sin ser detectados dentro de una organización. Debido al uso legítimo de estas herramientas como parte de las funciones administrativas de una compañía, los defensores pueden pasar por alto los ataques que aprovechan LolBins cuando monitorean un comportamiento anómalo.

**Lo viejo se vuelve nuevo otra vez: Los ataques USB se incrementan en 2022**

Como se mencionó, si algo le funciona a los ciberatacantes será muy factible que lo vuelvan a usar y ese es el caso de los drives de USB que infectan a las organizaciones con malware. Talos ha observado varias familias de malware distribuidas de esta manera, incluidas Sality y PlugX, que se dirigen a sistemas Windows y se sabe que se propagan a través de unidades extraíbles. Aunque los adversarios han estado aprovechando las unidades USB para el acceso inicial durante años, la actividad reciente ilustra que la amenaza no ha disminuido y destaca que las organizaciones deben continuar enfatizando la importancia de la higiene en el uso de USBs.

Talos sugiere a todas las organizaciones que usen USB o unidades extraíbles para operaciones comerciales legítimas a limitarlas y, si es posible, restringir el uso de USB en su entorno. También recomienda que las organizaciones proporcionen capacitación de concienciación del usuario sobre los riesgos asociados con la conexión de USB conocidos y desconocidos a sistemas corporativos o dispositivos personales.

**Ransomware**

Talos ha observado una evolución de las amenazas de ransomware a medida que surgen nuevos grupos asociados ofreciendo esta amenaza como un servicio (RaaS) y los grupos existentes cambian de marca o cierran operaciones. 

Talos ha rastreado más de una docena de grupos RaaS al monitorear cuándo se publica la información de la víctima en sitios de fuga de datos por ransomware. De acuerdo con lo detectado por Talos, LockBit fue el grupo RaaS más activo este año, representando más del 20 por ciento del número total de publicaciones de víctimas en la deep web, seguido de cerca por Hive y Black Basta. Los hallazgos de LockBit se alinean con el seguimiento y comprensión general de las actividades del grupo durante 2022, donde ha seguido anunciando nuevas capacidades y actualizaciones en medio de crecientes contratiempos.

Gracias a diferentes Fuentes de telemetría, Talos ha visualizado una multitud de grupos de ransomware, lo que representa un cambio general con respecto a años anteriores en los que unos pocos grupos de esta amenaza monopolizaron el panorama. Los afiliados del ransomware ya no están estructurados en silos y ahora trabajan en múltiples grupos, donde cuanto más único es el conjunto de habilidades de un actor, más oportunidades tienen para apoyar múltiples campañas y organizaciones. Esta diversificación en el espacio RaaS también se refleja en diferentes TTP de acceso inicial, desde aprovechar vulnerabilidades de alto perfil hasta comprar accesos en foros a través de initial access brokers (IABs).

A medida que avanzó el año, Conti anunció  que cesaba sus operaciones, y en junio había desconectado gran parte de su infraestructura. Poco después de que Conti cerrara, surgió una familia relativamente nueva y un supuesto cambio de marca llamado Black Basta. Mientras que Black Basta entró en escena más tarde en el año, el grupo rápidamente se volvió increíblemente activo, como lo demuestra la cantidad de publicaciones realizadas en su sitio de fuga de datos.

**Educación en la mira durante 2022**

El sector educativo siguió siendo una de las verticales más atacadas por ransomware. Es probable que los ciberdelincuentes continúen enfocando sus ataques a este sector sobre todo en momentos en que esas entidades tienen una tolerancia al tiempo de inactividad excepcionalmente baja, como lo es la temporada de regreso a clases. Además, al interrumpir los servicios universitarios básicos, como la ayuda financiera y los préstamos estudiantiles, esto probablemente incentiva a las víctimas a pagar el rescate para volver a las operaciones normales lo más rápido posible.

**Commodity loaders**

Estos son los troyanos comerciales que implementan malware de “segundo uso”, mismos que son una amenaza constante que continúa teniendo un impacto global en todos los sectores de la industria. Por ello, Talos rastrea regularmente estas familias de malware y la amenaza que representan para las redes de los clientes.

Los tres commodity loaders detectados en 2022 fueron Oakbo, Emotet, IcedIC y Trickbot. Estas cuatro amenazas se desarrollaron inicialmente como troyanos bancarios, diseñados para comprometer entidades y obtener ganancias monetarias. Con el tiempo, adaptándose a mayores controles de seguridad en el sector bancario, se convirtieron en amenazas mucho más sofisticadas, aprovechando las cadenas de ataque de múltiples fases, evolucionando tácticas, técnicas y procedimientos (TTP) y desplegando malware adicional. Se espera que estos ataques continúen durante 2023.

**Malware antes que ransomware**

De acuerdo con los datos de CTIR, el malware fue la principal amenaza del segundo trimestre de 2022 representando el 20% de las amenazas observadas, desplazando al ransomware que había tenido esa posición durante más de un año. Se estima que la amenaza de los commodity loaders siga siendo alta en el futuro ya que son herramientas exitosas confiables para los ciberdelincuentes por motivos financieros y que han demostrado ser resistentes a las interrupciones de botnets y las soluciones de ciberseguridad. Dado que continuamente se lanzan nuevas familias de malware, sólo podemos confirmar que esto es un reflejo de que los ciberdelincuentes seguirán usando este tipo de amenazas.

También se estima que la botnet Trickbot se mantendrá activa debido al impacto global del malware y la venta de acceso a las redes comprometidas y por ello es una amenaza potencialmente grave que debe seguir monitoreándose.

Para concluir, las amenazas que están enfrenando empresas e individuos siguen siendo tan graves como se vio en 2022 y el entorno geopolítico que operan los adversarios se ha vuelto más completo. 

**Puntos a considerar:** 

1.	La flexibilidad y adaptabilidad de los principales actores de amenazas significa que el contexto importa más que nunca. Los ciber defensores deben comprender las tendencias geopolíticas que impulsan la actividad de amenazas y contar con metodologías exhaustivas para el seguimiento de actores, así como con procesos de inteligencia de amenazas para documentar el comportamiento en evolución de estos adversarios. 

2.	A medida que los adversarios adaptan su comportamiento y herramientas en respuesta a las detecciones, los ciber defensores deben pensar en construir un ecosistema de seguridad sólido y garantizar las soluciones de ciberseguridad sean difíciles de desinstalar y estén completamente implementadas. 


3.	En tercer lugar, con la cantidad de amenazas que enfrentan las empresas, las alertas de seguridad deben diseñarse para proporcionar un contexto esencial sobre la amenaza, incluidas las evaluaciones de gravedad y las recomendaciones de remediación para evitar una fatiga por exceso de alertas. 

A medida que los actores de amenazas aumentan en sofisticación, para crear ciber-resiliencia, las empresas deben implementar una mentalidad de "no si, sino cuándo" con respecto a este punto, y pensar en formas de dificultar las cosas para el adversario una vez que están dentro de una red, desarrollando planes de respuesta ante incidentes y evaluando diferentes escenarios de amenazas que permitan afinar los procesos.

Aunque la historia de 2022 revela una serie de desafíos significativos, también muestra la determinación y la capacidad de los ciber defensores. Un ejemplo es el trabajo que Cisco Talos ha hecho en Ucrania y que demuestra el poder que los ciber defensores pueden ejercer cuando trabajan juntos en una misión común para el bien. 

![](https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Yair-Lelis-p.jpg)


<table style="height: 42px;" width="569">
<tbody>
<tr>
<td style="text-align: justify;"><sub><strong>Nuestras noticias también son publicadas a través de nuestra cuenta en Twitter <a href="https://twitter.com/itnewslat?lang=es">@ITNEWSLAT</a> y en la aplicación <a href="https://squidapp.co/en/">SQUID</a></strong></sub></td>
</tr>
</tbody>
</table>

<img src="https://tracker.metricool.com/c3po.jpg?hash=56f88a41e39ab42c063cc51676587a04"/>