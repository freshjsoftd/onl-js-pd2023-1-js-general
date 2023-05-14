'use strict';
const arr1 = [10, 1, 2];
const arr2 = Array(10);
// console.log(arr1)
const fruits = ['Apple', 'Orange', 'Pear', 'Peach', 'Pineapple', 'Plum'];
arr1[0] = 10;
fruits[6] = 'Cherry';
// console.log(arr1[0]);
// delete arr1[1];
// console.log(arr1)
// console.log(fruits);
// Push
console.log(fruits.push('Lemon', 'Banana', 'Strawberry'));
// console.log(fruits);
// Pop
console.log(fruits.pop());
// console.log(fruits);
// Shift
console.log(fruits.shift());
// console.log(fruits);
// Unshift
console.log(fruits.unshift('Pineapple', 'Strawberry', 'Melon'));
// console.log(fruits);
// At
// console.log(fruits.at(-3));
// console.log(fruits[fruits.length - 1]);
// concat
const concatArr = fruits.concat(arr1, ['DHS', 'TSP']);
// console.log(concatArr);
// fill
// console.log(arr2);
// console.log(arr2.fill('Donic'));
// Flat
const arr3 = [1, [2, 3], 4, [5, 6, [7, 8, [9, 10]]]];
console.log(arr3.flat(Infinity));
// Includes
console.log(concatArr.includes('DHS'));
// indexOf
console.log(Array.isArray(concatArr));
console.log(concatArr instanceof Object);
// join
console.log(concatArr.join(' '));
console.log(arr1.join());
// reverse
console.log(arr1.reverse());
// slice
console.log(concatArr.slice(5, 10));
// sort
console.log(arr1.sort((a, b) => a - b));
console.log(arr1.sort((a, b) => b - a));
console.log(fruits.sort());
// splice
console.log(concatArr.splice(11, 0, 'Watermelon'));
console.log(concatArr);
/* Написать функцию, которая будет разворачивать строку наоборот. Строка принимается в аргументы. Также в 
  аргументы можно принимать необходимые данные для работы функции. Использовать методы строк и массивов */
const str1 = 'Montenegro';
const str2 = 'Kyev City';
const reverseStr = (str, separator) => str.split(separator).reverse().join(separator);
console.log(reverseStr(str1, ''));
console.log(reverseStr(str2, ' '));

