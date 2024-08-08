
//factory funtion
function factory(street,city,zipCode){
    return{
        street,
        city,
        zipCode

};}
let address=factory('a','b','c')
console.log(address);

function Address(street,city,zipCode){
    this.street=street,
    this.city=city,
    this.zipCode=zipCode
}
const constructor=new Address   ('x','y',123);
console.log(constructor);