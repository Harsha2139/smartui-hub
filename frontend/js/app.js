// ===============================
// TEMPLATE SEARCH & FILTER
// ===============================

const searchInput = document.getElementById("templateSearch");
const categoryFilter = document.getElementById("categoryFilter");
const templateCards = document.querySelectorAll(".template-card");

function filterTemplates() {

    const searchText = searchInput.value.toLowerCase().trim();
    const selectedCategory = categoryFilter.value;

    templateCards.forEach(function(card) {

        const templateName =
            card.querySelector("h3").textContent.toLowerCase();

        const templateCategory =
            card.dataset.category;

        const matchesSearch =
            templateName.includes(searchText);

        const matchesCategory =
            selectedCategory === "all" ||
            templateCategory === selectedCategory;

        if (matchesSearch && matchesCategory) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }

    });
}

searchInput.addEventListener("input", filterTemplates);

categoryFilter.addEventListener("change", filterTemplates);


// ===============================
// VIEW TEMPLATE
// ===============================

function viewTemplate(templateName) {

    const existingModal = document.getElementById("templateModal");

    if (existingModal) {
        existingModal.remove();
    }

    const modal = document.createElement("div");

    modal.id = "templateModal";

    modal.innerHTML = `
        <div class="modal-overlay">

            <div class="template-modal">

                <button
                    class="close-modal"
                    onclick="closeTemplate()">
                    ×
                </button>

                <h2>${templateName}</h2>

                <p>
                    This is the live preview area for
                    <strong>${templateName}</strong>.
                </p>

                <div class="preview-box">

                    <div class="preview-header">
                        <h3>${templateName}</h3>
                    </div>

                    <div class="preview-content">

                        <div class="preview-card">
                            <h4>Preview</h4>
                            <p>
                                Your reusable UI template
                                will appear here.
                            </p>
                        </div>

                        <div class="preview-card">
                            <h4>Responsive Design</h4>
                            <p>
                                Designed for modern web projects.
                            </p>
                        </div>

                        <div class="preview-card">
                            <h4>Customization</h4>
                            <p>
                                Customize this template in the
                                next stage.
                            </p>
                        </div>

                    </div>

                </div>

                <div class="modal-actions">

                    <button
                        class="customize-button"
                        onclick="customizeTemplate('${templateName}')">
                        Customize
                    </button>

                    <button
                        class="close-button"
                        onclick="closeTemplate()">
                        Close
                    </button>

                </div>

            </div>

        </div>
    `;

    document.body.appendChild(modal);
}


// ===============================
// CLOSE TEMPLATE
// ===============================

function closeTemplate() {

    const modal = document.getElementById("templateModal");

    if (modal) {
        modal.remove();
    }

}


// ===============================
// CUSTOMIZE TEMPLATE
// ===============================

function customizeTemplate(templateName) {

    alert(
        "Customization for " +
        templateName +
        " will be added next."
    );

}