/*
In this kata you are required to, given a string, 
replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

*/

function alphabetPosition(text) {
	let alpha = 'abcdefghijklmnopqrstuvwxyz'.split('');
	let array = [];
	newtext = text.toLowerCase().split('');
	for (let i = 0; i < newtext.length; i++) {
		for (let j = 0; j < alpha.length; j++) {
			if (alpha[j] === newtext[i]) {
				array.push(j + 1);
			}
		}
	}
	return array.toString().replace(/,/g, ' ');
}
