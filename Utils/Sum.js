function sum(a) {
  return (b) => (!b ? a : sum(a + b));
}

console.log(sum(1)(2)(3)(4)());
