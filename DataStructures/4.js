(function() {
  function check(str) {
    let arr = [];
    const openingBraces = {
      '{': 0,
      '[': 1,
      '(': 2
    };
    const closingBraces = {
      '}': 0,
      ']': 1,
      ')': 2
    };

    for (let i = 0; i < str.length; i++) {
      let c = str[i];
      const openi = openingBraces[c];
      const closei = closingBraces[c];

      if (openi > -1) {
        arr.push(c);
      }
      if (closei > -1) {
        if (arr.length && closei === openingBraces[arr[arr.length - 1]]) {
          arr.pop();
        } else {
          arr.push(c);
          break;
        }
      }
    }

    if (arr.length) {
      return false;
    }

    return true;
  }

  console.log(check('[]'));
})();
