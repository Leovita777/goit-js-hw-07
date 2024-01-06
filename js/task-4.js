const loginForm = document.querySelector('.login-form');

function handleSubmit(event) {
  event.preventDefault();

  const elements = event.target.elements;
  const email = elements['email'].value.trim();
  const password = elements['password'].value.trim();

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
