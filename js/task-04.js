let counterValue = 0;
const counterRef = document.querySelector("#counter");
const counterValueRef = counterRef.querySelector("#value");
const btnRef = counterRef.querySelectorAll("[data-action]");

const handleClick = (event) => {
  counterValue +=
    event.currentTarget.getAttribute("data-action") === "increment" ? 1 : -1;
  counterValueRef.textContent = counterValue;
};

btnRef.forEach((btn) => {
  btn.addEventListener("click", handleClick);
});

// let valueEl = document.querySelector("#value");
// const decrementBtn = document.querySelector('button[data-action="decrement"]');
// const incrementBtn = document.querySelector('button[data-action="increment"]');

// const decrementBtnClickHandler = () => {
//   counterValue -= 1;
//   valueEl.textContent = counterValue;
// };

// decrementBtn.addEventListener("click", decrementBtnClickHandler);

// const incrementBtnClickHandler = () => {
//   counterValue += 1;
//   valueEl.textContent = counterValue;
// };

// incrementBtn.addEventListener("click", incrementBtnClickHandler);

// const handleClick = (event) => {
//   counterValue +=
//     event.currentTarget.getAttribute("data-action") === "increment" ? 1 : -1;
//   counterValueRef.textContent = counterValue;
// };
