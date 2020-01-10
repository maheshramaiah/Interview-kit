Promise.all1 = function(promises) {
  return new Promise((resolve, reject) => {
    let count = 0;
    let results = [];

    promises.forEach((pr, index) => {
      pr.then((data) => {
        results[index] = data;
        count++;

        if (count === promises.length) {
          resolve(results);
        }
      }).catch((err) => {
        reject(err);
      });
    });
  });
};

Promise.all1([Promise.resolve(1), Promise.reject(2)])
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
