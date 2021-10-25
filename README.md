# codeQuizChallenge
This was a graded homework to demonstrate knowledge of JavaScript, DOM, LocalStorage and timers.

My approach did not use any for loops to cycle through the questions.  Instead I used an event listener for the answer buttons to then direct to the function to go to the next question by iterating the current array index by 1.

There are dynamically created elements and even some dynamically created CSS.  (Hint:  "Wrong/Correct")

The High Score is kept in local storage until overwritten by a higher score or deleted with the "clear high score" button.



## User Story

```
AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
```

## Acceptance Criteria

```
GIVEN I am taking a code quiz
WHEN I click the Start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score
```

## URLs and Screenshot

Deployed:
https://leahfusari.github.io/codeQuizChallenge/

GitHub:
https://github.com/LeahFusari/codeQuizChallenge

Screenshot:
![image](https://user-images.githubusercontent.com/87339742/138633046-994d7514-23ac-4fb8-bc33-7a69c67101d4.png)