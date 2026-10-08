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