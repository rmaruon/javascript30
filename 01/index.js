document.addEventListener("keypress", playDrum, false);

function playDrum(event) {
  const pressedKey = event.key;
  const keyElem = document.querySelector(`div[data-key="${pressedKey}"]`);
  const audioElem = document.querySelector(`audio[data-key=${pressedKey}]`);

  audioElem.currentTime = 0;
  audioElem.play();
}
