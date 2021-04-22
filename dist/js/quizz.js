window.onload = function() {
  show(0);
}

//cortar el objeto models desde create a similarto
//antes de comparar quitarle la ultima linea
//pasarlo a object.values()
//a ese valor convertirlo a stringify de JSON



const models = [
  {
  id: "cod01",
  create:"Producto físico",
  forWho:"Personas",
  previousEvent:"Sí",
  velocity:"Pronto",
  solvedBy:"Mi empresa",
  credibility:"No necesita",
  similarTo: "Arquipets"
  },
  {
  id: "cod02",
  create:"Producto físico",
  forWho:"Personas",
  previousEvent:"Sí",
  velocity:"Pronto",
  solvedBy:"Terceros (conexión)",
  credibility:"No necesita",
  similarTo: "Desmadres"
  },
  {
  id: "cod03",
  create:"Producto físico",
  forWho:"Personas",
  previousEvent:"No",
  velocity:"Pronto",
  solvedBy:"Mi empresa",
  credibility:"No necesita",
  similarTo: "Ekolo"
  },
  {
  id: "cod04",
  create:"Producto físico",
  forWho:"Personas",
  previousEvent:"No",
  velocity:"Pronto",
  solvedBy:"Mi empresa",
  credibility:"Se necesita expertos en el tema",
  similarTo: "Mamalama"
  },
  {
  id: "cod05",
  create:"Producto físico",
  forWho:"Personas",
  previousEvent:"No",
  velocity:"Pronto",
  solvedBy:"Terceros (conexión)",
  credibility:"No necesita",
  similarTo: "Conectagro"
  },
  {
  id: "cod06",
  create:"Producto físico",
  forWho:"Personas y Ayuda Social",
  previousEvent:"No",
  velocity:"Pronto",
  solvedBy:"Mi empresa",
  credibility:"Se necesita expertos en el tema",
  similarTo: "Outfie"
  },
  {
  id: "cod07",
  create:"Producto físico",
  forWho:"Personas y Ayuda Social",
  previousEvent:"No",
  velocity:"Pronto",
  solvedBy:"Mi empresa",
  credibility:"No necesita",
  similarTo: "Antarki"
  },
  {
  id: "cod08",
  create:"Producto físico",
  forWho:"Empresas pequeñas o medianas",
  previousEvent:"Sí",
  velocity:"Pronto",
  solvedBy:"Mi empresa",
  credibility:"Se necesita expertos en el tema",
  similarTo: "Bioflash"
  },
  {
  id: "cod09",
  create:"Producto + servicio",
  forWho:"Personas",
  previousEvent:"Sí",
  velocity:"Pronto",
  solvedBy:"Terceros (conexión)",
  credibility:"No necesita",
  similarTo: "Somos Moto"
  },
  {
  id: "cod10",
  create:"Producto + servicio",
  forWho:"Personas",
  previousEvent:"No",
  velocity:"Pronto",
  solvedBy:"Mi empresa + terceros",
  credibility:"Se necesita expertos en el tema",
  similarTo: "Outfie"
  },
  {
  id: "cod11",
  create:"Servicio por única vez",
  forWho:"Personas",
  previousEvent:"Sí",
  velocity:"Inmediato",
  solvedBy:"Terceros (conexión)",
  credibility:"Se necesita confianza",
  similarTo: "Yegoh"
  },
  {
  id: "cod12",
  create:"Servicio por única vez",
  forWho:"Personas",
  previousEvent:"Sí",
  velocity:"Pronto",
  solvedBy:"Mi empresa",
  credibility:"Se necesita confianza",
  similarTo: "Sin envolturas"
  },
  {
  id: "cod13",
  create:"Servicio por única vez",
  forWho:"Personas",
  previousEvent:"Sí",
  velocity:"Pronto",
  solvedBy:"Mi empresa",
  credibility:"Se necesita expertos en el tema",
  similarTo: "Legaly"
  },
  {
  id: "cod14",
  create:"Servicio por única vez",
  forWho:"Personas",
  previousEvent:"Sí",
  velocity:"Eventualmente",
  solvedBy:"Terceros (conexión)",
  credibility:"No necesita",
  similarTo: "Queestudiar"
  },
  {
  id: "cod15",
  create:"Servicio por única vez",
  forWho:"Personas",
  previousEvent:"No",
  velocity:"Inmediato",
  solvedBy:"Terceros (conexión)",
  credibility:"Se necesita confianza",
  similarTo: "WePayU"
  },
  {
  id: "cod16",
  create:"Servicio por única vez",
  forWho:"Personas",
  previousEvent:"No",
  velocity:"Inmediato",
  solvedBy:"Terceros (conexión)",
  credibility:"Se necesita expertos en el tema",
  similarTo: "Fastfix"
  },
  {
  id: "cod17",
  create:"Servicio por única vez",
  forWho:"Personas",
  previousEvent:"No",
  velocity:"Pronto",
  solvedBy:"Terceros (conexión)",
  credibility:"Se necesita confianza",
  similarTo: "Rebajatuscuentas"
  },
  {
  id: "cod18",
  create:"Servicio por única vez",
  forWho:"Empresas pequeñas o medianas",
  previousEvent:"No",
  velocity:"Pronto",
  solvedBy:"Mi empresa",
  credibility:"No necesita",
  similarTo: "Mitienda"
  },
  {
  id: "cod19",
  create:"Servicio por única vez",
  forWho:"Empresas grandes",
  previousEvent:"Sí",
  velocity:"Pronto",
  solvedBy:"Terceros (conexión)",
  credibility:"Se necesita confianza",
  similarTo: "LinkMiners"
  }, 
  {
  id: "cod20",
  create:"Servicio constante",
  forWho:"Personas",
  previousEvent:"Sí",
  velocity:"Tiempo real",
  solvedBy:"Mi empresa",
  credibility:"Se necesita expertos en el tema",
  similarTo: "Hospitapp"
  }, 
  {
  id: "cod21",
  create:"Servicio constante",
  forWho:"Personas",
  previousEvent:"Sí",
  velocity:"Pronto",
  solvedBy:"Terceros (conexión)",
  credibility:"Se necesita expertos en el tema",
  similarTo: "Likemytravel"
  }, 
  {
  id: "cod22",
  create:"Servicio constante",
  forWho:"Personas",
  previousEvent:"No",
  velocity:"Tiempo real",
  solvedBy:"Mi empresa",
  credibility:"No necesita",
  similarTo: "Bombo"
  }, 
  {
  id: "cod23",
  create:"Servicio constante",
  forWho:"Personas",
  previousEvent:"No",
  velocity:"Inmediato",
  solvedBy:"Terceros (conexión)",
  credibility:"No necesita",
  similarTo: "Monkeyfit"  
  }, 
  {
  id: "cod24",
  create:"Servicio constante",
  forWho:"Empesas pequeñas o medianas",
  previousEvent:"No",
  velocity:"Tiempo real",
  solvedBy:"Mi empresa",
  credibility:"No necesita",
  similarTo: "Tukuy"  
  }, 
  {
  id: "cod25",
  create:"Servicio constante",
  forWho:"Empesas pequeñas o medianas",
  previousEvent:"No",
  velocity:"Tiempo real",
  solvedBy:"Mi empresa",
  credibility:"Se necesita expertos en el tema",
  similarTo: "Qualus"  
  }, 
  {
  id: "cod26",
  create:"Servicio constante",
  forWho:"Empesas pequeñas o medianas + sus clientes",
  previousEvent:"Sí",
  velocity:"Tiempo real",
  solvedBy:"Mi empresa",
  credibility:"No necesita",
  similarTo: "Tannder"  
  }, 
  {
  id: "cod27",
  create:"Servicio constante",
  forWho:"Empesas grandes",
  previousEvent:"Sí",
  velocity:"Tiempo real",
  solvedBy:"Mi empresa",
  credibility:"Se necesita expertos en el tema",
  similarTo: "Tukutin"  
  }, 
  {
  id: "cod28",
  create:"Servicio constante",
  forWho:"Empesas grandes",
  previousEvent:"No",
  velocity:"Tiempo real",
  solvedBy:"Mi empresa",
  credibility:"No necesita",
  similarTo: "Mandü"  
  }, 
  {
  id: "cod29",
  create:"Servicio constante",
  forWho:"Empesas grandes + sus clientes",
  previousEvent:"Sí",
  velocity:"Tiempo real",
  solvedBy:"Mi empresa",
  credibility:"No necesita",
  similarTo: "Check"  
  }, 
  {
  id: "cod30",
  create:"Servicio constante",
  forWho:"Empesas grandes + sus clientes",
  previousEvent:"Sí",
  velocity:"Tiempo real",
  solvedBy:"Mi empresa + terceros",
  credibility:"No necesita",
  similarTo: "Wibo"  
  }, 
  {
  id: "cod31",
  create:"Servicio constante",
  forWho:"Empesas grandes + trabajadores",
  previousEvent:"No",
  velocity:"Tiempo real",
  solvedBy:"Mi empresa",
  credibility:"No necesita",
  similarTo: "AYO Mentoring"  
  }, 
  {
  id: "cod32",
  create:"Aprendizaje",
  forWho:"Personas",
  previousEvent:"Sí",
  velocity:"Tiempo real",
  solvedBy:"Terceros (conexión)",
  credibility:"No necesita",
  similarTo: "Arcux"  
  }, 
  {
  id: "cod33",
  create:"Empleo",
  forWho:"Personas",
  previousEvent:"Sí",
  velocity:"Eventualmente",
  solvedBy:"Terceros (conexión)",
  credibility:"Se necesita expertos en el tema",
  similarTo: "Talently"  
  }, 
  {
  id: "cod34",
  create:"Empleo",
  forWho:"Personas",
  previousEvent:"No",
  velocity:"Eventualmente",
  solvedBy:"Terceros (conexión)",
  credibility:"No necesita",
  similarTo: "WomanOnWork"  
  }                
]



