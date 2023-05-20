'use strict';
// find, findIndex
const arr1 = [1, 2, 4, 8, 11, 15];
const arr2 = ['Donic', 'Stiga', 'DHS', 'TSP'];
const arr3 = [{ name: 'Bob' }, { name: 'Jhon' }, { name: 'Bill' }];
// console.log(arr1.find((el) => el % 3 === 0))
// console.log(arr3.find(el => el.name === 'Bill'));

// console.log(arr1.findLastIndex((el) => el % 2 === 0))
// forEach
// arr2.forEach(el => console.log(el));
/* arr1.forEach((el, index, arr) => {
  arr[index] = el * 10;
}) */
// console.log(arr1);
// map
const arr4 = ['1', '2', '3', '4', '5', '6'];

function parseToInt(el){
  return parseInt(el)
}
const intArr = arr4.map(el => el);
// const arr10 = intArr;
// console.log(arr10 === intArr);
// console.log(arr4 === intArr);
// console.log(intArr);
// console.log(arr2.map((el, i) => `${el} is #${i+1} in the world`));
// some-every
// console.log(arr1.every(el => typeof el === 'number'));
// console.log(arr1.some(el => el % 2 === 0));
// filter
const filteredArr = arr3.filter(el => el.name == 'Jhon');
// console.log(filteredArr);
// reduce
/* 
array.reduce(callback, [initialValue]);
callback(accum, currentValue, i, arr)
if(initialValue){
  accum = initialValue;
  currentValue = arr[0];
}else{
  accum = arr[0];
  currentValue = arr[1]
}
 */
console.log(arr1.reduce((a, b) => a + b))
const arrArr = [
	[0, 1],
	[2, 3],
	[4, 5],
];
console.log(arrArr.reduce((a, b) => a.concat(b)));