// -- VARIABLES -- //
let mouseDownBool = false;
let pencilModeBool = true;
let eraseModeBool = false;
let rainbowModeBool = false;

// -- MAIN -- //
let menu = document.querySelector(".menu");
menu.addEventListener("mouseup", clickUp); // menu control error
pencilMode();
newCanvas(30);

// -- SIDE MENU -- //
let color_picker = document.querySelector(".color-picker");
let color_picker_wrapper = document.querySelector(".wrapper-color-picker");
color_picker.onchange = pickColor;
color_picker_wrapper.style.backgroundColor = color_picker.value;

let pencil = document.querySelector(".fa-pencil");
pencil.addEventListener("click", pencilMode);

let eraser = document.querySelector(".fa-eraser");
eraser.addEventListener("click", eraseMode);

let rainbow = document.querySelector(".fa-rainbow");
rainbow.addEventListener("click", rainbowMode);

let reset = document.querySelector(".fa-arrow-rotate-left");
reset.addEventListener("click", resetCanvas);

let plus = document.querySelector(".fa-plus");
plus.addEventListener("click", displayNewCanvasMenu);

// -- NEW CANVAS MENU -- //
let value = document.querySelector(".value-size");
let input = document.querySelector(".new-size-input");
value.textContent = input.value;
input.addEventListener("input", (event) => {
  value.textContent = event.target.value;
});

let xmark = document.querySelector(".fa-xmark");
xmark.addEventListener("click", closeNewCanvasMenu);

let newCanvasButton = document.querySelector(".new-canvas-button");
newCanvasButton.addEventListener("click", () => {
  let sizeMenu = document.querySelector(".new-canvas-menu");
  let input = document.querySelector(".new-size-input");
  deletePixels();
  newCanvas(parseInt(input.value));
  sizeMenu.style.display = "none";

  let canvas = document.querySelector(".canvas");
  canvas.style.pointerEvents = "all";
});

// -- CANVAS FUNCTIONS -- //
function deletePixels() {
  let pixels = document.querySelectorAll(".pixel");
  pixels.forEach((pixel) => {
    pixel.remove();
  });
}

function newCanvas(size) {
  for (let i = 0; i < screen.height / size; i++) {
    for (let j = 0; j < screen.width / size; j++) {
      let canvas = document.querySelector(".canvas");
      let pixel = createPixel(size);
      canvas.appendChild(pixel);
    }
  }
}

function createPixel(size) {
  let pixel = document.createElement("div");
  pixel.style.width = size + "px";
  pixel.style.height = size + "px";
  pixel.classList.add("pixel");

  pixel.addEventListener("mousedown", clickDown);
  pixel.addEventListener("mouseover", addColorMouseDown);
  pixel.addEventListener("mouseup", clickUp);
  pixel.addEventListener("click", addColor);

  return pixel;
}

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
  let pencil = document.querySelector(".fa-pencil");
  let rainbow = document.querySelector(".fa-rainbow");
  let eraser = document.querySelector(".fa-eraser");

  pencil.style.color = "#0E8C63";
  pencilModeBool = true;

  rainbow.style.color = "#333";
  rainbowModeBool = false;

  eraser.style.color = "#333";
  eraseModeBool = false;
}

function eraseMode() {
  let pencil = document.querySelector(".fa-pencil");
  let rainbow = document.querySelector(".fa-rainbow");
  let eraser = document.querySelector(".fa-eraser");

  pencil.style.color = "#333";
  pencilModeBool = false;

  rainbow.style.color = "#333";
  rainbowModeBool = false;

  eraser.style.color = "#0E8C63";
  eraseModeBool = true;
}

function rainbowMode() {
  let pencil = document.querySelector(".fa-pencil");
  let rainbow = document.querySelector(".fa-rainbow");
  let eraser = document.querySelector(".fa-eraser");

  pencil.style.color = "#333";
  pencilModeBool = false;

  rainbow.style.color = "#0E8C63";
  rainbowModeBool = true;

  eraser.style.color = "#333";
  eraseModeBool = false;
}

function resetCanvas() {
  let pixels = document.querySelectorAll(".pixel");
  pixels.forEach((pixel) => {
    pixel.style.removeProperty("background-color");
  });
}

function newCanvasMenu() {
  if (sizeMenu.style.display == "none") {
    displayNewCanvasMenu();
  } else {
    closeNewCanvasMenu();
  }
}

function displayNewCanvasMenu() {
  let sizeMenu = document.querySelector(".new-canvas-menu");
  sizeMenu.style.display = "flex";
  let canvas = document.querySelector(".canvas");
  canvas.style.pointerEvents = "none";
}

function closeNewCanvasMenu() {
  let sizeMenu = document.querySelector(".new-canvas-menu");
  sizeMenu.style.display = "none";
  let canvas = document.querySelector(".canvas");
  canvas.style.pointerEvents = "all";
}
