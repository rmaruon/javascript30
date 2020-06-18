const timeNodes = [...document.querySelectorAll("[data-time]")];

const seconds = timeNodes
  .map((node) => node.dataset.time)
  .map((timeCode) => {
    const [mins, secs] = timeCode.split(":").map(parseFloat);
    return mins * 60 + secs;
  })
  .reduce((total, seconds) => total + seconds);

console.log(...secsToHMS(seconds));

function secsToHMS(seconds) {
  let secondsLeft = seconds;

  const hours = Math.floor(secondsLeft / 3600);
  secondsLeft %= 3600;

  const mins = Math.floor(secondsLeft / 60);
  secondsLeft %= 60;

  return [hours, mins, secondsLeft];
}
