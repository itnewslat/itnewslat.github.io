---
layout: posts
color-schema: red-dark
date: '2019-07-12 10:27 -0400'
published: false
superNews: false
superArticle: false
year: '2018'
title: Avast observa un aumento en secuestros cibernéticos DNS en Brasil
---
**Routers vulnerables son comprometidos para re-direccionar el tráfico web de los usuarios a sitios web de phishing, instalar scripts de cifrado o servir publicidad maliciosa**

Avast [LSE: AVST], el líder mundial en productos de seguridad digital, bloqueó en lo que va del año a más de 4.6 millones de intentos de ataques de falsificación de solicitudes en sitios (CSRF) en Brasil. Los ciberdelincuentes utilizan ataques CSRF para ejecutar comandos sin el conocimiento de los usuarios, en este caso para modificar de manera silenciosa la configuración de DNS de los usuarios para realizar ataques de phishing y criptominio, o ataques a través de anuncios maliciosos. Los kits de explotación de enrutadores conocidos utilizados para atacar a los enrutadores brasileños son GhostDNS, Novidade y, en abril de 2019, Avast detectó SonarDNS.

**El secuestro de DNS lleva a ataques de phishing**

Un ataque CSRF de enrutador generalmente se inicia cuando el usuario visita un sitio web comprometido con publicidad maliciosa (malvertising), que se sirve utilizando redes publicitarias de terceros en el sitio. Avast observa con frecuencia infecciones maliciosas en sitios web locales brasileños que albergan contenido para adultos, películas ilegales o deportes. Solo visitando un sitio comprometido, la víctima es redirigida a una página de inicio del kit de exploits de enrutador, iniciando el ataque en su enrutador automáticamente, sin la interacción del usuario, en el fondo.

Los llamados kits de explotación pueden atacar con éxito un router, ya que muchos de ellos están protegidos con contraseñas débiles. Lo primero que hacen es encontrar la IP del enrutador en la red, luego intentan adivinar la contraseña usando varias credenciales de inicio de sesión. Aquí está la lista de las principales contraseñas utilizadas en el kit de explotación:

- **admin**:admin
- **admin**:
- **admin**:12345
- **Admin**:123456
- **admin**:gvt12345
- **admin**:password
- **admin**:vivo12345
- root:root
- super:super


Como una de las consecuencias, el router se reconfigura para usar servidores DNS falsos, que redirigen a las víctimas a páginas de phishing que se parecen mucho a los sitios reales de banca en línea. Recientemente, Netflix se convirtió en un dominio popular para secuestradores de DNS.
Los datos de Avast muestran que los sitios web que pertenecen a las siguientes organizaciones activas en Brasil son secuestrados con mayor frecuencia:
●	Santander (24%)
●	Bradesco (19%)
●	Banco do Brasil (13%)
●	Itau BBA (13%)
●	Netflix (11%)
●	Caixa (10%)
●	Serasa Experian (10%)
"Las instituciones afectadas son un gran objetivo ya que son populares en sus países, y el problema es que hay poco que puedan hacer para evitar ser víctimas, además de alertar a sus clientes, ya que los sitios de phishing están fuera de sus dominios", dijo David Jursa. Analista de Inteligencia de Amenazas en Avast.
Anuncios maliciosos y ataques decriptogramas.
Aparte del phishing, los ciberdelincuentes utilizan el secuestro de DNS para reemplazar los anuncios legítimos con anuncios maliciosos. Por ejemplo, los ciberdelincuentes pueden secuestrar plataformas publicitarias, como Outbrain, que pueden integrarse en sitios web para publicar anuncios a los visitantes de aquellos sitios web. Si la dirección del servidor de la plataforma publicitaria es secuestrada en el enrutador de los usuarios, el usuario verá anuncios maliciosos, por ejemplo, para engañarlos para que descarguen más malware o para dirigirlos a sitios web no solicitados con contenido sospechoso o ilegal.
Además, los investigadores de amenazas de Avast también han visto cómo los cibercriminales utilizan el secuestro de DNS para enviar criptogramas malintencionados a los navegadores de los usuarios, por lo que las máquinas de los usuarios serán comprometidos para extraer criptomonedas, lo que puede generar facturas de energía elevadas y un ciclo de vida más corto.
Mantenerse protegido
David Jursa continuó: “Los usuarios deben tener cuidado al visitar el sitio web de su banco o de Netflix, y asegurarse de que la página tenga un certificado válido al buscar el candado en la barra de URL del navegador. Además, los usuarios deben actualizar con frecuencia el firmware de su router a la última versión y configurar las credenciales de inicio de sesión del enrutador con una contraseña segura ". La gente puede averiguar si su enrutador está infectado al usar la función Avast Wi-Fi Inspector, que es parte de Avast Free Antivirus y todas las versiones de antivirus pagadas de Avast, que también incluye Avast Web Shield, un escudo central que protege a los usuarios de CSRF los ataques.
Acerca de Avast:
Avast (LSE: AVST) es el líder mundial en productos de seguridad digital. Con más de 400
millones de usuarios en línea, Avast ofrece productos bajo las marcas Avast y AVG que
protegen a las personas de las amenazas en Internet y la evolución del panorama de
amenazas en IoT. La red de detección de amenazas de la compañía se encuentra entre las
más avanzadas del mundo, y utiliza el aprendizaje automático y las tecnologías de
inteligencia artificial para detectar y detener amenazas en tiempo real. Los productos de
seguridad digital de Avast para dispositivos móviles, PC o Mac son los mejor clasificados y
certificados por VB100, AV-Comparatives, AV-Test, OPSWAT, ICSA Labs, West CoastLabs
y otros. Visite: www.avast.com.

