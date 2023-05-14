'use strict';
// Math
console.log(Math.abs(-20));
console.log(Math.ceil(20.005));
console.log(Math.floor(20.999));
console.log(Math.round(20.45));
console.log(Math.max());
console.log(Math.min(20, 30, 1));
console.log(Math.pow(2, 64));
console.log(Math.random());
function getRandom(min, max){
  return Math.round(Math.random() * (max - min) + min);
}
console.log(getRandom(10, 100));
// Date
console.log(new Date());
console.log(new Date().toLocaleDateString());
console.log(Date.now());
console.log(Date.now());
console.log(Date.parse('1985-11-05'));
