const ingredients = [  "Potatoes",  "Mushrooms",  "Garlic",  "Tomatos",  "Herbs",  "Condiments",];
const allIngredients = [];
const ingredientsEL = ingredients.forEach((ingredient) => {  const listEL = document.createElement("li");

  listEL.classList.add("item");
  listEL.textContent = ingredient;
  allIngredients.push(listEL);});

const elementsUl = document.querySelector("#ingredients");elementsUl.append(...allIngredients);console.log(elementsUl);


