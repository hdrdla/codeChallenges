/*
https://www.hackerrank.com/challenges/counting-valleys/problem
*/

function countingValleys(n, s) {
	let sum = 0;
	let valley = 0;
	let arr = s.split('');
	for (let i = 0; i < arr.length; i++) {
		if (sum === 0 && arr[i] === 'D') {
			valley++;
		}
		if (arr[i] === 'U') {
			sum++;
		}
		if (arr[i] === 'D') {
			sum--;
		}
	}
	return valley;
}
