function handleSubmit(event) {
  event.preventDefault();

  const email = document
    .querySelector(".login-form input[name='email']")
    .value.trim();
  const password = document
    .querySelector(".login-form input[name='password']")
    .value.trim();

  if (email === '' || password === '') {
    alert('All form fields must be filled in');
    return;
  }

  const data = {
    email,
    password,
  };

  console.log(data);

  document.querySelector('.login-form').reset();
}

document.querySelector('.login-form').addEventListener('submit', handleSubmit);
