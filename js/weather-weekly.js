const weatherWeeklyDay = document.querySelectorAll(".weather_weekly_day");

function getWeek() {
  const date = new Date();
  const week = new Array("월", "화", "수", "목", "금", "토", "일");
  weatherWeeklyDay[0].innerHTML = `${
    week[date.getDay() - 1] == undefined
      ? `${week[7]}`
      : week[date.getDay() - 1]
  }요일`;
  weatherWeeklyDay[1].innerHTML = `${week[date.getDay()]}요일`;
  weatherWeeklyDay[2].innerHTML = `${
    week[date.getDay() + 1] == undefined
      ? `${week[date.getDay() - 6]}`
      : week[date.getDay() + 1]
  }요일`;
  weatherWeeklyDay[3].innerHTML = `${
    week[date.getDay() + 2] == undefined
      ? `${week[date.getDay() - 5]}`
      : week[date.getDay() + 2]
  }요일`;
  weatherWeeklyDay[4].innerHTML = `${
    week[date.getDay() + 3] == undefined
      ? `${week[date.getDay() - 4]}`
      : week[date.getDay() + 3]
  }요일`;
}

function init() {
  getWeek();
}

init();

/*
      $(function () {
        const date = new Date();
        const week = new Array("월", "화", "수", "목", "금", "토", "일");
        $(".weather_weekly_day:first-child").html(week[date.getDay() - 1]);
        $(".weather_weekly_day:nth-child(2)").html(week[date.getDay()]);
        $(".weather_weekly_day:nth-child(3)").html(week[date.getDay() + 1]);
        $(".weather_weekly_day:nth-child(4)").html(week[date.getDay() + 2]);
        $(".weather_weekly_day:last-child").html(week[date.getDay() + 3]);
        if ($(".weather_weekly_day").html != week[date.getDay()]) {
          console.log(this);
        }
      });
      */
