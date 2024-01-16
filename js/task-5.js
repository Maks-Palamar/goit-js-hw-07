function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

const toColor = document.querySelector('body');
const toSpan = document.querySelector('.color');
const toBtn = document.querySelector('.change-color');
let colr;

function changeColBtn(event) {
  let currentCol = getRandomHexColor();
  toColor.style.backgroundColor = currentCol;
  toColor.style.transition = 'background-color 0.6s';
  toSpan.textContent = currentCol;
  toSpan.style.transition = 'color 0.6s';
}

toBtn.addEventListener('click', changeColBtn);
