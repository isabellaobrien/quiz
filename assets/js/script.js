/**the startQuiz function is activated once the start button is clicked.
 * The function hides the starting page and shows the quiz page.
 * the timer starts and the question to ask is selected.
 */

const startButton = document.getElementById('start-button');

startButton.addEventListener("click", startQuiz);

let startingPage = document.getElementById('starting-section');
let quizPage = document.getElementById('question-section');

function startQuiz(){
    console.log("started");
    startingPage.classList.add('hide');
    quizPage.classList.remove('hide')
    selectQuestion();
}

/**the countDown function should countdown from 10. if the timer reaches 0 you loose a live */

let timeLeft = 10;
let seconds = document.getElementById('seconds');
let Interval;
startButton.addEventListener('click', ()=> {
    clearInterval(Interval);
    Interval = setInterval(startTime, 1000)
})

function startTime(){
    timeLeft--;
    if(timeLeft === -1){
        lifeCount()
        clearInterval(Interval)
        nextButton.classList.remove('hide')
    }
    else{
        seconds.innerHTML = timeLeft;
    }
}


/**the function reduces the live count by 1. when the life count reaches 0 the gameOver function is called */

let lives = document.getElementById('lives')
let livesLeft = 3
function lifeCount(){
    livesLeft -= 1;
    lives.innerHTML = livesLeft;
    if(livesLeft === 0){
        gameOver()
    }
}

// function incrementScore(){

// }

let currentQuestionNumber = 1;

function incrementQuestionNumber(){
    currentQuestionNumber++;
    console.log(currentQuestionNumber)
    if(currentQuestionNumber === 7){
       endGame();
       console.log('end game!')
    }
}

/** the endGame function shows the finishing page once the question count has reached 7 */
let finishingPage = document.getElementById('finishing-section');

function endGame(){
    finishingPage.classList.remove('hide');
    quizPage.classList.add('hide');
}

/** the gameOver function displays the gameover page once the lifecount has reached 0 */
let lifeCountContainer = document.getElementById('life-count');
let gameOverPage = document.getElementById('gameover-section');
function gameOver(){
    lifeCountContainer.classList.add('hide');
    seconds.classList.add('hide');
    quizPage.classList.add('hide');
    gameOverPage.classList.remove('hide');
}
/**list of questions in the game, only seven will be asked */

let questionPool= [{
    question: "How many elements are in the periodic table?",
    choices: ["120","178", "104", "118"],
    correctAnswer: "118"
},
{
    question: "Gouda is a popular cheese originating from which country?",
    choices: ["Germany","The Netherlands", "France", "Italy"],
    correctAnswer: "The Netherlands"  
},
{
    question: "What is the most sold flavour of Walker's crisps?",
    choices: ["Ready Salted","Salt and Vinegar", "Prawn Cocktail", "Cheese and Onion"],
    correctAnswer: "Cheese and Onion"  
},
{
    question: "Who painted the famous artwork 'The Scream'?",
    choices: ["Gustav Klimt","Vincent van Gogh", "Edvard Munch", "Pablo Picasso"],
    correctAnswer: "Edvard Munch"  
},
{
    question: "Which car maker produced the Focus, Mondeo and Fiesta models?",
    choices: ["Ford","Fiat","Peugeot","Volkswagen"],
    correctAnswer: "Ford"
},
{
    question: "The French word 'lapin' translates to which animal in English?",
    choices: ["Fox","Lizard","Lion","Rabbit"],
    correctAnswer: "Rabbit"
},
{
    question: "If you were to leave Gibraltar for the port of Tangier, in which country would you arrive?",
    choices: ["Greece","Morocco","Portugal","Algeria"],
    correctAnswer: "Morocco"  
},
{
    question: "Cali, Medellín and Bogotá are the three largest cities in which South American country?",
    choices: ["Cuba","Mexico","Colombia","Argentina"],
    correctAnswer: "Colombia"
},
{
    question: "What is the main ingredient for the German Blutwurst?",
    choices: ["Blood","Pork","Onions","Veal"],
    correctAnswer: "Blood"  
},
{
    question: "The American alligator can grow up to what length?",
    choices: ["2m","4m","6m","8m"],
    correctAnswer: "6m"  
},
{
    question: "Mysophobia is the fear of what?",
    choices: ["Injections","Spiders","the Dark","Germs"],
    correctAnswer: "Germs"  
},
{
    question: "In what year, as a consequence of the Second World War, was food rationing introduced to Britain?",
    choices: ["1940","1938","1942","1935"],
    correctAnswer: "1940"  
},
{
    question: "The film Tangled is a retelling of which German fairy tale?",
    choices: ["Rumpelstiltskin","Rapunzel","Hansel and Gretel","Snow White"],
    correctAnswer: "Rapunzel"  
},
{
    question: "What is the capital city of Australia?",
    choices: ["Adelaide","Melburne","Sidney","Canberra"],
    correctAnswer: "Canberra"  
},
{
    question: "Glossectomy is the removal of all of or part of which body part?",
    choices: ["Tongue","Toe","Liver","Earlobe"],
    correctAnswer: "Tongue"  
},
{
    question: "With over 222 million units sold, what is Apple's highest-selling iPhone model?",
    choices: ["iphone 5c","iPhone 6/6 Plus","iphone 14","iphone x"],
    correctAnswer: "iPhone 6/6 Plus"  
},
{
    question: "How many Pirates of the Caribbean films have been released?",
    choices: ["Five","Four","Three","Seven"],
    correctAnswer: "Five"  
},
{
    question: "Which year did the European Union first introduce the Euro as currency?",
    choices: ["2005","1886","2001","1999"],
    correctAnswer: "1999"  
},
{
    question: "What instrument does Lisa Simpson play?",
    choices: ["Flute","Guitar","Saxophone","Violin"],
    correctAnswer: "Saxophone"  
},
{
    question: "In which state was former US President Barack Obama born?",
    choices: ["Hawaii","Ohio","Arizona","Washington"],
    correctAnswer: "Hawaii"  
},
{
    question: "In 1952 Albert Einstein was offered the Presidency of which country?",
    choices: ["Germany","USA","Israel","Austria"],
    correctAnswer: "Israel"  
},
]

