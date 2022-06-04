
// Введение в JS события

/*
Отлавливать возникновение события мы будем с помощью
специальных обработчиков.

Любому событию можно назначить обработчик, то есть функцию,
которая сработает, как только произойдет нужное нам событие.
Именно благодаря этим обработчикам JavaScript может
реагировать на действия пользователя.

Есть несколько способов назначить событию обработчик.
Сейчас о них и поговорим
*/

// -----------------------------

// Использование атрибута HTML

// -----------------------------
// Обработчик событий onclick
// отлавливает каждый клик кнопки
// с помощью анонимной функции
/*
// Использование DOM-объекта
const button = document.querySelector('.button');


button.onclick = function () {
	console.log('Клик!');
}
*/

// Другой метод onclick (в отдельной функции)
/*
const button = document.querySelector('.button');

function showConsole() {
	console.log('Клик!');
}
button.onclick = showConsole;
*/
// Важно! Без круглых скобок!


// -----------------------------

/*
Фундаментальный недостаток описанных выше способов
назначения обработчика – невозможность повесить несколько
обработчиков на одно событие.
Каждое новое назначение обработчика перезапишет предыдущее:
*/
/*
const button = document.querySelector('.button');

button.onclick = function () {
	console.log('Клик!');
}
button.onclick = function () {
	console.log('Клак!');
}
*/

//===================================================

// Обработчик событий addEventListener/removeEventListener

/*
Существует основной способ назначения
обработчиков при помощи специальных
методов addEventListener и removeEventListener,
которые лишены этого недостатка

handler -"обработчик" (англ.)

element.addEventListener(event, handler[, options]);
*/
/*
const button = document.querySelector('.button');

button.addEventListener("click", function (e) {
	console.log('Клик!');
});
button.addEventListener("click", function (e) {
	console.log('Клак!');
});
*/
// ------

/*
const button = document.querySelector('.button');

function showConsole() {
	console.log('Клик!');
	button.removeEventListener("click", showConsole);
}

button.addEventListener("click", showConsole);
//button.removeEventListener("click", showConsole);

*/

// ------


// Опции
/*
const options = {
	// сейчас capture сложен для понимать, но
	// станет понятнее,когда дойдем до темы "всплытие и погружение"
	"capture": false, // фаза, на которой должен сработать обработчик
	"once": true, // если true, тогда обработчик будет
	//автоматически удалён после выполнения.
	"passive": false // если true, то указывает, что обработчик
	//никогда не вызовет preventDefault()
}

const button = document.querySelector('.button');

function showConsole() {
	console.log('Клик!');
}

button.addEventListener("click", showConsole, options);
*/

/*
Метод addEventListener может показаться сложнее чем, скажем, onclick.
Но, из-за того что он обладает преимуществом
"прослушивания" нескольких событий,
а также учитывая тот факт что существуют события которые можно отловить
только при помощи этого метода.
В результате разработчики чаще используют именно его.
*/

//====================================================

// Объект события
/*
Чтобы хорошо обработать событие, могут понадобиться детали того,
что произошло. Не просто «клик» или «нажатие клавиши»,
а также – какие координаты указателя мыши, какая клавиша
нажата и так далее.
Когда происходит событие, браузер создаёт объект события,
записывает в него детали и передаёт его в качестве
аргумента функции-обработчику.
*/
/* 
const button = document.querySelector('.button');
const img = document.querySelector('.image');

function showConsole(event) {
	// Тип события
	// console.log(event.type);
	// Объект на котором сработал обработчик
	// console.log(event.target);
	// Объект к которому назначен обработчик
	// console.log(event.currentTarget);
	// Положение курсора по оси X
	// console.log(event.clientX);
	// Положение курсора по оси Y
	// console.log(event.clientY);

	// Все детали события
	console.log(event);
}

button.addEventListener("click", showConsole);
img.addEventListener("click", showConsole);
// button.addEventListener("mouseenter", showConsole);
*/

//===================================================


