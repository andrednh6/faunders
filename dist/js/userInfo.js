let u_name = sessionStorage.getItem("name");
let retrieved_answers = sessionStorage.getItem("answers");
let answers2 = JSON.parse(retrieved_answers);

//falta integrar answers2 con la combinacion de posibles resultados disponibles para despues mostrarlos los ejemplos de esa combinacion 


document.querySelector(".u_name").innerHTML = u_name;
//document.querySelector(".answers").innerHTML = answers2[1];

//aqui agregamos las respuestas que posteriormente seran comparadas

let cod0 = [
"Personas",
"Producto físico",
"Sí",
"Pronto",
"Mi empresa",
"No necesita",
"Arquipets",
"https://www.arquipetsperu.com/",
"Es una empresa que elabora y vende torres y circuitos personalizados para gatos con diseños innovadores.<br>A mayo del 2021 cuentan con 25 mil seguidores en su página de Instagram.",
"1. Empezó como un hobby: Consiguieron a un escultor de madera y diseñaron un primer producto (una torre para gatos)<br>2. Por 4 años, quienes les pedían que les diseñen una torre, ellos la hacían. Las vendían sólo a un precio suficiente para sustentar económicamente ya que lo hacían por amor a los gatos. Ya con experiencia y cuando notaron que cada vez la gente tenía más mascotas<br>3. Una persona conocida les pidió un nuevo producto que finalmente vendieron a la mitad del costo. Quedó super bien, lo filmaron y a partir de allí empezaron el trabajo de redes sociales para comercializar este nuevo producto más avanzado.<br>4. Cuando otras personas pedían diseños personalizados, descubrieron toda una gama de necesidades no contempladas y en base a ello llevaron nuevos diseños que iban a servir a los gatos. Los diseños personalizados empezaron dibujándose de menor a mayor calidad",
"https://www.instagram.com/tv/CMBOXKmJ2Op/?utm_source=ig_web_copy_link"
]

let cod1 = [
"Personas",
"Producto físico",
"Sí",
"Pronto",
"Terceros (conexión)",
"No necesita",
"Desmadres",
"https://www.desmadres.shop/",
"Es una plataforma que ofrece artículos de maternidad de segunda mano en excelentes condiciones (¡sin desmadres!).<br>A mayo 2021 cuentan con 17 mil seguidores en su página de Instagram",
"1. Al inicio no cobraron. Que sea super atractivo para lograr llegar rápido a que la gente lo usara y conociera.<br>2. Primero obtuvieron oferta (los productos en sí) compartiendo un formulario por Google y compartirlo por WhatsApp a un segmento específico. Gracias al interés vía muchos chats de madres, muy de boca a boca, fueron creciendo la cantidad de productos<br>3. Luego, llevaron un inventario sobre dónde estaban estos productos de terceros y los mostraban por Instagram para adquirir clientes, ofreciendo la conexión de ambas partes sin costo relacionado. Las aprobaciones iniciales fueron por ellas como usuarias (madres).<br>4. Luego de tener varias transacciones, empezaron a cobrar comisiones por ello<br>5. Finalmente, pasaron a una plataforma web para agilizar la visualización de productos y medios de pago",
"https://www.instagram.com/tv/CL-qVbSl1Xa/?utm_source=ig_web_copy_link"
]

let cod2 = [
"Personas",
"Producto físico",
"No",
"Pronto",
"Mi empresa",
"No necesita",
"Ekolo",
"https://ekolo.pe/",
"Es una empresa que busca reducir la acumulación de plástico en el planeta ofreciendo productos ecológicos hechos con materias primas naturales y que sean biodegradables y compostables al final de su ciclo de vida. Pasaron por el programa de Aceleración de Emprende UP.",
"1. Dado que requieres cierto volumen para iniciar producción y no desperdiciar material, primero se centraron en un sólo producto para empezar toda la línea: Las bolsas biodegradables que eran las más conocidas<br>2. Estas primeras versiones se basaron en otros productos comercializados en el extranjero. Consiguieron bastante información con contactos del exterior y pidieron unas muestras para conversar con sus usuarios (amigos y familiares al inicio).<br>3. Preguntaban si usarían la bolsa y qué pensaban. Conforme más gente afirmaba, decidieron lanzarse a comercializar.<br>4. Identificaron cuáles eran los tamaños más usados en departamentos y casas para tratar de minimizar el riesgo en las primeras compras.<br>5. Ya conociendo muy bien los productos, y difundiendo entre redes de los fundadores, iniciaron las primeras ventas de manera tradicional.",
"https://www.instagram.com/tv/CLso1jOpcdf/?utm_source=ig_web_copy_link"
]

let cod3 = [
"Personas",
"Producto físico",
"No",
"Pronto",
"Mi empresa",
"Se necesita expertos en el tema",
"Mamalama",
"http://mamalamasnacks.com/",
"Es una empresa que produce snacks saludables hechos de superalimentos peruanos con un alto valor nutricional.<br>Ellos pertenecen a la sexta generación de StarUp Perú.",
"1. Era importante desarrollar un producto con un estandar de calidad alto (debía ser rico y además saludable): Para ello, consiguieron entre sus contactos a una líder de desarrollo de productos de una empresa grande y empezaron un primer proyecto de desarrollo.<br>2. Buscaron mucha información y se centraron en un primer producto: Las barras energéticas, que utilizarían ingredientes peruanos, tienen la mayor asociación a producto saludable, lo cual les ayudarían a posicionar la marca (que fueron creando) dentro esta categoría.<br>3. En barras, identificaron segmentos y definieron la oportunidad del mercado. Luego de definir lo más diferenciador, iniciaron un desarrollo<br>4. Ofrecieron su producto a amigos del público objetivo para determinar cuál era la percepción del producto versus la competencia<br>5. Siempre conversaron con los distribuidores más grandes: Accedieron luego de haber estado en varios puntos de venta especializados",
"https://open.spotify.com/episode/3KQgV12eseUtrVLPbUxtVu?si=f028d40d7050425a"
]

