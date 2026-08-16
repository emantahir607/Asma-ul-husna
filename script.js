const names = [

    {
        number: 1,
        arabic: "الرَّحْمَنُ",
        name: "Ar-Rahman",
        meaning: "The Most Merciful"
    },

    {
        number: 2,
        arabic: "الرَّحِيمُ",
        name: "Ar-Raheem",
        meaning: "The Especially Merciful"
    },

    {
        number: 3,
        arabic: "الْمَلِكُ",
        name: "Al-Malik",
        meaning: "The King"
    },

    {
        number: 4,
        arabic: "الْقُدُّوسُ",
        name: "Al-Quddus",
        meaning: "The Most Holy"
    },

    {
        number: 5,
        arabic: "السَّلَامُ",
        name: "As-Salam",
        meaning: "The Source of Peace"
    },

    {
        number: 6,
        arabic: "الْمُؤْمِنُ",
        name: "Al-Mu'min",
        meaning: "The Giver of Faith and Security"
    },

    {
        number: 7,
        arabic: "الْمُهَيْمِنُ",
        name: "Al-Muhaymin",
        meaning: "The Guardian"
    },

    {
        number: 8,
        arabic: "الْعَزِيزُ",
        name: "Al-Aziz",
        meaning: "The Almighty"
    },

    {
        number: 9,
        arabic: "الْجَبَّارُ",
        name: "Al-Jabbar",
        meaning: "The Compeller"
    },

    {
        number: 10,
        arabic: "الْمُتَكَبِّرُ",
        name: "Al-Mutakabbir",
        meaning: "The Supreme"
    },

    {
        number: 11,
        arabic: "الْخَالِقُ",
        name: "Al-Khaliq",
        meaning: "The Creator"
    },

    {
        number: 12,
        arabic: "الْبَارِئُ",
        name: "Al-Bari",
        meaning: "The Originator"
    },

    {
        number: 13,
        arabic: "الْمُصَوِّرُ",
        name: "Al-Musawwir",
        meaning: "The Fashioner"
    },

    {
        number: 14,
        arabic: "الْغَفَّارُ",
        name: "Al-Ghaffar",
        meaning: "The Constant Forgiver"
    },

    {
        number: 15,
        arabic: "الْقَهَّارُ",
        name: "Al-Qahhar",
        meaning: "The Subduer"
    },

    {
        number: 16,
        arabic: "الْوَهَّابُ",
        name: "Al-Wahhab",
        meaning: "The Bestower"
    },

    {
        number: 17,
        arabic: "الرَّزَّاقُ",
        name: "Ar-Razzaq",
        meaning: "The Provider"
    },

    {
        number: 18,
        arabic: "الْفَتَّاحُ",
        name: "Al-Fattah",
        meaning: "The Opener"
    },

    {
        number: 19,
        arabic: "الْعَلِيمُ",
        name: "Al-Alim",
        meaning: "The All-Knowing"
    },

    {
        number: 20,
        arabic: "الْقَابِضُ",
        name: "Al-Qabid",
        meaning: "The Withholder"
    },

    {
        number: 21,
        arabic: "الْبَاسِطُ",
        name: "Al-Basit",
        meaning: "The Expander"
    },

    {
        number: 22,
        arabic: "الْخَافِضُ",
        name: "Al-Khafid",
        meaning: "The Abaser"
    },

    {
        number: 23,
        arabic: "الرَّافِعُ",
        name: "Ar-Rafi",
        meaning: "The Exalter"
    },

    {
        number: 24,
        arabic: "الْمُعِزُّ",
        name: "Al-Mu'izz",
        meaning: "The Honorer"
    },

    {
        number: 25,
        arabic: "المُذِلُّ",
        name: "Al-Mudhill",
        meaning: "The Humiliator"
    },

    {
        number: 26,
        arabic: "السَّمِيعُ",
        name: "As-Sami",
        meaning: "The All-Hearing"
    },

    {
        number: 27,
        arabic: "الْبَصِيرُ",
        name: "Al-Basir",
        meaning: "The All-Seeing"
    },

    {
        number: 28,
        arabic: "الْحَكَمُ",
        name: "Al-Hakam",
        meaning: "The Judge"
    },

    {
        number: 29,
        arabic: "الْعَدْلُ",
        name: "Al-Adl",
        meaning: "The Utterly Just"
    },

    {
        number: 30,
        arabic: "اللَّطِيفُ",
        name: "Al-Latif",
        meaning: "The Gentle"
    },

    {
        number: 31,
        arabic: "الْخَبِيرُ",
        name: "Al-Khabir",
        meaning: "The All-Aware"
    },

    {
        number: 32,
        arabic: "الْحَلِيمُ",
        name: "Al-Halim",
        meaning: "The Forbearing"
    },

    {
        number: 33,
        arabic: "الْعَظِيمُ",
        name: "Al-Azim",
        meaning: "The Magnificent"
    },

    {
        number: 34,
        arabic: "الْغَفُورُ",
        name: "Al-Ghafur",
        meaning: "The Great Forgiver"
    },

    {
        number: 35,
        arabic: "الشَّكُورُ",
        name: "Ash-Shakur",
        meaning: "The Appreciative"
    },

    {
        number: 36,
        arabic: "الْعَلِيُّ",
        name: "Al-Ali",
        meaning: "The Most High"
    },

    {
        number: 37,
        arabic: "الْكَبِيرُ",
        name: "Al-Kabir",
        meaning: "The Most Great"
    },

    {
        number: 38,
        arabic: "الْحَفِيظُ",
        name: "Al-Hafiz",
        meaning: "The Preserver"
    },

    {
        number: 39,
        arabic: "الْمُقِيتُ",
        name: "Al-Muqit",
        meaning: "The Sustainer"
    },

    {
        number: 40,
        arabic: "الْحَسِيبُ",
        name: "Al-Hasib",
        meaning: "The Reckoner"
    },

    {
        number: 41,
        arabic: "الْجَلِيلُ",
        name: "Al-Jalil",
        meaning: "The Majestic"
    },

    {
        number: 42,
        arabic: "الْكَرِيمُ",
        name: "Al-Karim",
        meaning: "The Most Generous"
    },

    {
        number: 43,
        arabic: "الرَّقِيبُ",
        name: "Ar-Raqib",
        meaning: "The Watchful"
    },

    {
        number: 44,
        arabic: "الْمُجِيبُ",
        name: "Al-Mujib",
        meaning: "The Responsive"
    },

    {
        number: 45,
        arabic: "الْوَاسِعُ",
        name: "Al-Wasi",
        meaning: "The All-Encompassing"
    },

    {
        number: 46,
        arabic: "الْحَكِيمُ",
        name: "Al-Hakim",
        meaning: "The All-Wise"
    },

    {
        number: 47,
        arabic: "الْوَدُودُ",
        name: "Al-Wadud",
        meaning: "The Most Loving"
    },

    {
        number: 48,
        arabic: "الْمَجِيدُ",
        name: "Al-Majid",
        meaning: "The Glorious"
    },

    {
        number: 49,
        arabic: "الْبَاعِثُ",
        name: "Al-Ba'ith",
        meaning: "The Resurrector"
    },

    {
        number: 50,
        arabic: "الشَّهِيدُ",
        name: "Ash-Shahid",
        meaning: "The Witness"
    },

    {
        number: 51,
        arabic: "الْحَقُّ",
        name: "Al-Haqq",
        meaning: "The Truth"
    },

    {
        number: 52,
        arabic: "الْوَكِيلُ",
        name: "Al-Wakil",
        meaning: "The Trustee"
    },

    {
        number: 53,
        arabic: "الْقَوِيُّ",
        name: "Al-Qawiyy",
        meaning: "The All-Strong"
    },

    {
        number: 54,
        arabic: "الْمَتِينُ",
        name: "Al-Matin",
        meaning: "The Firm"
    },

    {
        number: 55,
        arabic: "الْوَلِيُّ",
        name: "Al-Wali",
        meaning: "The Protecting Friend"
    },

    {
        number: 56,
        arabic: "الْحَمِيدُ",
        name: "Al-Hamid",
        meaning: "The Praiseworthy"
    },

    {
        number: 57,
        arabic: "الْمُحْصِي",
        name: "Al-Muhsi",
        meaning: "The Enumerator"
    },

    {
        number: 58,
        arabic: "الْمُبْدِئُ",
        name: "Al-Mubdi",
        meaning: "The Originator"
    },

    {
        number: 59,
        arabic: "الْمُعِيدُ",
        name: "Al-Muid",
        meaning: "The Restorer"
    },

    {
        number: 60,
        arabic: "الْمُحْيِي",
        name: "Al-Muhyi",
        meaning: "The Giver of Life"
    },

    {
        number: 61,
        arabic: "الْمُمِيتُ",
        name: "Al-Mumit",
        meaning: "The Bringer of Death"
    },

    {
        number: 62,
        arabic: "الْحَيُّ",
        name: "Al-Hayy",
        meaning: "The Ever-Living"
    },

    {
        number: 63,
        arabic: "الْقَيُّومُ",
        name: "Al-Qayyum",
        meaning: "The Self-Sustaining"
    },

    {
        number: 64,
        arabic: "الْوَاجِدُ",
        name: "Al-Wajid",
        meaning: "The Finder"
    },

    {
        number: 65,
        arabic: "الْمَاجِدُ",
        name: "Al-Majid",
        meaning: "The Noble"
    },

    {
        number: 66,
        arabic: "الْوَاحِدُ",
        name: "Al-Wahid",
        meaning: "The One"
    },

    {
        number: 67,
        arabic: "الْأَحَدُ",
        name: "Al-Ahad",
        meaning: "The Unique"
    },

    {
        number: 68,
        arabic: "الصَّمَدُ",
        name: "As-Samad",
        meaning: "The Eternal Refuge"
    },

    {
        number: 69,
        arabic: "الْقَادِرُ",
        name: "Al-Qadir",
        meaning: "The Capable"
    },

    {
        number: 70,
        arabic: "الْمُقْتَدِرُ",
        name: "Al-Muqtadir",
        meaning: "The All-Powerful"
    },

    {
        number: 71,
        arabic: "الْمُقَدِّمُ",
        name: "Al-Muqaddim",
        meaning: "The Expediter"
    },

    {
        number: 72,
        arabic: "الْمُؤَخِّرُ",
        name: "Al-Mu'akhkhir",
        meaning: "The Delayer"
    },

    {
        number: 73,
        arabic: "الْأَوَّلُ",
        name: "Al-Awwal",
        meaning: "The First"
    },

    {
        number: 74,
        arabic: "الْآخِرُ",
        name: "Al-Akhir",
        meaning: "The Last"
    },

    {
        number: 75,
        arabic: "الظَّاهِرُ",
        name: "Az-Zahir",
        meaning: "The Manifest"
    },

    {
        number: 76,
        arabic: "الْبَاطِنُ",
        name: "Al-Batin",
        meaning: "The Hidden"
    },

    {
        number: 77,
        arabic: "الْوَالِي",
        name: "Al-Wali",
        meaning: "The Governor"
    },

    {
        number: 78,
        arabic: "الْمُتَعَالِي",
        name: "Al-Muta'ali",
        meaning: "The Most Exalted"
    },

    {
        number: 79,
        arabic: "الْبَرُّ",
        name: "Al-Barr",
        meaning: "The Source of Goodness"
    },

    {
        number: 80,
        arabic: "التَّوَابُ",
        name: "At-Tawwab",
        meaning: "The Acceptor of Repentance"
    },

    {
        number: 81,
        arabic: "الْمُنْتَقِمُ",
        name: "Al-Muntaqim",
        meaning: "The Avenger"
    },

    {
        number: 82,
        arabic: "الْعَفُوُّ",
        name: "Al-Afuww",
        meaning: "The Pardoner"
    },

    {
        number: 83,
        arabic: "الرَّؤُوفُ",
        name: "Ar-Ra'uf",
        meaning: "The Most Kind"
    },

    {
        number: 84,
        arabic: "مَالِكُ الْمُلْكِ",
        name: "Malik-ul-Mulk",
        meaning: "Owner of Sovereignty"
    },

    {
        number: 85,
        arabic: "ذُو الْجَلَالِ وَالْإِكْرَامِ",
        name: "Dhul-Jalali wal-Ikram",
        meaning: "Lord of Majesty and Honor"
    },

    {
        number: 86,
        arabic: "الْمُقْسِطُ",
        name: "Al-Muqsit",
        meaning: "The Equitable"
    },

    {
        number: 87,
        arabic: "الْجَامِعُ",
        name: "Al-Jami",
        meaning: "The Gatherer"
    },

    {
        number: 88,
        arabic: "الْغَنِيُّ",
        name: "Al-Ghani",
        meaning: "The Self-Sufficient"
    },

    {
        number: 89,
        arabic: "الْمُغْنِي",
        name: "Al-Mughni",
        meaning: "The Enricher"
    },

    {
        number: 90,
        arabic: "الْمَانِعُ",
        name: "Al-Mani",
        meaning: "The Preventer"
    },

    {
        number: 91,
        arabic: "الضَّارُّ",
        name: "Ad-Darr",
        meaning: "The Distresser"
    },

    {
        number: 92,
        arabic: "النَّافِعُ",
        name: "An-Nafi",
        meaning: "The Benefactor"
    },

    {
        number: 93,
        arabic: "النُّورُ",
        name: "An-Nur",
        meaning: "The Light"
    },

    {
        number: 94,
        arabic: "الْهَادِي",
        name: "Al-Hadi",
        meaning: "The Guide"
    },

    {
        number: 95,
        arabic: "الْبَدِيعُ",
        name: "Al-Badi",
        meaning: "The Incomparable Originator"
    },

    {
        number: 96,
        arabic: "الْبَاقِي",
        name: "Al-Baqi",
        meaning: "The Everlasting"
    },

    {
        number: 97,
        arabic: "الْوَارِثُ",
        name: "Al-Warith",
        meaning: "The Inheritor"
    },

    {
        number: 98,
        arabic: "الرَّشِيدُ",
        name: "Ar-Rashid",
        meaning: "The Guide to the Right Path"
    },

    {
        number: 99,
        arabic: "الصَّبُورُ",
        name: "As-Sabur",
        meaning: "The Most Patient"
    }

];


