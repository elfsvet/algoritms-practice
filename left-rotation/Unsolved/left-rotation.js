// Write a function that takes an array and a positive integer and "rotates" the array to the left by the integer
// Modify the original array rather than returning a new one
// There is no need to return from this function

<<<<<<< HEAD
const leftRotation = (arr, positions) => {};
=======
const leftRotation = (arr, positions) => {
    // we need to check if the array is empty
    console.log(`the array is ${arr} and positions is ${positions}`)
    if (arr.length === 0 || positions === 0) {
        console.log("The final arr : " + arr);    
        return;
    }
    // we would need a variable to store an element we transfer to the back
    let theRight = arr.splice(0, positions);
    console.log("the right is " + theRight);
    console.log("now array looks like : " + arr);
    //we can separate the array at the position and join it back switching the order
    for (let i = 0; i< theRight.length; i++) {
        arr.push(theRight[i]);
    }
    console.log("The final arr : " + arr);
    
    
};

arr = [1,2,3]
leftRotation([8, 8, 1], 1);
leftRotation([1, 2, 3], 2);
leftRotation([3, 1, 8, 0, 1], 4);
leftRotation([4, 8, 15, 16, 23, 42], 0);
leftRotation(arr, 2);
console.log(arr)
>>>>>>> f27ed9e228bd24405d1ea1fd453b0a7266ae9e0b
