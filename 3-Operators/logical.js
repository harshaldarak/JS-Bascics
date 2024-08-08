//Logical and (&&)
//Returns true if both operneds are true

//console.log(true && false);

// let highInCome =true;
// let goodCreditScorer = true;
// let elegibleForLoan = highInCome && goodCreditScorer;
// console.log(elegibleForLoan);

//Logical OR (||)
//Returns true if one of operneds is true

let highInCome =true;
let goodCreditScorer = false;
let elegibleForLoan = highInCome || goodCreditScorer;
console.log(elegibleForLoan);

//not (!)

    let applicationRefused = !elegibleForLoan
    console.log(applicationRefused);