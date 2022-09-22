const numbersCheck = (item) => {
    let string = ''
    if (item === 1) {
        return string += 'I';
    }
    else if ((item > 1 && item < 4)) {
        return string += Array(item).fill('I').join('')
    }
    else if (item === 4) {
        return string += 'IV';
    }
    else if (item === 5) {
        return string += 'V';
    }
    else if (item > 5 && item < 9) {
        let len = item - 5
        return string += 'V' + Array(len).fill('I').join('');
    }
    else if (item === 9) {
        return string += 'IX';
    }
    else if (item === 10) {
        return string += 'X';
    }
    else if (item > 10 && item < 40) {
        let len = item / 10 //3
        return string += Array(len).fill('X').join('');
    }
    else if (item === 40) {
        return string += 'XL';
    }
    else if (item === 50) {
        return string += 'L';
    }
    else if (item > 50 && item < 90) {
        let len = (item - 50) / 10 //3
        return string += 'L' + Array(len).fill('X').join('');
    }
    else if (item === 90) {
        return string += 'XC';
    }
    else if (item === 100) {
        return string += 'C';
    }
    else if (item > 100 && item < 400) {
        let len = item / 100 //3
        return string += Array(len).fill('C').join('');
    }
    else if (item === 400) {
        return string += 'CD';
    }
    else if (item === 500) {
        return string += 'D';
    }
    else if (item > 500 && item < 900) {
        let len = (item - 500) / 100 //300
        return string += 'D' + Array(len).fill('C').join('');
    }
    else if (item === 900) {
        return string += 'CM';
    }
    else if (item === 1000) {
        return string += 'M';
    }
    else if (item > 1000) {
        let len = (item / 1000)
        return string += Array(len).fill('M').join('');
    }
    return string;
}

function convertToRoman(num) {
    const length = num.toString().length;
    if (length === 4) {
        //3999
        let numArray = num.toString().split('') //['3','9','9','9']
        let zeros = 1000
        for (let i = 0; i < length; i++) {
            numArray[i] = numArray[i] * zeros
            zeros /= 10
        }
        console.log(numArray)
        console.log(numArray.map(item => item = numbersCheck(item)).join(''))
        return numArray.map(item => item = numbersCheck(item)).join('')
    }
    if (length === 3) {
        //399
        let numArray = num.toString().split('') //['3','9','9']
        let zeros = 100
        for (let i = 0; i < length; i++) {
            numArray[i] = numArray[i] * zeros
            zeros /= 10
        }
        console.log(numArray)
        console.log(numArray.map(item => item = numbersCheck(item)).join(''))
        return numArray.map(item => item = numbersCheck(item)).join('')
    }
    if (length === 2) {
        //39
        let numArray = num.toString().split('') //['3','9']
        let zeros = 10
        for (let i = 0; i < length; i++) {
            numArray[i] = numArray[i] * zeros
            zeros /= 10
        }
        console.log(numArray)
        console.log(numArray.map(item => item = numbersCheck(item)).join(''))
        return numArray.map(item => item = numbersCheck(item)).join('')
    }
    if (length === 1) {
        return numbersCheck(num)
    }
}