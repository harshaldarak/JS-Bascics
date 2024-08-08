const address={
    street:'xyz',
    city:'ABC',
    zipCode:227745

}
function showAddress(address){
    for(let keys in address){
        console.log(keys,address[keys]);
    }
}
showAddress(address);