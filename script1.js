
// practice questions on foreach map filter reduce sort

// Square the value of every element in the array. Presume that you will only get numbers in the input array.

let num = [1, 2, 3, 4, 5];

let result = num.map((e) => e * e);

console.log(result);

// Sum of every positive element

num=[1, -4, 12, 0, -3, 29, -150];
let sum=0;
result=num.filter((e)=>{
    if(e>0){
        sum+=e;
    }
});

console.log(sum);