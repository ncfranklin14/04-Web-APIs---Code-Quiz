// Show start quiz button
// Click start button to being game
    // Start timer 
// Display 1st question with 4 answer options in list
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
    // If timer runs out, game is over
// User clicks answer
    // If answer is correct, display "Correct" and move to question 2
    // If answer is wrong, display "Wrong" and move to question 3
// Run loop for all 5 questions
// After question 5, show "Game Over" screen and form to add name to high score list with "submit" button
// After user hits submit, show page with "see high scores" button and "Restart game" button
    // If user selects "see high scores", go to high scores list from storage log
    // If user clicks "Restart game" button, return to home page