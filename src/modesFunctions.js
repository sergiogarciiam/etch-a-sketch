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

  deactivateEvents();
  closeResetCanvasConfirmation();
}

function closeNewCanvasMenu() {
  let sizeMenu = document.querySelector(".new-canvas-menu");
  sizeMenu.style.display = "none";

  activateEvents();
}
