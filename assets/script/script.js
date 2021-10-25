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
var resetClear = document.querySelector("#clear-buttons");
var winLose = document.getElementById("highscore-result");




// Array of objects (questions, choices and correct answers) with a nested array of choices
var questions = [
    {
        title: "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parenthesis"],
        correctAsr: "quotes"
    },

    {
        title: "What Characters Contains an Array?",
        choices: ["< >", "{ }", "[ ]", "# #"],
        correctAsr: "[ ]"
    },

    {
        title: "!= means what in javascript?",
        choices: ["Or", "And", "Plus and Equal To", "Not Equal To"],
        correctAsr: "Not Equal To"
    },

    {
        title: "Which of the following is a valid data type?",
        choices: ["Boolean", "Number", "String", "All of the above"],
        correctAsr: "All of the above"
    },

    {
        title: "Which type of pop up box will allow a user to type a response?",
        choices: ["input", "prompt", "alert", "confirm"],
        correctAsr: "prompt"
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
    timeLeft = 1000
    var countdown = setInterval(function(){
    timeLeft--;
    document.getElementById("timer").textContent = "Time Left: " + timeLeft + " seconds";
   
    if (timeLeft<1 || inProgress == false){
        clearInterval(countdown);
    }}
    ,1000);
    
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
        answerResult.style.color = "green"
        
            } else{
            answerResult.textContent = "Wrong!";
            answerResult.style.color = "red"
            timeLeft = timeLeft - 10;  
            }
                
            setTimeout(wipeResult,500);
            questionNum = index++
            
            if(timeLeft < 0){
                timeLeft = 0
            }

            if(questionNum + 1 == questions.length || timeLeft < 1 ){
                endGame();
                timeLeft = timeLeft + 1
            }
            else{
                displayQuestions();
                }

}

function wipeResult(){
    document.getElementById("result").style.visibility="hidden";
} 

function endGame(){
    inProgress = false;
    selections.style.visibility="hidden";
    questionDisplay.style.visibility="hidden";
    document.getElementById("game-status").textContent = "Game Over"
    
    
    
    yourFinalScore.textContent= "Your final score is " + timeLeft + ".";
    
    if (localStorage.getItem("highScore")< timeLeft){
        
        localStorage.setItem("highScore",timeLeft);
        document.getElementById("highscore-result").textContent = "You beat the high score!"
        setTimeout(function(){document.getElementById("qTitle").style.visibility="hidden"},1000);

        getPlayerName()

    }else {
        document.getElementById("highscore-result").textContent = "You did not beat the high score!  TRY AGAIN!";
        displayReset()
        }
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
            document.getElementById("game-status").style.visibility="hidden"
            
            displayChamp()
        })
        player.appendChild(submitBtn);
        
    }

    function displayChamp(){
        var champ = localStorage.getItem("playerName") + " with a high score of " + localStorage.getItem("highScore")
        
        
            document.getElementById("high-score-final").textContent = "The Champion is " + champ
            displayReset()

            

    }
   
  

    function displayReset(){
    var resetBtn=document.createElement("button")
            resetBtn.textContent="Play Again"
            resetBtn.addEventListener("click", function(){
                location.reload()
                document.getElementById("champion").textContent = "Champion: " + champName
            document.getElementById("score-to-beat").textContent = "Score to Beat: " + beatScore
            })
            resetClear.appendChild(resetBtn)

    var clearScoreBtn=document.createElement("button")
            clearScoreBtn.textContent="Clear High Score"
            clearScoreBtn.addEventListener("click", function(){
                localStorage.removeItem("playerName")
                localStorage.removeItem("highScore")
            })
            resetClear.appendChild(clearScoreBtn)
            
                
}

document.getElementById("startQuiz").addEventListener("click", startGame)
