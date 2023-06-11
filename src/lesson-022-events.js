'use strict';
import * as proto from './lesson-017-prototype.js';
import getFactorial from './lesson-017-prototype.js';
// 1 way
function showText() {
	console.log('Text');
}
// 2 way
const secondPar = document.getElementById('secondP');
console.dir(secondPar);
// secondPar.onclick = function(){
//   console.log(`${this.onclick}`)
// }
secondPar.onclick = (e) => {
	console.log(e.target);
	console.log(this);
};
// secondPar.onclick = showText
// 3 way
const par3 = document.querySelector('#thirthP');
par3.addEventListener('click', showText, true);
par3.addEventListener('click', () => console.log('Another one par #3'));
par3.removeEventListener('click', showText);
// preventDefault
const btnCalculate = document.querySelector('.btn > button');
// console.log(btnCalculate)
// btnCalculate.addEventListener('click', (e) => {
//   e.preventDefault();
//   console.log('Another one')
// })
// =================================================================
// practice get rate
const winnerRate = document.getElementById('in1');
const loserRate = document.querySelector('#in2');
const span = document.querySelector('#new-rate');

// console.dir(loserRate)
let winRate;
let losRate;

function calculateWinRate(event) {
	event.preventDefault();
	winRate = Number(winnerRate.value);
	losRate = Number(loserRate.value);
	// console.log(winRate, losRate);
	span.textContent = proto.getNewRate(winRate, losRate);
}
btnCalculate.addEventListener('click', calculateWinRate);
console.log(getFactorial(5));
