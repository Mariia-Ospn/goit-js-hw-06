const categoriesListEl = document
  .querySelector("#categories")
  .querySelectorAll(".item");
console.log(`Number of categories:${categoriesListEl.length}`);

categoriesListEl.forEach((element) => {
  console.log(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements: ${element.lastElementChild.children.length}`);
});
