const peakFinder = function (nums) {
  // TODO: Write a function that takes an array of integers containing exactly one peak.
  // A peak is defined as a location in the array where the value is greater than every number to the left and every number to the right. Return the value found at the array's peak

  // if no nums return false
  if (!nums) {
    return false;
  }
  // if nums.length === 1 return nums[0]
  if (nums.length === 1) {
    return nums[0];
  }
  // we need to return the max number of the array.
  // assign the peak to the first element of the array
  let peak = nums[0];
  // start to iterate over the array from the second element
  for (let i = 1; i < nums.length; i++) {
    // if the peak less than the next element
    // if (peak < nums[i]) {
    //   // peak equal to the next element
    //   peak = nums[i];
    // }
    // // if peak greater than next element
    // else {
    //   // return peak and don't check next values
    //   return peak;
    // }
    // ES6 version
    peak < nums[i] ? peak = nums[i] : peak;
  }
  // if the peak was the last number of the array it will be stored in peak we would need to return it.
  return peak;
};

console.log(peakFinder([1, 3, 7, 4, 3, 2, 1]))
console.log(peakFinder([2, 4, 6, 8, 10]))
console.log(peakFinder([2, 4, 6, 8, 10, 11, 12, 9, 8, 7, 6]))
console.log(peakFinder([2, 4, 6, 8, 7, 6, 5]))
// console.log(peakFinder())
console.log(peakFinder([2]))
console.log(peakFinder([4, 3]))