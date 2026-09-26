/* =========================
   MOVIE DATA
========================= */

const movies = [
    {
        id: 1,
        title: "Shadow Protocol",
        genre: "action",
        year: 2026,
        rating: 9.1,
        duration: "2h 18m",
        emoji: "🥷",
        description:
            "An elite agent races against time to stop a secret organization from changing the future."
    },

    {
        id: 2,
        title: "Galaxy Beyond",
        genre: "sci-fi",
        year: 2026,
        rating: 8.8,
        duration: "2h 25m",
        emoji: "🚀",
        description:
            "A group of explorers travels beyond the known galaxy and discovers a mysterious civilization."
    },

    {
        id: 3,
        title: "Laugh Out Loud",
        genre: "comedy",
        year: 2025,
        rating: 8.2,
        duration: "1h 52m",
        emoji: "😂",
        description:
            "Three friends begin an unexpected journey that turns into the funniest adventure of their lives."
    },

    {
        id: 4,
        title: "The Last Letter",
        genre: "drama",
        year: 2025,
        rating: 8.9,
        duration: "2h 05m",
        emoji: "💌",
        description:
            "A forgotten letter brings two families together and reveals a secret from the past."
    },

    {
        id: 5,
        title: "Night Hunter",
        genre: "thriller",
        year: 2026,
        rating: 8.7,
        duration: "2h 12m",
        emoji: "🌙",
        description:
            "A detective follows a mysterious criminal through the darkest streets of the city."
    },

    {
        id: 6,
        title: "Robot Dreams",
        genre: "animation",
        year: 2025,
        rating: 8.6,
        duration: "1h 48m",
        emoji: "🤖",
        description:
            "A young robot discovers friendship, imagination and the meaning of being human."
    },

    {
        id: 7,
        title: "Speed Force",
        genre: "action",
        year: 2025,
        rating: 8.4,
        duration: "2h 08m",
        emoji: "🏎️",
        description:
            "A professional racer joins an underground competition where every second matters."
    },

    {
        id: 8,
        title: "Parallel World",
        genre: "sci-fi",
        year: 2024,
        rating: 8.5,
        duration: "2h 20m",
        emoji: "🌌",
        description:
            "A scientist discovers a portal to another world and must decide whether to enter it."
    },

    {
        id: 9,
        title: "Office Chaos",
        genre: "comedy",
        year: 2024,
        rating: 7.9,
        duration: "1h 45m",
        emoji: "🏢",
        description:
            "A group of coworkers tries to survive the most chaotic week in their office."
    },

    {
        id: 10,
        title: "Broken Memories",
        genre: "drama",
        year: 2024,
        rating: 8.3,
        duration: "2h 02m",
        emoji: "🧠",
        description:
            "A musician returns home and confronts memories that changed his life forever."
    },

    {
        id: 11,
        title: "Silent Room",
        genre: "thriller",
        year: 2023,
        rating: 8.1,
        duration: "1h 58m",
        emoji: "🚪",
        description:
            "A journalist enters an abandoned building and finds clues to a decades-old mystery."
    },

    {
        id: 12,
        title: "Magic Planet",
        genre: "animation",
        year: 2023,
        rating: 8.0,
        duration: "1h 40m",
        emoji: "🪐",
        description:
            "A curious child travels to a magical planet filled with strange creatures and adventures."
    }
];


/* =========================
   ELEMENTS
========================= */

const movieGrid = document.getElementById("movieGrid");
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const genreFilter = document.getElementById("genreFilter");
const sortSelect = document.getElementById("sortSelect");
const movieCount = document.getElementById("movieCount");
const noResults = document.getElementById("noResults");

const movieModal = document.getElementById("movieModal");
const closeModalButton = document.getElementById("closeModalButton");

const modalPoster = document.getElementById("modalPoster");
const modalGenre = document.getElementById("modalGenre");
const modalTitle = document.getElementById("modalTitle");
const modalYear = document.getElementById("modalYear");
const modalRating = document.getElementById("modalRating");
const modalDescription = document.getElementById("modalDescription");

