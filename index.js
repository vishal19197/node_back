const express = require('express')
const http = require('http');

const app = express();
const conn = require('./confige/connection');

const port = process.env.port || 3000;


http.createServer((req,res) =>{
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.write("hello world");
    res.end()
}).listen(port,function(error){
    if (error) {
        console.log("somthing wnte wrong",error);
    } else{
        console.log("server listen on",port)
    } 
});

