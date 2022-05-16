// Write code to create a function that accepts an array numbers
// Return `true` is no number appears in the array more than once, else return `false`

var isUnique = function (arr) {
    // return true if no number appears more than once in the array else return false
    let listNumbers = {};
    for(let i = 0; i<arr.length;i++){
        let number = arr[i];
        // if the list has a number and it = to 1 return false
        if(listNumbers[number] === 1){
            return false;
        } else {
            listNumbers[number] = 1;
        }
    }
    return true;
}

let arr = [3, 4, 5, 6, 7, 8]

console.log(isUnique(arr))