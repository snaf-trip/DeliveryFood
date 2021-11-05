const buttonAuth = document.querySelector('.button-auth');
const buttonOut = document.querySelector('.button-out');
const userName = document.querySelector('.user-name');
const modalAuth = document.querySelector('.modal-auth');
const closeAuth = document.querySelector('.close-auth');
const logInForm = document.getElementById('logInForm');
const inputLogin = document.getElementById('login');
const inputPassword = document.getElementById('password');

const login = (user) => {
  buttonAuth.classList.add('hide');
  buttonOut.classList.remove('hide');
  userName.classList.remove('hide');

  userName.textContent = user.login;
}

const logout = () => {
  buttonAuth.classList.remove('hide');
  buttonOut.classList.add('hide');
  userName.classList.add('hide');

  userName.textContent = '';

  localStorage.removeItem('user')
}

buttonAuth.addEventListener('click', () => {
  modalAuth.classList.remove('hide');
})

buttonOut.addEventListener('click', () => {
  logout();
})


closeAuth.addEventListener('click', () => {
  modalAuth.classList.add('hide');
  inputLogin.value = '';
  inputPassword.value = '';
})

logInForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const user = {
    login: inputLogin.value,
    password: inputPassword.value,
  };

  localStorage.setItem('user', JSON.stringify(user))
  login(user);

  modalAuth.classList.add('hide');
  inputLogin.value = '';
  inputPassword.value = '';
})

if (localStorage.getItem('user')) {
  login(JSON.parse(localStorage.getItem('user')))
}