
//cas-1

// function a(b){
//     console.log("i am inside function a");
//     b();
// }
// function b(){
//     console.log("i am insdie function b");
// }
// console.log(a(b));
// console.log(a(function b(){
//     console.log("i am insdie function b");
// }));

//case-2
function a(){
    console.log("i am inside function a");

    function b(){
        console.log("i am insdie function b");
    }

    return b;
   
}

let ans = a();
console.log(ans());