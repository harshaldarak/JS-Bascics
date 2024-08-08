let numbers=[1,2,3,4,5,6,7];
let another=numbers;
// Solution 1
numbers=[]

//Solution 2
numbers.length=0;

//solution 3
//numbers.splice(0,numbers.length)
// while(numbers.length>0){
//     numbers.pop(); ///Noisy
// }
// console.log(numbers);
console.log(another);
