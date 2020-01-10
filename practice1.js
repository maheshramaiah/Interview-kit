function test(l, temp = [], res = [], start = 1) {
  if (temp.length === l) {
    res.push([...temp]);
    return;
  }
  for (let i = start; i <= 9; i++) {
    temp.push(i);
    test(l, temp, res, i + 1);
    temp.pop();
  }

  return res;
}

console.log(test(3))