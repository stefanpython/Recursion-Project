let n = 8; // Define sequence limit here

function fibRecursive(n) {
  return n < 2 ? n : fibRecursive(n - 1) + fibRecursive(n - 2);
}

let arr = [];
for (let i = 0; i < n; i++) {
  arr.push(fibRecursive(i));
}

console.log(arr);