let cod4 = [
"Personas",
"Producto físico",
"No",
"Pronto",
"Terceros (conexión)",
"No necesita",
"Conectagro",
"https://www.linkedin.com/company/conectagro/about/",
"Es una plataforma de comercio electrónico al por menor que conecta productores agrícolas y consumidores que compren estos productos.<br>Ellos pertenecen a la cuarta generación de StartUp Perú",
"1. Testearon en una campaña para recibir y entender a los registrados: De dónde vienen y qué necesidades tienen<br>2. Empezaron consiguiendo a los ofertantes de los productos que se iban a comercializar Para ello, crearon un prototipo que permitía que los usuarios puedan poner título, descripción, subir sus productos y ponerles precio.<br>3. Crearon capacitaciones para que los ofertantes aprendan a utilizar el prototipo. Con ellos, aprendieron mucho sobre la industria<br>4. Para el cliente final, fueron educándolos sobre el valor nutricional de los productos y sobre la plataforma que tenían.",
"https://open.spotify.com/episode/6k7DG4kidxRxWUaDS4wqfU?si=cb110ee9634749cd"
]

let cod5 = [
"Empresas peq o med",
"Producto físico",
"Sí",
"Pronto",
"Mi empresa",
"Se necesita expertos en el tema",
"Bioflash",
"https://www.facebook.com/BioflashPeru/?ref=page_internal",
"Es un empresa que desarrolla un acelerador microbiano elaborado a partir de residuos y reduce el tiempo de descomposición de residuos orgánicos a un tercio del tiempo habitual. Ellos pertencen a la séptima generación de StartUp Perú.",
"1. Emplearon una tecnología de Japón y la adaptaron con las necesidades de Perú: Entre pruebas y errores por 2 años hicieron diferentes tipos de lotes potenciados por el conocimiento del equipo de fundadores.<br>2. Dada la conciencia ambiental baja, la tecnología era percibida como muy cara lo cual era un factor importante en la decisión de compra <br>3. Dado que eran difíciles de venderles ya que sólo accederían luego de credenciales importantes, con el producto avanzado, vendieron primero a contactos cercanos de empresas objetivo para conocer sus comentarios (quienes también ayudaban a cómo mejorar la propuesta comercial, en lo que el equipo no tenía especialidad). También entregaban facilidades como seguimientos y manuales para mejorar el compostaje.<br>4. Ya con las primeras empresas mostraban sus credenciales de clientes para mostrar más credibilidad y acceder a empresas más grandes",
""
]   

let cod6 = [
"Personas",
"Producto + servicio",
"No",
"Pronto",
"Mi empresa + terceros",
"Se necesita expertos en el tema",
"Outfie",
"https://www.myoutfie.com/",
"Es una plataforma de personal shopping que brinda servicios de asesoría de imagen presencial u online.<br>Ellos pertenecen a la segunda generación de StartUp Perú.",
"1. Crearon un e-commerce para recibir clientes y explorar las necesidades específicas de las usuarias y una fue las asesorías de imagen<br>2. Identificaron las decisiones que tendrían para tener una asesoría de imagen online (dificultad de subir fotos, quién asesoraba, entre otros)<br>3. Convocaron a expertos y les brindaban autorización para ser asesores en la plataforma<br>4. Crearon dos experiencias: automatizada y premium, vía asesoras expertas que recomienden los productos del e-commerce<br>5. Finalmente ofrecieron la experiencia a cercanos para tener los primeros clientes a la vez que recibían comentarios sobre constructivos",
"https://open.spotify.com/episode/5Bf69s64OOVUIAIUBf8mCi?si=135df709395048bd"
]

let cod7 = [
"Personas + ayuda social",
"Producto físico",
"No",
"Pronto",
"Mi empresa",
"No necesita",
"Antarki",
"https://www.instagram.com/antarki.eco/?hl=es-la",
"Es una empresa social que crea parques productivos para poder generar espacios sostenibles junto con los vecinos y poder plantar en estos parques la materia prima de sus productos. Ellos pertenecen a la sexta generación de StartUp Perú.",
"1. Se centraron en un producto disponibles en el mercado y relacionados a la categoría en la que querían ayudar. Este paso les permitió aprender sobre aspectos básicos en un negocio de producción y comercialización de productos.<br>2. Se expandieron a productos más específicos y las características que deberían tener en un limitado espacio de exhibición y de reconocimiento de marca y concepto (y que podía sea visual una vez que se use para poder mostrarse más): Los lentes de sol y monturas<br>3. Combinaron este producto y la forestación a un nuevo modelo de negocio para que los arboles plantados crezcan en zonas por forestar. El ciclo Antarki mejora los barrios, generando espacios colaborativos, como también rentabilidad para el producto que financia las operaciones.<br>4. Fueron a la comunidad con la que tenían más afinidad a no sólo hacer una actividad sino proceso continuo de relación y generar confianza",
"https://open.spotify.com/episode/26bj2rDMfhbc0V3Vrlg0jp?si=suPUQxx-TAOHJFdTzjQj_Q"
]

let cod8 = [
"Personas",
"Producto + servicio",
"Sí",
"Pronto",
"Terceros (conexión)",
"No necesita",
"Somos Moto",
"https://somosmoto.pe/",
"Es una marketplace que conecta a usuarios que quieren comprarse una moto con toda la oferta de marcas, sus distribuidores e instuticiones financieras. Ellos pertenecen a la séptima generación de StartUp Perú.",
"1. Definieron atender primero al usuario que compraría el servicio, y la mejor manera de captarlos en volumen era desarrollar un catálogo virtual para luego ofrecer estos clientes a las marcas y concesionarios (y solucionar el problema de catálogos incompletos en la industria).<br>2. Desarrollaron diseños en InVision (prototipos) sobre cómo será la web y llamaron a usuarios para definir qué tipo de filtros de búsqueda preferían. Luego de validadar esto, desarrollaron la web y recibieron mucho volumen de clientes y el crecimiento fue orgánico. <br>3. Lograron iniciar marchas blancas con distribuidores de menores, proponiendo ser el brazo digital para llegar a estos nuevo usuarios digitales.<br>4. Nunca dejaron de tocar la puerta a los distribuidores grandes: Usaron credenciales de otros concesionarios para que se unan a la marcha.<br>5. Una vez que demostrado valor valor en marcha blanca y volverse indispensable, negociaron uno por uno el inicio del servicio pagado",
"https://open.spotify.com/episode/3Jawsg7fsffzDSG9FVcteC?si=ee8350c0c713462d"
]

