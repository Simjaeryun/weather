const weatherDate = document.querySelector(".weather>.weather_date");

function getTime() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  weatherDate.innerHTML = ` ${year}년 ${
    month + 1
  }월 ${day}일 ${hours}시 ${minutes}분`;
}

function init() {
  setInterval(getTime);
}

init();