const modalWatchButton =
    document.getElementById("modalWatchButton");

const modalFavoriteButton =
    document.getElementById("modalFavoriteButton");

const themeButton =
    document.getElementById("themeButton");

const heroWatchButton =
    document.getElementById("heroWatchButton");

const heroDetailsButton =
    document.getElementById("heroDetailsButton");


/* =========================
   STATE
========================= */

let favorites =
    JSON.parse(localStorage.getItem("streamboxFavorites")) || [];

let currentMovie = null;


/* =========================
   DISPLAY MOVIES
========================= */

function displayMovies(movieList) {

    movieGrid.innerHTML = "";

    movieCount.textContent =
        `${movieList.length} Movie${movieList.length !== 1 ? "s" : ""}`;

    if (movieList.length === 0) {

        noResults.style.display = "block";

        return;
    }

    noResults.style.display = "none";


    movieList.forEach((movie, index) => {

        const isFavorite =
            favorites.includes(movie.id);

        const card =
            document.createElement("article");

        card.className = "movie-card";

        card.innerHTML = `
            <div class="movie-poster">

                <span class="poster-number">
                    #${String(index + 1).padStart(2, "0")}
                </span>

                <span>
                    ${movie.emoji}
                </span>

                <button
                    class="favorite-movie ${isFavorite ? "active" : ""}"
                    data-favorite="${movie.id}"
                    title="Favorite"
                >
                    ${isFavorite ? "❤️" : "♡"}
                </button>

            </div>

            <div class="movie-info">

                <h3>
                    ${movie.title}
                </h3>

                <div class="movie-meta">

                    <span>
                        ${movie.year} • ${movie.duration}
                    </span>

                    <span class="rating">
                        ⭐ ${movie.rating}
                    </span>

                </div>

                <p>
                    ${movie.description}
                </p>

                <button
                    class="watch-button"
                    data-movie="${movie.id}"
                >
                    ▶ Watch / Details
                </button>

            </div>
        `;

        movieGrid.appendChild(card);

    });
}


/* =========================
   FILTER MOVIES
========================= */

function filterMovies() {

    const searchText =
        searchInput.value.trim().toLowerCase();

    const selectedGenre =
        genreFilter.value;

    let filtered =
        movies.filter(movie => {

            const matchesSearch =
                movie.title
                    .toLowerCase()
                    .includes(searchText);

            const matchesGenre =
                selectedGenre === "all" ||
                movie.genre === selectedGenre;

            return matchesSearch && matchesGenre;
        });


    /* SORT */

    const sortValue =
        sortSelect.value;

    if (sortValue === "rating") {

        filtered.sort(
            (a, b) => b.rating - a.rating
        );

    }

    else if (sortValue === "year") {

        filtered.sort(
            (a, b) => b.year - a.year
        );

    }

    else if (sortValue === "title") {

        filtered.sort(
            (a, b) =>
                a.title.localeCompare(b.title)
        );

    }


    displayMovies(filtered);
}


/* =========================
   OPEN MOVIE MODAL
========================= */

function openMovie(movieId) {

    const movie =
        movies.find(
            item => item.id === movieId
        );

    if (!movie) return;

    currentMovie = movie;

    modalPoster.textContent =
        movie.emoji;

    modalGenre.textContent =
        movie.genre.toUpperCase();

    modalTitle.textContent =
        movie.title;

    modalYear.textContent =
        movie.year;

    modalRating.textContent =
        `⭐ ${movie.rating}`;

    modalDescription.textContent =
        movie.description;

    updateFavoriteModalButton();

    movieModal.classList.add("show");

    document.body.style.overflow =
        "hidden";
}


/* =========================
   CLOSE MODAL
========================= */

function closeMovieModal() {

    movieModal.classList.remove("show");

    document.body.style.overflow =
        "";
}


/* =========================
   FAVORITES
========================= */

