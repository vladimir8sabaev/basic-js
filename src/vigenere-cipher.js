const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */

function isLetter(letter) {
	return letter.charCodeAt() > 64 && letter.charCodeAt() < 91 ? true : false;
}

function mod(n, m) {
	return ((n % m) + m) % m;
}

class VigenereCipheringMachine {
	constructor(forward = true) {
		this.forward = forward;
	}
	encrypt(str, key) {
		if (str === undefined || key === undefined) {
			throw new Error("Incorrect arguments!");
		}
		str = str.toUpperCase();
		key = key.toUpperCase();
		let res = "";
		let j = 0;
		for (let i = 0; i < str.length; i++) {
			const shift = 65;
			if (isLetter(str[i])) {
				let letterNumber = str[i].charCodeAt() - shift;
				let keyNumber = key[j % key.length].charCodeAt() - shift;
				let letter = mod(letterNumber + keyNumber, 26);
				res += String.fromCharCode(letter + shift);
				j++;
			} else {
				res += str[i];
			}
		}
		return !this.forward ? res.split("").reverse().join("") : res;
	}
	decrypt(str, key) {
		if (str === undefined || key === undefined) {
			throw new Error("Incorrect arguments!");
		}
		str = str.toUpperCase();
		key = key.toUpperCase();
		let res = "";
		let j = 0;
		for (let i = 0; i < str.length; i++) {
			const shift = 65;
			if (isLetter(str[i])) {
				let letterNumber = str[i].charCodeAt() - shift;
				let keyNumber = key[j % key.length].charCodeAt() - shift;
				let letter = mod(letterNumber - keyNumber, 26);
				res += String.fromCharCode(letter + shift);
				j++;
			} else {
				res += str[i];
			}
		}
		return !this.forward ? res.split("").reverse().join("") : res;
	}
}

module.exports = {
	VigenereCipheringMachine,
};
