const categoriesListEl = document
  .querySelector("#categories")
  .querySelectorAll(".item");
console.log(`Number of categories:${categoriesListEl.length}`);

categoriesListEl.forEach((element) => {
  console.log(`Category: ${element.querySelector("h2").textContent}`);
  console.log(`Elements: ${element.querySelectorAll("li").length}`);
});
