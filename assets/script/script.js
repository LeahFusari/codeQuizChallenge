
var timeLeft = 75;
var timerCountdown = 0;
var timeDisplay = document.querySelector("#timer")

// make start quiz button do something


function startQuiz(){
    var timerCountdown = setInterval(function(){
        console.log(timeLeft);
        timeLeft--;
        timeDisplay.textContent = "Time Left: " + timeLeft + " seconds";
            if (timeLeft === 0){
                clearInterval(timerCountdown);
            }
    },1000);
};

document.getElementById("startQuiz").addEventListener("click", startQuiz);