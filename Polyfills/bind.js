Function.prototype.bind1 = function(context, ...args) {
  return (...innerArgs) => {
    return this.call(context, ...args, ...innerArgs);
  };
};

const obj = {
  name: 'Mahesh'
};

function printName(lastName, country) {
  return `${this.name} ${lastName}, ${country}`;
}

const printFullName = printName.bind1(obj, 'Ramaiah');

console.log(printFullName('India'));
