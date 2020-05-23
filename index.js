const express = require('express')
const http = require('http');
const bodyparser = require('body-parser');
const app = express();
const conn = require('./confige/connection');
global._response = require('./shared/response')

// const demodata = require('./controler/postControler');
//       demodata.getAllPostControler()
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

app.use((req, res, next) => {
    let origin = '*';

    if (req.headers['origin']) {
        origin = req.headers['origin'];
    }
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader('content-type', 'application/json');
    res.setHeader("Access-Control-Allow-Headers", "Application, RoleType, LanguageCode, Content-Type, Access-Control-Allow-Headers, Token, Timestamp, X-Requested-With, Authorization");
    // res.setHeader("Access-Control-Allow-Headers", "*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS , DELETE, PATCH');
    next();
});

const postRouter = require('./router/postRouter');
app.use('/api',postRouter);


const port = process.env.PORT || 3000;


// http.createServer((req,res) =>{
//     res.writeHead(200,{'Content-Type': 'text/html'});
//     res.end()
// }).listen(port,function(error){
//     if (error) {
//         console.log("somthing wnte wrong",error);
//     } else{
//         console.log("server listen on",port)
//     } 
// });

app.listen(port,() =>{
    console.log(`listening on ${port}`);
})

