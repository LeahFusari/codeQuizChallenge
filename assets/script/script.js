
var timeLeft = 75;
var timerCountdown = 0;
var questionNum = 0;
var index = 0;
var timeDisplay = document.querySelector("#timer");
var gameRulesSect = document.querySelector("#gameRules");
var questionDisplay = document.querySelector("#questArea");
var selections = document.querySelector("#choices");
var answerResult = document.querySelector("#result");


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
function startGame(){
    gameRulesSect.style.display="none"
    
    startTimer()
    displayQuestions()


}

function startTimer(){
    var timerCountdown = setInterval(function(){
        timeLeft--;
        timeDisplay.textContent = "Time Left: " + timeLeft + " seconds";
            if (timeLeft === 0 || questions === questions.length){
                clearInterval(timerCountdown);
            }
    },1000);
};

function displayQuestions(){
 
    document.getElementById("qTitle").textContent = questions[index].title
    
    selections.innerHTML=""
    var button1=document.createElement("button")
        button1.textContent = questions[index].choices[0]
        button1.addEventListener("click", function(){
            checkNext(button1.textContent,questions[index])
            })
        
        selections.appendChild(button1)

    var button2=document.createElement("button")
        button2.textContent = questions[index].choices[1]
        button2.addEventListener("click", function(){
            checkNext(button2.textContent,questions[index])
            })
        selections.appendChild(button2)

    var button3=document.createElement("button")
        button3.textContent = questions[index].choices[2]
        button3.addEventListener("click", function(){
            checkNext(button3.textContent,questions[index])
            })
        selections.appendChild(button3)

    var button4=document.createElement("button")
        button4.textContent = questions[index].choices[3]
        button4.addEventListener("click", function(){
            checkNext(button4.textContent,questions[index])
            })
        selections.appendChild(button4)

}

function checkNext(selectedButton){
    
        if (selectedButton === questions[index].correctAsr) {
        answerResult.textContent = "Correct!";
            } else{
            answerResult.textContent = "Wrong!";
            timeLeft = timeLeft - 10;             
    }
        // return

    questionNum = index++
    console.log(index);
    console.log(questions.length);

    if(index < questions.length){

        displayQuestions()
    }else{
        endGame()
    }
   
}

function endGame(){
    answerResult.textContent = "Game Over"
}



document.getElementById("startQuiz").addEventListener("click", startGame)