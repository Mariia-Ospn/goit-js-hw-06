const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

const handleSubmit = (event) => {
  textOutput.textContent =
    textInput.value === "" ? "Anonymous" : textInput.value;
};

textInput.addEventListener("input", handleSubmit);

// const refs = {
//   inputElm: document.querySelector("input#name-input"),
//   outputElm: document.querySelector("span#name-output"),
// };
// const inputHandle = (event) => {
//   refs.outputElm.textContent = event.currentTarget.value
//     ? event.currentTarget.value
//     : "Anonymous";
// };
// refs.inputElm.addEventListener("input", inputHandle);
// console.log(refs.outputElm.textContent);
