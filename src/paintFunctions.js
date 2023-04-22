function clickUp() {
  mouseDownBool = false;
}

function clickDown() {
  mouseDownBool = true;
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

function pickColor() {
  let colorPicker = document.querySelector(".color-picker");
  let wrapperColorPicker = document.querySelector(".wrapper-color-picker");
  wrapperColorPicker.style.backgroundColor = colorPicker.value;
}

function createRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
