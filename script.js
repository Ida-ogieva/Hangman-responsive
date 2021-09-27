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

let incorrectGuesses = document.createElement("p");
let header = document.querySelector(".header");
let letters = document.createElement("div")
let lettersFirstRow = document.createElement("div");
let lettersSecondRow = document.createElement("div");
let lettersOneRow = document.createElement("div");
let container = document.getElementById("container");
let image = document.querySelector("img");
let hints = document.createElement("p")


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
    
    guess = document.getElementById(e.target.id)
    selection = guess.textContent;
    guess.style.backgroundColor = "grey";
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
            console.log(displayArray)
            categoriesEl.innerText = displayArray.join(' ');
        
        }
    }
    if (wrongArray.includes(selection)){
        return wrongArray
    } else {
        if (!word.includes(selection)){
            wrongArray.push(selection);
            console.log(wrongArray);
            guesses = guesses - 1;
        }
    }

    console.log(guesses);
    incorrectGuesses.classList.add("incorrect-display");
    container.appendChild(incorrectGuesses);
    console.log("this is the wrong array", wrongArray)
    incorrectGuesses.innerText = "Incorrect Guesses: " + wrongArray.toString()
    console.log(wrongArray.toString())
    hangmanDisplay();
}



function init(e){
    header.textContent = e.target.textContent;
    console.log(e);
    letters.id = "letters";
    lettersFirstRow.classList.add("first-row");
    letters.appendChild(lettersFirstRow);
    lettersSecondRow.classList.add("second-row");
    letters.appendChild(lettersSecondRow);
    lettersOneRow.classList.add("one-row");
    letters.appendChild(lettersOneRow);
    container.appendChild(letters);
    
    
    alphabetsArray.forEach(keyboard);
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

function hangmanDisplay(){
    if (guesses <= 0) {
        // renderedText = "You lost! Game over";
        // renderedTextColor = "red";
        // render();
        // lose.play();
        // displayTextEl.textContent = array[spot].toUpperCase();
        image.src = "media/0-guesses-left.jpg";
    } if (guesses === 5) {
        image.src = "media/5-guesses-left.jpg";
    } if (guesses === 4 ) {
        image.src = "media/4-guesses-left.jpg";
    } if (guesses === 3 ) {
        image.src = "media/3-guesses-left.jpg";
    } if (guesses === 2 ) {
        image.src = "media/2-guesses-left.jpg";
    } if (guesses === 1) {
        image.src = "media/1-guess-left.jpg";
        hint()
    }
}

function hint() {
    hints.classList.add("hint-section");
    container.appendChild(hints);
    if (array === countries){
        if (spot === 0){
            hints.innerHTML = "<span>HINT: Located in North Africa, this country shares borders with Morocco, Tunisia and Libya</span>"
        } else if (spot === 1){
            hints.innerHTML = "<span>HINT: An island nation located northeast of Madagascar. Rhymes with sea shells</span>"
        } else if (spot === 2){
            hints.innerHTML = "<span>HINT: The second-most populous country in West Africa, after Nigeria</span>"
        }
    } else if (array === cities){
        if (spot === 0){
            hints.innerHTML = "<span>HINT: Home to 'Big Ben', Arsenal, Chelsea, Tottenham and West Ham </span>"
        } else if (spot === 1){
            hints.innerHTML = "<span>HINT: Home to Dolphins, Marlins, Heat</span>"
        } else if (spot === 2){
            hints.innerHTML = "<span>HINT: Located in Mexico, destination of the final scene of The Shawshank Redemption</span>"
        }
    } else if (array === singers){
        if (spot === 0){
            hints.innerHTML = "<span>HINT: British singer - best known for her 2000's hit 'Thank You' and her feature with Eminem on 'Stan'</span>"
        } else if (spot === 1){
            hints.innerHTML = "<span>HINT: Singer-songwriter and producer. 'Blurred Lines', 'Get Lucky', 'Happy'</span>"
        } else if (spot === 2){
            hints.innerHTML = "<span>HINT: American rock band responsible for one of the greatest songs of all time 'Hotel California'</span>"
        }
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





