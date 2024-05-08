function showHTML() {
  var htmlContent = document.getElementById("html-content");
  htmlContent.classList.toggle("hidden");
}

function changeCSS(value) {
  var cssExample = document.getElementById("css-example");
  cssExample.style.fontSize = value + "px";
}

function fetchData() {
  var ajaxResponse = document.getElementById("ajax-response");
  ajaxResponse.classList.remove("hidden");
  ajaxResponse.textContent = "Dynamische data opgehaald!";
}

document.getElementById("svg-example").addEventListener("click", function() {
  var svgCircle = document.querySelector("#svg-example svg circle");
  var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16); 
  svgCircle.setAttribute("fill", randomColor);
});


var currentQuestion = 0;
var questions = [
  {
    question: "Wat is het verschil tussen Front-End en Back-End?",
    correctAnswer: true
  },
  {
    question: "Welke taal wordt meestal gebruikt voor Front-End ontwikkeling?",
    correctAnswer: "HTML, CSS, JavaScript"
  },
  {
    question: "HTML staat voor?",
    correctAnswer: "HyperText Markup Language"
  },
  {
    question: "Wat is de rol van CSS?",
    correctAnswer: "Stijl en vormgeving"
  },
  {
    question: "Wat is JavaScript?",
    correctAnswer: "Een programmeertaal die wordt gebruikt voor het toevoegen van interactiviteit aan websites"
  }
];

function displayQuestion() {
  var questionElement = document.getElementById("question");
  questionElement.textContent = questions[currentQuestion].question;
}

function checkAnswer(answer) {
  var resultElement = document.getElementById("result");
  if (answer === questions[currentQuestion].correctAnswer) {
    resultElement.textContent = "Goed antwoord!";
    resultElement.style.color = "#28a745";
  } else {
    resultElement.textContent = "Fout antwoord!";
    resultElement.style.color = "#dc3545";
  }
  resultElement.classList.remove("hidden");
  currentQuestion++;
  if (currentQuestion >= questions.length) {
    displayResult();
  } else {
    displayQuestion();
  }
}

function displayResult() {
  var quizContainer = document.getElementById("quiz-container");
  quizContainer.innerHTML = "<h3>Resultaat:</h3>";
  var correctAnswers = 0;
  questions.forEach(function(question) {
    if (question.correctAnswer === true) {
      correctAnswers++;
    }
  });
  if (correctAnswers >= 4) {
    quizContainer.innerHTML += "<p>Je hebt " + correctAnswers + " van de " + questions.length + " vragen goed beantwoord. Goed gedaan!</p>";
  } else {
    quizContainer.innerHTML += "<p>Je hebt " + correctAnswers + " van de " + questions.length + " vragen goed beantwoord. Probeer het opnieuw!</p>";
  }
}
