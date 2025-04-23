const translations = {
    en: {
        // Index.html translations
        title: "Epic Unity Rework",
        "nav.home": "Home",
        "nav.gallery": "Gallery",
        "nav.download": "Download",
        "nav.credits": "Credits",
        "nav.developers": "Developers",
        "nav.factions": "Factions",
        "nav.submods": "Submods",
        "nav.partners": "Partners",
        "nav.contact": "Contact",
        "hero.subtitle": "A grand overhaul for Divide and Conquer, forged in the fires of Middle-earth",
        "hero.button": "Embark Now",
        "gallery.title": "Gallery",
        "download.title": "Forge Your Path with Epic Unity Rework",
        "download.subtitle": "Follow the ancient rites to wield this mod.",
        "download.installationTitle": "Rites of Installation",
        "download.welcome": "Welcome to <span>Epic Unity Rework</span>.<br>Follow the steps below to install the mod successfully, and you’ll find download links for the mod and speed files at the end of this guide.",
        "download.guidelinesTitle": "EUR Installation Guidelines:",
        "download.requirement": "DaC V5 is needed for the installation of EUR",
        "download.step1": "Download the most recent EUR version",
        "download.step3": "Drag and drop the contents into DAC folder and overwrite it",
        "download.step4": "Rename your <span>Divide_and_Conquer</span> folder to <span>Divide_and_Conquer_EUR</span><br>",
        "download.step4Note": "very important. Otherwise your game wont launch!",
        "download.step5": "Run Large Address Aware on the <span>Medieval2.exe</span>",
        "download.step6": "Run cleaner.bat",
        "download.step7": "Launch game from M2TWEOP GUI",
        "download.youtubeLink": "Witness the Installation Lore on YouTube",
        "download.changelogLink": "Consult the Chronicle of Changes",
        "download.requirementsNote": "Requires DaC V5 and <span>Medieval II: Total War</span>. Seek the <a href='#' class='text-[#6aa8b5]'>FAQ</a> for guidance.",
        "download.faqLink": "FAQ",
        "credits.title": "Credits",
        "contact.title": "Join the Fellowship",
        "contact.subtitle": "Seek counsel or lend your strength to our cause!",
        "contact.discord": "Discord",
        "contact.moddb": "ModDB",
        "footer": "© 2025 Epic Unity Rework. Forged for the Free Peoples of Middle-earth.",

        // Developers.html translations
        "developers.title": "Developers",
        "developers.theEye": "The Eye",
        "developers.developers": "Developers",
        "developers.contributors": "Contributors",

        // Factions.html translations
        "factions.title": "Factions",

        // Submods.html translations
        "submods.title": "Submods",
        "submods.description": "Below are the submods integrated into the Epic Unity Rework, each adding unique flavor to the Middle-earth experience.",

        // Partners.html translations
        "partners.title": "Partners",
        "partners.visitChannel": "Visit Channel"
    },
    pl: {
        // Index.html translations
        title: "Epic Unity Rework",
        "nav.home": "Strona Główna",
        "nav.gallery": "Galeria",
        "nav.download": "Pobierz",
        "nav.credits": "Podziękowania",
        "nav.developers": "Twórcy",
        "nav.factions": "Frakcje",
        "nav.submods": "Podmody",
        "nav.partners": "Partnerzy",
        "nav.contact": "Kontakt",
        "hero.subtitle": "Wielka przebudowa dla Divide and Conquer, wykuta w ogniach Śródziemia",
        "hero.button": "Rozpocznij Teraz",
        "gallery.title": "Galeria",
        "download.title": "Wykuj Swoją Ścieżkę z Epic Unity Rework",
        "download.subtitle": "Postępuj zgodnie z pradawnymi rytuałami, aby użyć tego moda.",
        "download.installationTitle": "Rytuały Instalacji",
        "download.welcome": "Witamy w <span>Epic Unity Rework</span>.<br>Postępuj zgodnie z poniższymi krokami, aby pomyślnie zainstalować mod, a na końcu tego przewodnika znajdziesz linki do pobrania moda i plików przyspieszających.",
        "download.guidelinesTitle": "Wskazówki Instalacyjne EUR:",
        "download.requirement": "Do instalacji EUR wymagany jest DaC V5",
        "download.step1": "Pobierz najnowszą wersję EUR",
        "download.step3": "Przeciągnij i upuść zawartość do folderu DAC, nadpisz pliki",
        "download.step4": "Zmień nazwę folderu <span>Divide_and_Conquer</span> na <span>Divide_and_Conquer_EUR</span><br>",
        "download.step4Note": "bardzo ważne. W przeciwnym razie gra się nie uruchomi!",
        "download.step5": "Uruchom Large Address Aware na <span>Medieval2.exe</span>",
        "download.step6": "Uruchom cleaner.bat",
        "download.step7": "Uruchom grę z M2TWEOP GUI",
        "download.youtubeLink": "Obejrzyj Lore Instalacji na YouTube",
        "download.changelogLink": "Sprawdź Kronikę Zmian",
        "download.requirementsNote": "Wymaga DaC V5 i <span>Medieval II: Total War</span>. Zajrzyj do <a href='#' class='text-[#6aa8b5]'>FAQ</a> po wskazówki.",
        "download.faqLink": "FAQ",
        "credits.title": "Podziękowania",
        "contact.title": "Dołącz do Bractwa",
        "contact.subtitle": "Szukaj rady lub dołącz do naszej sprawy!",
        "contact.discord": "Discord",
        "contact.moddb": "ModDB",
        "footer": "© 2025 Epic Unity Rework. Wykuta dla Wolnych Ludów Śródziemia.",

        // Developers.html translations
        "developers.title": "Twórcy",
        "developers.theEye": "Oko",
        "developers.developers": "Twórcy",
        "developers.contributors": "Współtwórcy",

        // Factions.html translations
        "factions.title": "Frakcje",

        // Submods.html translations
        "submods.title": "Podmody",
        "submods.description": "Poniżej znajdują się submody zintegrowane z Epic Unity Rework, z których każdy wnosi unikalny smak do doświadczenia Śródziemia.",

        // Partners.html translations
        "partners.title": "Partnerzy",
        "partners.visitChannel": "Odwiedź Kanał"
    }
};

// Function to set the language
function setLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.innerHTML = translations[lang][key] || element.innerHTML;
    });

    // Update active button
    document.querySelectorAll('.language-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    // Update document language
    document.documentElement.lang = lang;
    localStorage.setItem('language', lang);
}

// Load saved language or default to English
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('language') || 'en';
    setLanguage(savedLang);

    // Language switcher event listeners
    document.querySelectorAll('.language-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            setLanguage(lang);
        });
    });
});
