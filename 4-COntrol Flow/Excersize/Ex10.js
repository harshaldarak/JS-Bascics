
function showStars(rows) {
	for (let row = 0; row < rows; row++){
		let pattern = '';
		for (let col = 0; col <=row; col++) {
			pattern += '*';
		}
		console.log(pattern);
	}
}

showStars(4);