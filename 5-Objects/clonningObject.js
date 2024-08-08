const circle={
    radius:1,
    draw:function(){
        console.log('draw');
    }
}

// const another={};
// for(let key in circle)
//     another[key]=circle[key]

//const another =Object.assign({},circle)

const another={... circle} //Spread operator
console.log(another);