// Всплытие и погружение
/*
const block = document.querySelector('.block');
const blockInner = document.querySelector('.block__inner');
const blockInnerInner = document.querySelector('.block__inner-inner');
*/
/*
Всплытие
Когда на элементе происходит событие, обработчики
сначала срабатывают на нём, потом на его родителе,
затем выше и так далее, вверх по цепочке предков.
*/
/*
Погружение
Для того чтобы что-то всплыло, оно должно сначало погрузиться :)
*/
/*
block.addEventListener("click", function (event) {
	console.log('Клик на Блок!');
	//console.log(event.target);
});
blockInner.addEventListener("click", function (event) {
	console.log('Клик на Блок второго уровня!');
}, { "capture": false });
blockInnerInner.addEventListener("click", function (event) {
	console.log('Клик на Блок третьего уровня!');
	// Остановка всплытия
	// event.stopPropagation();
});
*/
// Стоит добавить, что останавливать всплытие нужно очень осторожно и только точно понимая, что именно мы делаем

/*
В современной разработке стадия погружения используется очень редко,
обычно события обрабатываются во время всплытия.
*/

//===================================================

// Делегирование событий

/*
Всплытие и перехват событий позволяет реализовать
один из самых важных приёмов разработки – делегирование.
*/

// Назначение +100500 кнопок каждой

/*
const button = document.querySelectorAll('.button');

function showConsole() {
	console.log('Ура!');
}
button.forEach(buttonItem => {
	buttonItem.addEventListener("click", showConsole);
});
*/

// -----------------

// Делегирование через просеивание

/*
const lesson = document.querySelector('.lesson');

function showConsole() {
	console.log('Ура!');
}
lesson.addEventListener("click", function (event) {
	if (event.target.closest('.button')) {
		showConsole();
	}
});
*/


// Пример с меню
/*
const menuBody = document.querySelector('.menu');

document.addEventListener("click", menu);

function menu(event) {
	if (event.target.closest('.menu__button')) {
		menuBody.classList.toggle('_active');
	}
	if (!event.target.closest('.menu')) {
		menuBody.classList.remove('_active');
	}
}
*/

//===================================================

// Действия браузера по умолчанию и их отмена

/*
Многие события автоматически влекут за собой действие браузера.
Например:
- Клик по ссылке инициирует переход на новый URL.
- Нажатие на кнопку «отправить» в форме – отсылку её на сервер.
- Зажатие кнопки мыши над текстом и её движение
	в таком состоянии – инициирует его выделение и т.д.

Если мы обрабатываем событие в JavaScript,
то зачастую такое действие браузера нам не нужно.
К счастью, его можно отменить.
*/

// const link = document.querySelector('.link');

// const options = {
// 	"once": true,
// }
/* 
link.addEventListener("click", function (event) {
	console.log('Наши действия');
	// отменить действие браузера (переход по ссылке)
	event.preventDefault();
});
*/
/*
link.onclick = function () {
	console.log('Наши действия');
	// отменить действие браузера (переход по ссылке)
	return false;
}
*/

/*
Необязательная опция passive: true для addEventListener
сигнализирует браузеру, что обработчик не собирается выполнять
preventDefault(). Почему это может быть полезно ?
Есть некоторые события, как touchmove на мобильных
устройствах(когда пользователь перемещает палец по экрану),
которое по умолчанию начинает прокрутку, но мы можем отменить
это действие, используя preventDefault() в обработчике.
Поэтому, когда браузер обнаружит такое событие,
он должен для начала запустить все обработчики и после,
если preventDefault не вызывается нигде, он может начать прокрутку.
Это может вызвать ненужные задержки в пользовательском интерфейсе.
Опция passive: true сообщает браузеру, что обработчик
не собирается отменять прокрутку.Тогда браузер начинает её немедленно,
обеспечивая максимально плавный интерфейс, параллельно обрабатывая событие.
Для некоторых браузеров(Firefox, Chrome) опция passive по умолчанию
включена в true для таких событий, как touchstart и touchmove.
*/
/*
const link = document.querySelector('.link');

link.addEventListener("click", function (event) {
	console.log('Наши действия');
	// отменить действие браузера (переход по ссылке)
	event.preventDefault();
}, { "passive": true });
*/
//===================================================

