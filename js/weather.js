const API_KEY = "f06fbb02f03bf1d44fcfbc075ca0a12e";

function onGeoOK(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&lang=kr&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((Response) => Response.json())
    .then((data) => {
      const weather = document.querySelector(".weather span:first-child");
      const city = document.querySelector(".weather span:last-child");
      weather.innerText = `${data.weather[0].description} , ${data.main.temp}°`;
      city.innerText = data.name;
    });
}

function onGeoError() {
  alert("날씨 정보를 불러오지 못했습니다.");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
