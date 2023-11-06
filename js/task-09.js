const color = document.querySelector(".color");
const changeColor = document.querySelector(".change-color");
const body = document.querySelector("body");

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

function backgroundColorChange() {
    let backgroundColor = getRandomHexColor();
    body.style.backgroundColor = backgroundColor;
    color.textContent = backgroundColor;
}

changeColor.addEventListener("click", backgroundColorChange);
