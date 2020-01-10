// function weightCapacity(weights, maxCapacity) {
//   const subweights = combination(weights);
//   let minDiff;
//   let res;

//   console.log(subweights);

//   for (let i = 0; i < subweights.length; i++) {
//     const elem = subweights[i];
//     const sum = elem.reduce((sum, v) => {
//       sum += v;
//       return sum;
//     }, 0);

//     if (sum <= maxCapacity) {
//       const diff = maxCapacity - sum;

//       if (minDiff === undefined || diff <= minDiff) {
//         minDiff = diff;
//         res = sum;
//       }
//     }
//   }

//   console.log(res);
// }

// console.log(weightCapacity([4, 8, 5, 9], 20));

/**
  0000 
  0001  4       -> 0001 & 0001, 0001 & 0010, 0001 & 0100, 0001 & 1000
  0010  8       -> 0010 & 0001, 0010 & 0010, 0010 & 0100, 0010 & 1000
  0011  48      -> 0011 & 0001, 0011 & 0010, 0011 & 0100, 0011 & 1000
  0100  5       -> 0100 & 0001, 0100 & 0010, 0100 & 0100, 0100 & 1000
  0101  45      -> 0101 & 0001, 0101 & 0010, 0101 & 0100, 0101 & 1000
  0110  85      
  0111  485
  1000  9
  1001  49
  1010  89
  1011  489
  1100  95
  1101  459
  1110  859
  1111  4859

*/

function weightCapacity(weights, maxCapacity) {
  let subSetSums = (function subSets(arr, partials = [], res = []) {
    const sum = partials.reduce((ac, v) => ((ac += v), ac), 0);

    if (sum <= maxCapacity) {
      res.push(sum);
    }

    if (sum > maxCapacity) {
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      subSets(arr.slice(i + 1), [...partials, arr[i]], res);
    }

    return res;
  })(weights);

  return subSetSums.sort((a, b) => b - a)[0];
}

console.log(weightCapacity([4, 5, 8, 9], 20));

// function subSets(weights, maxCapacity) {
//   let res = [];

//   for (let i = 0; i < weights.length; i++) {
//     res.push([weights[i]]);

//     for (let j = i + 1; j < weights.length; j++) {
//       let temp = [weights[i]];

//       for (let k = j; k < weights.length; k++) {
//         temp = [...temp, weights[k]];
//         res.push(temp);
//       }
//     }
//   }

//   return res;
// }

// console.log(subSets([4, 5, 8, 9], 20));

// 4 5 8 9

// 5 8 9    4        0
// 8 9      4 5      0
// 9        4 5 8    0
//          4 5 8 9  0

// 9        4 5 8    1
// 8 9      4 5      1 -> _    4 5 9    1
