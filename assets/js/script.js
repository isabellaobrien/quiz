const startButton = document.getElementById('start-button');

startButton.addEventListener("click", startQuiz);

let startingPage = document.getElementById('starting-section');
let quizPage = document.getElementById('question-section');

function startQuiz(){
    console.log("started");
    startingPage.classList.add('hide');
    quizPage.classList.remove('hide')
}

// function countdown(){

// }

// function lifeCount(){

// }

// function shuffle(){

// }

// function displayQuestion(){

// }

// function selectAnswer(){

// }

// function checkAnswer(){

// }

// function incrementScore(){

// }

// function nextQuestion(){

// }

// function gameOver(){
