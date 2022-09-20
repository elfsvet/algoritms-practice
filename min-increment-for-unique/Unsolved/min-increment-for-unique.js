// Write a function to take an array of integers and return the minimum number of increments required across the array to ensure that every number is unique
// array = [1,2,2]

const minIncrement = function (nums) {
    // create a variable to store amount of increments
    let increments = 0;
    // create a object to store unique numbers
    const uniqueNums = {};
    // loop through each number in the array
    for (let i = 0; i < nums.length; i++) {
        // console.log(`${i} and number ${nums[i]}`)
        // while to iterate one more time after it true
        // check if key exists and equals to true
        // runs the check again for the same i
        // if it still in the key do the same
        while (uniqueNums[nums[i]] === true) {
            // console.log(`${JSON.stringify(uniqueNums)}`)
            // if its exists ands to number 1 and increments
            nums[i] += 1;
            increments++;
        }
        // when the no key === to the nums[i]
        // set key to true
        uniqueNums[nums[i]] = true;
    }


    return increments;
    // we need to compare all items and see if there are any not unique numbers like 2 2 
    // we need to increment it by 1 and increment store amount
    // and compare to the numbers in the array. is it unique, 
    // if not increment again with the store amount
    // check with array...
    // if no matching numbers 
    // return increments
};

console.log(minIncrement([1, 2, 2]))
console.log(minIncrement([1, 2, 2, 2, 2, 2, 2]))
console.log(minIncrement([3, 2, 1, 2, 1, 7]))
console.log(minIncrement([1, 2, 3]))