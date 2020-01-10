const React = (function() {
  let data = [];
  let index = 0;

  return {
    useState(initialValue) {
      const _index = index;

      data[_index] = data[_index] || initialValue;
      index++;

      return [data[_index], (value) => (data[_index] = value)];
    },
    useEffect(fn, dependencies) {
      let hasDependencyChanged = true;

      if (data[index]) {
        hasDependencyChanged = dependencies.some(
          (d, i) => !Object.is(d, data[index][i])
        );
      }

      hasDependencyChanged && fn();
      data[index] = dependencies;

      index++;
    },
    render(Component) {
      index = 0;
      const C = Component();

      C.render();

      return C;
    }
  };
})();

function Component() {
  const [count, setCount] = React.useState(0);
  const [text, setText] = React.useState('hai');
  const [anotherCount, setAnotherCount] = React.useState(0);

  React.useEffect(() => {
    setAnotherCount(anotherCount + 1);
  }, [text]);

  return {
    render: () => console.log({ count, text, anotherCount }),
    onClick: () => setCount(count + 1),
    onTextChange: () => setText('bye')
  };
}

let App = null;

App = React.render(Component);
App.onClick();
App = React.render(Component);
App.onClick();
App.onTextChange();
App = React.render(Component);
App = React.render(Component);
