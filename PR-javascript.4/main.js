let questions = [];
let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 10;
let timer;
let selectedAnswer = null;

// llama mi json local

fetch("preguntas.json")
  .then(response => response.json())
  .then(data => {
    questions = data;
    showQuestion();
  })
  .catch(error => console.error("Error al cargar las preguntas:", error));

// todo lo del temporizador (╥﹏╥)

function showQuestion() {
  clearInterval(timer);
  timeLeft = 10;
  selectedAnswer = null;
  updateTimerDisplay();

  const container = document.getElementById("question-container");
  container.innerHTML = "";

  if (currentQuestionIndex < questions.length) {
    const q = questions[currentQuestionIndex];

    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question");

    const questionText = document.createElement("p");
    questionText.textContent = q.question;

    const progressBar = document.createElement("div");
    progressBar.id = "progress-bar";
    progressBar.innerHTML = `<div id="progress"></div>`;

    const timerText = document.createElement("p");
    timerText.id = "timer";
    timerText.textContent = `⏳ Tiempo restante: ${timeLeft}s`;

    const answersList = document.createElement("ul");
    answersList.classList.add("answers");

    q.options.forEach(option => {
      const li = document.createElement("li");
      li.textContent = option;
      li.addEventListener("click", () => selectAnswer(li, option));
      answersList.appendChild(li);
    });

    const nextBtn = document.createElement("button");
    nextBtn.id = "next-btn";
    nextBtn.textContent = "Siguiente";
    nextBtn.disabled = true;
    nextBtn.addEventListener("click", nextQuestion);

    questionDiv.append(questionText, progressBar, timerText, answersList, nextBtn);
    container.appendChild(questionDiv);

    startTimer();
  } else {
    showFinalResult();
  }
}

function startTimer() {
  let progressBar = document.getElementById("progress");
  progressBar.style.width = "100%";

  timer = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();
    progressBar.style.width = (timeLeft / 10) * 100 + "%";
    
    if (timeLeft === 0) {
      clearInterval(timer);
      markTimeOut();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const timerElement = document.getElementById("timer");
  if (timerElement) timerElement.textContent = `⏳ Tiempo restante: ${timeLeft}s`;
}

function selectAnswer(element, answer) {
  if (selectedAnswer) return;
  selectedAnswer = answer;
  clearInterval(timer);

  const correctAnswer = questions[currentQuestionIndex].correctAnswer;
  const options = document.querySelectorAll(".answers li");
  
  options.forEach(opt => {
    opt.style.pointerEvents = "none";
    opt.style.backgroundColor = opt.textContent === correctAnswer ? "green" : (opt.textContent === answer ? "red" : "");
  });

  //la libreria (╥﹏╥)

  Swal.fire({
    title: answer === correctAnswer ? "¡Correcto! ✅" : "Incorrecto ❌",
    text: answer === correctAnswer ? "Tu respuesta es correcta." : `La respuesta correcta era: ${correctAnswer}`,
    icon: answer === correctAnswer ? "success" : "error",
    timer: 1500,
    showConfirmButton: false
  });

  document.getElementById("next-btn").disabled = false;
  if (answer === correctAnswer) score++;
}

function nextQuestion() {
  currentQuestionIndex++;
  showQuestion();
}

function markTimeOut() {
  const correctAnswer = questions[currentQuestionIndex].correctAnswer;
  Swal.fire({
    title: "⏳ Tiempo agotado",
    text: `La respuesta correcta era: ${correctAnswer}`,
    icon: "warning",
    timer: 3000,
    showConfirmButton: false
  });
  currentQuestionIndex++;
  setTimeout(showQuestion, 2000);
}
//muestra puntaje final (ɔ◔‿◔)ɔ ♥
function showFinalResult() {
  Swal.fire({
    title: "¡Trivia Finalizada! 🎉",
    text: `Tu puntuación es: ${score} de ${questions.length}`,
    icon: "success",
    confirmButtonText: "Aceptar"
  });
  localStorage.setItem("triviaResult", JSON.stringify({ score, total: questions.length }));
}
//puntaje anterior ᕙ(`▿´)ᕗ
window.addEventListener("load", function () {
  const resultElement = document.getElementById("result");
  const storedResult = localStorage.getItem("triviaResult");
  resultElement.textContent = storedResult 
    ? `Tu puntuación anterior es: ${JSON.parse(storedResult).score} de ${JSON.parse(storedResult).total}` 
    : "No se encontraron resultados almacenados.";
});
