const inputs = document.querySelectorAll(".controls > input");

for (input of inputs) {
  input.addEventListener("input", updateCSS);
}

function updateCSS() {
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.id}`,
    this.value + suffix
  );
}
