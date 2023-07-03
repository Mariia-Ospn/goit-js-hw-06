const refs = {
  input: document.querySelector("#font-size-control"),
  text: document.querySelector("#text"),
};
refs.input.value = 16;

const handelInput = (event) => {
  refs.text.style.fontSize = `${refs.input.value}px`;
};

refs.input.addEventListener("input", handelInput);
