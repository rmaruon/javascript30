const slider = document.querySelector(".items");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("active");
});
slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.classList.remove("active");
});
slider.addEventListener("mousemove", (e) => {
  if (!isDown) {
    return;
  }
  e.preventDefault;

  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3;
  slider.scrollLeft = scrollLeft - walk;

  console.group("mousemove");
  console.log(
    `mousedown: startX     = e.pageX - slider.offsetLeft => ${startX}`
  );
  console.log(
    `           scrollLeft = slider.scrollLeft           => ${scrollLeft}`
  );
  console.log(`mousemove: x          = e.pageX - slider.offsetLeft => ${x}`);
  console.log(`           walk       = (x - startX) * 3            => ${walk}`);
  console.log(
    `           slider.scrollLeft = scrollLeft - walk    => ${
      scrollLeft - walk
    }`
  );
  console.groupEnd("mousemove");
});
