//read write execute
// 00000100 -- 00000100
// 00000101 -- 00000010
// 00000111 -- 00000001

const readPermission= 4;
const writePermission= 4;
const executePermission=1;

let myPermission  =0;
myPermission =  myPermission | readPermission | writePermission
console.log(myPermission);