'use strict';

let strForReg = 'Stiga';
let reg = /(log){2,3}/i;
let reg1 = new RegExp(strForReg, 'gim');
const str = 'MaLong';
const str2 = 'Trololooo Trolololooo Trololooooo Trololoo';
//
console.dir(reg);
console.dir(reg1);
// search()
// console.log(str2.search(reg));
// match()
console.log(str2.match(reg));
// replace()
let str3 = 'Donic Stiga DHS TSP Bonic';
console.log(str3.replace(/\W/gi, '%'));
// test()
console.log(reg.test(str2));
// console.log(reg.test(str2));
// console.log(reg.test(str2));
// console.log(reg.test(str2));
// console.log(reg.test(str2));
// console.log(reg.test(str2));
// console.log(reg.test(str2));
// console.log(reg.test(str2));
// console.log(reg.test(str2));
// console.log(reg.test(str2));
// console.log(reg.test(str2));
// console.log(reg.test(str2));
// exec()
console.log(reg.exec(str2));
console.log(reg.exec(str2));
// console.log(reg.lastIndex);

const password = '259fldffdfdsd_';
// debugger
function checkPassword(password) {
	const reg = /^\w{8,15}$/gi;
	if (reg.test(password)) {
		return `${password} is valid password`;
	}else
	return `${password} is not valid password`;
}

console.log(checkPassword(password));

let initialText = '<img src= "picture.jpg" />';
let exp = /[a-z]+\.(png|jpg)/i;
let result = initialText.match(exp);
result.forEach(value => {
	console.log(value);
});
console.log(result);

// Getting groups value
const exp1 = /(\d{4})-(\d{2})-(\d{2})/;
const result1 = exp1.exec("2021-09-06");

console.log(result1);

console.log(result1[0]); // 2021-09-06
console.log(result1[1]); // 2021
console.log(result1[2]); // 09
console.log(result1[3]); // 06
console.log(`${result1[3]}.${result1[2]}.${result1[1]}`); // 06.09.2021

//Naming Groups
const exp2 = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/u;
const result2 = exp2.exec("2021-09-06");

console.log(result2);
console.log(result2.groups);         // {year: "2021", month: "09", day: "06"}
console.log(result2.groups.year);    // 2021
console.log(result2.groups.month);   // 09
console.log(result2.groups.day); 
console.log(
	`${result2.groups.day}.${result2.groups.month}.${result2.groups.year}`
);    // 06
