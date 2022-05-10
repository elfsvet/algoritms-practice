// Write code to create a function takes a string and returns a new string with the first letters of each word capitalized








var titleCase = function (str) {
    var arrStr = str.split(" ");
    // console.log(arrStr);
    var result = [];
    for (var i in arrStr) {
        // console.log(i)
        // console.log(arrStr[i])
        var capWord = arrStr[i].charAt(0).toUpperCase() + arrStr[i].slice(1)
        // console.log(capWord);
        result.push(capWord);
    }
    return result.join(" ");



    // for (var i = 0; i < arrStr.length; i++){
    //     firstLetter = arrStr[i][0]
    //     arrStr[i].replace(firstLetter, arrStr[i][0].toUpperCase());
    //     console.log(firstLetter)
    //     console.log(arrStr);
    // }
};

// console.log(titleCase("open a new browser tab"));