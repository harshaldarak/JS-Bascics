// //performing function
// function greet (firstName ,lastName){ //parameter
//     console.log('Hello '+ firstName +' '+lastName);
// } 
// greet('Harshal', 'Darak');//Argument

const { isPromise } = require("util/types");

//const { off } = require("process");

// //calculating value
// function square (num){
//     return num*num
// }

//  console.log(square(2));
// function showNumbers(limit){
//     for(let i=0;i<=limit;i++){
//         if (i===0){
//             console.log(i);
//         }
//         else if(i%2) console.log(i, 'ODD');
//         else
//         console.log(i,"EVEN");
//     }
// }
// showNumbers(10)
// const array=['0',{},'false',0,1,'']
// function countTruthy(array){
//     let count=0
//     for(values of array){
//         if(values)
//             count++
//     }
//     console.log(count);

// }
// countTruthy(array)

// const movie={
//     title:'a',
//     releseYear:2024,
//     rating:4.5,
//     director:'hd'
// }
// showProperties(movie)
// function showProperties(obj){
//     for(let key in movie)
//         if(typeof movie[key]==='string')
//             console.log(key,movie[key]);
// }
// console.log(sum(10));
// function sum(limit){
//     let sum=0;
//     for(let i=0;i<=limit;i++){
//         if((i%3===0)||(i%5===0))
//             sum+=i
//     }
//     return sum
    
// }

// const marks=[80,90,70]

// console.log(calCulateGrades(marks));

// function calCulateGrades(marks){
//     const avg= calCulateAvg(marks)
//     if(avg<60) return 'f'
//     if(avg<70) return 'D'
//     if(avg<80) return 'C'
//     if(avg<90) return 'B'
//     return 'A'
// }
// function calCulateAvg(array){
//     let sum=0
//     for(let value of array)
//         sum+=value //sum=sum +marks
//     return sum/array.length
    
// }

// const marks = [50, 60, 70];

// function calculateGrade(marks) {
//     const avg = calCulateAvg(marks);
//     if (avg < 60) return 'F';
//     if (avg < 70) return 'D';
//     if (avg < 80) return 'C';
//     if (avg < 90) return 'B';
//     return 'A';
// }
// function calCulateAvg(array) {
//     let sum = 0;
//     for (let value of array)  
//         sum += value;
//     return sum / array.length;
// }
// console.log(calculateGrade(marks));

//Printing *

// function showStarts(rows){
//     for(let row=1;row<=rows;row++){
//         pattern=''
//         for(let col=0;col<row;col++){
//             pattern+='*'
//         }
//         console.log(pattern);
//     }
// }
// showStarts(6)
function showPrime(limit){
    for(let number=2;number<=limit;number++)
        if(isPrime(number))console.log(number);
    }
function isPrime(number){
    
    for(let factor=2;factor<number;factor++)
        if(number%factor===0)
           return false
    return true
    }

showPrime(10);

