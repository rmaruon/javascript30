const panels = document.querySelectorAll(".panel");
for (panel of panels) {
  panel.addEventListener("click", toggleOpen);
  panel.addEventListener("transitionend", toggleActivate);
}

function toggleOpen() {
  this.classList.toggle("open");
}

function toggleActivate(event) {
  if (event.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}
