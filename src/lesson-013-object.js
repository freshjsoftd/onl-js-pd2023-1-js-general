'use strict';
let address = 'Dnipro';
const user = {
	fName: 'Jhon',
	lName: 'Doe',
	age: 30,
	address,
	isMarried: true,
	'home address': 'hhh',
	// say: function(){
	//   console.log('Hi everybody')
	// }
	say() {
		console.log('Hi everybody');
	},
};
console.log(user);
// ====================
function setTitle(rate, lastName) {
	let title;
	if (rate >= 60) {
		title = 'Мастер';
	} else if (rate >= 40) {
		title = 'КМС';
	} else {
		title = 'Разряд';
	}
	const sportsman = {
		[title]: rate,
		lastName,
	};
	console.log(title in sportsman);
	return sportsman;
}
console.log(setTitle(30, 'Jhon'));
user.say();

/* Создайте объект car со свойствами: brand, model, year of relise,
 transmition, isWell, color, run()
   run() создать при помощи FunctionDeclaration
 */
// console.log('home' in user);
for (const item in user) {
	console.log(`${item}: ${user[item]}`);
}
/* Напишите функцию isEmpty(obj), которая возвращает true,
 если у объекта нет свойств, иначе false. */

 const obj = {};
 function isEmpty(obj) {
		for (let key in obj) {
			return false;
		}
		return true;
 }
 console.log(isEmpty(user));

 /* Создайте функцию multiplyNum(obj), которая умножает 
    все числовые свойства объекта price на 2 и 
    затем выведите в консоле список такого вида key: value. 
    Объект price - счет в ресторане, 5 
    числовых свойств, одно boolean и одно string */
    const price = {
		tea: 20,
		coffee: 30,
		meal: 50,
		onion: 10,
		waiter: 'Jhon Doe',
		isPaid: false,
	};
  function multBill(bill){
    for (const key in bill) {
      if(typeof bill[key] === 'number'){
        bill[key] = bill[key] * 2;
      }
    }
  }
  multBill(price);
  for(const key in price){
    console.log(`${key} : ${price[key]}`)
  }