const clock = document.querySelector(".clock");

function timeNow() {
  const date = new Date();

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  clock.innerHTML = `${hours}시 ${minutes}분`;
}

timeNow();
setInterval(timeNow, 1000);
