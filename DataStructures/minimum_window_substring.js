// function test(str, substring) {
// 	let res = '';
// 	const s_map = {};

// 	for (let i = 0; i < substring.length; i++) {
// 		s_map[substring[i]] = s_map[substring[i]] ? s_map[substring[i]] + 1 : 1;
// 	}

// 	for (let i = 0; i < str.length; i++) {
// 		let count = 0;
// 		let map = {};
// 		for (let j = i; j < str.length; j++) {
// 			map[str[j]] = map[str[j]] ? map[str[j]] + 1 : 1;
// 			if (s_map[str[j]] && map[str[j]] <= s_map[str[j]]) {
// 				count++;
// 			}
// 			if (count === substring.length) {
// 				const string = str.substring(i, j + 1);

// 				if (!res) {
// 					res = string;
// 				}
// 				else if (string.length < res.length) {
// 					res = string;
// 				}
// 				break;
// 			}
// 		}
// 	}

// 	return res;
// }

function test(str, substring) {
  let res = '';
  let s_map = {};
  let start = 0;

  for (let i = 0; i < substring.length; i++) {
    s_map[substring[i]] = s_map[substring[i]] ? s_map[substring[i]] + 1 : 1;
  }

  let count = 0;
  let map = {};

  for (let i = 0; i < str.length; i++) {
    map[str[i]] = map[str[i]] ? map[str[i]] + 1 : 1;

    if (s_map[str[i]] && map[str[i]] <= s_map[str[i]]) {
      count++;
    }

    if (count === substring.length) {
      for (let j = start; j <= i; j++) {
        map[str[j]] = map[str[j]] - 1;

        if (s_map[str[j]] && map[str[j]] < s_map[str[j]]) {
          count--;
          start = j + 1;
          break;
        }

        const string = str.substring(j + 1, i + 1);

        if (!res || string.length < res.length) {
          res = string;
        }
      }
    }
  }

  return res;
}

console.log(test('this is a test string', 'tist'));
