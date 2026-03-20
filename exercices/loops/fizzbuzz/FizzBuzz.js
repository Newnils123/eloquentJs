function FizzBuzz(max) {
	let toDisplay = ``;
	for (let i = 1; i <= max; i++) {
		let toDisplay = ``;
		if (i % 3 === 0) {
			toDisplay += `Fizz`;
		}
		if (i % 5 === 0) {
			toDisplay += `Buzz`;
		}
		console.log(toDisplay || i);
	}
}
console.log(FizzBuzz(100));
