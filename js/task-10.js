function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  input: document.querySelector("input"),
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
  boxes: document.querySelector("#boxes"),
};
let boxesArray = [];

function btnClickHandler(event) {
  let btnClicked = event.currentTarget;
  if (btnClicked.hasAttribute("data-create")) {
    let amount = Number(refs.input.value);
    createBoxes(amount);
  } else {
    destroyBoxes();
  }
}

function createBoxes(amount) {
  let widthEl = 30;

  for (let i = 1; i <= amount; i++) {
    const randomColor = getRandomHexColor();
    widthEl += 10;
    const box = `<div style="background-color: ${randomColor}; height: ${widthEl}px; width: ${widthEl}px; margin-bottom: 5px"></div>`;
    boxesArray.push(box);
  }
  const markup = boxesArray.join("");
  refs.boxes.innerHTML = markup;
}

function destroyBoxes() {
  refs.boxes.innerHTML = "";
  refs.input.value = "";
}

refs.createBtn.addEventListener("click", btnClickHandler);
refs.destroyBtn.addEventListener("click", btnClickHandler);
