// Write code to return a new string with all of the characters in `str` reversed.
// You may NOT use the built-in reverse method

const reverseInPlace = (arr) => {
    // [1,2,3,4,5] we should have [5,4,3,2,1] after we done with reverse
    // we would need to pop and assign values from array to unshift in the arr while length is >0 
    if (arr.length === 0) {
        return;
    }
    let count = arr.length
    let newArr = [];
    while (count > 0) {
        let last = arr.pop();
        // console.log(last)
        newArr.push(last)
        // console.log(newArr)
        count--;
    }
    for (let i in newArr) {
        arr.push(newArr[i])
    }
    return arr;
};

console.log(reverseInPlace([1, 2, 3, 4, 5]))
console.log(reverseInPlace([15, 12, 16, 20, 22]))

console.log(reversed)
let arr = [1, 2, 3]
reverseInPlace(arr)
console.log(arr)

// mine i slower to the solved on 0.04%