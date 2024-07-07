const DEFAULT_LOCALE = "ru";

const localizations = {
    "ru": {
        "ru_button": "РУС",
        "en_button": "EN",
        "full_name": "Вадим Будчанин",
        "personal-speciality": "ИНЖЕНЕР - ПРОГРАММИСТ",
        "about_me": "Обо мне",
        "skills": "Навыки",
        "strengths": "Сильные стороны",
        "prog_langs": "Языки программирования",
        "education": "Образование",
        "hobbies": "Хобби",
        "analytical_thinking": "Аналитическое мышление",
        "communication": "Коммуникация",
        "problem_solving": "Решение проблем",
        "technical_proficiency": "Техническая подкованность",
        "entertaining": "Занимательный",
        "easygoing": "Лёгкий на подьём",
        "fast_learning": "Быстроразвивающийся",
        "quick_solution": "Быстро нахожу решения",
        "prog_langs_knowledges": "Знание языков программирования",
        "university": "Университет -",
        "university_name": "БНТУ",
        "faculty": "Факультет -",
        "faculty_name": "ФИТР (информационных технологий и робототехники)",
        "speciality": "Специальность -",
        "speciality_name": "Информационные системы и технологии в представлении и обработке информации (ИСИТ)",
        "studying": "С 2021 года учусь",
        "course": "3 курс на данный момент",
        "olympiads": "в БНТУ. Регулярно учавстовал в математических университетских олимпиадах: в 2022 и 2023",
        "olympiads_results": "(2 и 3 места соответственно)",
        "hobby_3d_modeling": "3D - моделированиие",
        "hobby_game_development": "Разработка игр",
        "hobby_reading": "Чтение книг",
        "hobby_learning_languages": "Изучение новых языков программирования",
        "bio_part1": "Целеустремленный начинающий инженер-программист. Я студент третьего курса факультета информационных технологий и робототехники, специализирующийся на разработке программного обеспечения.",
        "bio_part2": "Я имею опыт работы с технологиями .NET, такими как C#, ASP.NET MVC, Entity Framework, LINQ, WPF. Я также знаком с базами данных SQL Server и MySQL, а также с инструментами разработки Visual Studio, Jetbrains и Git. Я ответственный, инициативный и коммуникабельный человек, способный работать в команде и самостоятельно, также имею чёткое умение быстро формулировать необходимые запросы для поиска информации. Я готов к обучению и развитию, а также к выполнению поставленных задач в срок и с высоким качеством."
    },
    "en": {
        "ru_button": "RU",
        "en_button": "EN",
        "full_name": "Vadim Budchanin",
        "personal-speciality": "SOFTWARE ENGINEER",
        "about_me": "About Me",
        "skills": "Skills",
        "strengths": "Strengths",
        "prog_langs": "Programming Languages",
        "education": "Education",
        "hobbies": "Hobbies",
        "analytical_thinking": "Analytical Thinking",
        "communication": "Communication",
        "problem_solving": "Problem Solving",
        "technical_proficiency": "Technical Proficiency",
        "entertaining": "Entertaining",
        "easygoing": "Easygoing",
        "fast_learning": "Fast Learning",
        "quick_solution": "Quick Solution",
        "prog_langs_knowledges": "Knowledge of programming languages",
        "university": "University -",
        "university_name": "BNTU",
        "faculty": "Faculty -",
        "faculty_name": "FITR (information technology and robotics)",
        "speciality": "Speciality -",
        "speciality_name": "Information systems and technologies in presentation and processing of information (ISIT)",
        "studying": "Studying since 2021",
        "course": "3rd year currently",
        "olympiads": "at BNTU. Regularly participated in mathematical university olympiads: in 2022 and 2023",
        "olympiads_results": "(2 and 3 places respectively)",
        "hobby_3d_modeling": "3D - Modeling",
        "hobby_game_development": "Game Development",
        "hobby_reading": "Reading Books",
        "hobby_learning_languages": "Learning New Programming Languages",
        "bio_part1": "Driven aspiring software engineer. I am a third-year student of the Faculty of Information Technology and Robotics, specializing in software development.",
        "bio_part2": "I have experience working with .NET technologies such as C#, ASP.NET MVC, Entity Framework, LINQ, WPF. I am also familiar with SQL Server and MySQL databases, as well as development tools like Visual Studio, Jetbrains, and Git. I am a responsible, proactive, and communicative person, capable of working both in a team and independently, with a clear ability to quickly formulate the necessary queries to search for information. I am ready for learning and development, as well as completing tasks on time and with high quality."
    }
};

let translations;
let locale = DEFAULT_LOCALE;

function setLocale(toggleToPart, toggleFromPartId, newLocale) {
    if (newLocale === locale) return;
    setActiveLangTogglePart(toggleToPart, toggleFromPartId)
    const newTranslations =
        localizations[newLocale];
    locale = newLocale;
    translations = newTranslations;
    translatePage();

}

function setActiveLangTogglePart(toggleToPart, toggleFromPartId) {
    document.getElementById(toggleFromPartId).classList.remove("active");
    toggleToPart.classList.add("active");
}

function translatePage() {
    document
        .querySelectorAll("[data-i18n-key]")
        .forEach(translateElement);
}

function translateElement(element) {
    const key = element.getAttribute("data-i18n-key");
    const translation = translations[key];
    element.innerText = translation;
}