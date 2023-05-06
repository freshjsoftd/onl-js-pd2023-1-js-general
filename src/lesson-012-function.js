'use strict';

// Calculator
const summ = (a, b) => a + b;
const sub = (a, b) => a - b;
const div = (a, b) => a / b;
const mult = (a, b) => a * b;

const calculate = function (oper1, oper2, mathOperation) {
  let operation;
  switch(mathOperation){
    case '+': {
      operation = summ;
      break;
    }
    case '-': {
      operation = sub;
      break;
    }
    case '/': {
      operation = div;
      break;
    }
    case '*': {
      operation = mult;
      break;
    }
    default: console.log('Unknown operation')
  }
  if(typeof operation === 'function'){
    return operation(oper1, oper2);
  }
  return 'Entered wrong math operation';
}

const userNumb1 = Number(prompt('Enter first number'));
const userNumb2 = Number(prompt('Enter second number'));
const mathOperation = prompt('Enter math operation');

const result = calculate(userNumb1, userNumb2, mathOperation);
console.log(result);

