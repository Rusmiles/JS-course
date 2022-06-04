//========================================================================================================================================================

//ДОМАШКА
/*
1. Изучить теорию
2. Решить задачу:
*/
/*
Пишем форму поиска, которая открывается по клику на иконку (0),
а закрывается по клику на любое место страницы, кроме самой формы (1).
Также, закрыть форму можно по клавише escape (Esc) на клавиатуре (2).
Для поля ввода поискового запроса добавляем счетчик символов (3).
*/

// Получаем объекты в переменные
const find = document.querySelector('.search');
const txtArea = document.querySelector('textarea');

// Получаем
document.addEventListener('click', tmblr);

// Получаем в функцию
function tmblr(e) {
	if (e.target.closest('.search__btn')) {
		txtArea.classList.toggle('_active');
	}
	if (!e.target.closest('.search')) {
		txtArea.classList.remove('_active');ь
	}
}

// Получаем объекты txtItem, txtItemLimit и txtCounter
const txtItem = document.querySelector('.textarea__item');
const txtItemLimit = txtItem.getAttribute('maxlength');
const txtCounter = document.querySelector('.textarea__counter span');

// Вешаем событие 'keyup' на txtItem
txtItem.addEventListener('keyup', txtSetCounter);

// Вешаем событие 'keydown' на txtItem
txtItem.addEventListener('keydown', function (e) {
	if (e.repeat) txtSetCounter();
});

// Пишем функцию txtSetCounter
function txtSetCounter() {
	const txtCounterResult = txtItemLimit - txtItem.value.length;
	txtCounter.innerHTML = txtCounterResult;
}



//========================================================================================================================================================
//========================================================================================================================================================