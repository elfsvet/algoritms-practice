// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome

var isPalindrome = function(str) {
    var newStr = str.split("");
    var result = [];
    for (var i = 0; i < newStr.length; i++){
        // console.log(newStr[i]);
        result.unshift(newStr[i]);
    }
    result = result.join("");
     if(result === str){
        // console.log(result +" = "+ str);
         return true;
     } else {
        //  console.log(result + " = " + str);
         return false;
     }
};

// console.log(isPalindrome("racecar"))