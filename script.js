var countDownDate = new Date("Apr 21, 2022 04:50:00").getTime() - (300 * 60 * 1000);

var x = setInterval(function () {

  var d = 1000 * 60 * 60 * 24;
  var h = 1000 * 60 * 60;
  var s = 1000 * 60;

  var now = new Date()
  console.log(now.getTimezoneOffset())
  now = now.getTime() + (now.getTimezoneOffset() * 60 * 1000);
  var distance = countDownDate - now;
  var days = Math.floor(distance / d);
  var hours = Math.floor((distance % d) / h);
  var minutes = Math.floor((distance % h) / s);
  var seconds = Math.floor((distance % s) / 1000);

  document.getElementById("demo").innerHTML = days + " дней " + hours
      + " часов "
      + minutes + " минут " + seconds + " секунд ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "Вы на месте!";
  }
}, 1000);