let cod9 = [
"Personas",
"Servicio por única vez",
"Sí",
"Inmediato",
"Terceros (conexión)",
"Se necesita confianza",
"Yegoh",
"https://yegoh.com/",
"Es una plataforma que conecta a empresas de mudanza con personas que se quieren mudar.<br>Ellos pertenecen a la séptima generación de StartUp Perú",
"1. Identificaron que lo más importante era que el camión llegue puntual y que las cosas lleguen bien del punto de partida al punto de destino. Ellos se encargaron de hacer esto de manera operativa. Por el lado de los choferes, buscaban servicios para vender<br>2. Fueron primero donde las empresas porque en ellos detectaron más dolores que en las personas que se iban a mudar dado que se les hacía difícil llegar al mercado (hacer a lo que se dedicaban). Consiguieron los datos de contacto de los choferes y las zonas en las que estaban.<br>3. Ya sabiendo que las mudanzas funcionaban, empezaron, y hasta el día de hoy, recibiendo pedidos de las personas y conectándolos operativamente con choferes que puedan realizar los servicios, y hacían seguimientos para asegurar la experiencia propuesta.<br>4. Poco a poco, reemplazaron procesos operativos con tecnología para obtener más ventas y dedicarle menos horas por cada venta realizada",
"https://open.spotify.com/episode/5Whuj7FDYrUzy4TWeIXNLo?si=c71c457138d94079"
]

let cod10 = [
"Personas",
"Servicio por única vez",
"No",
"Inmediato",
"Terceros (conexión)",
"Se necesita confianza",
"WePayU",
"https://www.wepayu.pe/",
"Es una plataforma que conecta a personas que hacen pagos en efectivo con personas que necesitan liquidez de su tarjeta de crédito.<br>Ellos pertencen a la séptima generación de StartUp Perú.",
"1. Primero captaron a estudiantes que representaban la oferta de dinero y que buscaban pagar sus boletas mensuales y tener un ahorro.<br>2. Ellos pagaban las boletas con su tarjeta de crédito para acumular dinero disponible y así poder atender a las personas que buscaban efectivo.<br>3. Identificaron que actualmente retirar efectivo en otros lugares a tasa de compras era desagradable. Por ello crearon una mejor experiencia.<br>4. Crearon una página donde explicaban la propuesta de valor y llegó el primer cliente con quien realizaron el proceso comercial y de manera operativa y presencial (con los datos de pago de la boleta del universitario en la web de la universidad).<br>5. Poco a poco fueron ganando credibilidad y la reflejaron también mostrando en su web quiénes ofrecían el servicio para evitar cualquier inseguridad. Así, reemplazaron las labores operativas por una experiencia más digital",
"https://open.spotify.com/episode/5rcid3ZMeY0VF4CZUkvVVh?si=a98b9c4506b14793"
]

let cod11 = [
"Personas",
"Servicio por única vez",
"No",
"Inmediato",
"Terceros (conexión)",
"Se necesita expertos en el tema",
"Fastfix",
"https://fastfix.pe/",
"Es una plataforma que ofrece un servicio de reparación de computadoras y teléfonos con un modelo de negocio on-demand y a domicilio.<br>Ellos pertenecen a la séptima generación de StartUp Perú.",
"1. Dado su conocimiento de los equipos, ellos mismos los llevaban hacia los proveedores que conocían, verificaban que el producto esté reparado y finalmente lo devolvían. Fue muy importante la interacción con los usuarios para conocerlos más y entender sus decisiones. <br>2. Identificaron presencialmente que la atención al cliente era el principal valor diferencial: La manera de contar los puntos sensibles, decisiones y el manejo de contingencias. Luego de comunicar el diagnóstico final, el cliente aprueba el producto.<br>3. Su servicio de alto valor motivó que los clientes los compartieran y que los contacten convencidos luego del servicio entregado<br>4. Luego tercerizaron el servicio de logística siendo muy meticulosos en los proveedores que eligieron<br>5. Aplicaron tecnología crear un diseño importante para que los usuarios pre-entiendan el problema y cotizar el servicio antes de la reparación.",
"https://open.spotify.com/episode/5TJ7ILqxnLXP3EZRNLDMkn?si=d7a5751053fb4905"
]

let cod12 = [
"Personas",
"Servicio por única vez",
"Sí",
"Pronto",
"Mi empresa",
"Se necesita confianza",
"Sin envolturas",
"https://sinenvolturas.pe/",
"Es una plataforma que recauda dinero a través de listas de regalos de bodas para que los novios puedan utilizar estos regalos de la forma, en el momento y en el lugar que deseen. Ellas pertenecen a la séptima generación de StartUp Perú.",
"1. La necesidad principal era mejorar el flujo de cara a los usuarios. Por ello, identificaron otras plataformas en el extranjero y la oportunidad de adaptarlas al Perú para crear el prototipo tecnológico. Incluso utilizaron estas opciones para modificar funcionalidades<br>2. Crearon un diseño que transmita la propuesta y armar listas de regalos, convocaron amigos/as novios/as para unirse a una marcha blanca<br>3. Recibían a usuarios y realizaban las operaciones manualmente: comprobar las transferencias y emitir boletas se automatizarían más adelante<br>4. Interactuaron con usuarios en la práctica para entender los puntos clave de interacción con usuarios, tales como guiarlos, darles recomendaciones e incluso ayudarles en procesos posteriores a la boda (que usualmente demandan mucho tiempo). <br>5. Finalmente, luego de obtener ventas en esta marcha blanca, abrieron la plataforma abiertamente para obtener las primeras ventas digitales",
"https://open.spotify.com/episode/64mWiXu7wt83CD2L1Jq9Hj?si=949abbc27d98479a"
]

