const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
];

const ingredientsList = document.querySelector("#ingridients");

for (const element of ingredients) {
    const ingredient = document.createElement("li");
    ingredient.textContent = element;
    ingredient.classList.add("item");
}
