function test(str) {
  let map = {};
  let start = 0;
  let max = 0;

  for (let i = 0; i < str.length; i++) {
    if (!map[str[i]]) {
      map[str[i]] = 1;

      if (max < i - start + 1) {
        max = i - start + 1;
      }
    } else {
      for (; start < i; start++) {
        if (str[i] === str[start]) {
          start++;
          break;
        }
        map[str[start]] -= 1;
      }
    }
  }

  return max;
}

// function test(str) {
// 	let max = 0;
// 	let start = 0;
// 	let map = {};

// 	for (let i = 0; i < str.length; i++) {
// 		if (!map[str[i]]) {
// 			map[str[i]] = i;

// 			if (max < ((i - start) + 1)) {
// 				max = (i - start) + 1;
// 			}
// 		}
// 		else {
// 			start = map[str[i]] + 1;
// 			map[str[i]] = i;
// 		}
// 	}

// 	return max;
// }

// console.log(test('abcdefdabcdefgh'));
