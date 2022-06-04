/*
// Размеры окна браузера
// clientWidth и clientHeight

// Доступная ширина и высота окна
// Получаем сам объект, обращаясь к тегу html
const mainElement = document.documentElement;
// Обращаемся к документу с методом
const mainElementWidth = mainElement.clientWidth;
const mainElementHeight = mainElement.clientHeight;

console.log(mainElementWidth);
console.log(mainElementHeight);

//-----------

// Ширина и высота окна вместе с полосами прокрутки
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

console.log(windowWidth);
console.log(windowHeight);
*/
//---------------------------------

/*
// Ширина и высота документа
// включая прокрученную часть

let scrollWidth = Math.max(
document.body.scrollWidth, document.documentElement.scrollWidth,
document.body.offsetWidth, document.documentElement.offsetWidth,
document.body.clientWidth, document.documentElement.clientWidth
);
let scrollHeight = Math.max(
document.body.scrollHeight, document.documentElement.scrollHeight,
document.body.offsetHeight, document.documentElement.offsetHeight,
document.body.clientHeight, document.documentElement.clientHeight
);
console.log(scrollWidth);
console.log(scrollHeight);
*/

//---------------------------------

/*
// Получить кол-во прокрученных пикселей
// Только для чтения
const windowScrollTop = window.pageYOffset;
const windowScrollLeft = window.pageXOffset;

console.log(windowScrollTop);
console.log(windowScrollLeft);
*/

//---------------------------------
// Управление прокруткой страницы 

/*
// Метод scrollBy(x,y) прокручивает страницу относительно
// её текущего положения.

function setScrollBy() {
window.scrollBy(0, 50);
const windowScrollTop = window.pageYOffset;
console.log(windowScrollTop);
}
*/

//------


// Метод scrollTo(pageX, pageY) прокручивает страницу
// на абсолютные координаты(pageX, pageY).
// тоже самое что и window.scroll()
/* 
function setScrollTo() {
	window.scrollTo(0, 50);
	const windowScrollTop = window.pageYOffset;
	console.log(windowScrollTop);
}

function setScrollToOptions() {
	window.scrollTo({
		top: 500,
		left: 0,
		// smooth, instant,
		// либо auto; по умолчанию auto
		behavior: "smooth"
	});
}
*/
// Опции не работают в Safari
// ?Возможные значения scroll-behavior

/* Значение	Описание
auto	На усмотрение браузера
instant	Мгновенная прокрутка
smooth	Плавная прокрутка */

//------

// scrollIntoView применятеся уже не к глобальному объекту, а к конкретному элементу

/*
Вызов elem.scrollIntoView(top) прокручивает страницу,
чтобы elem оказался вверху.У него есть один аргумент:

- если top = true(по умолчанию), то страница будет прокручена,
чтобы elem появился в верхней части окна.
Верхний край элемента совмещён с верхней частью окна.
- если top = false, то страница будет прокручена, чтобы elem
появился внизу.Нижний край элемента будет совмещён с нижним краем окна.
*/
/* 
function setScrollIntoView(top) {
	const lessonSelected = document.querySelector('.lesson__selected');
	lessonSelected.scrollIntoView(top);
}

function setScrollIntoViewOptions(top) {
	const lessonSelected = document.querySelector('.lesson__selected');
	lessonSelected.scrollIntoView({
		//"start", "center", "end" или "nearest". По умолчанию "center".
		block: "center",
		//"start", "center", "end" или "nearest". По умолчанию "nearest".
		inline: "nearest",
		// "auto" или "smooth". По умолчанию "auto".
		behavior: "smooth"
	});
}
// Опции не работают в Safari
*/


//-------

// toggle - "тумблер"
/* 
// Запретить прокрутку
function setEnableDisableScroll() {
	//document.body.style.overflow = "hidden";
	document.body.classList.toggle('scroll-lock');
}
*/
/*
Для прокрутки страницы из JavaScript её DOM должен
быть полностью построен.
Например, если мы попытаемся прокрутить страницу
из скрипта в <head>, это не сработает.
*/

// wrapper - "обертка" (англ.)

//========================================================================================================================================================

// Метрики элементов на странице

// Получаем объект
// const block = document.querySelector('.lesson__block');

// Позиция объекта
// Свойства offsetParent, offsetLeft и offsetTop

// Получаем родительский элемент
// относительно которого позицианирован наш объект
// const elementOffsetParent = block.offsetParent;


/*
Это будет ближайший предок, который
удовлетворяет следующим условиям:

1. Является CSS-позиционированным
	(CSS-свойство position равно absolute, relative, fixed или sticky)
2. или теги <td>, <th>, <table>,
3. или <body>.
*/

// console.log(elementOffsetParent);

/*
Cитуации, в которых offsetParent объекта равно null:
1. Для скрытых элементов
	(с CSS - свойством display: none или когда его нет в документе - обычный тег, который не имеет ни размера, ни контента).
2. Для элементов <body> и <html>.
3. Для элементов с position: fixed.
*/
/* 
// Получаем объект
const block = document.querySelector('.lesson__block');

// Позиция объекта
// Свойства offsetParent, offsetLeft и offsetTop

// Получаем родительский элемент
// относительно которого позицианирован наш объект
const elementOffsetParent = block.offsetParent;

console.log(elementOffsetParent);

// Получаем позицию объекта относительно предка (offsetParent)
const elementOffsetLeft = block.offsetLeft;
const elementOffsetTop = block.offsetTop;

console.log(elementOffsetLeft);
console.log(elementOffsetTop);
*/