// Основы событий мыши

// Типы событий мыши
/*
Мы можем разделить события мыши на две категории:
«простые» и «комплексные».
*/

// Простые события
//Самые часто используемые простые события:
/*
mousedown / mouseup - Кнопка мыши нажата / отпущена над элементом.
mouseover / mouseout - Курсор мыши появляется над элементом и уходит с него.
mousemove - Каждое движение мыши над элементом генерирует это событие.
contextmenu - Вызывается при попытке открытия контекстного меню,
					как правило, нажатием правой кнопки мыши.
					Но, заметим, это не совсем событие мыши,
					оно может вызываться и специальной клавишей клавиатуры.
*/
//Комплексные события
/*
click - Вызывается при mousedown, а затем mouseup над одним
и тем же элементом, если использовалась основная кнопка мыши.
dblclick - Вызывается двойным кликом на элементе.
Комплексные события состоят из простых, поэтому
в теории мы могли бы без них обойтись.
Но хорошо, что они существуют, потому что работать с ними очень удобно.
*/


/*
const button = document.querySelector('.button');

button.addEventListener("mousedown", function (event) {
	console.log(`Нажата кнопка ${event.which}`);
});

button.addEventListener("click", function (event) {
	console.log('Нажата основная кнопка мыши');
});

button.addEventListener("contextmenu", function (event) {
	console.log('Вызвано контекстное меню (не основная кнопка мыши)');
});
*/
/*
event.which = 1 - Нажата основная кнопка мыши (обычно левая)
event.which = 2 - Нажата средняя кнопка мыши (колесо)
event.which = 3 - Нажата не основная кнопка мыши (обычно правая)
*/

// Координаты: clientX/Y, pageX/Y
/*
const blockForMouse = document.querySelector('.block-for-mouse');

blockForMouse.addEventListener("mousemove", function (event) {
	blockForMouse.innerHTML =
		`clientX - ${event.clientX} <br> clientY - ${event.clientY}`;
});
*/

//------------------

// Наведение мыши: mouseover/out, mouseenter/leave
//События mouseover/mouseout, relatedTarget (связанная цель)

/*
Событие mouseover происходит в момент, когда курсор оказывается
над элементом, а событие mouseout – в момент,
когда курсор уходит с элемента.
*/
/*
const blockForMouse = document.querySelector('.block-for-mouse');

blockForMouse.addEventListener("mouseover", function (event) {
	blockForMouse.innerHTML = `Курсор над элементом`;
});
blockForMouse.addEventListener("mouseout", function (event) {
	blockForMouse.innerHTML = `Курсор уходит с элемента`;
});
*/

/*
Эти события являются особенными, потому что у них имеется свойство
relatedTarget. Оно «дополняет» target. Когда мышь переходит
с одного элемента на другой, то один из них будет target,
а другой relatedTarget.

Для события mouseover (курсор оказывается над элементом):
event.target – это элемент, на который курсор перешёл.
event.relatedTarget – это элемент,
с которого курсор ушёл(relatedTarget → target).

Для события mouseout наоборот (курсор уходит с элемента):
event.target – это элемент, с которого курсор ушёл.
event.relatedTarget – это элемент,
на который курсор перешёл(target → relatedTarget).
*/
/*
const blockForMouse = document.querySelector('.block-for-mouse');

blockForMouse.addEventListener("mouseover", function (event) {
	console.log(event.target);
	console.log(event.relatedTarget);
});
blockForMouse.addEventListener("mouseout", function (event) {
	console.log(event.target);
	console.log(event.relatedTarget);
});
*/

