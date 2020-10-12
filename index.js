//Selecting all Elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
//Choices
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
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
let count = 0;
const questionTime = 10; // 10s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

//Question Rendering
function renderQuestion() {
  let q = questions[runningQuestion];

  question.innerHTML = "<p>" + q.question + "</p>";
  qImg.innerHTML = "<img src=" + q.imgSrc + ">";
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
}

start.addEventListener("click", startQuiz);

//Starting the Quiz
function startQuiz() {
  start.style.display = "none";
  renderQuestion();
  quiz.style.display = "block";
  renderProgress();
  renderCounter();
  TIMER = setInterval(renderCounter, 1000); // 1000ms = 1s
}

//Progress Rendering
function renderProgress() {
  for (let qIndex = 0; qIndex <= lastQuestion; qIndex++) {
    progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
  }
}