let cod13 = [
"Personas",
"Servicio por única vez",
"Sí",
"Pronto",
"Mi empresa",
"Se necesita expertos en el tema",
"Legaly",
"https://www.legaly.pe/",
"Es una startup que digitaliza y simplifica la experiencia legal y permite ahorrar en trámites y servicios legales.<br>Ellos pertenecen a la séptima generación de StartUp Perú.",
"1. Decidieron empezar de manera económica y rápida: Realizaron formularios en papel que representaban los datos necesarios para constituir un negocio. El objetivo era comprobar si el orden de las preguntas era adecuado, los términos eran correctos y no generaran confusión<br>2. El mejor canal fue el boca a boca: El primer cliente fue un amigo que buscaba empezar un negocio. Realizaron este servicio manualmente y al costo. La transacción de dinero le dio cierto grado de madurez y seriedad tanto para el que compra el servicio como el que brinda el servicio.<br>3. Pasaron de formularios físicos a en línea con opción de pago. Un día, una persona pagó por la plataforma y así validaron los procesos que aún estaban pendientes (comentarios constructivos de este cliente) y usaron este credencial para continuar ventas<br>4. Continuando la transformación digital hacia una plataforma que genera documentos de automáticamente que se envían a las notarías.",
"https://open.spotify.com/episode/1ozzLQRI8wZb5wpKoEMnbi?si=b2f3cf38f18b49ac"]

let cod14 = [
"Personas",
"Servicio por única vez",
"No",
"Pronto",
"Terceros (conexión)",
"Se necesita confianza",
"Rebajatuscuentas",
"https://rebajatuscuentas.com/pe",
"Es un marketplace para encontrar mejores tasas de préstamos hipotecarios y hacer el proceso más rápido y eficiente. Ellos pertenecen a la séptima generación de StartUp Perú.",
"1. Se centraron en la experiencia de usuario para poder tener clientes y así los bancos les hagan caso y luego continuar agregando más cosas.<br>2. Lo primero a probar era que las personas dieran información sensible a través de la web. Por ello crearon un formulario muy sencillo en Wordpress y saber si los bancos iban a interesarse. Probaban todo de manera manual para validar lo que el usuario y los bancos necesitaban<br>3. Las personas dejaban sus teléfonos y los llamaban para entender sus miedos y cuáles cosas eran fáciles y cuáles no. Luego, utilizaron herramientas para conectar los formularios o sistemas de automatizaciones. <br>4. Tuvieron que aprender cómo pedir documentos, cómo hacer evaluaciónes de riesgos y qué pedirle al usuario y cómo filtrarlo crediticiamente<br>5. Para el lado de los bancos, tocaron muchas puertas con clientes hasta que finalmente los atendían.",
"https://open.spotify.com/episode/5WL24Jd03nykZaJ4PVNd2g?si=2f53cf323c17485a"
]

let cod15 = [
"Personas",
"Servicio por única vez",
"Sí",
"Eventualmente",
"Terceros (conexión)",
"No necesita",
"Queestudiar",
"https://queestudiar.la/",
"Es una plataforma que conecta a estudiantes con instituciones educativas y los ayudan con su desarrollo profesional. Ellos pertenecen a la sexta generación de StartUp Perú.",
"1. Identificaron el reto vía instituciones y estudiantes: diseñar una experiencia que los atrape y no sea algo que puedan encontrar ellos mismos.<br>2. Convocaron a hermanos de sus amistades para conocer más la necesidad y realizaban asesorías vocacionales conectándolos con mentores<br>3. En la práctica, entendieron en qué momentos y cómo el estudiante tomaba decisiones. Luego, crearon una plataforma que reflejara esta experiencia dinámica y adaptaron estándares a los estudiantes. También identificaron qué puntos quedaban aún inconclusos con el mentor<br>4. Migraron a instituciones educativas: Comenzaron con un nicho de clientes (carreras de belleza), luego llamaban a instituciones relacionadas a esto para no sólo ofrecerles potenciales clientes sino también el acompañamiento que significa también un ahorro para las instituciones.<br>5. Llegaron a colegios (vía contactos) a proponer mejorar el flujo comercial y entregar el (finalizado) dashboard de seguimiento a estudiantes",
"https://open.spotify.com/episode/0i8OQ9Jr0D3kFjpYsC5TzF?si=556ac0a580de43e2"
]

let cod16 = [
"Personas",
"Servicio constante",
"Sí",
"Tiempo real",
"Mi empresa",
"Se necesita expertos en el tema",
"Hospitapp",
"https://www.hospitapp.pe/",
"Es una empresa de salud digital que brinda salud a través de tecnologías de comunicación.<br>Ellos pertenecen a la séptima generación de startup Perú.",
"1. Con su conocimiento en la materia de salud, y para diseñar primero una experiencia agradable a los pacientes que simulen los consejos de la futura aplicación, convencieron a doctores entre sus contactos para redirigir pacientes a su marca y para un servicio de acompañamiento digital.<br>2. Enviaban mensajes manuales e individuales a los pacientes y también utilizaban herramientas pre existentes como Skype y WhatsApp.<br>3. Para aumentar el flujo de pacientes, debían convencer a más doctores (solicitando credibilidad para poder derivar a sus pacientes) y para ello tuvieron que avanzar de manera importante en el lado tecnológico.<br>4. Luego de probar muchos modelos de negocio entre cobrar a las personas por distintos motivos, se conectaron con empresas que proveían productos para la salud para cobrar comisión vía intermediación, primero cadenas pequeñas de farmacias y establecimientos de salud.",
"https://open.spotify.com/episode/7DJQUgoownOSnnzsOffRNu?si=f35106e4e7ed4280"
]

