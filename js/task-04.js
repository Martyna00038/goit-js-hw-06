const decrementButton = document.querySelector(
    `button[data-action="decrement"]`
);
const incrementButton = document.querySelector(
    `button[data-action="increment"]`
);
let counterValue = document.querySelector("#value");

const decrement = () => {
    counterValue.textContent--;
};

const increment = () => {
    counterValue.textContent++;
};

decrementButton.addEventListener("click", decrement);
incrementButton.addEventListener("click", increment);
