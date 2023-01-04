function fiboLoop(n) {
  let a = 0;
  let b = 1;
  let c = 1;
  const returnArray = [a, b];
  for (let i = 2; i < n; i += 1) {
    c = a + b;
    a = b;
    b = c;
    returnArray.push(c);
  }
  return (returnArray);
}

const result = fiboLoop(5);
console.log(result);
