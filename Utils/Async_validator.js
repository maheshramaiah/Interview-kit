class Rule {
  constructor(rule) {
    this.rule = () => {};

    if (typeof rule === 'function') {
      this.rule = async function*(...args) {
        let result = rule(...args);

        if (result instanceof Promise) {
          result = await result;
        }

        yield {
          field: args.pop(),
          result
        };
      };
    }
  }

  async *run(value, field) {
    try {
      yield* await this.rule(value, field);
    } catch (e) {
      yield e;
    }
  }
}

class Validator {
  constructor() {
    this.rules = {};
  }

  addRule(field, rule) {
    this.rules[field] = new Rule(rule);
  }

  run(data, fields) {
    const rules = this.rules;
    if (!Array.isArray(fields)) {
      fields = [fields];
    }

    return {
      [Symbol.asyncIterator]: async function*() {
        for (const field of fields) {
          if (rules[field]) {
            yield* rules[field].run(data[field], field);
          }
        }
      }
    };
  }
}

const val = new Validator();

val.addRule('min', function(value, field) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value >= 10) {
        resolve('Value should be less than 10');
      }
    }, 1000);
  });
});

val.addRule('max', function(value, field) {
  if (value < 10) {
    return 'Value should be greater than 10';
  }
});

const res = val.run(
  {
    min: 12,
    max: 8
  },
  ['min', 'max']
);

(async function() {
  let error = {};

  for await (const r of res) {
    if (r.result) {
      error[r.field] = r.result;
    }
  }

  console.log(error);
})();
