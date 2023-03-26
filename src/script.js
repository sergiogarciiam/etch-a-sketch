// VARIABLES
let size = 30;
let mouseDownBool = false;
let eraseModeBool = false;

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

// COLOR PICKER
let color_picker = document.querySelector(".color-picker");
let color_picker_wrapper = document.querySelector(".wrapper-color-picker");

color_picker.onchange = function () {
  color_picker_wrapper.style.backgroundColor = color_picker.value;
  eraseModeBool = false;
};
color_picker_wrapper.style.backgroundColor = color_picker.value;

// ERASER
let eraser = document.querySelector(".fa-eraser");
eraser.addEventListener("click", eraseMode);

// FUNCTIONS
function clickDown() {
  mouseDownBool = true;
}

function addColorMouseDown(e) {
  if (mouseDownBool) {
    if (eraseModeBool) {
      e.target.style.backgroundColor = "#fff";
    } else {
      let color_picker = document.querySelector(".color-picker");
      e.target.style.backgroundColor = color_picker.value;
    }
  } else {
  }
}

function addColor(e) {
  if (eraseModeBool) {
    e.target.style.backgroundColor = "#fff";
  } else {
    let color_picker = document.querySelector(".color-picker");
    e.target.style.backgroundColor = color_picker.value;
  }
}

function clickUp() {
  mouseDownBool = false;
}

function eraseMode() {
  let eraser = document.querySelector(".fa-eraser");

  if (eraseModeBool) {
    eraser.style.color = "black";
    eraseModeBool = false;
  } else {
    eraser.style.color = "blue";
    eraseModeBool = true;
  }
}
