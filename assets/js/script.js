// eventlisteners 
const startButton = document.getElementById('start-button');
startButton.addEventListener("click", startQuiz);

const answerOne = document.getElementById('answer-1');
answerOne.addEventListener('click', checkAnswer);

const answerTwo = document.getElementById('answer-2');
answerTwo.addEventListener('click', checkAnswer);

const answerThree = document.getElementById('answer-3');
answerThree.addEventListener('click', checkAnswer);

const answerFour = document.getElementById('answer-4');
answerFour.addEventListener('click', checkAnswer);

const nextButton = document.getElementById('next-button');
nextButton.addEventListener('click', nextQuestion);

const tryAgain = document.getElementById('try-again-button');
tryAgain.addEventListener('click', restartQuiz);

const saveButton = document.getElementById('save-button');
saveButton.addEventListener('click', showScores);

const playAgainButton = document.getElementById('play-again-button');
playAgainButton.addEventListener('click', restartQuiz);
/*the startQuiz function is activated once the start button is clicked.
  The function hides the starting page and shows the quiz page.
  the timer starts and the question to ask is selected.
 */
const startingPage = document.getElementById('starting-section');
const quizPage = document.getElementById('question-section');

function startQuiz(){
    quizFinished = false;
    startingPage.classList.add('hide');
    quizPage.classList.remove('hide');
    selectQuestion();
}

/*the countDown function should countdown from 10. if the timer reaches 0 you loose a live */

let timeLeft = 10;
const seconds = document.getElementById('seconds');
let interval;
startButton.addEventListener('click', ()=> {
    clearInterval(interval);
    interval = setInterval(startTime, 1000);
});

function startTime(){
    timeLeft--;
    if(timeLeft === -1 && quizFinished === false){
        lifeCount();
        const correct = questionPool[currentQuestionIndex].correctAnswer;
        for (let i = 0; i < answerButtons.length; i++) {
            if (answerButtons[i].innerHTML === correct) {
                answerButtons[i].classList.add('right'); 
            }
        }
        clearInterval(interval);
        nextButton.classList.remove('hide');
    }
    else{
        seconds.innerHTML = timeLeft;
    }
}


/*the function reduces the live count by 1. when the life count reaches 0 the gameOver function is called */

const lives = document.getElementById('lives');
let livesLeft = 3;
function lifeCount(){
    livesLeft -= 1;
    lives.innerHTML = livesLeft;
    
    if(livesLeft === 0){
        gameOver();
    }
    
}
const score = document.getElementById('score');
let scorePoints = 0;
function incrementScore(){
    scorePoints += 150;
    score.innerHTML = scorePoints;
}

let currentQuestionNumber = 1;
function incrementQuestionNumber(){
    currentQuestionNumber++;
    if(currentQuestionNumber === 8){
       clearInterval(interval) 
       endGame();
    }
}


/** the endGame function shows the finishing page once the question count has reached 7 */
const finishingPage = document.getElementById('finishing-section');

function endGame(){
    quizFinished = true;
    finishingPage.classList.remove('hide');
    quizPage.classList.add('hide');
}


/** the gameOver function displays the gameover page once the lifecount has reached 0 */
const lifeCountContainer = document.getElementById('life-count');
const gameOverPage = document.getElementById('gameover-section');
function gameOver(){
    lifeCountContainer.classList.add('hide');
    seconds.classList.add('hide');
    quizPage.classList.add('hide');
    gameOverPage.classList.remove('hide');
}
/*list of questions in the game, only seven will be asked */

const questionPool= [{
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
];

/**the function shuffles the pool of questions and then selects seven */

function selectQuestion(){
    questionPool.sort(()=> 0.5 - Math.random());
    displayQuestion(currentQuestionIndex);
}

const question = document.getElementById('question');


/**the function shuffles the answers and then displays the question and answers. */
let currentQuestionIndex = 0;

function displayQuestion(index){
    questionPool[currentQuestionIndex].choices.sort(()=> 0.5 - Math.random())
    const currentQuestion = questionPool[index];
    question.innerHTML = currentQuestion.question;
    answerOne.innerHTML = currentQuestion.choices[0];
    answerTwo.innerHTML = currentQuestion.choices[1];
    answerThree.innerHTML = currentQuestion.choices[2];
    answerFour.innerHTML = currentQuestion.choices[3];
    
}

const answerButtons = document.getElementsByClassName('answer-button');

/*the function compares the clicked answer to the correct answer. 
  If the answer clicked is the correct one the button will turn green,
  if the answer clicked is wrong the button will turn red and the correct answer will be highlighted*/


function checkAnswer(event){
    clearInterval(interval);
    const answerClicked = event.currentTarget.innerText;
    const correct = questionPool[currentQuestionIndex].correctAnswer;
    if(answerClicked === correct){
        this.classList.add('right');
        incrementScore();
    } 
    else{
        lifeCount();
        this.classList.add('wrong');
        for (let i = 0; i < answerButtons.length; i++) {
            if (answerButtons[i].innerHTML === correct) {
                answerButtons[i].classList.add('right'); 
            }
        } 
    }
    nextButton.classList.remove('hide');
}

/**the function allows you to move on to the next question. No question will be asked more than once.*/
let quizFinished = false
function nextQuestion(){
    nextButton.classList.add('hide');
    for(let i=0; i<answerButtons.length; i++){
        answerButtons[i].classList.remove('right');
        answerButtons[i].classList.remove('wrong');
    }
    questionPool.shift();
    startQuiz();
    incrementQuestionNumber();
}

nextButton.addEventListener('click', ()=>{
    timeLeft = 11;
    startTime();
    clearInterval(interval)
    interval = setInterval(startTime, 1000);
});
/**the restartQuiz fubction allows yo to restart the quiz by clicking the try again button */

function restartQuiz(){
    window.location.reload(true);
}
/**the showScores function allows you to momentarily save your score */
const username = document.getElementById('username');
const savedScore = document.getElementById('savedScore');
const player = document.getElementById('player');
function showScores(){
    player.innerHTML = username.value;
    localStorage.setItem('score', score.innerHTML);
    savedScore.innerHTML = localStorage.getItem('score');
    gameOverPage.classList.add('hide');
}
