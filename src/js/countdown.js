function getTime(countDownDate) {
  let now = new Date().getTime();
  let distance = countDownDate - now;
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  return {
    now,
    distance,
    days,
    hours,
    minutes,
    seconds
  };
}

function setTime($count, { days, hours, minutes }) {
  $count.find(".days").text(days);
  $count.find(".hours").text(hours);
  $count.find(".hours").text(minutes);
}

if ($("[data-countdown]").length) {
  $("[data-countdown]").each((index, _count) => {
    let $count = $(_count);
    let data = $count.data();
    let countDownDate = new Date(data.countdown).getTime();

    let init_times = getTime(countDownDate);
    setTime($count, init_times);
    let timer = setInterval(() => {
      let times = getTime(countDownDate);
      setTime($count, times);
      if (times.distance < 0) {
        clearInterval(timer);
        $count.find(".days , .hours  , .hours").text("00");
      }
    }, 60e3);
  });
}
