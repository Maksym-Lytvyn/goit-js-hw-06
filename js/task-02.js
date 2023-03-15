const ingredients = [  "Potatoes",  "Mushrooms",  "Garlic",  "Tomatos",  "Herbs",  "Condiments",];
const allIngredients = [];
const ingredientsEL = ingredients.forEach((ingredient) => {  const listEL = document.createElement("li");

  listEL.classList.add("item");
  listEL.textContent = ingredient;
  allIngredients.push(listEL);});

const elementsUl = document.querySelector("#ingredients");elementsUl.append(...allIngredients);console.log(elementsUl);



/* const result = ingredients.forEach((ingredient) => {
  const newEl = document.createElement('li');
  newEl.textContent = `${ingredient}`;
  newEl.classList.add('item');
  ingredientsList.append(newEl);
}) */