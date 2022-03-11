//Setting the global variables
const startButton = document.getElementById("start-btn")
const nextButton = document.getElementById("skip-btn")
const questionContainerEl = document.getElementById("question-container")
const timeEl = document.getElementById("timer-btn")
const questionEl = document.getElementById("question")
const answerButtonsEl = document.getElementById("answer-buttons")

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener("click", startGame)
nextButton.addEventListener("click", () => {
    currentQuestionIndex++
    setQuestion()
})
//When start game is hit!
function startGame(){
    // console.log(1)
    //hide the start button
    startButton.classList.add("hide");
    //set shuffled questions equal to shuffled array
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    //remove the hide class from the question container so that the questions appear
    questionContainerEl.classList.remove("hide");
    //When the game is started, so is the timer!
    countDown();
    setQuestion();
}

//Create a Timer function so that it can be called inside other functions
function countDown(){
    console.log(2)
}
    // 1. Timer is started


//Function for the next set of questions
function setQuestion(){
    // console.log(3)
    //add another function that will reset the box so that it looks like the same it did in the beginning instead of appending on.
    resetState()
    // shuffles the questions so that they are in a new order every time
    showQuestion(shuffledQuestions[currentQuestionIndex])    
    // requires the variables for the questions
}

function showQuestion (question) {
    //loops through our questions questions
    questionEl.innerText = question.question
    //this loops through our answers
    question.answers.forEach( answer =>{
        // creates the element for each of our buttons
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add ("btn")
        //add if statement
        if (answer.correct) {
            button.dataset.correct = answer.correct
        } // create else element here for incorrect answer and how it impacts our time.
        button.addEventListener("click", selectAnswer)
        answerButtonsEl.appendChild(button)
        } )
}

function resetState() {
    nextButton.classList.add("hide");
    // if there is a first child on the answerButtonsEl
    while (answerButtonsEl.firstChild) {
        //then we remove that child
        answerButtonsEl.removeChild(answerButtonsEl.firstChild)
    }
}

//Function for selecting the answers
function selectAnswer(e){
    // console.log(4)
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    //create an array so we can use it in our for each shoot
    Array.from(answerButtonsEl.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    //checks to make sure that we are not on the last question
    if (shuffledQuestions.length > currentQuestionIndex + 1){
        nextButton.classList.remove("hide")
    } else {
        startButton.innerText = "Restart"
        startButton.classList.remove("hide")
    }
    //requires the variables for the answers.
    //Will need to tie into the timer as when the answer is wrong the timer reduces
    //Will also need to store the users input into the local data
}

function setStatusClass(element, correct) {
    clearStatusClass (element)
    if (correct){
        element.classList.add("correct")
    } else{ 
        element.classList.add("wrong")
    }
}

function clearStatusClass(element) {
    element.classList.remove("correct")
    element.classList.remove("wrong")
}

//Create the variable for all of our questions and answers.
//https://www.youtube.com/watch?v=riDzcEQbX6k

var questions = [
    {
        question: "What comes first in an HTML Document?",
        answers: [
            { text: "head tag", correct: true },
            { text: "header tag", correct: false},
            { text: "h1 tag", correct: false},
            { text: "nav tag", correct: false},
        ]
    },
    {
        question: "Which of the following is not a primary data type?",
        answers: [
            {text: "numbers", correct: false},
            {text: "boolean", correct: false},
            {text: "h1 tag", correct: true },
            {text: "string", correct: false}
        ]
    },
    {
        question: "When you use .appendChild where does the appended variable go?",
        answers: [
            { text: "the end", correct: true},
            { text: "the beginning", correct: false},
            { text: "the middle", correct: false},
            { text: "a new variable", correct: false},
            ]
    },
    {
        question: "Which of the following methods changes a string into an integer?",
        answers: [
            {text: ".toFixed()", correct: false},
            {text: ".parseFloat()", correct: false},
            {text: ".concat()", correct: false},
            {text: ".parseInt()", correct: true},
        ]
    },
    {
        question: "Which line of code would you use to prevent default?",
        answers: [
            { text:"event.defaultPrevent()", correct: false},
            { text:"event.PreventDefault()", correct: false},
            { text:"event.preventDefault()", correct: true},
            { text:"console.log(event)", correct: false},
        ]
    },
    {
        question: "Given that x=8 and y=10, which of the following is correct?",
        answers: [
            { text:" x === y ", correct: false},
            { text:" x < y", correct: true},
            { text:" x && y", correct: false},
            { text:" x !== x ", correct: false},
        ]
    },
]
