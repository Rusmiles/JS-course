//==============================================


// Свойства и методы форм

// Коллекция всех форм на странице
// document.forms

// Получить коллекцию всех форм на странице
// console.log(document.forms);


// Получить конкретную форму на странице
/*
const mainForm = document.forms[0];
console.log(mainForm);
*/

// Атрибут name
/*
const mainForm = document.forms.main;
console.log(mainForm);
*/

//----

// Разница между document.forms и document.querySelectorAll('form');

/*
// Коллекция
console.log(document.querySelectorAll('form'));
// Живая коллекции
console.log(document.forms);


// Добавление новой формы
document.body.insertAdjacentHTML(
	"beforeend",
	`<form name="some" class="some-form" action="#"></form>`
);
*/

//====================================

// Элементы форм

// document.forms.elements

// const mainForm = document.forms.main;
// console.log(mainForm.elements);


// Получаем элемент с именем nameInput
// const mainFormInput = mainForm.elements.nameInput;
// или mainForm.nameInput
// console.log(mainFormInput);

// Значения nameRadio должны быть одинаковыми, иначе ничего работать не будет 

/*
// Получаем коллекцию с именем nameRadio
const mainFormRadioButtons = mainForm.nameRadio;
// или mainForm.elements.nameRadio
console.log(mainFormRadioButtons);
*/

// Обратная ссылка
// element.form

// Получаем форму элемента
// console.log(mainFormInput.form);

//---------------

// Элементы форм

// Работа с input и textarea
/*
Значение можно получить через свойство input.value(строка)
или input.checked(булево значение) для чекбоксов и радиокнопок.
*/

// const mainForm = document.forms.main;

/* 
const mainFormInput = mainForm.nameInput;
const mainFormTextarea = mainForm.nameTextarea;
*/
// Через HTML
/*
// Получить значение (седержимое) поля
console.log(mainFormInput.value);
// Получить значение (седержимое) текстового поля
console.log(mainFormTextarea.value);
*/

// Через JavaScript
/* 
// Присвоить значение (седержимое) поля
mainFormInput.value = "Пока";
// Присвоить значение (седержимое) текстового поля
mainFormTextarea.value = "До встречи!";
*/

// Другие типы инпутов radio / chekbox / file

// const mainForm = document.forms.main;

/* 
const mainFormRadioButtons = mainForm.nameRadio;
const mainFormCheckBox = mainForm.nameCheck;
const mainFormFile = mainForm.nameFile;
*/

// Получить значение поля type radio
/* 
console.log(mainFormRadioButtons[0].value);
console.log(mainFormRadioButtons[1].value);
console.log(mainFormRadioButtons[0].checked);
console.log(mainFormRadioButtons[1].checked);
*/
// Если атрибут value ничем не заполнен, то будет значение on

// Получить значение поля type checkbox
/*
console.log(mainFormCheckBox.value);
console.log(mainFormCheckBox.checked);
*/

// Получить значение поля type file
// console.log(mainFormFile.value);


// Назначить значение поля type radio
/*
mainFormRadioButtons[0].value = "left";
mainFormRadioButtons[1].value = "right";
mainFormRadioButtons[1].checked = true;
*/

// Назначить значение поля type checkbox
/*
mainFormCheckBox.value = "save";
mainFormCheckBox.checked = true;
*/

// Назначить значение поля type file
// mainFormFile.value = "";

//---------------

// Работа с select и option

/*
Элемент <select> имеет 3 важных свойства:
select.options – коллекция из подэлементов <option>,
select.value – значение выбранного в данный момент <option>,
select.selectedIndex – номер выбранного <option>.

Они дают три разных способа установить значение в <select>:
Найти соответствующий элемент <option> и установить
в option.selected значение true.
Установить в select.value значение нужного <option>.
Установить в select.selectedIndex номер нужного <option>.

Первый способ наиболее понятный,
но (2) и (3) являются более удобными при работе.
*/


