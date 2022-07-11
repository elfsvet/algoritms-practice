// Write a function to take a string and return true if it contains valid sets of matching brackets, else return false

const validBrackets = function (str) {
    
    // stack, we will use it here.
    // we will be using an array to store each character of the string
    let stack = [];
    // we will loop through the string
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        // If the character equals ({[, we will push it into our array
        if (char === "(" || char === "[" || char === "{") {
            stack.push(char);
        }
        // If the character equals a closing element )}], we will check if the previous element will match the required opening element
        if (char === ")") {
            // If it does, we will remove the opening element from the array
            if (stack.pop() !== "(") {
                // If it does not, we will return false
                return false;
            }
        }
        if (char === "}") {
            if (stack.pop() !== "{") {
                return false;
            }
        }
        if (char === "]") {
            if (stack.pop() !== "[") {
                return false;
            }
        }
        
    }
    // After the loop is done, we will check if the length is equal to zero
    // if it does, we will return true;
    return stack.length === 0;
};


console.log(validBrackets("( )"));
console.log(validBrackets("{ } [ ( [] ) ]"));
console.log(validBrackets("( [ ) ]"));