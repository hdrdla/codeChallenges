/* 
Given two arrays a and b write a function comp(a, b) (compSame(a, b) in Clojure) 
that checks whether the two arrays have the "same" elements, 
with the same multiplicities. "Same" means, here, that the elements in b are 
the elements in a squared, regardless of the order.
*/

function comp(array1, array2) {
	let square = [];
	if (!array1 || !array2) {
		return false;
	}
	for (let i = 0; i < array1.length; i++) {
		square.push(Math.pow(array1[i], 2));
	}
	for (let j = 0; j < array2.length; j++) {
		if (!square.includes(array2[j])) {
			return false;
		} else {
			if (square.filter((val) => val === array2[j]).length !== array2.filter((val) => val === array2[j]).length) {
				return false;
			}
		}
	}
	return true;
}
