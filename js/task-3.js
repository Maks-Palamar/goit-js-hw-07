const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

const defaultName = nameOutput.textContent;

nameInput.addEventListener("input", (event) => {
  const outputValue = event.currentTarget.value.trim() || defaultName;
  nameOutput.textContent = outputValue;
});
