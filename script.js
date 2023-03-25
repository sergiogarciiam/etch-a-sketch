var size = 30;

for (let i = 0; i < screen.height / size; i++) {
  for (let j = 0; j < screen.width / size; j++) {
    let page = document.querySelector(".canvas");
    let div = document.createElement("div");
    div.style.width = size + "px";
    div.style.height = size + "px";
    div.classList.add("div");
    page.appendChild(div);
  }
}
function isOverflown(element) {
  return (
    element.scrollHeight > element.clientHeight ||
    element.scrollWidth > element.clientWidth
  );
}
