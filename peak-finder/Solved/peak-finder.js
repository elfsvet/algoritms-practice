const peakFinder = function (nums) {
  let testIndex = 0,
    compareIndex = nums.length - 1;

  // If the length of the array is zero, return 0
  if (nums.length < 1) {
    return 0;
  }
  // If length of array is one, return number in array
  if (nums.length === 1) {
    return nums[0];
  }

  // If has more than one number, compare the numbers
  while (testIndex < compareIndex) {
    // Find middle index of array
    const midIndex = parseInt((testIndex + compareIndex) / 2);
    // If number is greater than one to right
    // Then the set the compareIndex to equal the middle index
    // Else, set the testIndex to equal middle index plus one or one to the right of the middle
    nums[midIndex] > nums[midIndex + 1]
      ? (compareIndex = midIndex)
      : (testIndex = midIndex + 1);
  }
  return nums[testIndex];
};
console.log(peakFinder([1, 3, 7, 4, 3, 2, 1]))
console.log(peakFinder([2, 4, 6, 8, 10]))
console.log(peakFinder([2, 4, 6, 8, 10, 11, 12, 9, 8, 7, 6]))
console.log(peakFinder([2, 4, 6, 8, 7, 6, 5]))
// console.log(peakFinder())
console.log(peakFinder([2]))
console.log(peakFinder([4, 3]))