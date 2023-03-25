let size = 30;
let mouseDown = false;

for (let i = 0; i < screen.height / size; i++) {
  for (let j = 0; j < screen.width / size; j++) {
    let page = document.querySelector(".canvas");
    let div = document.createElement("div");
    div.style.width = size + "px";
    div.style.height = size + "px";
    div.classList.add("div");

    div.addEventListener("mousedown", clickDown);
    div.addEventListener("mouseover", addColorMouseDown);
    div.addEventListener("mouseup", clickUp);
    div.addEventListener("click", addColor);

    page.appendChild(div);
  }
}

function clickDown() {
  mouseDown = true;
}

function addColorMouseDown(e) {
  if (mouseDown) {
    console.log(e);
    e.target.style.backgroundColor = "#eee";
  }
}

function addColor(e) {
  console.log(e);
  e.target.style.backgroundColor = "#eee";
}

function clickUp() {
  mouseDown = false;
}
