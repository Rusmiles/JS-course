//ДОМАШКА
/*
1. Изучить теорию
2. Решить задачи:
*/
// Задача №1. Получить верное значение округления

// Было:
/*
let numOne = Math.round(1.005 * 100) / 100;
console.log(numOne); // Выведет 1 что не верно
*/

// Стало:
/*
let numOne = Math.round((1.005 + Number.EPSILON) * 100) / 100;
console.log(numOne); // Будет 1.01;
 */

// Задача №2. Получить число 135.58 из строки

/*
let value = (parseFloat("135.58px"));
console.log(value);
 */

// Задача №3. Построить верное условное ветвление

/*
let value = 58 + "Фрилансер";
if (isNaN(value)) {
	console.log('Результат выражения NaN');
}
 */

// Задача №4.
// Найти максимальное число из 10,58,39,-150,0

/*
console.log(Math.max(10, 58, 39, -150, 0));
 */

// Задача №5.
// Округлить число 58.858 до числа 58

/*
console.log(Math.floor(58.858));
 */

//* Ссылки: В JavaScript существуют 2 вида чисел. Это обычные числа в 64-битном формате с которыми мы чаще всего и будем работать.

/* И BigInt числа, они дают возможность работать с целыми числами произвольной длины. В этом уроке мы рассмотрим обычные числа типа number, и научимся с ними работать. */

// 👉 Файлы урока - https://fls.guru/files/tutorials/js/j...

// Причина проблемы неточных вычислений: https://habr.com/ru/post/112953/
// Функция корректировки вычислений:
// https://developer.mozilla.org/ru/docs...
// Объект Math: https://developer.mozilla.org/ru/docs...