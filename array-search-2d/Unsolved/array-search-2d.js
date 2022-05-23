// Write code to create a function that accepts a two-dimensional array
// Each 2D element contains either the string "X" or "O" (both capitalized)
// Return the number of times "X" appears in the 2D array

const arraySearch2D = arr => {
    // we need a count variable
    let count = 0;
    // we need to loop through the outer array
    for (let i = 0; i < arr.length; i++) {
        // we need to loop through the inner array
        for (let j = 0; j < arr[i].length; j++) {
            // if the current index of the outer array and the current index of the inner array equals 'X'
            if (arr[i][j] === 'X') {
                // we need to add one to count
                count++;
            }
        }
    }
    // when the loop is done we need to return the count value
    return count;
};

console.log(arraySearch2D([
    ["X", "O", "O", "O", "X", "O"],
    ["O", "X", "O", "O", "O", "O"],
    ["O", "O", "O", "O", "X", "X"],
    ["O", "O", "O", "O", "O", "O"]
]));
