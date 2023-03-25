let color_picker = document.querySelector(".color-picker");
let color_picker_wrapper = document.querySelector(".wrapper-color-picker");

color_picker.onchange = function () {
  color_picker_wrapper.style.backgroundColor = color_picker.value;
};
color_picker_wrapper.style.backgroundColor = color_picker.value;
