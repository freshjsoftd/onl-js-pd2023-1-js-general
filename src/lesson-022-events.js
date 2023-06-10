'use strict';
function showText(){
  console.log('Text')
}
const secondPar = document.getElementById('secondP');
console.dir(secondPar);
// secondPar.onclick = function(){
//   console.log(`${this.onclick}`)
// }
secondPar.onclick = () =>{
  console.log(this)
}
// secondPar.onclick = showText
