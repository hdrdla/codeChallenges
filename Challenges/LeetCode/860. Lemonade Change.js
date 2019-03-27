/*
https://leetcode.com/problems/lemonade-change/
*/

var lemonadeChange = function(bills) {
	let five = 0;
	let ten = 0;
	for (let i = 0; i < bills.length; i++) {
		if (bills[i] === 5) {
			five++;
		} else if (bills[i] === 10) {
			if (five < 1) {
				return false;
			} else {
				five--;
				ten++;
			}
		} else {
			if (ten > 0 && five > 0) {
				ten--;
				five--;
			} else if (five > 2) {
				five = five - 3;
			} else {
				return false;
			}
		}
	}
	return true;
};
