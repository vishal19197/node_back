const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/picbook', { 
    useNewUrlParser: true,
    useUnifiedTopology: true
 });

const db = mongoose.connection

db.once('open', () => console.log("conneced...!"));
db.on('error', (error) => console.log("connection error", error));