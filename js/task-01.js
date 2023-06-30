const itemsEl = document.querySelectorAll(".item");

function countItems() {
  return itemsEl.length;
}

console.log(countItems());

itemsEl.forEach(function (element) {
  console.log(element.querySelector("h2").textContent);
  console.log(element.querySelectorAll("li").length);
});
