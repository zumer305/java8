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

// another
let gpa=array.map((el)=>{ return el.rollno/10;

});
console.log(gpa);


// filter new array form but array ha usmy sa even filter ho ka new array me
let no=[2,3,4,5,6,7,8,9];
let a=no.filter((no)=>{ return no%2==0;});
console.log(a);


// every method -----AND operator
console.log([2,4].every((el)=>(el%2==0)));  //TRUE
console.log([1,2,4].every((el)=>(el%2==0)));  //FALSE



// some method -----OR operator
console.log([2,4].some((el)=>(el%2==0)));  //TRUE
console.log([1,2,4].some((el)=>(el%2==0)));  //FALSE




// reduce method
console.log([1,2,4].reduce((res,el)=>(res+el)));  //FALSE


// reduce with max
console.log([1,2,4].reduce((max,el)=>{if(max<el)return el;
    else return max;
}));  



// practice qs
console.log([10,20,30].every((el)=>(el%10==0)));
console.log([20,4].every((el)=>(el%10==0)));


// reduce with min
console.log([1,2,4].reduce((min,el)=>{if(min>el)return el;
    else return min;
}));  


// default value set in parameter
function summ(a,b=4){
    return a+b;
}
console.log(summ(1,3));
console.log(summ(1));


// default value set in parameter
function sum(a=4,b){
    return a+b;
}
console.log(sum(1,3));
console.log(sum(1));  //undefine bcz order in parameter matters


// spread ... single sa multiple
console.log(..."zumer niaz");


// array spread
let b=[1,2,3,4,5];
let c=[4,5];
console.log(...b,...c);


// object with spread
const da={
    name:"zumer",
    marks:44,


};
const pa={...da,id:123};
console.log(pa);

// indexes
let r=[1,2,3,4,5];
let obj={...r};
console.log(obj);



// rest ...(multiple sa single)
function ad(...args){
    for(let i=0;i<args.length;i++){
        console.log("You gave value : ",args[i]);
    }
}
console.log(ad(1));
console.log(ad(2));




function plus(...args){
    return args.reduce((sum,el)=>sum+el);
}
console.log(plus(2,2,2,2));




// destructuring 
let names=["zumer","niaz","alishba"];
// let first=names[0];
// let second=names[1];
// let third=names[2];
let [first,...others]=names;
console.log(first);
console.log(others); //baki sab




// object destructure
let s1={
    name:"zumer",
    marks:22,
};
const {marks:mark,name:nam}=s1;
console.log(mark); //right wala likhna jo new variable bnaya

















