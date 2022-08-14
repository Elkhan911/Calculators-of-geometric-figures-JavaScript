//************************************************************************************************************** */
//******************************************** */ VARIABLES
//************************************************************************************************************** */

// let input1 = document.querySelector("#input1");
// let taskAnswer11 = document.querySelector("#taskAnswer1");
// let taskAnswer12 = document.querySelector("#taskAnswer2");

// let inputLength = document.querySelector("#inputLength");
// let inputWidth = document.querySelector("#inputWidth");
// let taskAnswer21 = document.querySelector("#taskAnswer21");
// let taskAnswer22 = document.querySelector("#taskAnswer22");
// let buttonSub1 = document.querySelector("#buttonSub1");

// let input3 = document.querySelector("#input3");
// let taskAnswer31 = document.querySelector("#taskAnswer31");
// let taskAnswer32 = document.querySelector("#taskAnswer32");

// let input4A = document.querySelector("#input4A");
// let input4B = document.querySelector("#input4B");
// let input4C = document.querySelector("#input4C");
// let taskAnswer4 = document.querySelector("#taskAnswer4");
// let buttonSub2 = document.querySelector("#buttonSub2");

let button1 = document.querySelector("#button1");
let button2 = document.querySelector("#button2");
let button3 = document.querySelector("#button3");
let button4 = document.querySelector("#button4");
let button5 = document.querySelector("#button5");
let button6 = document.querySelector("#button6");
let button7 = document.querySelector("#button7");
let button8 = document.querySelector("#button8");
let button9 = document.querySelector("#button9");
let button0 = document.querySelector("#button0");
let buttonPlus = document.querySelector("#buttonPlus");
let buttonMinus = document.querySelector("#buttonMinus");
let buttonMultiply = document.querySelector("#buttonMultiply");
let buttonDivide = document.querySelector("#buttonDivide");

let deleteSymbolBtn = document.querySelector("#deleteSymbol");
let clearSymbolsBtn = document.querySelector("#clearSymbols");

let calculValues1 = document.querySelector("#calculValues1");
let calculValues2 = document.querySelector("#calculValues2");

let buttons = document.querySelectorAll(".calcul__buttons");
let calcuResult = document.querySelector("#calcuResult");

//************************************************************************************************************** */
//******************************************** */ FUNCTIONS
//************************************************************************************************************** */

// // First Calculator

// input1.addEventListener("blur", function () {
//   if (isNaN(input1.value)) {
//     alert("Нужно ввести число");
//     input1.value = "";
//   }
//   if (typeof Number(input1.value) == "number") {
//     taskAnswer11.textContent =
//       "Периметр квадрата:" + "  " + Number(input1.value) * 4;

//     taskAnswer12.textContent =
//       "Площадь квадрата:" + "  " + Number(input1.value) ** 2;
//   }
// });

// // Second Calculator

// buttonSub1.addEventListener("click", areaAndPerimeterRectangle);

// function areaAndPerimeterRectangle() {
//   if (isNaN(inputLength.value) || isNaN(inputWidth.value)) {
//     alert("Нужно ввести число");
//     input1.value = "";
//   }
//   if (
//     typeof Number(inputLength.value) == "number" &&
//     typeof Number(inputWidth.value) == "number"
//   ) {
//     taskAnswer21.textContent =
//       "Периметр квадрата: " +
//       (Number(inputLength.value) + Number(inputWidth.value)) * 2;
//     taskAnswer22.textContent =
//       "Площадь квадрата: " + inputLength.value * inputWidth.value;
//   }
// }

// // Third Calculator
// input3.addEventListener("blur", function () {
//   taskAnswer31.textContent =
//     "Площадь круга:  " + ((Number(input3.value) ** 2 / 4) * Math.PI).toFixed(2);

//   taskAnswer32.textContent =
//     "Длина окружности: " + (Number(input3.value) * Math.PI).toFixed(2);
// });

// // Fourth Calculator
// buttonSub2.addEventListener("click", function () {
//   let perimetr =
//     Number(input4A.value) + Number(input4B.value) + Number(input4C.value);

//   let halfPerimetr = perimetr / 2;

//   taskAnswer4.textContent =
//     "Плоащь треугольника " +
//     Math.sqrt(
//       halfPerimetr *
//         (halfPerimetr - Number(input4A.value)) *
//         (halfPerimetr - Number(input4B.value)) *
//         (halfPerimetr - Number(input4C.value))
//     );
// });

// // Main Calculator
