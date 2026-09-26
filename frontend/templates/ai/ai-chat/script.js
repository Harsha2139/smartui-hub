// =====================================================
// SMARTUI HUB - AI CHAT DEMO
// NO API / NO BACKEND REQUIRED
// =====================================================


// =====================================================
// HTML ELEMENTS
// =====================================================

const messageInput =
    document.getElementById("messageInput");

const sendButton =
    document.getElementById("sendButton");

const chatMessages =
    document.getElementById("chatMessages");

const typingIndicator =
    document.getElementById("typingIndicator");

const newChatButton =
    document.getElementById("newChatButton");

const clearChatButton =
    document.getElementById("clearChatButton");

const clearHeaderButton =
    document.getElementById("clearHeaderButton");

const themeButton =
    document.getElementById("themeButton");

const mobileMenuButton =
    document.getElementById("mobileMenuButton");

const sidebar =
    document.querySelector(".sidebar");

const suggestionButtons =
    document.querySelectorAll(".suggestion-button");

const historyItems =
    document.querySelectorAll(".history-item");


// =====================================================
// DEMO AI RESPONSES
// =====================================================

function getAIResponse(message) {

    const text =
        message.toLowerCase();


    if (
        text.includes("recursion")
    ) {

        return `
            Recursion is a programming technique where
            a function calls itself to solve a smaller
            version of the same problem.

            Example:

            function countdown(n) {
                if (n === 0) return;
                console.log(n);
                countdown(n - 1);
            }

            A recursion function normally needs a
            stopping condition called the base case.
        `;

    }


    if (
        text.includes("explain") ||
        text.includes("topic")
    ) {

        return `
            Sure! 😊

            A simple way to understand any topic is:

            1. Understand the basic definition.
            2. Learn the main concepts.
            3. Study a simple example.
            4. Practice with problems.
            5. Review what you learned.

            Tell me the specific topic you want to learn.
        `;

    }


    if (
        text.includes("example")
    ) {

        return `
            Here's a simple example.

            Suppose you want to find the largest
            number in an array:

            [10, 25, 7, 40, 15]

            Start with 10 as the largest.
            Compare each number with it.
            When you find 40, update the largest value.

            Final answer:

            40
        `;

    }


    if (
        text.includes("study plan")
    ) {

        return `
            📚 Simple Study Plan

            Morning:
            • 1 hour - Data Structures
            • 30 minutes - Mathematics

            Afternoon:
            • 1 hour - Programming
            • 30 minutes - Algorithms

            Evening:
            • 1 hour - Practice problems
            • 30 minutes - Revision

            Try to practice coding every day.
        `;

    }


    if (
        text.includes("javascript")
    ) {

        return `
            JavaScript is a programming language
            mainly used to make websites interactive.

            You can use JavaScript for:

            • Buttons
            • Forms
            • Animations
            • Web applications
            • APIs
            • Full-stack development

            Start by learning variables, functions,
            arrays, objects and DOM manipulation.
        `;

    }


    if (
        text.includes("machine learning")
    ) {

        return `
            Machine Learning is a field of AI where
            computers learn patterns from data.

            Main types include:

            • Supervised Learning
            • Unsupervised Learning
            • Reinforcement Learning

            Common algorithms include:
            Linear Regression, Decision Trees,
            K-Means and Neural Networks.
        `;

    }


    if (
        text.includes("hello") ||
        text.includes("hi")
    ) {

        return `
            Hello! 👋

            I'm your SmartUI Hub AI Assistant.

            You can ask me about programming,
            algorithms, projects, studying and
            technology.
        `;

    }


    return `
        That's an interesting question! 🤖

        This is a demo AI chat interface, so the
        response is generated locally using
        JavaScript.

        Try asking about:

        • Recursion
        • JavaScript
        • Machine Learning
        • Study Plan
        • Examples
        • Programming
    `;

}


// =====================================================
// SEND MESSAGE
// =====================================================

function sendMessage(customMessage = null) {

    const message =
        customMessage !== null
            ? customMessage.trim()
            : messageInput.value.trim();


    if (!message) {
        return;
    }


    // Add user message

    addMessage(
        message,
        "user"
    );


    // Clear input

    messageInput.value = "";


    // Disable button

    sendButton.disabled = true;


    // Show typing

    showTyping();


    // Simulate AI thinking

    setTimeout(
        function () {

            hideTyping();


            const response =
                getAIResponse(message);


            addMessage(
                response,
                "ai"
            );


            sendButton.disabled = false;

            messageInput.focus();

        },
        700
    );

}


