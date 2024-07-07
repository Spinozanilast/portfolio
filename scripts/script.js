const CATEGORY_BUTTONS_CLASSNAME = "category-button";
const ARTICLES_CLASSNAME = "article-section";
const ANIMATED_BACKGROUND_CLASSNAME = "animated-section-background";
const THEMES = {
    DARK: {
        name: "dark",
        iconPath: "./assets/NightVector.svg"
    },
    LIGHT: {
        name: "light",
        iconPath: "./assets/LightVector.svg"
    }
}

const DEFAULT_THEME = THEMES.DARK;

(function setCategoryPressAnimations() {
    const categoriesButtonsList = document.getElementsByClassName(CATEGORY_BUTTONS_CLASSNAME);
    const articlesList = document.getElementsByClassName(ARTICLES_CLASSNAME);

    for (let i = 0; i < categoriesButtonsList.length && articlesList.length; i++) {
        categoriesButtonsList[i].addEventListener("click", function () {
            articlesList[i].classList.add(ANIMATED_BACKGROUND_CLASSNAME);
            setTimeout(() => {
                articlesList[i].classList.remove(ANIMATED_BACKGROUND_CLASSNAME);
            }, 1000);
        });
    }
})();

let currentTheme = DEFAULT_THEME;

function changeTheme(themeButton, themeImageId) {
    const prevTheme = currentTheme;
    themeButton.classList.remove(currentTheme.name);
    document.getElementById(themeImageId).classList.remove(currentTheme.name);

    currentTheme = currentTheme === THEMES.DARK
        ? THEMES.LIGHT
        : THEMES.DARK;
    document.querySelector("html").setAttribute("data-theme", currentTheme.name);

    themeButton.classList.add(currentTheme.name);
    const imgElement = document.getElementById(themeImageId);
    imgElement.classList.add(currentTheme.name);
    imgElement.src = currentTheme.iconPath;

    changeIconsTheme(prevTheme.name);
}

function changeIconsTheme(prevTheme) {
    document.querySelectorAll(`.reference>img`).forEach((refIcon) => {
        const refClassList = refIcon.classList;
        refClassList.remove(refClassList.item(0));
        refClassList.add(currentTheme.name);
    })
    document.querySelectorAll('img.hobby-icon').forEach((refIcon) => {
        refIcon.src = refIcon.src.replace(currentTheme.name, prevTheme);
    })
}