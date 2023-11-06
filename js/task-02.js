const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");
const list = [];

for (const element of ingredients) {
    const ingredient = document.createElement("li");
    ingredient.textContent = element;
    ingredient.classList.add("item");
    list.push(ingredient);
}

ingredientsList.append(...list);
