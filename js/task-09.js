function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const refs = {
  body: document.querySelector("body"),
  btn: document.querySelector("button.change-color"),
  nameColor: document.querySelector("span.color"),
};

refs.btn.addEventListener("click", handleClick);

function handleClick() {
  refs.body.style.backgroundColor = getRandomHexColor();
  refs.nameColor.textContent = refs.body.style.backgroundColor;
}