let cod17 = [
"Personas",
"Servicio constante",
"No",
"Tiempo real",
"Mi empresa",
"No necesita",
"Bombo",
"https://bombo.pe/",
"Es un daily fantasy que le da la opción a las personas de armar sus equipos de varias ligas entre las eliminatorias, copa américa y ligas europeas. Ellos pertenecen a la séptima generación de StartUp Perú.",
"1. Crearon la tecnología más simple posible que cumpla con lo principal: Que funcione y pueda enseñarle al usuario qué cosa es el fantasy.<br>2. En las primeras versiones ellos subían los resultados, puntajes, goles, tarjetas, jugadores era un Excel de hacerlo de manera manual. Luego recién fueron contando cuánta gente ingresaba y todas las métricas de cada semana<br>3. Desde el inicio cobraron y llegaron vía amigos que se pasaron la voz. Posteriormente fueron probando vía pauta publicitaria y también mediante influencers en los medios, apalancándose en el fútbol que es el deporte más visto en todo el Perú<br>4. Poco a fueron fueron reemplazando las tareas operativas. Ahora todo se actualiza de manera automática y a tiempo real<br>5. Por esta propuesta innovadora y vía contactos pudieron llegar a inversionistas quienes aportaron en todas las aristas para crecer el negocio",
""]

let cod18 = [
"Personas",
"Servicio constante",
"No",
"Inmediato",
"Terceros (conexión)",
"No necesita",
"Monkeyfit",
"https://www.monkeyfitpass.com/",
"Es una plataforma que ofrece programas de wellness corporativo para que colaboradores puedan entrenar en distintos centros con un solo pago mensual. Iniciaron con planes orientados a personas y luego programas corporativos. Ellos pertenecen a la sexta generación de StartUp Perú",
"1. Entendieron plataformas de afuera y buscaron validarlo tanto con locales y con usuarios. Fueron a los mismos locales para hacer preguntas, tener entrevistas y obtener contactos para futuras conexiones con usuarios. Incluso adquirieron plataformas en el exterior.<br>2. La acción principal eran la cantidad de reservas, e identificaron que la manera más fácil de alguien para hacer una reserva era via WhatsApp y determinaron que no debían desarrollar una mensajería para ello. Todo el proceso de venta y coordinación lo hacían vía WhatsApp. <br>3. Crearon un mapa con locales afiliados, los horarios y fotos. Nunca tuvieron un problema para tener comunicación con usuarios.<br>4. El primer cliente fue un amigo que llegó de boca a boca y cobraron desde el inicio ya que significa un nivel de compromiso para hacer deporte<br>5. Identificaron qué priorizar conversando y notándolo al avanzar. Luego, continuaron desarrollos tecnológicos y lanzaron el sistema con locales",
"https://open.spotify.com/episode/5Bmxf3jZm0GZEBMA9n40DR?si=31913e6bbbf54f9e"
]

let cod19 = [
"Personas",
"Servicio constante",
"Sí",
"Pronto",
"Terceros (conexión)",
"Se necesita expertos en el tema",
"Likemytravel",
"https://www.likemytravel.com/",
"Es una plataforma que ayuda a viajeros a mostrar sus experiencias de viajes al mundo capacitándolos y para que puedan vivir de eso conectándolos con viajeros. Ellos pertenecen a la séptima generación de StartUp Perú",
"1. Vía grupos de Facebook compartían sus viajes y tips entre viajeros. Identificaron que la herramienta faltante era un blog (sí tenían instagram)<br>2. Identificaron que debían dejar claro a los viajeros el propósito de ayuda para que confíen en ellos, dejar su datos y luego su valioso contenido<br>3. Basados en el viaje del fundador, crearon un PowerPoint sobre cómo debería mostrarse el itinerario (debido a que los turistas cada vez quieren leer menos). Luego que recibieron respuestas de los viajeros, crearon un Wordpress que contenía esto y también mostraba el propósito.<br>4. Fueron representantes de sus viajeros frente a agencias de viajes online (OTAs): Habiendo contribuido a mejorar la habilidad y alcance de sus viajeros, entre más tráfico relacionado al contenido de ellos, más conversiones y comisiones vía las OTAs<br>5. Para continuar reclutando viajeros, ahora averiguan mucho sobre sus redes sociales e invitando a quienes tengan buen contenido",
""]

let cod20 = [
"Personas",
"Aprendizaje",
"Sí",
"Tiempo real",
"Terceros (conexión)",
"No necesita",
"Arcux",
"https://arcux.net/",
"Es una empresa de e-learning que produce y distribuye cursos en línea para satisfacer las necesidades de formación en la industria de la arquitectura y la construcción. Ellos pertenecen a la séptima generación de StartUp Perú.",
"1. Ya conociendo muy bien las necesidades de los estudiantes, dedicaron tiempo importante para aprender sobre marketing y programación<br>2. Desarrollaron una plataforma de aprendizaje que pueda cumplir con las expectativas de los usuarios. También crearon el primer curso gratuito según las necesidades más importantes que conocían de sus potenciales usuarios.<br>3. Compartieron la plataforma de manera gratuita en grupos específicos de estudiantes de arquitectura para captar usuarios y obtener feedback. Si bien esperaron a tener el desarrollo listo, lo cual fue arriesgado, tuvieron gran acogida de usuarios<br>4. Ampliaron su capacidad de recibir feedback positivo de los usuarios que notifican problemas y consultas y los fueron incorporando.<br>5. Finalmente crearon el primer curso pagado y lo compartieron entre sus grupos de usuarios para que poco a poco inicien las ventas orgánicas",
"https://open.spotify.com/episode/6nAsfI8IUc6lXA0I2NyMW5?si=998b9480d07b4a28"
]

