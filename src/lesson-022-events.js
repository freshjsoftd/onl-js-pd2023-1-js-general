'use strict';
// 1 way
function showText(){
  console.log('Text')
}
// 2 way
const secondPar = document.getElementById('secondP');
console.dir(secondPar);
// secondPar.onclick = function(){
//   console.log(`${this.onclick}`)
// }
secondPar.onclick = () =>{
  console.log(this)
}
// secondPar.onclick = showText
// 3 way
const par3 = document.querySelector('#thirthP');
par3.addEventListener('click', showText, true)
par3.addEventListener('click', () => console.log('Another one par #3'))
par3.removeEventListener('click', showText)