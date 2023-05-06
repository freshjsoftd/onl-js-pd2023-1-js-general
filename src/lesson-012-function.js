'use strict';

/* const multTwo = (a) => a * 2;
console.log(multTwo(50, 70)); */

/* const summ = (a = 20, b = 5) => a / b;
console.log(summ()); */
/* function dev(a, b) {
  return (
  a / b
  )
}
console.log(dev(20, 5)); */

/* let brand = 'Stiga';
let ttBlade = 'Donic';
function changeArg(brand, ttBlade){
  brand = 'Butterfly';
  ttBlade = 'DHS';
  console.log(brand);
  console.log(ttBlade);
}

changeArg(brand, ttBlade);

console.log(brand);
console.log(ttBlade); */

function checkAge(age = 16) {
  if(typeof age !== 'number' && !Number.isNaN(age)) {
    return 'Enter number, please';
  }
	if (age < 18) {
		return 'You are too much young';
	}
	if (age >= 18) {
		return 'You are enough adult';
	}
}
console.log(checkAge(18));
