const obj = {
  name: 'Mahesh',
  address: {
    personal: {
      city: 'Kudremukh'
    },
    office: {
      city: 'Bangalore',
      area: {
        landmark: 'Cessana Business Park'
      }
    }
  }
};

function flattenObj(obj, flatten = {}, newkey = '') {
  for (let key in obj) {
    const formattedKey = newkey ? `${newkey}_${key}` : `${key}`;

    if (typeof obj[key] === 'object') {
      flattenObj(obj[key], flatten, `${formattedKey}`);
    } else {
      flatten[`${formattedKey}`] = obj[key];
    }
  }

  return flatten;
}

console.log(flattenObj(obj));

function flattenList(arr, res = []) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flattenList(arr[i], res);
    } else {
      res.push(arr[i]);
    }
  }

  return res;
}

console.log(flattenList([[1], 2, [[3, 4], 5], [[[]]], [[[6]]], 7, 8, []]));
