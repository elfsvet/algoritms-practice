// Write code to create a function that accepts a number and returns true if the number is a perfect square, otherwise it returns false.
// You may not use the built-in Math.sqrt method

// Check whether a number is a perfect square or not without finding its square root. 
const isPerfectSquare = (num) => {
    // we need to go through numbers 
    // and multiply then by it self
    // and check if num still >= than the multiplication of the numbers
    //  this method will complicate the time it runs/ i tried a large number 3600000000000000 it will grow longer to solve the function with this way.
    if (num === 0) {
        return true;
    }
    for (let i = 1; i * i <= num; i++) {
        // The Math.floor() function returns the largest integer less than or equal to a given number. 5 = 5 | 5.5 = 5 | -5.5 = -6 |-5 = -5;
        
        if ((num % i == 0) && (Math.floor(num / i) == i)) {
            return true;
        }
    }
    // if number grater than num return false it not a perfectSquare
    return false;
};

let n = 36;
(isPerfectSquare(n)) ? console.log("Yes it's perfect square.") : console.log("No it's not the perfect square.");

