function fizzBuzz(input) {
	if(typeof input !== 'number') 
		return NaN;

	if ((input % 3 === 0) && (input % 5 === 0)) 
		return 'FizzBuzz';

	if (input % 3 === 0) 
		return 'Fizz';

	if (input % 5 === 0) 
		return 'Buzz';

	return input;
}

console.log(fizzBuzz('Not a Number'));
console.log(fizzBuzz(6));
console.log(fizzBuzz(10));
console.log(fizzBuzz(30));
console.log(fizzBuzz(17));