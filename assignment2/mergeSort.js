arr = [9, 3, 7, 5, 6, 4, 8, 2];

function mergeSort(arr) {
  let n = arr.length;
  // Check if array can be split
  if (n < 2) return arr;

  // Get middle index
  const mid = Math.floor(n / 2);

  // Split array in two sides
  const arrOne = arr.slice(0, mid);
  const arrTwo = arr.slice(mid, n);

  // Use recursion to continue splitting
  return merge(mergeSort(arrOne), mergeSort(arrTwo));
}

function merge(left, right) {
  //Create New Array
  const result = [];

  // Check if left array and right array is empty
  while (left.length && right.length) {
    // Find lower value
    if (left[0] <= right[0]) {
      // Add left value
      result.push(left.shift());
    } else {
      // Add right value
      result.push(right.shift());
    }
  }
  // Merge left array
  while (left.length) result.push(left.shift());
  // Merge right array
  while (right.length) result.push(right.shift());
  // Return result array
  return result;
}

console.log(mergeSort(arr));
