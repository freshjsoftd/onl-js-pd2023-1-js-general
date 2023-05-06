'use strict';
/* Найти сумму всех целых чисел от a до 100.
       Значение a вводится из браузера (prompt).
       a должно быть ≤ 100 и > 0.
       Сумму вывести в консоль. 
       Нужна проверка на number. */
/* let a = Number(prompt('Enter a number'));
let result = 0;
// debugger
if (Number.isNaN(a) || a < 0) {
	console.log('Enter wrong number');
} else {
	for (; a <= 100; a++) {
		result += a;
	}
	console.log(result);
} */

/* Определить суммарный объем в литрах двенадцати вложенных 
друг в друга шаров со стенками 
толщиной 10 мм. Внутренний диаметр внутреннего шара равен 50 см. 
Принять, что шары 
вкладываются друг в друга без зазоров. 4/3*PI*rad**3 */
/* console.log(Math.PI);
const PI = Math.PI;
console.log(PI.toPrecision(2)); */
/* let res = 0;
let radius = 0.5 / 2;
for (let i = 0; i < 12; i++) {
	const thickness = 0.01;
	let volume = (4 / 3) * Math.PI * radius ** 3;
	radius += thickness;
	res += volume;
}
console.log(res.toPrecision(5)); */

