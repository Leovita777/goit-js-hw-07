function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const color = document.querySelector('.color');

function changeColor() {
  const randomColor = getRandomHexColor();

  document.body.style.backgroundColor = randomColor;

  color.textContent = randomColor;
}

document.querySelector('.change-color').addEventListener('click', changeColor);
