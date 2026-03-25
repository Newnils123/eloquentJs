function countChar(a, b) {
	let total = 0;
	for (let i = 0; i < a.length; i++) {
		if (a[i] === b) {
			total ++;
		}
	}
	return total;
}

function countBs(string) {
	return countChar(string, 'B');
}
