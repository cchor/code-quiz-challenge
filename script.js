var timer;
var elem = document.getElementById("timer");

// learned from https://www.youtube.com/watch?v=4piMZDO5IOI
(function (timerCountDown) {
    var sec = 5;   
    timer = setInterval (()=>{
        elem.innerHTML = sec;
        sec --;
        if(sec < 0){
    clearInterval(timer);
}}, 1000)

})()


