const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
	let columns = matrix[0].length;
	matrix = matrix.flat(Infinity);
	for (let i = 0; i < matrix.length - columns; i++) {
		if (matrix[i] == 0) {
			matrix[i + columns] = 0;
		}
	}
	return matrix.reduce(function (currentSum, currentNumber) {
		return currentSum + currentNumber;
	}, 0);
}

module.exports = {
	getMatrixElementsSum,
};
