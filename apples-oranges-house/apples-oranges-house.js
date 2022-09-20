
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    // we can check if numbers of apples and oranges in between the range

    let countApple = 0;
    let countOrange = 0;

    let applesNum = apples.map(apple => a + apple)
    // console.error(applesNum)
    let orangesNum = oranges.map(orange => b + orange)

    for (let i of applesNum) {
        if (s <= i && i <= t) {
            countApple++;
        }
    }
    for (let j of orangesNum) {
        if (s <= j && j <= t) {
            countOrange++;
        }
    }
    return console.log(`${countApple}\n${countOrange}`)

}

console.log(countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]))
