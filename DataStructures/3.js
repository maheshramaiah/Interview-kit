(function() {
  // Find elements
  const test = [
    {
      name: 'x',
      value: ['a', 'b', 'c']
    },
    {
      name: 'y',
      value: ['aa', 'bb']
    }
  ];
  const test1 = {
    label: 'obj',
    filter: ['b', 'a', 'c']
  };

  //type 1

  const res = test.find((x) =>
    x.value.every((y) => test1.filter.find((z) => z === y))
  );

  console.log(res);

  //type 2
  let res1;

  test1.filter.forEach((v) => {
    let tar = res1 || test;

    res1 = tar.filter((x) => x.value.includes(v));
  });

  console.log(res1);
})();
