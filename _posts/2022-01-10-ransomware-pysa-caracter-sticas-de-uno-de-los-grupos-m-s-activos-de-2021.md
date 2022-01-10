---
layout: posts
color-schema: red-dark
date: '2022-01-10 09:23 -0400'
published: true
superNews: false
superArticle: false
year: '2022'
title: 'Ransomware PYSA: características de uno de los grupos más activos de 2021'
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/1024x680/Seguridad-Informatica-g.jpg
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Seguridad-Informatica-p.jpg
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
week: '2'
---
- ESET analizó uno de los grupos más activos en 2021 que entre sus víctimas tiene a organizaciones de Argentina, Brasil, Colombia y México.

ESET, compañía líder en detección proactiva de amenazas, analiza PYSA (acrónimo de Protect Your System Amigo), un malware de tipo ransomware, focalizado en secuestrar los archivos del equipo infectado cifrándolos y solicitando el pago de un rescate, generalmente en criptomonedas. Además, implementa técnicas para extorsionar a la víctima que no acceda al pago, como la exfiltración de los archivos y el cold-calling (llamadas telefónicas presionando a las compañías). Entre sus víctimas tiene a organizaciones de Argentina, Brasil, Colombia y México.
 
El ransomware PYSA, es una amenaza que opera bajo el modelo de Ransomware-as-a-Service (RaaS,) que surgió en diciembre del 2019 y que tomó notoriedad durante fines del 2020 como muchas otras amenazas. El hecho de que funcione como un RaaS implica que los desarrolladores de este ransomware reclutan afiliados que se encargan de la distribución de la amenaza a cambio de un porcentaje de las ganancias que obtienen de los pagos que realizan las víctimas para recuperar sus archivos del cifrado.
 
PYSA cayó en la mira de instituciones como el FBI y la agencia de ciberseguridad de Francia por las víctimas de alto calibre que fueron afectadas: Instituciones educativas de todos los niveles, como la Universidad Autónoma de Barcelona y otras universidades, así como agencias gubernamentales europeas, grandes proveedores del sector salud, entre otros. “Este perfil de los blancos de ataque se debe, probablemente, a que las víctimas están más inclinadas a querer recuperar sus archivos a toda costa (y, por lo tanto, acceder al pago) aún si no son compañías con un gran capital.”, comenta Martina Lopez, Investigadora de Seguridad Informática de ESET Latinoamérica.
 
Los operadores detrás de PYSA cuentan con un sitio en la Dark web que se actualiza con información de sus víctimas más recientes, así como los archivos exfiltrados de aquellas compañías que no hayan realizado el pago. Según Darktracer, en noviembre de 2021 acumulaba un total de 307 víctimas, de las cuales 59 se registraron ese mismo mes. Revisando los nombres de las víctimas en su sitio, identificamos organizaciones de España y de algunos países de América Latina, como Argentina, Brasil, Colombia y México.
 
A diferencia de otras familias de ransomware conocidas, PYSA no se aprovecha de vulnerabilidades técnicas de manera automatizada. Por el contrario, los ataques buscan obtener acceso a los sistemas de su víctima generalmente mediante:
- Correos electrónicos con phishing elaborados a medida del objetivo (spearphishing).
- Ataques de fuerza bruta contra sistemas desprotegidos con el protocolo RDP expuestos públicamente.

 
Además, y previo a la descarga del ransomware en el sistema de la víctima, los operadores detrás de PYSA utilizan herramientas relacionadas al pentesting para realizar tareas de reconocimiento dentro de los sistemas para recolectar otras credenciales, escalar privilegios, moverse lateralmente dentro de la red comprometida, etc.
 
Al ejecutarse, PYSA crea un mutex para asegurarse que no haya otras instancias del ransomware corriendo en el mismo equipo. Si este ya existe, la amenaza finaliza su ejecución para prevenir un posible doble cifrado de los archivos de la víctima. De continuar su ejecución, la amenaza sigue una lista de pasos muy específica:
- Crea hilos de ejecución que se encargarán del mecanismo de cifrado.
- Modifica de los registros del sistema para que la nota de rescate que se muestra a la víctima se abra cada vez que el equipo inicia.

- Prepara un script, llamado update.bat, para luego remover cualquier rastro de la amenaza en materia de archivos.

- Examina el sistema de archivos del equipo y genera dos listas, llamadas Allowlist y blacklist. En la primera, se incluyen archivos cuyas extensiones coincidan con una larga lista de extensiones interesantes, como .doc, .db, .zip, entre otros, y sean de mayor tamaño a 1 KB. En la segunda, se incluyen directorios críticos para el funcionamiento del sistema (como “C:\Windows”), ya que cifrarlos dificultaría el posible descifrado por parte de los atacantes. Al finalizar, todo archivo o directorio que no esté incluido en ninguna de las dos listas es marcado como “Allow”.
- Cifra el contenido de la lista “Allowlist” y no modifica aquellos archivos en la blacklist.

 
Como toda amenaza, existen recomendaciones para prevenir o aminorar las consecuencias de un ataque de este ransomware. Desde ESET aconsejan:
 
- Evitar abrir comunicaciones sospechosas que lleguen a través del correo electrónico o mensaje en redes sociales, y no interactuar con archivos o sitios adjuntos a las mismas.
- Configurar correctamente los protocolos de escritorio remoto (RDP), e inhabilitar aquellos que no sean necesarios.
- Implementar contraseñas fuertes y el doble factor de autenticación en todas las tecnologías que sea posible para evitar ataques de fuerza bruta.
- Descargar programas y archivos de fuentes oficiales y confiables.
- Utilizar una solución de seguridad de buena reputación, y mantenerla actualizada.
- Realizar backups de la información crítica o irremplazable de manera periódica.

 
“En caso de ser víctima de una infección con ransomware, no se recomienda contactar a los cibercriminales ni realizar el pago solicitado, ya que no hay garantías de que los cibercriminales tengan la llave para descifrar los archivos, ni que estén dispuestos a hacerlo.”, agrega Lopez de ESET Latinoamérica.

![](https://raw.githubusercontent.com/itnewslat/assets/master/img/540x320/Seguridad-Informatica-p.jpg)

<table style="height: 42px;" width="569">
<tbody>
<tr>
<td style="text-align: justify;"><sub><strong>Nuestras noticias también son publicadas a través de nuestra cuenta en Twitter <a href="https://twitter.com/itnewslat?lang=es">@ITNEWSLAT</a> y en la aplicación <a href="https://squidapp.co/en/">SQUID</a></strong></sub></td>
</tr>
</tbody>
</table>

<img src="https://tracker.metricool.com/c3po.jpg?hash=56f88a41e39ab42c063cc51676587a04"/>