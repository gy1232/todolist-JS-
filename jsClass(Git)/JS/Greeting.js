const LoginForm = document.querySelector('#login_form');
const LoginInput = document.querySelector('#login_form input');
const link = document.querySelector('a');
const greeting = document.querySelector('#greeting');
const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';
// function onLoginBtnClick() {
//   const userName = LoginInput.value;
//   if (userName === '') {
//     alert('Please write your name');
//   } else if (userName.length > 15) {
//     alert('Your name is too long');
//   }
// }

function onLoginSubmit(event) {
  event.preventDefault();
  LoginForm.classList.add(HIDDEN_CLASSNAME);
  const username = LoginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

// function handleLinkClick(event) {
//   event.preventDefault();
//   console.dir(event);
// }

// LoginForm.addEventListener('submit', onLoginSubmit);
// link.addEventListener('click', handleLinkClick);

function paintGreetings(username) {
  greeting.innerText = `${username}님 환영합니다`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null) {
  LoginForm.classList.remove(HIDDEN_CLASSNAME);
  LoginForm.addEventListener('submit', onLoginSubmit);
} else {
  paintGreetings(savedUserName);
}
