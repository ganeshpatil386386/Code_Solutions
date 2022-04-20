function randomNumberGeneratorInRange(rangeStart, rangeEnd) {
	// write your solution here
   
	 return Math.random() * (rangeStart - rangeEnd) + rangeEnd;

}

console.log(`My random number: ${randomNumberGeneratorInRange(5, 100)}`)