let cod21 = [
"Personas",
"Empleo",
"Sí",
"Eventualmente",
"Terceros (conexión)",
"Se necesita expertos en el tema",
"Talently",
"https://talently.tech/",
"Es una aceleradora para las carreras del talento tech latinoamericano permitiendo a desarrolladores conseguir trabajos remotos en EEUU. Recientemente han ingresado al batch #11 de 500 startups, uno de los fondos de Venture Capital más importantes en Latinoamérica",
"1. Crearon una web informativa para validar los beneficios de un trabajo remoto en EEUU, las cuales obtuvieron de un programa con el cual conocían a los desarrolladores. Fueron específicos al diseñar la propuesta de valor para solucionar un gran problema de un nicho específico.<br>2. Lanzaron la convocatoria a desarrolladores y diseñaron el programa en base a sus comentarios. Usaron siempre herramientas ya existentes<br>3. Para captar más usuarios y seguir diseñando, participan en comunidades de Facebook, creando contenido para captar su interés<br>4. Enfocaron la propuesta B2B al ahorro de tiempo y dinero para acceder a recursos altamente competitivos de desarrollo en Latinoamérica<br>5. Al inicio buscaron empresas vía contactos. Luego de tocar muchas puertas y usando estrategias en LinkedIn, sólo algunas accedieron para empezar las conexiones: La primera se basó en el esfuerzo constante del desarrollador, con aprendizajes para potenciar las demás conexiones",
"https://open.spotify.com/episode/4T3zH5D6sJ2IF90HiRIjL3?si=383d6efca5bc488a"
]

let cod22 = [
"Personas",
"Empleo",
"No",
"Eventualmente",
"Terceros (conexión)",
"No necesita",
"WomanOnWork",
"https://www.linkedin.com/company/woman-on-work/",
"Es un marketplace que conecta talento profesional femenino con empresas que buscan avanzar proyectos específicos vía modalidad freelance.<br>Ellos pertenecen a la séptima generación de StartUp Perú.",
"1. Crearon una plataforma dirigida a mujeres para tener talento que ofrecer a las empresas. Explicaba el concepto y abría un espacio de registro<br>2. El formulario permitió clasificar sus necesidades y segmentar para saber qué acciones tomar dentro de cada grupo<br>3. Con una comunidad de profesionales, contactaron a empresas pequeñas y grandes vía referidos. Al ser un nuevo servicio, requería explicar lo más claro posible cara a cara (sin plataforma). En la fase inicial ellos iban, explicaban, entendían la necesidad y hacían búsqueda por ellos. <br>4. Luego de 1 año, entendieron cómo éstas harían búsquedas específicas. Crearon un motor para realizar búsquedas directas y en línea.<br>5. La primera conexión fue manual y sin costo a empresas que estaban seguros que podían ayudar. Luego utilizaron estas credenciales para iniciar ventas. Poco a poco, con credibilidad creada y aprendizajes en el camino, fueron reemplazando tareas operativas por tecnológicas",
"https://open.spotify.com/episode/4ft6gCs2UcSINpVsYByg0W?si=aeaf9cb468d745ec"
]

let cod23 = [
"Empresas peq o med",
"Servicio por única vez",
"No",
"Pronto",
"Mi empresa",
"No necesita",
"Mitienda",
"https://mitienda.pe/",
"Es una plataforma para crear tiendas virtuales, de implementación instantánea, facil de usar y permite a cualquier empresa tener su primera página web. Ellos pertencen a la sexta generación de StartUp Perú",
"1. Para ser accesible a pymes, priorizaron el catálogo a ofrecer y el carrito de compras (la pasarela de pago fue integración externa). <br>2. Identificaron categorías de productos y servicios y cada una tenía necesidades específicas: El cliente final pueda elegir su horario de entrega (conocieron las necesidades específicas de los comercios). En cambio, los servicios demandaban generación de tickets con QR.<br>3. Cada negocio e industria es una historia diferente, pero debían priorizar las funcionalidades más representativas para crecer las ventas del negocio. Sin embargo, los usuarios pudieron entender las herramientas inicialmente con limitaciones para poder utilizarlos de otra manera<br>4. Consiguieron sus primeros clientes dentro de otra alternativa de negocio enfocado en apoyo y comunicación para las pymes<br>5. Regalaron 4-5 tiendas a amigos y conocidos. Si bien no daban feedback constructivo, usaron estas ceredenciales para crecer en pymes.",
""]

let cod24 =[
"Empresas peq o med",
"Servicio constante",
"No",
"Tiempo real",
"Mi empresa",
"No necesita",
"Tukuy",
"https://tukuy.club/",
"Es una plataforma que le permite a las empresas e independientes cobrar sus ventas sin necesidad de tener una página web o dispositivo móvil. Ellos pertenecen a la séptima generación de StartUp Perú.",
"1. La primera versión buscaba probar que la nueva tecnología funcione, y la usaron ellos mismos con otro negocio.<br>2. Como los clientes hasta lo pedían como opción, decidieron alcanzar esta herramienta (en condiciones aceptables) a otras empresas y recibieron feedback sobre el diseño y personalización.También añadían nuevas funcionalidades al mapa de desarrollo de producto.<br>3. Si bien compartieron a varias empresas, no muchas se registraron. Fueron amistades del equipo quienes se registraban no para vender sino sólo ver. El primer cliente tenía gran dificultad para cobrar internacionalmente, y Tukuy llegó a ser su principal canal de venta internacional<br>4. Llegar a más empresas era difícil debido a la confianza necesaria manejar el dinero de sus clientes. Un contacto que tenía una comunidad de clientes compartió sobre Tukuy, lo cual captó la atención de sus usuarios, trayendo eventualmente a empresas que pagaron para usar Tukuy",
"https://open.spotify.com/episode/1hpFmICQ6C4xfD1YzvlE1v?si=8a05523c429443fb"
]

let cod25 =[
"Empresas peq o med",
"Servicio constante",
"No",
"Tiempo real",
"Mi empresa",
"Se necesita expertos en el tema",
"Qualus",
"https://qualusmanager.com/",
"Es una fintech que busca acercar la gestión de las finanzas a los empresarios de pequeñas empresas.<br>Ellos pertenecen a la séptima generación de StartUp Perú",
"1. Crearon un Excel que compartían como archivo a los empresarios y que podía compartirse para recibir comentarios constructivos<br>2. Mientras, realizaron consultorías especializadas, lo que les permitió conocer más comentarios y obtener fondos para continuar invirtiendo<br>3. Para evitar una inversión tecnológica desde un inicio (crear esta nueva plataforma), decidieron vender el Excel con la promesa de que iba a convertirse en una plataforma web. La vendieron no como pago único sino como suscripción mensual al precio ofrecido actualmente. <br>4. Luego de visitar coworks y tener 16 clientes de plantilla por 6 meses, identificaron que el sistema debía ser más rápido y amigable que las opciones actuales. Esta fue la base para la plataforma (lo cual no estaba claro para los desarrolladores, pero sí para el equipo de Qualus)<br>5. Gracias a incubadoras pudieron acceder a primeros clientes nuevos, con la confianza de que la plataforma iba a funcionar correctamente",
"https://open.spotify.com/episode/573CyJW7cw9T4owGNKWk6l?si=cefffa262d304f98"
]

