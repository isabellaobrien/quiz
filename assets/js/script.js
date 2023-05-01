const startButton = document.getElementById('start-button');

startButton.addEventListener("click", startQuiz);

let intro = document.getElementById('intro');


function startQuiz(){
    console.log("started");
    startButton.classList.add('hide');
    intro.classList.add('hide');
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

// }
// function endGame(){

// }

// function resetGame(){

