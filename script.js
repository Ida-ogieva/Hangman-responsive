/*----- constants -----*/
const countries = ["ALGERIA", "SEYCHELLES", "GHANA"];
const singers = ["DIDO", "PHARELL", "EAGLES"];
const cities = ["LONDON", "MIAMI", "ZIHUATENEJO"];

/*----- app's state (variables) -----*/
let selection;
let spot;
let array;
let word;

let guess;

let displayArray;
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

function result(){
    
    console.log("this is the", selection)
    if (word.includes(selection)){
        console.log("the word has this letter", selection)
    } else{
        console.log("the word doesn't have this", selection)
    }

}

function displayGuesses(e){
    // console.log(e)
    // console.log(e.target.id)
    guess = document.getElementById(e.target.id)
    selection = guess.textContent;
    guess.style.backgroundColor = "grey";
    // console.log("this is your guess", guess.textContent)
    // console.log(typeof(guess.textContent))
    
    // let word = array[spot];


    console.log("this is the word", word)
    console.log(spot)
    console.log("this is selection", selection)
    result()
    guessedLetters()       
}

function guessedLetters(){
    for (let i=0; i < word.length; i++){
        if (selection === word[i]) {
            newArray[i] = selection;
            console.log("THIS IS the new array", newArray);
            displayArray = categoriesEl.innerText.split(' ');
            displayArray[i] = selection;
            categoriesEl.innerText = displayArray.join(' ');
        }
    }
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
    // displayMissingLetters();
    
    // categoriesEl.remove();
    
    const categoryId = String(e.target.id);
    if (categoryId === "cities"){
        array = cities;
        displayMissingLetters()
        console.log("this is the cat id", array)
    } else if (categoryId === "countries"){
        array = countries;
        displayMissingLetters()
        console.log(array)
    } else if (categoryId === "singers"){
        array = singers;
        displayMissingLetters()
        console.log(array)
    }
    
}


function keyboard(letter){
    

    let button = document.createElement("div");
    button.textContent = letter;
    button.id = letter.toLowerCase();
    button.style.border = "2px solid white";
    button.style.color = "white";
    button.style.backgroundColor = "black";
    button.style.textAlign = "center"
    if (alphabetsArray.indexOf(letter) <= 12){
        button.classList.add("first-row");
        lettersFirstRow.appendChild(button);
    } else {
        button.classList.add("second-row");
        lettersSecondRow.appendChild(button);
    }
    
}

function displayMissingLetters () {
    spot = Math.floor(Math.random() * 3);
    word  = array[spot];
    let missingWord = word.split('');
    for (var i = 0; i <missingWord.length; i++){
        missingWord[i] = "_";
    };
    categoriesEl.classList.add("missing-word")
    categoriesEl.textContent = missingWord.join(" ") 
    
}





