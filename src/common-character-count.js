const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
	let min = s1.length >= s2.length ? s2.length : s1.length;
	let count = 0;
	s1 = s1.split("");
	s2 = s2.split("");
	for (let i = 0; i < min; i++) {
		if (s2.indexOf(s1[i]) !== -1) {
			count++;
			s2.splice(s2.indexOf(s1[i]), 1);
		}
	}
	return count;
}

module.exports = {
	getCommonCharacterCount,
};
