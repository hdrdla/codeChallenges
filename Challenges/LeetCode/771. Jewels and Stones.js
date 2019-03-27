/*
https://leetcode.com/problems/jewels-and-stones/
*/

var numJewelsInStones = function(J, S) {
	let count = 0;
	for (let x = 0; x < S.length; x++) {
		for (let y = 0; y < J.length; y++)
			if (S[x].includes(J[y])) {
				count++;
			}
	}
	return count;
};
