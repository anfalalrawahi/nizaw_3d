let currentLang = localStorage.getItem("lang") || "en";

document.addEventListener("DOMContentLoaded", function () {
applyLanguage(currentLang);
});

function changeLanguage() {

currentLang = currentLang === "en" ? "ar" : "en";

localStorage.setItem("lang", currentLang);

applyLanguage(currentLang);


}

function applyLanguage(lang) {


document.documentElement.lang = lang;

document.documentElement.dir =
    lang === "ar" ? "rtl" : "ltr";

/* النصوص العادية */

document.querySelectorAll("[data-lang]").forEach(function(item){

    const key = item.getAttribute("data-lang");

    if (
        translations[lang] &&
        translations[lang][key]
    ) {
        item.innerHTML = translations[lang][key];
    }

});

/* Placeholders */

document.querySelectorAll("[data-lang-placeholder]")
.forEach(function(item){

    const key =
    item.getAttribute("data-lang-placeholder");

    if (
        translations[lang] &&
        translations[lang][key]
    ){
        item.placeholder =
        translations[lang][key];
    }

});


}
