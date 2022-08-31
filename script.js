//************************************************************************************************************** */
//******************************************** */ VARIABLES
//************************************************************************************************************** */

let input1 = document.querySelector("#_input1");
let taskAnswer11 = document.querySelector("#_taskAnswer1");
let taskAnswer12 = document.querySelector("#_taskAnswer2");
let inputLength = document.querySelector("#_inputLength");
let inputWidth = document.querySelector("#_inputWidth");
let taskAnswer21 = document.querySelector("#_taskAnswer21");
let taskAnswer22 = document.querySelector("#_taskAnswer22");
let buttonSub1 = document.querySelector("#buttonSub1");
let input3 = document.querySelector("#input3");
let taskAnswer31 = document.querySelector("#taskAnswer31");
let taskAnswer32 = document.querySelector("#taskAnswer32");
let input4A = document.querySelector("#input4A");
let input4B = document.querySelector("#input4B");
let input4C = document.querySelector("#input4C");
let taskAnswer4 = document.querySelector("#taskAnswer4");
let buttonSub2 = document.querySelector("#buttonSub2");
let buttonPlus = document.querySelector("#buttonPlus");
let buttonMinus = document.querySelector("#buttonMinus");
let buttonMultiply = document.querySelector("#buttonMultiply");
let buttonDivide = document.querySelector("#buttonDivide");

let deleteSymbolBtn = document.querySelector("#deleteSymbol");
let clearSymbolsBtn = document.querySelector("#clearSymbols");
let enterBtn1 = document.querySelector("#enterBtn1");
let enterBtn2 = document.querySelector("#enterBtn2");

let calculValue = document.querySelector("#calculValue");

let calculVariable1 = document.querySelector("#calculVariable1");
let calculVariable2 = document.querySelector("#calculVariable2");
let calcuResult = document.querySelector("#calculResult");
let NewOperationBtn = document.querySelector("#NewOperationBtn");

let firstvariable = document.querySelector("#firstvariable");
let secondVariable = document.querySelector("#secondVariable");

let buttons = document.querySelectorAll(".calcul__btns");

//************************************************************************************************************** */
//******************************************** */ FUNCTIONS
//************************************************************************************************************** */

// First Calculator
input1.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    if (isNaN(input1.value)) {
      alert("Нужно ввести число");
      input1.value = "";
    }
    if (typeof Number(input1.value) == "number") {
      taskAnswer11.textContent = Number(input1.value) * 4;
      taskAnswer12.textContent = Number(input1.value) ** 2;
    }
    input1.value = "";
  }
});

// Second Calculator
buttonSub1.addEventListener("click", areaAndPerimeterRectangle);
function areaAndPerimeterRectangle() {
  if (isNaN(inputLength.value) || isNaN(inputWidth.value)) {
    alert("Нужно ввести число");
    input1.value = "";
  }
  if (
    typeof Number(inputLength.value) == "number" &&
    typeof Number(inputWidth.value) == "number"
  ) {
    taskAnswer21.textContent =
      "Периметр квадрата: " +
      (Number(inputLength.value) + Number(inputWidth.value)) * 2;
    taskAnswer22.textContent =
      "Площадь квадрата: " + inputLength.value * inputWidth.value;
  }
}

// Third Calculator
input3.addEventListener("blur", function () {
  taskAnswer31.textContent =
    "Площадь круга:  " + ((Number(input3.value) ** 2 / 4) * Math.PI).toFixed(2);
  taskAnswer32.textContent =
    "Длина окружности: " + (Number(input3.value) * Math.PI).toFixed(2);
});

// Fourth Calculator
buttonSub2.addEventListener("click", function () {
  let perimetr =
    Number(input4A.value) + Number(input4B.value) + Number(input4C.value);
  let halfPerimetr = perimetr / 2;
  taskAnswer4.textContent =
    "Плоащь треугольника " +
    Math.sqrt(
      halfPerimetr *
        (halfPerimetr - Number(input4A.value)) *
        (halfPerimetr - Number(input4B.value)) *
        (halfPerimetr - Number(input4C.value))
    );
});

// Main Calculator
// экранная клавиатура для кнопок
for (let button of buttons) {
  button.addEventListener("click", function () {
    calculValue.value += button.textContent;
  });
}

// функция очистки поля ввода
clearSymbols.addEventListener("click", function () {
  calculValue.value = "";
});

// функция удаления последнего символа
deleteSymbol.addEventListener("click", function () {
  let arr = calculValue.value.split("");
  arr.pop();
  let newValue = arr.join("");
  calculValue.value = newValue;
});

// ввод данных для первой перменной
enterBtn1.addEventListener("click", function () {
  firstvariable.textContent = "";
  firstvariable.textContent = calculValue.value;
  calculValue.value = "";
});

// ввод данных для второй переменной
enterBtn2.addEventListener("click", function () {
  secondVariable.textContent = "";
  secondVariable.textContent = calculValue.value;
  calculValue.value = "";
});

function Plus(a, b) {
  return Number(a) + Number(b);
}

function Minus(a, b) {
  return Number(a) - Number(b);
}

function Multiply(a, b) {
  return Number(a) * Number(b);
}

function Divide(a, b) {
  return Number(a) / Number(b);
}

// начать заново, сбросить все введенные данные
NewOperationBtn.addEventListener("click", function () {
  firstvariable.textContent = "";
  secondVariable.textContent = "";
  calcuResult.textContent = "Результат:";
  calculValue.value = "";
});

buttonPlus.addEventListener("click", function () {
  let a = firstvariable.textContent;
  let b = secondVariable.textContent;

  calcuResult.textContent += " " + Plus(a, b);
});

buttonMinus.addEventListener("click", function () {
  let a = firstvariable.textContent;
  let b = secondVariable.textContent;

  calcuResult.textContent += Minus(a, b);
});

buttonMultiply.addEventListener("click", function () {
  let a = firstvariable.textContent;
  letb = secondVariable.textContent;

  calcuResult.textContent += Multiply(a, b);
});

buttonDivide.addEventListener("click", function () {
  let a = firstvariable.textContent;
  let b = secondVariable.textContent;

  calcuResult.textContent += Divide(a, b);
});
