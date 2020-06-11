'use strict';

const isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

function bot(number) {
  
  return function game() {

    alert('Загадывание случайного числа от 1 до 100');

    // Прошу пользователя угадать число от 1 до 100
    const userNum = prompt('Угадай число от 1 до 100');
    
    if (!isNumber(userNum) || userNum.trim() === '') {
      const ans = confirm('Введи число!');
      gameRull(ans);
    } else if (userNum > number) {
      const ans = confirm('Загаданное число меньше');
      gameRull(ans);
    } else if (userNum < number) {
      const ans = confirm('Загаданное число больше');
      gameRull(ans);
    }

    function gameRull(ans) {
      if (ans) {
        game();
      }
    }
  }
}

const answer = 10;

answer >= 0 && answer <= 100 ? bot(answer)() : console.log('Загадайте число от 1 до 100!');





