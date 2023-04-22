let mouseDownBool = false;
let pencilModeBool = true;
let eraseModeBool = false;
let rainbowModeBool = false;

deactivateEvents();
activatePencilMode();
setupSideMenu();
setupNewCanvasMenu();
setupWarningMenu();

function activateEvents() {
  let canvas = document.querySelector(".canvas");
  canvas.style.pointerEvents = "all";
}

function deactivateEvents() {
  let canvas = document.querySelector(".canvas");
  canvas.style.pointerEvents = "none";
}
