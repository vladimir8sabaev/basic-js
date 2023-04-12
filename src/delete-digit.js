const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
	n = "" + n;
	console.log(typeof n);
	let arr = [];
	for (let i = 0; i < n.length; i++) {
		arr.push(+(n.slice(0, i) + n.slice(i + 1)));
	}
	arr = arr.sort((a, b) => b - a);
	return arr[0];
}

module.exports = {
	deleteDigit,
};
