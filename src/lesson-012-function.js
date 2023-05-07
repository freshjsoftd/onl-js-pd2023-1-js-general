'use strict';

/* function create(a, b){
  return a + b;
}
console.log(create(20, 30, 50, 40)); */
/**
 * 
 * @param {number} a first operator
 * @param {number} b second operator
 * @returns {number} Result a + b
 */
/* function summ(a, b){
  return a + b;
}
summ(10, 20) */
/* 2-е задание с практики по циклам выполнить в виде функции, которая принимает в качестве 
        аргументов количество шаров, толщину стенки в м. и диаметр шара в м.
        А возвращает объем в литрах. */

/* 
Напишем функцию, которая вычисляет через сколько лет (или сколько лет назад) отец будет вдвое 
старше сына.
   Разница в возрасте не должна быть меньше 15 лет. Возрат не может быть отрицательным. 
   Проверки на NaN не делаем. 
   Добавить документацию для нашей функции
 */
/**
 *
 * @param {number} sonAge
 * @param {number} fatherAge
 * @returns {number} year when father was/will be twofold older than son
 */
const ageTwoFold = (sonAge, fatherAge) => {
	let result = 0;
	if (fatherAge - sonAge < 15 || sonAge <= 0) {
		return 'You entered wrong information';
	}
  if(fatherAge / sonAge === 2){
    return result;
  }
  if (fatherAge / sonAge > 2) {
		while (fatherAge / sonAge !== 2) {
			fatherAge++;
			sonAge++;
			result++;
		}
		return result;
  }
  while (fatherAge / sonAge !== 2) {
		fatherAge--;
		sonAge--;
		result++;
  }
  return -result;
}
console.log(ageTwoFold(20, 36));