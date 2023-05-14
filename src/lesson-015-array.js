'use strict';
/* let numb = 3025512.55822547444;
console.log(Number('12'));
console.log(Date.now().toExponential(2));
console.log(numb.toPrecision(6)); */
// String
let sams = '  Samsung Galaxy  ';
let xiomi = 'Mi Pro 11T';
let together = sams.concat(' ', xiomi, ' Nokia');
let sliceStr = together.slice(3, 10);
let url = 'http://localhost:5501/';
let arrStr = together.split('', 20)
let subStr = together.substring(3, 8)
let samsGap = '  Samsung Galaxy  ';
console.log(sams.length);
console.log(sams[6]);
console.log(sams.charAt(6));
console.log(sams.charCodeAt(6));
console.log(together);
console.log(together.includes('Nok', 20));
console.log(together.indexOf('o'));
console.log(together.lastIndexOf('o'));
console.log(sams.repeat(3));
console.log(sliceStr);
console.log(url.slice(url.indexOf('/')+2, url.lastIndexOf(':')));
console.log(arrStr)
console.log(subStr);
console.log(together);
console.log(together.toUpperCase());
console.log(together.toLowerCase());
console.log(together);
console.log(samsGap.trim());

