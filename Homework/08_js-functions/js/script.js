/* //ДОМАШКА

1. Изучить теорию
2. Решить задачи: */
/* 
// Задача №1
// Кто попадет в консоль первым Вася или Коля?
function showName() {
  console.log('Вася!');
}
setTimeout(showName, 0);
console.log('Коля!');
// Коля! (т.к. в параметрах присвоена нулевая задержка)
// Вася! (это значение просто выводится в консоль с задержкой по умолчанию)
*/

/* 
// Задача №2
// Верно ли вызвана функция?
showMessage();
function showMessage() {
  console.log('Сообщение');
}
// Верно т.к. это Function Declaration
// (запуск функции может быть как сверху, так и снизу)
 */

/* 
// Задача №3
// Верно ли вызвана функция
showMessage();
let showMessage = function () {
  console.log('Сообщение');
};
// Неверно, т.к. запуск функции покажет ошибку;
// необходимо запуск прописывать после инициализации
 */

/* 
// Задача №4
// Как решить проблему?
'use strict';
let showMessage;
if (2 > 1) {
  showMessage = function () {
    console.log('Сообщение');
  };
}
showMessage(); // Error (showMessage is not defined)
// 1. Необходимо убрать круглые скобки вокруг 'use strict' - это мешает нормальной работае строгого режима.
// 2. Необходимо объявить переменную функции let showMessage;
// 3. Присвоить самой функции название переменной.
// 4. Работает
*/

// Практика на LJS

// Функции

// Обязателен ли 'else'?
/* 
// С ним:
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Родители разрешили?');
  }
}
 */
/* 
// Без него:

function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Родители разрешили?');
}
*/

// Ответ:
/* Отличий нет, т.к. при нарушении условия первый return 
просто не применится, а второй сработает в любом случае, 
потому что может находиться в любом месте тела функции */

// Мой вариант, чтобы работало в консоли:

/* 
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}

let age = prompt('How old are you?', 21);

if (checkAge(age)) {
  alert('OK, ' + 'let`s go');
} else {
  alert('Sorry');
}
 */

// Перепишите функцию, используя оператор '?' или '||'
/*  
// Было:
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}
 */
// Стало:
/* // С оператором "?"
function checkAge(age) {
  return age > 18 ? true : confirm('Родители разрешили?');
} */

/* // Оператором "||"
function checkAge(age) {
  return age > 18 || confirm('Родители разрешели?');
} */

/* 
function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}
 */
/* 
function min(a, b) {
  return a < b ? a : b;
}
*/

/* 
Синтаксис
Оператор: x += y
Значение: x  = x + y;
*/
/* 
function pow(x, n) {
  let result = x;
  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt('x?', '');
let n = prompt('n?', '');

if (n < 1) {
  alert(`Cтепень ${n} не поддерживается, используйте натуральное число`);
} else {
  alert(pow([x, n]));
}
 */

// Функции-колбэки - передача функции, как значения
/* 
// Длинее:
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

function showOk() {
  alert( "Вы согласны." );
}

function showCancel() {
  alert( "Вы отменили выполнение." );
}

// использование: функции showOk, showCancel передаются в качестве аргументов ask
ask("Вы согласны?", showOk, showCancel);
 */
/* 
// Короче (колбэки внутри ролительской функции):
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Вы согласны?",
  function() { alert("Вы согласились."); },
  function() { alert("Вы отменили выполнение."); }
);
 */

/* У функции есть вход и выход, на входе функция получает аргументы, 
на выходе выдаёт результат. Вот return как раз означает 
выход из функции и выдача результата. */

/* 
// Замыкание:
function createCalcFunction(n) {
  return function () {
    console.log(1000 * n);
  };
}

const calc = createCalcFunction(42);
calc();
 */

// function createIncrementor(n) {
//   return function (num) {
//     return n + num;
//   };
// }

// const addOne = createIncrementor(1);
// const addTen = createIncrementor(10);

// console.log(addOne(10));
// console.log(addOne(41));

// console.log(addTen(10));
// console.log(addTen(41));
/* 
// Прописываем URL при помощи замыкания:

function urlGenerator(domain) {
  return function (url) {
    return `https://${url}.${domain}`;
  };
}

const comUrl = urlGenerator('com');
const ruUrl = urlGenerator('ru');

console.log(comUrl('google'));
console.log(comUrl('netflix'));

console.log(ruUrl('yandex'));
console.log(ruUrl('vkontakte'));

console.log(comUrl('vkontakte'));
*/

// Написать свою функцию bind:
// Пример работы:
/* 
function logPerson() {
  console.log(`Person: ${this.name}, ${this.age}, ${this.job}`);
}

const person1 = { name: 'Михаил', age: 22, job: 'Frontend' };
const person2 = { name: 'Елена', age: 19, job: 'SMM' };

bind(person1, logPerson);
bind(person2, logPerson);
 */

/* 
function bind(context, fn) {
  return function (...args) {
    fn.apply(context, args);
  };
}

function logPerson() {
  console.log(`Person: ${this.name}, ${this.age}, ${this.job}`);
}

const person1 = { name: 'Михаил', age: 22, job: 'Frontend' };
const person2 = { name: 'Елена', age: 19, job: 'SMM' };

bind(person1, logPerson)();
bind(person2, logPerson)();
 */

// Перепишите с использованием функции-стрелки
// Замените код Function Expression стрелочной функцией:
/* 
// Было:
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Вы согласны?",
  function() { alert("Вы согласились."); },
  function() { alert("Вы отменили выполнение."); }
);
 */

// Стало:
/* 
let ask = (question, yes, no) => {
  confirm(question) ? yes() : no();
};

ask(
  'Вы согласны?',
  () => alert('Вы согласились.'),
  () => alert('Вы отменили выполнение.')
);
 */
