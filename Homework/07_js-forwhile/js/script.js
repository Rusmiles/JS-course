// выведите в консоль от 0 до 5
// всеми изученными способами

/* 
// Цикл WHILE
let num = 0;
while (num < 6) {
  console.log(num);
  num++;
}
*/

/* 
//Цикл DO...WHILE
let num = 1;
do {
  console.log(num);
  num++;
} while (num < 6);
*/

/* 
// Цикл FOR
// убрать любую часть цикла
// 1 пример
let num = 1;
for (; num < 6; num++) {
  console.log(num);
}
*/
/* 
let num = 0;
for (; num < 5; ) {
  num++;
  console.log(num);
}
*/

/*
// "встроенное объявление переменной"
for (let num = 1; num < 6; num++) {
  console.log(num);
}
*/

/* 
// Существующая переменная
let num;
for (num = 1; num < 5; num++) {
  console.log(num);
}
console.log(`Вывод вне цикла: ${num}`);
*/

/* 
// Директива BREAK/CONTINUE
let num = 1;
for (; num < 43; num++) {
  console.log(num);
  if (num == 5) break;
}
console.log(`Остановить, num = ${num}`);
*/

/* 
let num = 0;
for (; num < 6; num++) {
  if (num == 0) continue;
  console.log(num);
}
*/

/* 
// Метка FIRST FOR
firstFor: for (let num = 0; num < 1; num++) {
  for (let size = 1; size < 6; size++) {
    if (size == 6) {
      continue firstFor;
    }
    console.log(size);
  }
}
*/

/* 
//Задача №3. Переписать на while [!переписал!]
let num = 0;
while (num < 3) {
  console.log(`Число: ${num}`);
  num++;
}
*/

// Задача №4:
/* 
firstFor: for (let num = 0; num < 2; num++) {
  for (let size = 0; size < 3; size++) {
    console.log(size);
    if (size == 1) {
      break firstFor;
    }
  }
}
*/
