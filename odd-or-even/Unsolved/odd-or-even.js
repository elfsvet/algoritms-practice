// Write code to return the string "odd" if `num` is an odd number
// and return the string "even" if `num` is an even number
//  if we will have division remainder then num is odd if not num is even
var oddOrEven = function(num) {
    if (num % 2 === 0){
        return "even";
    } else {
        return "odd";
    }
};