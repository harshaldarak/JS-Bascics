//let first=[1,2,3];
let first=[{id:1}]
let seacond=[4,5,6];
first[0].id=10;
const combined =first.concat(seacond);
console.log(combined);

const slice =combined.slice(2,4);
console.log(slice);

//using spred operator

const combo=[...first,'a',...seacond,'b'];
console.log(combo);

const copy =[...combo];