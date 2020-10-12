//Selecting all Elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const qImg = document.getElementById("questionImage");
const question = document.getElementById("question");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");

//Choices
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");

//Progress and Score
const progress = document.getElementById("progress");
const scoreContainer = document.getElementById("scoreContainer");

//Questions
let questions = [
  {
    question: "What is the most popular game console?",
    imgSrc: " ",
    choiceA: "Playstation 4",
    choiceB: "Xbox One",
    choiceC: "Nintendo Switch",
    correct: "A",
  },
  {
    question: "Which fps game has the biggest maps?",
    imgSrc: " ",
    choiceA: "Call of Duty",
    choiceB: "Battlefield",
    choiceC: "Tetris",
    correct: "B",
  },
  {
    question:
      "What platform offers the best graphics settings while being the most expensive?",
    imgSrc: " ",
    choiceA: "Playstation 4",
    choiceB: "Xbox One",
    choiceC: "PC",
    correct: "C",
  },
];

//Variables
const lastQuestion = questions.length - 1;
let runningQuestion = 0;
