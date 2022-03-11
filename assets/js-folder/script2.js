// Declared time as an element
var timeEl = document.querySelector(".time");
var secondsLeft = 300
var displayQuestion = document.querySelector(".questionHere")
var viewport = document.querySelector(".viewport")
var msgDiv = document.querySelector("#msg");


var questionList = ["What comes first in an HTML Document?", ]
var answers1 = [ "A - head tag", "B - header tag", "C -h1 tag", "D -nav tag"]




function init() {
    for( var i = 0; i >= questionList.length; i++)
        document.displayQuestion.textContent = questionList[i]
        
        var btn1 = document.createElement("button")
        btn1.setAttribute("id", "click1");
        btn1.textContent = "click 1"
        viewport.appendChild(btn1)

    //     viewport.addEventListener("click", function (event) {
    //     if (event.target.tagName.toLowerCase() === "button") {
    //         console.log("yes it was a button")
    // }
  
    }




function setTime() {
    var timeInterval = setInterval(function () {
        secondsLeft--;

        if (secondsLeft === 0) {
            clearInterval(timeInterval)

            //need second if statement for how much time per question.
        }
    }, 45000 //This means that there are 45 seconds per question
    )
}

init()