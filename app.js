let arr=[1,2,3,4,5];
// function
arr.forEach(function(el){
    console.log(el);
});
// arrow function
arr.forEach((el)=>{
    console.log(el);
});

// OR

// let print=function(el){
//     console.log(el);

// };
// arr.forEach(print);

let array=[
    {
name:"zumer",
rollno:88.1,
    },
    {
name:"zumer2",
rollno:89.2,
    },
    {
name:"zumer3",
rollno:90.5,
    },
];
array.forEach((student)=>{
console.log(student.rollno);
});


// map function(different new array)
let n=[6,7,8,9,10];
let d=n.map((v)=>{
    console.log(v);

});






