// Write code to create a function that accepts an array of numbers, finds the largest two numbers, and returns the product of the two

var productOfLargestTwo = function (arr) {
    // we need to create two variables to compare and iterate through the array
    // one to store the first variable to iterate through
    let currentMax = arr[0];
    // the other store old max then the currentMax changed
    let previousMax;
    //if we want to use i as index we need i in arr/ but if we dont want to use arr[i] we can use i of arr and i will be = to arr[0-max character] every iteration.
    for (let i of arr) {
        // if currentMax is less or equal to the i make previous = current and change current to i.
        if (currentMax <= i) {
            // console.log(`current is ${currentMax} less or equal to next ${i} and the previous max is ${previousMax}`)
            previousMax = currentMax;
            currentMax = i;
        }
        // else {
        // console.log(`current is ${currentMax} more than next ${i} and the previous max is ${previousMax}`)
        // }
    }
    // return the product of two max values
    return currentMax * previousMax;
};
// to test the program
// productOfLargestTwo([4, 8, 15, 16, 23, 42])