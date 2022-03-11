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
    countDown();
    setQuestion();
}

//Create a Timer function so that it can be called inside other functions
function countDown(){

}
    // 1. Timer is started
    // 2. The questions are no longer hidden

//Function for the next set of questions
function setQuestion(){
    console.log(2)    
    // requires the variables for the questions
}

//Function for selecting the answers
function selectAnswer(){
    console.log(3)
    //requires the variables for the answers.
    //Will need to tie into the timer as when the answer is wrong the timer reduces
    //Will also need to store the users input into the local data
}