//filtro los producto
//reduzco la matriz de resultados del filtro a una con solo las respuestas correctas en forWho, previousEvent, velocity, solvedBy, credibility, similarTo


//To do agregar los filtros que se van a usar en el futuro



let filds = ["id","create","forWho","previousEvent","velocity","solvedBy","credibility","similarTo"]


//En caso 
//Casos de Producto
let createProd = models.filter(x => x.create == "Producto físico")
let onlyProd = createProd.map(x => x.create)
let forWhoProd = createProd.map(x => x.forWho)
let previousProd = createProd.map(x => x.previousEvent)
let velocityProd = createProd.map(x => x.velocity)
let solvedByProd = createProd.map(x => x.solvedBy)
let credibilityProd = createProd.map(x => x.credibility)
//Respuestas unicas forWho

const uniqueOnlyProd = [...new Set(onlyProd)]
const uniqueWhoProd = [...new Set(forWhoProd)]
const uniquePreviousProd = [...new Set(previousProd)]
const uniqueVelocityProd = [...new Set(velocityProd)]
const uniqueSolvedProd = [...new Set(solvedByProd)]
const uniqueCredibilityProd = [...new Set(credibilityProd)]

//Nro de opciones de producto
console.log(createProd.length);

let prodForPeople = createProd.filter(x => x.forWho == "Personas")
//Nro de opciones de producto & personas
console.log(prodForPeople.length)

