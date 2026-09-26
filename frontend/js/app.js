const searchInput = document.getElementById("templateSearch");
const categoryFilter = document.getElementById("categoryFilter");
const templateCards = document.querySelectorAll(".template-card");

function filterTemplates() {

    const searchText = searchInput.value.toLowerCase().trim();
    const selectedCategory = categoryFilter.value;

    templateCards.forEach(function(card) {

        const templateName = card.querySelector("h3").textContent.toLowerCase();
        const templateCategory = card.dataset.category;

        const matchesSearch = templateName.includes(searchText);

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