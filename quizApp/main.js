const questions = [
  {
    question: "What is the largest animal in the world?",
    answers: [
      {
        text: "Shark",
        correct: false,
        msg: "WRONG, fun fact: They eat people in Florida",
      },
      {
        text: "Blue Whale",
        correct: true,
        msg: "CORRECT, fun fact: They can reach speeds up to 30 mph in the water",
      },
      {
        text: "Elephant",
        correct: false,
        msg: "WRONG, fun fact: They are very big animals",
      },
      {
        text: "Giraffe",
        correct: false,
        msg: "WRONG, fun fact: They are very tall",
      },
    ],
  },
  {
    question: "What is the smallest country in the world?",
    answers: [
      { text: "Vatican City", correct: true },
      { text: "Bhutan", correct: false },
      { text: "Nepal", correct: false },
      { text: "Shri Lanka", correct: false },
    ],
  },
  {
    question: "What is the largest desert in the world?",
    answers: [
      { text: "Kalahari", correct: false },
      { text: "Gobi", correct: false },
      { text: "Sahara", correct: false },
      { text: "Antarctica", correct: true },
    ],
  },
  {
    question: "What is smallest continent in the world?",
    answers: [
      { text: "Asia", correct: false },
      { text: "Australia", correct: true },
      { text: "Antarctica", correct: false },
      { text: "Africa ", correct: false },
    ],
  },
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
  currentQuestion.answers.forEach((answer) => {
    // answer = {text: 'Elephant', correct: False}
    const button = document.createElement("button"); // const button = "<button></button>"
    button.innerHTML = answer.text; // button = "<button>Elephant</button>"
    button.classList.add("btn"); // button = "<button class = "btn">Elephant</button>"
    answerButtons.appendChild(button);
    button.dataset.msg = answer.msg;
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild !== null) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  const msg = selectedBtn.dataset.msg;

  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
    showToast(msg, true);
  } else {
    selectedBtn.classList.add("incorrect");
    showToast(msg, false);
  }
  console.log("does this work");
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = "true";
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  showToast();
  questionElement.innerHTML = `You scored ${score} out of${questions.length}!`;
  nextButton.innerHTML = "play again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});
startQuiz();

let toastBox = document.getElementById("toastBox");
let successMsg = ' <i class="fa-solid fa-circle-check"></i>Good Job!';
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i>Please fix the error!';

function showToast(msg, isCorrect) {
  console.log(msg);
  let toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = msg;
  toastBox.appendChild(toast);
  if (isCorrect) {
    toast.classList.add("goodJob");
    console.log("does it work");
  } else {
    toast.classList.add("wrong");
    console.log("does it work");
  }

  setTimeout(() => {
    toast.remove();
  }, 6000);
}
