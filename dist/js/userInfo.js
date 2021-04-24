let u_name = sessionStorage.getItem("name");
let retrieved_answers = sessionStorage.getItem("answers");
let answers2 = JSON.parse(retrieved_answers);


//falta integrar answers2 con la combinacion de posibles resultados disponibles para despues mostrarlos los ejemplos de esa combinacion 


document.querySelector(".u_name").innerHTML = u_name;
//document.querySelector(".answers").innerHTML = answers2[1];

//aqui agregamos las respuestas que posteriormente seran comparadas

let cod0 = [
"Producto físico",
"Personas",
"Sí",
"Pronto",
"Mi empresa",
"No necesita",
"Arquipets"]

let cod1 = [
"Producto físico",
"Personas",
"Sí",
"Pronto",
"Terceros (conexión)",
"No necesita",
"Desmadres"]

let cod2 = [
"Producto físico",
"Personas",
"No",
"Pronto",
"Mi empresa",
"No necesita",
"Ekolo"]

let cod3 = [
"Producto físico",
"Personas",
"No",
"Pronto",
"Mi empresa",
"Se necesita expertos en el tema",
"Mamalama"]

let cod4 = [
"Producto físico",
"Personas",
"No",
"Pronto",
"Terceros (conexión)",
"No necesita",
"Conectagro"]

let cod5 = [
"Producto físico",
"Empresas pequeñas o medianas",
"Sí",
"Pronto",
"Mi empresa",
"Se necesita expertos en el tema","Bioflash"]   

let cod6 = [
"Producto + servicio",
"Personas",
"No",
"Pronto",
"Mi empresa + terceros",
"Se necesita expertos en el tema",
"Outfie"]

let cod7 = [
"Producto físico",
"Personas y Ayuda Social",
"No",
"Pronto",
"Mi empresa",
"No necesita",
"Antarki"]

let cod8 = [
"Producto + servicio",
"Personas",
"Sí",
"Pronto",
"Terceros (conexión)",
"No necesita",
"Somos Moto"]

let cod9 = [
"Servicio por única vez",
"Personas",
"Sí",
"Inmediato",
"Terceros (conexión)",
"Se necesita confianza",
"Yegoh"]

let cod10 = [
"Servicio por única vez",
"Personas",
"No",
"Inmediato",
"Terceros (conexión)",
"Se necesita confianza",
"WePayU"]

let cod11 = [
"Servicio por única vez",
"Personas",
"No",
"Inmediato",
"Terceros (conexión)",
"Se necesita expertos en el tema",
"Fastfix"]

let cod12 = [
"Servicio por única vez",
"Personas",
"Sí",
"Pronto",
"Mi empresa",
"Se necesita confianza",
"Sin envolturas"
]

let cod13 = [
"Servicio por única vez","Personas","Sí","Pronto","Mi empresa","Se necesita expertos en el tema","Legaly"]

let cod14 = [
"Servicio por única vez","Personas","No","Pronto","Terceros (conexión)","Se necesita confianza","Rebajatuscuentas"]

let cod15 = [
"Servicio por única vez","Personas","Sí","Eventualmente","Terceros (conexión)","No necesita","Queestudiar"]

let cod16 = ["Servicio constante","Personas","Sí","Tiempo real","Mi empresa","Se necesita expertos en el tema","Hospitapp"]

let cod17 = ["Servicio constante","Personas","No","Tiempo real","Mi empresa","No necesita","Bombo"]

let cod18 = [
"Servicio constante",
"Personas",
"No",
"Inmediato",
"Terceros (conexión)",
"No necesita",
"Monkeyfit"]

let cod19 = [
"Servicio constante",
"Personas",
"Sí",
"Pronto",
"Terceros (conexión)",
"Se necesita expertos en el tema",
"Likemytravel"]

let cod20 = [
"Aprendizaje",
"Personas",
"Sí",
"Tiempo real",
"Terceros (conexión)",
"No necesita",
"Arcux"]

let cod21 = [
"Empleo",
"Personas",
"Sí",
"Eventualmente",
"Terceros (conexión)",
"Se necesita expertos en el tema",
"Talently"]

let cod22 = [
"Empleo",
"Personas",
"No",
"Eventualmente",
"Terceros (conexión)",
"No necesita",
"WomanOnWork"]

let cod23 = [
"Servicio por única vez",
"Empresas pequeñas o medianas",
"No",
"Pronto",
"Mi empresa",
"No necesita",
"Mitienda"]

let cod24 =[
"Servicio constante",
"Empesas pequeñas o medianas",
"No",
"Tiempo real",
"Mi empresa",
"No necesita",
"Tukuy"]

let cod25 =[
"Servicio constante",
"Empesas pequeñas o medianas",
"No",
"Tiempo real",
"Mi empresa",
"Se necesita expertos en el tema",
"Qualus"]

let cod26 = [
"Servicio constante",
"Empesas pequeñas o medianas + sus clientes",
"Sí",
"Tiempo real",
"Mi empresa",
"No necesita",
"Tannder"
]

let cod27 = [
"Servicio por única vez",
"Empresas grandes",
"Sí",
"Pronto",
"Terceros (conexión)",
"Se necesita confianza",
"LinkMiners"
]

let cod28 = [
"Servicio constante",
"Empesas grandes",
"Sí",
"Tiempo real",
"Mi empresa",
"Se necesita expertos en el tema",
"Tukutin"
]

let cod29 = [
"Servicio constante",
"Empesas grandes",
"No",
"Tiempo real",
"Mi empresa",
"No necesita",
"Mandü"
]

let cod30 = [
"Servicio constante",
"Empesas grandes + sus clientes",
"Sí",
"Tiempo real",
"Mi empresa",
"No necesita",
"Check"
]

let cod31 = [
"Servicio constante",
"Empesas grandes + sus clientes",
"Sí",
"Tiempo real",
"Mi empresa + terceros",
"No necesita",
"Wibo"
]

let cod32 = [
"Servicio constante",
"Empesas grandes + trabajadores",
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
