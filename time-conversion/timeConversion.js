


function timeConversion(s) {
    let splitArray = s.split(':')
    let hour = splitArray[0];
    let minutes = splitArray[1];
    let seconds = splitArray[2].slice(0, 2)
    let amPm = splitArray[2].slice(2, 4)
    let result = ''

    if (amPm === 'PM') {
        // check if it is a noon
        if (hour === '12') {
            result += hour + ':' + minutes + ':' + seconds
        } else {
            hour = parseInt(hour) + 12;
            result += hour + ':' + minutes + ':' + seconds
        }
    } else {
        // if amPm ==='AM
        // check if it is midnight
        if (hour === '12') {
            result += '00:' + minutes + ':' + seconds
        } else {
            result += hour + ':' + minutes + ':' + seconds
        }
    }
    return result;
}

console.log(

    timeConversion('12:59:59PM')
)
console.log(

    timeConversion('12:59:59AM')
)
console.log(

    timeConversion('04:59:59PM')
)