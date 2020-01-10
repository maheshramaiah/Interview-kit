/**
	1. Common characters between two strings
*/

// function commonChars(s1, s2) {
//   let count = 0;

//   for (let i = 0; i < s1.length; i++) {
//     const index = s2.indexOf(s1[i]);

//     if (index > -1) {
//       s2 = s2.substring(0, index) + s2.substring(index + 1, s2.length);
//       count++;
//     }
//   }

//   return count;
// }

// console.log(commonChars('platformforgeeks', 'geeksforgeeks'));

/**
  2. Check whether two strings contain same characters in same order
*/

// function test(s1, s2) {
//   let a = s1[0];
//   let b = s2[0];

//   function reduceString(s, res) {
//     for (let i = 1; i < s.length; i++) {
//       if (s[i - 1] !== s[i]) {
//         res += s[i];
//       }
//     }

//     return res;
//   }

//   if (reduceString(s1, a) === reduceString(s2, b)) {
//     return true;
//   }

//   return false;
// }

// console.log(test('Geeks', 'Geks'));

/**
 3. Sort an array without changing position of negative numbers
*/

// function sort(arr) {
//   let res = [];
//   const pSorted = arr.filter((x) => x > -1).sort();
//   let index = 0;

//   arr.forEach((v) => {
//     if (v > -1) {
//       res.push(pSorted[index++]);
//     } else {
//       res.push(v);
//     }
//   });

//   return res;
// }

// console.log(sort([-2, -6, -3, -8, 4, 1]));

/**
 4. Check if array is palindrome using recursion 
*/

// function palindrome(arr) {
//   function check(arr, s, e) {
//     if (s >= e) {
//       return true;
//     }
//     if (arr[s] === arr[e]) {
//       return check(arr, s + 1, e - 1);
//     }

//     return false;
//   }

//   return check(arr, 0, arr.length - 1);
// }

// console.log(palindrome([1, 2, 3, 3, 2, 1]));

/**
  5. Given an array of integers, return an output array such that output[i] is equal to the product of all the elements in the array other than itself
  [1,        a0,    a0*a1, a0*a1*a2]
  [a3*a2*a1, a3*a2, a3,           1]

*/

// function productExceptSelf(arr) {
//   const length = arr.length;
//   const output = [1];
//   let p = 1;

//   for (let i = 0; i < length - 1; i++) {
//     p = p * arr[i];
//     output.push(p);
//   }

//   p = 1;
//   for (let i = length - 1; i > -1; i--) {
//     output[i] = output[i] * p;
//     p = p * arr[i];
//   }

//   return output;
// }

// console.log(productExceptSelf([-2, -2, -3, 2]));

/**
  6. Flatenning array
*/

// function flatten(arr, res = []) {
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       flatten(arr[i], res);
//     }
//     else {
//       res.push(arr[i]);
//     }
//   }

//   return res;
// }

// console.log(flatten([1, [2, 3], 4, [[5]]]));

/**
 7. Anagram 
*/

// function isAnagram(a, b) {
//   return a.toLowerCase().split('').sort().join('') === b.toLowerCase().split('').sort().join('')
// }

// console.log(isAnagram('Silent', 'Listen'))

/**
  8. Array rotation
*/

// function rotateArray(arr, n) {
//   for (let i = 0; i < n; i++) {
//     const temp = arr[0];
//     for (let j = 1; j < arr.length; j++) {
//       arr[j - 1] = arr[j];
//     }
//     arr[arr.length - 1] = temp;
//   }

//   return arr;
// }

// console.log(rotateArray([1, 2, 3, 4, 5, 6, 7, 8], 4));

/**
  9. Binary search
*/

// function binarySearch(arr, n) {
//   function search(arr, n, start, end) {
//     const mid = Math.floor((start + end) / 2);

//     if (arr[mid] === n) {
//       return mid;
//     }

//     if (n < arr[mid]) {
//       return search(arr, n, start, mid);
//     }
//     else {
//       return search(arr, n, mid + 1, end);
//     }
//   }

//   return search(arr, n, 0, arr.length);
// }

// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 5));

/**
 10
*/

// function print(arr, n) {
//   let map = {};
//   let res = [];

//   for (let i = 0; i < arr.length; i++) {
//     const temp = n - arr[i];

//     if (map[temp]) {
//       res.push([temp, arr[i]]);
//       return res;
//     }

//     map[arr[i]] = true;
//   }

//   return false;
// }

// console.log(print([11, 15, 6, 8, 9, 10], 17));

// function print(arr) {
//   let count = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== 0) {
//       arr[count++] = arr[i];
//     }
//   }

//   while (count < arr.length) {
//     arr[count++] = 0;
//   }

//   return arr;
// }

// console.log(print([1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0, 9]));

// function secondGreatest(arr) {
//   let first = 0;
//   let second = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > first) {
//       second = first;
//       first = arr[i];
//     }
//     else if (arr[i] > second && arr[i] !== first) {
//       second = arr[i];
//     }
//   }

//   return second;
// }

// console.log(secondGreatest([12, 35, 1, 10, 34, 1]));

function test(str) {
  let arr = str.split('');
  let c1 = 0;
  let c2 = 0;
  let i = 1;

  while (i < arr.length) {
    if (arr[i - 1] !== arr[i]) {
      if (c1 !== c2) {
        arr.splice(c2, c1 - c2 + 1);
        c1 = c2;
        i = c2;
      }
      c1++;
      c2++;
    } else {
      c1++;
    }
    i++;
  }

  return arr.join('');
}

console.log(test('abcccbdb'));
