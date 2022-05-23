// Write code to create a function that accepts an array of numbers
// Each number represents the duration of a song in minutes
// Return the maximum number of songs from the list that can fit in a 60 minute playlist
//! function to get the most minutes of songs in 
const mostSongsInPlaylist = function (arr) {
  // add your code here...
  // we need to sort array we can use sort() method or try a bubble sort
  let sortedArray = bubbleSort(arr);
  // or we can use sort() methods;
  // let sortedArray = arr.sort();
  console.log(sortedArray)
  let minutesOfAllSongs = 0;
  let numberOfSongs = 0;
  // we need to go through whole list of sorted songs to count time and amount of songs
  for (let i = 0; i < arr.length; i++) {
// if sum of minutes  plus next track is less than 60 minutes
    if ((minutesOfAllSongs + sortedArray[i]) < 60) {
      // add the track minutes to the sum
      console.log(`Minutes were ${minutesOfAllSongs} + ${sortedArray[i]} it will be =`);
      minutesOfAllSongs += sortedArray[i];
      // and add one this track to the playlist
      console.log(`${minutesOfAllSongs} Minutes in the playlist`);
      numberOfSongs ++;
    }
  }
  console.log(`The array can have the maximum of ${numberOfSongs} songs which minutes will be less than 60.`)
  // we need to return the amount of songs we can put in our playlist
  return numberOfSongs;
};

//! bubble sort will return sorted array
const bubbleSort = array => {

  let done = false;
  while (!done) {
    // to prevent it from running one more time after condition is false we will do it right now.
    done = true;
    //we need to check all the pairs in the array 
    for (let i = 1; i < array.length; i++) {
      // we start at the beginning of array. 
      // compare first two elements and moving on
      // if first is greater than second
      if (array[i - 1] > array[i]) {
        // so we would need our done variable to be false.
        done = false;
        // we will swap elements
        // temp variable will assign to first element what greater
        let temporary = array[i - 1];
        // the old greatest element will be assign to small element
        array[i - 1] = array[i];
        // and small element will be assign to temporary element (max element)
        array[i] = temporary;
      }
    }
  }
  // returns sorted array
  return array;
};

// test 
let a = [3, 5, 7, 2, 1, 4, 8, 5, 3, 2, 2, 1, 5, 7, 4, 2, 3, 1, 3, 4, 7, 8, 8, 2];
mostSongsInPlaylist([4, 2, 5, 3, 1, 1, 2, 3, 4, 2, 5, 6, 3, 2, 4, 7, 3, 2, 3])

mostSongsInPlaylist(a)