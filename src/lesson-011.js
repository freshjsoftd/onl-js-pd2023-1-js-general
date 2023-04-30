/* let a = 20;

a = a + 2;
a += 1;
 a /= 2;
a **= 2 
a++;
a--;
++a;
--a; 
console.log(50 + a--);
console.log(a) */
// console.log(50 + a++);

/* let year = Number(prompt('Enter a year'));
if (Number.isNaN(year) && year === 0){
  console.log('Enter number, please')
}else{
  if (year % 100 === 0) {
		if (year % 400 === 0) {
			console.log('This is a leap year');
		} else {
			console.log('This is not a leap year');
		}
	} else if (year % 4 === 0 && year > 4) {
		console.log('This is a leap year');
	} else {
		console.log('This is not a leap year');
	}
} */
let year = 2000;
// /* let year = Number(prompt('Enter a year'));
if (Number.isNaN(year) && year === 0) {
	console.log('Enter number, please');
} else {
	if ((year % 100 !== 0 || year % 400 === 0) && (year % 4 === 0 && year > 4)) {
		console.log('This is a leap year');
	} else {
		console.log('This is a not leap year');
	}
}
// let b = 0;
/* if(b && 10 && 12){
  console.log(true)
}else{
  console.log(false)
} */
// console.log(b && 12 && 'adsds');
/* console.log(b || 20);
console.log(b ?? 20); */
