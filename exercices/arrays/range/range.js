function range(start, end, step = start < end ? 1 : -1 ) {
	let chain = [];

	if (step > 0) {
		for (let i = start; i <= end; i += step) chain.push(i);
	} else {
		for (let i = start; i >= end; i += step) chain.push(i);
	}

	return chain;
}


function sum(given) {
	let sum = 0;
	for (let value of given) {
		sum += value
	}
	return sum;
}
