// Write code to create a function that accepts an array of numbers and a target number
// if the target number is present in the array, return its index
// else return -1
// You may not use the `indexOf`, `lastIndexOf` or `includes` methods

var linearSearch = function (arr, target) {
    // return the index of the given number in the array
    // we need to iterate through the array and compare our target to all numbers in the array
    // and we need to return the index of the number by returning iteration number.
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    // if number is not presented in the array return -1
    return -1;

};

