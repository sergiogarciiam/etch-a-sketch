// -- VARIABLES -- //
let mouseDownBool = false;
let pencilModeBool = true;
let eraseModeBool = false;
let rainbowModeBool = false;

// -- MAIN -- //
createNewCanvas(30);
activatePencilMode();
setupSideMenu();
setupNewCanvasMenu();
setupWarningMenu();

// -- MAIN FUNCTIONS -- //
function activatePencilMode() {
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

function createNewCanvas(size) {
  for (let i = 0; i < screen.height / size; i++) {
    for (let j = 0; j < screen.width / size; j++) {
      let canvas = document.querySelector(".canvas");
      let pixel = createPixel(size);
      canvas.appendChild(pixel);
    }
  }
}

function setupSideMenu() {
  let color_picker = document.querySelector(".color-picker");
  let color_picker_wrapper = document.querySelector(".wrapper-color-picker");
  color_picker.onchange = pickColor;
  color_picker_wrapper.style.backgroundColor = color_picker.value;

  let menu = document.querySelector(".menu");
  menu.addEventListener("mouseup", clickUp); // menu control error

  let pencil = document.querySelector(".fa-pencil");
  pencil.addEventListener("click", activatePencilMode);

  let eraser = document.querySelector(".fa-eraser");
  eraser.addEventListener("click", activateEraseMode);

  let rainbow = document.querySelector(".fa-rainbow");
  rainbow.addEventListener("click", activateRainbowMode);

  let reset = document.querySelector(".fa-arrow-rotate-left");
  reset.addEventListener("click", resetCanvasConfirmation);

  let plus = document.querySelector(".fa-plus");
  plus.addEventListener("click", displayNewCanvasMenu);
}

function setupNewCanvasMenu() {
  let sizeValue = document.querySelector(".value-size");
  let sizeInput = document.querySelector(".new-size-input");

  sizeValue.textContent = sizeInput.value;
  sizeInput.addEventListener("input", (event) => {
    sizeValue.textContent = event.target.value;
  });

  let xmark = document.querySelector(".fa-xmark");
  xmark.addEventListener("click", closeNewCanvasMenu);

  let newCanvasButton = document.querySelector(".new-canvas-button");
  newCanvasButton.addEventListener("click", createNewCanvasFromButton);
}

function setupWarningMenu() {
  buttonResetYes = document.querySelector(".button-reset-yes");
  buttonResetYes.addEventListener("click", resetCanvas);

  buttonResetNo = document.querySelector(".button-reset-no");
  buttonResetNo.addEventListener("click", closeResetCanvasConfirmation);
}

// -- OTHER FUNCTIONS -- //
function createNewCanvasFromButton() {
  let newCanvasMenu = document.querySelector(".new-canvas-menu");
  let sizeInput = document.querySelector(".new-size-input");

  deletePixels();
  createNewCanvas(parseInt(sizeInput.value));

  newCanvasMenu.style.display = "none";

  let canvas = document.querySelector(".canvas");
  canvas.style.pointerEvents = "all";
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

function deletePixels() {
  let pixels = document.querySelectorAll(".pixel");
  pixels.forEach((pixel) => {
    pixel.remove();
  });
}

function clickDown() {
  mouseDownBool = true;
}

function addColorMouseDown(e) {
  if (mouseDownBool) {
    if (eraseModeBool) {
      e.target.style.removeProperty("background-color");
    } else if (rainbowModeBool) {
      e.target.style.backgroundColor = createRandomColor();
    } else {
      // pencilModeBool
      let color_picker = document.querySelector(".color-picker");
      e.target.style.backgroundColor = color_picker.value;
    }
  }
}

function addColor(e) {
  if (eraseModeBool) {
    e.target.style.removeProperty("background-color");
  } else if (rainbowModeBool) {
    e.target.style.backgroundColor = createRandomColor();
  } else {
    // pencilModeBool
    let color_picker = document.querySelector(".color-picker");
    e.target.style.backgroundColor = color_picker.value;
  }
}

function clickUp() {
  mouseDownBool = false;
}

function createRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function pickColor() {
  let color_picker_wrapper = document.querySelector(".wrapper-color-picker");
  color_picker_wrapper.style.backgroundColor = color_picker.value;
}

function activateEraseMode() {
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

function activateRainbowMode() {
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

function resetCanvasConfirmation() {
  let warningMenu = document.querySelector(".warning-menu");
  warningMenu.style.display = "flex";
}

function closeResetCanvasConfirmation() {
  let warningMenu = document.querySelector(".warning-menu");
  warningMenu.style.display = "none";
}

function resetCanvas() {
  let pixels = document.querySelectorAll(".pixel");
  pixels.forEach((pixel) => {
    pixel.style.removeProperty("background-color");
  });

  closeResetCanvasConfirmation();
}

function displayNewCanvasMenu() {
  let sizeMenu = document.querySelector(".new-canvas-menu");
  sizeMenu.style.display = "flex";

  let canvas = document.querySelector(".canvas");
  canvas.style.pointerEvents = "none";

  closeResetCanvasConfirmation();
}

function closeNewCanvasMenu() {
  let sizeMenu = document.querySelector(".new-canvas-menu");
  sizeMenu.style.display = "none";

  let canvas = document.querySelector(".canvas");
  canvas.style.pointerEvents = "all";
}
