// function mutation(arr) {
//   let w1 = arr[0].toLowerCase();
//   let w2 = arr[1].toLowerCase();
//   const obj = {};
//   // console.log(w2)
//   for (let i in w2) {
//     // console.log(w1.indexOf(w2[i]));

//     // console.log(`item is ` + w2[i]);
//     obj[i] = w1.indexOf(w2[i]) === -1 ? false : true;
//   }
//   console.log(Object.values(obj));
//   return !Object.values(obj).some(item => item === false)
// }

// console.log(mutation(['hello', 'hey']));

// function mutation(arr) {
//     let word1 = arr[0].toLowerCase();
//     let word2 = arr[1].toLowerCase();
//     const array = [];
//     for (let i in word2) {
//       const letter = word2[i]
//       array.push(word1.indexOf(letter) === -1 ? false : true)
//     }
//     return !array.some(item => item === false)
//   }

//   mutation(["hello", "hey"]);

// // we have to words in the array first word should contain all letters from the second word. If so return true. Otherwise return false.
// function mutation(arr) {
//   // we will create and assign words to word variable and making them lowercase to compare
//   let word = arr[0].toLowerCase();
//   let letters = arr[1].toLowerCase();
//   // to keep track of letters
//   const doIHaveAllLettersArray = [];
//   //   going through each letter in letters and checking if the exists in a word. if so:
//   for (let i in letters) {
//     // if so it will add to the array the index number. But if it don't have it it will add -1
//     doIHaveAllLettersArray.push(word.indexOf(letters[i]));
//   }
//   //   checking if we have anything in the array what matches -1 if so it will return true. So the function should return opossite of what we got !true = false or !false = true
//   return !doIHaveAllLettersArray.some((item) => item === -1);
// }

// mutation(['hello', 'hey']);

// we have to words in the array first word should contain all letters from the second word. If so return true. Otherwise return false.
function mutation(arr) {
    // we will create and assign words to word variable and making them lowercase to compare
    let word = arr[0].toLowerCase();
    let letters = arr[1].toLowerCase();
    // to keep track of letters
    const doIHaveAllLettersArray = [];
    //   going through each letter in letters and checking if the exists in a word. if so:
    for (let i in letters) {
      // if so it will add to the array the index number. But if it don't have it it will add -1
      doIHaveAllLettersArray.push(word.indexOf(letters[i]));
    }
    //   checking if we have anything in the array what matches -1 if so it will return true. So the function should return opossite of what we got !true = false or !false = true
    return !doIHaveAllLettersArray.includes(-1);
  }
  
  mutation(['hello', 'hey']);