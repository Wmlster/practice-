console.log("forEach , map , filter , reduce , sort => only works on array");

// foreach method
/*
let arr = [1, 2, 3, 4, 5];

console.log("forEach");

let callme = function (element, index, list) {
  console.log(element, index, list);
};

let result=arr.forEach(callme);

console.log("result is ",result);

// map method

let arr1 = [6, 7, 8, 9, 10];

console.log("map");

let callme1 = function (element, index, list) {
  //console.log(element, index, list);

  return element;
  
};

let result1=arr1.map(callme1);
console.log("result is ",result1);

// filter method
console.log("filter");

let arr2=[11,12,13,14,15];

let f1=function (element,index,list){
    //console.log(element, index, list);

    if(index%2==0)
        {
            return element;
        }
};

let result2=arr2.filter(f1);
console.log("result is ",result2);

// reduce method

console.log("reduce");

let reduce_arr=[1,2,3,4,5];

//let f2=function(prev,index,list){
//   console.log(prev, index, list);

//    return prev+index;
//};

//let reduce_result=reduce_arr.reduce(f2,110);
//console.log("result is ",reduce_result);
//

let f2=function(prev,element,index,list){
    console.log(prev,element, index, list);
    return prev+index;
};

let reduce_result=reduce_arr.reduce(f2);
console.log("result is ",reduce_result);

arr.reduce


// sort method

console.log("sort");

let v=[2,3,1,4,5];

// increasing order
let compare_in=function (a,b){
    if(a>b)  // (5,3)
      return a-b;
    return a-b;   // (3,5)
};

let sort_v_in=v.sort(compare_in);

console.log(sort_v_in);

// decreasing order
let compare_de=function (a,b){
    if(a>b)  // (5,3)
      return b-a;
    return b-a;   // (3,5)
};

let sort_v_de=v.sort(compare_de);

console.log(sort_v_de);
*/

//console.log(v);
/*
// push pop => works on the last on the array

// gives total length after pushing in the array;
let pushing = v.push(10);

console.log(pushing);

console.log(v);

v[1] = 1;

console.log(v);

let poping = v.pop();

// pop() returns the pop element
console.log(poping);

console.log(v);

v.push(12, 13, 15); // (1,2,3,4,5,12,13,15)

console.log(v);

// shift unshift

let unshifting = v.unshift(5); // push element in front of array

console.log(unshifting); // returns total length

console.log(v);

let shifting = v.shift(); // pops front element from array

console.log(shifting); // returns pops element

console.log(v);
*/
// splice slice

v = [1, 2, 3, 4, 5];

//console.log(v);