/* 
const mainForm = document.forms.main;
const mainFormSelect = mainForm.nameSelect;

// Получить все options
console.log(mainFormSelect.options);

// Получить индекс выбранного option
const mainFormSelectIndex = mainFormSelect.selectedIndex;
console.log(mainFormSelectIndex);
// Получить значение выбранного option
const mainFormSelectValue = mainFormSelect.value;
console.log(mainFormSelectValue);
// Получить текст выбранного option
const mainFormSelectText = mainFormSelect.options[mainFormSelectIndex].text;
console.log(mainFormSelectText);
*/

/*
Элементы <option> имеют свойства:
//Выбрана ли опция.
option.selected
//Номер опции среди других в списке <select>.
option.index
//Содержимое опции (то, что видит посетитель).
option.text
*/

// const mainForm = document.forms.main;
// const mainFormSelect = mainForm.nameSelect;

// Выбрать некий option
// mainFormSelect.options[1].selected = true;
// mainFormSelect.selectedIndex = 1;
// mainFormSelect.value = 2;

// Вопрос - почему нельзя изменить options.text в данном случае?

// Добавить новую опцию
// new Option
// option = new Option(text, value, defaultSelected, selected);


// Параметры:

/*
text – текст внутри <option>,
value – значение,
defaultSelected – если true, то ставится HTML - атрибут selected,
selected – если true, то элемент <option> будет выбранным.

Тут может быть небольшая путаница с defaultSelected и selected.
Всё просто: defaultSelected задаёт HTML - атрибут,
его можно получить как option.getAttribute('selected'),
а selected – выбрано значение или нет,
именно его важно поставить правильно.
Впрочем, обычно ставят оба этих значения
в true или не ставят вовсе(т.е.false).
*/


// const mainForm = document.forms.main;
// const mainFormSelect = mainForm.nameSelect;

// Пример
/* 
let newOption = new Option("100", "4", true, true);
mainFormSelect.append(newOption);
*/


//---

// Работа c select и option
// const mainForm = document.forms.main;
// const mainFormSelect = mainForm.nameSelect;

// Мультивыбор

// получаем все выбранные значения из select с multiple
/* 
let selectedOptions = Array.from(mainFormSelect.options)
	.filter(option => option.selected)
	// .map(option => option.text);
	.map(option => option.value);

console.log(selectedOptions);
*/

//=============================================

// События форм и их элементов

// Фокусировка focus и blur
/*
Элемент получает фокус (focus), когда пользователь кликает по нему
или использует клавишу Tab.
Также существует HTML - атрибут autofocus, который устанавливает
фокус на элемент, когда страница загружается.
Есть и другие способы получения фокуса.

Фокусировка обычно означает:

«приготовься к вводу данных на этом элементе»,
это хороший момент, чтобы инициализовать или загрузить что-нибудь.

Момент потери фокуса (blur) - это момент,
когда пользователь кликает куда-то ещё или нажимает Tab,
чтобы переключиться на следующее поле формы.
Есть другие способы (причины) потери фокуса.

В момент события "потеря фокуса" мы можем выполнить
проверку введённых данных или даже отправить
эти данные на сервер (т.е. отправить форму) и так далее.
*/

// ----

// Cобытия focus и blur
/* 
const mainForm = document.forms.main;
const mainFormInput = mainForm.nameInput;
const mainFormTextarea = mainForm.nameTextarea;

const mainFormInputPlaceholder = mainFormInput.placeholder;
const mainFormTextareaPlaceholder = mainFormTextarea.placeholder;

mainFormInput.addEventListener("focus", function (e) {
	mainFormInput.placeholder = "";
});
mainFormInput.addEventListener("blur", function (e) {
	mainFormInput.placeholder = mainFormInputPlaceholder;
});

mainFormTextarea.addEventListener("focus", function (e) {
	mainFormTextarea.placeholder = "";
});
mainFormTextarea.addEventListener("blur", function (e) {
	mainFormTextarea.placeholder = mainFormTextareaPlaceholder;
});
*/

