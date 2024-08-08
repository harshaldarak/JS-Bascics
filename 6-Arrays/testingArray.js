const numbers=[1,-1,2,3];

const allPositive=numbers.every(values => values>=0);
console.log(allPositive);

const atLeastOnePositive=numbers.some(values=> values>=0);
console.log(atLeastOnePositive);