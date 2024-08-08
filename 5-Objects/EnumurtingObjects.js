// const circle={
//     radius:1,
//     draw:function(){
//         console.log('draw');
//     }
// }

// for(keys in circle){
//     console.log(keys,circle[keys]);
// }

const circle = {
  radius: 1,
  draw() {
    console.log("draw");
  },
};

// for(let key in circle)
//     console.log(key,circle[key]);

// for(let key of Object.keys)
//     console.log(key);
// for(let value of Object.entries)
//     console.log(value);
// const another=Object.assign({},circle)
// console.log(another);
// const another={...circle}

// const nameOfStu='jhon'
// const message=
// `Hi ${nameOfStu} ${9270677500}

// Thank you for particepetion
// `
// console.log(message);

// let now=new Date()

// date=new Date('Nov 19 2023 19:30')
// date1=new Date(2023,10,19.9,30);
// now.getDate()
// date.toDateString()
// date.toTimeString()
// date.toISOString()

// const address={
//     street:'ABC',
//     city:'XYZ',
//     zipCode:1234
// }

// function showAddress(address){
//     for(let key in address)
//         console.log(key,address[key]);
// }
// showAddress(address);

// function factory(street,city,zipCode){
//     return{
//         street,
//         city,
//         zipCode
//     }
// }
// const currentAddress=factory('A','z',123)
// console.log(currentAddress);

// function Constructor(street,city,zipCode){
//     this.street=street,
//     this.city=city,
//     this.zipCode=zipCode
// }
// const add2=new Constructor('B','y',999)
// console.log(add2);

// function Address(street,city,zipCode){
//     this.street=street,
//     this.city=city,
//     this.zipCode=zipCode
// }
// const add1=new Address('a','z',1008)
// const add2=new Address('a','z',1008)

// function areEqual(address1,address2){
//     return address1.street===address2.street&&
//     address1.city===address2.city&&
//     address1.zipCode===address2.zipCode
// }

// function areSame(add1,add2){
//     return add1===add2

// }

// console.log(areEqual(add1,add2));
// console.log(areSame(add1,add2));

const post = new Post("a", "b", "c");
console.log(pos);
function Post(title, body, author) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = 0;
  this.comments = [];
  this.isLive = false;
}
