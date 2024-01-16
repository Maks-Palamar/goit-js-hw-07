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
  /*toBtn.style.backgroundColor = currentCol;
  toBtn.style.borderStyle = 'solid';
  toBtn.style.borderColor = currentCol;
  toBtn.style.color = '#fff';
  toBtn.style.transition = 'background-color 0.6s, border-color 0.6s, color 0.6s';
  colr = currentCol;
  */
}

/*toBtn.addEventListener('mouseover', newOnStyle);
toBtn.addEventListener('mouseout', newOutStyle);

function newOnStyle() {
  toBtn.style.borderStyle = 'solid';
  toBtn.style.borderColor = colr;
  toBtn.style.backgroundColor = '#fff';
  toBtn.style.color = colr;
}

function newOutStyle() {
  toBtn.style.backgroundColor = colr;
  toBtn.style.color = '#fff';
}
*/
toBtn.addEventListener('click', changeColBtn);
