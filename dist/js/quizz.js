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
  create:"Producto",
  forWho:"Personas",
  previousEvent:"Sí",
  velocity:"Pronto",
  solvedBy:"Mi empresa",
  credibility:"No necesita",
  similarTo: "Arquipets y Noia"
  },
  {
  id: "cod02",
  create:"Producto",
  forWho:"Personas",
  previousEvent:"Sí",
  velocity:"Pronto",
  solvedBy:"Terceros (conexión)",
  credibility:"No necesita",
  similarTo: "Desmadres"
  },
  {
  id: "cod03",
  create:"Producto",
  forWho:"Personas",
  previousEvent:"No",
  velocity:"Pronto",
  solvedBy:"Mi empresa",
  credibility:"No necesita",
  similarTo: "Ekolo y La Clotilde"
  },
  {
  id: "cod04",
  create:"Producto",
  forWho:"Personas",
  previousEvent:"No",
  velocity:"Pronto",
  solvedBy:"Mi empresa",
  credibility:"Se necesita expertos en el tema",
  similarTo: "Unbranded y Mamalama"
  },
  {
  id: "cod05",
  create:"Producto",
  forWho:"Personas",
  previousEvent:"No",
  velocity:"Pronto",
  solvedBy:"Terceros (conexión)",
  credibility:"No necesita",
  similarTo: "Conectagro, Perpetua y Alquilab"
  },
  {
  id: "cod06",
  create:"Producto",
  forWho:"Empresas pequeñas o medianas",
  previousEvent:"Sí",
  velocity:"Pronto",
  solvedBy:"Mi empresa",
  credibility:"Se necesita expertos en el tema",
  similarTo: "Bioflash"
  },
  {
  id: "cod07",
  create:"Producto",
  forWho:"Personas y Ayuda Social",
  previousEvent:"No",
  velocity:"Pronto",
  solvedBy:"Mi empresa",
  credibility:"Se necesita expertos en el tema",
  similarTo: "Outfie"
  },
  {
  id: "cod08",
  create:"Producto",
  forWho:"Personas y Ayuda Social",
  previousEvent:"No",
  velocity:"Pronto",
  solvedBy:"Mi empresa",
  credibility:"No necesita",
  similarTo: "Entre Árboles"
  }
]



//filtro los producto
//reduzco la matriz de resultados del filtro a una con solo las respuestas correctas en forWho, previousEvent, velocity, solvedBy, credibility, similarTo


//En caso 
//Casos de Producto
let createProd = models.filter(x => x.create == "Producto")
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
 
  //check answer by the user
  question_count++;
  show(question_count);
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