function toggleFavorite(movieId) {

    if (favorites.includes(movieId)) {

        favorites =
            favorites.filter(
                id => id !== movieId
            );

    } else {

        favorites.push(movieId);

    }

    localStorage.setItem(
        "streamboxFavorites",
        JSON.stringify(favorites)
    );

    filterMovies();

    if (
        currentMovie &&
        currentMovie.id === movieId
    ) {
        updateFavoriteModalButton();
    }
}


function updateFavoriteModalButton() {

    if (!currentMovie) return;

    const isFavorite =
        favorites.includes(currentMovie.id);

    modalFavoriteButton.textContent =
        isFavorite
            ? "❤️ Remove Favorite"
            : "♡ Add Favorite";
}


/* =========================
   CLICK EVENTS
========================= */

movieGrid.addEventListener(
    "click",
    event => {

        const favoriteButton =
            event.target.closest(
                "[data-favorite]"
            );

        if (favoriteButton) {

            const movieId =
                Number(
                    favoriteButton.dataset.favorite
                );

            toggleFavorite(movieId);

            return;
        }


        const watchButton =
            event.target.closest(
                "[data-movie]"
            );

        if (watchButton) {

            const movieId =
                Number(
                    watchButton.dataset.movie
                );

            openMovie(movieId);
        }

    }
);


/* =========================
   SEARCH
========================= */

searchInput.addEventListener(
    "input",
    filterMovies
);

searchButton.addEventListener(
    "click",
    filterMovies
);

genreFilter.addEventListener(
    "change",
    filterMovies
);

sortSelect.addEventListener(
    "change",
    filterMovies
);


/* =========================
   MODAL EVENTS
========================= */

closeModalButton.addEventListener(
    "click",
    closeMovieModal
);


movieModal.addEventListener(
    "click",
    event => {

        if (
            event.target === movieModal
        ) {
            closeMovieModal();
        }

    }
);


document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {
            closeMovieModal();
        }

    }
);


/* =========================
   MODAL FAVORITE
========================= */

modalFavoriteButton.addEventListener(
    "click",
    () => {

        if (!currentMovie) return;

        toggleFavorite(
            currentMovie.id
        );

    }
);


/* =========================
   WATCH BUTTON
========================= */

function demoWatch() {

    alert(
        "🎬 Demo Player\n\n" +
        "This is a frontend-only movie streaming template.\n\n" +
        "A real streaming API can be connected later."
    );
}


modalWatchButton.addEventListener(
    "click",
    demoWatch
);


/* =========================
   THEME
========================= */

function updateThemeIcon() {

    themeButton.textContent =
        document.body.classList.contains("dark")
            ? "☀️"
            : "🌙";
}


themeButton.addEventListener(
    "click",
    () => {

        document.body.classList.toggle("dark");

        localStorage.setItem(
            "streamboxTheme",
            document.body.classList.contains("dark")
                ? "dark"
                : "light"
        );

        updateThemeIcon();

    }
);


/* =========================
   LOAD SAVED THEME
========================= */

const savedTheme =
    localStorage.getItem("streamboxTheme");

if (savedTheme === "dark") {
    document.body.classList.add("dark");
}

updateThemeIcon();


/* =========================
   HERO BUTTONS
========================= */

heroWatchButton.addEventListener(
    "click",
    () => {

        openMovie(1);

    }
);


heroDetailsButton.addEventListener(
    "click",
    () => {

        document
            .getElementById("movies")
            .scrollIntoView({
                behavior: "smooth"
            });

    }
);


/* =========================
   GENRE CARDS
========================= */

document
    .querySelectorAll(".genre-card")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const genre =
                    button.dataset.genre;

                genreFilter.value =
                    genre;

                document
                    .getElementById("movies")
                    .scrollIntoView({
                        behavior: "smooth"
                    });

                filterMovies();

            }
        );

    });


/* =========================
   INITIAL LOAD
========================= */

displayMovies(movies);