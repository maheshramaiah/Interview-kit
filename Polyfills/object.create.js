Object.create1 = function(proto) {
  function F() {}

  F.prototype = proto;

  return new F();
};

const obj1 = { name: 'Mahesh' };
const obj2 = Object.create1(obj1);

console.log(obj2.name);
