const testArray = [1, 3, 2, 4, 7, 8, 6, 5];

function mergeSort(array) {
  const mainTransient = [];
  if (array[0] !== array[array.length - 1]) {
    const middle = Math.floor((1 + array.length - 1) / 2);
    const a = mergeSort(array.slice(0, middle));
    const b = mergeSort(array.slice(middle, array.length));
    console.log(`this is a: ${a}`);
    console.log(`this is b: ${b}`);
    const m = a.length - 1;
    const n = b.length - 1;
    let i = 0;
    let j = 0;
    let k = 0;
    while (i <= m && j <= n) {
      if (a[i] < b[j]) {
        mainTransient[k] = a[i];
        console.log(`this is a[i]: ${a[i]}`);
        k += 1;
        i += 1;
        console.log(`This is mainTransient in a < b: ${mainTransient}`);
      } else {
        console.log(`this is b: ${b[j]}`);
        mainTransient[k] = b[j];
        k += 1;
        j += 1;
        console.log(`This is mainTransient in b < a: ${mainTransient}`);
      }
      console.log(`This is mainTransient: ${mainTransient}`);
    }
    for (; i <= m; i++) {
        mainTransient[k++] = a[i];
    }
    for (; j <= m; j++) {
        mainTransient[k++] = b[j];
    }
  }
  if (array[0] === array[array.length - 1]) {
    return array;
  }
  return mainTransient;
}

console.log(mergeSort(testArray));
