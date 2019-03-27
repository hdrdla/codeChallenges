/*
Find the first character that repeats in a String and return that character.
*/

function firstDup(s) {
	// your solution here
	for (let i = 0; i < s.length; i++) {
		for (let j = 0; j < s.length; j++) {
			if (i !== j && s[i] === s[j]) {
				return s[j];
			}
		}
	}
	return;
}
