// Write code to create a function that accepts a string and returns the string in camelCase

var camelCase = function (str) {
    //return a camel case version of the given string
    let lowerStringArray = str.toLowerCase().trim().split(" ");
    
    let firstWord = lowerStringArray[0];
    console.log(firstWord)
  return firstWord + str.trim().toLowerCase().split(" ").slice(1).map(word=>word.substring(0,1).toUpperCase()+word.substring(1)).join("");
};
console.log(camelCase("     LET THE FORCE BE WITH YOU     "))