// -- VARIABLES -- //
// Basic variables
let size = 30;
let mouseDownBool = false;
// Modes
let normalModeBool = true;
let eraseModeBool = false;
let rainbowModeBool = false;

// -- MENU CONTROL ERROR -- //
let menu = document.querySelector(".menu");
menu.addEventListener("mouseup", clickUp);

// -- CANVAS -- //
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

// -- MENU -- //
// Color picker
let color_picker = document.querySelector(".color-picker");
let color_picker_wrapper = document.querySelector(".wrapper-color-picker");
color_picker.onchange = pickColor;
color_picker_wrapper.style.backgroundColor = color_picker.value;

// Pencil
let pencil = document.querySelector(".fa-pencil");
pencil.addEventListener("click", pencilMode);

// Eraser
let eraser = document.querySelector(".fa-eraser");
eraser.addEventListener("click", eraseMode);

// Rainbow
let rainbow = document.querySelector(".fa-rainbow");
rainbow.addEventListener("click", rainbowMode);

// Reset
let reset = document.querySelector(".fa-arrow-rotate-left");
reset.addEventListener("click", resetCanvas);

// -- COLOR FUNCTIONS -- //
function clickDown() {
  mouseDownBool = true;
}

function addColorMouseDown(e) {
  if (mouseDownBool) {
    if (eraseModeBool) {
      e.target.style.removeProperty("background-color");
    } else if (rainbowModeBool) {
      e.target.style.backgroundColor = randomColor();
    } else {
      // pencilModeBool
      let color_picker = document.querySelector(".color-picker");
      e.target.style.backgroundColor = color_picker.value;
    }
  } else {
  }
}

function addColor(e) {
  if (eraseModeBool) {
    e.target.style.removeProperty("background-color");
  } else if (rainbowModeBool) {
    e.target.style.backgroundColor = randomColor();
  } else {
    // pencilModeBool
    let color_picker = document.querySelector(".color-picker");
    e.target.style.backgroundColor = color_picker.value;
  }
}

function clickUp() {
  mouseDownBool = false;
}

function randomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

// -- MENU FUNCTIONS -- //
function pickColor() {
  let color_picker_wrapper = document.querySelector(".wrapper-color-picker");
  color_picker_wrapper.style.backgroundColor = color_picker.value;
}

function pencilMode() {
  let eraser = document.querySelector(".fa-eraser");
  let rainbow = document.querySelector(".fa-rainbow");

  rainbow.style.color = "black";
  rainbowModeBool = false;

  if (eraseModeBool) {
    eraser.style.color = "black";
    eraseModeBool = false;
  } else {
    eraser.style.color = "#538DD7";
    eraseModeBool = true;
  }
}

function eraseMode() {
  let eraser = document.querySelector(".fa-eraser");
  let rainbow = document.querySelector(".fa-rainbow");

  rainbow.style.color = "black";
  rainbowModeBool = false;

  if (eraseModeBool) {
    eraser.style.color = "black";
    eraseModeBool = false;
  } else {
    eraser.style.color = "#538DD7";
    eraseModeBool = true;
  }
}

function rainbowMode() {
  let eraser = document.querySelector(".fa-eraser");
  let rainbow = document.querySelector(".fa-rainbow");

  eraser.style.color = "black";
  eraseModeBool = false;

  if (rainbowModeBool) {
    rainbow.style.color = "black";
    rainbowModeBool = false;
  } else {
    rainbow.style.color = "#538DD7";
    rainbowModeBool = true;
  }
}

function resetCanvas() {
  let pixels = document.querySelectorAll(".pixel");
  pixels.forEach((pixel) => {
    pixel.style.removeProperty("background-color");
  });
}
