
//ДОМА ШКА
/*
1. Изучить теорию
2. Решить задачи:
*/

// ? Задача №1.
// Узнать ширину полосы прокрутки

/*
const mainElement = document.documentElement;
const mainElementWidth = mainElement.clientWidth;
const windowWidth = window.innerWidth;
console.log(windowWidth - mainElementWidth);
*/

// Ответ: 17

// ? Задача №2.
// Заставьте браузер прокрутиться на 100px сверху
// спустя секунду после открытия страницы
// scrollTo();

/*
function setScrollBrowser() {
	window.scrollTo({
		top: 100,
		left: 0,
		behavior: 'smooth',
	});
};

setTimeout(setScrollBrowser, 1000);
*/


// ? Задача №3.
// Получите координаты любых трех элементов на странице

// *Координаты относительно окна браузера
// getBoundingClientRect

/*
// Получаем объекты
const firstItem = document.querySelector('.yellow')
const secondItem = document.querySelector('.lesson__title');
const thirdItem = document.querySelector('.lesson__item');

// Получаем координаты относительно окна браузера
const getFirstItemCoords = firstItem.getBoundingClientRect();
const getSecondItemCoords = secondItem.getBoundingClientRect();
const getThirdItemCoords = thirdItem.getBoundingClientRect();

// Отображаем все элементы в консоль
console.log(getFirstItemCoords, getSecondItemCoords, getThirdItemCoords);
*/

// *Координаты относительно документа
// getBoundingClientRect

/* 
// Получаем объекты
const item1 = document.querySelector('.yellow');
const item2 = document.querySelector('.lesson__title');
const item3 = document.querySelector('.lesson__item');

// Получаем конкретную координату относительно окна браузера
const getItem1TopCoord = item1.getBoundingClientRect().top;
const getItem2TopCoord = item2.getBoundingClientRect().top;
const getItem3TopCoord = item3.getBoundingClientRect().top;

// Получаем конкретную координату 3-х объектов относительно документа
const getItem1TopDocumentCoord = getItem1TopCoord + window.pageYOffset;
const getItem2TopDocumentCoord = getItem2TopCoord + window.pageYOffset;
const getItem3TopDocumentCoord = getItem3TopCoord + window.pageYOffset;

// Отображаем в консоль (относительно документа)
console.log(getItem1TopDocumentCoord);
console.log(getItem2TopDocumentCoord);
console.log(getItem3TopDocumentCoord);
*/