// =============================
// VARIABLES
// =============================

const container = document.getElementById("namesContainer");
const searchInput = document.getElementById("searchInput");
const favoritesBtn = document.getElementById("favoritesBtn");
const resultCount = document.getElementById("resultCount");
const noResults = document.getElementById("noResults");

const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");

const modalNumber = document.getElementById("modalNumber");
const modalArabic = document.getElementById("modalArabic");
const modalName = document.getElementById("modalName");
const modalMeaning = document.getElementById("modalMeaning");
const modalFavorite = document.getElementById("modalFavorite");

let favorites =
    JSON.parse(localStorage.getItem("asmaFavorites")) || [];

let showingFavorites = false;
let currentModalName = null;


// =============================
// DISPLAY NAMES
// =============================

function displayNames(list) {

    container.innerHTML = "";

    resultCount.textContent = list.length;

    if (list.length === 0) {

        noResults.style.display = "block";

        return;

    }

    noResults.style.display = "none";


    list.forEach((item, index) => {

        const card = document.createElement("div");

        card.className = "name-card";

        card.style.animationDelay =
            `${Math.min(index * 0.03, 0.5)}s`;


        const isFavorite =
            favorites.includes(item.number);


        card.innerHTML = `

            <div class="card-top">

                <span class="number">
                    ${String(item.number).padStart(2, "0")}
                </span>

                <button
                    class="favorite-btn ${isFavorite ? "favorited" : ""}"
                    onclick="toggleFavorite(event, ${item.number})"
                >
                    ${isFavorite ? "♥" : "♡"}
                </button>

            </div>


            <div class="arabic">
                ${item.arabic}
            </div>


            <div class="transliteration">
                ${item.name}
            </div>


            <div class="meaning">
                ${item.meaning}
            </div>


            <button
                class="view-more"
                onclick="openModal(event, ${item.number})"
            >
                View Details
            </button>

        `;


        card.addEventListener("click", (event) => {

            if (
                event.target.classList.contains("favorite-btn") ||
                event.target.classList.contains("view-more")
            ) {
                return;
            }

            openModal(event, item.number);

        });


        container.appendChild(card);

    });

}