let prodForSbMb = createProd.filter(x => x.forWho == "Empresas pequeñas o medianas")
//Nro de opciones de producto & peq emp o med emp
console.log(prodForSbMb.length);

let questions = [
    {
      id:1,
      question:"¿Qué quieres ofrecer?",
      options: uniqueOnlyProd
    },
    {
      id:2,
      question:"¿Quién se beneficia principalmente?",
      options: uniqueWhoProd
    },
    {
      id:3,
      question:"¿Este usuario tiene esa necesidad luego de eventos del pasado?",
      options: uniquePreviousProd
    },
    {
      id:4,
      question:"¿Cuál es la mínima rapidez que espera el usuario?",
      options: uniqueVelocityProd
    },
    {
      id:5,
      question:"¿Quién ofrece la solución final?",
      options: uniqueSolvedProd
    },
    {
      id:6,
      question:"¿Cuánta credibilidad necesita tu emprendimiento para funcionar?",
      options: uniqueCredibilityProd 
    }
];



 



function submitForm(e) {
  e.preventDefault();
  let name = document.forms["welcome_form"]["name"].value;
 
  //store player name
  sessionStorage.setItem("name", name);
  
  location.href ="quizz.html";
  console.log(name);
}

let question_count = 0;
let user_answers = [];

//localStorage.removeItem("answers")
function next(){
  if(question_count == questions.length - 1){
    let user_answer = document.querySelector("li.option.active").innerHTML;
    user_answers.push(user_answer); 
    sessionStorage.setItem("answers", JSON.stringify(user_answers));  
    location.href = "end.html";
    return;
  }
  let user_answer = document.querySelector("li.option.active").innerHTML;
  user_answers.push(user_answer); 
  sessionStorage.setItem("answers", JSON.stringify(user_answers));
  if (question_count == 0) {
    //MODIFICAR AL CAMBIAR EL ORDEN DE PREGUNTAS x.create por x.forWho
    let firstFilterOption = models.filter(x => x.create == user_answer);
    let FirstSolutions = firstFilterOption.map(x =>x.forWho)
    let uniqueFirstSolution = [...new Set(FirstSolutions)]
    sessionStorage.setItem("firstFilterOption", JSON.stringify(firstFilterOption));
    sessionStorage.setItem("uniqueFirstSolutions", JSON.stringify(uniqueFirstSolution));
  } else if (question_count == 1){
    let secondOption = document.querySelector("li.option.active").innerHTML;
    sessionStorage.setItem("secondOption", secondOption);
    //corregir
  //  let secondFilterOption = firstFilterOption.filter(x => x.forWho === secondOption);
  //let filds = ["id","create","forWho","previousEvent","velocity","solvedBy","credibility","similarTo"]
  }
  //if (question_count == 1) {
    //  onlyAvailableOptions();
    //}
    console.log()
    //check answer by the user
    question_count++;
    show(question_count);
    //give only availableOptions for next questions
  }

//question_count = Nro de pregunta
//options_counter = Nro de opciones de la pregunta


  function show(count){
    let question = document.getElementById("questions");
    let options_counter = questions[question_count]["options"].length;
    question.innerHTML = `
    <h2>${questions[count].question}</h2>`;
  
    for (let j = 0; j < options_counter; j++) {
    // question.innerHTML = "<h2>" + questions[count].question + "</h2>";
    question.innerHTML += ` 
     <ul class="option_group">
     <li class="option">${questions[count].options[j]}</li>
     </ul>
     `;
     }
     toggleActive();
}

function toggleActive(){
  let option = document.querySelectorAll("li.option");

  for (let i = 0; i< option.length; i++){
      option[i].onclick = function(){
        for(let k=0; k < option.length; k++){
            if(option[k].classList.contains("active")){
                option[k].classList.remove("active");
            }
        }
        option[i].classList.add("active");
       }
    }
}

//function onlyAvailableOptions(){  
  //let availableOptions = models.filter(x => x.forWho === firstFilterOption)
//}
