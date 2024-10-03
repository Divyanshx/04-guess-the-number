let ans = Math.trunc((Math.random() * 100)+1)

let submit = document.querySelector("#subt")

let remaining_guess = document.querySelector(".lastResult")
let prev_guesses = document.querySelector(".guesses")
let loworhi = document.querySelector(".lowOrHi")
let startover = document.querySelector(".resultParas")
let userInput = document.querySelector(".guessField")

// let arr = []
let count = 0;
let playgame = true

let p =  document.createElement('p');

if(playgame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        let guess = parseInt(userInput.value);
        validateNumber(guess);
    })
}

function validateNumber(guess){
    if(isNaN(guess) || guess <=0 || guess > 100){
        alert("Enter a valid number");
    }
    else{
        // arr.push(guess)
        if(count == 9){
            displayUpdate(guess);
            displayMessage(`GAME OVER! Random Number was ${ans}`);
            endGame();
        }
        else{
            displayUpdate(guess);
            checkNumber(guess);
        }
    }
}

function checkNumber(guess){
    if(guess === ans){
        displayMessage(` Correct Guess !!! `);
        endGame();
    }
    else if(guess < ans){
        displayMessage(` Low `);
    }
    else{
        displayMessage(` High `);
    }
}

function displayUpdate(guess){
    userInput.value = '';
    prev_guesses.innerHTML += ` ${  guess}`;
    count++;
    remaining_guess.innerHTML = ` ${ 10-count}`;

}

function displayMessage(message){
    loworhi.innerHTML = `<h2> ${ message} </h2>`;
}


function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');          // created a class named button
    p.innerHTML = `<h2 id = "newGame"> Start New Game </h2>`;
    startover.appendChild(p);
    playgame = false;
    startGame();
}

function startGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
    ans = parseInt(Math.random() * 100 + 1);
    arr = [];
    count = 0;
    prev_guesses.innerHTML = '';
    remaining_guess.innerHTML = `${10 - count} `;
    userInput.removeAttribute('disabled');
    startover.removeChild(p);

    playgame = true;
    })
}
