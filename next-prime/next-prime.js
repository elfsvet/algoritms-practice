function nextPrime(n) {
// if we got number we should display next prime number to it
    for (let i = n+1;true;i++){
    let prime = true;
    for(let j = 2; j*j <= i; j++){
        if (i%j === 0) {
            prime = false;
            break;
        }
    }
    if (prime){
        return i;
        }   
    }
}