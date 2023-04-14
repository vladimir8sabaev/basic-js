const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
	str = str.split("");
	console.log(str);
	let arr = [];
	let counter = 1;
	for (let i = 0; i < str.length; i++) {
		if (str[i] == str[i + 1]) {
			counter++;
		} else {
			arr.push(counter);
			counter = 1;
		}
	}
	let finalStr = "";
	console.log(arr);
	let sum = 0;
	arr.forEach((item, i) => {
		sum += item;
		if (item == 1) {
			if (str[sum - 1]) {
				finalStr += `${str[sum - 1]}`;
			} else {
				finalStr += `${str[0]}`;
			}
		} else {
			finalStr += `${arr[i]}${str[sum - 1]}`;
		}
	});
	return finalStr;
}

module.exports = {
	encodeLine,
};
