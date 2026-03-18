//push
let arr = [1, 2, 3];
arr.push(4);
console.log(arr); // Output: [1, 2, 3, 4]

//pop
arr.pop();
console.log(arr); // Output: [1, 2, 3]

//unshift
arr.unshift(0);
console.log(arr); // Output: [0, 1, 2, 3]

//shift
arr.shift();
console.log(arr); // Output: [1, 2, 3]  

//includes
console.log(arr.includes(2)); // Output: true

//indexOf
console.log(arr.indexOf(2)); // Output: 1

//slice
result=arr.slice(2,3);
console.log(result); // Output: [2]

//splice
arr.splice(1, 1);
console.log(arr); // Output: [1, 3] 


//map
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(function(num) {
  return num * num;
});
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25] 

//filter
const evenNumbers = numbers.filter(function(num) {
  return num % 2 === 0;
}); 
console.log(evenNumbers); // Output: [2, 4]

//reduce
const sum = numbers.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);
console.log(sum); // Output: 15

//some
const hasEvenNumber = numbers.some(function(num) {
  return num % 2 === 0;
});
console.log(hasEvenNumber); // Output: true

//every
const allEven = numbers.every(function(num) {
  return num % 2 === 0;
});
console.log(allEven); // Output: false

//forEach
numbers.forEach(function(num) {
  console.log(num);
});
/* Output:
1
2
3
4
5
*/