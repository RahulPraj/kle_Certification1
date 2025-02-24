
// function Details(){
//     this.name = "rahul";
//     this.age = 25;
//     this.address = "New Delhi"
// }

// let user = new Details();
// console.log(user.name);

//custom constructor fucntion

function Details(naam,umar,isthan){
    this.name = naam;
    this.age =umar ;
    this.address = isthan;
    this.description = function(){
        return(`my name is ${this.name} , my age is ${this.age}`)
    }
}

let user = new Details("rahul",25,"New Delhi");
let user1 = new Details("priya",23,"nipani");
// console.log(user);
console.log(user.description());
// console.log(user1);
console.log(user1.description());