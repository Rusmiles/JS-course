//ДОМАШКА
/*
1. Изучить теорию
2. Решить задачи:
*/
// Задача №1.
// Получить в переменную элемент с атрибутом data-say-hi
// и прочитать значение этого атрибута

// <div data-say-hi="yes">Привет!</div>

// Решение №1
/* 
const hiLesson = document.querySelector('div');
console.log(hiLesson.dataset.sayHi);
 */

// Решение №2
/* 
// получаем элемент
const elem = document.querySelector('[data-say-hi]');

// читаем значение
console.log(elem.dataset.sayHi);

// // другой варинт
// alert(elem.getAttribute('data-say-hi'));

// // третий вариант
// alert(elem.dataset.sayHi);
 */

/* 
// Решение №3

const elem2 = document.querySelectorAll('[data-say-hi]');
console.log(elem2[0]);
 */

// Задача №2.
// Получить в переменную элемент с текстом Йончи
/*
<ul>
	<li>Корчи</li>
	<li>Йончи</li>
</ul>
*/

/* 
// Решение

// Получаем объект
const noNumberList = document.querySelector('ul');

// Получаем текст объекта в переменную
const lastElem = noNumberList.outerHTML;

// Смотрим в консоли
console.log(lastElem);
 */

// Задача №3.
// Получить в переменную коллекцию элементов с классом like
/*
<div class="like"></div>
<div class="subscribe"></div>
<div class="like subscribe"></div>
*/

/* 
// Решение

// Получаем коллекцию
const noNumberList = document.querySelectorAll('.like');

// Получаем коллекцию в консоль
console.log(noNumberList)
 */

// Задача №4.
// Куда добавится <li>Текст</li> ?
/* 
// JS
const list = document.querySelector('ul');
list.insertAdjacentHTML(
	'beforeend',
	'<li>Текст</li>'
);

// Решение:
// Необходимо использовать не метод querySelectorAll, a querySelector. Альтернативным может быть метод querySelectorAll('ul')[0];
 */
/* 
// HTML
<ul>
	<li>Пункт №1</li>
	<li>Пункт №2</li>
</ul>
 */

// В итоге <li>Текст</li> окажется последним элементом в списке объекта ul.


// Полезные ссылки:
// Спецификации:

// DOM: https://dom.spec.whatwg.org/
// BOM: https://html.spec.whatwg.org/
// CSSOM: https://www.w3.org/TR/cssom-1/
// Классы DOM-узлов: https://learn.javascript.ru/basic-dom...



//========================================================================================================================================================
//========================================================================================================================================================
//========================================================================================================================================================

