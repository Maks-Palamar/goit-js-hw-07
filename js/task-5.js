function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const toColor = document.querySelector('body');
const toSpan = document.querySelector('.color');
const toBtn = document.querySelector('.change-color');
const btnListener = toBtn.addEventListener("click", changeColBtn);

let colr;
let isChangeColBtnCalled = false;

function changeColBtn(event) {
  let currentCol = getRandomHexColor();
  toColor.style.backgroundColor = currentCol;
  toColor.style.transition = 'background-color 0.5s';
  toSpan.textContent = currentCol;
  toSpan.style.transition = 'color 0.5s'
  toBtn.style.backgroundColor = currentCol;
  toBtn.style.borderStyle = 'solid';
  toBtn.style.borderColor = currentCol;
  toBtn.style.color = '#fff';
  toBtn.style.transition = 'background-color 0.5s, border-color 0.5s, color 0.5s';

  colr = currentCol;

  isChangeColBtnCalled = true;
}

if (isChangeColBtnCalled) {
  toBtn.addEventListener('mouseover', function() {
    toBtn.style.borderStyle = 'solid';
    toBtn.style.borderColor = colr;
    toBtn.style.backgroundColor = '#fff';
    toBtn.style.color = colr;
  });
  
  toBtn.addEventListener('mouseout', function() {
    toBtn.style.backgroundColor = colr;
    toBtn.style.color = '#fff';
  });
}else {
  toBtn.addEventListener('mouseover', function() {
    toBtn.style.borderStyle = 'solid';
    toBtn.style.borderColor = '#4E75FF';
    toBtn.style.color = '#4E75FF';
  });
  
  toBtn.addEventListener('mouseout', function() {
    toBtn.style.backgroundColor = '#4E75FF';
    toBtn.style.color = '#fff';
  });
}
