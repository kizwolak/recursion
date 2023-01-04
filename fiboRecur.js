const returnArray = [];

function fiboRecur(n) {
  if (n === 1) {
    return 0;
  } if (n === 2) {
    return 1;
  }
  const result = fiboRecur(n - 1) + fiboRecur(n - 2);
  return result;
}

console.log(fiboRecur(6));
console.log(returnArray);
