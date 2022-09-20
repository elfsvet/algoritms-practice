// program to convert first letter of a string to uppercase
function capitalizeFirstLetter(str) {
// remove empty spaces in front and at the back
    str = str.trim();
    // converting first letter to uppercase
    // charAt(index) in the string and slice 
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

    return capitalized;
}

// take input
const string = '    vvvcat    ';

const result = capitalizeFirstLetter(string);

console.log(result);