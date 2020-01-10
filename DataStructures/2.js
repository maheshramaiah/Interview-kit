(function() {
  //Check if sum exists in array elements, array elemet can be doubled to produce sum

  function targetSumExistsInTwoNumbers(arr, target, retry) {
    const sum = arr.reduce((ac, v) => ac + v, 0);

    if (sum === target) {
      return true;
    } else if (retry) {
      return false;
    }

    for (let i = 0; i < arr.length; i++) {
      const res = targetSumExistsInTwoNumbers(
        [arr[i] * 2, ...arr.filter((v1) => v1 !== arr[i])],
        target,
        true
      );

      if (res === true) {
        return true;
      }
    }

    return false;
  }

  console.log(targetSumExistsInTwoNumbers([20, 30], 40));
})();
