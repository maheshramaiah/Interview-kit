function reverse(obj, next = null) {
  // if (obj) {
  //   const res = {
  //     data: obj.data,
  //     next
  //   };

  //   if (obj.next) {
  //     return reverse(obj.next, res);
  //   } else {
  //     return res;
  //   }
  // }

  let prev;
  let res = {};

  while (obj) {
    res = {
      data: obj.data,
      next: prev
    };

    prev = res;
    obj = obj.next;
  }

  return res;
}

const obj = {
  data: 1,
  next: {
    data: 2,
    next: {
      data: 3,
      next: {
        data: 4
      }
    }
  }
};

const reverseObj = reverse(obj);

console.log(reverseObj);
