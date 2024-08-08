// function checkspeed(speed){
//     const speedlimit=70;
//     const pointPerKM=5;

//     if (speed<speedlimit+pointPerKM)
//         return 'ok';

//     const points=Math.floor((speed-speedlimit)/pointPerKM);
//     return (points>=12)?"License Suspended":points;
// }

// let road =checkspeed(85);
// console.log(road);



// function checkspedd(speed){
//     const speedlimit=70;
//     const pointPerKM=5;
//     if(speed<speedlimit+pointPerKM)
//         return 'ok'

//     let point =Math.floor((speed-speedlimit)/pointPerKM)
//         if(point>=12){
//             console.log('License Suspended');
//         }
//         else
//         console.log("point:",point);   
// }
// checkspedd(135);

// showNumbers(10);
// function showNumbers(limit){
//     for(let i=0;i<=10;i++){
//         if(i%2===0){
//             console.log(i,"EVEN");
//         }
//         else console.log(i,"ODD");
//         const message=(i%2===0)?"EVEN":"ODD";
//     }
// }

// const arr=[1,2,4,0,NaN,""]
// console.log(countTruthy(arr));
// function countTruthy(arr){
//   let count =0;
//   for(let values in arr)
// if(values)
//   count++
//   return count;
// }

// let movies={
//     tiltel:"Krishna",
//     releseYear:2027,
//     director:"Harshal"
// }

// function showProperties(obj){
// for(let key in obj)
//     if(typeof obj[key]==='string')
//         console.log(key,obj[key]);
// }
// showProperties(movies)

// console.log(sum(10));
// function sum(limit){
//     let sum=0

// for(let i=0;i<=limit;i++)
//     if(i%3===0 || i%5===0)
//         sum+=i
//     return sum;
// }

// const marks=[80,85,90]
// console.log(calculateGrade(marks));
// function calculateGrade(arr){
//    const avarage=calculateAvg(marks)

//         if(arr<60) return 'F'
//         if(arr<70) return 'D'
//         if(arr<80) return 'C'
//         if(arr<90) return 'B'
//         return "A"
//     }

//     function calculateAvg(arr){
//     let sum=0;
//     for(let value of arr){
//     sum+=arr
//     return sum / arr.length;
//     }}
// showRows(5)
// function showRows(limit){
// for(let row=1;row<=limit;row++){
//     let pattern ='';
//     for(let i=0;j<row;i++){
//         pattern +='*';
//     console.log(pattern);
//     }
// }
// }

// function star(row){
//     for(let i=1;i<=row;i++){
//     let pattern="";
//         for(let col=0;col<i;col++){
//         pattern+="*"
    
//         }
//         console.log(pattern);
//     }
// }
// star(4);

// function r(limit){
//     for(let i=1;i<=limit;i++){
//     let pattern='';
//         for(let col=0;col<=i;col++){
//             pattern+='x';
//         }
//         console.log(pattern);
//     }
// }
// r(9);
// showPrimeNum(10);
// function showPrimeNum(limit){
//     for(let number=2;number<=limit;number++){
//         let isprime=true;
//         for(let factor=2;factor<number;factor++ ){
//             if(number%factor===0){
//                 isprime=false;
//                 break;
//             }
//         }
//        if (isprime) console.log(number);
//     }
// }

prime(5);
function prime(limit){
    for(let number=2;number<=limit;number++){
        let isprime=true
    for(let factor=2;factor<number;factor++){
        if(number%factor===0){
            isprime =false
            break
        }
    }
    if(isprime) console.log(number);
}
}