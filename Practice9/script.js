document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let registrationChoice = prompt(
    "Желаете пройти регистрацию на сайте? (Да/Нет)"
  );

  if (registrationChoice && registrationChoice.toLowerCase() === "да") {
    alert("Круто!");
  } else {
    alert("Попробуй ещё раз");
  }
});

let login = prompt("Введите логин:");
if (login === "Админ") {
  let password = prompt("Введите пароль:");
  if (password === "Я главный") {
    alert("Здравствуйте!");
  } else if (password === null || password === "") {
    alert("Отменено");
  } else {
    alert("Неверный пароль");
  }
} else if (login === null || login === "") {
  alert("Отменено");
} else {
  alert("Я вас не знаю");
}

let likeButton = document.getElementById('likeButton');
let isLiked = false;
let isDrawing = false;

likeButton.addEventListener('click', function () {
    isLiked = !isLiked;

    if (isLiked) {
        likeButton.classList.add('liked');
        likeButton.textContent = 'Не нравится';
        isDrawing = true;
    } else {
        likeButton.classList.remove('liked');
        likeButton.textContent = 'Нравится';
        isDrawing = false;
    }
});

document.addEventListener('mousemove', function (event) {
    if (isDrawing) {
        createDrawing(event.clientX, event.clientY);
    }
});

function createDrawing(x, y) {
    let drawingElement = document.createElement('div');
    drawingElement.className = 'drawing';
    drawingElement.style.left = x + 'px';
    drawingElement.style.top = y + 'px';
    document.body.appendChild(drawingElement);
}