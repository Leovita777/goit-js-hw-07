function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxes = document.querySelector('#boxes');

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');

    box.style.width = 30 + i * 10 + 'px';
    box.style.height = 30 + i * 10 + 'px';

    box.style.backgroundColor = getRandomHexColor();

    boxes.appendChild(box);
  }
}

function handleCreate() {
  const amount = document.querySelector('#controls input').value;

  if (amount < 1 || amount > 100) {
    return;
  }

  createBoxes(amount);

  document.querySelector('#controls input').value = '';
}

function handleDestroy() {
  const boxes = document.querySelector('#boxes');

  boxes.textContent = '';
}

document
  .querySelector('#controls button[data-create]')
  .addEventListener('click', handleCreate);
document
  .querySelector('#controls button[data-destroy]')
  .addEventListener('click', handleDestroy);