// =============================
// SEARCH
// =============================

searchInput.addEventListener("input", filterNames);


function filterNames() {

    const query =
        searchInput.value.toLowerCase().trim();


    let filtered = names.filter(item => {

        return (
            item.name.toLowerCase().includes(query) ||
            item.meaning.toLowerCase().includes(query) ||
            item.arabic.includes(query)
        );

    });


    if (showingFavorites) {

        filtered = filtered.filter(item =>
            favorites.includes(item.number)
        );

    }


    displayNames(filtered);

}


// =============================
// FAVORITES
// =============================

function toggleFavorite(event, number) {

    event.stopPropagation();


    if (favorites.includes(number)) {

        favorites =
            favorites.filter(id => id !== number);

    } else {

        favorites.push(number);

    }


    localStorage.setItem(
        "asmaFavorites",
        JSON.stringify(favorites)
    );


    filterNames();

}


favoritesBtn.addEventListener("click", () => {

    showingFavorites = !showingFavorites;

    favoritesBtn.classList.toggle(
        "active",
        showingFavorites
    );


    favoritesBtn.innerHTML =
        showingFavorites
            ? "♥ Favorites"
            : "♡ Favorites";


    filterNames();

});


// =============================
// MODAL
// =============================

function openModal(event, number) {

    if (event) {
        event.stopPropagation();
    }


    const item =
        names.find(name => name.number === number);


    if (!item) return;


    currentModalName = number;


    modalNumber.textContent =
        `NAME ${String(item.number).padStart(2, "0")} OF 99`;

    modalArabic.textContent =
        item.arabic;

    modalName.textContent =
        item.name;

    modalMeaning.textContent =
        item.meaning;


    updateModalFavorite();


    modal.classList.add("show");

}


function updateModalFavorite() {

    const isFavorite =
        favorites.includes(currentModalName);


    modalFavorite.innerHTML =
        isFavorite
            ? "♥ Remove from Favorites"
            : "♡ Add to Favorites";

}


modalFavorite.addEventListener("click", () => {

    if (currentModalName === null) return;


    if (favorites.includes(currentModalName)) {

        favorites =
            favorites.filter(
                id => id !== currentModalName
            );

    } else {

        favorites.push(currentModalName);

    }


    localStorage.setItem(
        "asmaFavorites",
        JSON.stringify(favorites)
    );


    updateModalFavorite();

    filterNames();

});


closeModal.addEventListener("click", () => {

    modal.classList.remove("show");

});


modal.addEventListener("click", (event) => {

    if (event.target === modal) {

        modal.classList.remove("show");

    }

});


document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        modal.classList.remove("show");

    }

});


// =============================
// INITIAL LOAD
// =============================

displayNames(names);