/*

const multiOf3and5 = n => {
    let sumOfN = 0;

    for (let i = 0; i <= n; i++) {
        if ((i / 3) % 1 === 0) {
            console.log("integer " + i)
            if (sumOfN + i < n) {

                sumOfN += i;
                console.log("the sum is " + sumOfN)
            }
            else {
                return sumOfN;
            }

        } else if ((i / 5) % 1 === 0) {
            console.log("integer " + i)
            if (sumOfN + i < n) {

                sumOfN += i;
                console.log("the sum is " + sumOfN)
            }
            else {
                return sumOfN;
            }
        }
    }

    return sumOfN;
};

console.log(multiOf3and5(1000))


*/

// While it's less
// we need to check if the value could be deleted by 3 and 

const multiOf3and5 = naturalNumbersUntil => {
    // we need a variable that stores sum of variables that multiples of 3 or 5
    let sumOfNumbers = 0;
    // we need to check if we still less that the argument
    for (let number = 0; number < naturalNumbersUntil; number++) {
        // we need to check if the number can be divided without decimal, it means it is is multiply of 3 or 5
        if ((number / 3) % 1 === 0 || (number / 5) % 1 === 0) {
            // console the integer
            console.log("integer " + number)
            // increment the sum by the number
            sumOfNumbers += number;
            // console the sum
            console.log("the sum is " + sumOfNumbers)
        }
    }
    return sumOfNumbers;
};

multiOf3and5(1000)