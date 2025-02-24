//function
//way1
function sum(a,b){
    let sum = a+b;
    return(`my sum is ${sum}`);
}
// console.log(sum(2,4));


//way2 -> first class function
let ans = function (){
    return ("i ma print ka function");
}
// console.log(print());
console.log(ans());