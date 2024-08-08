
const movie={
    mName:"Jhon wick",
    relaseYear:2023,
    rating:4.5,
    director:"Abc"
};  
function showProperties(obj){
for (let key in movie){
   if (typeof obj[key]==='string')
    console.log(key,obj[key]);
}
}
showProperties(movie);