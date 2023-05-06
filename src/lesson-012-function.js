'use strict';
/* console.log(summ(10, 20));
// Function Declaration
function summ(a, b){
  return a + b;
}
console.log(summ(3, 5))

// Function Expression
const devide = function(a, b){
  return a / b;
}
console.log(devide(10, 20)); */
let age = 15;
let welcome;
if (age < 18) {
  // welcome();
	// function welcome() {
	// 	console.log('You are too much young');
  welcome = function(){
    console.log('You are too much young');
  }
	// }
} else {
	// function welcome() {
	// 	console.log('You are enough adult');
	// }
  welcome = function () {
		console.log('You are enough adult');
  }
}
welcome();
