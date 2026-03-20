function chessboard(n = 8) {
	// returns a grid using n² default value is 8
	let board = ``;

	for (let row = 0; row < n; row++) {
		let line = ``;
		for (let col = 0; col < n; col++) {
			if ((row + col) % 2 === 0) {
				line += `#`; 
			} else {
				line += ` `;
			}
		}
		board += line + `\n`;
	}
	return board;
}
console.log(chessboard())
