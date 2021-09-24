/*----- constants -----*/
const country = ["algeria", "seychelles", "ghana"];
const singer = ["dido", "pharell", "eagles"];
const city = ["london", "miami", "zihuatenejo"];

/*----- app's state (variables) -----*/
let spot;
let array;
let renderedText;
let newArray = [];
let wrongArray = [];
let sum = " ";
let guesses = 6;
let lettersFirstRowArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M']
let lettersSecondRowArray = ['N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

/*----- cached element references -----*/
let citiesBtn = document.getElementById("btn1");
let countriesBtn = document.getElementById("btn2");
let singersBtn = document.getElementById("btn3");
let categories = document.getElementsByClassName("cat-selectorBtn");
let header = document.querySelector(".header");
let lettersFirstRow = document.createElement("div");
let lettersSecondRow = document.createElement("div");
let container = document.getElementById("container");


/*----- event listeners -----*/
for (let category of categories){
    category.addEventListener("click", init, true);
}

/*----- functions -----*/
function init(e){
    header.textContent = e.target.textContent;
    console.log(e);
    lettersFirstRow.classList.add("first-row");
    container.appendChild(lettersFirstRow);
    // lettersFirstRow.textContent = "here"
    lettersSecondRow.classList.add("second-row");
    container.appendChild(lettersSecondRow);
    
    lettersFirstRowArray.forEach(keyboard);
    lettersSecondRowArray.forEach(keyboard);
}

function keyboard(letter){
    let button = document.createElement("div");
    button.textContent = letter;
    button.id = letter.toLowerCase();
    button.style.border = "2px solid white";
    button.style.color = "white";
    button.style.backgroundColor = "black";
    button.style.textAlign = "center"

    if (lettersFirstRowArray.includes(letter)){
        button.classList.add("first-row");
        lettersFirstRow.appendChild(button);
    } else {
        button.classList.add("second-row");
        lettersSecondRow.appendChild(button);
    }
    
    // lettersSecondRow.appendChild(button);
    
}




