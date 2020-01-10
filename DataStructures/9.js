/*
	Sum of XOR of all subarrays
*/

function xor(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    let innersum = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      innersum = innersum ^ arr[j];
      sum += innersum;
    }
  }

  console.log(loopCount);
  return sum;
}

console.log(xor([1, 3, 7, 9, 8, 7]));
