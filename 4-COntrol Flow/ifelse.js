//Hour
// If hour is between 6am to 12 pm :good morning
// IF it id between 12 pm to 6pm :Good afternoon 
//otherwise good evening 

//structure of if else if else
let hour =12
if(hour>=6 && hour<12)
    console.log("Good Morning")
else if(hour>=12 &&  hour<18)
    console.log("Good Afternoon")
else 
 console.log("Invalid time");