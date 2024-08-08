// const circle={
//     radius:x,
//     loction:{
//         x:1,
//         y:2
//     },
//     isVisible:true,

// const { constants } = require("zlib");

// }

// const circle1={
//     radius:2,
//     location:{
//         x:1,
//         y:2
//     },
//     draw:function(){
//         console.log('Draw');
//     },
//     move:function(){
//         console.log('Move');
//     }
// }
// console.log(circle1.location.x);
// circle1.move()

//________Factory Function___________
// function createCircle(radius){
//     return{
//         radius:radius,

//         draw(){
//             console.log('draw');
//         }
//     }
// }
// const circle=createCircle(1)
// console.log(circle);
//________Constructor Function_________

// function Circle(radius){
//     this.radius=radius
//     this.draw=function(){
//         console.log('draw');
//     }
// }
// const circle1=new Circle(1);
// console.log(Circle);

// function creatSquare(radius){
//     return{
//         radius,
//         draw(){
//             console.log('draw');
//         }
//     }
// }
// const sqaure=creatSquare(1);
// console.log(sqaure);

// function Square(sidelength){
//     this.sidelength=sidelength
//     this.draw=function(){
//         console.log('Square');
//     }
// }
// const square=new Square(10);
const circle={
    radius:1
};
circle.color='yellow';
circle.draw=function(){
    console.log('draw');
}
delete circle.color;
delete circle.draw
console.log(circle);