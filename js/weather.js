const API_KEY = "bfd963a4ab3bab3b8e923c431315e3ca";

fetch(
  `https://api.openweathermap.org/data/2.5/forecast?id=1835841&appid=${API_KEY}`,
  `http://api.openweathermap.org/data/2.5/forecast?id=${API_KEY}&lang=kr`
);

const weatherDate = document.querySelector(".weather>.weather_date");

function getTime() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  weatherDate.innerHTML = ` ${year}년 ${month + 1}월 ${day}일 ${
    hours < 10 ? `0${hours}` : hours
  }시 ${minutes < 10 ? `0${minutes}` : minutes}분 ${
    seconds < 10 ? `0${seconds}` : seconds
  }초`;
}

function init() {
  setInterval(getTime);
}

init();
