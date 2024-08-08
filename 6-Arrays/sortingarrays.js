// const numbers=[2,3,1];
// numbers.sort();
// console.log(numbers);

// numbers.reverse();
// console.log(numbers);

const courses=[
   { id:1, Name:'Node.js'},
    {id:2, Name:'javaScript'},
]
courses.sort(function(a,b){
    //a<b  =>-1
    //a>b   =>1
    //a===b =>0
    const nameA=a.Name.toUpperCase();
    const nameB=b.Name.toUpperCase();
    if(nameA<nameB)return-1;
    if(nameA>nameB)return 1;
    return 0;
})
console.log(courses);