'use strict';
import span from './lesson-022-events.js';
//==========================
//Callback Hell
//==========================
/* setTimeout(function () {
      console.log('Its first callback');
      setTimeout(function () {
              console.log('Its second callback');
              setTimeout(function () {
                      console.log('Its third callback');
                      setTimeout(function () {
                              console.log('Its fourth callback');
                            }, 0)
                    }, 2000)
            }, 2000)
      }, 2000) */
// ================Promises===============
/* const promise = new Promise((resolve, reject) => {
	setTimeout(() => resolve('Is done'));
	// setTimeout(() => reject(new Error('Something went wrong')));
})
	.then((done) => {
		// getSTH();
		if (typeof done === 'string') throw new Error('It is a sting');
		console.log(done);
		return done + ' it all';
	})
	// .finally(() => console.log('This code will execute any way'))
	.then((done) => {
		// getSTH();
		console.log(done);
		return done + ' add something else';
	})
	.catch((err) => console.log(err));

console.log(promise); */
// =================Return from functions========================
/* function sum(a, b){
  return new Promise((resolve) => {
    const result =  a + b;
    resolve(result);
  })
}
const summ = sum(5, 20)
	.then((value) => `${value}$`)
	.then((str) => {
		console.log(str);
		return parseInt(str);
	})
	.then((value) => value * 4)
	.then((done) => {
    span.textContent = done
  });
console.log(summ); */
// ==============Static methods Promise =================
// ==============all()=================
// const prom1 = Promise.resolve(5);
// const prom2 = 2023;
// const prom3 = new Promise((resolve, reject) => {
//   // setTimeout(resolve('Donic'), 1000);
//   setTimeout(resolve, 1000, 'Donic');
// })
// const arrProm = [promise];
// console.log(prom1);
/* Promise.all(arrProm)
  .then((result) => console.log(result)) */
// ============allSettled()===========
// Promise.allSettled(arrProm).then((result) => console.log(result));
// ============race()===========
// Promise.race(arrProm).then((result) => console.log(result));
// ============any()===========
// Promise.any(arrProm).then((result) => console.log(result));
// =============async-await============
/* async function sum(a, b) {
	try {
		const result = a + b;
		const value = await Promise.resolve(result + 5);
		throw new Error('Invalid');
		const final = (await value) + ' end';
		return final;
	} catch (error) {
    console.log(error)
  }finally{
    console.log('This code will execute any way');
  }
}

console.log(sum(20, 10)); */
// ==========eventloop =================================
/* let i = 0;

let start = Date.now();

function count(){
  for (let j = 0; j < 1e9; j++) {
    i++;
  }
  console.log('Done in ' + (Date.now() - start) + 'ms')
}

count(); */
// ===============showProgress============================
let i = 0;
let start = Date.now();
function showProgress() {
	do {
		i++;
    // console.log('Done in ' + (Date.now() - start) + 'ms');
		progress.innerHTML = i;
	} while (i % 1e3 !== 0);

	if (i < 1e6) {
		setTimeout(showProgress);
		// queueMicrotask(showProgress);
	}
}

showProgress();