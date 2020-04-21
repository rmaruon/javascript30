const checkboxes = document.querySelectorAll(".inbox input[type=checkbox]");
let lastCheckbox;

function handleCheck(event) {
  // hold shift to check multiple checkboxes
  // `this !== lastCheckbox`: do not loop if only one checkbox is selected
  // `lastCheckbox`: do not loop if checkbox for starting point is not selected
  if (event.shiftKey && this.checked && this !== lastCheckbox && lastCheckbox) {
    let inBetween = false;

    for (checkbox of checkboxes) {
      if (checkbox === this || checkbox === lastCheckbox) {
        inBetween = !inBetween;
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    }
  }

  lastCheckbox = this;
}

for (checkbox of checkboxes) {
  checkbox.addEventListener("click", handleCheck);
}
