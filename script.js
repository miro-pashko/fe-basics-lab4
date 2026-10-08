// Лабораторна робота №4, варіант 1
// Номер елемента: (n mod 10) + 1 = (1 mod 10) + 1 = 2

// Перемикає колірну схему елемента: перший клік — схема A,
// кожен наступний клік — чергування схем A і B
function toggleColors(element) {
    if (element.classList.contains("scheme-a")) {
        element.classList.remove("scheme-a");
        element.classList.add("scheme-b");
    } else {
        element.classList.remove("scheme-b");
        element.classList.add("scheme-a");
    }
}

// ---------- Завдання 1 ----------

// Елемент №2 — доступ через getElementById()
const secondElement = document.getElementById("birth");
secondElement.addEventListener("click", function () {
    toggleColors(secondElement);
});

// Елемент №3 (наступний) — доступ через querySelector()
const thirdElement = document.querySelector(".education");
thirdElement.addEventListener("click", function () {
    toggleColors(thirdElement);
});

// ---------- Завдання 2 ----------

const container = document.getElementById("image-container");

const IMAGE_SRC = "https://commons.wikimedia.org/wiki/Special:FilePath/Rialto_Bridge_Grand_Canal.jpg?width=800";
const CITY_URL = "https://www.comune.venezia.it/";
const START_WIDTH = 800;
const STEP = 100;
const MIN_WIDTH = 100;
const MAX_WIDTH = 1600;

// Повертає поточну ширину зображення (зберігається в data-атрибуті,
// тому не залежить від того, чи встигло фото завантажитися)
function getWidth(img) {
    return Number(img.dataset.width) || START_WIDTH;
}

// Встановлює нову ширину зображення через властивість style
function setWidth(img, width) {
    img.dataset.width = width;
    img.style.width = width + "px";
}

// Повертає останнє зображення в контейнері (або null, якщо їх немає)
function getLastImage() {
    const images = container.querySelectorAll("img");
    return images.length > 0 ? images[images.length - 1] : null;
}

// Додати: створює нове зображення з посиланням на сайт міста
document.getElementById("add-btn").addEventListener("click", function () {
    const link = document.createElement("a");
    link.href = CITY_URL;
    link.target = "_blank";
    link.title = "Офіційний сайт міста Венеція";

    const img = document.createElement("img");
    img.src = IMAGE_SRC;
    img.alt = "Міст Ріальто та Гранд-канал у Венеції";
    setWidth(img, START_WIDTH);

    link.appendChild(img);
    container.appendChild(link);
});

// Збільшити: розширює останнє зображення на STEP пікселів
document.getElementById("zoom-in-btn").addEventListener("click", function () {
    const img = getLastImage();
    if (!img) {
        alert("Зображень немає. Спочатку натисніть «Додати».");
        return;
    }
    setWidth(img, Math.min(getWidth(img) + STEP, MAX_WIDTH));
});

// Зменшити: звужує останнє зображення на STEP пікселів
document.getElementById("zoom-out-btn").addEventListener("click", function () {
    const img = getLastImage();
    if (!img) {
        alert("Зображень немає. Спочатку натисніть «Додати».");
        return;
    }
    setWidth(img, Math.max(getWidth(img) - STEP, MIN_WIDTH));
});

// Видалити: прибирає останнє зображення разом із посиланням
document.getElementById("delete-btn").addEventListener("click", function () {
    const img = getLastImage();
    if (!img) {
        alert("Зображень для видалення немає.");
        return;
    }
    img.closest("a").remove();
});