//========================================================================================================================================================

/* 
// Получаем объект
const block = document.querySelector('.lesson__block');

// Общие размеры объекта
// offsetWidth и offsetHeight

// Получаем размеры объекта
const elementOffsetWidth = block.offsetWidth;
const elementOffsetHeight = block.offsetHeight;

console.log(elementOffsetWidth);
console.log(elementOffsetHeight);
*/
// Включают в себя и рамку-border и padding и полосу прокрутки, одним словом - это общая ширина и высота подопытного объекта

// Метрики для непоказываемых элементов равны нулю.

//========================================================================================================================================================

/* 
// Получаем объект
const block = document.querySelector('.lesson__block');

// Отступы внутренней части элемента от внешней.
// clientTop и clientLeft

const elementClientTop = block.clientTop;
const elementClientLeft = block.clientLeft;

console.log(elementClientTop);
console.log(elementClientLeft);
*/

//========================================================================================================================================================

/* 
// Получаем объект
const block = document.querySelector('.lesson__block');

// Размеры объекта без
// рамок и полосы прокрутки
// clientWidth и clientHeight

const elementClientWidth = block.clientWidth;
const elementClientHeight = block.clientHeight;

console.log(elementClientWidth);
console.log(elementClientHeight);

// общая ширина (offsetWidth) - рамка слева - рамка справа - скролл
// 500 - 20 - 20 - 17 = 443
*/

//========================================================================================================================================================

/* 
// Получаем объект
const block = document.querySelector('.lesson__block');

// Размеры объекта включающие в себя
// прокрученную (которую не видно) часть.
// В остальном работают как clientWidth/clientHeight,
// scrollWidth и scrollHeight

const elementScrollWidth = block.scrollWidth;
const elementScrollHeight = block.scrollHeight;

console.log(elementScrollWidth);
console.log(elementScrollHeight);
*/

//========================================================================================================================================================

// Данные свойства (scrollLeft и scrollTop) работают не только для чтения
/* 
// Получаем объект
const block = document.querySelector('.lesson__block');

// Размеры прокрученной области
// scrollLeft и scrollTop

block.scrollTop = 150;

const elementScrollLeft = block.scrollLeft;
const elementScrollTop = block.scrollTop;

console.log(elementScrollLeft);
console.log(elementScrollTop);
*/

//========================================================================================================================================================

 

// Перед тем, как перейти к координатам, стоит отметить, что ===>
// Получать размеры объекта стоит как раз только что изученными методам, а не, например, getComputedStyle, который мы изучали на прошлом уроке

//========================================================================================================================================================


// Координаты
/*
Большинство соответствующих методов JavaScript работают в
одной из двух указанных ниже систем координат:

1. Относительно окна браузера.
	(как position: fixed, отсчёт идёт от верхнего левого угла окна.)
	Принято обозначать clientX/clientY.
2. Относительно документа.
	(как position: absolute относительно <body>, отсчёт идёт от
	верхнего левого угла документа.)
	Принято обозначать pageX/pageY.

Когда страница полностью прокручена в самое начало,
то верхний левый угол окна совпадает с левым верхним
углом документа, при этом обе этих системы координат тоже совпадают.
Но если происходит прокрутка, то координаты элементов в
контексте окна меняются, так как они двигаются,
но в то же время их координаты относительно
документа остаются прежними.

*/

//========================================================================================================================================================



// Координаты относительно окна браузера
// getBoundingClientRect
/* 
// Получаем объект
const item = document.querySelector('.lesson__item');

// Получаем координаты относительно окна браузера
const getItemCoords = item.getBoundingClientRect();

console.log(getItemCoords);

// Получаем конкретную координату относительно окна браузера
const getItemLeftCoord = item.getBoundingClientRect().left;

console.log(getItemLeftCoord);
*/

//========================================================================================================================================================


// Координаты относительно документа
// getBoundingClientRect

/*
// Получаем объект
const item = document.querySelector('.lesson__item');

// Получаем конкретную координату относительно окна браузера
const getItemTopCoord = item.getBoundingClientRect().top;

// Получаем конкретную координату относительно документа
const getItemTopDocumentCoord = getItemTopCoord + window.pageYOffset;

console.log(getItemTopCoord);
console.log(getItemTopDocumentCoord);
*/

//========================================================================================================================================================


// Получение объекта по координатам
// document.elementFromPoint(x, y);
/* 
const elem = document.elementFromPoint(100, 100);
console.log(elem);
*/
// Но стоит помнить, что координаты будут все времят разными, т.к. метод работает только с окном браузера

//========================================================================================================================================================
//========================================================================================================================================================


// 👉 Плейлист "Как это сделать?":
// https://www.youtube.com/playlist?list=PLM6XATa8CAG6IJvQBkrTTNZmpIcyS2Avk

// intersectionObserver - дополнительная обучение в рамках темы "размеры, прокрутка, координаты"