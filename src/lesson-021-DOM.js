'use strict';
const body = document.body;
const divContainer = document.createElement('div');
const uList = document.createElement('ul');
const list1 = document.createElement('li');
const list2 = document.createElement('li');
const list3 = document.createElement('li');
const par1 = document.createElement('p');
const par2 = document.createElement('p');
const par3 = document.createElement('p');

par1.textContent = '1 par';
par2.innerText = '2 par';
par3.innerHTML = '3 par';

divContainer.className = 'container';
body.append(divContainer);
divContainer.append(uList);
uList.append(list1, list2, list3);
list1.append(par1);
list2.append(par2);
list3.append(par3);





/* document.body.style.background = 'teal';
// console.log(window.innerHeight);
const bodyChildNodes = document.body.childNodes;
const bodyChildren = document.body.children;
const container = document.getElementById('container');
// console.log(bodyChildNodes);
// console.log(bodyChildren);
// console.log(bodyChildren[1].previousElementSibling);
// console.log(container);
// console.log(secondP);
const paragraphs = document.querySelectorAll('p');
// console.log(paragraphs);
const newPar = document.createElement('p');
console.log(newPar);
newPar.innerHTML = '<span>Six</span>';
// newPar.textContent = 'Six Par';

console.log(container.children);
container.appendChild(newPar);
newPar.className = 'par item';
let classList = newPar.classList;
classList.toggle('six');
classList.toggle('six');
classList.toggle('six');
console.log(classList);
// console.log(container.removeChild(newPar)); */