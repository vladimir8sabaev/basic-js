const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
	str = "" + str;
	let addition = "" + options.addition;
	let repeatTimes = options.repeatTimes || 1;
	let additionRepeatTimes = options.additionRepeatTimes || 1;
	let separator = options.separator || "+";
	let additionSeparator = options.additionSeparator || "|";
	let general = [];
	let add = [];

	for (let i = 0; i < additionRepeatTimes; i++) {
		if (addition) {
			add.push(addition);
		} else {
			add = "";
		}
	}
	if (addition !== "undefined") {
		add = add.join(additionSeparator);
	} else {
		console.log("nope");
		add = "";
	}

	console.log("add:", add);

	for (let i = 0; i < repeatTimes; i++) {
		general.push(str + add);
	}
	console.log("general", general);
	console.log("final", general.join(separator));
	return general.join(separator);
}

module.exports = {
	repeater,
};
