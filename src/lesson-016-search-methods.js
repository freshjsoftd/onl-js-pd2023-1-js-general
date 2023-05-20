'use strict';
// -----------forEach ----------
function myForEach(arr, callback, thisArg) {
	for (let i = 0; i < arr.length; i++) {
		callback.call(thisArg, arr[i], i, arr);
	}
}
const arrBrand = ['Donic', 'Stiga', 'DHS', 'Xiom'];
myForEach(arrBrand, (el, i) => console.log(`${el} is number ${i + 1}`));
// --------------map-------------------
function myMap(arr, callback, thisArg) {
	const result = [];
	for (let i = 0; i < arr.length; i++) {
		result.push(callback.call(thisArg, arr[i], i, arr));
	}
	return result;
}
const numbArray = [10, 20, 30];
console.log(myMap(numbArray, el => el / 2));
// ------------some--------------------------------
function mySome(arr, callback, thisArg) {
	for (let i = 0; i < arr.length; i++) {
		if (callback.call(thisArg, arr[i], i, arr)) {
			return true;
		}
	}
	return false;
}
// ---------------filter --------------------
function myFilter(arr, callback, thisArg) {
	const result = [];
	for (let i = 0; i < arr.length; i++) {
		if (callback.call(thisArg, arr[i], i, arr)) {
			result.push(arr[i]);
		}
	}
	return result;
}
console.log(myFilter(numbArray, el => el % 3 === 0));
// -------------reduce-------------------
function myReduce(arr, callback, startValue) {
	let result;
  let index = arr.length - 1;
	if (startValue) {
		result = startValue;
		for (let i = 0; i < arr.length; i++) {
			result = callback(result, arr[i], i, arr);
		}
	} else {
		result = arr[0];
		for (let i = 0; i < arr.length-1; i++) {
			result = callback(result, arr[i + 1], i, arr);
		}
	}
	return result;
}
const arrArr2 = [
	[0, 1],
	[2, 3],
	[4, 5],
];
// numbArray;

console.log(myReduce(arrArr2, (a, b) => a.concat(b)));
console.log(myReduce(numbArray, (a, b) => a + b));
