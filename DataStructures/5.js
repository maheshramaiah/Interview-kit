/*
	A friend of mine takes a sequence of numbers from 1 to n (where n > 0).
	Within that sequence, he chooses two numbers, a and b.
	He says that the product of a and b should be equal to the sum of all numbers in the sequence, excluding a and b.
	Given a number n, could you tell me the numbers he excluded from the sequence?

	a*b = s - a - b
	s = n(n+1)/2
	a*b = n(n+1)/2 - a - b
	a*b + b = n(n+1)/2 - a
	b(a + 1) = n(n+1)/2 - a
	b = (n(n+1)/2 - a)/(a + 1)
*/

function removeNb(n) {
  const sum = (n * (n + 1)) / 2;
  let pairs = [];

  for (let a = 1; a <= n; a++) {
    const b = (sum - a) / (a + 1);

    if (Number.isInteger(b) && b < n) {
      pairs.push([a, b]);
    }
  }

  return pairs;
}

console.log(removeNb(5));
