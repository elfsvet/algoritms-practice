function solution(str) {
    
    function reverse(string) {
        let revStr = ''
        for (let i = string.length-1; i>=0; i--){
            revStr += string[i];
        }
        return revStr;
    }
    let stringArray = str.split(' ')
    for(let i in stringArray) {
        if(stringArray[i].length >=5){
            stringArray[i] = reverse(stringArray[i])
        }
    }
    
return stringArray.join(' ');
}
