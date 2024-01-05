const loginForm = document.querySelector('.login-form');
const emailInput = document.querySelector(".login-form input[name='email']");
const passwordInput = document.querySelector(
  ".login-form input[name='password']",
);

function handleSubmit(event) {
  event.preventDefault();

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (email === '' || password === '') {
    alert('All form fields must be filled in');
    return;
  }

  const data = {
    email,
    password,
  };

  console.log(data);

  loginForm.reset();
}

loginForm.addEventListener('submit', handleSubmit);
