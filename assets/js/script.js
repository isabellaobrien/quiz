const startButton = document.getElementById('start-button');

startButton.addEventListener("click", startQuiz);

let startingPage = document.getElementById('starting-section');
let quizPage = document.getElementById('question-section');

function startQuiz(){
    console.log("started");
    startingPage.classList.add('hide');
    quizPage.classList.remove('hide')
    countdown();
    selectQuestion();
}


let timeLeft = 15; 
const seconds = document.getElementById('seconds');
let interval = setInterval(countdown, 1000);
function countdown(){
    console.log('countdown begun!')
    seconds.innerHTML = timeLeft;
    if(timeLeft > 0){
        timeLeft --;   
    }
}

// function lifeCount(){

// }

// function selectAnswer(){

// }


// function incrementScore(){

// }

// function nextQuestion(){

// }

// function gameOver(){

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
    choices: ["Gustav Klimt","Vincent van Gogh", "Edvar Munch", "Pablo Picasso"],
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
    // // let shuffledQuestions = questionPool.sort(()=> 0.5 - Math.random());
    // // let questionsToAsk = shuffledQuestions.slice(0,7);
    // // console.log(questionsToAsk)
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


let answerButtons = document.getElementsByClassName('answer-button')
let nextButton = document.getElementById('next-button');


function checkAnswer(event){
    
    clearInterval(interval);
    const answerClicked = event.currentTarget.innerText;
    let correct = questionPool[currentQuestionIndex].correctAnswer;
    console.log(answerClicked)
    if(answerClicked === correct){
            this.classList.add('right');
            console.log('right!'); 
        }
    else{
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
