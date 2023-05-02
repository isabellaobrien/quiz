const startButton = document.getElementById('start-button');

startButton.addEventListener("click", startQuiz);

let startingPage = document.getElementById('starting-section');
let quizPage = document.getElementById('question-section');

function startQuiz(){
    console.log("started");
    startingPage.classList.add('hide');
    quizPage.classList.remove('hide')
    countdown();
}

let timeLeft = 15; 
const seconds = document.getElementById('seconds');
setInterval(countdown, 1000);
function countdown(){
    console.log('countdown begun!')
    
    seconds.innerHTML = timeLeft;
    if(timeLeft > 0){
        timeLeft --;
        
    }
}

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
