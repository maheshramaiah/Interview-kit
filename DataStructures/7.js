/*
	Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings.
	
	-- We shall assign the following values: a = 1, b = 2 ... z = 26.

	For example, for the word "zodiacs", solve("zodiacs") = 26
	-- The consonant substrings are: "z", "d" and "cs" and the values are z = 26, d = 4 and cs = 3 + 19 = 22. The highest is 26.

	For the word "strength", solve("strength") = 57
	-- The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20 + 18 = 57 and "ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57.
*/

function solve(s) {
  return s
    .toLowerCase()
    .split(/[aeiou]/g)
    .reduce((highest, v) => {
      const sum = [...v].reduce((ac, v) => ac + v.charCodeAt() - 96, 0);

      if (sum > highest) {
        highest = sum;
      }

      return highest;
    }, 0);
}

console.log(solve('zodiacs'));
