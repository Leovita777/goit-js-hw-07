function handleInput() {
  const name = document.querySelector('#name-input').value;

  const cleanedName = name.trim();

  if (cleanedName !== '') {
    document.querySelector('#name-output').textContent = `${cleanedName}`;
  } else {
    document.querySelector('#name-output').textContent = 'Anonymous';
  }
}

document.querySelector('#name-input').addEventListener('input', handleInput);
