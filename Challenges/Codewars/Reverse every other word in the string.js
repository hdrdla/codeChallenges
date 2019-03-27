/*
Reverse every other word in a given string, then return the string. 
Throw away any leading or trailing whitespace, while ensuring there 
is exactly one space between each word. Punctuation marks should be 
treated as if they are apart of the word in this kata.
*/

function reverse(str) {
	let newnewArray = [];
	let newArray = str.split(' ');
	for (let i = 0; i < newArray.length; i++) {
		if (i % 2 === 1) {
			newnewArray.push(newArray[i].split('').reverse().join(''));
		} else {
			newnewArray.push(newArray[i]);
		}
	}
	let newString = newnewArray.join(' ').trim();
	return newString;
}
