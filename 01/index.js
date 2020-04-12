document.addEventListener("keypress", playDrum, false);
const keys = Array.from(document.querySelectorAll(".key"));
for (key of keys) {
  key.addEventListener("transitionend", removePlayingClass, false);
}

function playDrum(event) {
  const pressedKey = event.key;
  const keyElem = document.querySelector(`div[data-key="${pressedKey}"]`);
  const audioElem = document.querySelector(`audio[data-key=${pressedKey}]`);

  if (!audioElem) return;

  keyElem.classList.add("playing");

  audioElem.currentTime = 0;
  audioElem.play();
}

function removePlayingClass(event) {
  this.classList.remove("playing");
}
