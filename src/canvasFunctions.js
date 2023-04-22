function createNewCanvasFromButton() {
  const newCanvasMenu = document.querySelector(".new-canvas-menu");
  const sizeInput = document.querySelector(".new-size-input");

  deletePixels();
  createNewCanvas(parseInt(sizeInput.value));

  newCanvasMenu.style.display = "none";

  activateEvents();
}

function createNewCanvas(size) {
  for (let i = 0; i < screen.height / size; i++) {
    for (let j = 0; j < screen.width / size; j++) {
      const canvas = document.querySelector(".canvas");
      const pixel = createPixel(size);

      canvas.appendChild(pixel);
    }
  }
}

function createPixel(size) {
  const pixel = document.createElement("div");

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
  const pixels = document.querySelectorAll(".pixel");
  pixels.forEach((pixel) => {
    pixel.remove();
  });
}
