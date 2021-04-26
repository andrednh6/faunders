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
"Arquipets"
]

let cod1 = [
"Personas",
"Producto físico",
"Sí",
"Pronto",
"Terceros (conexión)",
"No necesita",
"Desmadres"]

let cod2 = [
"Personas",
"Producto físico",
"No",
"Pronto",
"Mi empresa",
"No necesita",
"Ekolo"]

let cod3 = [
"Personas",
"Producto físico",
"No",
"Pronto",
"Mi empresa",
"Se necesita expertos en el tema",
"Mamalama"]

let cod4 = [
"Personas",
"Producto físico",
"No",
"Pronto",
"Terceros (conexión)",
"No necesita",
"Conectagro"]

let cod5 = [
"Empresas peq o med",
"Producto físico",
"Sí",
"Pronto",
"Mi empresa",
"Se necesita expertos en el tema","Bioflash"]   

let cod6 = [
"Personas",
"Producto + servicio",
"No",
"Pronto",
"Mi empresa + terceros",
"Se necesita expertos en el tema",
"Outfie"]

let cod7 = [
"Personas + ayuda social",
"Producto físico",
"No",
"Pronto",
"Mi empresa",
"No necesita",
"Antarki"]

let cod8 = [
"Personas",
"Producto + servicio",
"Sí",
"Pronto",
"Terceros (conexión)",
"No necesita",
"Somos Moto"]

let cod9 = [
"Personas",
"Servicio por única vez",
"Sí",
"Inmediato",
"Terceros (conexión)",
"Se necesita confianza",
"Yegoh"]

let cod10 = [
"Personas",
"Servicio por única vez",
"No",
"Inmediato",
"Terceros (conexión)",
"Se necesita confianza",
"WePayU"]

let cod11 = [
"Personas",
"Servicio por única vez",
"No",
"Inmediato",
"Terceros (conexión)",
"Se necesita expertos en el tema",
"Fastfix"]

let cod12 = [
"Personas",
"Servicio por única vez",
"Sí",
"Pronto",
"Mi empresa",
"Se necesita confianza",
"Sin envolturas"
]

let cod13 = [
"Personas",
"Servicio por única vez",
"Sí",
"Pronto",
"Mi empresa",
"Se necesita expertos en el tema",
"Legaly"]

let cod14 = [
"Personas",
"Servicio por única vez",
"No",
"Pronto",
"Terceros (conexión)",
"Se necesita confianza",
"Rebajatuscuentas"]

let cod15 = [
"Personas",
"Servicio por única vez",
"Sí",
"Eventualmente",
"Terceros (conexión)",
"No necesita",
"Queestudiar"]

let cod16 = [
"Personas",
"Servicio constante",
"Sí",
"Tiempo real",
"Mi empresa",
"Se necesita expertos en el tema",
"Hospitapp"]

let cod17 = [
"Personas",
"Servicio constante",
"No",
"Tiempo real",
"Mi empresa",
"No necesita",
"Bombo"]

let cod18 = [
"Personas",
"Servicio constante",
"No",
"Inmediato",
"Terceros (conexión)",
"No necesita",
"Monkeyfit"]

let cod19 = [
"Personas",
"Servicio constante",
"Sí",
"Pronto",
"Terceros (conexión)",
"Se necesita expertos en el tema",
"Likemytravel"]

let cod20 = [
"Personas",
"Aprendizaje",
"Sí",
"Tiempo real",
"Terceros (conexión)",
"No necesita",
"Arcux"]

let cod21 = [
"Personas",
"Empleo",
"Sí",
"Eventualmente",
"Terceros (conexión)",
"Se necesita expertos en el tema",
"Talently"]

let cod22 = [
"Personas",
"Empleo",
"No",
"Eventualmente",
"Terceros (conexión)",
"No necesita",
"WomanOnWork"]

let cod23 = [
"Empresas peq o med",
"Servicio por única vez",
"No",
"Pronto",
"Mi empresa",
"No necesita",
"Mitienda"]

let cod24 =[
"Empresas peq o med",
"Servicio constante",
"No",
"Tiempo real",
"Mi empresa",
"No necesita",
"Tukuy"]

let cod25 =[
"Empresas peq o med",
"Servicio constante",
"No",
"Tiempo real",
"Mi empresa",
"Se necesita expertos en el tema",
"Qualus"]

let cod26 = [
"Empesas peq o med + sus clientes",
"Servicio constante",
"Sí",
"Tiempo real",
"Mi empresa",
"No necesita",
"Tannder"
]

let cod27 = [
"Empresas grandes",
"Servicio por única vez",
"Sí",
"Pronto",
"Terceros (conexión)",
"Se necesita confianza",
"LinkMiners"
]

let cod28 = [
"Empesas grandes",
"Servicio constante",
"Sí",
"Tiempo real",
"Mi empresa",
"Se necesita expertos en el tema",
"Tukutin"
]

let cod29 = [
"Empesas grandes",
"Servicio constante",
"No",
"Tiempo real",
"Mi empresa",
"No necesita",
"Mandü"
]

let cod30 = [
"Empesas grandes + sus clientes",
"Servicio constante",
"Sí",
"Tiempo real",
"Mi empresa",
"No necesita",
"Check"
]

let cod31 = [
"Empesas grandes + sus clientes",
"Servicio constante",
"Sí",
"Tiempo real",
"Mi empresa + terceros",
"No necesita",
"Wibo"
]

let cod32 = [
"Empesas grandes + trabajadores",
"Servicio constante",
"No",
"Tiempo real",
"Mi empresa",
"No necesita",
"AYO Mentoring"   
]

let cod = [cod0,cod1,cod2,cod3,cod4,cod5,cod6,cod7,cod8,cod9,cod10,cod11,cod12,cod13,cod14,cod15,cod16,cod17,cod18,cod19,cod20,cod21,cod22,cod23,cod24,cod25,cod26,cod27,cod28,cod29,cod30,cod31,cod32]
//agregar elementos al array .push()
//let nuevo = antiguo.push("Holi")

function match_answer(){
  for (let z = 0; z<cod.length; z++){

         let w = cod[z].pop();
         let x = JSON.stringify(cod[z])
         if(x == retrieved_answers) {
        console.log(w);
        document.querySelector(".answers").innerHTML = w;
         
           //let y = cod[z].push(w);
         // console.log(cod[z]);
      //   } 
        }
        // document.querySelector(".answers").innerHTML = y;
    }
}
match_answer();
