// Write code to return the the number of vowels in `str`




var vowelCount = function(str) {
    var array = str.toLowerCase().split("");
    var vowels = ['a','e','o','u','i'];
    var numOfVowels = 0;
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < vowels.length; j++){
            if (array[i] === vowels[j]){
                numOfVowels++;
            }
        }        
    }
    return numOfVowels;
};

console.log(vowelCount("Kate"));

console.log(("Stepan").toLowerCase().split(""));
