let u_name = sessionStorage.getItem("name");
let retrieved_answers = sessionStorage.getItem("answers");
let answers2 = JSON.parse(retrieved_answers);


//falta integrar answers2 con la combinacion de posibles resultados disponibles para despues mostrarlos los ejemplos de esa combinacion 


document.querySelector(".u_name").innerHTML = u_name;
//document.querySelector(".answers").innerHTML = answers2[1];

//aqui agregamos las respuestas que posteriormente seran comparadas

let cod0 = ["Producto físico", "Personas","Sí","Pronto","Mi empresa","No necesita"
,"Arquipets"]

let cod1 = ["Producto físico","Personas","Sí","Pronto","Terceros (conexión)","No necesita","Desmadres"]

let cod2 = ["Producto físico","Personas","No","Pronto","Mi empresa","No necesita","Ekolo"]

let cod3 = ["Producto físico","Personas","No","Pronto","Mi empresa","Se necesita expertos en el tema","Mamalama"]

let cod4 = ["Producto físico","Personas","No","Pronto","Terceros (conexión)","No necesita","Conectagro"]

let cod5 = ["Producto físico","Empresas pequeñas o medianas","Sí","Pronto","Mi empresa","Se necesita expertos en el tema","Bioflash"]   

let cod6 = ["Producto + servicio","Personas","No","Pronto","Mi empresa + terceros","Se necesita expertos en el tema","Outfie"]

let cod7 = ["Producto físico","Personas y Ayuda Social","No","Pronto","Mi empresa","No necesita","Entre Árboles"]

let cod8 = ["Producto + servicio","Personas","Sí","Pronto","Terceros (conexión)","No necesita","Somos Moto"]

let cod9 = ["Servicio por única vez","Personas",
"Sí","Inmediato","Terceros (conexión)","Se necesita confianza","Yegoh"]

let cod10 = ["Servicio por única vez","Personas","No","Inmediato",
"Terceros (conexión)","Se necesita confianza","WePayU" 
]
let cod11 = ["Servicio por única vez","Personas","No","Inmediato","Terceros (conexión)","Se necesita expertos en el tema","Fastfix"
]

let cod12 = ["Servicio por única vez","Personas","Sí","Pronto","Mi empresa","Se necesita confianza","Sin envolturas"
]

let cod13 = ["Servicio por única vez","Personas","Sí","Pronto","Mi empresa","Se necesita expertos en el tema","Legaly"
]

let cod14 = ["Servicio por única vez","Personas","No","Pronto","Terceros (conexión)","Se necesita confianza","Rebajatuscuentas"
]
let cod15 = [
  
]

let cod = [cod0,cod1,cod2,cod3,cod4,cod5,cod6,cod7]
//agregar elementos al array .push()
//let nuevo = antiguo.push("Holi")

function match_answer(){
    for (let z = 0; z<cod.length; z++){
         let w = cod[z].pop();
         let x = JSON.stringify(cod[z])
         if(x == retrieved_answers) {
        console.log(w);
        document.querySelector(".answers").innerHTML = w;
          //debugger 
           //let y = cod[z].push(w);
         // console.log(cod[z]);
      //   } 
        }
        // document.querySelector(".answers").innerHTML = y;
    }
}
match_answer();
