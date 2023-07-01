'use strict'
// ======O(n) -linear complexy
// ========find a number================================
const arrNumber = [];
let start = Date.now();
let arrSortNumb = [];
const limit = 1e7;
const value = 5000;
const createArrNumber = (limit) => {
  for(let i = 0; i < limit; i++) {
    arrNumber.push(Math.round(Math.random() * 10000));
  }
  console.log(`Create array for ${Date.now() - start} ms`);
  return arrNumber;
}
createArrNumber(limit);

arrSortNumb = arrNumber.sort((a, b) => a - b); 

const linearSearch = (arr, value) => {
	for (let i = 0; i < arr.length; i++) {
		if (value === arr[i]) {
			console.log(`Find number for ${Date.now() - start} ms`);
			return i;
		}
	}
	return -1;
};
// console.log(linearSearch(arrSortNumb, value));
// =====O(logn)
const binarySearch = (arr, value) => {
	let beginning = 0;
	let end = arr.length - 1;
	let middle;

	while (beginning <= end) {
		middle = Math.round((beginning + end) / 2);

		if (arr[middle] === value) {
      console.log(`Find number by binary for ${Date.now() - start} ms`);
			return middle;
		}

		if (arr[middle] > value) {
			end = middle - 1;
		} else {
			beginning = middle + 1;
		}
	}
	return -1;
};

console.log(binarySearch(arrSortNumb, value));