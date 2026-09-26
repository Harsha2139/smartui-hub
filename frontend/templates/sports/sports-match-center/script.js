/* =========================
   MATCH DATA
========================= */

const matches = [
    {
        id: 1,
        sport: "football",
        status: "live",
        home: "United FC",
        away: "City Stars",
        homeIcon: "🔵",
        awayIcon: "🔴",
        homeScore: 2,
        awayScore: 1,
        time: "78'",
        date: "Today",
        venue: "National Stadium"
    },

    {
        id: 2,
        sport: "cricket",
        status: "live",
        home: "India",
        away: "Australia",
        homeIcon: "🇮🇳",
        awayIcon: "🇦🇺",
        homeScore: 186,
        awayScore: 172,
        time: "18.4 Overs",
        date: "Today",
        venue: "Melbourne Cricket Ground"
    },

    {
        id: 3,
        sport: "basketball",
        status: "live",
        home: "Lakers",
        away: "Warriors",
        homeIcon: "🟣",
        awayIcon: "🟡",
        homeScore: 92,
        awayScore: 88,
        time: "Q3 - 04:21",
        date: "Today",
        venue: "Sports Arena"
    },

    {
        id: 4,
        sport: "football",
        status: "upcoming",
        home: "Royal FC",
        away: "United FC",
        homeIcon: "👑",
        awayIcon: "🔵",
        homeScore: "-",
        awayScore: "-",
        time: "18:30",
        date: "Today",
        venue: "Royal Stadium"
    },

    {
        id: 5,
        sport: "cricket",
        status: "upcoming",
        home: "England",
        away: "South Africa",
        homeIcon: "🏴",
        awayIcon: "🇿🇦",
        homeScore: "-",
        awayScore: "-",
        time: "19:00",
        date: "Tomorrow",
        venue: "London Cricket Ground"
    },

    {
        id: 6,
        sport: "tennis",
        status: "upcoming",
        home: "Alex Carter",
        away: "Daniel Smith",
        homeIcon: "🎾",
        awayIcon: "🎾",
        homeScore: "-",
        awayScore: "-",
        time: "20:30",
        date: "Tomorrow",
        venue: "Central Tennis Court"
    }
];


/* =========================
   STANDINGS DATA
========================= */

const footballStandings = [
    {
        position: 1,
        team: "United FC",
        icon: "🔵",
        mp: 18,
        w: 13,
        d: 3,
        l: 2,
        pts: 42
    },

    {
        position: 2,
        team: "City Stars",
        icon: "🔴",
        mp: 18,
        w: 12,
        d: 4,
        l: 2,
        pts: 40
    },

    {
        position: 3,
        team: "Royal FC",
        icon: "👑",
        mp: 18,
        w: 10,
        d: 5,
        l: 3,
        pts: 35
    },

    {
        position: 4,
        team: "Eagles United",
        icon: "🦅",
        mp: 18,
        w: 9,
        d: 4,
        l: 5,
        pts: 31
    },

    {
        position: 5,
        team: "Thunder FC",
        icon: "⚡",
        mp: 18,
        w: 7,
        d: 5,
        l: 6,
        pts: 26
    }
];


const cricketStandings = [
    {
        position: 1,
        team: "India",
        icon: "🇮🇳",
        mp: 10,
        w: 8,
        d: 0,
        l: 2,
        pts: 16
    },

    {
        position: 2,
        team: "Australia",
        icon: "🇦🇺",
        mp: 10,
        w: 7,
        d: 0,
        l: 3,
        pts: 14
    },

    {
        position: 3,
        team: "England",
        icon: "🏴",
        mp: 10,
        w: 6,
        d: 0,
        l: 4,
        pts: 12
    },

    {
        position: 4,
        team: "South Africa",
        icon: "🇿🇦",
        mp: 10,
        w: 5,
        d: 0,
        l: 5,
        pts: 10
    },

    {
        position: 5,
        team: "New Zealand",
        icon: "🇳🇿",
        mp: 10,
        w: 4,
        d: 0,
        l: 6,
        pts: 8
    }
];


