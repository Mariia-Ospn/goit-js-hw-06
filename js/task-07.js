const refs = {
  input: document.querySelector("#font-size-control"),
  text: document.querySelector("#text"),
};

const handelInput = (event) => {
  refs.text.style.fontSize = `${refs.input.value}px`;
};

refs.input.addEventListener("input", handelInput);
