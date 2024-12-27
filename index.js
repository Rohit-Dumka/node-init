const express = require("express");
const app = express();
const port = 3000;

const test = {
    "name": "rohit",
    "age": 24
}

app.get("/",(req,res)=>{
    res.send("hello.......world!");
})
app.get("/about",(req,res)=>{
    res.send("I am rohit dumka");
})
app.get("/email",(req,res)=>{
    res.send("rohitdumka@gmail.com");
})
app.get("/temp",(req,res)=>{
    res.json(test);
})

app.listen(port,()=>{
    console.log("server is running on port 3000");
})