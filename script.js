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
let alphabetsArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

/*----- cached element references -----*/
let citiesBtn = document.getElementById("btn1");
let countriesBtn = document.getElementById("btn2");
let singersBtn = document.getElementById("btn3");
let categories = document.getElementsByClassName("cat-selectorBtn");
let header = document.querySelector(".header");
let lettersFirstRow = document.createElement("div");
let lettersSecondRow = document.createElement("div");
let lettersOneRow = document.createElement("div");
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

    lettersSecondRow.classList.add("second-row");
    container.appendChild(lettersSecondRow);

    lettersOneRow.classList.add("one-row");
    container.appendChild(lettersOneRow);
    
    alphabetsArray.forEach(keyboard);
}

function keyboard(letter){
    let button1 = document.createElement("div");
    button1.textContent = letter;
    button1.id = letter.toLowerCase();
    button1.style.border = "2px solid white";
    button1.style.color = "white";
    button1.style.backgroundColor = "black";
    button1.style.textAlign = "center"
    if (alphabetsArray.indexOf(letter) <= 12){
        button1.classList.add("first-row");
        lettersFirstRow.appendChild(button1);
    } else {
        button1.classList.add("second-row");
        lettersSecondRow.appendChild(button1);
    }
    
    let button2 = document.createElement("div");
    button2.textContent = letter;
    button2.id = letter.toLowerCase();
    button2.style.border = "2px solid white";
    button2.style.color = "white";
    button2.style.backgroundColor = "black";
    button2.style.textAlign = "center"
    button2.classList.add("one-row");
    lettersOneRow.appendChild(button2);
    
    
    
}




