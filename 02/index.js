const secHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".minute-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();

  const sec = now.getSeconds();
  const secDegree = (sec / 60) * 360 + 90;
  secHand.style.transform = `rotate(${secDegree}deg)`;

  const min = now.getMinutes();
  const minDegree = (min / 60) * 360 + (sec / 60) * 6 + 90;
  minHand.style.transform = `rotate(${minDegree}deg)`;

  const hour = now.getHours();
  const hourDegree = (hour / 12) * 360 + (min / 60) * 30 + 90;
  hourHand.style.transform = `rotate(${hourDegree}deg)`;
}

setInterval(setDate, 1000);