// Ещё одна интересная особенность наведения мыши
// mouseover/out, mouseenter/leave
/*
const blockForMouse = document.querySelector('.block-for-mouse');

blockForMouse.addEventListener("mouseover", function (event) {
	console.log(`Курсор над элементом`);
});
blockForMouse.addEventListener("mouseout", function (event) {
	console.log(`Курсор уходит с элемента`);
});
*/

// Чтобы понять, в чем недостаток данного события, перейдем к следующему методу

// События mouseenter и mouseleave
/*
Пара важных отличий:
1) Переходы внутри элемента, на его потомки и с них, не считаются.
2) События mouseenter / mouseleave не всплывают.
*/
/*
const blockForMouse = document.querySelector('.block-for-mouse');

blockForMouse.addEventListener("mouseenter", function (event) {
	console.log(`Курсор над элементом`);
});
blockForMouse.addEventListener("mouseleave", function (event) {
	console.log(`Курсор уходит с элемента`);
});
*/

//Делегирование событий наведения мыши (то же просеивание)
// И в то же время преимущество mouseover и mouseout
/* 
const blockForMouse = document.querySelector('.block-for-mouse');
blockForMouse.addEventListener("mouseover", function (event) {
	let target = event.target.closest('span');
	// переход не на <span> - игнорировать
	if (!target) return;
	target.style.cssText = `background-color: #77608d;`;
});
blockForMouse.addEventListener("mouseout", function (event) {
	let target = event.target.closest('span');
	// переход не со <span> - игнорировать
	if (!target) return;
	target.style.cssText = ``;
});
*/

//-------------------------

// Перетаскивание Drag`n`Drop
/*
const gragField = document.querySelector('.drag-field');
const gragItem = document.querySelector('.drag-field__item');

gragItem.addEventListener("mousedown", function (event) {

	let coordsItemX = event.clientX - gragItem.getBoundingClientRect().left;
	let coordsItemY = event.clientY - gragItem.getBoundingClientRect().top;

	let gragItemSizes = {
		width: gragItem.offsetWidth,
		height: gragItem.offsetHeight
	}
	let gragFieldSizes = {
		left: gragField.getBoundingClientRect().left + scrollX,
		top: gragField.getBoundingClientRect().top + scrollY,
		right: gragField.getBoundingClientRect().left + scrollX + gragField.offsetWidth,
		bottom: gragField.getBoundingClientRect().top + scrollY + gragField.offsetHeight
	}

	gragItem.style.position = 'absolute';
	gragItem.style.zIndex = 1000;
	document.body.append(gragItem);

	moveItem(event.pageX, event.pageY);

	function moveItem(pageX, pageY) {
		let currentX = pageX - coordsItemX;
		let currentY = pageY - coordsItemY;

		if (
			currentX + gragItemSizes.width <= gragFieldSizes.right &&
			currentX >= gragFieldSizes.left
		) {
			gragItem.style.left = `${currentX}px`;
		} else {
			if (currentX + gragItemSizes.width > gragFieldSizes.right) {
				gragItem.style.left = `${gragFieldSizes.right - gragItemSizes.width}px`;
			}
			if (currentX < gragFieldSizes.left) {
				gragItem.style.left = `${gragFieldSizes.left}px`;
			}
		}
		if (
			currentY + gragItemSizes.height <= gragFieldSizes.bottom &&
			currentY >= gragFieldSizes.top
		) {
			gragItem.style.top = `${currentY}px`;
		} else {
			if (currentY + gragItemSizes.height > gragFieldSizes.bottom) {
				gragItem.style.top = `${gragFieldSizes.bottom - gragItemSizes.height}px`;
			}
			if (currentY < gragFieldSizes.top) {
				gragItem.style.top = `${gragFieldSizes.top}px`;
			}
		}
	}

	let currentDroppable = null;

	function onDragItem(event) {
		moveItem(event.pageX, event.pageY);

		gragItem.hidden = true;
		let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
		gragItem.hidden = false;

		if (!elemBelow) return;
		let droppableBelow = elemBelow.closest('.drag-field__point');

		if (currentDroppable !== droppableBelow) {
			if (currentDroppable) {
				currentDroppable.classList.remove('_active');
				gragItem.classList.remove('_active');
			}
			currentDroppable = droppableBelow;
			if (currentDroppable) {
				currentDroppable.classList.add('_active');
				gragItem.classList.add('_active');
			}
		}
	}
	document.addEventListener('mousemove', onDragItem);

	document.addEventListener("mouseup", function (event) {
		document.removeEventListener('mousemove', onDragItem);
	}, { "once": true });
});
gragItem.addEventListener("dragstart", function (event) {
	event.preventDefault();
});
*/


