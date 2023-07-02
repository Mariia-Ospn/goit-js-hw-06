const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsListEl = document.querySelector("#ingredients");

const elements = ingredients.reduce((acc, element) => {
  const li = document.createElement("li");
  li.textContent = element;
  li.classList.add("item");
  acc.push(li);
  return acc;
}, []);

ingredientsListEl.append(...elements);
console.log(...elements);

//Наиболее распространенный вариант решения подобных задач:
// const mapElements = ingredients
//   .map((ingredient) => `<li class ="item">${ingredient}</li>`)
//   .join('');
