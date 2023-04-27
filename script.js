var sec = 5;
var elem = document.getElementById("timer");
var startBtn = document.getElementById("start-btn");
var gameContainer=document.querySelector(".game-container");
var startContainer=document.querySelector(".start-container");
var questionIndex = 0;

var questionArray = [
    {
        question: "What are variables used for?",
        answer1: "Placeholders for information",
        answer2: "To call a function",
        answer3: "They are operators",
        answer4: "All of the above",
        correctAnswer: "Placeholders for information"
    },
    {
        question: "What do loops do?",
        answer1: "They compare variables",
        answer2: "Make content go in a circle",
        answer3: "Work as a repeated IF statement",
        answer4: "All of the above",
        correctAnswer: "Work as a repeated IF statement"
    },
    {
        question: "What are functions?",
        answer1: "Placeholders for information",
        answer2: "They identify a specific value",
        answer3: "A block of code to perform a task",
        answer4: "All of the above",
        correctAnswer: "A block of code to perform a task"
    },
    {
        question: "What is an event listener?",
        answer1: "A method that records events",
        answer2: "A tool that listens to the user",
        answer3: "A method that waits for a specific event to occur",
        answer4: "All of the above",
        correctAnswer: "A method that waits for a specific event to occur"
    }
]


// learned from https://www.youtube.com/watch?v=4piMZDO5IOI
function timerCountDown() {
    elem.innerHTML = sec;
   var timer = setInterval (()=>{
        elem.innerHTML = sec;
        sec --;
        if(sec < 0){
    clearInterval(timer);
}}, 1000)

}

function renderQuestion() {
    document.getElementById("question").textContent = questionArray[questionIndex].question;
}
function startGame() {
    startContainer.style.display="none";
    gameContainer.style.display="flex";
    timerCountDown();
    renderQuestion();
}

startBtn.addEventListener("click",startGame);