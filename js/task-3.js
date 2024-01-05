const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

function handleInput() {
  const cleanedName = input.value.trim();
  output.textContent = cleanedName !== '' ? cleanedName : 'Анонімний';
}

input.addEventListener('input', handleInput);
