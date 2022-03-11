//Setting the global variables
const startButton = document.getElementById("start-btn")
const questionContainerEl = document.getElementById("question-container")
const timeEl = document.getElementById("timer-btn")


startButton.addEventListener("click", startGame)

//When start game is hit!
function startGame(){
    console.log(1)
    //hide the start button
    startButton.classList.add("hide");
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
    console.log(3)    
    // requires the variables for the questions
}

//Function for selecting the answers
function selectAnswer(){
    console.log(4)
    //requires the variables for the answers.
    //Will need to tie into the timer as when the answer is wrong the timer reduces
    //Will also need to store the users input into the local data
}

//Create the variable for all of our questions and answers.
//https://www.youtube.com/watch?v=riDzcEQbX6k

var quizQuestions = [
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
            { text:"event.previentDefault()", correct: true},
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
