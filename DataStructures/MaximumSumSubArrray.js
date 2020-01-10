function maxSequence(arr) {
  let cur = arr[0],
    sum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    cur = Math.max(arr[i], cur + arr[i]);
    sum = Math.max(sum, cur);
  }

  return sum;
}

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

/*
	c = 0, s = 0

	-2, c = 0, s = 0
	1, c = 1, s = 1
	-3, c = 0, s = 1
	4, c = 4, s = 4
	-1, c = 3, s = 4
	2, c = 5, s = 5
	1, c = 6, s = 6
	-5, c = 1, s = 6
	4, c = 5, s = 6

	c = -2, s = -2

	1, c = 1, s = 1
	-3, c = -2, s = 1
	4, c = 4, s = 4
	-1, c = 3, s = 4
	2, c = 5, s = 5
	1, c = 6, s = 6
	-5, c = 1, s = 6
	4, c = 5, s = 6
*/
