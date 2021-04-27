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
"https://www.arquipetsperu.com/"
]

let cod1 = [
"Personas",
"Producto físico",
"Sí",
"Pronto",
"Terceros (conexión)",
"No necesita",
"Desmadres",
"https://www.desmadres.shop/"
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
]

let cod3 = [
"Personas",
"Producto físico",
"No",
"Pronto",
"Mi empresa",
"Se necesita expertos en el tema",
"Mamalama",
"http://mamalamasnacks.com/"]

let cod4 = [
"Personas",
"Producto físico",
"No",
"Pronto",
"Terceros (conexión)",
"No necesita",
"Conectagro",
"https://www.linkedin.com/company/conectagro/about/"]

let cod5 = [
"Empresas peq o med",
"Producto físico",
"Sí",
"Pronto",
"Mi empresa",
"Se necesita expertos en el tema",
"Bioflash",
"https://www.facebook.com/BioflashPeru/?ref=page_internal"
]   

let cod6 = [
"Personas",
"Producto + servicio",
"No",
"Pronto",
"Mi empresa + terceros",
"Se necesita expertos en el tema",
"Outfie",
"https://www.myoutfie.com/"
]

let cod7 = [
"Personas + ayuda social",
"Producto físico",
"No",
"Pronto",
"Mi empresa",
"No necesita",
"Antarki",
"https://www.instagram.com/antarki.eco/?hl=es-la"]

let cod8 = [
"Personas",
"Producto + servicio",
"Sí",
"Pronto",
"Terceros (conexión)",
"No necesita",
"Somos Moto",
"https://somosmoto.pe/"]

let cod9 = [
"Personas",
"Servicio por única vez",
"Sí",
"Inmediato",
"Terceros (conexión)",
"Se necesita confianza",
"Yegoh",
"https://yegoh.com/"]

let cod10 = [
"Personas",
"Servicio por única vez",
"No",
"Inmediato",
"Terceros (conexión)",
"Se necesita confianza",
"WePayU",
"https://www.wepayu.pe/"
]

let cod11 = [
"Personas",
"Servicio por única vez",
"No",
"Inmediato",
"Terceros (conexión)",
"Se necesita expertos en el tema",
"Fastfix",
"https://fastfix.pe/"
]

let cod12 = [
"Personas",
"Servicio por única vez",
"Sí",
"Pronto",
"Mi empresa",
"Se necesita confianza",
"Sin envolturas",
"https://sinenvolturas.pe/"
]

let cod13 = [
"Personas",
"Servicio por única vez",
"Sí",
"Pronto",
"Mi empresa",
"Se necesita expertos en el tema",
"Legaly",
"https://www.legaly.pe/"
]

let cod14 = [
"Personas",
"Servicio por única vez",
"No",
"Pronto",
"Terceros (conexión)",
"Se necesita confianza",
"Rebajatuscuentas",
"https://rebajatuscuentas.com/pe"]

let cod15 = [
"Personas",
"Servicio por única vez",
"Sí",
"Eventualmente",
"Terceros (conexión)",
"No necesita",
"Queestudiar",
"https://queestudiar.la/"
]

let cod16 = [
"Personas",
"Servicio constante",
"Sí",
"Tiempo real",
"Mi empresa",
"Se necesita expertos en el tema",
"Hospitapp",
"https://www.hospitapp.pe/"
]

let cod17 = [
"Personas",
"Servicio constante",
"No",
"Tiempo real",
"Mi empresa",
"No necesita",
"Bombo",
"https://bombo.pe/"
]

let cod18 = [
"Personas",
"Servicio constante",
"No",
"Inmediato",
"Terceros (conexión)",
"No necesita",
"Monkeyfit",
"https://www.monkeyfitpass.com/"
]

let cod19 = [
"Personas",
"Servicio constante",
"Sí",
"Pronto",
"Terceros (conexión)",
"Se necesita expertos en el tema",
"Likemytravel",
"https://www.likemytravel.com/"
]

