Function.prototype.apply1 = function(context, ...args) {
  const key = Symbol('key');

  context[key] = this;
  const res = context[key](args);

  delete context[key];

  return res;
};

function printName(lastName) {
  return `${this.name} ${lastName}`;
}

console.log(printName.apply1({ name: 'Mahesh' }, 'Ramaiah'));
