(function() {
  //Sort only odd numbers, keeping even numbers at its initial position.

  function sort(array) {
    let indices = [];

    array
      .filter((v, i) => v % 2 && indices.push(i))
      .sort((a, b) => a - b)
      .forEach((v, i) => (array[indices[i]] = v));

    return array;
  }

  const array = [5, 2, 4, 1, 3];

  console.log(sort(array));
})();

/*
	indices = [0, 3, 4]
	[5,1,3] => [1,3,5]
*/
