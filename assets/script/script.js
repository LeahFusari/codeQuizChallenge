var inProgress = "False"
var questionNum = "";
var index = 0;
var timeLeft = document.getElementById("timer");
var gameRulesSect = document.querySelector("#gameRules");
var questionDisplay = document.querySelector("#questArea");
var selections = document.querySelector("#choices");
var answerResult = document.querySelector("#result");
var yourFinalScore = document.querySelector("#finalScore");
var player = document.getElementById("player-highscore");



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
    inProgress = true
    startTimer()
    displayQuestions()
}

function startTimer(){
    timeLeft = 75
    var countdown = setInterval(function(){
    timeLeft--;
    document.getElementById("timer").textContent = "Time Left: " + timeLeft + " seconds";
    if (timeLeft<=0 || inProgress == false) clearInterval(countdown);},1000);
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
    
    answerResult.style.visibility="visible";
    
        if (selectedButton === questions[index].correctAsr) {
        answerResult.textContent = "Correct!";
        
            } else{
            answerResult.textContent = "Wrong!";
            timeLeft = timeLeft - 10;    
                }
                
        setTimeout(wipeResult,500);
    questionNum = index++
     
    if(questionNum === questions.length -1){
        endGame();
        }
        
    else{
        displayQuestions();
        }
    // console.log(index)
}

function wipeResult(){
    document.getElementById("result").style.visibility="hidden";
} 

function endGame(){
    inProgress = false;
    selections.style.visibility="hidden";
    document.getElementById("qTitle").textContent = "Game Over"
    yourFinalScore.textContent= "Your final score is " + timeLeft;
    setTimeout(function(){document.getElementById("timer").style.visibility="hidden"},500);
    
    if (localStorage.getItem("highScore")< timeLeft){
        localStorage.setItem("highScore",timeLeft);
        document.getElementById("highscore-result").textContent = "You beat the high score!"

        getPlayerName()
    }else
        document.getElementById("highscore-result").textContent = "You did not beat the high score!  TRY AGAIN!";
    }

function getPlayerName(){
    var myInputLabel = document.createElement("label")
        myInputLabel.textContent = "Enter Name"
        player.appendChild(myInputLabel);
    
    var myInput = document.createElement("input")
            myInput.setAttribute("type","text");
            player.appendChild(myInput);

    var submitBtn = document.createElement("button")
        submitBtn.textContent="Submit High Score"
        submitBtn.addEventListener("click", function(){
            localStorage.setItem("playerName", myInput.value);
            document.getElementById("finalResult").style.visibility="hidden"
            displayChamp()
        })
        player.appendChild(submitBtn);
        
    }

    function displayChamp(){
        var champ = localStorage.getItem("playerName") + " with a high score of " + localStorage.getItem("highScore")
        document.getElementById("high-score-final").textContent = "The Champion is " + champ
        
    }
   


document.getElementById("startQuiz").addEventListener("click", startGame)
