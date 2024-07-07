const CATEGORY_BUTTONS_CLASSNAME = "category-button";
const ARTICLES_CLASSNAME = "article-section";
const ANIMATED_BACKGROUND_CLASSNAME = "animated-section-background";

function setCategoryPressAnimations() {
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
}

setCategoryPressAnimations();