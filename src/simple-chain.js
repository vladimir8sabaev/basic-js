const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
	str: [],
	getLength() {
		return this.str.length;
	},
	addLink(value) {
		this.str.push(`( ${value} )`);
		return this;
	},
	removeLink(position) {
		if (
			position < 1 ||
			typeof position !== "number" ||
			position > this.str.length
		) {
			this.str = [];
			throw new Error("You can't remove incorrect link!");
		}
		this.str.splice(position - 1, 1);
		return this;
	},
	reverseChain() {
		this.str = this.str.reverse();
		return this;
	},
	finishChain() {
		const finalStr = structuredClone(this.str);
		this.str = [];
		return finalStr.join("~~");
	},
};

module.exports = {
	chainMaker,
};
