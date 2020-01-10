function findSequence(n, max) {
  let res = [];

  (function find(n, arr) {
    if (n === 0) {
      res.push(arr.slice());
      return;
    }
    for (let i = n; i > 0; i--) {
      arr.push(i);
      find(n - i, arr);
      arr.pop();
    }
  })(n, []);

  return res;
}

console.log(findSequence(5, 2));

// function test(n) {
// 	let arr = [];
// 	arr[0] = [[0]];
// 	arr[1] = [[1, 0]];
// 	arr[2] = [[2, 1, 0], [2, 0]];
// 	arr[3] = [[3, 2, 1, 0], [3, 2, 0], [3, 1, 0]];

// 	for (let i = 2; i < n; i++) {
// 		arr[i] = [arr[i-1].map(x => )
// 	}
// }
