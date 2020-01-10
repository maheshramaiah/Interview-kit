const props = {
  primary: true
};
const width = 100;

function test(strings, ...interpolations) {
  console.log(strings);
  console.log(interpolations);
  return interpolations.reduce((string, exp, index) => {
    const value = typeof exp === 'function' ? exp(props) : exp;
    return string + value + strings[index + 1];
  }, strings[0]);
}

console.log(
  test`
		width: ${width}px;
		display: flex;
		color: ${(props) => (props.primary ? '#000' : '#fff')};
		border: 1px solid black;
		background-color: ${(props) => (props.primary ? '#fff' : '#000')};

		& > div {
			color: ${(props) => (props.primary ? '#000' : '#fff')};
		}
	`
);

/*
strings = ['display: flex;color:',':border: 1px solid black;background-color:', ';']
interpolations = [${props => props.primary ? '#000' : '#fff'}, ${props => props.primary ? '#fff' : '#000'}]
*/
