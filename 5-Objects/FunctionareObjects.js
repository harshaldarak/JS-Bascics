function Circle(radius){
    this.radius=radius;
    this.draw=function(){
        console.log('draw');
    }
}
Circle.call({},1)
Circle.apply({},[1,2,3])

const circle=new Circle1(1);