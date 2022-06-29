// Write code to return a new string with all of the characters in `str` reversed.
// You may NOT use the built-in reverse method

const reverse = (str) => {
    let backString = '';
    for(let i = str.length-1; i>=0; i--){
        backString+=str[i];
        console.log(i)
    }
    console.log(backString);
    return backString;
};

console.log(reverse('cat went on the fence'));