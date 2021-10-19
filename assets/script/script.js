
var timeLeft = 75;
var timerCountdown = 0;


// make start quiz button do something


function startQuiz(){
    var timerCountdown = setInterval(function(){
        console.log(timeLeft);
        timeLeft--
            if (timeLeft === 0){
                console.log("Time is up.");
                clearInterval(timerCountdown);
            }
    },1000);
};

document.getElementById("startQuiz").addEventListener("click", startQuiz);