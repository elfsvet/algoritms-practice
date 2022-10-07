const randomIntArrayInRange = (min, max, n = 1) =>
  Array.from(
    { length: n },
    () => Math.floor(Math.random() * (max - min + 1)) + min
  );
const insertionSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    let currentValue = array[i];

    let j = i - 1;

    while (j >= 0 && array[j] > currentValue) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = currentValue;
  }
  return array;
};

let arr = randomIntArrayInRange(0, 60, 15);
console.log('Before ', arr);
arr = insertionSort(arr);
console.log('After ', arr);

// Big 0 n**2

let newArr = Array.from(
  { length: 100 },
  () => Math.floor(Math.random() * (100 - 0 + 1)) + 0
);

console.log(newArr)

console.log(insertionSort(newArr));