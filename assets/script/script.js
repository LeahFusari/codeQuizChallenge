
var timeLeft = 75;
var timerCountdown = 0;
var questionNum = 0;
var timeDisplay = document.querySelector("#timer")

// Array of objects (questions, choices and correct answers) with a nested array of choices
var questions = [
    {
        title: "Question 1....",
        choices: ["choice1", "choice2", "choice3", "choice4"],
        correctAsr: "choice4"
    },

    {
        title: "Question 2....",
        choices: ["choice1", "choice2", "choice3", "choice4"],
        correctAsr: "choice3"
    },

    {
        title: "Question 3....",
        choices: ["choice1", "choice2", "choice3", "choice4"],
        correctAsr: "choice2"
    },

    {
        title: "Question 4....",
        choices: ["choice1", "choice2", "choice3", "choice4"],
        correctAsr: "choice1"
    },

    {
        title: "Question 5....",
        choices: ["choice1", "choice2", "choice3", "choice4"],
        correctAsr: "choice2"
    }
];

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