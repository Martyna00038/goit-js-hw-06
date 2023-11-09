const decrementButton = document.querySelector(
    `button[data-action="decrement"]`
);
const incrementButton = document.querySelector(
    `button[data-action="increment"]`
);
let counterValue = 0;
let valueElement = document.querySelector("#value");
const decrement = () => {
    counterValue--;
    valueElement.textContent = counterValue;
};

const increment = () => {
    counterValue++;
    valueElement.textContent = counterValue;
};

decrementButton.addEventListener("click", decrement);
incrementButton.addEventListener("click", increment);