/* =========================
   ELEMENTS
========================= */

const liveMatchGrid =
    document.getElementById("liveMatchGrid");

const upcomingMatchGrid =
    document.getElementById("upcomingMatchGrid");

const matchCount =
    document.getElementById("matchCount");

const standingsBody =
    document.getElementById("standingsBody");

const leagueSelect =
    document.getElementById("leagueSelect");

const themeButton =
    document.getElementById("themeButton");

const matchModal =
    document.getElementById("matchModal");

const closeModalButton =
    document.getElementById("closeModalButton");

const modalSport =
    document.getElementById("modalSport");

const modalStatus =
    document.getElementById("modalStatus");

const modalTitle =
    document.getElementById("modalTitle");

const modalHomeIcon =
    document.getElementById("modalHomeIcon");

const modalAwayIcon =
    document.getElementById("modalAwayIcon");

const modalHomeTeam =
    document.getElementById("modalHomeTeam");

const modalAwayTeam =
    document.getElementById("modalAwayTeam");

const modalHomeScore =
    document.getElementById("modalHomeScore");

const modalAwayScore =
    document.getElementById("modalAwayScore");

const modalTime =
    document.getElementById("modalTime");

const modalVenue =
    document.getElementById("modalVenue");

const liveButton =
    document.getElementById("liveButton");

const matchesButton =
    document.getElementById("matchesButton");


/* =========================
   CURRENT FILTER
========================= */

let selectedSport = "all";


/* =========================
   FORMAT SPORT
========================= */

function formatSport(sport) {

    return sport
        .charAt(0)
        .toUpperCase() +
        sport.slice(1);

}


/* =========================
   CREATE MATCH CARD
========================= */

function createMatchCard(match) {

    const isLive =
        match.status === "live";

    return `
        <article class="match-card">

            <div class="match-top">

                <span class="match-sport">
                    ${formatSport(match.sport)}
                </span>

                ${
                    isLive
                    ? `<span class="status-live">● LIVE</span>`
                    : `<span class="status-upcoming">UPCOMING</span>`
                }

            </div>


            <div class="teams">

                <div class="team">

                    <span class="team-icon">
                        ${match.homeIcon}
                    </span>

                    <strong>
                        ${match.home}
                    </strong>

                </div>


                <div class="score">

                    <span>
                        ${match.homeScore}
                    </span>

                    <span>:</span>

                    <span>
                        ${match.awayScore}
                    </span>

                </div>


                <div class="team">

                    <span class="team-icon">
                        ${match.awayIcon}
                    </span>

                    <strong>
                        ${match.away}
                    </strong>

                </div>

            </div>


            <div class="match-info">

                <p>
                    ⏱ ${match.time}
                </p>

                <p>
                    📍 ${match.venue}
                </p>

            </div>


            <button
                class="details-button"
                data-match="${match.id}"
            >
                View Match
            </button>

        </article>
    `;
}


/* =========================
   DISPLAY MATCHES
========================= */

function displayMatches() {

    let filteredMatches = matches;

    if (selectedSport !== "all") {

        filteredMatches =
            matches.filter(
                match =>
                    match.sport === selectedSport
            );

    }


    const liveMatches =
        filteredMatches.filter(
            match =>
                match.status === "live"
        );


    const upcomingMatches =
        filteredMatches.filter(
            match =>
                match.status === "upcoming"
        );


    liveMatchGrid.innerHTML =
        liveMatches.length
            ? liveMatches.map(createMatchCard).join("")
            : `
                <p class="empty-message">
                    No live matches for this sport.
                </p>
            `;


    upcomingMatchGrid.innerHTML =
        upcomingMatches.length
            ? upcomingMatches.map(createMatchCard).join("")
            : `
                <p class="empty-message">
                    No upcoming matches for this sport.
                </p>
            `;


    matchCount.textContent =
        `${upcomingMatches.length} Match${
            upcomingMatches.length !== 1
                ? "es"
                : ""
        }`;
}


/* =========================
   DISPLAY STANDINGS
========================= */

