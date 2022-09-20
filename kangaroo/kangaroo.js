function kangaroo(x1, v1, x2, v2) {
    // Write your code here
    // console.log(x1, v1, x2, v2)

    let kan1 = {}
    let kan2 = {}
    let spot1 = x1
    let spot2 = x2

    for (let i = 0; i < 10000; i++) {
        spot1 += v1
        kan1[i] = spot1
        spot2 += v2
        kan2[i] = spot2

        if (kan1[i] === kan2[i]) {
            return 'YES'
        }
    }

    return 'NO'

}

console.log(kangaroo(0, 3, 4, 2));
console.log(kangaroo(0, 2, 5, 3));