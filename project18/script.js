let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let am = document.getElementById("am_pm");

setInterval(() => {
  let currentTime = new Date();
  let pankaj = hrs > 12 ? "Am" : "Pm";

  hrs.innerHTML =
    (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
  min.innerHTML =
    (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
  sec.innerHTML =
    (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
  am.innerHTML = pankaj;
}, 1000);