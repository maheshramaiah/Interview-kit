function fiboNacci(n) {
  let ways = Array(n + 1).fill(0);

  ways[0] = 1;
  ways[1] = 1;
  ways[2] = 2;

  for (let i = 3; i <= n; i++) {
    ways[i] = ways[i - 1] + ways[i - 2] + ways[i - 3];
  }

  console.log(ways);

  return ways[n];
}

console.log(fiboNacci(7));
