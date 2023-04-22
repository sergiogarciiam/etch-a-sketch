const BLACK_COLOR = "#333";
const GREEN_COLOR = "#0E8C63";

const pencil = document.querySelector(".fa-pencil");
const rainbow = document.querySelector(".fa-rainbow");
const eraser = document.querySelector(".fa-eraser");

function activatePencilMode() {
  pencil.style.color = GREEN_COLOR;
  pencilModeBool = true;

  rainbow.style.color = BLACK_COLOR;
  rainbowModeBool = false;

  eraser.style.color = BLACK_COLOR;
  eraseModeBool = false;
}

function activateEraseMode() {
  pencil.style.color = BLACK_COLOR;
  pencilModeBool = false;

  rainbow.style.color = BLACK_COLOR;
  rainbowModeBool = false;

  eraser.style.color = GREEN_COLOR;
  eraseModeBool = true;
}

function activateRainbowMode() {
  pencil.style.color = BLACK_COLOR;
  pencilModeBool = false;

  rainbow.style.color = GREEN_COLOR;
  rainbowModeBool = true;

  eraser.style.color = BLACK_COLOR;
  eraseModeBool = false;
}

function resetCanvasConfirmation() {
  const warningMenu = document.querySelector(".warning-menu");
  warningMenu.style.display = "flex";
}

function closeResetCanvasConfirmation() {
  const warningMenu = document.querySelector(".warning-menu");
  warningMenu.style.display = "none";
}

function resetCanvas() {
  const pixels = document.querySelectorAll(".pixel");

  pixels.forEach((pixel) => {
    pixel.style.removeProperty("background-color");
  });

  closeResetCanvasConfirmation();
}

function displayNewCanvasMenu() {
  const sizeMenu = document.querySelector(".new-canvas-menu");
  sizeMenu.style.display = "flex";

  deactivateEvents();
  closeResetCanvasConfirmation();
}

function closeNewCanvasMenu() {
  const sizeMenu = document.querySelector(".new-canvas-menu");
  sizeMenu.style.display = "none";

  activateEvents();
}
