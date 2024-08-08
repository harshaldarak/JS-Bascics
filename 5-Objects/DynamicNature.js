// const circle={
//     radius:1,

// }
// circle.color='yellow'
// circle.draw=function (){
// circle.draw2=function(){

// }
// }

// delete circle.color
// delete circle.draw
// delete circle.draw2
// console.log(circle);

function circle(radius){
        return{
            radius,
            draw(){
                console.log('draw');
            }
        };
}
const myCircle=circle(3);
console.log(myCircle);

function Circle(radius){
    this.radius=radius
    this.draw=function(){
        console.log('draw');
    };
}
const MyCircle= new Circle(1)
console.log(MyCircle);
