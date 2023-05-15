const items = document.querySelectorAll("#categories .item");

console.log(`Number of categories: ${items.length}`);

categoriesList.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`)
});