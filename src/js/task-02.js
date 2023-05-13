const body = document.body;
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

let ingredientsEl = document.createElement('ul');
body.append(ingredientsEl);

let ingredientsMarkup = ingredients.map(ingredient =>
  `<li> ${ingredient}</li>`).join('\n');
ingredientsEl.innerHTML = ingredientsMarkup;