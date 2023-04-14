const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
	if (names.length == 0) {
		return [];
	}
	let add = 1;
	for (let i = 0; i < names.length; i++) {
		let index = names.indexOf(names[i], i + 1);
		if (index !== -1) {
			names[index] = `${names[index]}(${add})`;
		}
		if (i == names.length - 1) {
			index = names.indexOf(names[i]);
			if (index !== -1 && index !== i) {
				add++;
				names[i] = `${names[i]}(${add})`;
			}
		}
	}
	return names;
}

module.exports = {
	renameFiles,
};
