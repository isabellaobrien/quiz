const startButton = document.getElementById('start-button');

startButton.addEventListener("click", startQuiz);

function startQuiz(){
    console.log("started")
    startButton.classList.add('hide')
}