//===================================================

// Клавиатура

/*
Основные события при работе с клавиатурой это:
	keydown – происходит при нажатии клавиши
	keyup – при отпускании клавиши
*/

// event.code и event.key

/*
document.addEventListener("keydown", function (event) {
	console.log(`Нажата клавиша ${event.code} (${event.key})`);
});
document.addEventListener("keyup", function (event) {
	console.log(`Отжата клавиша ${event.code} (${event.key})`);
});
*/

/*
Если пользователь работает с разными языками, то при переключении
на другой язык символ изменится с "G" на совершенно другой.
Получившееся станет новым значением event.key,
тогда как event.code останется тем же: "KeyG".
*/

/*
document.addEventListener('keydown', function (event) {
	if (event.code == 'KeyZ' && (event.ctrlKey || event.metaKey)) {
		console.log('Отмена действия!');
	}
});
*/


/*
Автоповтор
При долгом нажатии клавиши возникает автоповтор: keydown срабатывает
снова и снова, и когда клавишу отпускают, то отрабатывает keyup.
Так что ситуация, когда много keydown и один keyup, абсолютно нормальна.
Для событий, вызванных автоповтором, у объекта события
свойство event.repeat равно true.
*/
/*
document.addEventListener("keydown", function (event) {
	console.log(`Нажата клавиша ${event.code} (${event.key})`);
	console.log(event.repeat);
});
*/

// Пример
/* 
const txtItem = document.querySelector('.textarea__item'); // само текстовое поле
const txtItemLimit = txtItem.getAttribute('maxlength'); // значение атрибута max.length
const txtCounter = document.querySelector('.textarea__counter span'); 
// <span>, в который мы будем это выводить
txtCounter.innerHTML = txtItemLimit; 

txtItem.addEventListener("keyup", txtSetCounter);
txtItem.addEventListener("keydown", function (event) {
	if (event.repeat) txtSetCounter();
});

function txtSetCounter() {
	const txtCounterResult = txtItemLimit - txtItem.value.length;
	txtCounter.innerHTML = txtCounterResult;
}
*/

// Пример с более продвинутым событием input
/* 
const txtItem = document.querySelector('.textarea__item');
const txtItemLimit = txtItem.getAttribute('maxlength');
const txtCounter = document.querySelector('.textarea__counter span');
txtCounter.innerHTML = txtItemLimit;

txtItem.addEventListener("input", txtSetCounter);

function txtSetCounter() {
	const txtCounterResult = txtItemLimit - txtItem.value.length;
	txtCounter.innerHTML = txtCounterResult;
}
*/

// Пример с меню
// Немного доработаем его при помощи событий клавиатуры
/* 
const menuBody = document.querySelector('.menu');

document.addEventListener("click", menu);

function menu(event) {
	if (event.target.closest('.menu__button')) {
		menuBody.classList.toggle('_active');
	}
	if (!event.target.closest('.menu')) {
		menuBody.classList.remove('_active');
	}
}

document.addEventListener('keyup', function (event) {
	if (event.code === 'Escape') {
	menuBody.classList.remove('_active');
	}
});
*/

//===================================================