let cod20 = [
"Personas",
"Aprendizaje",
"Sí",
"Tiempo real",
"Terceros (conexión)",
"No necesita",
"Arcux",
"https://arcux.net/"
]

let cod21 = [
"Personas",
"Empleo",
"Sí",
"Eventualmente",
"Terceros (conexión)",
"Se necesita expertos en el tema",
"Talently",
"https://talently.tech/"]

let cod22 = [
"Personas",
"Empleo",
"No",
"Eventualmente",
"Terceros (conexión)",
"No necesita",
"WomanOnWork",
"https://www.linkedin.com/company/woman-on-work/"
]

let cod23 = [
"Empresas peq o med",
"Servicio por única vez",
"No",
"Pronto",
"Mi empresa",
"No necesita",
"Mitienda",
"https://mitienda.pe/"
]

let cod24 =[
"Empresas peq o med",
"Servicio constante",
"No",
"Tiempo real",
"Mi empresa",
"No necesita",
"Tukuy",
"https://tukuy.club/"
]

let cod25 =[
"Empresas peq o med",
"Servicio constante",
"No",
"Tiempo real",
"Mi empresa",
"Se necesita expertos en el tema",
"Qualus",
"https://qualusmanager.com/"
]

let cod26 = [
"Empesas peq o med + sus clientes",
"Servicio constante",
"Sí",
"Tiempo real",
"Mi empresa",
"No necesita",
"Tannder",
"https://www.tannder.com/"
]

let cod27 = [
"Empresas grandes",
"Servicio por única vez",
"Sí",
"Pronto",
"Terceros (conexión)",
"Se necesita confianza",
"LinkMiners",
"https://www.linkminers.com/"
]

let cod28 = [
"Empesas grandes",
"Servicio constante",
"Sí",
"Tiempo real",
"Mi empresa",
"Se necesita expertos en el tema",
"Tukutin",
"https://www.tukutin.com/"
]

let cod29 = [
"Empesas grandes",
"Servicio constante",
"No",
"Tiempo real",
"Mi empresa",
"No necesita",
"Mandü",
"https://www.mandu.pe/"
]

let cod30 = [
"Empesas grandes + sus clientes",
"Servicio constante",
"Sí",
"Tiempo real",
"Mi empresa",
"No necesita",
"Check",
"https://check.education/"
]

let cod31 = [
"Empesas grandes + sus clientes",
"Servicio constante",
"Sí",
"Tiempo real",
"Mi empresa + terceros",
"No necesita",
"Wibo",
"https://www.soywibo.com/"
]

let cod32 = [
"Empesas grandes + trabajadores",
"Servicio constante",
"No",
"Tiempo real",
"Mi empresa",
"No necesita",
"AYO Mentoring",
"http://ayomentoring.com/"   
]

let cod = [cod0,cod1,cod2,cod3,cod4,cod5,cod6,cod7,cod8,cod9,cod10,cod11,cod12,cod13,cod14,cod15,cod16,cod17,cod18,cod19,cod20,cod21,cod22,cod23,cod24,cod25,cod26,cod27,cod28,cod29,cod30,cod31,cod32]
//agregar elementos al array .push()
//let nuevo = antiguo.push("Holi")

function match_answer(){
  for (let z = 0; z<cod.length; z++){
        let link = cod[z].pop();
        let descriptionOne = "";
        let descriptionTwo = "";
        let w = cod[z].pop();
        let x = JSON.stringify(cod[z])
        if(x == retrieved_answers) {
        console.log(w);
        document.querySelector(".answers").innerHTML +="<a href='" + link + "'>"+w+"</a>" ;
         
           //let y = cod[z].push(w);
         // console.log(cod[z]);
      //   } 
        }
        // document.querySelector(".answers").innerHTML = y;
    }
}
match_answer();
