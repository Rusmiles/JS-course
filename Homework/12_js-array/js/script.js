//ДОМАШКА
/*
1. Изучить теорию
2. Решить задачи:
*/


// Задача №1.
// Какое число (длину) мы получим?

/*
let arr = ['Ваня', 'Иштван', 'Оля',];
let newArr = arr;
newArr.push('Петя');
console.log(arr.length);
*/

// Консоль добавит еще один элемент и выведет длину массива 4


// Задача №2.
/*
Создайте массив users с элементами "Ваня" и "Иштван".
Добавьте "Оля" в конец.
Замените значение в "Иштван" на "Петя".
Ваш код для поиска значения должен
работать для массивов с любой длиной.
Удалите первый элемент массива и покажите его.
Вставьте "Маша" и "Паша" в начало массива.
*/


// Решение:
/*
let users = ['Ваня', 'Иштван',];
users.push('Оля');
console.log(users);

users[1] = 'Петя';
console.log(users);

console.log(users.indexOf('Петя'));

let removedUser = users.splice(0, 1);
console.log(removed);

users.splice(0, 0, 'Маша', 'Коля',);
console.log(users);
 */

// Задача №3.
// Удалить элемент 'Иштван' и возвратить его в переменную

// Ответ:
/*
let arr = ['Ваня', 'Иштван', 'Оля',];
let removedItem = arr.splice(1, 1);
console.log(removedItem);
 */

// Задача №4.
//Сделать из строки массив

// Методом split:
/*
let str = 'Ваня,Иштван,Оля';

let arr = str.split(',');
console.log(arr);
 */

// Задача №5.
// Чему равен previousValue в начале работы метода?

/*
let arr = [9, 2, 8,];
let reduceValue = arrTwo.reduce(function (previousValue, item, index, array) {
	console.log(previousValue);
});
*/

// Ответ: PreviousValue равен первому значению (9), и т.к. его начальное значение не было указано, то работа начнется со второго элемента.

//========================================================================================================================================================
//========================================================================================================================================================
//========================================================================================================================================================