// =====================================================
// ADD MESSAGE
// =====================================================

function addMessage(text, sender) {

    const message =
        document.createElement("div");


    message.classList.add(
        "message"
    );


    if (sender === "user") {

        message.classList.add(
            "user-message"
        );


        message.innerHTML = `

            <div class="message-content">

                <div class="message-name">
                    You
                </div>

                <div class="message-bubble">

                    <p>
                        ${escapeHTML(text)}
                    </p>

                </div>

            </div>

            <div class="message-avatar user-avatar">
                👤
            </div>

        `;

    } else {

        message.classList.add(
            "ai-message"
        );


        message.innerHTML = `

            <div class="message-avatar">
                🤖
            </div>

            <div class="message-content">

                <div class="message-name">
                    AI Assistant
                </div>

                <div class="message-bubble">

                    <p>
                        ${formatAIResponse(text)}
                    </p>

                </div>

            </div>

        `;

    }


    chatMessages.appendChild(
        message
    );


    scrollToBottom();

}


// =====================================================
// FORMAT AI RESPONSE
// =====================================================

function formatAIResponse(text) {

    return escapeHTML(text)
        .replace(/\n/g, "<br>");

}


// =====================================================
// ESCAPE HTML
// =====================================================

function escapeHTML(text) {

    const element =
        document.createElement("div");

    element.textContent =
        text;

    return element.innerHTML;

}


// =====================================================
// TYPING INDICATOR
// =====================================================

function showTyping() {

    typingIndicator.classList.remove(
        "hidden"
    );

    scrollToBottom();

}


function hideTyping() {

    typingIndicator.classList.add(
        "hidden"
    );

}


// =====================================================
// SCROLL
// =====================================================

function scrollToBottom() {

    chatMessages.scrollTop =
        chatMessages.scrollHeight;

}


// =====================================================
// SEND BUTTON
// =====================================================

sendButton.addEventListener(
    "click",
    function () {

        sendMessage();

    }
);


// =====================================================
// ENTER KEY
// =====================================================

messageInput.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Enter" &&
            !event.shiftKey
        ) {

            event.preventDefault();

            sendMessage();

        }

    }
);


// =====================================================
// THREE SUGGESTION BUTTONS
// =====================================================

suggestionButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                const prompt =
                    button.getAttribute(
                        "data-prompt"
                    );


                if (!prompt) {
                    return;
                }


                sendMessage(
                    prompt
                );

            }
        );

    }
);


// =====================================================
// NEW CHAT
// =====================================================

newChatButton.addEventListener(
    "click",
    function () {

        chatMessages.innerHTML = "";


        addMessage(
            "Hello! 👋 I'm your AI Assistant. How can I help you today?",
            "ai"
        );


        messageInput.focus();

    }
);


// =====================================================
// CLEAR CHAT
// =====================================================

function clearChat() {

    chatMessages.innerHTML = "";


    addMessage(
        "Chat cleared. Start a new conversation!",
        "ai"
    );


    messageInput.focus();

}


// =====================================================
// CLEAR CHAT SIDEBAR
// =====================================================

clearChatButton.addEventListener(
    "click",
    function () {

        clearChat();

    }
);


// =====================================================
// CLEAR CHAT HEADER
// =====================================================

clearHeaderButton.addEventListener(
    "click",
    function () {

        clearChat();

    }
);


// =====================================================
// DARK MODE
// =====================================================

themeButton.addEventListener(
    "click",
    function () {

        document.body.classList.toggle(
            "dark"
        );


        if (
            document.body.classList.contains(
                "dark"
            )
        ) {

            themeButton.textContent =
                "☀️ Light Mode";

        } else {

            themeButton.textContent =
                "🌙 Dark Mode";

        }

    }
);


// =====================================================
// MOBILE MENU
// =====================================================

mobileMenuButton.addEventListener(
    "click",
    function () {

        sidebar.classList.toggle(
            "mobile-open"
        );

    }
);


// =====================================================
// CHAT HISTORY
// =====================================================

historyItems.forEach(
    function (item) {

        item.addEventListener(
            "click",
            function () {

                historyItems.forEach(
                    function (historyItem) {

                        historyItem.classList.remove(
                            "active"
                        );

                    }
                );


                item.classList.add(
                    "active"
                );


                messageInput.value =
                    item.textContent.trim();


                messageInput.focus();

            }
        );

    }
);


// =====================================================
// START
// =====================================================

scrollToBottom();

messageInput.focus();