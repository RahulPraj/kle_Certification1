let fs = require('fs');

//perform CRUD Operation

let data = "hii today's weather is cool";

//task-1 create a file and write data into it
//way-1
// fs.writeFile('demo.txt',data,{
//     encoding:'utf-8'
// },(err)=>{
//     if(err) throw err;
//     console.log("file is created sucessfully");
// })t

//way-2
fs.writeFileSync('demo.txt',data,
    (err)=>{
            if(err) throw err;
            console.log("file is created sucessfully");
        });


 //read a file
 let fileread = fs.readFileSync('demo.txt');
//  console.log(fileread.toString());

//to delete previous data from file
fs.truncateSync('demo.txt');


//UPDATE A FILE
fs.appendFileSync('demo.txt','\n I hope this weather will be same for next days')

//delete data
// fs.unlinkSync('demo.txt');