(function() {
  // Create a object from constructor function without using new operator

  function Constr(a, b) {
    this.a = a;
    this.b = b;
  }

  Constr.prototype.getA = function() {
    return this.a;
  };
  Constr.prototype.getB = function() {
    return this.b;
  };

  const obj = Object.create(Constr.prototype);
  Constr.call(obj, 1, 2);

  console.log(obj);

  //es5 inheritance

  function Class1(a, b, c) {
    Constr.call(this, a, b);
    this.c = c;
  }
  Class1.prototype = Constr.prototype;
  Class1.prototype.getC = function() {
    return this.c;
  };

  const obj1 = new Class1(1, 2, 3);

  console.log(obj1);

  //es6 inheritance

  class Class2 {
    constructor(a, b) {
      this.a = a;
      this.b = b;
    }

    getA() {
      return this.a;
    }
    getB() {
      return this.b;
    }
  }
  class Class3 extends Class2 {
    constructor(a, b, c) {
      super(a, b);

      this.c = c;
    }

    getC() {
      return this.c;
    }
  }

  const obj2 = new Class3(1, 2, 3);

  console.log(obj2);
})();
