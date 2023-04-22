function setupSideMenu() {
  let colorPicker = document.querySelector(".color-picker");
  colorPicker.onchange = pickColor;

  let wrapperColorPicker = document.querySelector(".wrapper-color-picker");
  wrapperColorPicker.style.backgroundColor = colorPicker.value;

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

  let buttonCloseNewCanvasMenu = document.querySelector(".fa-xmark");
  buttonCloseNewCanvasMenu.addEventListener("click", closeNewCanvasMenu);

  let newCanvasButton = document.querySelector(".new-canvas-button");
  newCanvasButton.addEventListener("click", createNewCanvasFromButton);
}

function setupWarningMenu() {
  buttonResetYes = document.querySelector(".button-reset-yes");
  buttonResetYes.addEventListener("click", resetCanvas);

  buttonResetNo = document.querySelector(".button-reset-no");
  buttonResetNo.addEventListener("click", closeResetCanvasConfirmation);
}
