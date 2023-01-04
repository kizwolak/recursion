const returnArray = [0, 1, 1];

function fiboRecur(n) {
  if (n === 1) {
    return 0;
  } if (n === 2) {
    return 1;
  }
  const result = fiboRecur(n - 1) + fiboRecur(n - 2);
  if (!(returnArray.includes(result)) && result > 1) returnArray.push(result);
  return result;
}

console.log(fiboRecur(8));
console.log(returnArray);
