// //Factory Function
// function createCircle(radius){
//     return{
//         radius,
//         draw(){
//             console.log("draw");
//         }
//     }
// }
// const circle1= createCircle(1);
// console.log(circle1);

// const circle2=createCircle(2);
// console.log(circle2);


//Factry functons are written using camel case notation oneTWeThree
//Constructor function are written using pascal notation OneTwoThree
function createCircle(radius){
    return{
        radius,
        draw(){
            console.log('draw');
        }
    };
}
const circle1=createCircle(9);
console.log(circle1);

const circle2=createCircle(18);
console.log(circle2);

