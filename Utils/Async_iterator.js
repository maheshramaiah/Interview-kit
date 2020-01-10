const obj = {
  arr: [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)],
  [Symbol.asyncIterator]: async function*() {
    while (this.arr.length) {
      yield await this.arr.shift();
    }
  }
};

(async function() {
  for await (const a of obj) {
    console.log(a);
  }
  console.log('done');
})();
