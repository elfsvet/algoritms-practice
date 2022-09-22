/*
[2,3,4,5].at(1)         // 3 ,  returns you the element with index 1.
[2,3,4,5].pop()         // [2,3,4] ,  removes the last element.
[2,3,4,5].push(6)       // [2,3,4,5,6] ,  adds the element at the last position.
[2,3,4,5].fill(1)       // [1,1,1,1] , fills all the array values.
[2,3,4,5].join('-')     // '2-3-4-5' , concatinates all the elements with the char passed in arg.
[2,3,4,5].shift()       // [3,4,5] , deletes the first element.
[2,3,4,5].reverse()     // [5,4,3,2] , reverses the array.
[2,3,4,5].unshift(1)    // [1,2,3,4,5] , adds new elements to the beginning of an array.
[2,3,4,5].includes(5)   // true , returns true if an array contains a specified value. / false if not found
[2,3,4,5].map((num) => num + 6 ) // [9,10,11,12] , allows you to iterate over an array and modify its elements using a callback function. 
[2,3,4,5].find((num) => num > 4 ) // 5 , returns the value of the first element that passes a test.
[2,3,4,5].some((num) => num > 5 ) // true , tests whether at least one element in the array passes the test implemented by the provided function.
[2,3,4,5].filter((num) => num > 4 ) // [5,6] , creates a new array filled with elements that pass a test provided by a function.
[2,3,4,5].every((num) => num > 5 ) // false , executes a function for each array element.
[2,3,4,5].findIndex((num) => num > 4 ) // 2 ,  returns the index of a first array element that satisfies the provided condition.
[2,3,4,5].reduce((acc,num) => acc+num ) // 18 , returns a single value: the function's accumulated result.

*/
let arr = [1, 2, 3, 4, 5];

console.log(arr.at(0));
console.log(arr.pop());
console.log(arr);
console.log(arr.push(5));
console.log(arr);
console.log(arr.fill(1));
console.log(arr);
console.log(arr.join('-'));
console.log(arr.join('-').split('-'));
console.log(
  arr
    .join('-')
    .split('-')
    .map((item) => (item = parseInt(item)))
);
arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log(arr.shift());
console.log(arr);
console.log(arr.unshift(1)); // prints out the length of the array
console.log(arr);
console.log(arr.includes(10));
console.log(arr.includes(5));
console.log(arr.map((item) => item + 6)); // returns new array
console.log(arr);
console.log(arr.find((item) => item > 3)); //returns first much
console.log(arr);
console.log(arr.some(item => item >3)); //returns boolean if it's true and false if not
console.log(arr.filter(item => item > 3));  // returns new array of true to condition elements
console.log(arr.every(item => item >0)) //returns boolean if it's true and false if not
console.log(arr.findIndex(item => item > 3)); // returns index of the first true much.
console.log(arr);
console.log(arr.reduce((acc, item) => acc+item))
console.log(Array(10).fill(0)); //returns array of length 10 filled with 0's
// console.log(arr);
// console.log(arr);


