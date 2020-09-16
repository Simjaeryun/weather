const weatherWeekly = document.querySelectorAll(".weather_weekly_day");

function getWeek() {
  const date = new Date();
  const week = new Array("월", "화", "수", "목", "금", "토", "일");
  weatherWeekly[0].innerHTML = `${week[date.getDay() - 1]}요일`;
  weatherWeekly[1].innerHTML = `${week[date.getDay()]}요일`;
  weatherWeekly[2].innerHTML = `${week[date.getDay() + 1]}요일`;
  weatherWeekly[3].innerHTML = `${week[date.getDay() + 2]}요일`;
  weatherWeekly[4].innerHTML = `${week[date.getDay() + 3]}요일`;
}

function init() {
  getWeek();
}

init();
