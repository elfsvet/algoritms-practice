// Write code to create a function that accepts a string and returns an object containing the number of times each character appears in the string

const characterCount = function(str) {
    // create a new object
    let result = {};
    // loop through each character's key in the string and create a new key for each character in the string
    // we creating a new variable and reassigning str to it but in lowercase
    let string = str.toLowerCase();
    // for of using in arrays and strings i = character.
    // if we would use for in we would have i = index.
    for (let i of string){
        let char = i
        // console.log(i)
        //the value of the character's key should be the number of times it appears in the string
        // using with objects
        if(char in result){
            result[i] +=1;
        } else {
            result[i] = 1;
        }
    }
    console.log(result);
    return result;

};
characterCount("Hello World, how are you?")
