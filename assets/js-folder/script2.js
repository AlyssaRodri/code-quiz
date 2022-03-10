// Declared time as an element
var timeEl = document.querySelector(".time");
var secondsLeft =300
var correctOrIncorrect = document.querySelector(".questionList")
// https://www.sitepoint.com/simple-javascript-quiz/
// set an array with the quiz questions and corresponding answers. Used the above website for reference
const quizQuestions = [
    {
        question: "What comes first in an HTML Document?",
        answers: {
            a: "head tag",
            b: "header tag",
            c: "h1 tag",
            d: "nav tag"
        }, 
        correctAnswer: "a"
    },
    {
        question: "Which of the following is not a primary data type?",
        answers: {
            a: "numbers",
            b: "boolean",
            c: "h1 tag",
            d: "string"
        }, 
        correctAnswer: "c"
    },
    {
        question: "When you use .appendChild where does the appended variable go?",
        answers: {
            a: "the end",
            b: "the beginning",
            c: "the middle",
            d: "a new variable."
        }, 
        correctAnswer: "a"
    },
    {
        question: "Which of the following methods changes a string into an integer?",
        answers: {
            a: ".toFixed()",
            b: ".parseFloat()",
            c: ".concat()",           
            d: ".parseInt()",

        }, 
        correctAnswer: "d"
    },
    {
        question: "Which line of code would you use to prevent default?",
        answers: {
            a: "event.defaultPrevent()",
            b: "event.PreventDefault()",
            c: "event.previentDefault()",
            d: "console.log(event)"
        }, 
        correctAnswer: "c"
    },
    {
        question: "Given that x=8 and y=10, which of the following is correct?",
        answers: {
            a: " x === y ",
            b: " x < y",
            c: " x && y",
            d: " x !== x "
        }, 
        correctAnswer: "b"
    },
]
console.log(quizQuestions)

//Write a function for the questions
function askQuestion(){
    for (var i = 0; i > quizQuestions; i++ )
    if (quizQuestions.question == quizQuestions.correctAnswer)
    correctOrIncorrect.textContent = "You are correct!"
    
}

askQuestion()
// Write a function for the time in a single question

function setTime() {
    var timeInterval = setInterval( function(){
        secondsLeft --;

    if (secondsLeft === 0) {
        clearInterval(timeInterval)

    }
    },  45000 //This means that there are 45 seconds per question
    )
}