let cod26 = [
"Empesas peq o med + sus clientes",
"Servicio constante",
"Sí",
"Tiempo real",
"Mi empresa",
"No necesita",
"Tannder",
"https://www.tannder.com/",
"Es un aula virtual para instituciones educativas que ayuda a escolares a que encuentren su orientación vocacional desarrollando capacidades digitales. Ellos pertenecen a la cuarta generación de StartUp Perú.",
"1. Presentaron el propósito a la municipalidad que los aceptó para buscar colegios. Al presentar los resultados del sondeo inicial y metodología construida con el colegio de uno de los fundadores, conocieron al equipo desarrollador con quienes se asociaron por el mismo propósito social.<br>2. Construyeron una plataforma en 3 meses que les permitió ganar StartUp Perú junto con la experiencia que adquirieron<br>3. El primer cliente, luego de recibir fondos de StartUp Perú, llegó vía referidos y luego de probar con 4 redes de colegios. Con esta red se encontraron trabajando hasta ahora porque les gustó el enfoque que tenían en la propuesta.<br>4. Usaron el prototipo con 200 estudiantes de esta red y adquirieron más aprendizaje para desarrollar luego una plataforma más adecuada. Gracias a las credenciales de haber trabajado con varios y entender todas las particularidades de éstos, pudieron expandirse a más colegios",
"https://open.spotify.com/episode/7aK2OdWI3SwusQZEYBkY9K?si=6eccadb973574365"
]

let cod27 = [
"Empresas grandes",
"Servicio por única vez",
"Sí",
"Pronto",
"Terceros (conexión)",
"Se necesita confianza",
"LinkMiners",
"https://www.linkminers.com/",
"Es una plataforma de innovación abierta que permite que funcionarios de las operaciones mineras puedan conectarse con los proveedores de su industria. Ellos pertenecen a la séptima generación de StartUp Perú",
"1. Se reunieron con personas de la industria para recibir feedback de la idea y crear una maqueta de diseño sencillo parecido a un PowerPoint<br>2. Luego de más feedback, crearon un siguiente desarrollo con diseños más adecuados. Con esta maqueta fueron a la feria más importante de la industria minera para entrevistar a más de cient empresas y validar temas de pricing, también entendiendo el interés y disposición de compra.<br>3. Luego de conseguir primeros requerimientos de empresas mineras vía conocidos, los proveedores no participaron porque se les cobraba. Decidieron no cobrar para que llegaran más proveedores. Al también recibir más desafíos, llegaron más proveedores vía mayor presencia digital<br>4. Con servicios concretados, fueron contactados por el cluster minero del sur para realizar proyectos importantes, lo cual generó confianza para sus potenciales clientes mineros. Después de un año de generar una masa crítica mínima, iniciaron los planes de pago.",
"https://open.spotify.com/episode/0x1eYGpGwuS7YHS3MD90vz?si=8b208c9038e1427c"
]

let cod28 = [
"Empesas grandes",
"Servicio constante",
"Sí",
"Tiempo real",
"Mi empresa",
"Se necesita expertos en el tema",
"Tukutin",
"https://www.tukutin.com/",
"Es una plataforma que gestiona y simplifica el comercio internacional entregándole a las empresas el costo de su producto logístico y dándoles trazabilidad de toda su operación logística con eventos con horas y eventos. Ellos pertenecen a la sexta generación de StartUp Perú",
"1. Conseguían productos de productores peruanos y los ofertaban por su cuenta a través de  correo electrónicos, concretando ventas.<br>2. Ya conociendo las caractersíticas más importantes del trato, crearon una plataforma de contacto directo y frontal (más curada)<br>3. Las primeras ventas fueron contactos exportadores con la propuesta de ampliar su alcance comercial para conseguir clientes afuera. La herramienta se iba alimentando y aprendiendo por sí sola. Luego de validar y usar estas credenciales para crecer, aplicaron a concursos<br>4. Al quedarse cortos de empresas importadoras exteriores, aprovecharon su experiencia logística para ayudar a otros clientes en la ubicación a tiempo de real de los contenedores hacia los almacenes, usando data pública y traducirla (contrataron a un equipo equipo tecnológico)<br>5. Con una empresa logística pudieron validar esta funcionalidad. Poco a poco fueron acumulando clientes hasta empezar las ventas",
""]

let cod29 = [
"Empesas grandes",
"Servicio constante",
"No",
"Tiempo real",
"Mi empresa",
"No necesita",
"Mandü",
"https://www.mandu.pe/",
"Es una startup que desarrolla tecnología que potencia la estrategia de talento de las organizaciones, atendiendo el proceso de clima laboral y liderazgo y proceso de desempeño de objetivos y competencias. Ellos pertenecen a la cuarta generación de StartUp Perú.",
"1. Realizaron sondeos con otra necesidad con primeras empresas. Encontraron otra problemática desatendida y con mayor oportunidad<br>2. Empezaron [un poco al revés]: Una plataforma con diversas funcionalidades y fueron optimizando en base a valores percibidos por gerentes. Sacaron funcionalidades y se enfocaban según lo que sí les aportaba valor (no era suficiente los comentarios de lo bueno que se veía)<br>3. Empezaron interactuando gratuitamente con empresas vía contactos y la primera venta fue casi un año después, con una empresa con la que interactuaban desde el sondeo de problemas y pudo estar al tanto del esfuerzo y aprendizaje constante del equipo<br>4. Luego de varias credenciales de empresas que brindaron servicios de manera gratuita, llegaron los primeros clientes. Para continuar vendiendo a otras empresas, tuvieron que obtener mayor validación social y credenciales de clientes",
"https://open.spotify.com/episode/5W2fjjhQSGnkdsKB8k4LaD?si=ad60b774ee144fce"
]

