function setupSideMenu() {
  const colorPicker = document.querySelector(".color-picker");
  const wrapperColorPicker = document.querySelector(".wrapper-color-picker");
  const menu = document.querySelector(".menu");
  const pencil = document.querySelector(".fa-pencil");
  const eraser = document.querySelector(".fa-eraser");
  const rainbow = document.querySelector(".fa-rainbow");
  const reset = document.querySelector(".fa-arrow-rotate-left");
  const plus = document.querySelector(".fa-plus");

  colorPicker.onchange = pickColor;
  wrapperColorPicker.style.backgroundColor = colorPicker.value;
  menu.addEventListener("mouseup", clickUp); // menu control error
  pencil.addEventListener("click", activatePencilMode);
  eraser.addEventListener("click", activateEraseMode);
  rainbow.addEventListener("click", activateRainbowMode);
  reset.addEventListener("click", resetCanvasConfirmation);
  plus.addEventListener("click", displayNewCanvasMenu);
}

function setupNewCanvasMenu() {
  const sizeValue = document.querySelector(".value-size");
  const sizeInput = document.querySelector(".new-size-input");
  const buttonCloseNewCanvasMenu = document.querySelector(".fa-xmark");
  const newCanvasButton = document.querySelector(".new-canvas-button");

  sizeValue.textContent = sizeInput.value;
  sizeInput.addEventListener("input", (event) => {
    sizeValue.textContent = event.target.value;
  });

  buttonCloseNewCanvasMenu.addEventListener("click", closeNewCanvasMenu);
  newCanvasButton.addEventListener("click", createNewCanvasFromButton);
}

function setupWarningMenu() {
  const buttonResetYes = document.querySelector(".button-reset-yes");
  const buttonResetNo = document.querySelector(".button-reset-no");

  buttonResetYes.addEventListener("click", resetCanvas);
  buttonResetNo.addEventListener("click", closeResetCanvasConfirmation);
}
