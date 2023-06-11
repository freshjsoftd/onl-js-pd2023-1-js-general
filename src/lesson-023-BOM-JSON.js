/* Вернуть массив состоящий из наибольших чисел из каждого подмассива. Отсортировать по возрастанию.
        [
        [1,2,3,4]
        [5,18,0,12]
        [3,5,12,5]
        [28,9,2,34]
            ] */
/* const matrix = [[1, 2, 3, 4], [5, 18, 0, 12], [3, 5, 12, 5], [28, 9, 2, 34]];
const result = matrix.map((array) => Math.max(...array)).sort((a, b) => a - b);
const result1 = matrix.map((array) => array.sort((a, b) => a - b)[array.length-1]).sort((a, b) => a - b);
console.log(result);
console.log(result1); */
/* Написать функцию, возвращающую все заданные свойства из массива объектов, экземпляров класса Person.
    Массив и имя свойства передаются как аргументы.
    Конструктор Person имеет свойства name, age and salary. Создать три экземпляра этого класса. 
    Создать массив из них. */
/* class Person {
	constructor(name = 'Jhon', age = 30, salary = 1000) {
		this.name = name;
		this.age = age;
		this.salary = `${salary}$`;
	}
}
const jhon = new Person();
const julia = new Person('Julia', 25, 2000);
const bill = new Person('Bill', 35, 3000);

const arrPerson = [jhon, julia, bill];

const getPersonProps = (arr, propName) => {
	arr.forEach((person) => console.log(person[propName]));
};
getPersonProps(arrPerson, 'salary');

for(let i = 0; i < arrPerson.length; i++) {
  console.log(arrPerson[i]['salary']);
}
for (const person of arrPerson) {
  console.log(person['salary']);
} */
/* Написать функцию, принимающую в аргументы фразу и возвращающую эту фразу, но без пробелов. 
    Использовать RegExp. */
/* function deleteGaps(str){
  const regExp = /\s/g;
  return str.replace(regExp, '')
}
console.log(deleteGaps('I like JavaScript')); */
