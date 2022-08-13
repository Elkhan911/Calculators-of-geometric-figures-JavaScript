//************************************************************************************************************** */
//******************************************** */ VARIABLES
//************************************************************************************************************** */

let input1 = document.querySelector("#input1");
let taskAnswer11 = document.querySelector("#taskAnswer1");
let taskAnswer12 = document.querySelector("#taskAnswer2");

let inputLength = document.querySelector("#inputLength");
let inputWidth = document.querySelector("#inputWidth");
let taskAnswer21 = document.querySelector("#taskAnswer21");
let taskAnswer22 = document.querySelector("#taskAnswer22");
let buttton1 = document.querySelector("#button1");

let input3 = document.querySelector("#input3");
let taskAnswer31 = document.querySelector("#taskAnswer31");
let taskAnswer32 = document.querySelector("#taskAnswer32");

let input4A = document.querySelector("#input4A");
let input4B = document.querySelector("#input4B");
let input4C = document.querySelector("#input4C");
let taskAnswer4 = document.querySelector("#taskAnswer4");
let buttton2 = document.querySelector("#button2");

//************************************************************************************************************** */
//******************************************** */ FUNCTIONS
//************************************************************************************************************** */

input1.addEventListener("blur", function () {
  if (isNaN(input1.value)) {
    alert("Нужно ввести число");
    input1.value = "";
  }
  if (typeof Number(input1.value) == "number") {
    taskAnswer11.textContent =
      "Периметр квадрата:" + "  " + Number(input1.value) * 4;

    taskAnswer12.textContent =
      "Площадь квадрата:" + "  " + Number(input1.value) ** 2;
  }
});
