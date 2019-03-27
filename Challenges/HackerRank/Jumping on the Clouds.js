/*
https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem
*/

function jumpingOnClouds(c) {
	let count = 0;
	for (let i = 0; i < c.length; i++) {
		if (c[i + 2] === 0) {
			i = [ i + 1 ];
			count++;
		} else if (c[i + 1] === 0) {
			count++;
		}
	}
	return count;
}
