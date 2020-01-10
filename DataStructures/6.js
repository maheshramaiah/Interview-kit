/**
	Given a string that includes alphanumeric characters ('3a4B2d') return the expansion of that string:
	The numeric values represent the occurance of each letter preceding that numeric value.
	There should be no numeric characters in the final string.
	Empty strings should return an empty string.
	The first occurance of a numeric value should be the number of times each character behind it is repeated, until the next numeric value appears.
*/

//s.replace(/\d\D*/g,m=>m.slice(1).replace(/./g,n=>n.repeat(m[0])))

function stringExpansion(str) {
  const sarr = str.match(/\d?\D+/g);
  let res = '';

  if (Number(str)) {
    return '';
  }
  if (!sarr) {
    return str;
  }

  const fo = str.match(/^[^\d]+/);

  if (fo) {
    res += fo[0];
  }

  sarr.forEach((x) => {
    let n = x.match(/\d+/);
    const s = x.match(/\D+/);
    let r = '';

    if (n && n.length) {
      n = n[0][n[0].length - 1];
    }

    for (let key of s[0]) {
      res += key.repeat(+n);
    }
  });

  return res;
}

console.log(stringExpansion('LDtQozVJHgpWFO76'));
