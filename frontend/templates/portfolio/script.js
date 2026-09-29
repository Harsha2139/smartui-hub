const themeBtn = document.getElementById("themeBtn");
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");

const projectDescriptions = {
    "SmartUI Hub":
        "A reusable web UI template platform designed for discovering, previewing and customizing responsive templates.",

    "AI StudyMate":
        "A modern student dashboard containing courses, assignments, progress tracking and an AI assistant interface.",

    "Online Store":
        "A responsive e-commerce interface with product search, category filtering, shopping cart and product details."
};

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");

    if (nav.classList.contains("active")) {
        menuBtn.textContent = "×";
    } else {
        menuBtn.textContent = "☰";
    }
});

nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
        menuBtn.textContent = "☰";
    });
});

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        themeBtn.textContent = "☀️";
        localStorage.setItem("portfolioTheme", "light");
    } else {
        themeBtn.textContent = "🌙";
        localStorage.setItem("portfolioTheme", "dark");
    }
});

if (localStorage.getItem("portfolioTheme") === "light") {
    document.body.classList.add("light");
    themeBtn.textContent = "☀️";
}

function showProject(projectName) {

    modalTitle.textContent = projectName;

    modalDescription.textContent =
        projectDescriptions[projectName] ||
        "This project is part of my developer portfolio.";

    modal.classList.add("active");
}

function closeModal() {
    modal.classList.remove("active");
}

function sendEmail() {
    window.location.href =
        "mailto:your-email@example.com?subject=Project%20Inquiry";
}

window.addEventListener("click", event => {

    if (event.target === modal) {
        closeModal();
    }

});

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
        closeModal();
    }

});