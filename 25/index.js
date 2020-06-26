const divs_one = document.querySelectorAll("div.one");
const divs_a = document.querySelectorAll("#a div");
const divs_b = document.querySelectorAll("#b div");
const divs_c = document.querySelectorAll("#c div");
const divs_d = document.querySelectorAll("#d div");
const divs_e = document.querySelectorAll("#e div");
const button = document.querySelector("button");

function logText(e) {
  console.log(this.classList.value);
}

function logTextWithStopPropagation(e) {
  console.log(this.classList.value);
  e.stopPropagation();
}

divs_one.forEach((div) =>
  div.addEventListener("mouseup", () => console.log("-----"))
);

// capture false
divs_a.forEach((div) => div.addEventListener("mousedown", logText));

// capture true
divs_b.forEach((div) =>
  div.addEventListener("mousedown", logText, { capture: true })
);

// stopPropagation x capture false
divs_c.forEach((div) =>
  div.addEventListener("mousedown", logTextWithStopPropagation)
);

// stopPropagation x capture true
divs_d.forEach((div) =>
  div.addEventListener("mousedown", logTextWithStopPropagation, {
    capture: true,
  })
);

// once: true
divs_e.forEach((div) =>
  div.addEventListener("mousedown", logText, { once: true })
);

button.addEventListener("click", () => console.log("click!"), { once: true });
