/*
Check to see if a string has the same amount of 'x's and 'o's. 
The method must return a boolean and be case insensitive. 
The string can contain any char.
*/

function XO(str) {
	let numOhs = 0;
	let numExs = 0;
	for (let i = 0; i < str.length; i++) {
		if (str.charAt(i) === 'o' || str.charAt(i) === 'O') {
			numOhs += 1;
		}
		if (str.charAt(i) === 'x' || str.charAt(i) === 'X') {
			numExs += 1;
		}
	}
	if (numOhs === numExs) {
		return true;
	} else {
		return false;
	}
}
