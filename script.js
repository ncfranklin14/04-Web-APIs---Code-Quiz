
var title = document.querySelector("#title")
var currentIndex = 0
var questions = document.querySelector(".questions")
var answer = document.querySelector(".answer")
var answer1 = document.querySelector(".bttn1")
var answer2 = document.querySelector(".bttn2")
var answer3 = document.querySelector(".bttn3")
var answer4 = document.querySelector(".bttn4")
var feedback = document.querySelector("#feedback")
var gameOver = document.querySelector(".gameover")


// Show start quiz button

var questionsArray=[
    {
       question: "What is the tallest mountain in the world?",
       answer1: "Mount Rainier",
       answer2: "Mount Everest",
       answer3: "Mount Saint Helens",
       answer4: "Denali",
       correctAnswer:"Mount Everest"
    },
    {
       question: "What country has the most mountain ranges?",
       answer1: "Bhutan",
       answer2: "United States",
       answer3: "Nepal",
       answer4: "Antartica",
       correctAnswer:"Bhutan"
    },
    {
        question: "What is the tallest mountain in Washington?",
        answer1: "Glacier Peak",
        answer2: "Mount Baker",
        answer3: "Mount Adams",
        answer4: "Mount Rainier",
        correctAnswer:"Mount Rainier"
     },
     {
        question: "What is the most climbed mountain in the US?",
        answer1: "Mount Monadnock",
        answer2: "Mount Hood",
        answer3: "Mount Si",
        answer4: "Mount Washington",
        correctAnswer:"Mount Monadnock"
     },
     {
        question: "Who has climbed all seven summits?",
        answer1: "Alison Levine",
        answer2: "Conrad Anker",
        answer3: "Me!",
        answer4: "Jon Krakauer",
        correctAnswer:"Alison Levine"
    }
]
var timer ;
var timerCount = 15 * questionsArray.length;

function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      document.querySelector(".timer-count").textContent = timerCount;
      if (timerCount <= 0) {

        clearInterval(timer);

      }
    }, 1000);
  }
  

// Click start button to begin game    
    // Start timer 
    var srtButton = document.querySelector("#start") 
    srtButton.addEventListener("click", function() {
        startTimer();
    srtButton.style.display = "none";
    title.style.display = "none";
    questions.classList.remove ("hidden");
    displayQuestions();
    });

// Display 1st question with 4 answer options in list

    function displayQuestions () {
        var currentQuestion = questionsArray [currentIndex]
        question.innerText = currentQuestion.question
        answer1.innerText = currentQuestion.answer1
        answer2.innerText = currentQuestion.answer2
        answer3.innerText = currentQuestion.answer3
        answer4.innerText = currentQuestion.answer4
    }

    function endGame () {
        gameOver.classList.remove ("hidden")
        questions.style.display = "none"
    }
//  in endgame function show that div that contacin input for initials
// in end game function hide div with questions 
// define a var at top for score
// add or subtract points within conditional statement
// set text.content of the new div to the value of the score varible
// hit submit 
// onclick to local storage

// User clicks answer
    questions.addEventListener("click", function(event) {
    if (event.target.nodeName !== "BUTTON"){
        return
    }
    if (currentIndex > questionsArray.length) {
        clearInterval(timer);
        endGame();
    };
    


    var userChoice = event.target.firstChild.data
    var correctChoice = questionsArray [currentIndex].correctAnswer
    if(userChoice === correctChoice) {
        console.log("right");
        feedback.textContent = "Right!"

    } else {
        console.log("wrong");
        timerCount = timerCount -3
        feedback.textContent = "Wrong!"
    }
    currentIndex++
    displayQuestions()
    })
    


    // If answer is correct, display "Correct" and move to question 2
    // If answer is wrong, display "Wrong" and move to question 3
// Run loop for all 5 questions
// After question 5, show "Game Over" screen and form to add name to high score list with "submit" button
// After user hits submit, show page with "see high scores" button and "Restart game" button
    // If user selects "see high scores", go to high scores list from storage log
    // If user clicks "Restart game" button, return to home page