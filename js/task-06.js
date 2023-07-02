const inputRef = document.querySelector("#validation-input");
const inputLength = Number(inputRef.getAttribute("data-length"));

inputRef.addEventListener("blur", validationHandler);

function validationHandler() {
  if (inputRef.value.length === inputLength) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  } else {
    inputRef.classList.add("invalid");
    inputRef.classList.remove("valid");
  }
}
