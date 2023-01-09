function fibSequence(n) {
  let a = 0;
  let b = 1;
  let c;
  let sequence = [a, b];
  for (let i = 2; i < n; i++) {
    c = a + b;
    a = b;
    b = c;

    sequence.push(c);
  }
  return sequence;
}

console.log(fibSequence(8));
