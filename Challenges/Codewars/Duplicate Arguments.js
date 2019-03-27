/*
Complete the solution so that it returns true if it contains 
any duplicate argument values. Any number of arguments may be 
passed into the function.

The array values passed in will only be strings or numbers. 
The only valid return values are true and false.

*/

function solution() {
	let arr = Object.keys(arguments).map((i) => arguments[i]);
	for (let x = 0; x < arr.length; x++) {
		for (let y = 0; y < arr.length; y++) {
			if (x !== y && arr[x] === arr[y]) {
				return true;
			}
		}
	}
	return false;
}
