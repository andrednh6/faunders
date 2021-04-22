let u_name = sessionStorage.getItem("name");
let retrieved_answers = sessionStorage.getItem("answers");
let answers2 = JSON.parse(retrieved_answers);


//falta integrar answers2 con la combinacion de posibles resultados disponibles para despues mostrarlos los ejemplos de esa combinacion 


document.querySelector(".u_name").innerHTML = u_name;
//document.querySelector(".answers").innerHTML = answers2[1];

//aqui agregamos las respuestas que posteriormente seran comparadas

let cod0 = ["Producto físico", "Personas","Sí","Pronto","Mi empresa","No necesita"
,"Arquipets y Noia"]

let cod1 = ["Producto físico","Personas","Sí","Pronto","Terceros (conexión)","No necesita","Desmadres"]

let cod2 = ["Producto físico","Personas","No","Pronto","Mi empresa","No necesita","Ekolo y La Clotilde"]

let cod3 = ["Producto físico","Personas","No","Pronto","Mi empresa","Se necesita expertos en el tema","Unbranded y Mamalama"]

let cod4 = ["Producto físico","Personas","No","Pronto","Terceros (conexión)","No necesita","Conectagro, Perpetua y Alquilab"]

let cod5 = ["Producto físico","Empresas pequeñas o medianas","Sí","Pronto","Mi empresa","Se necesita expertos en el tema","Bioflash"]   

let cod6 = ["Producto físico","Personas y Ayuda Social","No","Pronto","Mi empresa","Se necesita expertos en el tema","Outfie"]

let cod7 = ["Producto físico","Personas y Ayuda Social","No","Pronto","Mi empresa","No necesita","Entre Árboles"]


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
