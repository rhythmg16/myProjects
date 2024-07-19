const questions = [
  {
    question: "What is the largest animal in the world?",
    answers: [
      {
        text: "Shark",
        correct: false,
        msg:
          '<i class="fa-solid fa-circle-xmark"></i>' +
          "WRONG, fun fact: They eat people in Florida",
      },
      {
        text: "Blue Whale",
        correct: true,
        msg:
          ' <i class="fa-solid fa-circle-check"></i>' +
          "CORRECT, fun fact: They can reach speeds up to 30 mph in the water",
      },
      {
        text: "Elephant",
        correct: false,
        msg:
          '<i class="fa-solid fa-circle-xmark"></i>' +
          "WRONG, fun fact: They are very big animals",
      },
      {
        text: "Giraffe",
        correct: false,
        msg:
          '<i class="fa-solid fa-circle-xmark"></i>' +
          "WRONG, fun fact: They are very tall",
      },
    ],
  },
  {
    question: "What is the smallest country in the world?",
    answers: [
      {
        text: "Vatican City",
        correct: true,
        msg:
          ' <i class="fa-solid fa-circle-check"></i>' +
          "CORRECT, fun fact: the pope lives there",
      },
      {
        text: "Bhutan",
        correct: false,
        msg:
          '<i class="fa-solid fa-circle-xmark"></i>' +
          "WRONG, fun fact: It is the worlds only carbon negative country",
      },
      {
        text: "Nepal",
        correct: false,
        msg:
          '<i class="fa-solid fa-circle-xmark"></i>' +
          "WRONG, fun fact:  It has the worlds highest mountains",
      },
      {
        text: "Sri Lanka",
        correct: false,
        msg:
          '<i class="fa-solid fa-circle-xmark"></i>' +
          "WRONG, fun fact: It is one of the world's leading exporters in tea ",
      },
    ],
  },
  {
    question: "What is the largest desert in the world?",
    answers: [
      {
        text: "Kalahari",
        correct: false,
        msg:
          '<i class="fa-solid fa-circle-xmark"></i>' +
          "WRONG, fun fact: It is the second largest desert in Africa",
      },
      {
        text: "Gobi",
        correct: false,
        msg:
          '<i class="fa-solid fa-circle-xmark"></i>' +
          "WRONG, fun fact: It isn't sandy at all, it is mostly bare rock",
      },
      {
        text: "Sahara",
        correct: false,
        msg:
          '<i class="fa-solid fa-circle-xmark"></i>' +
          "WRONG, fun fact: Many dinosaur fossils have been found in the Sahara desert",
      },
      {
        text: "Antarctica",
        correct: true,
        msg:
          ' <i class="fa-solid fa-circle-check"></i>' +
          "CORRECT, fun fact: It is the largest ice-sheet in the world",
      },
    ],
  },
  {
    question: "What is smallest continent in the world?",
    answers: [
      {
        text: "Asia",
        correct: false,
        msg:
          '<i class="fa-solid fa-circle-xmark"></i>' +
          "WRONG, fun fact: It is home to over 60% of the population",
      },
      {
        text: "Australia",
        correct: true,
        msg:
          ' <i class="fa-solid fa-circle-check"></i>' +
          "CORRECT, fun fact: It is home to the Great Barrier Reef",
      },
      {
        text: "Antarctica",
        correct: false,
        msg:
          '<i class="fa-solid fa-circle-xmark"></i>' +
          " WRONG, fun fact: There are about 5 million penguins in Antarctica",
      },
      {
        text: "Africa ",
        correct: false,
        msg:
          '<i class="fa-solid fa-circle-xmark"></i>' +
          "WRONG, fun fact: Africa makes about 70% of the worlds cocoa beans",
      },
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
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
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

function showToast(msg, isCorrect) {
  console.log(msg);
  let toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = msg;
  toastBox.appendChild(toast);
  if (isCorrect) {
    toast.classList.add("correct");
    console.log("does it work");
  } else {
    toast.classList.add("wrong");
    console.log("does it work");
  }

  setTimeout(() => {
    toast.remove();
  }, 6000);
}
