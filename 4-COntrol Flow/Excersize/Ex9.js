const marks=[81,81,45];
console.log(calculateGrade(marks));
function calculateGrade(marks){
    const avrage=calaculateAvg(marks)
    if(avrage<60)
    console.log("Congrats you are failed");
    if(avrage<70) return "D";
    if(avrage<80) return "C";
    if(avrage<90) return "B";
    return "A";

}

function calaculateAvg(array){
    let sum=0;
    for(let value of array){
            sum+=value;
            return sum / array.length;
     
}}