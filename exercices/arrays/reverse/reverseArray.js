function reverseArray(given) {
	let output = [];
	for (let i = given.length - 1; i >= 0; i--) {
		output.push(given[i]);
	}
	return output;
}


function reverseArrayInPlace(array) {
	for (let i = 0; i < Math.floor(array.length / 2); i++) {
		let old = array[i];
		array[i] = array[array.length - 1 - i];
		array[array.length - 1 - i] = old;
	}
	return array
}
