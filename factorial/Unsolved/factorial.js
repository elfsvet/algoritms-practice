// Write code to create a function that returns the factorial of `num`

var factorial = function (num) {
//     if (num === 0) {
//         return 1;
//     } 
//   return num * factorial(num - 1);

   return (num === 0) ? 1 : num * factorial(num - 1);


    // result = 1;
    // for (var i = num; i> 1; i--){
    //     result = result * i;
    // }
    // return result;
};

console.log(factorial(8))