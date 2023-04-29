var sec = 5;
var elem = document.getElementById("timer");
var startBtn = document.getElementById("start-btn");
var gameContainer=document.querySelector(".game-container");
var startContainer=document.querySelector(".start-container");
var questionIndex = 0;

var questionArray = [
    {
        question: "What are variables used for?",
        options: ["Placeholders for information", "To call a function", "They are operators", "All of the above"],
        correctAns: "Placeholders for information",
    },
    {
        question: "What do loops do?",
        options: ["They compare variables", "Make content go in a circle", "Work as a repeated IF statement", "All of the above"],
        correctAns: "Work as a repeated IF statement",
    },
    {
        question: "What are functions??",
        options: ["Placeholders for information", "They identify a specific value", "A block of code to perform a task", "All of the above"],
        correctAns: "A block of code to perform a task",
    },
    {
        question: "What is an event listener?",
        options: ["A method that records events", "A tool that listens to the user", "Work as a repeated IF statement", "A method that waits for a specific event to occur"],
        correctAns: "A method that waits for a specific event to occur",
    }

]

function renderQuestion() {
    var questionArray = questionEl[questionIndex];
    var questionEl = document.getElementById('question.title');
    questionEl.textContent = questionArray.title;
    correctAnsEl.innerHTML = '';

    for (var i = 0; i < questionArray.options.length; i++) {
    var questAns = questionArray.options[0];
    var choiceNode = document.createElement('button');
    choiceNode.setAttribute('answer-button', 'options');
    choiceNode.setAttribute('value', options);
    choiceNode.textContent = i + 1 +'.' + options;
    answerEl.appendChild(choiceNode);

    }
}
    console.log(questionArray);


function startGame() {
    startContainer.style.display="none";
    gameContainer.style.display="flex";
    questionCounter = 0;
    score = 0;
    timerCountDown();
    renderQuestion();
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
