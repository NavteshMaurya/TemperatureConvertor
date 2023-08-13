let inputValue = document.querySelector(".num");
let button = document.querySelector(".btn");
let tempDeg = document.querySelector(".form__input--type");
let result = document.getElementById("result");
let enter = document.querySelector(".enter");
let button_reset = document.querySelector(".reset");
let celOutput, fahrOutput;
function celToFahr(value) {
  celOutput = (value * 9) / 5 + 32;
}

function fahrToCel(value) {
  fahrOutput = ((value - 32) * 5) / 9;
}

button.addEventListener("click", function () {
  {
    if (tempDeg.value === "celcius") {
      celToFahr(inputValue.value);
      enter.innerHTML = `Entered  value: ${inputValue.value}&deg celcius`;
      result.innerHTML = `${celOutput.toFixed(2)}&deg fahrenheit`;
      inputValue.value = " ";
    }
    if (tempDeg.value === "fahrenheight") {
      fahrToCel(inputValue.value);
      enter.innerHTML = `Entered  value: ${inputValue.value}&deg Fahrenheit`;
      result.innerHTML = `${fahrOutput.toFixed(2)}&deg celcius`;
      inputValue.value = "";
    }
  }
});

button_reset.addEventListener("click", function () {
  result.innerHTML = " ";
  enter.innerHTML = " ";
});
