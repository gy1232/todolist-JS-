const API_KEY = 'dcb200ba04f664e1761daf224e36f7f4';
const weatherTranslation = {
  Clear: '맑음',
  Rain: '비',
  Snow: '눈',
  Clouds: '구름',
  Drizzle: '이슬비',
  Thunderstorm: '천둥번개',
};
const cityTranslation = {
  Seoul: '서울',
  Busan: '부산',
  Daegu: '대구',
  Incheon: '인천',
  Andong: '안동',
  Kunwi: '군위',
};

function translateCityToKorean(cityName) {
  return cityTranslation[cityName] || cityName;
}

function translateWeatherToKorean(weatherDescription) {
  return weatherTranslation[weatherDescription] || weatherDescription;
}

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector('#weather span:first-child');
      const city = document.querySelector('#weather span:last-child');
      city.innerText = translateCityToKorean(data.name);
      weather.innerText = `${translateWeatherToKorean(
        data.weather[0].main
      )} / ${data.main.temp}℃`; // ℃ 기호를 추가했습니다.
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
