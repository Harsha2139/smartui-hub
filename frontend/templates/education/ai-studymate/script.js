// ===============================
// AI ASSISTANT
// ===============================

const askButton = document.getElementById("askAI");
const questionInput = document.getElementById("aiQuestion");
const responseBox = document.getElementById("aiResponse");

askButton.addEventListener("click", function () {

    const question = questionInput.value.trim();

    if (question === "") {

        responseBox.textContent =
            "Please enter a question.";

        return;
    }

    responseBox.textContent =
        "AI StudyMate: I received your question. " +
        "A real AI API can be connected here later.";

    questionInput.value = "";
});


// Press Enter to ask

questionInput.addEventListener("keypress", function (event) {

    if (event.key === "Enter") {
        askButton.click();
    }

});


// ===============================
// DARK MODE
// ===============================

const themeButton =
    document.getElementById("themeButton");

themeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        themeButton.textContent = "☀️ Light Mode";

    } else {

        themeButton.textContent = "🌙 Dark Mode";

    }

});