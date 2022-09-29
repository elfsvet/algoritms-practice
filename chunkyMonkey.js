// we should split array into n arrays of size size
function chunkArrayInGroups(arr, size) {
  // create a new array to store the chunks
  const result = [];
  // create a new variable with initial size values
  let untilIndex = size;
  //   iterate over starting index
  for (
    let startingIndex = 0;
    startingIndex < arr.length;
    // we will increment by size to update starting index
    startingIndex += size
  ) {
    // slice will take starting index from and until index not including it. Starting index will be increased by size on next iteration
    result.push(arr.slice(startingIndex, untilIndex));
    // update the ending index
    untilIndex += size;
  }
  return result;
}

chunkArrayInGroups(['a', 'b', 'c', 'd'], 2);
