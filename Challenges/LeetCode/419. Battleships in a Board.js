let countBattleships = function(board) {
	let count = 0;
	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board[i].length; j++) {
			let curr = board[i][j];
			if (curr === 'X') {
				count++;
				if (curr === board[i][j - 1]) {
					count--;
				}
				if (board[i - 1] !== undefined && curr === board[i - 1][j]) {
					count--;
				}
			}
		}
	}
	return count;
};
