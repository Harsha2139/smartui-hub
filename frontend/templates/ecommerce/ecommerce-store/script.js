// ===============================
// E-COMMERCE STORE
// SmartUI Hub
// ===============================


// CART
let cart = [];


// PRODUCT DATA
const products = [

    {
        name: "Wireless Headphones",
        price: 2499,
        category: "electronics",
        icon: "🎧",
        description:
            "Premium wireless headphones with clear sound and comfortable design."
    },

    {
        name: "Smart Watch",
        price: 3999,
        category: "electronics",
        icon: "⌚",
        description:
            "Modern smartwatch with fitness tracking and notifications."
    },

    {
        name: "Classic T-Shirt",
        price: 799,
        category: "fashion",
        icon: "👕",
        description:
            "Comfortable premium cotton T-shirt for everyday wear."
    },

    {
        name: "Denim Jacket",
        price: 2199,
        category: "fashion",
        icon: "🧥",
        description:
            "Stylish denim jacket suitable for casual outfits."
    },

    {
        name: "Modern Table Lamp",
        price: 1299,
        category: "home",
        icon: "💡",
        description:
            "Minimal table lamp for your bedroom or workspace."
    },

    {
        name: "Coffee Maker",
        price: 3499,
        category: "home",
        icon: "☕",
        description:
            "Easy-to-use coffee maker for fresh coffee every morning."
    },

    {
        name: "Travel Backpack",
        price: 1599,
        category: "accessories",
        icon: "🎒",
        description:
            "Spacious and durable backpack for college and travel."
    },

    {
        name: "Classic Sunglasses",
        price: 999,
        category: "accessories",
        icon: "🕶️",
        description:
            "Stylish sunglasses with a modern lightweight frame."
    }

];


// ELEMENTS

const searchInput =
    document.getElementById("searchInput");

const searchButton =
    document.getElementById("searchButton");

const productGrid =
    document.getElementById("productGrid");

const noProducts =
    document.getElementById("noProducts");

const sortSelect =
    document.getElementById("sortSelect");

const categoryButtons =
    document.querySelectorAll(".category-button");

const cartButton =
    document.getElementById("cartButton");

const cartSidebar =
    document.getElementById("cartSidebar");

const cartOverlay =
    document.getElementById("cartOverlay");

const closeCartButton =
    document.getElementById("closeCartButton");

const cartItems =
    document.getElementById("cartItems");

const cartCount =
    document.getElementById("cartCount");

const cartTotal =
    document.getElementById("cartTotal");

const checkoutButton =
    document.getElementById("checkoutButton");

const themeButton =
    document.getElementById("themeButton");


// CURRENT FILTER

let currentCategory = "all";


// ===============================
// SEARCH
// ===============================

function filterProducts() {

    const searchText =
        searchInput.value.toLowerCase().trim();

    const cards =
        document.querySelectorAll(".product-card");

    let visibleCount = 0;

    cards.forEach(card => {

        const name =
            card.dataset.name.toLowerCase();

        const category =
            card.dataset.category;

        const matchesSearch =
            name.includes(searchText);

        const matchesCategory =
            currentCategory === "all" ||
            category === currentCategory;

        if (matchesSearch && matchesCategory) {

            card.style.display = "";

            visibleCount++;

        } else {

            card.style.display = "none";

        }

    });

    if (visibleCount === 0) {

        noProducts.style.display = "block";

    } else {

        noProducts.style.display = "none";

    }
}


searchInput.addEventListener(
    "input",
    filterProducts
);

searchButton.addEventListener(
    "click",
    filterProducts
);


// ===============================
// CATEGORY FILTER
// ===============================

categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        categoryButtons.forEach(btn => {

            btn.classList.remove("active");

        });

        button.classList.add("active");

        currentCategory =
            button.dataset.category;

        filterProducts();

    });

});


// ===============================
// SORT
// ===============================

sortSelect.addEventListener("change", () => {

    const cards =
        Array.from(
            document.querySelectorAll(".product-card")
        );

    const value =
        sortSelect.value;

    if (value === "low") {

        cards.sort((a, b) => {

            return Number(a.dataset.price) -
                Number(b.dataset.price);

        });

    }

    if (value === "high") {

        cards.sort((a, b) => {

            return Number(b.dataset.price) -
                Number(a.dataset.price);

        });

    }

    if (value === "name") {

        cards.sort((a, b) => {

            return a.dataset.name.localeCompare(
                b.dataset.name
            );

        });

    }

    cards.forEach(card => {

        productGrid.appendChild(card);

    });

    filterProducts();

});


// ===============================
// ADD TO CART
// ===============================

document.querySelectorAll(".add-cart-button")
    .forEach((button, index) => {

        button.addEventListener("click", (event) => {

            event.stopPropagation();

            addToCart(products[index]);

        });

    });


