//ДОМАШКА
/*
1. Изучить теорию
2. Решить задачи:
*/

// Задача №1 (верна ли запись)
/*
const userInfo = {
	name: "Вася"
	age: 30
}
*/
// ?Неверна, потому что не хватает запятой

// Задача №2 (что будет в консоли?)
/*
let userInfo = {
	name: "Вася",
	age: 30,
	"58": 'Значение свойства'
}
console.log(userInfo[58]);
 */
// *верно, т.к. имя свойста может быть заключено в кавычки

// Задача №3 (что будет в консоли?)
/*
let userInfo = {
	name: "Вася",
	age: 30
}
let user = userInfo;
user.age = 45;

console.log(userInfo.age);
 */
// *В консоли будет только age

// Задача №4 (что будет в консоли?)
/*
let userInfo = {
	name: "Вася",
	age: 30,
	showInfo() {
		console.log(`${this.name}`);
	}
}
let user = userInfo;
userInfo = null;
user.showInfo();
 */
//*В консоли отобразится только name, поскольку через точку вызывается только оно

// Задача №5 (что будет в консоли?)
/*
let userInfo = {
	name: "Вася",
	age: 30,
}
for (const key in userInfo) {
	const value = userInfo[key];
	console.log(value);
}
 */
//*В консоли выведутся только значения свойств (или ключей):"Вася", 30; т.к. в цикле for..in - имя объекта и ключ в [] означает вывод значений свойств

// Задача №6 (что будет в консоли?)
/*
let userInfo = {
	name: "Вася",
	age: 30,
	address: {
		city: "Uzhhorod"
	}
}
for (const key in userInfo.address) {
	console.log(userInfo.address[key]);
}
 */
//*Консоль выдаст ошибку, т.к. не хватает закрывающей фигурной скобки в конце объекта userInfo

// Задача №7 (верна ли запись)
/*
const userInfo = {
	name: "Вася",
	age: 30,
	"likes js": true
}
console.log(userInfo."likes js");
*/
//*Неверна, т.к. перед значением в кавычках не должно быть точки и словосочетание нужно обернуть в квадратные скобки:
// [console.log(userInfo["likes js"])

// Задача №8
/*
1.Создайте пустой объект userInfo.
2.Добавьте свойство name со значением Вася.
3.Добавьте свойство age со значением 30.
4.Измените значение свойства name на Лена.
5.Удалите свойство name из объекта.
*/

/* 
let userInfo = {
	name: "Вася",
	age: 30
}

userInfo.name = "Лена"
console.log(userInfo)

delete userInfo.name
console.log(userInfo)
 */