/**the function shuffles the pool of questions and then selects seven */

function selectQuestion(){
    questionPool.sort(()=> 0.5 - Math.random())
    displayQuestion(currentQuestionIndex);
}

let question = document.getElementById('question');
let answerOne = document.getElementById('answer-1');
let answerTwo = document.getElementById('answer-2');
let answerThree = document.getElementById('answer-3');
let answerFour = document.getElementById('answer-4');

/**the function shuffles the answers and then displays the question and answers. */
let currentQuestionIndex = 0

function displayQuestion(index){
    const currentQuestion = questionPool[index]
    question.innerHTML = currentQuestion.question;
    answerOne.innerHTML = currentQuestion.choices[0];
    answerTwo.innerHTML = currentQuestion.choices[1];
    answerThree.innerHTML = currentQuestion.choices[2];
    answerFour.innerHTML = currentQuestion.choices[3];
    
}

answerOne.addEventListener('click', checkAnswer);
answerTwo.addEventListener('click', checkAnswer);
answerThree.addEventListener('click', checkAnswer);
answerFour.addEventListener('click', checkAnswer);


let answerButtons = document.getElementsByClassName('answer-button');
let nextButton = document.getElementById('next-button');

/**the function compares the clicked answer to the correct answer. 
 * If the answer clicked is the correct one the button will turn green,
 * if the answer clicked is wrong the button will turn red and the correct answer will be highlighted*/
function checkAnswer(event){
    
    clearInterval(Interval);
    const answerClicked = event.currentTarget.innerText;
    let correct = questionPool[currentQuestionIndex].correctAnswer;
    console.log(answerClicked)
    if(answerClicked === correct){
        this.classList.add('right');
        console.log('right!'); 
    } 
    else{
        lifeCount();
        console.log('life lost')
        this.classList.add('wrong');
        console.log('wrong!');
        for (let i = 0; i < answerButtons.length; i++) {
            if (answerButtons[i].innerHTML === correct) {
                answerButtons[i].classList.add('right'); 
            }
        } 
    }
    nextButton.classList.remove('hide');
}

/**the function allows you to move on to the next question. No question will be asked more than once.*/

nextButton.addEventListener('click', nextQuestion)
function nextQuestion(){
    nextButton.classList.add('hide')
    for(let i=0; i<answerButtons.length; i++){
        answerButtons[i].classList.remove('right');
        answerButtons[i].classList.remove('wrong');
    }
    questionPool.shift()
    startQuiz();
    incrementQuestionNumber();
}

nextButton.addEventListener('click', ()=>{
    timeLeft = 11;
    startTime(timeLeft);
    Interval = setInterval(startTime, 1000)
})
/**the restartQuiz fubction allows yo to restart the quiz by clicking the try again button */
let tryAgain = document.getElementById('try-again-button');
tryAgain.addEventListener('click', function(){
    timeLeft = 11;
    startTime(timeLeft);
    Interval = setInterval(startTime, 1000);
    livesLeft = 4;
    lifeCount(livesLeft);
    incrementQuestionNumber(currentQuestionNumber);
    currentQuestionNumber = 0;
    restartQuiz();

})

function restartQuiz(){
    gameOverPage.classList.add('hide');
    quizPage.classList.remove('hide');
    lifeCountContainer.classList.remove('hide');
    seconds.classList.remove('hide');
    for(let i=0; i<answerButtons.length; i++){
        answerButtons[i].classList.remove('right');
        answerButtons[i].classList.remove('wrong');
    }
}


