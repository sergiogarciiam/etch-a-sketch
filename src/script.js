// VARIABLES
let size = 30;
let mouseDown = false;

// MENU CONTROL ERROR
let menu = document.querySelector(".menu");
menu.addEventListener("mouseup", clickUp);

// CANVAS
for (let i = 0; i < screen.height / size; i++) {
  for (let j = 0; j < screen.width / size; j++) {
    let page = document.querySelector(".canvas");
    let pixel = document.createElement("div");
    pixel.style.width = size + "px";
    pixel.style.height = size + "px";
    pixel.classList.add("pixel");

    pixel.addEventListener("mousedown", clickDown);
    pixel.addEventListener("mouseover", addColorMouseDown);
    pixel.addEventListener("mouseup", clickUp);
    pixel.addEventListener("click", addColor);

    page.appendChild(pixel);
  }
}

// FUNCTIONS
function clickDown() {
  mouseDown = true;
}

function addColorMouseDown(e) {
  if (mouseDown) {
    let color_picker = document.querySelector(".color-picker");
    e.target.style.backgroundColor = color_picker.value;
  }
}

function addColor(e) {
  let color_picker = document.querySelector(".color-picker");
  e.target.style.backgroundColor = color_picker.value;
}

function clickUp() {
  mouseDown = false;
}
