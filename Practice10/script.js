function truncate(str, maxlength) {
  if (str.length > maxlength) {
    return str.slice(0, maxlength - 1) + "…";
  } else {
    return str;
  }
}

function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function () {
    let userInput = prompt("Введите число:", "");

    // Проверка, что пользователь ввел число
    if (!isNaN(parseFloat(userInput)) && isFinite(userInput)) {
      this.value += parseFloat(userInput);
    } else {
      alert("Вы ввели не число. Попробуйте ещё раз.");
    }
  };
}

// Пример использования функции truncate
const text1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
const truncatedText1 = truncate(text1, 50);

const text2 = "Short text";
const truncatedText2 = truncate(text2, 10);

const text3 = "This is a very long piece of text that needs to be truncated.";
const truncatedText3 = truncate(text3, 20);

// Добавляем текст на карточки
document.getElementById("card1").textContent = truncatedText1;
document.getElementById("card2").textContent = truncatedText2;
document.getElementById("card3").textContent = truncatedText3;

// Добавляем переменную для суммы аккумулятора
const startingValueElement = document.getElementById("startingValue");
const accumulator = new Accumulator(parseInt(startingValueElement.textContent)); // начальное значение 10

// Вешаем обработчик клика на кнопку
document.getElementById("readValueBtn").addEventListener("click", function () {
  accumulator.read(); // вызываем метод read при клике на кнопку
  startingValueElement.textContent = accumulator.value; // обновляем отображение начального значения
  alert("Текущее значение аккумулятора: " + accumulator.value); // выводим текущее значение
});

function shuffleArray(array) {
  return array.slice().sort(() => Math.random() - 0.5);
}

let letters = [];

for (let i = 65; i <= 90; i++) {
  letters.push(String.fromCharCode(i));
}
for (let i = 97; i <= 122; i++) {
  letters.push(String.fromCharCode(i));
}

letters = shuffleArray(letters);
let capcha = letters.slice(0, 5).join("");

function checkBot() {
  let usersEnter = prompt(`Для регистрации на сайте введите капчу ${capcha}`);
  if (usersEnter != capcha) {
    let numb1, numb2;
    numb1 =  Math.floor(Math.random() * 100) + 1;
    numb2 =  Math.floor(Math.random() * 100) + 1;
    usersEnter = prompt(`Ошибка! Попробуйте решить пример ${numb1} + ${numb2}`);
    if (usersEnter == numb1 + numb2) {
      alert("Верно!");
    } else{
      alert("Неверно! Попробуйте снова");
      checkBot();
    }
  } else {
    alert("Вы верно ввели капчу!");
  }
}