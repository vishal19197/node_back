const mongo = require('mongodb').MongoClient

const url = `mongodb://localhost:27017`

mongo.connect(url,{
    useNewUrlParser:true,
    useUnifiedTopology:true
},(err, client) =>{
    if (err) {
        console.log("connection error =>",err);
        return
    }
    const db = client.db('employee')
    console.log("connected...!") 
})