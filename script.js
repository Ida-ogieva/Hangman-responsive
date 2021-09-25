/*----- constants -----*/
const countries = ["algeria", "seychelles", "ghana"];
const singers = ["dido", "pharell", "eagles"];
const cities = ["london", "miami", "zihuatenejo"];

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
let categoriesEl = document.getElementsByClassName("select-cat")[0]   //get elementsbyclassname returns a nodelist. so if there's only one element, you need [0]

let header = document.querySelector(".header");
let letters = document.createElement("div")
let lettersFirstRow = document.createElement("div");
let lettersSecondRow = document.createElement("div");
let lettersOneRow = document.createElement("div");
let container = document.getElementById("container");


/*----- event listeners -----*/
for (let category of categories){
    category.addEventListener("click", init, true);
}

letters.addEventListener("click", displayGuesses)

/*----- functions -----*/

function displayGuesses(e){
    console.log(e)
    console.log(e.target.id)
    let guess = document.getElementById(e.target.id)
    guess.style.backgroundColor = "white";
    console.log(guess.style.backgroundColor)
}

function init(e){
    header.textContent = e.target.textContent;
    console.log(e);
    letters.id = "letters";
    lettersFirstRow.classList.add("first-row");
    letters.appendChild(lettersFirstRow);
    // container.appendChild(letters);

    lettersSecondRow.classList.add("second-row");
    letters.appendChild(lettersSecondRow);
    // container.appendChild(letters);

    lettersOneRow.classList.add("one-row");
    letters.appendChild(lettersOneRow);
    container.appendChild(letters);
    
    
    alphabetsArray.forEach(keyboard);
    
    categoriesEl.remove();
    
    const categoryId = String(e.target.id);
    if (categoryId === "cities"){
        array = cities;
        console.log(array)
    } else if (categoryId === "countries"){
        array = countries;
        console.log(array)
    } else if (categoryId === "singers"){
        array = singers;
        console.log(array)
    }
}

function keyboard(letter){
    
    
    // let button2 = document.createElement("div");
    // button2.textContent = letter;
    // button2.id = letter.toLowerCase();
    // button2.style.border = "2px solid white";
    // button2.style.color = "white";
    // button2.style.backgroundColor = "pink"
    // button2.style.textAlign = "center"
    // button2.classList.add("one-row");
    // lettersOneRow.appendChild(button2);

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

    
    
    
}




