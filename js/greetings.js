const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector(".greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreeting(username);
}

function paintGreeting(username) {
  greeting.classList.remove(HIDDEN_CLASSNAME);

  const date = new Date();
  const hour = date.getHours();

  let greetingSay = "";

  if ((0 <= hour && hour <= 5) || 20 < hour) {
    greetingSay = "편안한 밤 보내세요";
  } else if (hour < 12) {
    greetingSay = "오늘도 좋은 아침 입니다";
  } else {
    greetingSay = "기분 좋은 하루가 되시길 바랍니다";
  }

  greeting.innerText = `${greetingSay}, ${username} 님`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreeting(savedUsername);
}
