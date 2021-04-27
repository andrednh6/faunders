window.onload = function() {
  show(0);
}

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
  id: "cod06",
  create:"Producto + servicio",
  forWho:"Personas",
  previousEvent:"No",
  velocity:"Pronto",
  solvedBy:"Mi empresa",
  credibility:"Se necesita expertos en el tema",
  similarTo: "Outfie"
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
    id:"cod15",
    create:"Servicio por única vez",
    forWho:"Personas",
    previousEvent:"No",
    velocity:"Inmediato",
    solvedBy:"Terceros (conexión)",
    credibility:"Se necesita confianza",
    similarTo:"WePayU"
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
  similarTo:"Legaly"
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
},                
{
id: "cod07",
create:"Producto físico",
forWho:"Personas + ayuda social",
previousEvent:"No",
velocity:"Pronto",
solvedBy:"Mi empresa",
credibility:"No necesita",
similarTo: "Antarki"
},
{
id: "cod08",
create:"Producto físico",
forWho:"Empresas peq o med",
previousEvent:"Sí",
velocity:"Pronto",
solvedBy:"Mi empresa",
credibility:"Se necesita expertos en el tema",
similarTo: "Bioflash"
},
  {
  id: "cod18",
  create:"Servicio por única vez",
  forWho:"Empresas peq o med",
  previousEvent:"No",
  velocity:"Pronto",
  solvedBy:"Mi empresa",
  credibility:"No necesita",
  similarTo: "Mitienda"
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
    forWho:"Empesas peq o med + sus clientes",
    previousEvent:"Sí",
    velocity:"Tiempo real",
    solvedBy:"Mi empresa",
    credibility:"No necesita",
    similarTo: "Tannder"  
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
  }
]

let filds = ["id","create","forWho","previousEvent","velocity","solvedBy","credibility","similarTo"]

