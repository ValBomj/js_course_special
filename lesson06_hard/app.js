'use strict';

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
      gameRull(ans);
    } else if (userNum > number) {
      if (attempts > 0) {
        const ans = confirm('Загаданное число меньше, осталось попыток ' + --attempts);
        gameRull(ans);
      } else {
        let again = confirm('Попытки закончились, хотите сыграть еще?');
        gameReset(again);
      }
    } else if (userNum < number) {
      if (attempts > 0) {
        const ans = confirm('Загаданное число больше, осталось попыток ' + --attempts);
        gameRull(ans);
      } else {
        let again = confirm('Попытки закончились, хотите сыграть еще?');
        gameReset(again);
      }
    }

    function gameRull(ans) {
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
  }
}

const answer = 10;
let attempts = 10;

answer >= 0 && answer <= 100 ? bot(answer, attempts)() : console.log('Загадайте число от 1 до 100!');





