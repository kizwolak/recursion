const testArray = [2, 1, 4, 3];

function mergeSort(array) {
  const mainTransient = [];
  if (array[0] !== array[array.length - 1]) {
        const middle = Math.floor((((1 + array.length)) - 1) / 2);
        const a = mergeSort(array.slice(0, middle));
        const b = mergeSort(array.slice(middle, array.length));
        console.log(`this is a: ${a}`);
        console.log(`this is b: ${b}`);
        const m = a.length;
        const n = b.length;
        let i = 0;
        let j = 0;
        let k = 0;
        while (i <= m && j <= n) {
            if (a[i] < b[j]) {
                mainTransient[k] = a[i];
                k += 1;
                i += 1;
                console.log(`this is k: ${k}`);
            } else {
                mainTransient[k] = b[j];
                k += 1;
                j += 1;
                console.log(`this is k: ${k}`);
            }
            console.log(`This is mainTransient: ${mainTransient}`);
        }
    } 
    if (array[0] === array[array.length - 1]) {
    return array;
  }
  console.log(mainTransient);
  return mainTransient;
}

console.log(mergeSort(testArray));