function displayStandings(type) {

    const data =
        type === "cricket"
            ? cricketStandings
            : footballStandings;


    standingsBody.innerHTML =
        data.map(team => {

            return `
                <tr>

                    <td class="position">
                        ${team.position}
                    </td>

                    <td>

                        <div class="team-cell">

                            <span>
                                ${team.icon}
                            </span>

                            <span>
                                ${team.team}
                            </span>

                        </div>

                    </td>

                    <td>
                        ${team.mp}
                    </td>

                    <td>
                        ${team.w}
                    </td>

                    <td>
                        ${team.d}
                    </td>

                    <td>
                        ${team.l}
                    </td>

                    <td class="points">
                        ${team.pts}
                    </td>

                </tr>
            `;

        }).join("");
}


/* =========================
   OPEN MATCH MODAL
========================= */

function openMatch(matchId) {

    const match =
        matches.find(
            item =>
                item.id === matchId
        );

    if (!match) return;


    modalSport.textContent =
        formatSport(match.sport);

    modalStatus.textContent =
        match.status === "live"
            ? "● LIVE"
            : "UPCOMING";


    modalTitle.textContent =
        `${match.home} vs ${match.away}`;


    modalHomeIcon.textContent =
        match.homeIcon;

    modalAwayIcon.textContent =
        match.awayIcon;


    modalHomeTeam.textContent =
        match.home;

    modalAwayTeam.textContent =
        match.away;


    modalHomeScore.textContent =
        match.homeScore;

    modalAwayScore.textContent =
        match.awayScore;


    modalTime.textContent =
        `⏱ ${match.time}`;

    modalVenue.textContent =
        `📍 ${match.venue}`;


    matchModal.classList.add("show");

    document.body.style.overflow =
        "hidden";
}


/* =========================
   CLOSE MODAL
========================= */

function closeModal() {

    matchModal.classList.remove("show");

    document.body.style.overflow =
        "";
}


/* =========================
   MATCH CLICK
========================= */

document.addEventListener(
    "click",
    event => {

        const button =
            event.target.closest(
                "[data-match]"
            );

        if (!button) return;


        const matchId =
            Number(
                button.dataset.match
            );


        openMatch(matchId);

    }
);


/* =========================
   SPORT FILTER
========================= */

document
    .querySelectorAll(".sport-button")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                document
                    .querySelectorAll(
                        ".sport-button"
                    )
                    .forEach(item => {
                        item.classList.remove(
                            "active"
                        );
                    });


                button.classList.add(
                    "active"
                );


                selectedSport =
                    button.dataset.sport;


                displayMatches();

            }
        );

    });


/* =========================
   LEAGUE SELECT
========================= */

leagueSelect.addEventListener(
    "change",
    () => {

        displayStandings(
            leagueSelect.value
        );

    }
);


/* =========================
   CLOSE MODAL
========================= */

closeModalButton.addEventListener(
    "click",
    closeModal
);


matchModal.addEventListener(
    "click",
    event => {

        if (
            event.target === matchModal
        ) {
            closeModal();
        }

    }
);


document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {
            closeModal();
        }

    }
);


/* =========================
   HERO BUTTONS
========================= */

liveButton.addEventListener(
    "click",
    () => {

        document
            .getElementById("live")
            .scrollIntoView({
                behavior: "smooth"
            });

    }
);


matchesButton.addEventListener(
    "click",
    () => {

        document
            .getElementById("matches")
            .scrollIntoView({
                behavior: "smooth"
            });

    }
);


/* =========================
   DARK MODE
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

        document.body.classList.toggle(
            "dark"
        );


        const theme =
            document.body.classList.contains("dark")
                ? "dark"
                : "light";


        localStorage.setItem(
            "matchCenterTheme",
            theme
        );


        updateThemeIcon();

    }
);


/* =========================
   LOAD THEME
========================= */

const savedTheme =
    localStorage.getItem(
        "matchCenterTheme"
    );


if (savedTheme === "dark") {

    document.body.classList.add(
        "dark"
    );

}


updateThemeIcon();


/* =========================
   INITIAL LOAD
========================= */

displayMatches();

displayStandings("football");