function addToCart(product) {

    const existing =
        cart.find(item =>
            item.name === product.name
        );

    if (existing) {

        existing.quantity++;

    } else {

        cart.push({

            ...product,

            quantity: 1

        });

    }

    updateCart();

    openCart();

}


// ===============================
// UPDATE CART
// ===============================

function updateCart() {

    cartItems.innerHTML = "";

    if (cart.length === 0) {

        cartItems.innerHTML =
            `<p class="empty-cart">
                Your cart is empty.
            </p>`;

    }

    let total = 0;

    let count = 0;


    cart.forEach((item, index) => {

        total +=
            item.price * item.quantity;

        count +=
            item.quantity;


        const cartItem =
            document.createElement("div");

        cartItem.className =
            "cart-item";

        cartItem.innerHTML = `

            <div class="cart-item-icon">
                ${item.icon}
            </div>

            <div class="cart-item-info">

                <h4>${item.name}</h4>

                <p>
                    ₹${item.price.toLocaleString()}
                    × ${item.quantity}
                </p>

            </div>

            <button
                class="remove-item"
                onclick="removeFromCart(${index})">

                ✕

            </button>
        `;

        cartItems.appendChild(cartItem);

    });


    cartCount.textContent =
        count;

    cartTotal.textContent =
        "₹" + total.toLocaleString();

}


// ===============================
// REMOVE FROM CART
// ===============================

function removeFromCart(index) {

    cart.splice(index, 1);

    updateCart();

}


// ===============================
// OPEN CART
// ===============================

function openCart() {

    cartSidebar.classList.add("active");

    cartOverlay.classList.add("active");

}


// ===============================
// CLOSE CART
// ===============================

function closeCart() {

    cartSidebar.classList.remove("active");

    cartOverlay.classList.remove("active");

}


cartButton.addEventListener(
    "click",
    openCart
);

closeCartButton.addEventListener(
    "click",
    closeCart
);

cartOverlay.addEventListener(
    "click",
    closeCart
);


// ===============================
// FAVORITES
// ===============================

document.querySelectorAll(".favorite-button")
    .forEach(button => {

        button.addEventListener("click", () => {

            button.classList.toggle("active");

            if (
                button.classList.contains("active")
            ) {

                button.textContent = "♥";

            } else {

                button.textContent = "♡";

            }

        });

    });


// ===============================
// PRODUCT MODAL
// ===============================

const productModal =
    document.getElementById("productModal");

const closeModalButton =
    document.getElementById("closeModalButton");

const modalProductIcon =
    document.getElementById("modalProductIcon");

const modalProductCategory =
    document.getElementById("modalProductCategory");

const modalProductName =
    document.getElementById("modalProductName");

const modalProductDescription =
    document.getElementById("modalProductDescription");

const modalProductPrice =
    document.getElementById("modalProductPrice");

const modalAddCartButton =
    document.getElementById("modalAddCartButton");


document.querySelectorAll(".product-card")
    .forEach((card, index) => {

        card.addEventListener("click", (event) => {

            if (
                event.target.closest(
                    ".add-cart-button"
                )
            ) {
                return;
            }

            if (
                event.target.closest(
                    ".favorite-button"
                )
            ) {
                return;
            }

            openProductModal(
                products[index]
            );

        });

    });


function openProductModal(product) {

    modalProductIcon.textContent =
        product.icon;

    modalProductCategory.textContent =
        product.category;

    modalProductName.textContent =
        product.name;

    modalProductDescription.textContent =
        product.description;

    modalProductPrice.textContent =
        "₹" +
        product.price.toLocaleString();


    modalAddCartButton.onclick = () => {

        addToCart(product);

        closeProductModal();

    };


    productModal.classList.add("active");

}


function closeProductModal() {

    productModal.classList.remove("active");

}


closeModalButton.addEventListener(
    "click",
    closeProductModal
);


productModal.addEventListener(
    "click",
    (event) => {

        if (event.target === productModal) {

            closeProductModal();

        }

    }
);


// ===============================
// DARK MODE
// ===============================

themeButton.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (
        document.body.classList.contains("dark")
    ) {

        themeButton.textContent = "☀️";

    } else {

        themeButton.textContent = "🌙";

    }

});


// ===============================
// CHECKOUT
// ===============================

checkoutButton.addEventListener(
    "click",
    () => {

        if (cart.length === 0) {

            alert(
                "Your cart is empty."
            );

            return;

        }

        alert(
            "Demo checkout successful! 🛍️"
        );

    }
);


// ===============================
// HERO BUTTON
// ===============================

function scrollToProducts() {

    document.getElementById("products")
        .scrollIntoView({
            behavior: "smooth"
        });

}


// ===============================
// INITIALIZE
// ===============================

updateCart();