let cod30 = [
"Empesas grandes + sus clientes",
"Servicio constante",
"Sí",
"Tiempo real",
"Mi empresa",
"No necesita",
"Check",
"https://check.education/",
"Es una plataforma enfocada en mejorar la educación en colegios y perteneciente a la sexta generación de Startup Perú. Prendea, su versión actualizada luego de la coyuntura por el COVID-19, ha sido admitida a Y Combinator, la aceleradora más importante del mundo.",
"1. Primero entendieron las necesidades de los alumnos en clases presenciales particulares. Entendieron que sólo querían aprender exactamente lo que debían aprender. Además, consiguieron profesores específicos para las clases de cada colegio.<br>2. Crearon el producto principal: Los resúmenes más importantes de acuerdo a cada sílabo ('el resumen de tu amigo más estudioso')<br>3. Crearon una plataforma que prototiparon y luego ofrecieron al público iniciando ventas. Tuvieron éxito ya que estaban muy cerca a ellos.<br>4. Luego llegaron a los colegios con el conocimiento y la opción más desarrollada, y ofreciendo una alternativa mucho mejor y mucho más barata que el libro de texto (por oferta y demanda). El precio para convencer a este primer cliente fue fijado en base al primer colegio.<br>5. Pudieron llegar a los siguientes a través de credenciales de colegios ya como clientes",
"https://open.spotify.com/episode/04qCXamBbODegZQtR46jlV?si=f0945145143f4d2c"
]

let cod31 = [
"Empesas grandes + sus clientes",
"Servicio constante",
"Sí",
"Tiempo real",
"Mi empresa + terceros",
"No necesita",
"Wibo",
"https://www.soywibo.com/",
"Es una aplicación que ayuda a usuarios a ordenar y pagar a los comercios donde se acerquen y a comercios a conocer más a sus consumidores, preferencias, cómo va su oferta gastronómica y de conocimiento. Ellos pertenecen a la séptima generación de StartUp Perú",
"1. Se centraron en una experiencia genial para los usuarios: Dado que otras startups ya habían probado este camino y fallado, el primer prototipo debía ser mínimo pero tecnológico: Registro, que los usuarios puedan ver productos, pedir y pagar. <br>2. Iniciaron con 3 pilotos dentro de bares donde pagar y recoger pedidos era díficil. Entendieron cuáles eran los dolores de los usuarios, qué les costaba conseguir y qué valoraban en el proceso. Si bien pocos participaron, dieron comentarios constructivos sobre el diseño y la experiencia<br>3. Crearon un administrador y reportes para ofrecerlos a los comercios y les abarataron costos al reemplazar las pasarelas por tecnología propia<br>4. Llegaron a cafeterías, en las que los usuarios utilizaron la aplicación para funcionalidades adicionales no contempladas hasta ese entonces<br>5. Ya con credenciales de establecimientos y con una experiencia y propuestas interesantes para los usuarios y comercios, continuaron ventas",
""]

let cod32 = [
"Empesas grandes + trabajadores",
"Servicio constante",
"No",
"Tiempo real",
"Mi empresa",
"No necesita",
"AYO Mentoring",
"http://ayomentoring.com/",
"Es una empresa digital que potencia la práctica del mentoring en empresas y que pertenece a la séptima generación de StartUp Perú.",
"1. El primer prototipo fue en la experiencia del usuario como mentor y mentee y mejorar la interconectividad y darles más herramientas de trazabilidad. Luego, teniendo la perspectiva de la empresa identificaron también que debían agregarle valor al área de Recursos Humanos.<br>2. Vía contactos, buscaron empresas que confiaban en el equipo y compartían el mismo propósito de impacto para operar de forma gratuita.<br>3. Fueron compartiendo credenciales de empresas a las que habían ayudado de manera gratuita y luego llegaron los clientes que pagaban. Sobre la base de más y más requerimientos de los usuarios y del corporativo, fueron añadiendo funcionalidades esenciales (hasta hoy)<br>4. Con una propuesta comercial en base a aprendizajes, hicieron un match con lo que busca el primer cliente que pagó por una plataforma mucho más avanzada que el prototipo. Luego de varios aprendizajes y elementos en la plataforma, recién desarrollaron el aplicativo móvil",   
"https://open.spotify.com/episode/5ydRJycfaQUs5bU6fsgAB0?si=a5104e3f944e41cf"
]

let cod = [cod0,cod1,cod2,cod3,cod4,cod5,cod6,cod7,cod8,cod9,cod10,cod11,cod12,cod13,cod14,cod15,cod16,cod17,cod18,cod19,cod20,cod21,cod22,cod23,cod24,cod25,cod26,cod27,cod28,cod29,cod30,cod31,cod32]
//agregar elementos al array .push()
//let nuevo = antiguo.push("Holi")

function match_answer(){
  for (let z = 0; z<cod.length; z++){

        let linkInterview = cod[z].pop();
        let steps = cod[z].pop();
        let description = cod[z].pop();
        let link = cod[z].pop();
        let w = cod[z].pop();
        let x = JSON.stringify(cod[z]);
        if(x == retrieved_answers) {
        document.querySelector(".answers").innerHTML +="<a href='" + link + "'>"+w+"</a>" ;
        document.querySelector(".startupDescription").innerHTML = description;
        document.querySelector(".startupSteps").innerHTML = steps;
        document.querySelector(".entrevistas").innerHTML +="<a href='" + linkInterview + "'>" + "Entrevista" +"</a>";

           //let y = cod[z].push(w);
         // console.log(cod[z]);
      //   } 
        }
        // document.querySelector(".answers").innerHTML = y;
    }
}
match_answer();
