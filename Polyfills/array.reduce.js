Array.prototype.reduce1 = function(fn, initialValue) {
  let accumulator = initialValue !== undefined ? initialValue : this[0];
  let startIndex = initialValue !== undefined ? 0 : 1;

  for (let i = startIndex; i < this.length; i++) {
    accumulator = fn(accumulator, this[i]);
  }

  return accumulator;
};

const arr = [1];
const sum = arr.reduce1((ac, v) => {
  console.log('*******************');
  console.log(`ac: ${ac}`);
  console.log(`v: ${v}`);

  ac += v;

  console.log(`sum: ${ac}`);
  console.log('*******************');

  return ac;
}, 0);

console.log(sum);
