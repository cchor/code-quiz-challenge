var timer;
var elem = document.getElementById("timer");

// learned from https://www.youtube.com/watch?v=4piMZDO5IOI
(function (timerCountDown) {
    var sec = 2;
    timer = setInterval (()=>{
        elem.innerHTML = sec;
        sec --;
    }, 1000)

// stop timer at 0 - not working
// if(sec <= 0){
//     timer = clearInterval();
// return;
// }


})()