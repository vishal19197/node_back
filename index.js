const express = require('express')

const app = express();

const port = 3000;

const conn = require('./confige/connection');

app.listen(port,() => console.log(`App Listen On Port ${port}`));

