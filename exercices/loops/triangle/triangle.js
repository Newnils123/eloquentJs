function print_triangle(max){
	let triangle = `` 
	for (let i = 0; i <= max ;i ++) {
		triangle += `#`.repeat(i) + `\n`;
	}
	return triangle;
}

console.log(print_triangle(7));