/*
Действия могут быть самыми разными:
валидация поля, отправка формы и т.д.
*/

// ----


// Методы elem.focus() и elem.blur()
// устанавливают или снимают фокус.
/* 
const mainForm = document.forms.main;
const mainFormInput = mainForm.nameInput;
const mainFormTextarea = mainForm.nameTextarea;

mainFormInput.focus();

setTimeout(() => {
	mainFormInput.blur();
}, 3000);

mainFormTextarea.focus();

setTimeout(() => {
	mainFormTextarea.blur();
}, 3000);
*/

// ----

/*
Фокусировка на любом элементе с помощью tabindex

Многие элементы по умолчанию не поддерживают фокусировку.
Какие именно – зависит от браузера, но одно всегда верно:
поддержка focus/blur гарантирована для элементов,
с которыми посетитель может взаимодействовать:
<button>, <input>, <select>, <a> и т.д.

С другой стороны, элементы форматирования
<div>, <span> – по умолчанию не могут получить фокус.

Метод elem.focus() не работает для них,
и события focus/blur никогда не срабатывают.

Это можно изменить HTML-атрибутом tabindex.
*/

/*
tabindex = "0" ставит элемент в один ряд
с элементами без tabindex. То есть, при переключении
такие элементы будут после элементов с tabindex ≥ 1.
Обычно используется, чтобы включить фокусировку на элементе,
но не менять порядок переключения.Чтобы элемент мог
участвовать в форме наравне с обычными <input>.

tabindex="-1" позволяет фокусироваться на элементе только программно.
Клавиша Tab проигнорирует такой элемент,
но метод elem.focus() будет действовать.
*/

/*
const lesson = document.querySelector('.lesson');

// Реагируем на событие "в фокусе"
lesson.addEventListener("focus", function (e) {
	lesson.classList.add('_focus');
	console.log('Див lesson в фокусе!');
});
// Реагируем на событие "потеря фокуса"
lesson.addEventListener("blur", function (e) {
	lesson.classList.remove('_focus');
});
*/

// ---

/*
Текущий элемент с фокусом можно получить
из document.activeElement.
*/
//console.log(document.activeElement);

// ---

// События focusin и focusout
// Работают также как и focus/blur но при этом всплывают

// const mainForm = document.forms.main;

// Хотим установить фокус на форме при работе с элементами
/*
mainForm.addEventListener("focusin", function (e) {
	mainForm.classList.add('_active');
});
*/
// Споймать на этапе погружения
//, { "capture": true }


//---------------------

// Событие change
// Срабатывает по окончании изменения элемента.

/*
В текстовых input и textarea работает также как
и блур (потеря фокуса), но в select, radio, checkbox и т.д. сразу при изменении данного поля
*/
/* 
const mainForm = document.forms.main;
const mainFormInput = mainForm.nameInput;
const mainFormSelect = mainForm.nameSelect;
const mainFormFile = mainForm.nameFile;

mainFormInput.addEventListener("change", function (e) {
	console.log('Сработало change в input');
});
mainFormSelect.addEventListener("change", function (e) {
	console.log('Сработало change в select');
});
mainFormFile.addEventListener("change", function (e) {
	console.log('Сработало change в file');
});
*/

//---------------------

// Событие input
/*
Событие input срабатывает каждый раз при изменении значения поля.
Отлично работает с полями ввода.
В отличие от событий клавиатуры, оно работает
при любых изменениях значений, даже если они
не связаны с клавиатурными действиями:
вставка с помощью мыши или распознавание речи при диктовке текста.
Но не срабатывает или просто перемещать курсор.
*/
/* 
const mainForm = document.forms.main;
const mainFormInput = mainForm.nameInput;
const mainFormTextarea = mainForm.nameTextarea;

mainFormInput.addEventListener("input", function (event) {
	console.log(`value: ${mainFormInput.value}`);
});

mainFormTextarea.addEventListener("input", function (event) {
	console.log(`value: ${mainFormTextarea.value}`);
});
*/


