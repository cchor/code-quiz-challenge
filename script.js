var sec = 5;
var elem = document.getElementById("timer");
var startBtn = document.getElementById("start-btn");
var gameContainer=document.querySelector(".game-container");
var startContainer=document.querySelector(".start-container");
var questionIndex = 0;

var questionArray = [
    {
        title: "What are variables used for?",
        choices: ["Placeholders for information", "To call a function", "They are operators", "All of the above"],
        answer: "Placeholders for information",
    },
    {
        title: "What do loops do?",
        choices: ["They compare variables", "Make content go in a circle", "Work as a repeated IF statement", "All of the above"],
        answer: "Work as a repeated IF statement",
    },
    {
        title: "What are functions??",
        choices: ["Placeholders for information", "They identify a specific value", "A block of code to perform a task", "All of the above"],
        answer: "A block of code to perform a task",
    },
    {
        title: "What is an event listener?",
        choices: ["A method that records events", "A tool that listens to the user", "Work as a repeated IF statement", "A method that waits for a specific event to occur"],
        answer: "A method that waits for a specific event to occur",
    }

]
console.log(questionArray);

function getQuestion() {
    var currentQuestion = questionArray[questionIndex];
    var questionEl = document.getElementById('question');
    var choicesEl = document.getElementsByClassName('answer-button');
    choicesEl.textContent = currentQuestion.title;
    choicesEl.innerHTML = '';

    for (var i = 0; i < currentQuestion.choices.length; i++) {
    var correctAns = questionIndex.options[0];
    var choiceNode = document.createElement('button');
    choiceNode.setAttribute('answer-button', 'answer');
    choiceNode.setAttribute('value', choicesEl);
    choiceNode.textContent = i + 1 +'.' + choicesEl;
    answerEl.appendChild(choiceNode);

    }
}
    // console.log(currentQuestion);


function startGame() {
    startContainer.style.display="none";
    gameContainer.style.display="flex";
    questionCounter = 0;
    score = 0;
    timerCountDown();
    getQuestion();
}

startBtn.addEventListener("click",startGame);


// countdown timer
function timerCountDown() {
    elem.innerHTML = sec;
   var timer = setInterval (()=>{
        elem.innerHTML = sec;
        sec --;
        if(sec < 0){
    clearInterval(timer);
}}, 1000)

}
