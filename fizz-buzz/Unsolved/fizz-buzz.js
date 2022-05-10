// Write code to loop through the array of numbers
// At each iteration, if a number is evenly divisible by 3 print "Fizz"
// If a number is evenly divisible by 5 print "Buzz"
// If a number is evenly divisible by both 3 AND 5, print "Fizz Buzz"
// If a number is not divisible by 3 or 5, print the number

var fizzBuzz = function (arr) {
    for (var i = 0; i < arr.length; i++) {
        var divisibleByThree = arr[i] % 3 === 0;
        var divisibleByFive = arr[i] % 5 === 0
        if (divisibleByFive && divisibleByThree) {
            console.log("Fizz Buzz");
        } else if (divisibleByFive) {
            console.log("Buzz");
        } else if (divisibleByThree) {
            console.log("Fizz");
        } else {
            console.log(arr[i]);
        }
    }
};
