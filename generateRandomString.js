const generateRandomString = () =>{
    return Math.random().toString(36).slice(2)
}

console.log(generateRandomString())