let questions = [
    {
      id:1,
      question:"¿Quién se beneficia principalmente?",
      options: [ //"Producto físico", "Producto + servicio", "Servicio por única vez", "Servicio constante", "Aprendizaje", "Empleo"
       "Personas", "Personas + ayuda social", "Empresas peq o med", "Empesas peq o med + sus clientes", "Empresas grandes", "Empesas grandes + sus clientes", "Empesas grandes + trabajadores"
      ]
    },
    {
      id:2,
      question:"¿Qué es lo que esta ",
      options: []
    },
    {
      id:3,
      question:"¿Este usuario tiene esa necesidad luego de eventos del pasado?",
      options: []
    },
    {
      id:4,
      question:"¿Cuál es la mínima rapidez que espera el usuario?",
      options: []
    },
    {
      id:5,
      question:"¿Quién ofrece la solución final?",
      options: []
    },
    {
      id:6,
      question:"¿Cuánta credibilidad necesita tu emprendimiento para funcionar?",
      options: []
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
    let firstFilterOption = models.filter(x => x.forWho == user_answer);
    let FirstSolutions = firstFilterOption.map(x =>x.create);
    let uniqueFirstSolution = [...new Set(FirstSolutions)];
      sessionStorage.setItem("firstFilter", JSON.stringify(firstFilterOption));
      sessionStorage.setItem("uniqueFirstSolutions", JSON.stringify(uniqueFirstSolution));
    //SE MODIFICARA EL NRO AL CAMBIAR EL ORDEN DE LAS PREGUNTAS
      bringBack("uniqueFirstSolutions",1);
      
      question_count++;
      show(question_count);
    } else if (question_count >= 1){
      let secondOption = document.querySelector("li.option.active").innerHTML;
      sessionStorage.setItem("secondOption", secondOption);
      solvingMatrix(); 
      bringBack("uniqueSecondSolutions",2);
      bringBack("uniqueThirdSolutions",3);
      bringBack("uniqueFourthSolutions",4);
      bringBack("uniqueFifthSolutions",5);
      
    
    question_count++;
    show(question_count);
 
  }

  }

  function show(count){
    let question = document.getElementById("questions");
    let options_counter = questions[question_count]["options"][0].length;
    if (count >= 1 && ( answers2 == "Personas + ayuda social" || answers2 == "Personas")){
      switch (count){
        case 1:
          adaptQuestion(1,"persona busca finalmente");
          break;
        case 2:
          adaptQuestion(2,"");
          break;
        case 3:
          adaptQuestion(3,"");
          break;
        case 4:
          adaptQuestion(4,"");
          break;
        case 5:
          adaptQuestion(5,"");
          break;
        default:
          console.log("error");
      }
     for (let j = 0; j < options_counter; j++) {
        question.innerHTML += ` 
         <ul class="option_group">
         <li class="option">${questions[count].options[0][j]}</li>
         </ul>
         `;
         }
         toggleActive();
    } else if (count >= 1 && ( answers2 == "Empresas peq o med" || answers2 == "Empresas peq o med + sus clientes" || answers2 == "Empresas grandes" || answers2 =="Empresas grandes + sus clientes" || answers2 == "Empresas grandes + trabajadores")){
      switch (count){
        case 1:
          adaptQuestion(1,"empresa busca finalmente");
          break;
        case 2:
          adaptQuestion(2,"");
          break;
        case 3:
          adaptQuestion(3,"");
          break;
        case 4:
          adaptQuestion(4,"");
          break;
        case 5:
          adaptQuestion(5,"");
          break;
        default:
          console.log("error");
      }
      for (let j = 0; j < options_counter; j++) {
        question.innerHTML += ` 
         <ul class="option_group">
         <li class="option">${questions[count].options[0][j]}</li>
         </ul>
         `;
         }
         toggleActive();
    } 
    
    else {
      let options_counter = questions[question_count]["options"].length;
      question.innerHTML = `
      <h2>${questions[count].question}</h2>`;
      for (let j = 0; j < options_counter; j++) {
      question.innerHTML += ` 
       <ul class="option_group">
       <li class="option">${questions[count].options[j]}</li>
       </ul>
       `;
       }
       toggleActive();
    }
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

solvingMatrix = function() {
  let one = sessionStorage.getItem("firstFilter");
  let oneFilter = JSON.parse(one);
  let second = sessionStorage.getItem("secondOption");
  let secondFilterOption = oneFilter.filter(x => x.create === second);
  let secondSolutions = secondFilterOption.map(x => x.previousEvent);
  let thirdSolutions = secondFilterOption.map(x => x.velocity);
  let fourthSolutions = secondFilterOption.map(x =>x.solvedBy);
  let fifthSolutions = secondFilterOption.map(x => x.credibility);
  
  let uniqueSecondSolutions =[...new Set(secondSolutions)];
  let uniqueThirdSolutions =[...new Set(thirdSolutions)];
  let uniqueFourthSolutions =[...new Set(fourthSolutions)];
  let uniqueFifthSolutions =[...new Set(fifthSolutions)];

  sessionStorage.setItem("uniqueSecondSolutions", JSON.stringify(uniqueSecondSolutions));
  sessionStorage.setItem("uniqueThirdSolutions", JSON.stringify(uniqueThirdSolutions));
  sessionStorage.setItem("uniqueFourthSolutions", JSON.stringify(uniqueFourthSolutions));
  sessionStorage.setItem("uniqueFifthSolutions", JSON.stringify(uniqueFifthSolutions));
}


function bringBack (keyName, number){

  z = sessionStorage.getItem(keyName);
  zBack = JSON.parse(z);
  questions[number]["options"].push(zBack)
}

function adaptQuestion (number, adaptableText){
  let question = document.getElementById("questions");
  let options_counter = questions[question_count]["options"][0].length;
  question.innerHTML = `
  <h2>${questions[number].question}${adaptableText}?</h2>`
}