//************************************************************************************************************** */
//******************************************** */ VARIABLES
//************************************************************************************************************** */

let input1 = document.querySelector("#_input1");
let span11 = document.querySelector("#_span1");
let span12 = document.querySelector("#_span2");
let inputLength = document.querySelector("#_inputLength");
let inputWidth = document.querySelector("#_inputWidth");
let span21 = document.querySelector("#_span21");
let span22 = document.querySelector("#_span22");
let span23 = document.querySelector("#_span23");
let span24 = document.querySelector("#_span24");
let buttonSub1 = document.querySelector("#_buttonSub1");
let input3 = document.querySelector("#_input3");
let span31 = document.querySelector("#_span31");
let span32 = document.querySelector("#_span32");
let input4A = document.querySelector("#_input4A");
let input4B = document.querySelector("#_input4B");
let input4C = document.querySelector("#_input4C");
let span4A = document.querySelector("#_span4A");
let span4B = document.querySelector("#_span4B");
let span4C = document.querySelector("#_span4C");
let span4 = document.querySelector("#_span4");
let buttonSub2 = document.querySelector("#_buttonSub2");

//************************************************************************************************************** */
//******************************************** */ FUNCTIONS
//************************************************************************************************************** */

// функция для проверки isNaN
// function isItNaNorEmpty(value) {
//   if (isNaN(value) || value == "" || value == " " || value == "  ") {
//     alert("Нужно ввести число");
//     input1.value = "";
//     return false;
//   } else return true;
// }

// // First Calculator
// input1.addEventListener("keydown", function (event) {
//   if (event.key == "Enter") {
//     if (isItNaNorEmpty(input1.value)) {
//       span11.textContent = Number(input1.value) * 4;
//       span12.textContent = Number(input1.value) ** 2;
//     }
//     input1.value = "";
//   }
// });

// // Second Calculator
// inputLength.addEventListener("keydown", function (event) {
//   if (event.key == "Enter") {
//     if (isItNaNorEmpty(inputLength.value)) {
//       span21.textContent = inputLength.value;
//     }
//     inputLength.value = "";
//   }
// });

// inputWidth.addEventListener("keydown", function (event) {
//   if (event.key == "Enter") {
//     if (isItNaNorEmpty(inputWidth.value)) {
//       span22.textContent = inputWidth.value;
//     }
//     inputWidth.value = "";
//   }
// });

// buttonSub1.addEventListener("click", function () {
//   span23.textContent =
//     (Number(span21.textContent) + Number(span22.textContent)) * 2;
//   span24.textContent = span21.textContent * span22.textContent;
// });

// // Third Calculator
// input3.addEventListener("keydown", function (event) {
//   if (event.key == "Enter") {
//     if (isItNaNorEmpty(input3.value)) {
//       span31.textContent = ((Number(input3.value) ** 2 / 4) * Math.PI).toFixed(
//         2
//       );
//       span32.textContent = (Number(input3.value) * Math.PI).toFixed(2);
//     }
//   }
// });

// // Fourth Calculator
// input4A.addEventListener("keydown", function (event) {
//   if (event.key == "Enter") {
//     if (isItNaNorEmpty(input4A.value)) {
//       span4A.textContent = this.value;
//     }
//     this.value = "";
//   }
// });

// input4B.addEventListener("keydown", function (event) {
//   if (event.key == "Enter") {
//     if (isItNaNorEmpty(input4B.value)) {
//       span4B.textContent = this.value;
//     }
//     this.value = "";
//   }
// });

// input4C.addEventListener("keydown", function (event) {
//   if (event.key == "Enter") {
//     if (isItNaNorEmpty(input4C.value)) {
//       span4C.textContent = this.value;
//     }
//     this.value = "";
//   }
// });

// buttonSub2.addEventListener("click", function () {
//   let perimetr =
//     Number(span4A.textContent) +
//     Number(span4B.textContent) +
//     Number(span4C.textContent);

//   let halfPerimetr = perimetr / 2;

//   span4.textContent = Math.sqrt(
//     halfPerimetr *
//       (halfPerimetr - Number(span4A.textContent)) *
//       (halfPerimetr - Number(span4B.textContent)) *
//       (halfPerimetr - Number(span4C.textContent))
//   ).toFixed(2);

//   console.log(perimetr);
//   console.log(halfPerimetr);
//   console.log(Number(span4A.textContent));
//   console.log(Number(span4B.textContent));
//   console.log(Number(span4C.textContent));
//   console.log(span4.textContent);
// });

let plusBtn = document.querySelector("#_plusBtn");
let minusBtn = document.querySelector("#_minusBtn");
let multiplyBtn = document.querySelector("#_multiplyBtn");
let divideBtn = document.querySelector("#_divideBtn");
let deleteSymbolBtn = document.querySelector("#_deleteSymbol");
let clearSymbolsBtn = document.querySelector("#_clearSymbols");
let secondhint = document.querySelector("#_secondHint");
let thirdHint = document.querySelector("#_thirdHint");
let enterBtn = document.querySelector("#_enterBtn");
let inputCalc = document.querySelector("#_inputCalc");
let calcuResult = document.querySelector("#_calculResult");
let newOperationBtn = document.querySelector("#_newOperationBtn");
let variable1 = document.querySelector("#_variable1");
let variable2 = document.querySelector("#_variable2");
let buttons = document.querySelectorAll(".btns");

// Main Calculator
// экранная клавиатура для кнопок
for (let button of buttons) {
  button.addEventListener("click", function () {
    inputCalc.value += button.textContent;
  });
}

// счетчик для определения переменной - первая или вторая
let variableCounter = 1;

enterBtn.addEventListener("click", function () {
  if (variableCounter == 1) {
    variable1.textContent = inputCalc.value;
    secondhint.classList.remove("calculator__hint_off");
    inputCalc.value = "";
    variableCounter = 2;
  } else {
    variable2.textContent = inputCalc.value;
    thirdHint.classList.remove("calculator__hint_off");
    inputCalc.value = "";
    variableCounter = 1;
  }
});

plusBtn.addEventListener("click", function plus() {
  calcuResult.textContent =
    Number(variable1.textContent) + Number(variable2.textContent);
  plusBtn.removeEventListener("click", plus);
});

minusBtn.addEventListener("click", function minus() {
  calcuResult.textContent =
    Number(variable1.textContent) - Number(variable2.textContent);
  minusBtn.removeEventListener("click", minus);
});

multiplyBtn.addEventListener("click", function multiply() {
  calcuResult.textContent =
    Number(variable1.textContent) * Number(variable2.textContent);
  multiplyBtn.removeEventListener("click", multiply);
});

divideBtn.addEventListener("click", function divide() {
  calcuResult.textContent =
    Number(variable1.textContent) / Number(variable2.textContent);
  divideBtn.removeEventListener("click", divide);
});

// функция удаления последнего символа
deleteSymbolBtn.addEventListener("click", function () {
  let arr = inputCalc.value.split("");
  arr.pop();
  let newValue = arr.join("");
  inputCalc.value = newValue;
});

// функция очистки поля ввода
clearSymbolsBtn.addEventListener("click", function () {
  inputCalc.value = "";
});

// начать заново, сбросить все введенные данные
newOperationBtn.addEventListener("click", function () {
  variable1.textContent = "";
  variable2.textContent = "";
  calcuResult.textContent = "";
  inputCalc.value = "";
  secondhint.classList.add("calculator__hint_off");
  thirdHint.classList.add("calculator__hint_off");
});
