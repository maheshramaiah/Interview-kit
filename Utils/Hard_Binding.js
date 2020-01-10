(function() {
  // type 1

  function mul(a, b) {
    return a * b;
  }
  const mul3 = mul.bind(null, 3);
  console.log(mul3(2));

  //type 2

  function add(a) {
    return (b) => {
      return a + b;
    };
  }
  const add4 = add(4);
  console.log(add4(2));
})();