//---------------------

// События cut, copy, paste
// Эти события происходят при вырезании/копировании/вставке данных.

/*
const mainForm = document.forms.main;
const mainFormInput = mainForm.nameInput;

mainFormInput.addEventListener("copy", function (event) {
	console.log(`Копируем`);
});
mainFormInput.addEventListener("paste", function (event) {
	console.log(`Вставляем`);
});
mainFormInput.addEventListener("cut", function (event) {
	console.log(`Вырезаем`);
});
*/
/*
mainFormInput.addEventListener("paste", function (event) {
	console.log(`Нельзя вставить`);
	event.preventDefault();
});
*/

//---------------------

// Отправка формы - событие и метод submit 
/*
При отправке формы срабатывает событие submit,
оно обычно используется для проверки (валидации)
формы перед её отправкой на сервер или для
предотвращения отправки и обработки её с помощью JavaScript.
*/
/*
Есть два основных способа отправить форму:
1) нажать кнопку <input type="submit"> или <button type="submit"></button>.
2) нажать Enter, находясь на каком-нибудь поле.
*/
/*
const mainForm = document.forms.main;
const mainFormInput = mainForm.nameInput;

mainForm.addEventListener("submit", function (event) {
	console.log('Форма отправляется...');

	// Проверяем поля и если есть ошибки отменяем отправку
	if (!mainFormInput.value) {
		console.log('Поле nameInput не заполнено');
		event.preventDefault();
	}
});
*/

//---------


// События форм и их элементов

// Отправка формы - событие и метод submit
/*
Чтобы отправить форму на сервер вручную,
мы можем вызвать метод form.submit().
*/
/*
const mainForm = document.forms.main;
const mainFormInput = mainForm.nameInput;

// Отправляем форму при потере фокуса у nameInput
mainFormInput.addEventListener("blur", function (e) {
	mainForm.submit();
});
*/


//========================================================================================================================================================

// Практические примеры:

/* 
// Проверяем ввод email, выводим ошибку
const mainForm = document.forms.main;
const mainFormInput = mainForm.nameInput;

mainForm.addEventListener("submit", function (event) {
	if (emailTest(mainFormInput)) {
		mainFormInput.parentElement.insertAdjacentHTML(
			"beforeend",
			`<div class="main-form__error">
				Введите email
			</div>`
		);
		event.preventDefault();
	}
});

mainFormInput.addEventListener("focus", function (event) {
	if (mainFormInput.nextElementSibling) {
		mainFormInput.nextElementSibling.remove();
	}
});

//Функция теста email
function emailTest(input) {
	return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}
*/

// Уделить особое внимание регулярным выражениям (заЮтубить)

// ----

// Практические примеры (второй):

/*
// Выводим картинку после выбора
const mainForm = document.forms.main;
const mainFormFile = mainForm.nameFile;

mainFormFile.addEventListener("change", function (e) {
	let selectedFile = mainFormFile.files[0];

	// Получаем URL изображения
	let fileUrl = URL.createObjectURL(selectedFile);

	mainFormFile.parentElement.insertAdjacentHTML(
		"beforeend",
		`<div class="main-form__image">
			<img alt="" title="${selectedFile.name}" src="${fileUrl}">
		</div>`
	);
});
*/


//========================================================================================================================================================
//========================================================================================================================================================
//========================================================================================================================================================
//========================================================================================================================================================

// Ссылки с практикой:

// 👉 Файлы урока - https://fls.guru/files/tutorials/js/j...
// 👉 Отправка формы на почту. Верстка валидация и отправка формы без перезагрузки. AJAX. PHPMailer: https://www.youtube.com/watch?v=PqTrh...
// 👉 Плейлист "Как это сделать?" - https://www.youtube.com/playlist?list...
// 🤟 БЕСПЛАТНЫЙ курс по верстке сайтов (HTML, CSS, JavaScript): https://www.youtube.com/playlist?list...