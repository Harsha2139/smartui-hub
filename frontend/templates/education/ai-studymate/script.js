const questions = [
    {
        question: "Which language is mainly used to structure web pages?",
        options: ["CSS", "HTML", "JavaScript", "Python"],
        answer: 1
    },

    {
        question: "Which language is used to style web pages?",
        options: ["HTML", "CSS", "Java", "SQL"],
        answer: 1
    },

    {
        question: "Which keyword creates a variable in JavaScript?",
        options: ["var", "int", "string", "define"],
        answer: 0
    },

    {
        question: "Which data structure follows FIFO?",
        options: ["Stack", "Queue", "Tree", "Graph"],
        answer: 1
    },

    {
        question: "Which data structure follows LIFO?",
        options: ["Queue", "Array", "Stack", "Graph"],
        answer: 2
    },

    {
        question: "What does CPU stand for?",
        options: [
            "Central Processing Unit",
            "Computer Personal Unit",
            "Central Program Utility",
            "Control Processing User"
        ],
        answer: 0
    },

    {
        question: "Which symbol is used for a single-line comment in JavaScript?",
        options: ["<!--", "//", "#", "/*"],
        answer: 1
    },

    {
        question: "Which algorithm is used to find the shortest path in a graph?",
        options: [
            "Binary Search",
            "Bubble Sort",
            "Dijkstra's Algorithm",
            "Linear Search"
        ],
        answer: 2
    },

    {
        question: "Which keyword defines a function in JavaScript?",
        options: ["function", "method", "def", "func"],
        answer: 0
    },

    {
        question: "Which HTML tag is used to create a hyperlink?",
        options: ["<link>", "<href>", "<a>", "<url>"],
        answer: 2
    }
];


let currentQuestion = 0;
let userAnswers = new Array(questions.length).fill(null);
let timeLeft = 60;
let timerInterval = null;


const startScreen = document.getElementById("startScreen");
const quizScreen = document.getElementById("quizScreen");
const resultScreen = document.getElementById("resultScreen");

const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const restartBtn = document.getElementById("restartBtn");

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");

const questionNumber = document.getElementById("questionNumber");
const progressBar = document.getElementById("progressBar");
const timerElement = document.getElementById("timer");

const scoreElement = document.getElementById("score");
const resultMessage = document.getElementById("resultMessage");

const themeBtn = document.getElementById("themeBtn");


// Start Quiz

startBtn.addEventListener("click", startQuiz);


function startQuiz() {

    startScreen.classList.add("hidden");
    resultScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");

    currentQuestion = 0;
    userAnswers.fill(null);

    timeLeft = 60;

    timerElement.textContent = timeLeft;

    showQuestion();

    startTimer();
}


// Timer

function startTimer() {

    clearInterval(timerInterval);

    timerInterval = setInterval(() => {

        timeLeft--;

        timerElement.textContent = timeLeft;

        if (timeLeft <= 0) {

            clearInterval(timerInterval);

            finishQuiz();
        }

    }, 1000);
}


// Display Question

function showQuestion() {

    const question = questions[currentQuestion];

    questionElement.textContent = question.question;

    questionNumber.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    progressBar.style.width =
        `${((currentQuestion + 1) / questions.length) * 100}%`;

    optionsElement.innerHTML = "";

    question.options.forEach((option, index) => {

        const button = document.createElement("button");

        button.className = "option";

        button.textContent = option;

        if (userAnswers[currentQuestion] === index) {
            button.classList.add("selected");
        }

        button.addEventListener("click", () => {

            userAnswers[currentQuestion] = index;

            document
                .querySelectorAll(".option")
                .forEach(btn => btn.classList.remove("selected"));

            button.classList.add("selected");
        });

        optionsElement.appendChild(button);
    });

    prevBtn.disabled = currentQuestion === 0;

    if (currentQuestion === questions.length - 1) {
        nextBtn.textContent = "Finish ✓";
    } else {
        nextBtn.textContent = "Next →";
    }
}


// Next Button

nextBtn.addEventListener("click", () => {

    if (currentQuestion < questions.length - 1) {

        currentQuestion++;

        showQuestion();

    } else {

        finishQuiz();
    }
});


// Previous Button

prevBtn.addEventListener("click", () => {

    if (currentQuestion > 0) {

        currentQuestion--;

        showQuestion();
    }
});


// Finish Quiz

function finishQuiz() {

    clearInterval(timerInterval);

    let score = 0;

    questions.forEach((question, index) => {

        if (userAnswers[index] === question.answer) {
            score++;
        }

    });

    quizScreen.classList.add("hidden");

    resultScreen.classList.remove("hidden");

    scoreElement.textContent = score;

    if (score >= 8) {

        resultMessage.textContent =
            "Excellent! You have a strong understanding of the basics.";

    } else if (score >= 5) {

        resultMessage.textContent =
            "Good job! Keep practicing to improve your score.";

    } else {

        resultMessage.textContent =
            "Keep learning and try the quiz again!";
    }
}


// Restart Quiz

restartBtn.addEventListener("click", () => {

    resultScreen.classList.add("hidden");

    startScreen.classList.remove("hidden");

});


// Dark Mode

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        themeBtn.textContent = "☀️";

    } else {

        themeBtn.textContent = "🌙";
    }
});