const handleBoxes = document.querySelector('#boxes');
const handleInput = document.querySelector('#controls input');
const buttonDataCreate = document.querySelector(
  '#controls button[data-create]',
);
const buttonDataDestroy = document.querySelector(
  '#controls button[data-destroy]',
);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxes = handleBoxes;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');

    box.style.width = 30 + i * 10 + 'px';
    box.style.height = 30 + i * 10 + 'px';

    box.style.backgroundColor = getRandomHexColor();

    boxes.appendChild(box);
  }
}

function handleCreate() {
  const amount = handleInput.value;

  if (amount < 1 || amount > 100) {
    return;
  }

  handleDestroy();

  createBoxes(amount);

  handleInput.value = '';
}

function handleDestroy() {
  const boxes = handleBoxes;

  boxes.textContent = '';
}

buttonDataCreate.addEventListener('click', handleCreate);

buttonDataDestroy.addEventListener('click', handleDestroy);
