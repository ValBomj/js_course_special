'use strict';

let attempt = 10;
let rand = Math.floor(Math.random() * 100) + 1;


const isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

function bot(number, attempts) {

  alert('Загадывание случайного числа от 1 до 100');

  
  return function game() {

    // Прошу пользователя угадать число от 1 до 100
    const userNum = prompt('Угадай число от 1 до 100');
    
    if (!isNumber(userNum) || userNum.trim() === '') {
      const ans = confirm('Введи число!');
      replay(ans);
    } else if (userNum > number) {
      if (attempts > 0) {
        const ans = confirm('Загаданное число меньше, осталось попыток ' + --attempts);
        replay(ans);
      } else {
        const again = confirm('Попытки закончились, хотите сыграть еще?');
        gameReset(again);
      }
    } else if (userNum < number) {
      if (attempts > 0) {
        const ans = confirm('Загаданное число больше, осталось попыток ' + --attempts);
        replay(ans);
      } else {
        const again = confirm('Попытки закончились, хотите сыграть еще?');
        gameReset(again);
      }
    } else {
      const win = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');
      gameAgain(win);
    }

    function replay(ans) {
      if (ans) {
        game();
      }
    }
    function gameReset(ans) {
      if (ans) {
        attempts = 10;
        game();
      }
    }
    function gameAgain(ans) {
      if (ans) {
        attempts = 10;
        number = Math.floor(Math.random() * 100) + 1;
        game();
      }
    }
  }
}

bot(rand, attempt)();