// Прокрутка (скролл)
/* 
window.addEventListener('scroll', function (event) {
	//кол-во прокрученных пикселей по вертикали
	// scrollY или pageYOffset (устарел)
	// кол-во прокрученных пикселей по горизонтали
	// scrollX или pageXOffset (устарел)

	console.log(`${scrollY}px`);
});
*/
// Предотвращение прокрутки
/*
Нельзя предотвратить прокрутку, используя event.preventDefault()
в обработчике scroll,  потому что он срабатывает после того,
как прокрутка уже произошла.

Но можно предотвратить прокрутку, используя event.preventDefault()
на событии, которое вызывает прокрутку, например,
на событии keydown для клавиш pageUp и pageDown.

Способов инициировать прокрутку много, более надёжный
способ – использовать CSS, свойство overflow: hidden;.
*/


/*
Использование

Событие прокрутки scroll позволяет реагировать на прокрутку страницы
или элемента. Есть много хороших вещей, которые при этом можно сделать.

- Показать / скрыть дополнительные элементы управления или информацию,
основываясь на том, в какой части документа находится пользователь.
Например анимация при скроле или ленивая подгрузка
- Подгрузить данные, когда пользователь прокручивает страницу вниз
до конца. Бесконечный скрол.

По ссылкам в описании есть видео с примерами реализации этого
функционала с помощью события scroll. Но, более интересным решением
данных задач будет использование IntersectionObserver, который позволяет
веб-приложениям асинхронно следить за изменением пересечения
элемента с его родителем или областью видимости документа.

Подробно об IntersectionObserver я расскажу в отдельном видео

*/

//===================================================

// События загрузки страницы
/*
1) DOMContentLoaded – браузер полностью загрузил HTML,
	было построено DOM - дерево, но внешние ресурсы,
	такие как картинки <img> и стили, могут быть ещё не загружены.
2) load – браузер загрузил HTML и внешние ресурсы (картинки, стили и т.д.)
3) beforeunload / unload – пользователь покидает страницу.
*/

/*
document.readyState - состояние загрузки

Есть три возможных значения:
"loading" – документ загружается.
"interactive" – документ был полностью прочитан.
"complete" – документ был полностью прочитан
и все ресурсы(такие как изображения) были тоже загружены.
*/


/* 
// Событие DOMContentLoaded срабатывает на объекте document
document.addEventListener("DOMContentLoaded", readyDom);

// Событие load срабатывает на объекте window
window.addEventListener("load", readyLoad);

function readyDom() {
	const image = document.querySelector('.image');
	console.log(document.readyState);
	console.log('DOM загружен!');
	console.log(image.offsetWidth);
}
function readyLoad() {
	const image = document.querySelector('.image');
	console.log(document.readyState);
	console.log('Страница загружена!');
	console.log(image.offsetWidth);
}
*/


/*
// Событие beforeunload срабатывает на объекте window
window.addEventListener("beforeunload", beforeUnLoad);

function beforeUnLoad(event) {
	// Отмените событие, как указано в стандарте.
	event.preventDefault();
	// Chrome требует установки возвратного значения.
	event.returnValue = '';
}


// Событие unload срабатывает на объекте window
window.addEventListener("unload", function (e) {
	// Отправка статистики в фоновом режиме и т.д.
	// navigator.sendBeacon(url, data)
	// https://w3c.github.io/beacon/.
});
*/

//========================================================================================================================================================
//========================================================================================================================================================
//========================================================================================================================================================


// 👉 Плейлист "Как это сделать?" - https://www.youtube.com/playlist?list...
// 👉 Анимация при прокрутке (скролле) страницы: https://www.youtube.com/watch?v=kupwm...
// 👉 Lazy Loading (ленивая загрузка) при скролле страницы: https://www.youtube.com/watch?v=kupwm...
// 👉 Параллакс эффект при движении мыши и скролле сайта: https://www.youtube.com/watch?v=uyBCz...
// 👉 Про navigator.sendBeacon(url, data): https://w3c.github.io/beacon/

// 🤟 БЕСПЛАТНЫЙ курс по верстке сайтов (HTML, CSS, JavaScript): https://www.youtube.com/playlist?list...