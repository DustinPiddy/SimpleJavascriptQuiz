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
    imgSrc: "img/ps4.jpg",
    choiceA: "Playstation 4",
    choiceB: "Xbox One",
    choiceC: "Nintendo Switch",
    correct: "A",
  },
  {
    question: "Which fps game has the biggest maps?",
    imgSrc: "img/bf.jpg",
    choiceA: "Call of Duty",
    choiceB: "Battlefield",
    choiceC: "Tetris",
    correct: "B",
  },
  {
    question:
      "What platform offers the best graphics settings while being the most expensive?",
    imgSrc: "img/pc.jpg",
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

//Counter rendering
function renderCounter() {
  if (count <= questionTime) {
    counter.innerHTML = count;
    timeGauge.style.width = count * gaugeUnit + "px";
    count++;
  } else {
    count = 0;
//change progress color to red
    answerIsWrong();
    if (runningQuestion < lastQuestion) {
      runningQuestion++;
      renderQuestion();
    } else {
//end the quiz and show the score
      clearInterval(TIMER);
      scoreRender();
    }
  }
}

//Cheking Answers
function checkAnswer(answer) {
  if (answer == questions[runningQuestion].correct) {
//correct
    score++;
//progress green
    answerIsCorrect();
  } else {
//wrong
//progress red
    answerIsWrong();
  }
  count = 0;
  if (runningQuestion < lastQuestion) {
    runningQuestion++;
    renderQuestion();
  } else {
//Quiz end to show score
    clearInterval(TIMER);
    scoreRender();
  }
}
//Correct
function answerIsCorrect() {
  document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

//Wrong
function answerIsWrong() {
  document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

//Score
function scoreRender() {
  scoreDiv.style.display = "block";

  //Question %
  const scorePerCent = Math.round((100 * score) / questions.length);

  //Smiley Face on %
  let img =
    scorePerCent >= 80
      ? "img/5.png"
      : scorePerCent >= 60
      ? "img/4.png"
      : scorePerCent >= 40
      ? "img/3.png"
      : scorePerCent >= 20
      ? "img/2.png"
      : "img/1.png";

  scoreDiv.innerHTML = "<img src=" + img + ">";
  scoreDiv.innerHTML += "<p>" + scorePerCent + "%</p>";
}
