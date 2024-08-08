const courses=[
    {id:1, cName:'a'},
    {id:2, cName:'b'},
]
const course=courses.find(function(courses){
    return courses.cName==='a';
});
console.log(course);

const core =course.find(courses=> courses.cName==='a'
)
