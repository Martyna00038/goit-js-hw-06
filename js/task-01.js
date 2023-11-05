const categoriesNumber = document.querySelectorAll("li.item");
console.log(`Number of categories: ${categoriesNumber.length}`);

for (const element of categoriesNumber) {
    const listHeader = element.querySelector("h2");
    console.log(`Category: ${listHeader.textContent}`);
    const listElements = element.querySelectorAll("li");
    console.log(`Elements: ${listElements.length}`);
}
