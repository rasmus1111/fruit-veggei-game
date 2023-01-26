// Declare two arrays, one for fruits and one for vegetables
const fruits = ["Acai", "Durian", "Mangosteen", "Rambutan", "Kiwano", "Gooseberry", "Lychee", "Persimmon", "Pomegranate", "Soursop", "Apple", "Banana", "Cherry", "Grape", "Orange"];
const vegetables = ["Artichoke", "Bok Choy", "Celeriac", "Eggplant", "Fennel", "Jicama", "Kohlrabi", "Leeks", "Nopales", "Okra", "Parsnips", "Radicchio", "Scallions", "Turnips", "Carrots", "Cauliflower"];

let displayedItem;
// variable to store the numbers
let rightScore = 0;
let wrongScore = 0;

// function to randomly display a fruit or vegetable
function startGame() {
    if (Math.random() > 0.5)
        displayFruit();
    else
        displayVegetable();
}

//display a random fruit from the fruits array
function displayFruit() {
    displayedItem = 'fruit';
    var index = Math.floor(Math.random() * fruits.length);
    document.getElementById("quiz-question").innerHTML = fruits[index];
}

//display a random vegetable from the vegetables array
function displayVegetable() {
    displayedItem = 'vegie';
    var index = Math.floor(Math.random() * vegetables.length);
    document.getElementById("quiz-question").innerHTML = vegetables[index];
}

//  function check if the user has won the game
function checkVictory() {
    if (rightScore === 10) {
        document.getElementById('victory-message').innerHTML = 'YOU WON!';
        resetScore();
    }
}

// function to check if the user has lost the game
function checkLoss() {
    if (wrongScore === 10) {
        document.getElementById('loss-message').innerHTML = 'YOU LOST!';
        resetScore();
    }
}

// function to reset the score and update the score display
function resetScore() {
    document.getElementById("right-answer-score").innerHTML = 0;
    rightScore = 0;
    document.getElementById("wrong-answer-score").innerHTML = 0;
    wrongScore = 0;
}

// function to reset the victory and loss message
function resetMessage() {
    if (wrongScore === 0 && rightScore === 0) {
        document.getElementById('loss-message').innerHTML = '';
        document.getElementById('victory-message').innerHTML = '';
    }
}

// function to increment the users score
function checkAnswer(item) {
    if (displayedItem === item) {
        rightScore = rightScore + 1;
        document.getElementById("right-answer-score").innerHTML = rightScore;
    } else {
        wrongScore = wrongScore + 1;
        document.getElementById("wrong-answer-score").innerHTML = wrongScore;
    }
    startGame();
}

// start the game when the page loads 
window.onload = startGame;
// GEt element by id from google

document.getElementById("fruit-button").addEventListener("click", function () {
    resetMessage();
    checkAnswer("fruit");
    checkVictory();
    checkLoss();
});

document.getElementById("vegie-button").addEventListener("click", function () {
    resetMessage();
    checkAnswer("vegie");
    checkVictory();
    checkLoss();
});