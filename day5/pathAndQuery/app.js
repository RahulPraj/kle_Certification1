const express = require('express');
const app = express();

// app.get('/cat',(req,res)=>{
//     res.send('<h1>Meow</h1>');
// })

// app.get('/lion',(req,res)=>{
//     res.send('<h1>Roar</h1>');
// })

// app.get('/dog',(req,res)=>{
//     res.send('<h1>woof</h1>');
// })

app.get('/animal/:anything',(req,res)=>{
    console.log(req.params);
    console.log(req.params.anything);
    const {anything} =req.params;
    res.send(`<h1>I am ${anything}</h1>`);
})

app.get('/search',(req,res)=>{
    console.log(req.query);
    console.log(req.query.name);
    const {name} = req.query;
    res.send(`<h1> my query is ${name}</h1>`);
})

app.listen(8080,()=>{
    console.log('server is connecgted to port 8080');
})

